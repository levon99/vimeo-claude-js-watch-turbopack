{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
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
    _v25 = _v25,
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
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = {
      [`@media (min-width: ${_v38.bokehTheme.breakpoints.lg})`]: {
        "&:hover": {
          backgroundColor: "fill-component",
          border: "1px solid",
          borderColor: "input-stroke"
        }
      }
    },
    _v54 = {
      "&:hover": {
        "& svg path": {
          fill: "var(--vimeo-colors-text-primary)"
        },
        "& p": {
          color: "var(--vimeo-colors-text-primary)"
        }
      }
    };
  function _v55({
    icon: _v0,
    children: _v1,
    editable: _v2,
    addButton: _v3,
    onClick: _v4,
    as: _v5
  }) {
    return (0, _v6.jsxs)(_v33.Flex, {
      as: _v5,
      gap: "sm",
      h: "md",
      mt: "px",
      px: "xs",
      minW: 0,
      borderRadius: "md",
      border: "1px solid transparent",
      onClick: _v4,
      flex: _v2 ? {
        lg: 1
      } : void 0,
      cursor: _v2 ? "text" : _v3 ? "pointer" : void 0,
      transition: _v2 ? "all 120ms ease-in-out 0s" : void 0,
      sx: _v2 ? _v53 : _v3 ? _v54 : void 0,
      children: [_v0 && (0, _v6.jsx)(_v33.Flex, {
        w: "xs",
        flexShrink: 0,
        align: "center",
        justify: "center",
        children: _v0
      }), (0, _v6.jsx)(_v33.Flex, {
        flex: 1,
        minW: 0,
        alignItems: "center",
        children: _v1
      })]
    });
  }
  function _v56({
    onClick: _v0,
    buttonText: _v1 = "Add"
  }) {
    return (0, _v6.jsx)(_v55, {
      addButton: !0,
      onClick: _v0,
      icon: (0, _v6.jsx)(_v33.Flex, {
        boxSize: "xs",
        borderRadius: "xs",
        bg: "fill-component",
        align: "center",
        justify: "center",
        children: (0, _v6.jsx)(_v52.PlusSmall, {
          boxSize: 16,
          color: "text-tertiary"
        })
      }),
      children: (0, _v6.jsx)(_v45.Paragraph, {
        size: "md",
        color: "text-secondary",
        children: _v1
      })
    });
  }
  var _v57 = _v0.i(0);
  function _v58({
    onClick: _v0,
    inlineMargin: _v1
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      display: {
        base: "inline-block",
        lg: "none"
      },
      verticalAlign: "text-bottom",
      cursor: "pointer",
      marginInlineStart: _v1 ? (0, _v27.rem)(6) : void 0,
      onClick: _v0,
      children: (0, _v6.jsx)(_v57.EditPencil, {
        verticalAlign: "text-bottom",
        color: "gray.300",
        boxSize: 20
      })
    });
  }
  let _v59 = _v0 => {
      let _v1 = _v0 && _v0.match(/\d+$/);
      return _v1 ? parseInt(_v1[0], 10) : -1;
    },
    _v60 = (_v0, _v1, _v2 = !0) => {
      (_v0.keyCode === _v49.KeyCodes.ENTER || _v0.keyCode === _v49.KeyCodes.SPACE) && (_v1(), _v2 && _v0.preventDefault());
    },
    _v61 = (_v0, _v1) => {
      _v0.keyCode === _v49.KeyCodes.ESC && (_v1(), _v0.preventDefault());
    };
  function _v62(_v0, _v1, _v2) {
    let _v3 = [];
    for (let _v0 = 0; _v0 < _v0.length; _v0 += _v2) _v3.push(_v0.slice(_v0, _v0 + _v2));
    return _v1.map((_v0, _v1) => _v0 ? {
      ..._v0,
      items: _v3[_v1]
    } : _v0).filter(_v0 => !!_v0 && null != _v0.items);
  }
  let _v63 = (_v0, _v1) => {
      Array.from(_v0.keys()).filter(_v0 => _v1.test(_v0)).forEach(_v0 => _v0.delete(_v0));
    },
    _v64 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v2.substring(1);
      _v3?.purge && _v63(_v0, RegExp(`^${_v4}/videos`));
      let _v5 = RegExp(`^\\$inf\\$${_v4}/videos`),
        _v6 = Array.from(_v0.keys()).filter(_v0 => _v5.test(_v0));
      return 0 === _v6.length ? Promise.resolve() : Promise.all(_v6.map(_v0 => _v1(_v0)));
    };
  function _v65(_v0) {
    return (_v0 || []).reduce((_v0, _v1) => _v1 ? _v0.concat(_v1.items) : _v0, []).filter(_v0 => null != _v0);
  }
  function _v66(_v0) {
    let _v1 = null != _v0 && _v0.length > 0 ? _v0[_v0.length - 1] : null;
    return _v1 && _v1.paging && null !== _v1.paging.next;
  }
  function _v67(_v0) {
    let {
        value: _v1,
        isDesktopView: _v2
      } = _v0,
      {
        editMode: _v3
      } = (0, _v16.useContext)(_v50.default);
    return _v3 ? (0, _v6.jsx)(_v70, {
      ..._v0
    }) : (0, _v6.jsx)(_v71, {
      value: _v1,
      isDesktopView: _v2
    });
  }
  let _v68 = _v16.useLayoutEffect,
    _v69 = {
      backgroundColor: "fill-component",
      borderColor: "input-stroke",
      maxHeight: (0, _v47.rem)(140),
      overflowY: "auto"
    };
  function _v70({
    maxLength: _v0 = _v49.ABOUT_MAX_CHAR_COUNT,
    placeholder: _v1 = _v51.default.TellPeopleAboutYourself,
    onUpdate: _v2,
    value: _v3 = "",
    isDesktopView: _v4
  }) {
    let _v5 = _v3 ?? "",
      {
        userId: _v6
      } = (0, _v16.useContext)(_v50.default),
      {
        trackUserProfileEditFieldClicked: _v7
      } = (0, _v24.useProfileTracking)(),
      [_v8, _v9] = (0, _v16.useState)(!1),
      [_v10, _v11] = (0, _v16.useState)(_v5 || ""),
      _v12 = () => {
        _v7({
          userProfilePageUserId: String(_v6),
          userProfileEditField: "add_bio"
        }), _v9(!0);
      },
      _v13 = (0, _v16.useCallback)(_v0 => {
        _v0 && "function" == typeof _v0.setSelectionRange && _v0.setSelectionRange(_v5.length, _v5.length);
      }, [_v5]);
    return (0, _v6.jsx)(_v31.Box, {
      _hover: {
        outline: "none"
      },
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v8 || _v0.target !== _v0.currentTarget || _v60(_v0, _v12);
      },
      children: _v8 ? (0, _v6.jsxs)(_v31.Box, {
        position: "relative",
        children: [(0, _v6.jsx)(_v46.Textarea, {
          autoFocus: !0,
          ref: _v13,
          defaultValue: _v10,
          maxLength: _v0,
          onKeyDown: _v0 => {
            _v0.keyCode === _v49.KeyCodes.ESC && (_v11(_v5), _v9(!1));
          },
          placeholder: _v1,
          onBlur: () => {
            _v10.trim() || _v5 ? _v5 !== _v10 && _v2({
              bio: _v10
            }) : _v11(""), _v9(!1);
          },
          onChange: _v0 => _v11(_v0.target.value),
          mt: "sm",
          minH: (0, _v47.rem)(96)
        }), (0, _v6.jsx)(_v31.Box, {
          position: "absolute",
          top: (0, _v47.rem)(10),
          right: (0, _v47.rem)(6),
          onMouseDown: _v0 => _v0.preventDefault(),
          children: (0, _v6.jsx)(_v44.IconButton, {
            variant: "tertiary",
            icon: (0, _v6.jsx)(_v37.CloseX, {}),
            onClick: () => {
              _v11(_v5), _v9(!1);
            },
            "aria-label": _v51.default.Dismiss,
            size: "xs"
          })
        }), (0, _v6.jsxs)(_v45.Paragraph, {
          size: "xs",
          textAlign: "right",
          color: "text-tertiary",
          children: [_v10.length, "/", _v0, " ", 1 === _v10.length ? _v51.default.Character : _v51.default.Characters]
        })]
      }) : _v10.length ? (0, _v6.jsxs)(_v31.Box, {
        display: {
          base: "flex",
          lg: "block"
        },
        alignItems: "flex-end",
        children: [(0, _v6.jsx)(_v73, {
          text: _v10,
          isDesktopView: _v4,
          onClick: _v12,
          editMode: !0
        }, _v5), (0, _v6.jsx)(_v58, {
          inlineMargin: !0,
          onClick: _v12
        })]
      }) : (0, _v6.jsx)(_v56, {
        buttonText: _v51.default.AddBio,
        onClick: _v12
      })
    });
  }
  function _v71({
    value: _v0,
    isDesktopView: _v1
  }) {
    return _v0 ? (0, _v6.jsx)(_v31.Box, {
      _hover: {
        outline: "none"
      },
      children: (0, _v6.jsx)(_v73, {
        text: _v0,
        isDesktopView: _v1
      }, _v0)
    }) : null;
  }
  function _v72({
    editMode: _v0,
    isExpanded: _v1,
    children: _v2,
    onClick: _v3,
    onMouseEnter: _v4,
    onMouseLeave: _v5
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      onClick: _v3,
      onMouseEnter: _v4,
      onMouseLeave: _v5,
      fontSize: (0, _v47.rem)(14),
      overflowWrap: "break-word",
      border: "1px solid transparent",
      borderRadius: "md",
      px: "xs",
      py: {
        base: 0,
        lg: "sm"
      },
      display: "block",
      flex: _v0 ? {
        base: 1,
        lg: "unset"
      } : void 0,
      minW: _v0 ? {
        base: 0,
        lg: "unset"
      } : void 0,
      maxH: _v0 && !_v1 ? (0, _v47.rem)(100) : void 0,
      transition: _v0 ? "max-height 0.3s ease-in, background-color 120ms ease-in-out 0s, border 120ms ease-in-out 0s" : void 0,
      sx: _v0 ? {
        [`@media (min-width: ${_v38.bokehTheme.breakpoints.lg})`]: {
          "&:hover": _v69
        }
      } : void 0,
      children: _v2
    });
  }
  function _v73({
    text: _v0,
    isDesktopView: _v1,
    onClick: _v2,
    editMode: _v3
  }) {
    let [_v4, _v5] = (0, _v16.useState)(!1),
      {
        containerRef: _v6,
        isOverflowing: _v7
      } = function (_v0, _v1) {
        let _v2 = (0, _v16.useRef)(null),
          [_v3, _v4] = (0, _v16.useState)(null);
        return _v68(() => {
          if (_v1) return;
          let _v0 = _v2.current;
          if (!_v0) return;
          let _v1 = !0,
            _v2 = () => {
              _v1 && _v4(_v0.scrollHeight > _v0.clientHeight + 2);
            };
          _v2();
          let _v3 = new ResizeObserver(_v2);
          return _v3.observe(_v0), document.fonts?.ready.then(_v2), () => {
            _v1 = !1, _v3.disconnect();
          };
        }, [_v0, _v1]), {
          containerRef: _v2,
          isOverflowing: _v3
        };
      }(_v0, _v4),
      _v8 = (0, _v16.useId)(),
      _v9 = (0, _v16.useRef)(!1),
      _v10 = !0 === _v7 && !_v4,
      _v11 = _v4 || !1 === _v7,
      _v12 = _v1 ? "var(--vimeo-colors-fill-surface)" : "var(--vimeo-colors-background)",
      _v13 = (0, _v16.useCallback)(_v0 => {
        _v0.stopPropagation(), _v9.current = !0, _v5(!0);
      }, []),
      _v14 = (0, _v16.useCallback)(() => {
        _v3 && _v1 && _v5(!0);
      }, [_v3, _v1]),
      _v15 = (0, _v16.useCallback)(() => {
        _v3 && _v1 && (_v9.current = !1, _v5(!1));
      }, [_v3, _v1]),
      _v16 = (0, _v16.useCallback)(_v0 => {
        _v0.stopPropagation();
      }, []),
      _v17 = (0, _v16.useCallback)(_v0 => {
        _v3 && _v2 && _v0.target === _v0.currentTarget && _v60(_v0, _v2);
      }, [_v3, _v2]);
    return _v68(() => {
      _v4 && _v9.current && (_v9.current = !1, _v6.current?.focus());
    }, [_v6, _v4]), (0, _v6.jsx)(_v72, {
      onClick: _v2,
      onMouseEnter: _v14,
      onMouseLeave: _v15,
      editMode: _v3,
      isExpanded: _v4,
      children: (0, _v6.jsxs)(_v31.Box, {
        position: "relative",
        display: "block",
        width: "100%",
        children: [(0, _v6.jsx)(_v31.Box, {
          id: _v8,
          ref: _v6,
          overflow: "hidden",
          whiteSpace: "pre-wrap",
          lineHeight: 1.5,
          tabIndex: _v4 ? -1 : void 0,
          onKeyDown: _v17,
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "fill-brand",
            outlineOffset: "1px"
          },
          sx: {
            maxHeight: _v4 ? "none" : "calc(4 * 1.5em)"
          },
          children: (0, _v6.jsx)(_v48.default, {
            text: _v0,
            isInteractive: _v11,
            onClick: _v3 ? _v16 : void 0
          })
        }), (0, _v6.jsxs)(_v31.Box, {
          position: "absolute",
          bottom: "0",
          right: "0",
          display: "flex",
          cursor: "pointer",
          visibility: _v10 ? "visible" : "hidden",
          onClick: _v13,
          children: [(0, _v6.jsx)(_v31.Box, {
            "aria-hidden": "true",
            w: (0, _v47.rem)(56),
            sx: {
              background: `linear-gradient(to right, transparent, ${_v12} 90%)`
            }
          }), (0, _v6.jsx)(_v18.Text, {
            as: "button",
            type: "button",
            border: "none",
            paddingY: "0",
            paddingLeft: "0",
            paddingRight: "xs",
            color: "text-primary",
            variant: "body-md",
            textDecoration: "underline",
            cursor: "pointer",
            lineHeight: 1.5,
            sx: {
              backgroundColor: _v12
            },
            _hover: {
              textDecoration: "underline"
            },
            "aria-controls": _v8,
            "aria-expanded": _v4,
            children: _v51.default.ReadMore
          })]
        })]
      })
    });
  }
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = _v16.default.forwardRef(({
    withoutEffects: _v0 = !1,
    fullWidth: _v1 = !1,
    className: _v2,
    children: _v3,
    ..._v4
  }, _v5) => (0, _v6.jsx)(_v31.Box, {
    ref: _v5,
    position: "relative",
    bg: "transparent",
    mb: 3,
    ...(!_v0 && {
      py: "md",
      px: _v1 ? 0 : "md",
      borderRadius: "lg",
      bg: "fill-surface"
    }),
    className: _v2,
    ..._v4,
    children: _v3
  }));
  _v81.displayName = "InfoCard";
  let _v82 = (_v0, _v1) => {
      let _v2 = [Math.floor(_v0 / 0), Math.floor(_v0 / 60) % 60, Math.floor(_v0 % 60)].map(_v0 => _v0 < 10 ? "0" + _v0 : _v0);
      return "hh:mm:SS" === _v1 ? _v2.join(":") : _v2.filter((_v0, _v1) => "00" !== _v0 || _v1 > 0).join(":");
    },
    _v83 = (_v0, _v1 = "en", _v2) => new Date(_v0).toLocaleString(_v1, _v2 || {
      year: "numeric",
      month: "short"
    });
  function _v84({
    totalShowcases: _v0,
    totalFollowers: _v1,
    totalFollowing: _v2,
    totalLikes: _v3,
    likesEnabled: _v4 = !1,
    totalCollections: _v5,
    membership: _v6,
    createdTime: _v7,
    userLink: _v8,
    userId: _v9,
    disableCollections: _v10 = !1
  }) {
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsxs)(_v81, {
        fullWidth: !0,
        children: [(0, _v6.jsx)(_v33.Flex, {
          align: "center",
          px: "md",
          mb: (0, _v47.rem)(10),
          children: (0, _v6.jsx)(_v75.Header, {
            size: "sm",
            as: "p",
            mb: 0,
            children: _v51.default.Activity
          })
        }), (0, _v6.jsx)(_v85, {
          icon: (0, _v6.jsx)(_v79.Showcase, {}),
          label: _v51.default.Showcases,
          count: _v0,
          href: `${_v8}/albums`,
          linkType: "showcases",
          userId: _v9
        }), (0, _v6.jsx)(_v85, {
          icon: (0, _v6.jsx)(_v78.PersonUserAdd, {}),
          label: _v51.default.Followers,
          count: _v1,
          href: `${_v8}/following/followers/sort:date`,
          linkType: "followers",
          userId: _v9
        }), (0, _v6.jsx)(_v85, {
          icon: (0, _v6.jsx)(_v76.BookmarkChapter, {}),
          label: _v51.default.Following,
          count: _v2,
          href: `${_v8}/following`,
          linkType: "following",
          userId: _v9
        }), _v4 && (0, _v6.jsx)(_v85, {
          icon: (0, _v6.jsx)(_v80.ThumbUp, {}),
          label: _v51.default.Likes,
          count: _v3,
          href: `${_v8}/likes`,
          linkType: "likes",
          userId: _v9
        }), !_v10 && (0, _v6.jsx)(_v85, {
          icon: (0, _v6.jsx)(_v77.FolderStack, {}),
          label: _v51.default.Collections,
          count: _v5,
          href: `${_v8}/collections`,
          linkType: "collections",
          userId: _v9
        })]
      }), _v6?.badge?.type && (0, _v6.jsxs)(_v33.Flex, {
        justify: "space-between",
        px: "sm",
        mt: (0, _v47.rem)(10),
        children: [(0, _v6.jsx)(_v18.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v51.default.MembershipPlan
        }), (0, _v6.jsx)(_v74.Badge, {
          size: "xs",
          variant: (_v0 => {
            switch (_v0) {
              case "alum":
                return "neutral";
              case "business":
              case "plus":
              case "pro":
              case "creator":
              case "professional":
              case "studio":
              case "production":
                return "upgrade";
              case "live_business":
              case "live_premium":
              case "live_pro":
                return "live";
              case "sponsor":
                return "info";
              case "staff":
              case "support":
                return "staff";
              default:
                return "default";
            }
          })(_v6.badge.type),
          textTransform: "uppercase",
          children: _v6.badge.text
        })]
      }), (0, _v6.jsxs)(_v33.Flex, {
        justify: "space-between",
        px: "sm",
        mt: (0, _v47.rem)(10),
        children: [(0, _v6.jsx)(_v18.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v51.default.MemberSince
        }), (0, _v6.jsx)(_v18.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v83(_v7)
        })]
      })]
    });
  }
  function _v85({
    icon: _v0,
    label: _v1,
    count: _v2,
    href: _v3,
    linkType: _v4,
    userId: _v5
  }) {
    let {
        trackUserProfilePageActivityLinkClicked: _v6
      } = (0, _v24.useProfileTracking)(),
      _v7 = _v2 > 0,
      _v8 = (0, _v16.useCallback)(() => {
        _v6({
          userProfilePageUserId: String(_v5),
          userProfilePageLinkType: _v4
        });
      }, [_v6, _v5, _v4]),
      _v9 = (0, _v6.jsxs)(_v33.Flex, {
        align: "center",
        justify: "space-between",
        py: "sm",
        px: "md",
        children: [(0, _v6.jsxs)(_v33.Flex, {
          align: "center",
          gap: "sm",
          children: [(0, _v6.jsx)(_v31.Box, {
            color: "text-tertiary",
            children: _v0
          }), (0, _v6.jsx)(_v18.Text, {
            fontSize: "body-sm",
            children: _v1
          })]
        }), (0, _v6.jsx)(_v18.Text, {
          fontSize: "body-sm",
          children: _v2.toLocaleString()
        })]
      });
    return _v7 ? (0, _v6.jsx)(_v31.Box, {
      as: "a",
      href: _v3,
      display: "block",
      textDecoration: "none",
      color: "inherit",
      _hover: {
        bg: "fill-component-hover"
      },
      onClick: _v8,
      children: _v9
    }) : _v9;
  }
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = _v16.default.createContext({
      mutate: () => Promise.resolve(),
      isValidating: !1
    }),
    _v89 = _v16.default.createContext({
      isValidating: !1,
      mutate: () => Promise.resolve([])
    });
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  function _v95(_v0, _v1, _v2, _v3 = !0, _v4) {
    let {
        cache: _v5,
        mutate: _v6
      } = (0, _v90.useSWRConfig)(),
      _v7 = (0, _v92.default)(),
      _v8 = (0, _v92.default)(),
      _v9 = (0, _v92.default)(),
      _v10 = (0, _v92.default)(),
      _v11 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        mutate: _v12,
        data: _v13
      } = (0, _v16.useContext)(_v89),
      [_v14, _v15] = (0, _v16.useState)(!1),
      _v16 = _v4?.perPage ?? _v49.VIDEO_VARIABLES.perPage,
      _v17 = _v4?.revalidateAll ?? !0,
      _v18 = _v4?.revalidateOnFocus,
      _v19 = (0, _v16.useCallback)(_v0 => _v49.DEFAULT_PROFILE_URI_REGEX.test(_v0), []),
      _v20 = (0, _v16.useCallback)(async _v0 => {
        let _v1 = RegExp(`^\\$inf\\$${_v0.substring(1)}/videos`),
          _v2 = Array.from(_v5.keys()).find(_v0 => _v1.test(_v0)),
          _v3 = new Set();
        return _v2 ? _v6(_v2, _v0 => (_v0 && _v65(_v0).forEach(_v0 => _v3.add(_v0.clip.uri)), _v0), {
          revalidate: !1
        }).then(() => Promise.resolve([..._v3])) : Promise.resolve([..._v3]);
      }, [_v5, _v6]),
      _v21 = (0, _v16.useCallback)(async _v0 => {
        let _v1 = (0, _v29.decamelizeDeep)({
          containerUri: _v0
        });
        if (_v19(_v0)) {
          let _v0 = await _v9("me/profile_sections", {
            fields: ["uri"]
          }, _v49.HTTPMethods.POST, _v1);
          if (_v0) {
            let _v0 = await _v20(_v0),
              _v1 = (0, _v29.decamelizeDeep)({
                clipUris: _v0
              }),
              _v2 = _v59(_v0.uri),
              _v3 = await _v9(`me/profile_sections/${_v2}`, {
                fields: ["uri", "clip_uris"]
              }, _v49.HTTPMethods.PATCH, _v1),
              _v4 = _v65(_v13),
              _v5 = _v4.findIndex(_v0 => _v0.uri === _v0);
            if (-1 !== _v5 && _v3) return _v4[_v5].uri = _v3.uri, _v4[_v5].clipUris = _v3.clipUris, await _v12(_v0 => _v0 ? _v62(_v4, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            }), _v0.uri;
          }
        }
        return _v0;
      }, [_v20, _v19, _v9, _v13, _v12]),
      _v22 = (0, _v16.useCallback)(() => {
        if (null != _v2 && null != _v1) {
          let _v0 = Math.ceil(_v2 / _v16);
          return {
            items: _v1,
            page: 1,
            paging: {
              first: "page=1",
              last: "page=" + _v0,
              next: _v0 > 1 ? "page=2" : null,
              previous: null
            },
            perPage: _v16,
            total: _v2
          };
        }
      }, [_v1, _v2, _v16]),
      _v23 = (0, _v16.useCallback)(_v0 => _v64(_v5, _v6, _v0), [_v5, _v6]),
      _v24 = (0, _v16.useCallback)(async _v0 => {
        if (!_v0.length) return;
        let _v1 = new Map();
        _v0.forEach(_v0 => _v1.set(_v0.sectionUri, _v0));
        let _v2 = _v65(_v13),
          _v3 = !1,
          _v4 = _v2.map(_v0 => {
            let _v1 = _v1.get(_v0.uri);
            return _v1 ? (_v3 = !0, {
              ..._v0,
              clipUris: _v1.clipUris,
              videos: {
                ..._v0.videos,
                total: _v1.videos.total
              }
            }) : _v0;
          });
        _v3 && (await _v12(_v0 => _v0 ? _v62(_v4, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        }));
      }, [_v13, _v12]),
      _v25 = (0, _v16.useCallback)(async _v0 => {
        let _v1 = (0, _v29.decamelizeDeep)({
            operations: _v0
          }),
          _v2 = await _v10("me/profile_sections/videos/batch", void 0, _v49.HTTPMethods.PATCH, _v1),
          _v3 = _v2?.affectedSections || [];
        await _v24(_v3);
        let _v4 = [...new Set(_v3.map(_v0 => _v0.sectionUri))];
        return await Promise.all(_v4.map(_v0 => _v23(_v0))), _v2;
      }, [_v24, _v23, _v10]),
      {
        settings: _v26
      } = (0, _v39.useOrionSettings)(),
      _v27 = _v26.profile_likes_activity,
      _v28 = (0, _v16.useCallback)((_v0, _v1) => `${_v0.substring(1)}/videos${(0, _v94.buildQueryString)((0, _v29.decamelizeDeep)({
        ..._v49.VIDEO_VARIABLES,
        fields: (0, _v49.getVideoFields)(_v27),
        page: _v1,
        perPage: _v16
      }))}`, [_v16, _v27]),
      {
        isValidating: _v29,
        mutate: _v30,
        data: _v31,
        error: _v32,
        setSize: _v33,
        size: _v34
      } = (0, _v91.default)(_v0 => _v3 ? _v28(_v0, _v0 + 1) : null, _v7, {
        revalidateAll: _v17,
        revalidateOnMount: !0,
        fallbackData: [_v22()],
        ...(void 0 !== _v18 && {
          revalidateOnFocus: _v18
        })
      }),
      _v35 = (0, _v16.useMemo)(() => _v31?.map(_v0 => _v0 ? {
        ..._v0,
        items: _v0.items.filter(_v0 => null != _v0.clip)
      } : _v0), [_v31]),
      _v36 = (0, _v16.useCallback)(_v0 => {
        _v0 && _v0.json && _v0.json().then(_v0 => _v11({
          content: _v0.error,
          status: "negative"
        })), _v12(), _v30();
      }, [_v30, _v11, _v12]),
      _v37 = (0, _v16.useCallback)(async (_v0, _v1) => {
        let _v2 = _v65(_v13),
          _v3 = _v59(_v0),
          _v4 = _v2.findIndex(_v0 => _v0.uri === _v0);
        try {
          if (-1 !== _v4) {
            let _v0 = {
              ..._v2[_v4],
              clipUris: _v1
            };
            _v2[_v4] = _v0, _v12(_v0 => _v0 ? _v62(_v2, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            });
            let _v1 = (0, _v29.decamelizeDeep)({
                clipUris: _v1.length > 0 ? _v1 : null
              }),
              _v2 = await _v9(`me/profile_sections/${_v3}`, void 0, _v49.HTTPMethods.PATCH, _v1);
            return _v2 ? _v2.clipUris : [];
          }
          return [];
        } catch (_v0) {
          return _v36(_v0), [];
        }
      }, [_v36, _v9, _v13, _v12]),
      _v38 = (0, _v16.useCallback)(async (_v0, _v1, _v2) => {
        if (_v2) {
          let _v0 = await _v20(_v0);
          if (!_v0.every((_v0, _v1) => _v1[_v1] === _v0)) return await _v37(_v0, _v0);
        }
        return [...new Set(_v1)];
      }, [_v20, _v37]),
      _v39 = (0, _v16.useCallback)(async (_v0, _v1, _v2, _v3, _v4 = !0) => {
        _v15(!0);
        try {
          let _v0 = await _v21(_v0),
            _v1 = _v65(_v13),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v38(_v0, [..._v0.clipUris], _v0.unbounded);
            _v1.splice(_v1, 0, ..._v2);
            let _v2 = [...new Set(_v1)];
            await _v37(_v0.uri, _v2);
            let _v3 = _v4 ? _v23(_v0) : Promise.resolve();
            return Promise.all([_v3(), _v3]).then(() => (_v11(), _v15(!1), _v2));
          }
        } catch (_v0) {
          _v36(_v0);
        }
        return _v15(!1), [];
      }, [_v21, _v13, _v38, _v37, _v11, _v23, _v36]),
      _v40 = (0, _v16.useCallback)(async (_v0, _v1, _v2) => {
        _v15(!0);
        try {
          let _v0 = await _v21(_v0),
            _v1 = _v65(_v13),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v38(_v0, [..._v0.clipUris], _v0.unbounded),
              _v2 = _v1.findIndex(_v0 => _v0 === _v1);
            if (-1 !== _v2 && _v35) {
              _v1.splice(_v2, 1);
              let _v0 = _v65(_v35);
              _v0.splice(_v2, 1);
              let _v1 = _v62(_v0, _v35, _v16),
                _v2 = _v35.length - _v1.length,
                _v3 = await _v37(_v0, _v1),
                _v4 = RegExp(`^${_v0.substring(1)}/videos`);
              return _v63(_v5, _v4), Promise.all([_v2(), 0 !== _v2 ? _v33(Math.max(_v1.length, 1)) : _v30()]).then(() => (_v11(), _v15(!1), _v3));
            }
          }
        } catch (_v0) {
          _v36(_v0);
        }
        return _v15(!1), [];
      }, [_v5, _v21, _v13, _v38, _v35, _v37, _v33, _v30, _v11, _v36, _v16]),
      _v41 = (0, _v16.useCallback)(async ({
        title: _v0
      }) => {
        _v15(!0);
        try {
          let _v0 = _v65(_v13)[0];
          if (!_v0) return;
          let _v1 = (0, _v29.decamelizeDeep)({
              containerUri: _v0.uri,
              title: _v0,
              createEmpty: !0
            }),
            _v2 = await _v9("me/profile_sections", void 0, _v49.HTTPMethods.POST, _v1);
          if (!_v2) return;
          return await _v12(), _v2;
        } catch (_v0) {
          _v36(_v0);
          return;
        } finally {
          _v15(!1);
        }
      }, [_v13, _v9, _v12, _v36]),
      _v42 = (0, _v16.useCallback)(async _v0 => {
        let _v1 = _v65(_v13),
          _v2 = _v1[_v0];
        if (!_v2) throw Error(`No section at index ${_v0}`);
        let _v3 = _v0 > 0 ? _v1[_v0 - 1] : _v1[_v0 + 1],
          _v4 = _v59(_v2.uri);
        _v15(!0);
        try {
          await _v9(`me/profile_sections/${_v4}`, void 0, _v49.HTTPMethods.DELETE), await _v12(_v0 => {
            if (!_v0) return _v0;
            let _v1 = _v65(_v0).filter(_v0 => _v0.uri !== _v2.uri);
            return _v62(_v1, _v0, _v49.SECTION_VARIABLES.perPage);
          }, {
            revalidate: !1
          }), _v3 && (await _v23(_v3.uri)), await _v12(), _v11();
        } catch (_v0) {
          _v36(_v0);
        } finally {
          _v15(!1);
        }
      }, [_v13, _v9, _v12, _v23, _v11, _v36]),
      _v43 = (0, _v16.useCallback)(async (_v0, _v1) => {
        let _v2 = "me/profile_sections",
          _v3 = (0, _v29.decamelizeDeep)({
            containerUri: _v0,
            title: _v1
          }),
          _v4 = _v49.HTTPMethods.POST;
        if (!_v19(_v0)) {
          let _v0 = _v59(_v0);
          _v2 = `me/profile_sections/${_v0}`, _v3 = {
            title: _v1
          }, _v4 = _v49.HTTPMethods.PATCH;
        }
        let _v5 = await _v9(_v2, {
            fields: ["title", "uri"]
          }, _v4, _v3),
          _v6 = _v65(_v13),
          _v7 = _v6.findIndex(_v0 => _v0.uri === _v0);
        -1 !== _v7 && _v5 && (_v6[_v7] = {
          ..._v6[_v7],
          title: _v5.title,
          uri: _v5.uri
        }, await _v12(_v0 => _v0 ? _v62(_v6, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        })), _v11();
      }, [_v19, _v9, _v13, _v12, _v11]),
      _v44 = (0, _v16.useCallback)((_v0, _v1) => {
        _v12(_v0 => {
          if (!_v0) return _v0;
          let _v1 = _v65(_v0),
            _v2 = _v0 + _v1;
          if (_v2 < 0 || _v2 >= _v1.length) return _v0;
          let _v3 = _v1[_v0],
            _v4 = _v3.position,
            _v5 = _v1[_v2].position;
          _v1.splice(_v0, 1), _v1.splice(_v2, 0, _v3), _v1[_v0] = {
            ..._v1[_v0],
            position: _v4
          }, _v1[_v2] = {
            ..._v1[_v2],
            position: _v5
          };
          let _v6 = _v1[_v2 < _v0 ? _v2 : _v0],
            _v7 = _v6.position,
            _v8 = _v59(_v6.uri);
          return _v9(`me/profile_sections/${_v8}`, void 0, _v49.HTTPMethods.PATCH, {
            position: _v7
          }).then(() => {
            _v12(), _v11();
          }), _v62(_v1, _v0, _v49.SECTION_VARIABLES.perPage);
        }, {
          revalidate: !1
        });
      }, [_v9, _v11, _v12]),
      _v45 = (0, _v16.useCallback)(async (_v0, _v1) => {
        let _v2 = null != _v1.video && _v0.video.clip.uri === _v1.video.clip.uri;
        if (_v15(!0), _v2) return void _v15(!1);
        try {
          let _v0 = await _v21(_v0.sectionUri),
            _v1 = _v0.sectionUri === _v1.sectionUri ? _v0 : await _v21(_v1.sectionUri),
            _v2 = _v65(_v13),
            _v3 = _v2.find(_v0 => _v0.uri === _v0),
            _v4 = _v2.find(_v0 => _v0.uri === _v1);
          _v3 && _v4 && (await _v38(_v0, [..._v3.clipUris], _v3.unbounded), _v0 !== _v1 && (await _v38(_v1, [..._v4.clipUris], _v4.unbounded)), await _v25([{
            videoUri: _v0.video.clip.uri,
            fromSectionUri: _v0,
            toSectionUri: _v1,
            toVideoIndex: _v1.videoIndex
          }])), _v11();
        } catch (_v0) {
          _v36(_v0);
        } finally {
          _v15(!1);
        }
      }, [_v38, _v21, _v36, _v25, _v11, _v13]),
      _v46 = (0, _v16.useCallback)(async (_v0, _v1) => {
        try {
          let _v0 = (0, _v29.decamelizeDeep)({
              columnWidth: _v1
            }),
            _v1 = await _v21(_v0),
            _v2 = _v59(_v1),
            _v3 = `me/profile_sections/${_v2}/videos/${_v0}`;
          await _v8(_v3, void 0, _v49.HTTPMethods.PATCH, _v0), _v11();
        } catch (_v0) {
          _v36(_v0);
        }
      }, [_v21, _v36, _v11, _v8, _v0]),
      _v47 = (0, _v16.useCallback)((_v0, _v1) => _v46(_v59(_v0.clip.uri), _v1).then(() => {
        let _v0 = _v65(_v35),
          _v1 = _v0.findIndex(_v0 => _v0.clip.uri === _v0.clip.uri);
        if (-1 !== _v1) {
          let _v0 = {
            ..._v0[_v1]
          };
          _v0.columnWidth = _v1, _v0[_v1] = _v0, _v30(_v0 => _v0 ? _v62(_v0, _v0, _v16) : _v0, {
            revalidate: !1
          });
        }
      }), [_v46, _v35, _v30, _v16]);
    return {
      addVideosToSection: _v39,
      createSection: _v41,
      data: _v35,
      error: _v32,
      isValidating: _v29,
      moveSection: _v44,
      mutate: _v30,
      onDrop: _v45,
      removeSection: _v42,
      removeVideoFromSection: _v40,
      revalidate: _v30,
      setSize: _v33,
      size: _v34,
      toggleVideoData: _v47,
      updateSectionTitle: _v43,
      videoLoading: _v14
    };
  }
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = ((_v1 = _v115 || {}).NOBODY = "nobody", _v1.PASSWORD = "password", _v1.ON_DEMAND = "ptv", _v1.ON_DEMAND_HIDDEN = "ptvhide", _v1);
  let _v116 = {
      borderRadius: (0, _v47.rem)(6),
      minWidth: (0, _v47.rem)(72)
    },
    _v117 = {
      bottom: (0, _v47.rem)(3),
      right: (0, _v47.rem)(3),
      fontSize: (0, _v47.rem)(10),
      padding: "xs",
      borderRadius: "xs"
    },
    _v118 = {
      [`@media screen and (min-width: ${_v38.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v47.rem)(24)} ${(0, _v47.rem)(72)} 1fr ${(0, _v47.rem)(90)}`
      }
    };
  function _v119({
    inputType: _v0 = "radio",
    isVerticalClipAllowed: _v1,
    clip: _v2,
    isSelected: _v3,
    onClick: _v4,
    isUpcomingEventAllowed: _v5,
    isOnDemandAllowed: _v6,
    showAuthor: _v7 = !1
  }) {
    let _v8 = _v2.width < _v2.height,
      _v9 = !_v1 && _v8,
      _v10 = "nobody" === _v2.privacy.view || "password" === _v2.privacy.view,
      _v11 = !_v6 && ("ptv" === _v2.privacy.view || "ptvhide" === _v2.privacy.view),
      _v12 = null != _v2.live && "done" !== _v2.live.status,
      _v13 = !_v5 && _v12,
      _v14 = (0, _v16.useMemo)(() => _v9 || _v11 || _v13, [_v9, _v11, _v13]),
      _v15 = (0, _v16.useMemo)(() => _v9 ? _v51.default.VerticalVideoNotSupported : _v11 ? _v51.default.OnDemandVideoNotSupported : _v13 ? _v51.default.UpcomingVideoNotSupported : "", [_v9, _v11, _v13]),
      _v16 = (0, _v16.useCallback)(() => {
        _v14 || _v4();
      }, [_v4, _v14]),
      _v17 = (0, _v114.useLocale)(),
      _v18 = _v83(_v2.createdTime, _v17, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    return (0, _v6.jsx)(_v86.Tooltip, {
      label: _v15,
      isDisabled: !_v14,
      closeOnScroll: !0,
      shouldWrapChildren: !0,
      placement: "top",
      children: (0, _v6.jsxs)(_v112.ContentRow, {
        listGridColumns: `${(0, _v47.rem)(24)} ${(0, _v47.rem)(72)} 1fr`,
        sx: _v118,
        isSelected: !_v14 && _v3,
        isDisabled: _v14,
        opacity: _v14 ? .5 : 1,
        onClick: _v0 => {
          _v0.preventDefault(), _v16();
        },
        cursor: _v14 ? "not-allowed" : "pointer",
        tabIndex: -1,
        userSelect: "none",
        children: [(0, _v6.jsx)(_v112.ContentRow.Column, {
          children: "radio" === _v0 ? (0, _v6.jsx)(_v112.ContentRow.SelectRadio, {
            isDisabled: _v14,
            size: "md"
          }) : (0, _v6.jsx)(_v112.ContentRow.SelectCheckbox, {
            isDisabled: _v14,
            size: "md"
          })
        }), (0, _v6.jsx)(_v112.ContentRow.Column, {
          children: (0, _v6.jsx)(_v112.ContentRow.Thumbnail, {
            alt: _v2.name,
            src: _v2.pictures.sizes[0].link,
            badgeText: _v82(_v2.duration),
            badgeSx: _v117,
            isLocked: _v10,
            ..._v116
          })
        }), (0, _v6.jsx)(_v112.ContentRow.Column, {
          overflow: "auto",
          justifyColumn: "auto",
          children: (0, _v6.jsxs)(_v31.Box, {
            children: [(0, _v6.jsx)(_v113.OverflowToolTip, {
              labelToolTip: _v2.name,
              children: (0, _v6.jsx)(_v18.Text, {
                variant: "heading-xs",
                noOfLines: 1,
                children: _v2.name
              })
            }), _v7 && _v2.user && (0, _v6.jsxs)(_v33.Flex, {
              alignItems: "center",
              gap: "xs",
              children: [(0, _v6.jsx)(_v111.Avatar, {
                alt: "",
                size: "xs",
                sx: {
                  width: (0, _v47.rem)(16),
                  height: (0, _v47.rem)(16)
                },
                src: _v2.user.pictures?.sizes?.[0]?.link ?? "",
                nameProps: {
                  name: _v2.user.name
                }
              }), (0, _v6.jsx)(_v18.Text, {
                variant: "body-xs",
                color: "text-secondary",
                noOfLines: 1,
                children: _v2.user.name
              })]
            })]
          })
        }), (0, _v6.jsx)(_v112.ContentRow.Column, {
          hideAtWidth: _v38.bokehTheme.breakpoints.md,
          children: (0, _v6.jsx)(_v18.Text, {
            variant: "body-sm",
            color: "text-secondary",
            noOfLines: 1,
            children: _v18
          })
        })]
      })
    });
  }
  var _v120 = _v0.i(0),
    _v121 = _v0.i(0);
  function _v122({
    inputType: _v0 = "radio"
  }) {
    return (0, _v6.jsxs)(_v112.ContentRow, {
      listGridColumns: `${(0, _v47.rem)(24)} ${(0, _v47.rem)(72)} 1fr`,
      gridTemplateColumns: {
        base: `${(0, _v47.rem)(24)} ${(0, _v47.rem)(72)} 1fr`,
        md: `${(0, _v47.rem)(24)} ${(0, _v47.rem)(72)} 1fr ${(0, _v47.rem)(90)}`
      },
      disableHover: !0,
      tabIndex: -1,
      children: [(0, _v6.jsx)(_v112.ContentRow.Column, {
        children: "radio" === _v0 ? (0, _v6.jsx)(_v120.Radio, {
          isDisabled: !0,
          size: "md"
        }) : (0, _v6.jsx)(_v107.Checkbox, {
          isDisabled: !0,
          size: "md"
        })
      }), (0, _v6.jsx)(_v112.ContentRow.Column, {
        children: (0, _v6.jsx)(_v121.Skeleton, {
          h: (0, _v47.rem)(39),
          borderRadius: (0, _v47.rem)(6),
          minWidth: (0, _v47.rem)(72)
        })
      }), (0, _v6.jsx)(_v112.ContentRow.Column, {
        overflow: "auto",
        justifyColumn: "auto",
        children: (0, _v6.jsx)(_v121.Skeleton, {
          variant: "text",
          width: "80%"
        })
      }), (0, _v6.jsx)(_v112.ContentRow.Column, {
        hideAtWidth: _v38.bokehTheme.breakpoints.md,
        children: (0, _v6.jsx)(_v121.Skeleton, {
          variant: "text",
          w: (0, _v47.rem)(70)
        })
      })]
    });
  }
  function _v123({
    inputType: _v0 = "radio",
    isVerticalClipAllowed: _v1,
    clips: _v2,
    selectedClips: _v3,
    loading: _v4,
    paginationLoading: _v5,
    onSelectionChange: _v6,
    fetchNext: _v7,
    isUpcomingEventAllowed: _v8,
    isOnDemandAllowed: _v9,
    showAuthor: _v10
  }) {
    let _v11 = (0, _v16.useRef)(null),
      _v12 = _v2.length > 0 ? 1 : 8,
      _v13 = (0, _v16.useMemo)(() => _v3.map(_v0 => _v0.uri), [_v3]);
    return (0, _v6.jsxs)(_v31.Box, {
      ref: _v11,
      onScroll: () => function (_v0, _v1, _v2 = _v49.SCROLL_BUFFER) {
        if (_v0.current) {
          let _v0 = _v0.current,
            _v1 = _v0.scrollHeight;
          _v0.clientHeight + _v0.scrollTop + _v2 >= _v1 && _v1();
        }
      }(_v11, _v7),
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
      overflowY: "auto",
      marginTop: (0, _v47.rem)(12),
      px: "3",
      gap: "sm",
      children: [_v2.map(_v0 => {
        let _v1 = -1 !== _v13.indexOf(_v0.uri);
        return (0, _v6.jsx)(_v119, {
          inputType: _v0,
          clip: _v0,
          isVerticalClipAllowed: _v1,
          isUpcomingEventAllowed: _v8,
          isOnDemandAllowed: _v9,
          showAuthor: _v10,
          isSelected: _v1,
          onClick: () => {
            if ("checkbox" === _v0) {
              let _v0 = _v3 ? [..._v3] : [],
                _v1 = _v0.map(_v0 => _v0.uri);
              if (_v1) {
                let _v0 = _v1.indexOf(_v0.uri);
                _v0.splice(_v0, 1);
              } else _v0.push(_v0);
              _v6(_v0);
            } else _v6([_v0]);
          }
        }, `clip_row_${_v0.uri}`);
      }), _v4 && [...Array(_v12).keys()].map(_v0 => (0, _v6.jsx)(_v122, {
        inputType: _v0
      }, _v0)), !_v4 && _v5 && (0, _v6.jsx)(_v122, {
        inputType: _v0
      })]
    });
  }
  var _v124 = _v0.i(0);
  function _v125({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) {
    return (0, _v6.jsxs)(_v33.Flex, {
      as: "article",
      direction: "column",
      align: "center",
      justify: "center",
      width: "100%",
      height: "100%",
      flex: "1",
      py: "2xl",
      children: [_v2 && (0, _v6.jsx)(_v33.Flex, {
        width: (0, _v47.rem)(128),
        justify: "center",
        children: _v2
      }), (0, _v6.jsxs)(_v33.Flex, {
        direction: "column",
        align: "center",
        textAlign: "center",
        margin: `${(0, _v47.rem)(16)} 0`,
        rowGap: (0, _v47.rem)(16),
        maxW: (0, _v47.rem)(320),
        children: [_v1, _v3]
      }), _v0]
    });
  }
  function _v126({
    queryUrl: _v0,
    searchText: _v1,
    onClearSearch: _v2,
    inputType: _v3 = "radio",
    authToken: _v4,
    parentLoading: _v5 = !1,
    isVerticalClipAllowed: _v6,
    selectedClips: _v7,
    onSelectedClipsChange: _v8,
    onNoInitialClips: _v9,
    onClipsLoaded: _v10,
    filterNonProfileVideos: _v11,
    isUpcomingEventAllowed: _v12,
    isOnDemandAllowed: _v13,
    showAuthor: _v14,
    sort: _v15,
    direction: _v16
  }) {
    let [_v17, _v18] = (0, _v16.useState)([]),
      {
        data: _v19,
        error: _v20,
        setPage: _v21,
        isValidating: _v22
      } = function (_v0, _v1, _v2, _v3 = !1, _v4 = "", _v5 = "date", _v6 = "desc") {
        let [_v7, _v8] = (0, _v16.useState)(1),
          _v9 = (0, _v92.default)(),
          [_v10, _v11] = (0, _v16.useState)(_v4);
        _v4 !== _v10 && (_v11(_v4), _v8(1));
        let [_v12, _v13] = (0, _v16.useState)(_v5),
          [_v14, _v15] = (0, _v16.useState)(_v6);
        (_v5 !== _v12 || _v6 !== _v14) && (_v13(_v5), _v15(_v6), _v8(1));
        let _v16 = (0, _v16.useCallback)((_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
            let _v7 = {
              page: _v2,
              sizes: "295x166",
              perPage: 20,
              fields: "uri,name,created_time,pictures.sizes.link,duration,privacy.view,width,height,live.status,user.uri,user.name,user.link,user.pictures.sizes.link",
              sort: _v4,
              direction: _v5
            };
            return _v3 && (_v7.filter = "non-profile"), _v1 && (_v7.useBelugaSearch = !0, _v7.weakSearch = !0, _v7.query = _v1), _v9(_v0, _v7, void 0, void 0, _v6 ? {
              Authorization: _v6
            } : void 0);
          }, [_v9]),
          {
            data: _v17,
            error: _v18,
            isValidating: _v19
          } = (0, _v124.default)(_v1 ? [_v0, _v4, _v7, _v3, _v5, _v6, _v2] : null, ([_v0, _v1, _v2, _v3, _v4, _v5, _v6]) => _v16(_v0, _v1, _v2, _v3, _v4, _v5, _v6));
        return {
          setPage: _v8,
          data: _v17,
          error: _v18,
          isValidating: _v19
        };
      }(_v0, !_v5, _v4, _v11, _v1, _v15, _v16),
      _v23 = !_v19 && !_v20;
    return (0, _v16.useEffect)(() => {
      if (_v19) {
        let _v0 = [...(_v19.items || [])],
          _v1 = 1 === _v19.page;
        _v18(_v0 => _v1 ? _v0 : [..._v0, ..._v0]), _v1 && 0 === _v0.length && !_v1 && _v9();
      }
    }, [_v19, _v9, _v1]), (0, _v16.useEffect)(() => {
      _v10?.(_v17);
    }, [_v17, _v10]), (0, _v6.jsxs)(_v33.Flex, {
      as: "section",
      overflow: "hidden",
      flexDirection: "column",
      height: "100%",
      children: [(0, _v6.jsx)(_v123, {
        inputType: _v3,
        clips: _v17,
        loading: _v23 || _v5,
        paginationLoading: _v22,
        fetchNext: () => {
          !_v23 && _v19 && _v19.paging.next && _v21(_v0 => _v0 + 1);
        },
        isVerticalClipAllowed: _v6,
        isUpcomingEventAllowed: _v12,
        selectedClips: _v7,
        onSelectionChange: _v0 => _v8(_v0),
        isOnDemandAllowed: _v13,
        showAuthor: _v14
      }), _v23 || _v5 || !_v19 || _v19.items?.length || _v17.length || !_v1 ? null : (0, _v6.jsx)(_v125, {
        icon: (0, _v6.jsx)(_v110.SearchMagnifierFilled, {
          boxSize: "md"
        }),
        header: (0, _v6.jsx)(_v18.Text, {
          as: "p",
          variant: "body-xl",
          color: "text-secondary",
          children: (0, _v21.translate)({
            singular: "No results for {SEARCH_TEXT}",
            replacements: {
              SEARCH_TEXT: _v1
            },
            dictionary: {
              es: {
                singular: "No hay resultados para {SEARCH_TEXT}"
              },
              "de-DE": {
                singular: "Keine Ergebnisse für {SEARCH_TEXT}"
              },
              "fr-FR": {
                singular: "Aucun résultat pour {SEARCH_TEXT}"
              },
              "ja-JP": {
                singular: "{SEARCH_TEXT}の結果はありません"
              },
              "ko-KR": {
                singular: "{SEARCH_TEXT}에 대한 결과가 없습니다"
              },
              "pt-BR": {
                singular: "Nenhum resultado para {SEARCH_TEXT}"
              },
              "zh-CN": {
                singular: "未找到与 {SEARCH_TEXT} 相关的结果"
              }
            }
          })
        }),
        cta: (0, _v6.jsx)(_v32.Button, {
          mt: "lg",
          size: "lg",
          variant: "secondary",
          onClick: _v2,
          children: _v51.default.BackToVideos
        })
      })]
    });
  }
  var _v127 = _v0.i(0);
  function _v128({
    query: _v0,
    onChange: _v1,
    isDisabled: _v2
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      px: "6",
      paddingTop: "5",
      paddingBottom: "3",
      children: (0, _v6.jsx)(_v127.Search, {
        value: _v0,
        onChange: _v0 => _v1(_v0.target.value),
        placeholder: _v51.default.Search,
        isDisabled: _v2,
        variant: "minimal",
        size: "md"
      })
    });
  }
  var _v129 = _v0.i(0);
  function _v130() {
    let [_v0, _v1] = (0, _v16.useState)(""),
      _v2 = (0, _v129.useDebouncedValue)(_v0, 500);
    return {
      query: _v0,
      setQuery: _v1,
      searchText: _v2,
      clearQuery: () => _v1("")
    };
  }
  let _v131 = {
    addedDesc: {
      text: _v51.default.LastAdded,
      sortBy: "date",
      sortDirection: "desc"
    },
    addedAsc: {
      text: _v51.default.FirstAdded,
      sortBy: "date",
      sortDirection: "asc"
    },
    titleAsc: {
      text: _v51.default.TitleAZ,
      sortBy: "alphabetical",
      sortDirection: "asc"
    },
    titleDesc: {
      text: _v51.default.TitleZA,
      sortBy: "alphabetical",
      sortDirection: "desc"
    }
  };
  function _v132({
    queryUrl: _v0,
    authToken: _v1,
    parentLoading: _v2,
    selectedClips: _v3,
    onSelectedClipsChange: _v4,
    emptyStateText: _v5,
    showAuthor: _v6
  }) {
    let {
        query: _v7,
        setQuery: _v8,
        searchText: _v9,
        clearQuery: _v10
      } = _v130(),
      [_v11, _v12] = (0, _v16.useState)("addedDesc"),
      [_v13, _v14] = (0, _v16.useState)([]),
      [_v15, _v16] = (0, _v16.useState)(!0),
      _v17 = new Set(_v13.map(_v0 => _v0.uri)),
      _v18 = _v3.reduce((_v0, _v1) => _v17.has(_v1.uri) ? _v0 + 1 : _v0, 0),
      _v19 = _v13.length > 0 && _v18 === _v13.length,
      _v20 = (0, _v16.useCallback)(() => _v16(!1), []);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v128, {
        query: _v7,
        onChange: _v8,
        isDisabled: _v2
      }), (0, _v6.jsxs)(_v33.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "6",
        paddingBottom: "3",
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v6.jsx)(_v107.Checkbox, {
          isChecked: _v19,
          isIndeterminate: _v18 > 0 && !_v19,
          onChange: () => {
            if (_v19) _v4([]);else {
              let _v0 = new Set(_v3.map(_v0 => _v0.uri));
              _v4([..._v3, ..._v13.filter(_v0 => !_v0.has(_v0.uri))]);
            }
          },
          size: "md",
          w: "fit-content",
          children: (0, _v21.translate)({
            singular: "{COUNT} selected",
            plural: "{COUNT} selected",
            count: _v3.length,
            replacements: {
              COUNT: _v3.length
            },
            dictionary: {
              es: {
                singular: "{COUNT} seleccionadas"
              },
              "de-DE": {
                singular: "{COUNT} ausgewählt"
              },
              "fr-FR": {
                singular: "{COUNT} sélectionnés"
              },
              "ja-JP": {
                singular: "{COUNT} 個選択されています"
              },
              "ko-KR": {
                singular: "{COUNT}개 선택됨"
              },
              "pt-BR": {
                singular: "{COUNT} selecionadas"
              },
              "zh-CN": {
                singular: "已选择 {COUNT} 个"
              }
            }
          })
        }), (0, _v6.jsx)(_v109.SortSelect, {
          sortOptions: _v131,
          selectedSort: _v11,
          onSortOptionClick: _v0 => _v12(_v0)
        })]
      }), (0, _v6.jsx)(_v31.Box, {
        flex: 1,
        minH: 0,
        overflow: "hidden",
        children: _v15 ? (0, _v6.jsx)(_v126, {
          queryUrl: _v0,
          searchText: _v9,
          onClearSearch: _v10,
          authToken: _v1,
          parentLoading: _v2,
          inputType: "checkbox",
          selectedClips: _v3,
          onSelectedClipsChange: _v4,
          onNoInitialClips: _v20,
          onClipsLoaded: _v14,
          sort: _v131[_v11].sortBy,
          direction: _v131[_v11].sortDirection,
          showAuthor: _v6,
          filterNonProfileVideos: !0,
          isVerticalClipAllowed: !0,
          isUpcomingEventAllowed: !0,
          isOnDemandAllowed: !0
        }) : (0, _v6.jsx)(_v125, {
          icon: (0, _v6.jsx)(_v108.VideosStack, {
            boxSize: "md"
          }),
          header: (0, _v6.jsx)(_v18.Text, {
            as: "p",
            variant: "body-xl",
            color: "text-secondary",
            children: _v5
          })
        })
      })]
    });
  }
  let _v133 = async () => {
    let _v0 = await fetch("/_next/jwt?only_public=true", {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    if (_v0.ok) return (await _v0.json()).token;
    throw _v0;
  };
  function _v134({
    onSubmit: _v0,
    onDismiss: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3
  }) {
    let [_v4, _v5] = (0, _v16.useState)([]),
      [_v6, _v7] = (0, _v16.useState)(null),
      [_v8, _v9] = (0, _v16.useState)(!1),
      [_v10, _v11] = (0, _v16.useState)(!1),
      [_v12, _v13] = (0, _v16.useState)(_v2),
      [_v14, _v15] = (0, _v16.useState)(0),
      _v16 = (0, _v106.useViewer)(),
      {
        trackUserProfileAutomaticAddVideoToggled: _v17,
        trackUserProfileVideoAdded: _v18
      } = (0, _v24.useProfileTracking)();
    return (0, _v16.useEffect)(() => {
      _v133().then(_v0 => {
        _v7(_v0);
      });
    }, []), (0, _v16.useEffect)(() => {
      _v12 !== _v2 && _v3(_v12);
    }, [_v12]), (0, _v16.useEffect)(() => {
      _v12 !== _v2 && _v13(_v2);
    }, [_v2]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v99.ModalHeader, {
        paddingBottom: 0,
        children: (0, _v6.jsx)(_v75.Header, {
          as: "h4",
          size: "md",
          children: _v51.default.SelectVideos
        })
      }), (0, _v6.jsx)(_v97.ModalBody, {
        padding: 0,
        overflow: "hidden",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        children: (0, _v6.jsxs)(_v102.Tabs, {
          variant: "underline",
          isLazy: !0,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minH: 0,
          onChange: _v0 => {
            _v15(_v0), _v5([]);
          },
          children: [(0, _v6.jsxs)(_v103.TabList, {
            paddingX: "6",
            children: [(0, _v6.jsx)(_v101.Tab, {
              children: _v51.default.MyPublicVideos
            }), (0, _v6.jsx)(_v101.Tab, {
              children: _v51.default.CreditedVideos
            }), (0, _v6.jsx)(_v102.TabIndicator, {})]
          }), (0, _v6.jsxs)(_v105.TabPanels, {
            flex: 1,
            minH: 0,
            overflow: "hidden",
            children: [(0, _v6.jsx)(_v104.TabPanel, {
              h: "100%",
              overflow: "hidden",
              p: 0,
              display: "flex",
              flexDirection: "column",
              children: (0, _v6.jsx)(_v132, {
                queryUrl: `/users/${_v16?.user?.id}/videos`,
                authToken: _v6 ? `jwt ${_v6}` : void 0,
                parentLoading: !_v6,
                selectedClips: _v4,
                onSelectedClipsChange: _v5,
                emptyStateText: _v12 ? _v51.default.PublicVideoAutoAddText : _v51.default.PublicVideosEmptyText
              })
            }), (0, _v6.jsx)(_v104.TabPanel, {
              h: "100%",
              overflow: "hidden",
              p: 0,
              display: "flex",
              flexDirection: "column",
              children: (0, _v6.jsx)(_v132, {
                queryUrl: `/users/${_v16?.user?.id}/appearances`,
                selectedClips: _v4,
                onSelectedClipsChange: _v5,
                emptyStateText: _v51.default.CreditsEmptyText,
                showAuthor: !0
              })
            })]
          })]
        })
      }), (0, _v6.jsx)(_v98.ModalFooter, {
        borderTop: "1px solid",
        borderColor: "stroke",
        children: (0, _v6.jsxs)(_v33.Flex, {
          flexGrow: 1,
          flexDirection: {
            base: "column",
            sm: "row"
          },
          alignItems: {
            base: "stretch",
            sm: "center"
          },
          justifyContent: "space-between",
          gap: "sm",
          children: [(0, _v6.jsxs)(_v33.Flex, {
            alignItems: "center",
            gap: "sm",
            flex: "1",
            minW: 0,
            children: [(0, _v6.jsx)(_v100.Switch, {
              size: "sm",
              isChecked: _v12,
              onChange: () => {
                let _v0 = !_v12;
                _v17({
                  userProfileAutomaticAddVideoValue: _v0
                }), _v13(_v0);
              },
              name: "videoToggle",
              id: "auto-add-public-videos",
              flexShrink: 0
            }), (0, _v6.jsx)(_v18.Text, {
              as: "label",
              htmlFor: "auto-add-public-videos",
              fontSize: "sm",
              lineHeight: "base",
              whiteSpace: "normal",
              cursor: "pointer",
              children: _v51.default.PublicVideosToggleText
            })]
          }), (0, _v6.jsxs)(_v96.HStack, {
            spacing: "sm",
            flexShrink: 0,
            justifyContent: {
              base: "flex-end",
              sm: "initial"
            },
            children: [(0, _v6.jsx)(_v32.Button, {
              variant: "secondary",
              onClick: () => !_v8 && _v1(),
              children: _v51.default.Cancel
            }), (0, _v6.jsx)(_v32.Button, {
              variant: _v10 ? "destructive" : "primary",
              onClick: () => {
                _v9(!0), _v0(_v4).then(() => {
                  _v18({
                    userProfileVideoSourceTab: 1 === _v14 ? "credited_videos" : "my_public_videos",
                    userProfileVideoCount: _v4.length
                  }), _v9(!1);
                }).catch(() => {
                  _v9(!1), _v11(!0), setTimeout(() => _v11(!1), 0);
                });
              },
              isDisabled: _v8 || !_v4.length,
              isLoading: _v8,
              children: _v51.default.AddToProfile
            })]
          })]
        })
      })]
    });
  }
  let _v135 = function (_v0, _v1 = [], _v2) {
    (0, _v16.useEffect)(() => {
      if (!_v0) return;
      let _v0 = _v2?.current || document,
        _v1 = _v0 => {
          _v0?.(_v0);
        };
      return _v0.addEventListener("keydown", _v1), () => _v0.removeEventListener("keydown", _v1);
    }, _v1);
  };
  var _v136 = _v0.i(0);
  function _v137(_v0, _v1, _v2) {
    let _v3 = {
      product: "Profile Page",
      path: window.location.pathname,
      location: "profile_page"
    };
    _v136.BigPictureClient.sendEvent(new _v136.Event(_v0, _v1, {
      ..._v3,
      ..._v2
    }));
  }
  function _v138({
    isOpen: _v0,
    onClose: _v1,
    onSubmit: _v2,
    shouldAutoAddVideos: _v3,
    toggleAutoAddVideos: _v4
  }) {
    return _v135(_v0 ? _v0 => _v61(_v0, _v1) : void 0, [_v0, _v1]), (0, _v6.jsxs)(_v34.Modal, {
      onClose: _v1,
      isOpen: _v0,
      children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
        width: "90vw",
        maxWidth: (0, _v47.rem)(662),
        height: "85vh",
        maxHeight: (0, _v47.rem)(752),
        padding: 0,
        overflow: "hidden",
        children: (0, _v6.jsx)(_v134, {
          shouldAutoAddVideos: _v3,
          toggleAutoAddVideos: _v4,
          onSubmit: async _v0 => {
            await _v2(_v0), _v1();
          },
          onDismiss: () => {
            _v1(), _v137(_v49.BPEvent.CLOSE_ADD_VIDEO_MODAL, 1);
          }
        })
      })]
    });
  }
  function _v139({
    shouldAutoAddVideos: _v0,
    toggleAutoAddVideos: _v1,
    showAutoAddVideosNotification: _v2,
    updatePublicVideosCount: _v3
  }) {
    let [_v4, _v5] = (0, _v16.useState)(!1),
      {
        data: _v6
      } = (0, _v16.useContext)(_v89),
      _v7 = (0, _v16.useMemo)(() => _v65(_v6), [_v6]),
      {
        addVideosToSection: _v8,
        videoLoading: _v9
      } = _v95("", void 0, void 0, !1),
      {
        trackUserProfileAddVideoClicked: _v10
      } = (0, _v24.useProfileTracking)(),
      _v11 = async _v0 => {
        if (!_v7[0]) return;
        let _v1 = _v0.map(_v0 => _v0.uri);
        await _v8(_v7[0].uri, 0, _v1, _v3);
      };
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v86.Tooltip, {
        label: _v51.default.AddVideo,
        shouldWrapChildren: !0,
        children: (0, _v6.jsx)(_v33.Flex, {
          as: "button",
          type: "button",
          boxSize: "sm",
          borderRadius: "sm",
          bg: "button-secondary-default",
          align: "center",
          justify: "center",
          border: "none",
          cursor: _v9 ? "not-allowed" : "pointer",
          _hover: _v9 ? void 0 : {
            bg: "button-secondary-hover"
          },
          "aria-label": _v51.default.AddVideo,
          "aria-disabled": _v9,
          disabled: _v9,
          onClick: () => {
            _v9 || (_v137(_v49.BPEvent.CLICK_TO_ADD_VIDEO, 1), _v10(), _v2(), _v5(!0));
          },
          children: (0, _v6.jsx)(_v87.PlusSquare, {
            boxSize: (0, _v47.rem)(20)
          })
        })
      }), (0, _v6.jsx)(_v138, {
        isOpen: _v4,
        onClose: () => _v5(!1),
        onSubmit: _v11,
        shouldAutoAddVideos: _v0,
        toggleAutoAddVideos: _v1
      })]
    });
  }
  var _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0);
  async function _v144({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v142.measureLatency)("getUserCollaborators", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/collaborators?fields=${_v1.map(_v143.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v143.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v143.deepCamelCase)(_v1);
    });
  }
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  function _v147(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v146.useGctlConfig)();
    return (0, _v124.default)(_v2 ? `/users/${_v2.where.userId}/collaborators${(0, _v145.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v144({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v141.default.env.STORYBOOK && (0, _v145.assignMswData)(_v147, {
    endpoint: "/users/:userId/collaborators",
    method: "GET"
  }), "true" === _v141.default.env.STORYBOOK && (0, _v145.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v90.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v146.useGctlConfig)(),
      [_v5, _v6] = (0, _v145.useInternalState)();
    return [(0, _v16.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/collaborators${(0, _v145.serializeQuery)(_v0)}`, _v144({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/collaborators",
    method: "GET"
  });
  var _v148 = _v0.i(0),
    _v149 = _v0.i(0);
  function _v150({
    collaborator: _v0
  }) {
    let [_v1, _v2] = (0, _v149.getAvatarImages)(_v0.pictures?.sizes),
      _v3 = (0, _v6.jsx)(_v111.Avatar, {
        src: _v1,
        srcSet: _v2,
        alt: _v0.name,
        size: "md",
        nameProps: {
          name: _v0.name ?? ""
        }
      });
    return (0, _v6.jsx)(_v148.UserCard, {
      user: _v0,
      profileUrl: _v0.link,
      openDelay: 500,
      children: (0, _v6.jsx)(_v31.Box, {
        as: "a",
        href: _v0.link,
        children: _v3
      })
    });
  }
  let _v151 = _v16.default.memo(function ({
    userId: _v0
  }) {
    let {
      data: _v1,
      isLoading: _v2
    } = _v147({
      where: {
        userId: _v0
      },
      select: ["backgroundVideo", "link", "locationDetails.formattedAddress", "metadata.connections.followers.total", "metadata.publicVideos.total", "name", "pictures.sizes", "skills.name", "uri"],
      headers: {
        Accept: "application/vnd.vimeo.*+json;version=3.4.2"
      }
    });
    return !_v2 && _v1?.total ? (0, _v6.jsxs)(_v81, {
      fullWidth: !0,
      children: [(0, _v6.jsxs)(_v33.Flex, {
        align: "center",
        px: "md",
        gap: "xs",
        mb: (0, _v47.rem)(10),
        children: [(0, _v6.jsx)(_v75.Header, {
          size: "sm",
          as: "p",
          mb: 0,
          children: _v51.default.Collaborators
        }), (0, _v6.jsx)(_v86.Tooltip, {
          label: _v51.default.AddCollaboratorsInVideoSettings,
          placement: "top",
          shouldWrapChildren: !0,
          children: (0, _v6.jsx)(_v140.InfoCircle, {
            width: 16,
            height: 16,
            color: "text-tertiary"
          })
        })]
      }), (0, _v6.jsx)(_v33.Flex, {
        wrap: "wrap",
        gap: "sm",
        px: "md",
        children: _v1.data.map(_v0 => (0, _v6.jsx)(_v150, {
          collaborator: _v0
        }, _v0.uri))
      })]
    }) : null;
  });
  var _v152 = _v0.i(0),
    _v153 = _v0.i(0);
  function _v154({
    onRemove: _v0,
    onReplace: _v1
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      position: "absolute",
      top: "md",
      right: "md",
      zIndex: 1,
      opacity: 0,
      transition: "opacity 200ms ease",
      _groupHover: {
        opacity: 1
      },
      _groupFocusWithin: {
        opacity: 1
      },
      children: (0, _v6.jsxs)(_v153.ButtonGroup, {
        spacing: "sm",
        children: [(0, _v6.jsx)(_v32.Button, {
          variant: "primary",
          size: "md",
          onClick: _v1,
          children: _v51.default.Replace
        }), (0, _v6.jsx)(_v32.Button, {
          variant: "destructive",
          size: "md",
          onClick: _v0,
          children: _v51.default.Remove
        })]
      })
    });
  }
  var _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  function _v157({
    subTitle: _v0,
    onClick: _v1
  }) {
    return (0, _v6.jsx)(_v155.Show, {
      above: "md",
      children: (0, _v6.jsx)(_v32.Button, {
        size: "md",
        leftIcon: (0, _v6.jsx)(_v156.ImagePlus, {
          boxSize: "lg"
        }),
        variant: "secondary",
        onClick: _v1,
        children: _v0
      })
    });
  }
  var _v158 = _v0.i(0);
  function _v159({
    configUrl: _v0,
    yPosition: _v1,
    poster: _v2,
    start: _v3,
    end: _v4,
    clipUrl: _v5
  }) {
    let [_v6, _v7] = (0, _v16.useState)(!1),
      _v8 = (0, _v16.useRef)(null),
      _v9 = (0, _v16.useRef)(null),
      _v10 = (0, _v16.useRef)(null),
      _v11 = (0, _v16.useRef)(null),
      _v12 = (0, _v106.useViewer)(),
      _v13 = _v12?.ofcomQualifies && !_v12?.user,
      {
        player: _v14
      } = (0, _v158.usePlayer)(_v8, Number(_v5), !0, _v0, !0, "auto"),
      {
        width: _v15
      } = (0, _v42.useWindowSize)(),
      _v16 = (0, _v16.useMemo)(() => _v2, [_v2]),
      _v17 = (0, _v16.useCallback)(_v0 => {
        if (_v0.current && _v9.current) {
          let {
              offsetHeight: _v0
            } = _v0.current,
            _v1 = _v0 * _v1 / 100,
            _v2 = _v9.current.offsetHeight / 2;
          _v0.current.style.top = `-${_v1 - _v2}px`;
        }
      }, [_v1]);
    return (0, _v16.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v4 - .501 && (_v14.currentTime = _v3);
      };
      return _v14 && (_v14.currentTime = _v3, _v14.on("timeupdate", _v0)), () => {
        _v14 && _v14.off("timeupdate", _v0);
      };
    }, [_v14, _v3, _v4]), (0, _v16.useEffect)(() => {
      _v14 && !_v13 && Promise.resolve().then(() => _v14.play()).then(() => _v7(!0)).catch(_v0 => {
        if (_v0 && "AbortError" !== _v0.name && "NoFiles" !== _v0.name) throw _v0;
      });
    }, [_v14]), (0, _v16.useEffect)(() => {
      _v7(!1);
    }, [_v5]), (0, _v16.useEffect)(() => {
      _v17(_v10), _v17(_v11);
    }, [_v17, _v15, _v6, _v16]), (0, _v6.jsxs)(_v160, {
      ref: _v9,
      children: [(0, _v6.jsx)(_v161, {
        ref: _v10,
        hide: !_v6,
        children: (0, _v6.jsx)("div", {
          ref: _v8
        })
      }), !_v6 && (0, _v6.jsx)(_v161, {
        ref: _v11,
        children: (0, _v6.jsx)(_v162, {
          src: _v16,
          alt: _v5,
          onLoad: () => _v17(_v11)
        })
      })]
    });
  }
  let _v160 = _v28.default.section.withConfig({
      displayName: "ProfileVideo__Wrapper",
      componentId: "sc-8dea97ec-0"
    })`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`,
    _v161 = _v28.default.article.withConfig({
      displayName: "ProfileVideo__VideoImageContainer",
      componentId: "sc-8dea97ec-1"
    })`
  position: absolute;
  min-width: 100%;
  left: 0;
  right: 0;
  display: block;
  visibility: visible;

  ${({
      hide: _v0
    }) => _v0 && _v28.css`
      visibility: hidden;
    `}
`,
    _v162 = _v28.default.img.withConfig({
      displayName: "ProfileVideo__Image",
      componentId: "sc-8dea97ec-2"
    })`
  height: 100%;
  width: 100%;
`;
  var _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0);
  function _v166({
    showCropper: _v0,
    setYPosition: _v1,
    children: _v2
  }) {
    let _v3 = (0, _v16.useRef)(null),
      _v4 = (0, _v16.useRef)(null),
      [_v5, _v6] = (0, _v16.useState)(0);
    (0, _v16.useEffect)(() => {
      if (_v3.current && _v0) {
        let {
          offsetHeight: _v0,
          offsetWidth: _v1
        } = _v3.current;
        _v6(18 * _v1 / 100 / _v0 * 100);
      }
    }, [_v3, _v0]);
    let _v7 = (0, _v165.useGesture)({
      onDrag: ({
        down: _v0,
        delta: [, _v1]
      }) => {
        if (_v4.current) {
          _v4.current.style.cursor = _v0 ? "grabbing" : "grab";
          let _v0 = _v3.current?.offsetHeight || 0,
            _v1 = 100 * _v4.current.offsetHeight / _v0,
            _v2 = +_v4.current.style.top.replace("%", "") + (0 === _v1 ? 0 : _v1 / _v0 * 100);
          _v2 > 0 && _v2 < 100 - _v1 && (_v4.current.style.top = _v2 + "%");
        }
      },
      onDragEnd: () => {
        if (_v4.current) {
          let _v0 = +_v4.current.style.top.replace("%", "");
          _v0 > 0 && _v0 < 82 && _v1(_v0 + _v5 / 2);
        }
      }
    });
    return (0, _v6.jsxs)(_v167, {
      ref: _v3,
      children: [_v0 && (0, _v6.jsxs)(_v171, {
        ref: _v4,
        ..._v7(),
        style: {
          top: `${(100 - _v5) / 2}%`
        },
        children: [(0, _v6.jsx)(_v169, {}), (0, _v6.jsx)(_v170, {})]
      }), _v2]
    });
  }
  let _v167 = _v28.default.section.withConfig({
      displayName: "Cropper__Wrapper",
      componentId: "sc-12336d14-0"
    })`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,
    _v168 = _v28.css`
  &:before,
  &:after {
    content: '';
    width: ${(0, _v27.rem)(20)};
    height: ${(0, _v27.rem)(20)};
    border-style: solid;
    border-color: ${_v38.bokehTheme.colors.white};
    position: absolute;
  }

  &:before {
    left: ${(0, _v27.rem)(3)};
    border-right: none;
  }

  &:after {
    right: ${(0, _v27.rem)(3)};
    border-left: none;
  }
`,
    _v169 = _v28.default.div.withConfig({
      displayName: "Cropper__TopContainer",
      componentId: "sc-12336d14-1"
    })`
  ${_v168};
  &:before,
  &:after {
    top: ${(0, _v27.rem)(3)};
    border-bottom: none;
  }
`,
    _v170 = _v28.default.div.withConfig({
      displayName: "Cropper__BottomContainer",
      componentId: "sc-12336d14-2"
    })`
  ${_v168};
  &:before,
  &:after {
    bottom: ${(0, _v27.rem)(3)};
    border-top: none;
  }
`,
    _v171 = _v28.default.div.withConfig({
      displayName: "Cropper__CropBox",
      componentId: "sc-12336d14-3"
    })`
  width: 100%;
  z-index: 10;
  position: absolute;
  padding-top: ${18}%;

  &:hover {
    cursor: grab;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 1000%;
    left: 0;
    right: 0;
  }

  &:before {
    bottom: 100%;
  }

  &:after {
    top: 100%;
  }
`;
  var _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0);
  function _v176({
    label: _v0,
    duration: _v1,
    hasError: _v2,
    onInvalidFormat: _v3,
    onChange: _v4,
    onSubmit: _v5
  }) {
    let [_v6, _v7] = (0, _v16.useState)("00:00:00");
    (0, _v16.useEffect)(() => {
      _v7(_v82(_v1, "hh:mm:SS"));
    }, [_v1]);
    let _v8 = (0, _v16.useMemo)(() => {
        let _v0 = _v6.split(":").map(_v0 => /^\d$/.test(_v0) ? "0" + _v0 : _v0),
          _v1 = 3 - _v0.length;
        return _v1 > 0 ? [...Array(_v1).keys()].map(() => "00").join(":") + ":" + _v6 : 0 === _v1 ? _v0.join(":") : -1;
      }, [_v6]),
      _v9 = () => {
        _v82(_v1, "hh:mm:SS") !== _v8 && (-1 !== _v8 && /^[0-9]+:[0-5][0-9]:[0-5][0-9]$/.test(_v8) ? _v5(_v8.split(":").map((_v0, _v1) => parseInt(_v0, 10) * Math.pow(60, 2 - _v1)).reduce((_v0, _v1) => _v0 + _v1, 0)) : _v3());
      };
    return (0, _v6.jsxs)(_v178, {
      isInvalid: _v2,
      children: [(0, _v6.jsx)(_v179, {
        children: (0, _v6.jsx)(_v181, {
          children: _v0
        })
      }), (0, _v6.jsx)(_v180, {
        size: "sm",
        value: _v6,
        onChange: _v0 => {
          _v4?.(), _v7(_v0.target.value);
        },
        onKeyDown: _v0 => {
          _v0.keyCode === _v49.KeyCodes.ENTER && _v9();
        },
        onBlur: _v9
      }), _v2 && (0, _v6.jsx)(_v173.FormErrorMessage, {
        children: (0, _v6.jsx)(_v45.Paragraph, {
          size: "sm",
          role: "note",
          color: "red.500",
          children: _v51.default.Invalid
        })
      })]
    });
  }
  let _v177 = _v28.css`
  font-size: ${(0, _v27.rem)(14)};
  letter-spacing: 0;
  line-height: ${(0, _v27.rem)(20)};
  font-weight: normal;
`,
    _v178 = (0, _v28.default)(_v172.FormControl).withConfig({
      displayName: "TimeInput__CompactFormControl",
      componentId: "sc-15e95bb9-0"
    })`
  &&& {
    margin-bottom: 0;
  }
`,
    _v179 = (0, _v28.default)(_v174.FormLabel).withConfig({
      displayName: "TimeInput__CompactFormLabel",
      componentId: "sc-15e95bb9-1"
    })`
  &&& {
    margin-bottom: 0.2rem;
  }
`,
    _v180 = (0, _v28.default)(_v175.Input).withConfig({
      displayName: "TimeInput__InputField",
      componentId: "sc-15e95bb9-2"
    })`
  ${_v177};
`,
    _v181 = _v28.default.span.withConfig({
      displayName: "TimeInput__Label",
      componentId: "sc-15e95bb9-3"
    })`
  ${_v177};
`;
  function _v182({
    start: _v0,
    end: _v1,
    duration: _v2,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v16.useState)(!1),
      [_v6, _v7] = (0, _v16.useState)(!1);
    (0, _v16.useEffect)(() => {
      _v5(!1);
    }, [_v0]), (0, _v16.useEffect)(() => {
      _v7(!1);
    }, [_v1]);
    let _v8 = (_v0, _v1) => {
      let _v2,
        _v3,
        _v4,
        _v5 = (_v2 = Math.floor(_v0), _v3 = Math.floor(_v1), (_v4 = Math.floor(_v0)) >= (_v1 ? 0 : _v2 + 1) && _v4 <= (_v1 ? _v3 - 1 : _v2));
      (_v1 ? _v5 : _v7)(!_v5), _v5 && _v3({
        from: _v1 ? _v0 : _v0,
        to: _v1 ? _v1 : _v0
      });
    };
    return (0, _v6.jsxs)(_v183, {
      children: [(0, _v6.jsx)(_v184, {
        children: (0, _v6.jsx)(_v176, {
          duration: _v0,
          onSubmit: _v0 => _v8(_v0, !0),
          onChange: () => _v5(!1),
          hasError: _v4,
          onInvalidFormat: () => _v5(!0),
          label: _v51.default.Start
        })
      }), (0, _v6.jsx)(_v184, {
        children: (0, _v6.jsx)(_v176, {
          duration: _v1,
          onSubmit: _v0 => _v8(_v0, !1),
          onChange: () => _v7(!1),
          hasError: _v6,
          onInvalidFormat: () => _v7(!0),
          label: _v51.default.End
        })
      })]
    });
  }
  let _v183 = _v28.default.section.withConfig({
      displayName: "InputContainer__Container",
      componentId: "sc-6380baea-0"
    })`
  margin-top: ${(0, _v27.rem)(29)};
`,
    _v184 = _v28.default.article.withConfig({
      displayName: "InputContainer__InputWrapper",
      componentId: "sc-6380baea-1"
    })`
  width: ${(0, _v27.rem)(100)};
  display: inline-block;
  &:first-child {
    margin-right: ${(0, _v27.rem)(14)};
  }
`;
  var _v185 = ((_v2 = _v185 || {}).LEFT = "left", _v2.RIGHT = "right", _v2);
  let _v186 = {
      h: (0, _v27.rem)(32),
      minW: (0, _v27.rem)(_v49.SCRUBBER_WIDTH),
      color: "white",
      bg: "blue.500",
      lineHeight: (0, _v27.rem)(28),
      textAlign: "center",
      cursor: "grab",
      position: "relative",
      sx: {
        _after: {
          content: '"|"',
          fontSize: (0, _v27.rem)(12)
        }
      }
    },
    _v187 = {
      as: "aside",
      bg: "popover",
      color: "text-primary",
      position: "absolute",
      px: (0, _v27.rem)(12),
      top: `-${(0, _v27.rem)(34)}`,
      fontSize: (0, _v27.rem)(14),
      letterSpacing: (0, _v27.rem)(.1),
      lineHeight: (0, _v27.rem)(24),
      transition: "opacity 100ms linear"
    },
    _v188 = {
      as: "time",
      color: "text-tertiary",
      fontSize: (0, _v27.rem)(12),
      letterSpacing: (0, _v27.rem)(.17),
      lineHeight: (0, _v27.rem)(14)
    };
  function _v189({
    duration: _v0 = 0,
    onDrag: _v1,
    onDragStart: _v2,
    onDragEnd: _v3
  }) {
    let [_v4, _v5] = (0, _v16.useState)(0),
      [_v6, _v7] = (0, _v16.useState)(0),
      [_v8, _v9] = (0, _v16.useState)(!1),
      [_v10, _v11] = (0, _v16.useState)(!1),
      _v12 = (0, _v16.useRef)(null),
      _v13 = (0, _v16.useRef)(null),
      _v14 = (0, _v16.useRef)(null),
      _v15 = (0, _v16.useRef)(null),
      _v16 = (0, _v16.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (0 === _v0 ? 0 : (_v0 > _v0 ? _v0 : _v0) / _v0) * _v0;
      }, [_v0, _v12]),
      _v17 = (0, _v16.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (_v0 > _v0 ? _v0 : _v0) / _v0 * _v0;
      }, [_v0, _v12]),
      _v18 = (0, _v16.useMemo)(() => {
        let _v0 = Math.round(_v16()(_v4)),
          _v1 = Math.round(_v16()(_v6));
        return _v3({
          from: _v0,
          to: _v1
        }), {
          from: _v0,
          to: _v1
        };
      }, [_v16, _v4, _v6]),
      _v19 = (0, _v16.useMemo)(() => ({
        from: _v82(_v18.from),
        to: _v82(_v18.to)
      }), [_v18]),
      _v20 = (_v0, _v1) => {
        let _v2 = _v1 ? _v14 : _v15;
        _v2.current && (_v2.current.style.cursor = _v0 ? "grabbing" : "grab");
      },
      _v21 = (_v0, _v1, _v2) => {
        let _v3 = _v0 * _v1 / 100;
        _v2 ? _v5(_v3) : _v7(_v1 - _v3);
      },
      _v22 = (_v0, _v1) => {
        let _v2 = _v13.current;
        if (_v2) {
          let _v0,
            _v1 = _v12.current?.offsetWidth || 0,
            _v2 = Number(_v2.style[_v1].replace("%", "")) + 100 * _v0 / _v1;
          _v2 >= 0 && (_v0 = 100 * _v17()(1) / _v1, _v2 <= 100 * ("left" === _v1 ? _v6 : _v1 - _v4) / _v1 - _v0) && (_v2.style[_v1] = _v2 + "%", _v21(_v2, _v1, "left" === _v1));
        }
      },
      _v23 = (0, _v165.useGesture)({
        onDrag: ({
          down: _v0,
          delta: [_v1]
        }) => {
          _v20(_v0, !0), _v9(_v0), _v22(_v1, "left"), _v1(_v18.from);
        },
        onDragEnd: () => _v3({
          ..._v18
        }),
        onDragStart: _v2
      }),
      _v24 = (0, _v165.useGesture)({
        onDrag: ({
          down: _v0,
          delta: [_v1]
        }) => {
          _v20(_v0, !1), _v11(_v0), _v22(-_v1, "right"), _v1(_v18.to);
        },
        onDragEnd: () => _v3({
          ..._v18
        }),
        onDragStart: _v2
      }),
      _v25 = (0, _v165.useGesture)({
        onDrag: ({
          delta: [_v0]
        }) => {
          let _v1 = _v13.current;
          if (_v1) {
            let _v0 = _v12.current?.offsetWidth || 0,
              _v1 = 100 * _v0 / _v0,
              _v2 = Number(_v1.style.left.replace("%", "")),
              _v3 = Number(_v1.style.right.replace("%", "")) - _v1,
              _v4 = _v2 + _v1;
            _v4 >= 0 && _v3 >= 0 && (_v1.style.left = _v4 + "%", _v1.style.right = _v3 + "%", _v21(_v4, _v0, !0), _v21(_v3, _v0, !1), _v1(_v18.from));
          }
        },
        onDragEnd: () => _v3({
          ..._v18
        }),
        onDragStart: _v2
      });
    return (0, _v16.useEffect)(() => {
      _v13.current && _v7(_v13.current.offsetWidth);
    }, [_v13]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v31.Box, {
        ref: _v12,
        bg: "fill-component-secondary",
        w: "100%",
        h: (0, _v27.rem)(32),
        borderRadius: (0, _v27.rem)(2),
        position: "relative",
        boxSizing: "border-box",
        children: (0, _v6.jsxs)(_v31.Box, {
          ref: _v13,
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          h: "100%",
          bg: "rgba(66, 153, 225, 0.3)",
          children: [(0, _v6.jsx)(_v31.Box, {
            ..._v23(),
            ref: _v14,
            ..._v186,
            borderTopLeftRadius: (0, _v27.rem)(2),
            borderBottomLeftRadius: (0, _v27.rem)(2),
            children: (0, _v6.jsx)(_v31.Box, {
              ..._v187,
              opacity: +!!_v8,
              left: `-${(0, _v27.rem)(24)}`,
              children: _v19.from
            })
          }), (0, _v6.jsx)(_v31.Box, {
            ..._v25(),
            w: "100%",
            h: "100%",
            cursor: "move"
          }), (0, _v6.jsx)(_v31.Box, {
            ..._v24(),
            ref: _v15,
            ..._v186,
            borderTopRightRadius: (0, _v27.rem)(2),
            borderBottomRightRadius: (0, _v27.rem)(2),
            children: (0, _v6.jsx)(_v31.Box, {
              ..._v187,
              opacity: +!!_v10,
              right: `-${(0, _v27.rem)(24)}`,
              children: _v19.to
            })
          })]
        })
      }), (0, _v6.jsxs)(_v31.Box, {
        mt: (0, _v27.rem)(7),
        display: "flex",
        justifyContent: "space-between",
        children: [(0, _v6.jsx)(_v31.Box, {
          ..._v188,
          children: _v82(0)
        }), (0, _v6.jsx)(_v31.Box, {
          ..._v188,
          children: _v82(_v0)
        })]
      }), (0, _v6.jsx)(_v182, {
        duration: _v0,
        start: _v18.from,
        end: _v18.to,
        onChange: ({
          from: _v0,
          to: _v1
        }) => {
          let _v2 = _v17()(_v0),
            _v3 = _v17()(_v0 - _v1);
          if (_v12.current && _v13.current) {
            let _v0 = _v12.current.offsetWidth,
              _v1 = _v2 / _v0 * 100;
            _v13.current.style.left = _v1 + "%", _v13.current.style.right = _v3 / _v0 * 100 + "%", _v5(Number(_v2.toFixed(2))), _v7(Number(_v17()(_v1).toFixed(2)));
          }
        }
      })]
    });
  }
  var _v190 = _v0.i(0);
  function _v191({
    size: _v0 = "xl"
  }) {
    return (0, _v6.jsx)(_v192, {
      children: (0, _v6.jsx)(_v190.Spinner, {
        size: _v0
      })
    });
  }
  let _v192 = _v28.default.aside.withConfig({
    displayName: "OverlayLoader__LoaderWrapper",
    componentId: "sc-cd25919c-0"
  })`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
  function _v193({
    coverClip: {
      configUrl: _v0,
      clipId: _v1,
      duration: _v2
    },
    setYPosition: _v3,
    setTimeBounds: _v4,
    timeBounds: _v5,
    onVideoLoad: _v6,
    onVideoUnavailable: _v7
  }) {
    let [_v8, _v9] = (0, _v16.useState)(!1),
      {
        startTime: _v10,
        endTime: _v11
      } = _v5,
      _v12 = (0, _v16.useRef)(null),
      _v13 = (0, _v16.useRef)(null),
      _v14 = (0, _v16.useRef)(!1),
      {
        player: _v15
      } = (0, _v158.usePlayer)(_v12, Number(_v1), !0, _v0),
      _v16 = () => {
        _v13.current = _v15 ? Promise.resolve().then(() => _v15.play()).catch(_v0 => {
          if (_v0 && "AbortError" !== _v0.name) {
            if ("NoFiles" === _v0.name) {
              _v14.current && _v7();
              return;
            }
            throw _v0;
          }
        }) : null;
      };
    return (0, _v16.useEffect)(() => (_v14.current = !0, () => {
      _v14.current = !1;
    }), []), (0, _v16.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v11 + _v49.TRIMMER_ROUND_OFFSET && (_v15.currentTime = _v10);
      };
      return _v15 && (_v15.muted = !0, _v15.on("timeupdate", _v0), _v15.once("timeupdate", () => {
        _v9(!0), _v6();
      })), () => {
        _v15 && _v15.off("timeupdate", _v0);
      };
    }, [_v15, _v10, _v11, _v8, _v6]), (0, _v16.useEffect)(() => {
      _v16();
    }, [_v15]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [!_v8 && (0, _v6.jsx)(_v191, {}), (0, _v6.jsxs)(_v196, {
        isVideoBuffering: !_v8,
        children: [(0, _v6.jsx)(_v194, {
          children: (0, _v6.jsx)(_v166, {
            showCropper: _v8,
            setYPosition: _v3,
            children: (0, _v6.jsx)(_v195, {
              ref: _v12
            })
          })
        }), _v15 && (0, _v6.jsx)(_v189, {
          onDrag: _v0 => {
            _v15.currentTime = _v0;
          },
          onDragStart: () => _v13.current?.then(() => _v15?.pause()),
          onDragEnd: ({
            from: _v0,
            to: _v1
          }) => {
            _v4({
              ..._v5,
              startTime: _v0,
              endTime: _v1
            }), _v16();
          },
          duration: _v2
        })]
      })]
    });
  }
  let _v194 = _v28.default.div.withConfig({
      displayName: "VideoPlayer__CropWrapper",
      componentId: "sc-7a6f8e77-0"
    })`
  position: relative;
  width: 100%;
  height: 100%;
`,
    _v195 = _v28.default.div.withConfig({
      displayName: "VideoPlayer__VideoWrapper",
      componentId: "sc-7a6f8e77-1"
    })`
  video {
    display: block;
  }
`,
    _v196 = _v28.default.div.withConfig({
      displayName: "VideoPlayer__VideoContentWrapper",
      componentId: "sc-7a6f8e77-2"
    })`
  padding: ${(0, _v27.rem)(24)};

  ${({
      isVideoBuffering: _v0
    }) => _v0 && _v28.css`
      opacity: 0.15;
      pointer-events: none;
    `}
`;
  function _v197(_v0) {
    let {
        clipUri: _v1,
        setTimeBounds: _v2,
        timeBounds: _v3,
        onLoad: _v4
      } = _v0,
      {
        data: _v5,
        loading: _v6
      } = (0, _v164.useQuery)(`/videos/${_v59(_v1)}?autoplay=1&background=1&default_to_hd=1`);
    return (0, _v16.useEffect)(() => {
      _v5 && _v2({
        ..._v3,
        endTime: _v5.duration
      });
    }, [_v5]), (0, _v6.jsx)(_v198, {
      children: !_v6 && _v5 ? (0, _v6.jsx)(_v193, {
        ..._v0,
        coverClip: {
          clipId: String(_v59(_v5.uri)),
          configUrl: _v5.configUrl,
          duration: _v5.duration
        },
        onVideoLoad: () => _v4(!0)
      }) : (0, _v6.jsx)(_v191, {})
    });
  }
  let _v198 = _v28.default.div.withConfig({
    displayName: "VideoTrimmerAndCrop__SectionContainer",
    componentId: "sc-495247b3-0"
  })`
  position: relative;
  height: 100%;
  overflow: auto;
`;
  function _v199({
    onSubmit: _v0
  }) {
    let [_v1, _v2] = (0, _v16.useState)(0),
      [_v3, _v4] = (0, _v16.useState)(!1),
      [_v5, _v6] = (0, _v16.useState)(),
      [_v7, _v8] = (0, _v16.useState)(!0),
      [_v9, _v10] = (0, _v16.useState)(50),
      [_v11, _v12] = (0, _v16.useState)(!1),
      [_v13, _v14] = (0, _v16.useState)({
        startTime: 0,
        endTime: 0
      }),
      {
        query: _v15,
        setQuery: _v16,
        searchText: _v17,
        clearQuery: _v18
      } = _v130(),
      _v19 = (0, _v106.useViewer)(),
      _v20 = `users/${_v19?.user?.id}/videos`,
      {
        trackUserProfileCoverVideoConfirmed: _v21
      } = (0, _v24.useProfileTracking)(),
      _v22 = (0, _v16.useCallback)(() => _v8(!1), []),
      _v23 = (0, _v16.useCallback)(() => {
        _v6(void 0), _v2(0), _v4(!1);
      }, []),
      _v24 = _v0 => {
        let _v1 = _v1 + _v0;
        if (2 === _v1 && _v5) {
          _v12(!0);
          let _v0 = {
            clipId: _v59(_v5.uri),
            yPosition: Math.trunc(_v9),
            ..._v13
          };
          _v21(), _v0(_v0);
        } else _v2(_v1);
        _v4(0 !== _v1);
      };
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v163.ModalCloseButton, {}), (0, _v6.jsx)(_v99.ModalHeader, {
        paddingBottom: 0,
        children: (0, _v6.jsx)(_v75.Header, {
          as: "h4",
          size: "md",
          children: 0 === _v1 ? _v51.default.PickerHeader : _v51.default.VideoTrimCropModalHeader
        })
      }), _v7 ? (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsx)(_v97.ModalBody, {
          padding: 0,
          overflow: "hidden",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          children: 0 === _v1 ? (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)(_v128, {
              query: _v15,
              onChange: _v16
            }), (0, _v6.jsx)(_v126, {
              queryUrl: _v20,
              searchText: _v17,
              onClearSearch: _v18,
              selectedClips: _v5 ? [_v5] : [],
              onSelectedClipsChange: _v0 => _v6(_v0[0]),
              onNoInitialClips: _v22
            })]
          }) : (0, _v6.jsx)(_v197, {
            clipUri: String(_v5?.uri),
            yPosition: _v9,
            setYPosition: _v10,
            timeBounds: _v13,
            setTimeBounds: _v14,
            onLoad: _v0 => _v4(!_v0),
            onVideoUnavailable: _v23
          })
        }), (0, _v6.jsx)(_v98.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v6.jsxs)(_v33.Flex, {
            flexGrow: "1",
            justify: "space-between",
            align: "center",
            children: [(0, _v6.jsx)(_v18.Text, {
              variant: "body-md",
              children: (0, _v21.translate)({
                singular: "{STEP} of {STEPS}",
                replacements: {
                  STEP: _v1 + 1,
                  STEPS: 2
                },
                dictionary: {
                  es: {
                    singular: "{STEP} de {STEPS}"
                  },
                  "de-DE": {
                    singular: "{STEP} von {STEPS}"
                  },
                  "fr-FR": {
                    singular: "{STEP} sur {STEPS}"
                  },
                  "ja-JP": {
                    singular: "{STEP}／{STEPS}"
                  },
                  "ko-KR": {
                    singular: "{STEP} / {STEPS}"
                  },
                  "pt-BR": {
                    singular: "{STEP} de {STEPS}"
                  },
                  "zh-CN": {
                    singular: "第 {STEP} 步，共 {STEPS} 步"
                  }
                }
              })
            }), (0, _v6.jsxs)(_v96.HStack, {
              spacing: "sm",
              children: [(0, _v6.jsx)(_v32.Button, {
                variant: "secondary",
                onClick: () => _v24(-1),
                isDisabled: 0 === _v1 || _v11,
                children: _v51.default.Back
              }), (0, _v6.jsx)(_v32.Button, {
                variant: "primary",
                onClick: () => {
                  _v3 || _v11 || _v24(1);
                },
                isDisabled: _v11 || _v3 || !_v5,
                isLoading: _v11,
                children: 0 === _v1 ? _v51.default.Next : _v51.default.Done
              })]
            })]
          })
        })]
      }) : (0, _v6.jsx)(_v97.ModalBody, {
        padding: 0,
        children: (0, _v6.jsx)(_v125, {
          icon: (0, _v6.jsx)(_v108.VideosStack, {
            boxSize: "md"
          }),
          header: (0, _v6.jsx)(_v18.Text, {
            as: "p",
            variant: "body-xl",
            color: "text-secondary",
            children: _v51.default.NoVideosYet
          }),
          cta: (0, _v6.jsx)(_v32.Button, {
            as: "a",
            mt: "lg",
            size: "lg",
            variant: "secondary",
            href: "/upload",
            textDecoration: "none",
            children: _v51.default.UploadAVideo
          })
        })
      })]
    });
  }
  let _v200 = /iphone|ipod|ipad|android|webos|blackberry|windows phone|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  function _v201({
    coverVideo: _v0,
    setCoverVideo: _v1
  }) {
    let [_v2, _v3] = (0, _v16.useState)(!1),
      _v4 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        trackUserProfileCoverVideoActionClicked: _v5,
        trackUserProfileCoverAddClicked: _v6
      } = (0, _v24.useProfileTracking)(),
      [{
        put: _v7,
        destroy: _v8
      }, {
        loading: _v9,
        error: _v10,
        data: _v11
      }] = (0, _v152.useMutation)("/me/background_video");
    return (0, _v16.useEffect)(() => {
      !_v9 && _v11 && _v3(_v9);
    }, [_v11, _v9]), (0, _v16.useEffect)(() => {
      _v11 && _v1(_v11);
    }, [_v1, _v11]), (0, _v16.useEffect)(() => {
      !_v11 || _v9 || _v10 || _v4();
    }, [_v11, _v9, _v10, _v4]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v0 ? (0, _v6.jsxs)(_v6.Fragment, {
        children: [!_v9 && (0, _v6.jsx)(_v154, {
          onRemove: () => {
            _v5({
              userProfileCoverVideoAction: "remove"
            }), _v8(), _v1(null);
          },
          onReplace: () => {
            _v5({
              userProfileCoverVideoAction: "replace"
            }), _v3(!0);
          }
        }), (0, _v6.jsx)(_v159, {
          clipUrl: "" + _v0.clipId,
          configUrl: _v0.configUrl,
          end: _v0.endTime,
          start: _v0.startTime,
          poster: _v0.firstFrameURL,
          yPosition: _v0.yPosition
        })]
      }) : (0, _v6.jsx)(_v157, {
        subTitle: _v51.default.AddCoverVideo,
        onClick: () => {
          _v6(), _v3(!0);
        }
      }), (0, _v6.jsxs)(_v34.Modal, {
        onClose: () => _v3(!1),
        isOpen: _v2,
        size: "lg",
        returnFocusOnClose: !1,
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
          width: "90vw",
          height: "85vh",
          maxHeight: (0, _v47.rem)(752),
          padding: 0,
          overflow: "hidden",
          children: (0, _v6.jsx)(_v199, {
            onSubmit: _v0 => {
              _v7({
                variables: (0, _v29.decamelizeDeep)(_v0)
              });
            }
          })
        })]
      })]
    });
  }
  function _v202({
    profile: _v0
  }) {
    let {
        editMode: _v1
      } = (0, _v16.useContext)(_v50.default),
      [_v2, _v3] = (0, _v16.useState)(_v0.backgroundVideo?.[0] || null);
    return (0, _v6.jsx)(_v6.Fragment, {
      children: (_v1 || !!_v2) && (0, _v6.jsx)(_v31.Box, {
        as: "section",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        h: "100%",
        bg: "fill-skeleton",
        _dark: {
          bg: "popover"
        },
        borderRadius: "lg",
        overflow: "hidden",
        mx: "md",
        role: "group",
        children: _v1 && !_v200 ? (0, _v6.jsx)(_v201, {
          coverVideo: _v2,
          setCoverVideo: _v3
        }) : _v2 && (0, _v6.jsx)(_v159, {
          clipUrl: _v2.clipId,
          configUrl: _v2.configUrl,
          end: _v2.endTime,
          start: _v2.startTime,
          poster: _v2.firstFrameURL,
          yPosition: _v2.yPosition
        })
      })
    });
  }
  /ipad|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints, /iphone|ipod|android|webos|blackberry|windows phone/i.test(navigator.userAgent.toLowerCase()), /ipad/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints, /iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase());
  var _v203 = _v0.i(0);
  let _v204 = _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M19 16a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2Zm0-10a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2Zm0-10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2Z",
        fill: "currentColor"
      })
    }),
    _v205 = () => void 0,
    _v206 = async () => void 0,
    _v207 = (0, _v16.createContext)({
      isCreating: !1,
      trigger: _v206,
      stop: _v205,
      registerCreator: _v205
    });
  function _v208({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v16.useState)(!1),
      _v3 = (0, _v16.useRef)(null),
      _v4 = (0, _v16.useCallback)(async () => {
        _v3.current ? await _v3.current.submitOrFocus() : _v2(!0);
      }, []),
      _v5 = (0, _v16.useCallback)(() => {
        _v3.current = null, _v2(!1);
      }, []),
      _v6 = (0, _v16.useCallback)(_v0 => {
        _v3.current = _v0;
      }, []),
      _v7 = (0, _v16.useMemo)(() => ({
        isCreating: _v1,
        trigger: _v4,
        stop: _v5,
        registerCreator: _v6
      }), [_v1, _v4, _v5, _v6]);
    return (0, _v6.jsx)(_v207.Provider, {
      value: _v7,
      children: _v0
    });
  }
  function _v209() {
    return (0, _v16.useContext)(_v207);
  }
  function _v210({
    isDisabled: _v0 = !1
  }) {
    let {
        trigger: _v1
      } = _v209(),
      {
        trackUserProfileSectionCreated: _v2
      } = (0, _v24.useProfileTracking)();
    return (0, _v6.jsx)(_v86.Tooltip, {
      label: _v51.default.AddSection,
      shouldWrapChildren: !0,
      children: (0, _v6.jsx)(_v33.Flex, {
        as: "button",
        type: "button",
        boxSize: "sm",
        borderRadius: "sm",
        bg: "button-secondary-default",
        align: "center",
        justify: "center",
        border: "none",
        mr: "12px",
        cursor: _v0 ? "not-allowed" : "pointer",
        _hover: _v0 ? void 0 : {
          bg: "button-secondary-hover"
        },
        "aria-label": _v51.default.AddSection,
        "aria-disabled": _v0,
        disabled: _v0,
        onClick: () => {
          _v0 || (_v137(_v49.BPEvent.CLICK_TO_CREATE_SECTION, 1), _v2(), _v1());
        },
        children: (0, _v6.jsx)(_v204, {
          boxSize: (0, _v47.rem)(20)
        })
      })
    });
  }
  var _v211 = _v0.i(0);
  function _v212() {
    let {
        mutate: _v0
      } = (0, _v16.useContext)(_v88),
      _v1 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      _v2 = (0, _v92.default)(),
      [{
        loading: _v3,
        called: _v4,
        error: _v5
      }, _v6] = (0, _v16.useState)({
        loading: !1,
        called: !1,
        error: !1
      }),
      _v7 = (0, _v16.useCallback)(_v0 => (_v6({
        loading: !1,
        called: !0,
        error: !0
      }), Promise.reject(_v0)), []),
      _v8 = (0, _v16.useCallback)(() => {
        _v1(), _v6({
          loading: !1,
          called: !0,
          error: !1
        });
      }, [_v1]),
      _v9 = (0, _v16.useCallback)((_v0, _v1) => _v2("me", {
        fields: _v0
      }, _v49.HTTPMethods.PATCH, _v1), [_v2]),
      _v10 = (0, _v16.useCallback)(_v0 => _v0(_v0 => _v0 ? {
        ..._v0,
        ..._v0
      } : _v0, {
        revalidate: !1
      }), [_v0]),
      _v11 = (0, _v16.useCallback)(_v0 => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v1 = (0, _v29.decamelizeDeep)(_v0);
        return _v10(_v0), _v9(Object.keys(_v1).join(","), _v1).then(_v8).catch(_v7);
      }, [_v10, _v7, _v8, _v9]),
      _v12 = (0, _v16.useCallback)(_v0 => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v9("location_details", (0, _v29.decamelizeDeep)(_v0)).then(() => {
        _v10({
          locationDetails: _v0
        }), _v8();
      }).catch(_v7)), [_v10, _v7, _v8, _v9]),
      _v13 = (0, _v16.useCallback)(_v0 => {
        _v0(_v0 => _v0 ? {
          ..._v0,
          profilePreferences: {
            ..._v0.profilePreferences,
            ..._v0.profilePreferences
          }
        } : _v0, {
          revalidate: !1
        });
      }, [_v0]),
      _v14 = (0, _v16.useCallback)((_v0, _v1 = !0) => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        }), _v13(_v0);
        let _v2 = (0, _v29.decamelizeDeep)(_v0);
        return _v9(Object.keys(_v2.profile_preferences).map(_v0 => "profile_preferences." + _v0).join(","), _v2).then(() => {
          _v1 && _v1(), _v6({
            loading: !1,
            called: !0,
            error: !1
          });
        }).catch(_v7);
      }, [_v7, _v1, _v13, _v9]),
      _v15 = (0, _v16.useCallback)(() => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v2("me", {
        fetch_user_profile: "1",
        fields: "metadata.public_videos.total"
      }).then(_v0 => {
        _v0(_v0 => _v0 && _v0 ? {
          ..._v0,
          metadata: {
            ..._v0.metadata,
            ..._v0.metadata
          }
        } : (_v6({
          loading: !1,
          called: !0,
          error: !1
        }), _v0), {
          revalidate: !1
        });
      }).catch(_v7)), [_v2, _v7, _v0]),
      _v16 = (0, _v16.useCallback)(_v0 => _v0 && _v0.json ? _v0.json().then(_v0 => {
        let _v1 = (0, _v29.camelizeDeep)(_v0),
          _v2 = _v1.invalidParameters?.[0]?.errorCode === _v49.EMAIL_INVALID_DOMAIN_ERROR_CODE ? _v51.default.InvalidDomainError : _v51.default.InvalidEmailAddress;
        return _v6({
          loading: !1,
          called: !0,
          error: !0
        }), Promise.reject(_v2);
      }) : Promise.reject(Error("Email update failed: unexpected error shape (no json())")), []),
      _v17 = (0, _v16.useCallback)((_v0, _v1) => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v2("me/contact_emails", void 0, _v0 ? _v1 ? _v49.HTTPMethods.PUT : _v49.HTTPMethods.POST : _v49.HTTPMethods.DELETE, _v0 ? {
        email: _v0
      } : void 0).then(() => {
        _v10(_v0 ? {
          contactEmails: {
            emails: [_v0]
          }
        } : {
          contactEmails: null
        }), _v8();
      }).catch(_v16)), [_v2, _v10, _v16, _v8]),
      _v18 = (0, _v16.useCallback)((_v0, _v1) => {
        _v0(_v0 => {
          if (_v0) {
            let _v0 = [..._v0.websites];
            return _v0 ? _v0[_v1] = {
              ..._v0[_v1],
              ..._v0
            } : _v0.splice(_v1, 1), {
              ..._v0,
              websites: _v0
            };
          }
          return _v0;
        }, {
          revalidate: !1
        });
      }, [_v0]);
    return {
      called: _v4,
      error: _v5,
      fetchPublicVideosCount: _v15,
      loading: _v3,
      onLocationUpdate: _v12,
      onPreferenceUpdate: _v14,
      onUserUpdate: _v11,
      updateEmail: _v17,
      updateLink: (0, _v16.useCallback)((_v0, _v1, _v2) => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v3 = `me/links/${_v1}`;
        if (!_v2) return _v2(_v3, void 0, _v49.HTTPMethods.DELETE).then(() => {
          _v18(null, _v0), _v8();
        }).catch(_v7);
        {
          let _v0 = _v49.HTTPMethods.PATCH;
          return -1 === _v1 && (_v0 = _v49.HTTPMethods.POST, _v3 = "me/links"), _v2(_v3, void 0, _v0, {
            link: _v2
          }).then(_v0 => {
            _v18(_v0, _v0), _v8();
          }).catch(_v7);
        }
      }, [_v2, _v7, _v8, _v18]),
      updateProfilePicture: (0, _v16.useCallback)(_v0 => _v10({
        pictures: _v0
      }), [_v10])
    };
  }
  let _v213 = {
      "&&": {
        paddingRight: (0, _v27.rem)(30)
      },
      "&::-ms-clear": {
        display: "none"
      },
      "&:disabled": {
        pointerEvents: "none",
        backgroundColor: (0, _v27.rgba)(0, 0, 0, .05)
      }
    },
    _v214 = _v16.default.forwardRef(({
      value: _v0,
      size: _v1 = "md",
      placeholder: _v2,
      onSubmit: _v3,
      errorMsg: _v4,
      disabled: _v5 = !1,
      onChange: _v6
    }, _v7) => {
      let [_v8, _v9] = (0, _v16.useState)(""),
        _v10 = (0, _v16.useRef)(null);
      return (0, _v16.useEffect)(() => {
        let _v0 = _v0 => {
            _v0.preventDefault(), _v9("");
          },
          _v1 = _v10.current;
        return _v1?.addEventListener("mousedown", _v0), () => _v1?.removeEventListener("mousedown", _v0);
      }, [_v10, _v8, _v0, _v5]), (0, _v16.useEffect)(() => {
        _v9(_v0);
      }, [_v0]), (0, _v6.jsxs)(_v31.Box, {
        position: "relative",
        children: [(0, _v6.jsx)(_v175.Input, {
          value: _v8 || "",
          onChange: _v0 => {
            _v5 || (_v9(_v0.target.value), _v6?.(_v0));
          },
          size: _v1,
          placeholder: _v2,
          onKeyDown: _v0 => {
            _v5 || (_v0.keyCode === _v49.KeyCodes.ENTER ? _v3(_v8) : _v0.keyCode === _v49.KeyCodes.ESC && _v3(_v0));
          },
          onBlur: () => {
            _v5 || _v3(_v8);
          },
          isInvalid: !!_v4,
          ref: _v7,
          isDisabled: _v5,
          autoFocus: !0,
          sx: _v213
        }), !!_v8 && !_v5 && (0, _v6.jsx)(_v33.Flex, {
          position: "absolute",
          top: 0,
          right: (0, _v27.rem)(4),
          h: "100%",
          align: "center",
          children: (0, _v6.jsx)(_v44.IconButton, {
            icon: (0, _v6.jsx)(_v37.CloseX, {}),
            "aria-label": "Clear input",
            variant: "tertiary",
            ref: _v10,
            size: "xs",
            _hover: {
              bg: "transparent"
            }
          })
        })]
      });
    });
  function _v215({
    email: _v0,
    onClick: _v1,
    editMode: _v2
  }) {
    let _v3 = _v2 ? {
      as: "div"
    } : {
      as: "a",
      rel: "noopener noreferrer nofollow",
      href: `mailto:${_v0}`
    };
    return _v0 ? (0, _v6.jsx)(_v55, {
      as: "article",
      editable: _v2,
      onClick: _v1,
      icon: (0, _v6.jsx)(_v211.Envelope, {
        boxSize: "xs"
      }),
      children: (0, _v6.jsx)(_v31.Box, {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: "inherit",
        display: "inline",
        fontSize: (0, _v27.rem)(14),
        ..._v3,
        children: _v0
      })
    }) : null;
  }
  function _v216({
    email: _v0,
    errorMsg: _v1,
    disable: _v2,
    onSubmit: _v3,
    onChange: _v4
  }) {
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v55, {
        icon: (0, _v6.jsx)(_v211.Envelope, {
          boxSize: "xs"
        }),
        children: (0, _v6.jsx)(_v31.Box, {
          width: "100%",
          position: "relative",
          children: (0, _v6.jsx)(_v214, {
            value: _v0,
            errorMsg: _v1,
            onSubmit: _v3,
            onChange: _v4,
            disabled: _v2
          })
        })
      }), _v1 && (0, _v6.jsx)(_v45.Paragraph, {
        size: "sm",
        color: "red.500",
        ml: (0, _v27.rem)(7),
        mt: (0, _v27.rem)(2),
        display: "block",
        children: _v1
      })]
    });
  }
  function _v217({
    email: _v0 = ""
  }) {
    let {
        userId: _v1
      } = (0, _v16.useContext)(_v50.default),
      {
        trackUserProfileEditFieldClicked: _v2
      } = (0, _v24.useProfileTracking)(),
      [_v3, _v4] = (0, _v16.useState)(!1),
      [_v5, _v6] = (0, _v16.useState)(""),
      [_v7, _v8] = (0, _v16.useState)(!1),
      [_v9, _v10] = (0, _v16.useState)(),
      {
        updateEmail: _v11
      } = _v212(),
      _v12 = () => {
        _v2({
          userProfilePageUserId: String(_v1),
          userProfileEditField: "add_email"
        }), _v4(!0);
      },
      _v13 = (0, _v16.useCallback)(_v0 => {
        if (!_v7) {
          let _v0 = _v0.trim();
          if (_v5 !== _v0) {
            if (_v6(_v0), _v0 === _v0) _v10(void 0), _v4(!1);else /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_v0) || !_v0 ? (_v10(void 0), _v8(!0), _v11(_v0, !!(_v0 && _v0)).then(() => {
              _v8(!1), _v4(!1);
            }).catch(_v0 => {
              _v8(!1), _v10("string" == typeof _v0 ? _v0 : void 0);
            })) : _v10(_v51.default.InvalidEmailAddress);
          } else _v4(!!_v9);
        }
      }, [_v0, _v9, _v7, _v11, _v5]);
    return (0, _v16.useEffect)(() => {
      _v6(_v0);
    }, [_v0]), (0, _v6.jsx)(_v31.Box, {
      tabIndex: 0,
      display: {
        base: "none",
        md: "block"
      },
      onKeyDown: _v0 => {
        _v60(_v0, () => {
          _v3 || _v12();
        }), _v0.keyCode === _v49.KeyCodes.ESC && (_v0.preventDefault(), _v4(!1), _v10(void 0), _v6(_v0));
      },
      children: _v3 ? (0, _v6.jsx)(_v216, {
        email: _v5,
        errorMsg: _v9,
        onSubmit: _v13,
        disable: _v7,
        onChange: () => {
          _v9 && _v10(void 0);
        }
      }) : _v5 ? (0, _v6.jsxs)(_v33.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v6.jsx)(_v215, {
          email: _v5,
          onClick: _v12,
          editMode: !0
        }), (0, _v6.jsx)(_v58, {
          onClick: _v12
        })]
      }) : (0, _v6.jsx)(_v56, {
        buttonText: _v51.default.AddEmail,
        onClick: _v12
      })
    });
  }
  function _v218({
    editMode: _v0,
    emails: _v1
  }) {
    return _v0 ? (0, _v6.jsx)(_v217, {
      email: _v1[0]
    }) : (0, _v6.jsx)(_v215, {
      email: _v1[0]
    });
  }
  var _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0);
  function _v222({
    onClick: _v0,
    size: _v1,
    className: _v2
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      position: "absolute",
      top: (0, _v27.rem)(16),
      right: (0, _v27.rem)(16),
      className: _v2,
      children: (0, _v6.jsx)(_v44.IconButton, {
        variant: "tertiary",
        icon: (0, _v6.jsx)(_v37.CloseX, {}),
        onClick: _v0,
        "aria-label": _v51.default.Dismiss,
        size: _v1
      })
    });
  }
  var _v223 = _v0.i(0),
    _v224 = _v0.i(0);
  let _v225 = _v0 => ({
      Authorization: `jwt ${_v0}`
    }),
    _v226 = async (_v0, _v1, _v2) => {
      try {
        return await (0, _v224.getMeFollowing)({
          baseUrl: `//${_v0}`,
          where: {
            followUserId: _v1
          },
          headers: _v225(_v2)
        }), !0;
      } catch (_v0) {
        if (_v0 instanceof _v143.NetworkError && 404 === _v0.status) return !1;
        throw _v0;
      }
    },
    _v227 = (_v0, _v1, _v2) => (0, _v224.putMeFollowing)({
      baseUrl: `//${_v0}`,
      where: {
        followUserId: _v1
      },
      query: {
        checkEmailVerification: !0
      },
      headers: _v225(_v2)
    }),
    _v228 = async (_v0, _v1) => {
      let _v2 = await (0, _v223.getMe)({
        baseUrl: `//${_v0}`,
        select: ["metadata.connections.following.total"],
        headers: _v225(_v1)
      });
      return _v2?.metadata?.connections?.following?.total ?? 0;
    },
    _v229 = () => Error("Not implemented"),
    _v230 = (0, _v16.createContext)({
      isLoggedIn: !1,
      isStaffUser: !1,
      isVerifiedUser: !1,
      isLoading: !1,
      submitting: !1,
      isFollowing: !1,
      isUserFollowing: !1,
      onFollowUser: () => Promise.reject(Error("Not implemented")),
      onUnfollowUser: _v229,
      onLoginSuccess: _v229
    });
  function _v231({
    children: _v0,
    profileId: _v1
  }) {
    let [_v2, _v3] = (0, _v16.useState)({
        submitting: !1,
        isFollowing: !1,
        loading: !1,
        isUserFollowing: !1,
        isVerifiedUser: !1,
        error: null
      }),
      _v4 = (0, _v16.useContext)(_v26.ViewerContext),
      _v5 = (0, _v16.useMemo)(() => _v4?.apiUrl || "", [_v4]),
      _v6 = (0, _v16.useMemo)(() => _v4?.jwt || "", [_v4]),
      _v7 = (0, _v16.useMemo)(() => _v4?.user, [_v4]),
      _v8 = (0, _v16.useCallback)(async () => {
        let [_v0, _v1, _v2] = await Promise.all([_v1 !== _v7?.id ? _v226(_v5, _v1, _v6) : Promise.resolve(!1), _v228(_v5, _v6), _v1 !== _v7?.id ? (0, _v223.getMe)({
          baseUrl: `//${_v5}`,
          select: ["verified"],
          headers: _v225(_v6)
        }) : Promise.resolve({
          verified: !1
        })]);
        return {
          checkIfFollowing: _v0,
          isUserFollowing: _v1 > 0,
          userIsVerified: _v2
        };
      }, [_v5, _v7, _v6, _v1]);
    (0, _v16.useEffect)(() => {
      _v7 && (_v3(_v0 => ({
        ..._v0,
        loading: !0
      })), _v8().then(_v0 => {
        _v3(_v0 => ({
          ..._v0,
          loading: !1,
          isFollowing: _v0.checkIfFollowing,
          isUserFollowing: _v0.isUserFollowing,
          isVerifiedUser: _v0.userIsVerified.verified
        }));
      }).catch(_v0 => _v3(_v0 => ({
        ..._v0,
        loading: !1,
        error: _v0
      }))));
    }, [_v7, _v1, _v8]);
    let _v9 = (0, _v16.useCallback)(_v0 => {
        _v228(_v5, _v6).then(_v0 => {
          _v3(_v0 => ({
            ..._v0,
            submitting: !1,
            isUserFollowing: _v0 > 0,
            isFollowing: _v0
          }));
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v5, _v6]),
      _v10 = (0, _v16.useCallback)(async () => {
        _v3(_v0 => ({
          ..._v0,
          submitting: !0
        }));
        try {
          await _v227(_v5, _v1, _v6), _v9(!0);
        } catch (_v0) {
          throw _v3(_v0 => ({
            ..._v0,
            submitting: !1,
            error: _v0
          })), _v0;
        }
      }, [_v6, _v5, _v1, _v9]),
      _v11 = (0, _v16.useCallback)(() => {
        _v3(_v0 => ({
          ..._v0,
          submitting: !0
        })), (0, _v224.deleteMeFollowing)({
          baseUrl: `//${_v5}`,
          where: {
            followUserId: _v1
          },
          headers: _v225(_v6)
        }).then(() => {
          _v9(!1);
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v6, _v5, _v1, _v9]),
      _v12 = (0, _v16.useCallback)(async () => {
        let _v0 = await fetch("/_next/jwt", {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        return await _v0.json();
      }, []),
      _v13 = (0, _v16.useCallback)(async () => {
        try {
          _v3(_v0 => ({
            ..._v0,
            submitting: !0
          }));
          let _v0 = await _v12();
          await _v227(_v5, _v1, _v0.token);
        } catch (_v0) {}
        window.location.reload();
      }, [_v5, _v12, _v1]),
      _v14 = (0, _v16.useMemo)(() => ({
        isLoggedIn: !!_v7,
        isStaffUser: _v7?.badge.type === "staff",
        isVerifiedUser: _v2.isVerifiedUser,
        isLoading: _v2.loading,
        submitting: _v2.submitting,
        isFollowing: _v2.isFollowing,
        isUserFollowing: _v2.isUserFollowing,
        onFollowUser: _v10,
        onUnfollowUser: _v11,
        onLoginSuccess: _v13
      }), [_v2, _v7, _v10, _v11, _v13]);
    return (0, _v6.jsx)(_v230.Provider, {
      value: _v14,
      children: _v0
    });
  }
  function _v232({
    xsrft: _v0,
    isOwner: _v1,
    profileId: _v2
  }) {
    let [_v3, _v4] = (0, _v16.useState)(!1),
      _v5 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        trackUserProfilePageFollowClicked: _v6
      } = (0, _v24.useProfileTracking)(),
      {
        isFollowing: _v7,
        isLoading: _v8,
        isLoggedIn: _v9,
        isVerifiedUser: _v10,
        onFollowUser: _v11,
        onLoginSuccess: _v12,
        onUnfollowUser: _v13,
        submitting: _v14
      } = (0, _v16.useContext)(_v230);
    _v135(_v3 ? _v0 => _v61(_v0, () => _v4(!1)) : void 0, [_v3]);
    let _v15 = (0, _v16.useCallback)(() => {
      _v1 ? _v5({
        content: _v51.default.FollowSameUser,
        status: "negative"
      }) : _v10 ? (_v137(_v49.BPEvent.CLICK_TO_FOLLOW_CREATOR, 1, {
        following: !_v7
      }), _v6({
        userProfilePageUserId: String(_v2),
        userProfilePageFollowEffect: _v7 ? "unfollow" : "follow"
      }), _v7 ? _v13() : _v11().catch(_v0 => {
        _v0 instanceof _v143.NetworkError && (_v0.status === _v49.ErrorCodes.ENHACE_YOUR_CALM || _v0.status === _v49.ErrorCodes.TOO_MANY_REQUESTS) && _v4(!0);
      })) : _v4(!0);
    }, [_v7, _v1, _v10, _v11, _v5, _v13]);
    return _v8 ? null : (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v221.LoginJoinModal, {
        type: "login",
        xsrft: _v0,
        onSuccess: _v12,
        children: _v0 => (0, _v6.jsx)(_v32.Button, {
          w: "100%",
          variant: "secondary",
          leftIcon: _v7 ? (0, _v6.jsxs)(_v31.Box, {
            as: "span",
            display: "inline-flex",
            alignItems: "center",
            children: [(0, _v6.jsx)(_v37.CloseX, {
              id: "dismiss-icon"
            }), (0, _v6.jsx)(_v220.Checkmark, {
              id: "check-icon"
            })]
          }) : (0, _v6.jsx)(_v52.PlusSmall, {}),
          onClick: () => _v9 ? _v15() : _v0(),
          isDisabled: _v14,
          isLoading: _v14,
          sx: {
            "#dismiss-icon, #unfollow-text": {
              display: "none"
            },
            "#check-icon, #following-text": {
              display: "inline-flex"
            },
            [`@media (min-width: ${_v38.bokehTheme.breakpoints.lg})`]: {
              "&:hover": {
                "#dismiss-icon, #unfollow-text": {
                  display: "inline-flex"
                },
                "#check-icon, #following-text": {
                  display: "none"
                }
              }
            }
          },
          children: !_v14 && _v7 ? (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)("span", {
              id: "following-text",
              children: _v51.default.Following
            }), (0, _v6.jsx)("span", {
              id: "unfollow-text",
              children: _v51.default.Unfollow
            })]
          }) : _v51.default.Follow
        })
      }), (0, _v6.jsxs)(_v34.Modal, {
        isOpen: _v3,
        onClose: () => _v4(!1),
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
          children: (0, _v6.jsxs)(_v31.Box, {
            p: `${(0, _v27.rem)(40)} ${(0, _v27.rem)(30)} ${(0, _v27.rem)(20)}`,
            children: [(0, _v6.jsx)(_v222, {
              onClick: () => _v4(!1)
            }), (0, _v6.jsx)(_v75.Header, {
              size: "md",
              children: _v10 ? _v51.default.UnableToFollow : _v51.default.VerifyAccountTitle
            }), (0, _v6.jsx)(_v45.Paragraph, {
              size: "md",
              children: _v10 ? _v51.default.TooManyFollow : (0, _v6.jsx)(_v6.Fragment, {
                children: (0, _v21.translate)({
                  singular: "You need to verify your email address before following other members on Vimeo. {LINK}Need help?{/LINK}",
                  replacements: {
                    LINK: _v0 => (0, _v6.jsx)(_v219.Link, {
                      href: "/help/verify_email",
                      color: "inherit",
                      children: _v0
                    }, "info-modal-text")
                  },
                  dictionary: {
                    es: {
                      singular: "Necesitas verificar tu dirección de correo electrónico antes de seguir a otros miembros en Vimeo. {LINK}¿Necesitas ayuda?{/LINK}"
                    },
                    "de-DE": {
                      singular: "Sie müssen Ihre E-Mail-Adresse verifizieren, bevor Sie anderen Mitgliedern auf Vimeo folgen können. {LINK}Benötigen Sie Hilfe?{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Vous devez vérifier votre adresse e‑mail avant de suivre d'autres membres sur Vimeo. {LINK}Besoin d'aide ?{/LINK}"
                    },
                    "ja-JP": {
                      singular: "他のメンバーをVimeoでフォローする前に、メールアドレスの確認が必要です。{LINK}ヘルプが必要ですか？{/LINK}"
                    },
                    "ko-KR": {
                      singular: "다른 회원을 Vimeo에서 팔로우하기 전에 이메일 주소를 확인해야 합니다. {LINK}도움이 필요하신가요?{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Você precisa verificar seu endereço de e‑mail antes de seguir outros membros no Vimeo. {LINK}Precisa de ajuda?{/LINK}"
                    },
                    "zh-CN": {
                      singular: "在关注其他 Vimeo 成员之前，你需要验证你的电子邮件地址。{LINK}需要帮助吗？{/LINK}"
                    }
                  }
                })
              })
            })]
          })
        })]
      })]
    });
  }
  var _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = ((_v3 = _v235 || {}).ABOUT = "about", _v3.VIDEO = "video", _v3);
  let _v236 = (0, _v16.lazy)(() => _v0.A(0));
  var _v237 = ((_v4 = _v237 || {}).ABOUT = "about", _v4.VIDEO = "video", _v4);
  function _v238({
    header: _v0,
    infoPanel: _v1,
    aboutPanel: _v2,
    videoPanel: _v3,
    isDesktopView: _v4,
    showSearchResultsButton: _v5,
    referrerUrl: _v6,
    footerRef: _v7,
    stickyTopNav: _v8,
    isOwner: _v9,
    hugVideoPanelHeight: _v10
  }) {
    let _v11,
      [_v12, _v13] = (0, _v16.useState)("about"),
      [_v14, _v15] = (0, _v16.useState)(!1),
      _v16 = (0, _v16.useRef)(null),
      _v17 = (0, _v16.useRef)(null);
    return _v11 = _v4 ? "about" : "video", (0, _v16.useEffect)(() => {
      _v13(_v11);
    }, [_v13, _v11]), (0, _v16.useLayoutEffect)(() => {
      let _v0 = (0, _v233.default)(() => {
        if (_v16.current) {
          let _v0 = _v16.current.getBoundingClientRect(),
            _v1 = window?.innerHeight,
            _v2 = _v0.bottom >= 0 && _v0.top < _v1,
            _v3 = _v17.current;
          if (_v15(!_v2), _v3) {
            if (_v2) _v3.classList.remove("showUserInfoPanel");else if (_v3.classList.add("showUserInfoPanel"), _v7?.current) {
              let _v0 = document.documentElement;
              _v0.scrollHeight - (_v0.scrollTop + _v7.current.offsetHeight) - 100 < _v3.offsetHeight ? _v3.classList.add("scrolledToBottom") : _v3.classList.remove("scrolledToBottom");
            }
          }
        }
      }, 50);
      return document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v16, _v17, _v7]), (0, _v6.jsxs)(_v31.Box, {
      position: "relative",
      pb: (0, _v27.rem)(76),
      children: [_v0 && (0, _v6.jsx)(_v244, {
        children: _v0
      }), _v8?.(_v14), (0, _v6.jsxs)(_v31.Box, {
        pt: _v0 ? void 0 : (0, _v27.rem)(50),
        display: {
          lg: "flex"
        },
        children: [_v5 && (0, _v6.jsxs)(_v239, {
          href: _v6,
          children: [(0, _v6.jsx)(_v240, {
            children: (0, _v6.jsx)(_v234.ChevronRightSmall, {})
          }), _v51.default.SearchResults]
        }), (0, _v6.jsxs)(_v245, {
          noHeader: !_v0,
          children: [(0, _v6.jsxs)("div", {
            ref: _v16,
            children: [(0, _v6.jsx)(_v81, {
              withoutEffects: !_v4,
              children: _v1
            }), _v4 && _v2]
          }), _v4 && (0, _v6.jsx)(_v242, {
            ref: _v17,
            children: _v1
          })]
        }), (0, _v6.jsxs)(_v246, {
          noHeader: !_v0,
          hugContent: _v10,
          children: [!_v4 && (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)(_v102.Tabs, {
              size: "xs",
              variant: "soft",
              isFitted: !0,
              width: "100%",
              my: (0, _v27.rem)(16),
              index: +("video" !== _v12),
              onChange: _v0 => _v13(0 === _v0 ? "video" : "about"),
              children: (0, _v6.jsxs)(_v103.TabList, {
                children: [(0, _v6.jsx)(_v101.Tab, {
                  children: _v51.default.Videos
                }), (0, _v6.jsx)(_v101.Tab, {
                  children: _v51.default.About
                }), (0, _v6.jsx)(_v102.TabIndicator, {})]
              })
            }), "about" === _v12 ? (0, _v6.jsx)(_v6.Fragment, {
              children: _v2
            }) : null]
          }), _v4 || "video" === _v12 ? (0, _v6.jsx)(_v6.Fragment, {
            children: _v3
          }) : null]
        })]
      }), _v9 ? null : (0, _v6.jsx)(_v16.Suspense, {
        fallback: (0, _v6.jsx)(_v6.Fragment, {}),
        children: (0, _v6.jsx)(_v236, {
          footerRef: _v7
        })
      })]
    });
  }
  let _v239 = _v28.default.a.withConfig({
      displayName: "Layout__SearchResults",
      componentId: "sc-13cfe941-0"
    })`
  color: ${_v38.bokehTheme.colors.white};
  font-size: ${(0, _v27.rem)(14)};
  font-weight: bold;
  line-height: ${(0, _v27.rem)(17)};
  letter-spacing: ${(0, _v27.rem)(.2)};
  border-radius: ${(0, _v27.rem)(2)};
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${(0, _v27.rem)(8)} ${(0, _v27.rem)(14)} ${(0, _v27.rem)(8)} ${(0, _v27.rem)(10)};
  cursor: pointer;
  z-index: 1;
  width: ${(0, _v27.rem)(146)};
  position: absolute;
  top: ${(0, _v27.rem)(30)};
  left: ${(0, _v27.rem)(16)};
  text-decoration: none;
  ${_v43.media.sm`
    left: ${(0, _v27.rem)(30)};
  `};
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    top: ${(0, _v27.rem)(20)};
    left: ${(0, _v27.rem)(40)};
  }
  ${_v43.media.hd`
    left: ${(0, _v27.rem)(60)};
  `};
  ${_v43.media.xhd`
    left: ${(0, _v27.rem)(70)};
  `};
`,
    _v240 = _v28.default.div.withConfig({
      displayName: "Layout__ChevronLeft",
      componentId: "sc-13cfe941-1"
    })`
  display: inline-block;
  vertical-align: middle;
  width: ${(0, _v27.rem)(20)};
  height: ${(0, _v27.rem)(20)};
  transform: rotate(180deg);
  svg path {
    fill: ${_v38.bokehTheme.colors.white};
  }
`,
    _v241 = _v28.keyframes`
  from {
    transform: translateY(${(0, _v27.rem)(50)});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,
    _v242 = (0, _v28.default)(_v81).withConfig({
      displayName: "Layout__CustomInfoPanel",
      componentId: "sc-13cfe941-2"
    })`
  position: fixed !important;
  top: ${(0, _v27.rem)(90)};
  opacity: 0;
  visibility: hidden;
  &.showUserInfoPanel {
    opacity: 1;
    z-index: 2;
    visibility: visible;
    animation: ${_v241} 0.5s ease-in;
  }
  &.scrolledToBottom {
    position: absolute !important;
    top: auto;
    bottom: ${(0, _v27.rem)(20)};
  }
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    width: ${(0, _v27.rem)(320)};
  }
  ${_v43.media.hd`
    width: ${(0, _v27.rem)(424)};
  `};
  ${_v43.media.xhd`
    width: ${(0, _v27.rem)(566)};
  `}
`,
    _v243 = _v28.css`
  padding: 0 ${(0, _v27.rem)(16)};
  ${_v43.media.sm`
    padding: 0 ${(0, _v27.rem)(30)};
  `};
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    padding: 0;
  }
`,
    _v244 = _v28.default.div.withConfig({
      displayName: "Layout__HeaderWrapper",
      componentId: "sc-13cfe941-3"
    })`
  height: ${(0, _v27.rem)(138)};
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    height: ${(0, _v27.rem)(194)};
  }
  ${_v43.media.hd`
    height: ${(0, _v27.rem)(258)};
  `};
  ${_v43.media.xhd`
    height: ${(0, _v27.rem)(344)};
  `}
`,
    _v245 = _v28.default.div.withConfig({
      displayName: "Layout__LeftPanelWrapper",
      componentId: "sc-13cfe941-4"
    })`
  ${_v243}
  margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v27.rem)(100)};
  ${_v43.media.sm`
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v27.rem)(65)};
  `}
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    flex: 0 0 auto;
    width: ${(0, _v27.rem)(320)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v27.rem)(30) : (0, _v27.rem)(-50)};
    margin-left: ${(0, _v27.rem)(40)};
  }
  ${_v43.media.hd`
    width: ${(0, _v27.rem)(424)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v27.rem)(25) : (0, _v27.rem)(-70)};
    margin-left: ${(0, _v27.rem)(60)};
  `};
  ${_v43.media.xhd`
    width: ${(0, _v27.rem)(566)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v27.rem)(30) : (0, _v27.rem)(-154)};
    margin-left: ${(0, _v27.rem)(70)};
  `};
`,
    _v246 = _v28.default.div.withConfig({
      displayName: "Layout__RightPanelWrapper",
      componentId: "sc-13cfe941-5"
    })`
  ${_v243}
  @media (min-width: ${_v38.bokehTheme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: calc(100% - ${(0, _v27.rem)(360)});
    padding: ${(0, _v27.rem)(16)} ${(0, _v27.rem)(16)} ${(0, _v27.rem)(29)} ${(0, _v27.rem)(16)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v27.rem)(15)};
    /* Avoid the row's stretch leaving a gap below the rounded video box. */
    ${({
      hugContent: _v0
    }) => _v0 && _v28.css`
        align-self: flex-start;
      `}
  }
  ${_v43.media.hd`
    width: calc(100% - ${(0, _v27.rem)(484)});
    padding: ${(0, _v27.rem)(16)} ${(0, _v27.rem)(16)} ${(0, _v27.rem)(29)} ${(0, _v27.rem)(16)};
    margin-top: 0;
    padding-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v27.rem)(25)};
  `};
  ${_v43.media.xhd`
    width: calc(100% - ${(0, _v27.rem)(636)});
    padding: ${(0, _v27.rem)(16)} ${(0, _v27.rem)(16)} ${(0, _v27.rem)(29)} ${(0, _v27.rem)(16)};
  `};
`;
  var _v247 = _v0.i(0),
    _v248 = _v0.i(0);
  let _v249 = {
    facebook: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M12 2C6.477 2 2 6.477 2 12c0 4.69 3.229 8.624 7.584 9.705v-6.65H7.522V12h2.062v-1.317c0-3.404 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a12.858 12.858 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236v1.08h3.266l-.561 3.057h-2.705v6.87C18.163 21.328 22 17.113 22 12c0-5.523-4.477-10-10-10Z",
        fill: "currentColor"
      })
    }),
    reddit: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm4.176 3.953c-.41 0-.76.233-.924.584l-2.42-.515a.293.293 0 0 0-.2.036.286.286 0 0 0-.117.164l-.737 3.485c-1.555.047-2.947.503-3.953 1.24a1.477 1.477 0 0 0-1.006-.41c-.807 0-1.462.656-1.462 1.463 0 .596.351 1.1.866 1.333-.024.14-.035.292-.035.444 0 2.246 2.608 4.059 5.835 4.059 3.229 0 5.837-1.813 5.837-4.059 0-.152-.011-.292-.035-.432.48-.234.842-.749.842-1.345 0-.807-.655-1.463-1.462-1.463-.398 0-.748.153-1.006.41-.994-.713-2.374-1.181-3.894-1.24l.666-3.123 2.164.456a1.042 1.042 0 0 0 2.082-.046c0-.573-.468-1.04-1.041-1.04Zm-2.059 9.45a.275.275 0 0 1 .386 0 .3.3 0 0 1-.024.386c-.713.713-2.07.76-2.467.76-.398 0-1.767-.058-2.468-.76a.276.276 0 0 1 0-.386.275.275 0 0 1 .386 0c.444.445 1.403.609 2.093.609s1.638-.164 2.094-.609ZM9.708 12c.573 0 1.04.467 1.041 1.04 0 .573-.468 1.041-1.041 1.041a1.043 1.043 0 0 1-1.041-1.041c0-.573.468-1.04 1.041-1.04Zm4.585 0c.573 0 1.04.467 1.041 1.04 0 .573-.468 1.04-1.041 1.041a1.043 1.043 0 0 1-1.041-1.041c0-.573.468-1.04 1.041-1.04Z",
        fill: "currentColor"
      })
    }),
    tumblr: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M14 22c-3 0-5.25-1.542-5.25-5.25v-5.917H6V7.625C9 6.833 10.25 4.25 10.417 2h3.125v5.083h3.625v3.75h-3.625V16c0 1.542.791 2.083 2.041 2.083h1.75V22H14Z",
        fill: "currentColor"
      })
    }),
    twitter: _v0.i(0).XNegative,
    instagram: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v6.jsx)("path", {
          d: "M12.002 3.801c2.672 0 2.989.012 4.04.059.977.043 1.504.207 1.856.344.465.18.8.398 1.148.746.352.351.567.684.747 1.148.136.352.3.883.343 1.856.047 1.055.059 1.372.059 4.04 0 2.672-.012 2.989-.059 4.04-.043.977-.207 1.504-.343 1.856-.18.465-.399.8-.747 1.148a3.076 3.076 0 0 1-1.148.747c-.352.137-.883.3-1.856.343-1.055.047-1.372.06-4.04.06-2.672 0-2.989-.013-4.04-.06-.977-.042-1.504-.206-1.856-.343-.465-.18-.8-.399-1.148-.747a3.076 3.076 0 0 1-.747-1.148c-.136-.352-.3-.883-.343-1.856-.047-1.055-.06-1.371-.06-4.04.001-2.672.013-2.989.06-4.04.043-.976.207-1.504.343-1.856.18-.464.399-.8.747-1.148a3.076 3.076 0 0 1 1.148-.746c.352-.137.883-.301 1.856-.344 1.051-.047 1.368-.059 4.04-.059Zm0-1.801c-2.715 0-3.055.012-4.122.059-1.063.046-1.793.218-2.426.465A4.882 4.882 0 0 0 3.68 3.68a4.9 4.9 0 0 0-1.156 1.77c-.247.637-.419 1.363-.465 2.426C2.012 8.946 2 9.286 2 12.002c0 2.715.012 3.055.059 4.122.046 1.063.218 1.793.465 2.426.257.66.597 1.22 1.156 1.774a4.89 4.89 0 0 0 1.77 1.152c.637.247 1.363.419 2.426.465 1.067.047 1.407.059 4.122.059s3.055-.012 4.122-.059c1.063-.046 1.793-.218 2.426-.464a4.89 4.89 0 0 0 1.77-1.153 4.888 4.888 0 0 0 1.153-1.77c.246-.637.418-1.363.465-2.426.046-1.067.058-1.407.058-4.122 0-2.716-.012-3.055-.058-4.122-.047-1.063-.22-1.793-.465-2.426a4.684 4.684 0 0 0-1.145-1.778 4.889 4.889 0 0 0-1.77-1.153c-.637-.246-1.363-.418-2.426-.464-1.07-.051-1.41-.063-4.126-.063Z"
        }), (0, _v6.jsx)("path", {
          d: "M12.002 6.864a5.139 5.139 0 0 0-5.138 5.138 5.139 5.139 0 0 0 5.138 5.138 5.14 5.14 0 0 0 5.138-5.138 5.139 5.139 0 0 0-5.138-5.138Zm0 8.47a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.667ZM18.542 6.661a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
        })]
      })
    }),
    linkedin: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M20.52 2H3.477C2.66 2 2 2.645 2 3.441v17.114C2 21.352 2.66 22 3.477 22H20.52c.816 0 1.48-.648 1.48-1.441V3.44C22 2.645 21.336 2 20.52 2ZM7.934 19.043h-2.97V9.496h2.97v9.547ZM6.449 8.195a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44Zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H9.797V9.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238Z",
        fill: "currentColor"
      })
    }),
    behance: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M20.07 6.35H15v1.41h5.09l-.02-1.41ZM19 16.05a2.229 2.229 0 0 1-1.3.37 2.229 2.229 0 0 1-1.7-.54 2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2 5.081 5.081 0 0 0-.8-1.73 4.17 4.17 0 0 0-1.42-1.21 4.37 4.37 0 0 0-2-.45 4.88 4.88 0 0 0-1.9.37 4.51 4.51 0 0 0-1.47 1 4.401 4.401 0 0 0-.95 1.52 5.4 5.4 0 0 0-.33 1.91 5.52 5.52 0 0 0 .32 1.94 4.46 4.46 0 0 0 .88 1.53c.406.438.905.78 1.46 1a5.2 5.2 0 0 0 1.94.34 4.77 4.77 0 0 0 2.64-.7 4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76Zm-3.43-4.12a1.87 1.87 0 0 1 1-1.14 2.28 2.28 0 0 1 1-.2 1.73 1.73 0 0 1 1.36.49c.34.416.558.918.63 1.45h-4.15c.016-.203.053-.404.11-.6h.05Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1 2.72 2.72 0 0 0 .43-1.58 3.28 3.28 0 0 0-.29-1.48 2.4 2.4 0 0 0-.82-1 3.24 3.24 0 0 0-1.27-.52 7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1c.557 0 1.111-.07 1.65-.21.51-.132.995-.352 1.43-.65a3.129 3.129 0 0 0 1-1.14 3.41 3.41 0 0 0 .37-1.65 3.47 3.47 0 0 0-.57-2 3 3 0 0 0-1.75-1.19h.05ZM4.77 7.86h2.59c.238 0 .475.02.71.06.216.032.423.107.61.22.18.102.326.255.42.44.116.222.171.47.16.72a1.36 1.36 0 0 1-.47 1.15 2 2 0 0 1-1.22.35h-2.8V7.86Zm4.84 7.44a1.28 1.28 0 0 1-.45.5c-.2.124-.42.212-.65.26a3.326 3.326 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41 1.65 1.65 0 0 1 .54 1.39 1.77 1.77 0 0 1-.11.81Z",
        fill: "currentColor"
      })
    }),
    pinterest: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M12 2C6.477 2 2 6.477 2 12c0 4.238 2.637 7.855 6.355 9.313-.085-.793-.168-2.004.036-2.868l1.171-4.968s-.3-.598-.3-1.485c0-1.39.804-2.43 1.808-2.43.852 0 1.266.641 1.266 1.41 0 .86-.547 2.141-.828 3.329-.235.996.5 1.808 1.48 1.808 1.778 0 3.145-1.875 3.145-4.578 0-2.394-1.719-4.07-4.176-4.07-2.844 0-4.516 2.133-4.516 4.34 0 .86.332 1.781.747 2.281a.299.299 0 0 1 .07.285c-.074.317-.246.996-.278 1.133-.043.184-.144.223-.335.133-1.25-.582-2.032-2.406-2.032-3.875 0-3.156 2.293-6.051 6.606-6.051 3.469 0 6.164 2.473 6.164 5.777 0 3.446-2.172 6.22-5.188 6.22-1.011 0-1.965-.528-2.293-1.15 0 0-.5 1.91-.62 2.38-.227.867-.837 1.957-1.243 2.62.938.29 1.93.446 2.961.446 5.523 0 10-4.477 10-10S17.523 2 12 2Z",
        fill: "currentColor"
      })
    }),
    vimeo: _v248.VimeoNegative,
    dribbble: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.276 25.276 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475Zm-3.633.803a53.9 53.9 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.521 8.521 0 0 1-2.19-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 0 1-3.655 5.715Z",
        fill: "currentColor"
      })
    }),
    tiktok: _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M15.56 2h-3.37v13.623c0 1.623-1.296 2.957-2.91 2.957-1.613 0-2.91-1.334-2.91-2.957 0-1.594 1.268-2.898 2.824-2.956v-3.42C5.766 9.303 3 12.115 3 15.622 3 19.16 5.823 22 9.309 22s6.309-2.87 6.309-6.377V8.638a7.805 7.805 0 0 0 4.465 1.507v-3.42C17.548 6.638 15.56 4.55 15.56 2Z",
        fill: "currentColor"
      })
    }),
    link: _v247.Link
  };
  function _v250({
    type: _v0,
    ..._v1
  }) {
    let _v2 = _v249[_v0] || _v249.link;
    return (0, _v6.jsx)(_v2, {
      ..._v1
    });
  }
  function _v251({
    editMode: _v0,
    link: _v1,
    onClick: _v2,
    relMe: _v3
  }) {
    let _v4 = _v1.link;
    _v4.match(/^https?:\/\//) || (_v4 = `https://${_v4}`);
    let _v5 = _v0 ? {
      as: "div",
      title: _v4
    } : {
      as: "a",
      href: _v4,
      rel: "noopener noreferrer nofollow" + (_v3 ? " me" : ""),
      target: "_blank",
      title: _v4
    };
    return (0, _v6.jsx)(_v55, {
      editable: _v0,
      onClick: _v2,
      icon: (0, _v6.jsx)(_v250, {
        type: _v1.type,
        boxSize: "xs"
      }),
      children: (0, _v6.jsx)(_v31.Box, {
        color: "text-primary",
        textDecoration: "none",
        fontSize: "body-md",
        lineHeight: (0, _v27.rem)(20),
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        ..._v5,
        children: _v1.name || ((_v0, _v1) => {
          if ("link" !== _v1) {
            let _v0 = _v0.replace(/(^\w+:|^)\/\//, "");
            _v0.lastIndexOf("/") === _v0.length - 1 && (_v0 = _v0.slice(0, -1));
            let _v1 = _v0.lastIndexOf("/"),
              _v2 = _v1 > -1 ? _v0.substring(_v1 + 1, _v0.length) : "";
            return _v2.length > 0 && "@" === _v2[0] && (_v2 = _v2.substring(1)), _v2 ? `@${_v2}` : _v0;
          }
          return _v0;
        })(_v4, _v1.type)
      })
    });
  }
  let _v252 = _v28.default.div.withConfig({
    displayName: "CommonStyles__ErrorMsg",
    componentId: "sc-f4b1776a-0"
  })`
  font-weight: 400;
  font-size: ${(0, _v27.rem)(12)};
  line-height: ${(0, _v27.rem)(16)};
  margin-top: ${(0, _v27.rem)(2)};
  margin-left: ${(0, _v27.rem)(7)};
  color: ${_v38.bokehTheme.colors.red["500"]};
`;
  function _v253({
    link: _v0,
    loading: _v1,
    onSubmit: _v2
  }) {
    let {
        userId: _v3
      } = (0, _v16.useContext)(_v50.default),
      {
        trackUserProfileEditFieldClicked: _v4
      } = (0, _v24.useProfileTracking)(),
      [_v5, _v6] = (0, _v16.useState)(""),
      [_v7, _v8] = (0, _v16.useState)(!1),
      _v9 = () => {
        _v4({
          userProfilePageUserId: String(_v3),
          userProfileEditField: "add_link"
        }), _v8(!0);
      },
      _v10 = (0, _v16.useCallback)(_v0 => {
        if (_v6(""), _v0?.link === _v0) _v8(!1);else if (_v0) {
          let {
            validatedUrl: _v0,
            error: _v1
          } = (_v0 => {
            if (_v0) {
              let _v0 = _v0.trim();
              return (_v0.match(/^https?:\/\//) || (_v0 = `https://${_v0}`), _v49.REGEX_URL.test(_v0)) ? _v0.length > _v49.MAX_LINK_LENGTH ? {
                validatedUrl: _v0,
                error: _v51.default.LinkTooLong
              } : {
                validatedUrl: _v0,
                error: ""
              } : {
                validatedUrl: _v0,
                error: _v51.default.EnterValidUrl
              };
            }
            return {
              validatedUrl: _v0,
              error: ""
            };
          })(_v0);
          _v1 ? _v6(_v1) : _v2(_v0).then(() => _v8(!1));
        } else _v2().then(() => _v8(!1));
      }, [_v0, _v2]);
    return (0, _v6.jsx)(_v31.Box, {
      _hover: {
        outline: "none"
      },
      tabIndex: 0,
      onKeyDown: _v0 => _v60(_v0, () => {
        _v7 || _v1 || _v9();
      }),
      children: _v7 ? (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsx)(_v55, {
          icon: _v0 ? (0, _v6.jsx)(_v250, {
            type: _v0.type,
            boxSize: "xs"
          }) : (0, _v6.jsx)(_v247.Link, {
            boxSize: "xs"
          }),
          children: (0, _v6.jsx)(_v31.Box, {
            position: "relative",
            width: "100%",
            children: (0, _v6.jsx)(_v214, {
              onSubmit: _v10,
              value: _v0?.link || "",
              disabled: _v1,
              errorMsg: _v5,
              placeholder: _v51.default.EnterUrl,
              onChange: () => _v6("")
            })
          })
        }), !!_v5 && (0, _v6.jsx)(_v252, {
          children: _v5
        })]
      }) : _v0 ? (0, _v6.jsxs)(_v33.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v6.jsx)(_v251, {
          editMode: !0,
          link: _v0,
          onClick: () => _v1 ? void 0 : _v9()
        }), (0, _v6.jsx)(_v58, {
          onClick: () => _v1 ? void 0 : _v9()
        })]
      }) : _v1 ? null : (0, _v6.jsx)(_v56, {
        buttonText: _v51.default.AddLink,
        onClick: _v9
      })
    });
  }
  function _v254({
    links: _v0,
    children: _v1
  }) {
    let [_v2, _v3] = (0, _v16.useState)(!1),
      _v4 = (0, _v16.useRef)(!1),
      _v5 = (0, _v16.useCallback)(() => {
        _v4.current = !0, _v3(!1);
      }, []);
    return (0, _v16.useEffect)(() => {
      _v4.current || _v3(_v0.length > _v49.MIN_NO_OF_LINKS_TO_SHOW);
    }, [_v0]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [(_v2 ? _v0.slice(0, _v49.MIN_NO_OF_LINKS_TO_SHOW) : _v0).map((_v0, _v1) => _v1(_v0, _v1)), _v2 && (0, _v6.jsx)(_v31.Box, {
        fontSize: "body-md",
        cursor: "pointer",
        margin: "0.625rem",
        textDecoration: "underline",
        tabIndex: 0,
        onClick: _v5,
        onKeyDown: _v0 => _v60(_v0, _v5),
        children: _v51.default.ViewAll
      })]
    });
  }
  function _v255({
    links: _v0
  }) {
    let {
        updateLink: _v1,
        loading: _v2
      } = _v212(),
      _v3 = (0, _v16.useCallback)((_v0, _v1, _v2) => _v1(_v0, _v59(_v1), _v2), [_v1]);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v254, {
        links: _v0,
        children: (_v0, _v1) => (0, _v6.jsx)(_v253, {
          link: _v0,
          loading: _v2,
          onSubmit: _v0 => _v3(_v1, _v0.uri, _v0)
        }, _v0.uri)
      }), (0, _v6.jsx)(_v253, {
        loading: _v2,
        onSubmit: _v0 => _v0 ? _v3(_v0.length, void 0, _v0) : Promise.resolve()
      }, "add_link")]
    });
  }
  function _v256({
    links: _v0
  }) {
    let {
        editMode: _v1,
        userId: _v2
      } = (0, _v16.useContext)(_v50.default),
      {
        trackUserProfilePageWebsiteLinkClicked: _v3
      } = (0, _v24.useProfileTracking)();
    return (0, _v6.jsx)(_v33.Flex, {
      direction: "column",
      display: {
        base: "none",
        md: "flex"
      },
      gap: "2px",
      children: _v1 ? (0, _v6.jsx)(_v255, {
        links: _v0
      }) : _v0?.length ? (0, _v6.jsx)(_v254, {
        links: _v0,
        children: _v0 => (0, _v6.jsx)(_v251, {
          editMode: !1,
          link: _v0,
          relMe: !0,
          onClick: () => _v3({
            userProfilePageUserId: String(_v2)
          })
        }, _v0.uri)
      }) : null
    });
  }
  var _v257 = _v0.i(0),
    _v258 = _v0.i(0),
    _v259 = _v0.i(0),
    _v260 = _v0.i(0);
  function _v261({
    value: _v0
  }) {
    let {
      editMode: _v1
    } = (0, _v16.useContext)(_v50.default);
    return _v1 || _v0?.formattedAddress ? (0, _v6.jsx)(_v31.Box, {
      mt: 3,
      children: _v1 ? (0, _v6.jsx)(_v263, {
        value: _v0
      }) : (0, _v6.jsx)(_v262, {
        location: _v0,
        editMode: _v1
      })
    }) : null;
  }
  let _v262 = ({
      location: _v0,
      onClick: _v1,
      editMode: _v2
    }) => (0, _v6.jsx)(_v6.Fragment, {
      children: _v0?.formattedAddress && (0, _v6.jsx)(_v55, {
        editable: _v2,
        onClick: _v1,
        icon: (0, _v6.jsx)(_v257.CommentPin, {
          boxSize: "xs"
        }),
        children: (0, _v6.jsx)(_v31.Box, {
          as: "span",
          fontSize: (0, _v27.rem)(14),
          letterSpacing: (0, _v27.rem)(.16),
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          children: _v0.formattedAddress
        })
      })
    }),
    _v263 = ({
      value: _v0
    }) => {
      let _v1 = (0, _v16.useContext)(_v26.ViewerContext),
        {
          userId: _v2
        } = (0, _v16.useContext)(_v50.default),
        {
          trackUserProfileEditFieldClicked: _v3
        } = (0, _v24.useProfileTracking)(),
        _v4 = (0, _v16.useRef)(null),
        _v5 = (0, _v16.useRef)(null),
        [_v6, _v7] = (0, _v16.useState)(_v0),
        [_v8, _v9] = (0, _v16.useState)(!1),
        {
          loading: _v10,
          onLocationUpdate: _v11
        } = _v212(),
        _v12 = () => {
          _v3({
            userProfilePageUserId: String(_v2),
            userProfileEditField: "add_location"
          }), _v9(!0);
        },
        {
          width: _v13
        } = (0, _v42.useWindowSize)(),
        _v14 = (0, _v16.useCallback)(_v0 => {
          let _v1 = {
              formattedAddress: "",
              latitude: 0,
              longitude: 0
            },
            _v2 = null == _v0 ? {
              ..._v1
            } : {
              ..._v0
            },
            _v3 = null == _v0 ? {
              ..._v1
            } : {
              ..._v0
            },
            {
              formattedAddress: _v4,
              longitude: _v5,
              latitude: _v6
            } = _v2,
            _v7 = _v3.formattedAddress === _v4,
            _v8 = (_v3.longitude || 0).toFixed(5) === (_v5 || 0).toFixed(5),
            _v9 = (_v3.latitude || 0).toFixed(5) === (_v6 || 0).toFixed(5);
          return _v7 && _v8 && _v9;
        }, [_v0]),
        _v15 = (0, _v16.useCallback)(_v0 => {
          _v10 || (_v14(_v0) ? (_v9(!1), _v4.current?.blur()) : (_v4.current && (_v4.current.disabled = !0), _v11(_v0 ? {
            ..._v0,
            location: _v0.formattedAddress
          } : {
            location: "",
            formattedAddress: "",
            latitude: 0,
            longitude: 0
          }).then(() => {
            _v9(!1), _v4.current && (_v4.current.disabled = !1, _v4.current.blur());
          })));
        }, [_v14, _v10, _v11]);
      return (0, _v260.default)(_v8 && !_v10 ? _v5 : null, () => {
        _v15(_v6);
      }, null, [_v6?.formattedAddress, _v8, _v15, _v5, _v10]), (0, _v16.useEffect)(() => {
        _v4.current?.focus();
      }, [_v8]), (0, _v16.useEffect)(() => {
        _v7(_v0);
      }, [_v0]), (0, _v16.useEffect)(() => {
        _v9(!1);
      }, [_v13]), (0, _v6.jsx)(_v31.Box, {
        ref: _v5,
        tabIndex: 0,
        onKeyDown: (_v0, _v1) => {
          _v49.KeyCodes.ENTER !== _v0.keyCode || _v8 || _v10 || _v12(), _v8 && !_v10 && (_v49.KeyCodes.ESC === _v0.keyCode ? _v15(_v0) : _v49.KeyCodes.TAB === _v0.keyCode && _v15(_v6), _v1 && _v1(_v0));
        },
        pointerEvents: _v10 ? "none" : void 0,
        sx: _v10 ? {
          "& button": {
            display: "none"
          }
        } : void 0,
        children: _v8 ? (0, _v6.jsx)(_v258.default, {
          googleApiKey: _v1?.googleMapApiKey || "",
          children: (0, _v6.jsx)(_v55, {
            icon: (0, _v6.jsx)(_v257.CommentPin, {
              boxSize: "xs"
            }),
            children: (0, _v6.jsx)(_v31.Box, {
              width: "100%",
              sx: {
                "p:empty": {
                  display: "none"
                }
              },
              children: (0, _v6.jsx)(_v259.default, {
                value: _v6,
                ref: _v4,
                onChange: _v0 => {
                  _v7(_v0), _v0 && _v15(_v0);
                },
                useBokeh: !0
              })
            })
          })
        }) : _v6?.formattedAddress ? (0, _v6.jsxs)(_v33.Flex, {
          alignItems: "center",
          gap: "xs",
          children: [(0, _v6.jsx)(_v262, {
            location: _v6,
            onClick: _v12,
            editMode: !0
          }), (0, _v6.jsx)(_v58, {
            onClick: _v12
          })]
        }) : (0, _v6.jsx)(_v56, {
          buttonText: _v51.default.AddLocation,
          onClick: _v12
        })
      });
    };
  function _v264({
    showAddVideoCta: _v0,
    editMode: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3,
    updatePublicVideosCount: _v4
  }) {
    let [_v5, _v6] = (0, _v16.useState)(!1),
      {
        trackUserProfileAddVideoClicked: _v7
      } = (0, _v24.useProfileTracking)();
    _v135(_v5 ? _v0 => _v61(_v0, () => _v6(!1)) : void 0, [_v5]);
    let {
        addVideosToSection: _v8
      } = _v95("", void 0, void 0, !1),
      {
        data: _v9
      } = (0, _v16.useContext)(_v89),
      _v10 = (0, _v16.useMemo)(() => _v65(_v9), [_v9]),
      _v11 = (0, _v16.useCallback)(_v0 => {
        let _v1 = _v0.map(_v0 => _v0.uri);
        return _v8(_v10[0].uri, 0, _v1, _v4).then(() => {
          _v6(!1);
        });
      }, [_v8, _v10, _v4]);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v125, {
        icon: (0, _v6.jsx)(_v108.VideosStack, {
          boxSize: "lg"
        }),
        header: (0, _v6.jsx)(_v18.Text, {
          as: "h1",
          variant: "heading-md",
          children: _v1 ? _v51.default.ShowcaseYourWork : _v51.default.NoVideos
        }),
        subheader: _v1 && (0, _v6.jsx)(_v18.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v51.default.AddBestPublicVideos
        }),
        cta: _v1 && _v0 && (0, _v6.jsx)(_v32.Button, {
          mt: "md",
          size: "md",
          variant: "secondary",
          leftIcon: (0, _v6.jsx)(_v87.PlusSquare, {}),
          onClick: () => {
            _v7(), _v6(!0);
          },
          children: _v51.default.AddVideos
        })
      }), (0, _v6.jsxs)(_v34.Modal, {
        isOpen: _v5,
        onClose: () => _v6(!1),
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
          width: "90vw",
          maxWidth: (0, _v27.rem)(662),
          height: "85vh",
          maxHeight: (0, _v27.rem)(752),
          padding: 0,
          overflow: "hidden",
          children: (0, _v6.jsx)(_v134, {
            shouldAutoAddVideos: _v2,
            toggleAutoAddVideos: _v3,
            onSubmit: _v11,
            onDismiss: () => _v6(!1)
          })
        })]
      })]
    });
  }
  function _v265(_v0) {
    return _v0.sizes.sort((_v0, _v1) => _v0.width > _v1.width ? 1 : _v0.width < _v1.width ? -1 : 0);
  }
  function _v266(_v0, _v1 = .5625) {
    let _v2 = _v0.pictures.sizes[0],
      _v3 = `_${_v2.width}x${_v2.height}`,
      _v4 = _v265(_v0.pictures).filter(_v0 => _v0.width > 600);
    if (_v4.length) {
      let _v0 = new Map();
      return _v4.forEach(_v0 => _v0.set(_v0.width, _v0)), [..._v0.values()].map(_v0 => {
        var _v1;
        let _v2,
          [_v3, _v4] = Number.isInteger(_v2 = (_v1 = _v0.width) * _v1) ? [_v1, _v2] : [_v1 - 1, Math.round(_v2)],
          _v5 = `_${_v3}x${_v4}`;
        return `${_v2.link.replace(_v3, _v5)}`.replace("?r=pad", "");
      });
    }
    return _v0.pictures.sizes.map(_v0 => _v0.link);
  }
  var _v267 = _v0.i(0),
    _v268 = _v0.i(0);
  let _v269 = (_v0, _v1) => _v1 ? 100 * _v0 / Math.min(_v1.naturalHeight, _v1.naturalWidth) : 0,
    _v270 = (0, _v16.forwardRef)(({
      onDismiss: _v0,
      image: _v1,
      onSubmit: _v2
    }, _v3) => {
      let {
          width: _v4
        } = (0, _v42.useWindowSize)(),
        _v5 = (0, _v16.useMemo)(() => _v4 > 480 ? _v49.IMAGE_CROP_CIRCLE_DIAMETER : _v49.IMAGE_CROP_CIRCLE_DIAMETER_MOBILE, [_v4]),
        _v6 = (0, _v16.useRef)(_v269(_v5, _v1)),
        [_v7, _v8] = (0, _v16.useState)(50 + _v6.current),
        [_v9, _v10] = (0, _v16.useState)(!1);
      return (0, _v16.useEffect)(() => {
        _v6.current = _v269(_v5, _v1), _v8(50 + _v6.current);
      }, [_v1, _v5]), (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsx)(_v99.ModalHeader, {
          pb: 5,
          children: _v51.default.CropThumbnail
        }), (0, _v6.jsx)(_v163.ModalCloseButton, {
          "aria-label": _v51.default.Dismiss,
          onClick: _v0
        }), (0, _v6.jsx)(_v97.ModalBody, {
          px: 0,
          py: 0,
          children: _v1 ? (0, _v6.jsxs)(_v31.Box, {
            opacity: _v9 ? .6 : 1,
            pointerEvents: _v9 ? "none" : "auto",
            children: [(0, _v6.jsx)(_v267.ImageCrop, {
              ref: _v3,
              image: _v1,
              zoomRatio: _v7 / 100,
              imageCropCircleDiameter: _v5,
              windowWidth: _v4
            }), (0, _v6.jsx)(_v268.ImageCropSlider, {
              value: _v7 - _v6.current,
              onChange: _v0 => _v8(_v0 + _v6.current)
            })]
          }) : (0, _v6.jsx)(_v33.Flex, {
            align: "center",
            justify: "center",
            h: {
              base: (0, _v47.rem)(366),
              md: (0, _v47.rem)(284)
            },
            children: (0, _v6.jsx)(_v190.Spinner, {
              size: "md"
            })
          })
        }), (0, _v6.jsx)(_v98.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v6.jsxs)(_v96.HStack, {
            spacing: "sm",
            children: [(0, _v6.jsx)(_v32.Button, {
              variant: "secondary",
              onClick: _v0,
              children: _v51.default.Cancel
            }), (0, _v6.jsx)(_v32.Button, {
              variant: "primary",
              onClick: () => {
                _v10(!0), _v2();
              },
              isLoading: _v9,
              isDisabled: !_v1 || _v9,
              children: _v51.default.Done
            })]
          })
        })]
      });
    }),
    _v271 = {
      0: "pixelXDimension",
      0: "pixelYDimension"
    },
    _v272 = {
      0: "ExifIFDPointer",
      274: "orientation"
    };
  function _v273(_v0, _v1, _v2, _v3, _v4) {
    let _v5,
      _v6,
      _v7,
      _v8 = _v0.getUint16(_v2, !_v4),
      _v9 = {};
    for (_v7 = 0; _v7 < _v8; _v7++) _v5 = _v2 + 12 * _v7 + 2, (_v6 = _v3[_v0.getUint16(_v5, !_v4)]) && (_v9[_v6] = function (_v0, _v1, _v2, _v3) {
      let _v4,
        _v5,
        _v6,
        _v7 = _v0.getUint16(_v1 + 2, !_v3),
        _v8 = _v0.getUint32(_v1 + 4, !_v3),
        _v9 = _v0.getUint32(_v1 + 8, !_v3) + _v2;
      switch (_v7) {
        case 3:
          if (1 === _v8) return _v0.getUint16(_v1 + 8, !_v3);
          for (_v4 = _v8 > 2 ? _v9 : _v1 + 8, _v5 = [], _v6 = 0; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint16(_v4 + 2 * _v6, !_v3);
          return _v5;
        case 4:
          if (1 === _v8) return _v0.getUint32(_v1 + 8, !_v3);
          for (_v6 = 0, _v5 = []; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint32(_v9 + 4 * _v6, !_v3);
          return _v5;
      }
    }(_v0, _v5, _v1, _v4));
    return _v9;
  }
  function _v274({
    onChange: _v0,
    children: _v1,
    className: _v2
  }) {
    let _v3 = (0, _v16.useRef)(null),
      _v4 = (0, _v16.useRef)(null),
      [_v5, _v6] = (0, _v16.useState)(!1),
      [_v7, _v8] = (0, _v16.useState)(),
      [_v9, _v10] = (0, _v16.useState)(null),
      _v11 = "/me/pictures/",
      _v12 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      [{
        post: _v13
      }, {
        data: _v14
      }] = (0, _v152.useMutation)(_v11),
      [{
        patch: _v15
      }, {
        data: _v16
      }] = (0, _v152.useMutation)(_v11 + _v9);
    return (0, _v16.useEffect)(() => {
      (async _v0 => {
        if (_v7 && _v0) {
          let _v0 = (_v0 => {
              let _v1,
                _v2 = _v0.split(","),
                _v3 = new Uint8Array(new ArrayBuffer((_v1 = _v2[0].indexOf("base64") >= 0 ? atob(_v2[1]) : decodeURIComponent(_v2[1])).length));
              for (let _v0 = 0; _v0 < _v1.length; _v0 += 1) _v3[_v0] = _v1.charCodeAt(_v0);
              return new Blob([_v3], {
                type: _v2[0].split(":")[1].split(";")[0]
              });
            })(_v7.src),
            _v1 = new File([_v0], "profile_pic"),
            _v2 = await fetch(_v0, {
              method: "PUT",
              body: _v1,
              headers: {
                "Content-Type": _v0.type
              }
            });
          _v2.ok && _v2.json().then(_v0 => {
            "success" === _v0.Status.toLowerCase() && _v10(_v59(_v0.Path));
          });
        }
      })(_v14?.link);
    }, [_v14]), (0, _v16.useEffect)(() => {
      _v16 && (_v0(_v16), _v8(void 0), _v6(!1), _v12());
    }, [_v16]), (0, _v16.useEffect)(() => {
      let _v0 = _v4.current?.calculateCropSize();
      _v9 && _v0 && (_v15({
        variables: {
          active: !0,
          picture_prefs: {
            subrect: Object.values(_v0).join(","),
            r: "cover"
          }
        }
      }), _v10(null));
    }, [_v9]), (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsxs)(_v31.Box, {
        cursor: "pointer",
        onClick: () => {
          _v3.current?.click();
        },
        className: _v2,
        children: [_v1, (0, _v6.jsx)("input", {
          ref: _v3,
          type: "file",
          accept: "image/*",
          name: "upload",
          onChange: _v0 => {
            let _v1 = _v0.target;
            if (_v1.files && _v1.files.length > 0) {
              let _v0,
                _v1,
                _v2,
                _v3 = _v1.files[0];
              _v6(!0), _v0 = new FileReader(), _v1 = new Image(), _v2 = document.createElement("canvas"), _v0.onload = _v0 => {
                if (_v0.target) {
                  let _v0 = _v0.target.result,
                    _v1 = function (_v0) {
                      let _v1 = new DataView(_v0);
                      if (255 !== _v1.getUint8(0) || 216 !== _v1.getUint8(1)) return !1;
                      let _v2 = 2,
                        _v3 = _v0.byteLength;
                      for (; _v2 < _v3;) {
                        if (255 !== _v1.getUint8(_v2)) return !1;
                        if (225 === _v1.getUint8(_v2 + 1)) return function (_v0, _v1) {
                          if ("Exif" !== function (_v0, _v1) {
                            let _v2 = "";
                            for (let _v0 = _v1; _v0 < _v1 + 4; _v0++) _v2 += String.fromCharCode(_v0.getUint8(_v0));
                            return _v2;
                          }(_v0, _v1)) return !1;
                          let _v2,
                            _v3,
                            _v4,
                            _v5,
                            _v6 = _v1 + 6;
                          if (0 == _v0.getUint16(_v6)) _v2 = !1;else {
                            if (0 != _v0.getUint16(_v6)) return !1;
                            _v2 = !0;
                          }
                          if (42 !== _v0.getUint16(_v6 + 2, !_v2)) return !1;
                          let _v7 = _v0.getUint32(_v6 + 4, !_v2);
                          if (_v7 < 8) return !1;
                          if ((_v3 = _v273(_v0, _v6, _v6 + _v7, _v272, _v2)).ExifIFDPointer) for (_v4 in _v5 = _v273(_v0, _v6, _v6 + _v3.ExifIFDPointer, _v271, _v2)) _v3[_v4] = _v5[_v4];
                          return _v3;
                        }(_v1, _v2 + 4);
                        _v2 += 2 + _v1.getUint16(_v2 + 2);
                      }
                    }(_v0),
                    _v2 = `data:${_v3.type};base64, ${function (_v0) {
                      let _v1 = "",
                        _v2 = new Uint8Array(_v0),
                        _v3 = _v2.byteLength;
                      for (let _v0 = 0; _v0 < _v3; _v0++) _v1 += String.fromCharCode(_v2[_v0]);
                      return btoa(_v1);
                    }(_v0)}`;
                  _v1.onload = () => (_v0 => {
                    var _v1;
                    let _v2,
                      _v3 = _v1.width,
                      _v4 = _v1.height,
                      _v5 = _v3 / _v4,
                      _v6 = 0,
                      _v7 = !1;
                    _v0 instanceof Object && (_v6 = _v0.orientation, _v7 = _v0.pixelXDimension === _v3 && _v0.pixelYDimension === _v4), (_v3 > 0 || _v4 > 0) && (_v5 >= 0 / 0 ? (_v4 *= 0 / _v3, _v3 = 0) : (_v3 *= 0 / _v4, _v4 = 0));
                    let _v8 = _v2.getContext("2d");
                    if (_v7) {
                      if (4 < _v6 && _v6 < 9 ? (_v2.width = _v4, _v2.height = _v3) : (_v2.width = _v3, _v2.height = _v4), _v8) switch (_v6) {
                        case 2:
                          _v8.transform(-1, 0, 0, 1, _v3, 0);
                          break;
                        case 3:
                          _v8.transform(-1, 0, 0, -1, _v3, _v4);
                          break;
                        case 4:
                          _v8.transform(1, 0, 0, -1, 0, _v4);
                          break;
                        case 5:
                          _v8.transform(0, 1, 1, 0, 0, 0);
                          break;
                        case 6:
                          _v8.transform(0, 1, -1, 0, _v4, 0);
                          break;
                        case 7:
                          _v8.transform(0, -1, -1, 0, _v4, _v3);
                          break;
                        case 8:
                          _v8.transform(0, -1, 1, 0, 0, _v3);
                      }
                    } else _v2.width = _v3, _v2.height = _v4;
                    return _v8?.drawImage(_v1, 0, 0, _v3, _v4), _v1 = _v2.toDataURL("image/jpeg"), void ((_v2 = new Image()).src = _v1, _v2.onload = () => (_v0 => {
                      _v0.name = _v3.name, _v8(_v0);
                    })(_v2));
                  })(_v1), _v1.src = _v2;
                }
              }, _v0.readAsArrayBuffer(_v3), _v1.value = "";
            }
          },
          style: {
            position: "absolute",
            visibility: "hidden",
            opacity: 0,
            zIndex: -1
          }
        })]
      }), _v5 && (0, _v6.jsxs)(_v34.Modal, {
        isOpen: _v5,
        onClose: () => _v6(!1),
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
          w: "90vw",
          maxW: (0, _v47.rem)(506),
          maxH: (0, _v47.rem)(516),
          children: (0, _v6.jsx)(_v270, {
            image: _v7,
            ref: _v4,
            onSubmit: () => _v13({}),
            onDismiss: () => {
              _v6(!1), _v8(void 0);
            }
          })
        })]
      })]
    });
  }
  function _v275({
    editMode: _v0,
    picture: _v1,
    name: _v2
  }) {
    let _v3 = (0, _v16.useContext)(_v26.ViewerContext),
      {
        userId: _v4
      } = (0, _v16.useContext)(_v50.default),
      {
        trackUserProfileEditFieldClicked: _v5
      } = (0, _v24.useProfileTracking)(),
      {
        updateProfilePicture: _v6
      } = _v212(),
      _v7 = (0, _v16.useMemo)(() => _v1?.sizes?.[3]?.link, [_v1]),
      _v8 = (0, _v16.useMemo)(() => {
        let _v0, _v1;
        return _v1 ? (0 === (_v1 = (_v0 = _v265(_v1)).filter(_v0 => _v0.width > 250)).length && (_v1 = _v0.filter(_v0 => _v0.width > 100)), _v1.map((_v0, _v1) => `${_v0.link} ${_v1 + 2}x`).join(", ")) : void 0;
      }, [_v1]),
      _v9 = null == _v1 || "default" === _v1.type;
    return (0, _v6.jsx)(_v31.Box, {
      position: "relative",
      mt: {
        base: `-${(0, _v27.rem)(35)}`,
        md: `-${(0, _v27.rem)(20)}`,
        lg: 0
      },
      children: (0, _v6.jsx)(_v33.Flex, {
        h: (0, _v27.rem)(128),
        w: (0, _v27.rem)(128),
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        align: "center",
        justify: "center",
        onClick: _v0 ? () => _v5({
          userProfilePageUserId: String(_v4),
          userProfileEditField: "avatar"
        }) : void 0,
        sx: _v9 ? void 0 : {
          "&:hover .container .content": {
            bottom: "-60%"
          },
          "@media (any-hover: none)": {
            ".container .content": {
              bottom: "-60%"
            }
          }
        },
        children: _v0 ? (0, _v6.jsxs)(_v274, {
          onChange: _v0 => {
            if (_v6(_v0), _v3?.user && _v3.setUser) {
              let _v0 = _v3.user;
              _v3.setUser({
                ..._v0,
                pictures: _v0
              });
            }
          },
          className: "container",
          children: [(0, _v6.jsx)(_v111.Avatar, {
            alt: _v2,
            src: _v7,
            srcSet: _v8,
            size: "3xl",
            nameProps: {
              name: _v2
            }
          }), (0, _v6.jsx)(_v31.Box, {
            className: "content",
            h: "100%",
            left: 0,
            position: "absolute",
            transition: "bottom 0.2s ease",
            w: "100%",
            color: "gray.50",
            fontSize: (0, _v27.rem)(14),
            lineHeight: (0, _v27.rem)(16),
            textAlign: "center",
            bg: "blackAlpha.500",
            pt: (0, _v27.rem)(6),
            sx: {
              wordSpacing: "100vw"
            },
            ...(_v9 ? {
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            } : {
              bottom: "-100%"
            }),
            children: _v51.default.UploadPicture
          })]
        }) : (0, _v6.jsx)(_v111.Avatar, {
          alt: _v2,
          src: _v7,
          srcSet: _v8,
          size: "3xl",
          nameProps: {
            name: _v2
          }
        })
      })
    });
  }
  let _v276 = ({
      className: _v0
    }) => (0, _v6.jsx)(_v74.Badge, {
      as: "a",
      variant: "default",
      href: "/experts",
      target: "_blank",
      className: _v0,
      onClick: _v0 => _v0.stopPropagation(),
      bg: _v38.bokehTheme.colors.gray["300"],
      color: _v38.bokehTheme.colors.gray["50"],
      textDecoration: "none",
      children: "EXPERT"
    }),
    _v277 = {
      as: "h1",
      fontSize: (0, _v27.rem)(24),
      letterSpacing: (0, _v27.rem)(-.96),
      color: "text-primary",
      display: "inline",
      mr: 2
    },
    _v278 = {
      minHeight: (0, _v27.rem)(38),
      direction: "column",
      justifyContent: "center",
      wordBreak: "break-word",
      border: `${(0, _v27.rem)(1)} solid transparent`,
      borderRadius: "md",
      px: "xs"
    };
  function _v279(_v0) {
    let {
        name: _v1,
        canEditPersonalInfo: _v2,
        isExpert: _v3
      } = _v0,
      {
        editMode: _v4
      } = (0, _v16.useContext)(_v50.default);
    return (0, _v6.jsx)(_v31.Box, {
      mt: "md",
      children: _v4 && _v2 ? (0, _v6.jsx)(_v280, {
        ..._v0
      }) : (0, _v6.jsx)(_v33.Flex, {
        ..._v278,
        children: (0, _v6.jsxs)("span", {
          children: [(0, _v6.jsx)(_v75.Header, {
            ..._v277,
            children: _v1
          }), _v3 && (0, _v6.jsx)(_v281, {})]
        })
      })
    });
  }
  function _v280({
    name: _v0,
    onNameSubmit: _v1,
    isExpert: _v2
  }) {
    let [_v3, _v4] = (0, _v16.useState)(!1),
      [_v5, _v6] = (0, _v16.useState)("");
    return (0, _v6.jsx)(_v31.Box, {
      tabIndex: 0,
      _hover: {
        outline: "none"
      },
      onKeyDown: _v0 => _v60(_v0, () => {
        _v3 || _v4(!0);
      }, !1),
      children: (0, _v6.jsx)(_v31.Box, {
        padding: {
          base: `${(0, _v27.rem)(5.5)} 0`,
          lg: 0
        },
        children: _v3 ? (0, _v6.jsxs)(_v33.Flex, {
          ..._v278,
          position: "relative",
          sx: {
            input: {
              fontSize: (0, _v27.rem)(24),
              paddingLeft: (0, _v27.rem)(10),
              paddingRight: (0, _v27.rem)(30),
              height: (0, _v27.rem)(36)
            }
          },
          children: [(0, _v6.jsx)(_v214, {
            value: _v0,
            onSubmit: _v0 => {
              _v6("");
              let _v1 = _v0.trim();
              _v1 ? _v1.length && _v1.length <= _v49.PROFILE_NAME_MAX_LENGTH ? (_v0 !== _v1 && _v1({
                name: _v1
              }), _v4(!1)) : _v1.length > _v49.PROFILE_NAME_MAX_LENGTH && _v6(_v51.default.TooLongNameError) : _v6(_v51.default.NameIsRequired);
            },
            errorMsg: _v5,
            onChange: () => _v6("")
          }), !!_v5 && (0, _v6.jsx)(_v252, {
            children: _v5
          })]
        }) : (0, _v6.jsx)(_v33.Flex, {
          ..._v278,
          onClick: () => _v4(!0),
          cursor: "text",
          transition: "all 120ms ease-in-out 0s",
          sx: _v53,
          children: (0, _v6.jsxs)("span", {
            children: [(0, _v6.jsx)(_v75.Header, {
              ..._v277,
              children: _v0
            }), _v2 && (0, _v6.jsx)(_v281, {}), (0, _v6.jsx)(_v31.Box, {
              display: "inline",
              sx: {
                div: {
                  transform: `translateY(-${(0, _v27.rem)(4)})`
                }
              },
              children: (0, _v6.jsx)(_v58, {
                inlineMargin: !0,
                onClick: () => _v4(!0)
              })
            })]
          })
        })
      })
    });
  }
  let _v281 = (0, _v28.default)(_v276).withConfig({
    displayName: "ProfileName__StyledExpertsBadge",
    componentId: "sc-83f27bee-0"
  })`
  transform: translateY(-${(0, _v27.rem)(4)});
  border-radius: ${(0, _v27.rem)(2)};
  font-size: ${(0, _v27.rem)(9)};
  width: fit-content;
  display: inline-block;
  a {
    font-weight: 700;
    padding: ${(0, _v27.rem)(2)} ${(0, _v27.rem)(4)};
  }
`;
  var _v282 = _v0.i(0);
  function _v283(_v0) {
    let {
        gender: _v1,
        pronounsList: _v2
      } = _v0,
      _v3 = (0, _v16.useMemo)(() => _v2.find(_v0 => _v0.value === _v1) || _v2[0], [_v1, _v2]),
      {
        editMode: _v4
      } = (0, _v16.useContext)(_v50.default);
    return _v4 ? (0, _v6.jsx)(_v31.Box, {
      height: (0, _v27.rem)(20),
      p: 0,
      mt: "2px",
      children: (0, _v6.jsx)(_v285, {
        ..._v0
      })
    }) : _v3.hideValue ? null : (0, _v6.jsx)(_v31.Box, {
      height: (0, _v27.rem)(20),
      p: 0,
      mt: "2px",
      px: (0, _v27.rem)(7),
      children: (0, _v6.jsx)(_v18.Text, {
        as: "p",
        color: "text-primary",
        m: 0,
        variant: "body-sm",
        lineHeight: (0, _v27.rem)(20),
        children: _v3.label
      })
    });
  }
  let _v284 = {
    '[data-part="trigger"]': {
      outline: "none",
      height: (0, _v27.rem)(24),
      px: (0, _v27.rem)(7),
      _focus: {
        outline: "none"
      }
    },
    '[data-part="indicator"]': {
      opacity: 0
    },
    '&:hover, &:has([data-state="open"])': {
      '[data-part="trigger"]': {
        outline: "1px solid",
        outlineOffset: "-1px",
        outlineColor: "input-stroke"
      },
      '[data-part="indicator"]': {
        opacity: 1
      }
    }
  };
  function _v285({
    gender: _v0,
    pronounsList: _v1,
    onPronounUpdate: _v2
  }) {
    let _v3 = (0, _v16.useMemo)(() => _v1.map(_v0 => ({
      label: _v0.label,
      value: _v0.value
    })), [_v1]);
    return (0, _v6.jsx)(_v31.Box, {
      sx: _v284,
      children: (0, _v6.jsx)(_v282.Select, {
        size: "xs",
        variant: "outlined",
        items: _v3,
        value: _v0 ? [_v0] : [_v1[0].value],
        onValueChange: _v0 => {
          let _v1 = _v0.value[0];
          _v1 !== _v0 && _v2({
            gender: _v1
          });
        }
      })
    });
  }
  var _v286 = _v0.i(0),
    _v287 = _v0.i(0);
  function _v288({
    onClick: _v0,
    loading: _v1 = !1,
    translationKey: _v2
  }) {
    return (0, _v6.jsx)(_v33.Flex, {
      justifyContent: "center",
      alignItems: "center",
      pt: (0, _v27.rem)(12.5),
      children: (0, _v6.jsx)(_v32.Button, {
        rightIcon: (0, _v6.jsx)(_v287.ArrowDown, {}),
        size: "sm",
        borderRadius: "full",
        boxShadow: `0 ${(0, _v27.rem)(2)} ${(0, _v27.rem)(8)} rgba(0, 0, 0, 0.15)`,
        onClick: _v0,
        isLoading: _v1,
        isDisabled: _v1,
        children: _v2 ? _v51.default[_v2] : _v51.default.LoadMore
      })
    });
  }
  let _v289 = _v0 => _v0.replace("?r=pad", ""),
    _v290 = _v0 => _v0.videos?.data || [],
    _v291 = (_v0, _v1) => _v0.clipUri.localeCompare(_v1.clipUri),
    _v292 = (_v0, _v1) => {
      let _v2 = _v0.sectionClip?.clip?.name ?? "",
        _v3 = _v1.sectionClip?.clip?.name ?? "";
      return _v2.localeCompare(_v3, void 0, {
        sensitivity: "base"
      });
    },
    _v293 = (_v0, _v1) => {
      let _v2 = _v0.sectionClip?.clip?.createdTime ?? "",
        _v3 = _v1.sectionClip?.clip?.createdTime ?? "";
      return _v2.localeCompare(_v3);
    },
    _v294 = (_v0, _v1, _v2) => {
      switch (_v2) {
        case "addedDesc":
          return -_v293(_v0, _v1) || _v291(_v0, _v1);
        case "addedAsc":
          return _v293(_v0, _v1) || _v291(_v0, _v1);
        case "titleAsc":
          return _v292(_v0, _v1) || _v291(_v0, _v1);
        case "titleDesc":
          return -_v292(_v0, _v1) || _v291(_v0, _v1);
      }
    },
    _v295 = (_v0, _v1) => {
      for (let _v0 = 1; _v0 < _v0.length; _v0++) if (_v294(_v0[_v0 - 1], _v0[_v0], _v1) > 0) return !1;
      return !0;
    },
    _v296 = ["addedDesc", "addedAsc", "titleAsc", "titleDesc"],
    _v297 = (_v0, _v1) => {
      var _v2;
      if ("custom" === _v1 || 1 !== _v0.length) return _v0;
      let [_v3] = _v0,
        _v4 = (_v2 = _v3.items, "custom" === _v1 || _v2.length < 2 || _v295(_v2, _v1) ? _v2 : [..._v2].sort((_v0, _v1) => _v294(_v0, _v1, _v1)));
      return _v4 === _v3.items ? _v0 : [{
        ..._v3,
        items: _v4
      }];
    },
    _v298 = {
      perPage: _v49.MAX_VIDEOS_PER_PAGE,
      revalidateAll: !1,
      revalidateOnFocus: !1
    };
  var _v299 = _v0.i(0);
  let _v300 = (_v0, _v1) => {
    let {
      top: _v2,
      height: _v3
    } = _v0.currentTarget.getBoundingClientRect();
    return _v0.clientY > _v2 + _v3 / 2 ? _v1 + 1 : _v1;
  };
  function _v301({
    item: _v0,
    sectionUri: _v1,
    itemIndex: _v2,
    itemsLength: _v3,
    hasBottomBorder: _v4,
    saving: _v5,
    dragOrigin: _v6,
    dragTarget: _v7,
    onListDragOver: _v8,
    onDragStart: _v9,
    onTargetChange: _v10,
    onDrop: _v11,
    onDragEnd: _v12
  }) {
    let _v13 = !!_v6,
      _v14 = (0, _v16.useMemo)(() => 0 === _v2, [_v2]),
      _v15 = (0, _v16.useMemo)(() => _v2 === _v3 - 1, [_v2, _v3]),
      _v16 = (0, _v16.useMemo)(() => _v6?.sectionUri === _v1 && _v6.itemIndex === _v2, [_v6, _v2, _v1]),
      _v17 = (0, _v16.useMemo)(() => _v13 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v2, [_v7, _v13, _v2, _v1]),
      _v18 = (0, _v16.useMemo)(() => {
        if (!_v13) return !1;
        let _v0 = _v7?.sectionUri === _v1 && _v7.itemIndex === _v3;
        return _v7?.sectionUri === _v1 && _v7.itemIndex === _v2 + 1 && !(_v0 && _v2 === _v3 - 1);
      }, [_v7, _v13, _v2, _v3, _v1]),
      _v19 = (0, _v16.useMemo)(() => _v13 && _v14 && _v7?.sectionUri === _v1 && 0 === _v7.itemIndex, [_v7, _v13, _v14, _v1]),
      _v20 = (0, _v16.useMemo)(() => _v13 && _v15 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v3, [_v7, _v13, _v15, _v3, _v1]),
      _v21 = (0, _v16.useCallback)(() => _v9({
        sectionUri: _v1,
        itemIndex: _v2
      }), [_v2, _v9, _v1]),
      _v22 = (0, _v16.useCallback)(_v0 => {
        _v8?.(_v0), _v0.preventDefault(), _v6 && _v10({
          sectionUri: _v1,
          itemIndex: _v300(_v0, _v2)
        });
      }, [_v6, _v2, _v8, _v10, _v1]),
      _v23 = (0, _v16.useCallback)(_v0 => {
        _v0.preventDefault(), _v11({
          sectionUri: _v1,
          itemIndex: _v300(_v0, _v2)
        }), _v12(_v0);
      }, [_v2, _v11, _v12, _v1]);
    return (0, _v6.jsxs)(_v33.Flex, {
      as: "li",
      draggable: !_v5,
      alignItems: "center",
      gap: (0, _v47.rem)(14),
      padding: (0, _v47.rem)(10),
      borderTopWidth: _v19 ? (0, _v47.rem)(2) : 0,
      borderTopStyle: "solid",
      borderTopColor: _v19 ? "text-primary" : "transparent",
      borderBottomWidth: _v18 || _v20 ? (0, _v47.rem)(2) : _v4 ? (0, _v47.rem)(1) : 0,
      borderBottomStyle: "solid",
      borderBottomColor: _v18 || _v20 ? "text-primary" : "stroke",
      bg: _v17 ? "fill-component-hover" : "transparent",
      opacity: _v16 ? .45 : 1,
      cursor: "grab",
      onDragStart: _v21,
      onDragOver: _v22,
      onDrop: _v23,
      onDragEnd: _v12,
      children: [(0, _v6.jsx)(_v33.Flex, {
        as: "span",
        className: "drag-handle",
        children: (0, _v6.jsx)(_v299.DragV, {
          boxSize: (0, _v47.rem)(18),
          color: "text-primary"
        })
      }), (0, _v6.jsx)(_v31.Box, {
        w: (0, _v47.rem)(98),
        children: (0, _v6.jsx)(_v112.ContentRow.Thumbnail, {
          alt: _v0.display.videoName,
          src: _v0.display.thumbnail,
          badgeText: _v0.display.duration,
          badgeSize: "xs",
          minWidth: (0, _v47.rem)(98)
        })
      }), (0, _v6.jsxs)(_v31.Box, {
        minWidth: 0,
        children: [(0, _v6.jsx)(_v18.Text, {
          as: "div",
          variant: "body-md",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginBottom: (0, _v47.rem)(1),
          children: _v0.display.videoName
        }), (0, _v6.jsx)(_v18.Text, {
          as: "div",
          variant: "body-xs",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          color: "text-secondary",
          marginBottom: 0,
          children: _v0.display.uploadedOn
        })]
      })]
    });
  }
  function _v302({
    group: _v0,
    sectionIndex: _v1,
    sectionsCount: _v2,
    groupOffset: _v3,
    totalItems: _v4,
    showSectionWrappers: _v5,
    saving: _v6,
    dragOrigin: _v7,
    dragTarget: _v8,
    setSectionGroups: _v9,
    onSectionVideoFetchingChange: _v10,
    onListDragOver: _v11,
    onDragStart: _v12,
    onTargetChange: _v13,
    onDrop: _v14,
    onDragEnd: _v15,
    untitledSectionLabel: _v16
  }) {
    let {
        section: _v17,
        items: _v18
      } = _v0,
      {
        isFetchingVideosInSection: _v19
      } = function ({
        group: _v0,
        setSectionGroups: _v1
      }) {
        let _v2 = _v0.section.uri,
          _v3 = (0, _v16.useMemo)(() => {
            let _v0, _v1;
            return _v0 = _v0.items.some(_v0 => !_v0.sectionClip), _v1 = _v0.items.length < _v0.section.videos.total, _v0 || _v1;
          }, [_v0]),
          {
            data: _v4,
            isValidating: _v5,
            setSize: _v6
          } = _v95(_v2, _v0.section.videos.data, _v0.section.videos.total, _v3, _v298),
          _v7 = (0, _v16.useRef)(!1),
          _v8 = (0, _v16.useMemo)(() => _v65(_v4), [_v4]),
          _v9 = (0, _v16.useMemo)(() => !!_v66(_v4), [_v4]),
          _v10 = (0, _v16.useCallback)(_v0 => {
            _v0.length && _v1(_v0 => {
              let _v1 = new Set(_v0.flatMap(_v0 => _v0.items.map(_v0 => _v0.clipUri))),
                _v2 = !1,
                _v3 = _v0.map(_v0 => {
                  if (_v0.section.uri !== _v2) return _v0;
                  let _v1 = new Map(_v0.map(_v0 => [_v0.clip.uri, _v0])),
                    _v2 = !1,
                    _v3 = _v0.items.map(_v0 => {
                      let _v1 = _v1.get(_v0.clipUri);
                      return !_v0.sectionClip && _v1 ? (_v2 = !0, {
                        ..._v0,
                        sectionClip: _v1
                      }) : _v0;
                    }),
                    _v4 = new Set(_v3.map(_v0 => _v0.clipUri));
                  return (_v0.forEach(_v0 => {
                    let _v1 = _v0.clip.uri,
                      _v2 = _v4.has(_v1),
                      _v3 = _v1.has(_v1) && !_v2;
                    _v2 || _v3 || (_v2 = !0, _v4.add(_v1), _v3.push({
                      clipUri: _v1,
                      sectionUri: _v2,
                      sectionClip: _v0
                    }));
                  }), _v2) ? (_v2 = !0, {
                    ..._v0,
                    items: _v3
                  }) : _v0;
                });
              return _v2 ? _v3 : _v0;
            });
          }, [_v2, _v1]);
        (0, _v16.useEffect)(() => {
          _v10(_v8);
        }, [_v10, _v8]);
        let _v11 = (0, _v16.useCallback)(() => {
          _v3 && _v9 && !_v5 && !_v7.current && _v6 && (_v7.current = !0, Promise.resolve(_v6(_v0 => (_v0 || 0) + 1)).catch(() => {}).finally(() => {
            _v7.current = !1;
          }));
        }, [_v9, _v5, _v6, _v3]);
        return (0, _v16.useEffect)(() => {
          _v3 && _v9 && _v11();
        }, [_v9, _v11, _v8.length, _v3]), {
          isFetchingVideosInSection: _v3 && (_v5 || _v9)
        };
      }({
        group: _v0,
        setSectionGroups: _v9
      }),
      _v20 = (0, _v16.useCallback)(_v0 => {
        _v19 || _v14(_v0);
      }, [_v19, _v14]),
      _v21 = (0, _v16.useCallback)(_v0 => {
        _v0.preventDefault(), _v19 || _v15();
      }, [_v19, _v15]),
      _v22 = (0, _v16.useCallback)(_v0 => {
        _v19 || _v12(_v0);
      }, [_v19, _v12]),
      _v23 = (0, _v16.useCallback)(_v0 => {
        _v19 || _v13(_v0);
      }, [_v19, _v13]),
      _v24 = (0, _v16.useCallback)(_v0 => {
        _v19 || _v11(_v0);
      }, [_v19, _v11]);
    if ((0, _v16.useEffect)(() => {
      _v10(_v17.uri, _v19);
    }, [_v19, _v10, _v17.uri]), (0, _v16.useEffect)(() => () => {
      _v10(_v17.uri, !1);
    }, [_v10, _v17.uri]), !_v18.some(_v0 => !!_v0.sectionClip)) return null;
    let _v25 = _v17.title?.trim() || `${_v16} ${_v1 + 1}`;
    return (0, _v6.jsxs)(_v31.Box, {
      as: "li",
      listStyleType: "none",
      position: "relative",
      borderRadius: _v5 ? "lg" : 0,
      bg: _v5 ? "fill-surface" : "transparent",
      overflow: _v5 ? "hidden" : "visible",
      marginBottom: _v5 && _v1 < _v2 - 1 ? (0, _v47.rem)(10) : 0,
      children: [_v5 ? (0, _v6.jsx)(_v18.Text, {
        as: "p",
        variant: "body-md",
        margin: 0,
        px: "md",
        py: (0, _v47.rem)(10),
        bg: "fill-component-hover",
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: _v25
      }) : null, (0, _v6.jsx)(_v31.Box, {
        pointerEvents: _v19 ? "none" : "auto",
        children: _v18.map((_v0, _v1) => {
          if (!_v0.sectionClip) return null;
          let _v2 = _v3 + _v1 === _v4 - 1,
            _v3 = _v5 ? _v1 < _v18.length - 1 : !_v2;
          return (0, _v6.jsx)(_v301, {
            item: _v0,
            sectionUri: _v17.uri,
            itemIndex: _v1,
            itemsLength: _v18.length,
            hasBottomBorder: _v3,
            saving: _v6 || _v19,
            dragOrigin: _v7,
            dragTarget: _v8,
            onListDragOver: _v24,
            onDragStart: _v22,
            onTargetChange: _v23,
            onDrop: _v20,
            onDragEnd: _v21
          }, `${_v0.clipUri}-${_v1}`);
        })
      }), _v19 ? (0, _v6.jsx)(_v31.Box, {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
        bg: "blackAlpha.500",
        children: (0, _v6.jsx)(_v33.Flex, {
          position: "sticky",
          top: 0,
          height: `min(100%, ${(0, _v47.rem)(440)}, 55vh)`,
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v6.jsx)(_v190.Spinner, {
            size: "md"
          })
        })
      }) : null]
    });
  }
  var _v303 = _v0.i(0),
    _v304 = _v0.i(0),
    _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0),
    _v308 = _v0.i(0);
  function _v309({
    value: _v0,
    onChange: _v1,
    isDisabled: _v2,
    tooltipLabel: _v3
  }) {
    let _v4 = "custom" === _v0 ? _v51.default.Custom : _v131[_v0].text;
    return _v2 ? (0, _v6.jsx)(_v86.Tooltip, {
      label: _v3,
      placement: "top",
      textAlign: "center",
      shouldWrapChildren: !0,
      children: (0, _v6.jsx)(_v32.Button, {
        variant: "tertiary",
        rightIcon: (0, _v6.jsx)(_v308.SortSmall, {}),
        isDisabled: !0,
        "aria-label": _v51.default.SortBy,
        children: _v4
      })
    }) : (0, _v6.jsxs)(_v303.Menu, {
      isLazy: !0,
      children: [(0, _v6.jsx)(_v304.MenuButton, {
        as: _v32.Button,
        variant: "tertiary",
        rightIcon: (0, _v6.jsx)(_v308.SortSmall, {}),
        "aria-label": _v51.default.SortBy,
        children: _v4
      }), (0, _v6.jsx)(_v307.MenuList, {
        minWidth: (0, _v47.rem)(200),
        children: (0, _v6.jsx)(_v305.MenuGroup, {
          title: _v51.default.SortBy,
          as: _v18.Text,
          variant: "heading-xs",
          borderTopRadius: "menuList",
          children: Object.keys(_v131).map(_v0 => (0, _v6.jsx)(_v306.MenuItemOption, {
            isChecked: _v0 === _v0,
            onClick: () => _v1(_v0),
            children: _v131[_v0].text
          }, _v0))
        })
      })]
    });
  }
  function _v310({
    sections: _v0,
    sectionsActive: _v1,
    hasNextSections: _v2,
    loadingNextSections: _v3,
    onLoadNextSections: _v4,
    onDismiss: _v5
  }) {
    let {
        cache: _v6,
        mutate: _v7
      } = (0, _v90.useSWRConfig)(),
      _v8 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        mutate: _v9
      } = (0, _v16.useContext)(_v89),
      _v10 = (0, _v92.default)(),
      _v11 = (0, _v92.default)(),
      {
        trackUserProfileReorderSaved: _v12,
        trackUserProfileVideoReordered: _v13
      } = (0, _v24.useProfileTracking)(),
      _v14 = (0, _v16.useMemo)(() => _v0.map(_v0 => {
        let _v1 = new Map(_v290(_v0).filter(_v0 => null != _v0.clip).map(_v0 => [_v0.clip.uri, _v0])),
          _v2 = (_v0.clipUris?.length ? _v0.clipUris : _v290(_v0).filter(_v0 => null != _v0.clip).map(_v0 => _v0.clip.uri)).map(_v0 => ({
            clipUri: _v0,
            sectionUri: _v0.uri,
            sectionClip: _v1.get(_v0)
          }));
        return {
          section: _v0,
          items: _v2
        };
      }), [_v0]),
      [_v15, _v16] = (0, _v16.useState)(_v14),
      [_v17, _v18] = (0, _v16.useState)({}),
      [_v19, _v20] = (0, _v16.useState)(!1),
      [_v21, _v22] = (0, _v16.useState)("custom"),
      _v23 = (0, _v16.useRef)(!1),
      _v24 = (0, _v16.useRef)(!1);
    (0, _v16.useEffect)(() => {
      if (!_v23.current) {
        _v16(_v14), _v23.current = !0;
        return;
      }
      _v16(_v0 => {
        let _v1 = new Map(_v0.map(_v0 => [_v0.section.uri, _v0])),
          _v2 = !1,
          _v3 = [..._v0];
        _v14.forEach(_v0 => {
          _v1.has(_v0.section.uri) || (_v3.push(_v0), _v2 = !0);
        });
        let _v4 = !1,
          _v5 = _v3.map(_v0 => {
            let _v1 = _v14.find(_v0 => _v0.section.uri === _v0.section.uri);
            return _v1 && _v1.section !== _v0.section ? (_v4 = !0, {
              ..._v0,
              section: _v1.section
            }) : _v0;
          });
        return _v2 || _v4 ? _v5 : _v0;
      });
    }, [_v14]);
    let _v25 = (0, _v16.useMemo)(() => _v15.map(_v0 => ({
        ..._v0,
        items: _v0.items.map(_v0 => {
          let _v1, _v2, _v3;
          return {
            ..._v0,
            display: (_v1 = _v0.sectionClip?.clip, _v2 = _v1?.name || _v51.default.Video, _v3 = _v1?.pictures?.sizes?.length ? ((_v0, _v1 = !1) => {
              if (_v0.length <= 0) return "";
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0],
                  _v1 = !_v1 || _v0.height > _v0.width;
                if (_v0.width >= 160 && _v1) return _v289(_v0.link);
              }
              return _v289(_v0[_v0.length - 1].link);
            })(_v1.pictures.sizes) : "", {
              videoName: _v2,
              thumbnail: _v3,
              duration: _v82(_v1?.duration || 0),
              uploadedOn: _v1?.createdTime ? `${_v51.default.Uploaded} ${_v83(_v1.createdTime, "en", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}` : _v51.default.Uploaded
            })
          };
        })
      })), [_v15]),
      _v26 = (0, _v16.useMemo)(() => {
        let _v0 = _v15.some(({
          section: _v0
        }) => !!_v0.title && _v0.title.trim().length > 0);
        return _v15.length > 1 || _v0;
      }, [_v15]),
      _v27 = (0, _v16.useMemo)(() => _v15.reduce((_v0, _v1) => _v0 + _v1.items.length, 0), [_v15]),
      _v28 = (0, _v16.useMemo)(() => _v15.length > 0 && _v15.every(_v0 => _v0.items.length > 0 && _v0.items.every(_v0 => !!_v0.sectionClip)), [_v15]),
      _v29 = !_v1 && 1 === _v15.length;
    (0, _v16.useEffect)(() => {
      if (_v24.current || !_v28 || !_v29 || "custom" !== _v21) return;
      let _v0 = (_v0 => {
        if (_v0.length < 2 || _v0.some(_v0 => !_v0.sectionClip)) return "custom";
        for (let _v0 of _v296) if (_v295(_v0, _v0)) return _v0;
        return "custom";
      })(_v15[0].items);
      _v24.current = !0, "custom" !== _v0 && _v22(_v0);
    }, [_v28, _v29, _v15, _v21]), (0, _v16.useEffect)(() => {
      "custom" === _v21 || !_v28 || _v29 && _v16(_v0 => _v297(_v0, _v21));
    }, [_v28, _v29, _v15, _v21]);
    let _v30 = (0, _v16.useMemo)(() => {
        let _v0 = 0;
        return _v15.map(_v0 => {
          let _v1 = _v0;
          return _v0 += _v0.items.length, _v1;
        });
      }, [_v15]),
      {
        dragOrigin: _v31,
        dragTarget: _v32,
        listRef: _v33,
        onDragEnd: _v34,
        onDrop: _v35,
        onListDragOverForAutoScroll: _v36,
        onRowDragStart: _v37,
        onTargetChange: _v38
      } = function ({
        setSectionGroups: _v0,
        onUserMutate: _v1
      }) {
        let _v2 = (0, _v16.useRef)(null),
          _v3 = (0, _v16.useRef)(null),
          _v4 = (0, _v16.useRef)(null),
          _v5 = (0, _v16.useRef)(0),
          [_v6, _v7] = (0, _v16.useState)(null),
          [_v8, _v9] = (0, _v16.useState)(null),
          _v10 = (0, _v16.useCallback)(_v0 => {
            (_v8?.sectionUri !== _v0.sectionUri || _v8.itemIndex !== _v0.itemIndex) && _v9(_v0);
          }, [_v8]),
          _v11 = (0, _v16.useCallback)(() => {
            null !== _v3.current && (cancelAnimationFrame(_v3.current), _v3.current = null), _v4.current = null, _v5.current = 0;
          }, []),
          _v12 = (0, _v16.useCallback)(() => {
            if (null !== _v3.current) return;
            let _v0 = () => {
              let _v0 = _v2.current,
                _v1 = _v4.current,
                _v2 = _v5.current;
              if (!_v0 || null == _v1 || performance.now() - _v2 > 120) {
                _v3.current = null;
                return;
              }
              let _v3 = _v0.getBoundingClientRect(),
                _v4 = 0;
              _v1 < _v3.top + 72 ? _v4 = -Math.min(18, Math.max(2, (_v3.top + 72 - _v1) / 4)) : _v1 > _v3.bottom - 72 && (_v4 = Math.min(18, Math.max(2, (_v1 - (_v3.bottom - 72)) / 4))), 0 !== _v4 && (_v0.scrollTop += _v4), _v3.current = requestAnimationFrame(_v0);
            };
            _v3.current = requestAnimationFrame(_v0);
          }, []),
          _v13 = (0, _v16.useCallback)(_v0 => {
            _v4.current = _v0.clientY, _v5.current = performance.now(), _v12();
          }, [_v12]),
          _v14 = (0, _v16.useCallback)(_v0 => {
            _v7(_v0), _v10(_v0);
          }, [_v10]),
          _v15 = (0, _v16.useCallback)(() => {
            _v7(null), _v9(null), _v11();
          }, [_v11]);
        (0, _v16.useEffect)(() => {
          !_v6 && _v8 && _v9(null);
        }, [_v6, _v8]), (0, _v16.useEffect)(() => _v11, [_v11]);
        let _v16 = (0, _v16.useCallback)(_v0 => {
          if (!_v6) {
            _v9(null), _v11();
            return;
          }
          (_v6.sectionUri !== _v0.sectionUri || _v0.itemIndex !== _v6.itemIndex && _v0.itemIndex !== _v6.itemIndex + 1) && (_v0(_v0 => ((_v0, _v1, _v2) => {
            let _v3 = _v0.map(_v0 => ({
                ..._v0,
                items: _v0.items.map(_v0 => ({
                  ..._v0
                }))
              })),
              _v4 = _v3.findIndex(_v0 => _v0.section.uri === _v1.sectionUri),
              _v5 = _v3.findIndex(_v0 => _v0.section.uri === _v2.sectionUri);
            if (_v4 < 0 || _v5 < 0) return _v0;
            let _v6 = _v3[_v4].items;
            if (_v1.itemIndex < 0 || _v1.itemIndex >= _v6.length) return _v0;
            let [_v7] = _v6.splice(_v1.itemIndex, 1);
            if (!_v7) return _v0;
            let _v8 = _v3[_v5].items,
              _v9 = _v2.itemIndex;
            return _v4 === _v5 && _v1.itemIndex < _v2.itemIndex && (_v9 -= 1), _v9 = Math.max(0, Math.min(_v9, _v8.length)), _v7.sectionUri = _v2.sectionUri, _v8.splice(_v9, 0, _v7), _v3;
          })(_v0, _v6, _v0)), _v1?.()), _v7(null), _v9(null), _v11();
        }, [_v6, _v1, _v0, _v11]);
        return {
          dragOrigin: _v6,
          dragTarget: _v8,
          listRef: _v2,
          onDragEnd: _v15,
          onDrop: _v16,
          onListDragOverForAutoScroll: _v13,
          onRowDragStart: _v14,
          onTargetChange: _v10
        };
      }({
        setSectionGroups: _v16,
        onUserMutate: (0, _v16.useCallback)(() => {
          _v22("custom");
        }, [])
      }),
      _v39 = (0, _v16.useCallback)((..._v0) => (_v13(), _v35(..._v0)), [_v35, _v13]),
      _v40 = (0, _v16.useCallback)(_v0 => {
        _v22(_v0), _v16(_v0 => _v297(_v0, _v0));
      }, []),
      {
        onListScrollRequestNextSections: _v41
      } = function ({
        hasNextSections: _v0,
        loadingNextSections: _v1,
        onLoadNextSections: _v2
      }) {
        let _v3 = (0, _v16.useRef)(!1);
        (0, _v16.useEffect)(() => {
          _v1 || (_v3.current = !1);
        }, [_v1]);
        let _v4 = (0, _v16.useCallback)(() => {
          _v3.current || !_v0 || _v1 || (_v3.current = !0, _v2());
        }, [_v0, _v1, _v2]);
        return {
          onListScrollRequestNextSections: (0, _v16.useCallback)(_v0 => {
            let _v1 = _v0.currentTarget;
            _v1.scrollTop + _v1.clientHeight >= _v1.scrollHeight - 120 && _v4();
          }, [_v4])
        };
      }({
        hasNextSections: _v2,
        loadingNextSections: _v3,
        onLoadNextSections: _v4
      }),
      _v42 = (0, _v16.useCallback)(_v0 => {
        _v41(_v0);
      }, [_v41]),
      _v43 = (0, _v16.useCallback)((_v0, _v1) => {
        _v18(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []);
    (0, _v16.useEffect)(() => {
      let _v0 = new Set(_v15.map(_v0 => _v0.section.uri));
      _v18(_v0 => {
        let _v1 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v0.has(_v1) && (_v0[_v1] = _v2), _v0), {});
        return Object.keys(_v0).some(_v0 => !(_v0 in _v1)) ? _v1 : _v0;
      });
    }, [_v15]);
    let _v44 = (0, _v16.useMemo)(() => Object.values(_v17).some(Boolean), [_v17]),
      _v45 = (0, _v16.useMemo)(() => {
        var _v0, _v1;
        let _v2, _v3;
        return _v0 = _v14, _v1 = _v15, _v2 = _v0.map(_v0 => ({
          ..._v0,
          items: _v0.items.map(_v0 => ({
            ..._v0
          }))
        })), _v3 = [], _v1.forEach(_v0 => {
          _v0.items.forEach((_v0, _v1) => {
            let _v2 = ((_v0, _v1) => {
              for (let _v0 of _v0) {
                let _v0 = _v0.items.findIndex(_v0 => _v0.clipUri === _v1);
                if (-1 !== _v0) return {
                  sectionUri: _v0.section.uri,
                  itemIndex: _v0
                };
              }
              return null;
            })(_v2, _v0.clipUri);
            if (!_v2) return;
            let {
                sectionUri: _v3,
                itemIndex: _v4
              } = _v2,
              _v5 = _v0.section.uri;
            if (_v3 === _v5 && _v4 === _v1) return;
            let _v6 = _v2.find(_v0 => _v0.section.uri === _v3),
              _v7 = _v2.find(_v0 => _v0.section.uri === _v5);
            if (!_v6 || !_v7) return;
            let [_v8] = _v6.items.splice(_v4, 1);
            if (!_v8) return;
            let _v9 = Math.max(0, Math.min(_v1, _v7.items.length));
            _v8.sectionUri = _v5, _v7.items.splice(_v9, 0, _v8), _v3.push({
              videoUri: _v8.clipUri,
              fromSectionUri: _v3,
              toSectionUri: _v5,
              toVideoIndex: _v9
            });
          });
        }), _v3;
      }, [_v14, _v15]),
      _v46 = (0, _v16.useMemo)(() => _v44 || _v3 || _v19 || 0 === _v27, [_v44, _v3, _v19, _v27]),
      _v47 = (0, _v16.useCallback)(_v0 => _v64(_v6, _v7, _v0, {
        purge: !0
      }), [_v6, _v7]),
      _v48 = (0, _v16.useCallback)(async () => {
        if (_v46) return;
        _v12();
        let _v0 = 1 === _v15.length && !_v49.DEFAULT_PROFILE_URI_REGEX.test(_v15[0].section.uri);
        if (_v0) {
          let _v0 = _v15[0],
            _v1 = _v0.items.map(_v0 => _v0.clipUri),
            _v2 = _v0.section.clipUris ?? [];
          if (0 === _v45.length && _v2.length === _v1.length) return void _v5();
        } else if (0 === _v45.length) return void _v5();
        _v20(!0);
        try {
          let _v0;
          if (_v0) {
            let _v0 = _v15[0],
              _v1 = _v0.section.uri,
              _v2 = _v59(_v1),
              _v3 = _v0.items.map(_v0 => _v0.clipUri);
            await _v11(`me/profile_sections/${_v2}`, void 0, _v49.HTTPMethods.PATCH, (0, _v29.decamelizeDeep)({
              clipUris: _v3
            })), _v0 = [_v1];
          } else {
            let _v0 = await _v10("me/profile_sections/videos/batch", void 0, _v49.HTTPMethods.PATCH, (0, _v29.decamelizeDeep)({
              operations: _v45
            }));
            _v0 = [...new Set((_v0?.affectedSections || []).map(_v0 => _v0.sectionUri))].filter(_v0 => "string" == typeof _v0);
          }
          _v8(), _v5(), Promise.all(_v0.map(_v0 => _v47(_v0))).then(() => _v9()).catch(_v0 => console.error("reorder post-save refresh failed", _v0));
        } catch (_v0) {
          if (_v0 && "object" == typeof _v0 && "json" in _v0) {
            let _v0 = _v0.json ? _v0.json() : null;
            _v0 && _v0.then(_v0 => _v8({
              content: _v0.error,
              status: "negative"
            }));
          }
        } finally {
          _v20(!1);
        }
      }, [_v46, _v5, _v8, _v45, _v47, _v10, _v11, _v15, _v9, _v12]);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v99.ModalHeader, {
        paddingBottom: "xs",
        px: (0, _v47.rem)(28),
        children: (0, _v6.jsxs)(_v33.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v6.jsx)(_v75.Header, {
            as: "h1",
            size: "md",
            children: _v51.default.ReorderContent
          }), (0, _v6.jsx)(_v309, {
            value: _v21,
            onChange: _v40,
            isDisabled: _v1,
            tooltipLabel: _v51.default.ReorderingNotAvailableWithSections
          })]
        })
      }), (0, _v6.jsx)(_v97.ModalBody, {
        px: (0, _v47.rem)(28),
        children: (0, _v6.jsxs)(_v31.Box, {
          as: "ul",
          ref: _v33,
          margin: 0,
          padding: (0, _v47.rem)(12),
          listStyleType: "none",
          maxHeight: `min(${(0, _v47.rem)(440)}, 55vh)`,
          overflowY: "auto",
          borderRadius: "lg",
          bg: "fill-component",
          onScroll: _v42,
          children: [_v25.map((_v0, _v1) => (0, _v6.jsx)(_v302, {
            group: _v0,
            sectionIndex: _v1,
            sectionsCount: _v25.length,
            groupOffset: _v30[_v1] || 0,
            totalItems: _v27,
            showSectionWrappers: _v26,
            saving: _v19,
            dragOrigin: _v31,
            dragTarget: _v32,
            setSectionGroups: _v16,
            onSectionVideoFetchingChange: _v43,
            onListDragOver: _v36,
            onDragStart: _v37,
            onTargetChange: _v38,
            onDrop: _v39,
            onDragEnd: _v34,
            untitledSectionLabel: _v51.default.UntitledSection
          }, _v0.section.uri)), _v3 ? (0, _v6.jsx)(_v33.Flex, {
            as: "li",
            alignItems: "center",
            justifyContent: "center",
            listStyleType: "none",
            paddingY: (0, _v47.rem)(12),
            children: (0, _v6.jsx)(_v190.Spinner, {
              size: "md"
            })
          }) : null]
        })
      }), (0, _v6.jsx)(_v98.ModalFooter, {
        paddingTop: 0,
        px: (0, _v47.rem)(28),
        children: (0, _v6.jsxs)(_v96.HStack, {
          spacing: "sm",
          children: [(0, _v6.jsx)(_v32.Button, {
            variant: "secondary",
            onClick: _v5,
            isDisabled: _v19,
            children: _v51.default.Cancel
          }), (0, _v6.jsx)(_v32.Button, {
            variant: "primary",
            onClick: _v48,
            isDisabled: _v46 || _v19,
            children: _v51.default.SaveNewOrder
          })]
        })
      })]
    });
  }
  function _v311({
    sections: _v0,
    sectionsActive: _v1,
    isShowing: _v2,
    hasNextSections: _v3,
    loadingNextSections: _v4,
    onLoadNextSections: _v5,
    onDismiss: _v6
  }) {
    return _v0.length ? (0, _v6.jsxs)(_v34.Modal, {
      isOpen: _v2,
      onClose: _v6,
      size: "lg",
      autoFocus: !1,
      children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
        maxW: (0, _v47.rem)(620),
        children: (0, _v6.jsx)(_v310, {
          sections: _v0,
          sectionsActive: _v1,
          hasNextSections: _v3,
          loadingNextSections: _v4,
          onLoadNextSections: _v5,
          onDismiss: _v6
        })
      })]
    }) : null;
  }
  let _v312 = (0, _v16.forwardRef)(function ({
    onCreate: _v0,
    onCancel: _v1
  }, _v2) {
    let [_v3, _v4] = (0, _v16.useState)(""),
      [_v5, _v6] = (0, _v16.useState)(!1),
      _v7 = (0, _v16.useRef)(null),
      {
        trackUserProfileSectionNameConfirmed: _v8
      } = (0, _v24.useProfileTracking)(),
      _v9 = (0, _v16.useMemo)(() => _v3.trim(), [_v3]),
      _v10 = _v9.length > 0 && !_v5,
      _v11 = (0, _v16.useCallback)(async () => {
        !_v9 || _v5 || ((_v8({
          userProfileSectionNameNew: _v9
        }), _v6(!0), await _v0(_v9)) ? _v1() : _v6(!1));
      }, [_v5, _v1, _v0, _v8, _v9]);
    return (0, _v16.useImperativeHandle)(_v2, () => ({
      submitOrFocus: async () => {
        !_v9 || _v5 ? _v7.current?.focus() : await _v11();
      }
    }), [_v5, _v11, _v9]), (0, _v6.jsxs)(_v31.Box, {
      as: "section",
      mx: "12px",
      mt: "8px",
      mb: "8px",
      children: [(0, _v6.jsx)(_v174.FormLabel, {
        htmlFor: "profile-v2-section-creator-input",
        mb: "xs",
        children: (0, _v6.jsx)(_v18.Text, {
          size: "sm",
          color: "text-secondary",
          children: _v51.default.SectionName
        })
      }), (0, _v6.jsxs)(_v33.Flex, {
        gap: "sm",
        align: "center",
        children: [(0, _v6.jsx)(_v175.Input, {
          ref: _v7,
          id: "profile-v2-section-creator-input",
          value: _v3,
          onChange: _v0 => _v4(_v0.target.value),
          onKeyDown: _v0 => {
            "Enter" === _v0.key && _v10 ? (_v0.preventDefault(), _v11()) : "Escape" !== _v0.key || _v5 || (_v0.preventDefault(), _v1());
          },
          maxLength: _v49.SECTION_NAME_MAX_LENGTH,
          placeholder: _v51.default.EnterSectionName,
          flex: "1",
          autoFocus: !0,
          disabled: _v5
        }), (0, _v6.jsxs)(_v153.ButtonGroup, {
          spacing: "sm",
          children: [(0, _v6.jsx)(_v32.Button, {
            variant: "primary",
            size: "md",
            isDisabled: !_v10,
            isLoading: _v5,
            onClick: _v11,
            children: _v51.default.Create
          }), (0, _v6.jsx)(_v32.Button, {
            variant: "secondary",
            size: "md",
            onClick: _v1,
            isDisabled: _v5,
            children: _v51.default.Cancel
          })]
        })]
      })]
    });
  });
  var _v313 = _v0.i(0);
  function _v314({
    sectionIndex: _v0,
    sectionUri: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3,
    onAddVideos: _v4,
    onDropClip: _v5
  }) {
    let [_v6, _v7] = (0, _v16.useState)(!1),
      [_v8, _v9] = (0, _v16.useState)(!1),
      {
        data: _v10
      } = (0, _v16.useContext)(_v89),
      _v11 = (0, _v16.useMemo)(() => _v65(_v10).length > 0, [_v10]),
      {
        trackUserProfileAddVideoClicked: _v12
      } = (0, _v24.useProfileTracking)();
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v31.Box, {
        as: "section",
        mt: "12px",
        mb: "8px",
        mx: "12px",
        height: (0, _v47.rem)(201),
        borderWidth: "1px",
        borderStyle: "dashed",
        borderColor: _v6 ? "input-stroke-hover" : "stroke",
        borderRadius: "md",
        bg: _v6 ? "fill-component-hover" : "input-fill-hover",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
        onDragOver: _v0 => {
          _v0.preventDefault(), _v7(!0);
        },
        onDragLeave: _v0 => {
          _v0.currentTarget.contains(_v0.relatedTarget) || _v7(!1);
        },
        onDrop: _v0 => {
          let _v1;
          _v0.preventDefault(), _v7(!1);
          let _v2 = _v0.dataTransfer.getData("Text");
          if (_v2) {
            try {
              _v1 = JSON.parse(_v2);
            } catch {
              return;
            }
            _v1.sectionIndex !== _v0 && _v1.sectionUri !== _v1 && _v5(_v1);
          }
        },
        children: (0, _v6.jsxs)(_v33.Flex, {
          direction: "column",
          align: "center",
          justify: "center",
          height: "100%",
          px: "20px",
          children: [(0, _v6.jsx)(_v18.Text, {
            color: "text-secondary",
            textAlign: "center",
            children: _v51.default.SectionIsEmpty
          }), (0, _v6.jsx)(_v18.Text, {
            color: "text-secondary",
            textAlign: "center",
            children: _v51.default.DragDropVideosHint
          }), (0, _v6.jsx)(_v32.Button, {
            variant: "secondary",
            size: "sm",
            mt: (0, _v47.rem)(20),
            leftIcon: (0, _v6.jsx)(_v87.PlusSquare, {}),
            onClick: () => {
              _v12(), _v9(!0);
            },
            isDisabled: !_v11,
            children: _v51.default.AddVideos
          })]
        })
      }), (0, _v6.jsx)(_v138, {
        isOpen: _v8,
        onClose: () => _v9(!1),
        onSubmit: _v4,
        shouldAutoAddVideos: _v2,
        toggleAutoAddVideos: _v3
      })]
    });
  }
  function _v315({
    section: _v0,
    index: _v1,
    editMode: _v2,
    loading: _v3,
    sectionClipsLength: _v4,
    shouldAutoAddVideos: _v5,
    toggleAutoAddVideos: _v6,
    addVideosToSection: _v7,
    onDrop: _v8,
    updatePublicVideosCount: _v9
  }) {
    return !_v2 || _v3 || 0 !== _v4 ? null : (0, _v6.jsx)(_v314, {
      sectionIndex: _v1,
      sectionUri: _v0.uri,
      shouldAutoAddVideos: _v5,
      toggleAutoAddVideos: _v6,
      onAddVideos: async _v0 => {
        await _v7(_v0.uri, 0, _v0.map(_v0 => _v0.uri), _v9);
      },
      onDropClip: _v0 => {
        _v8(_v0, {
          videoIndex: 0,
          sectionIndex: _v1,
          sectionUri: _v0.uri
        });
      }
    });
  }
  var _v316 = _v0.i(0),
    _v317 = _v0.i(0),
    _v318 = _v0.i(0),
    _v319 = _v0.i(0),
    _v320 = _v0.i(0),
    _v321 = _v0.i(0);
  let _v322 = {
    color: "text-primary"
  };
  function _v323({
    label: _v0,
    icon: _v1,
    isDisabled: _v2 = !1,
    onClick: _v3
  }) {
    return (0, _v6.jsx)(_v33.Flex, {
      as: "button",
      type: "button",
      "aria-label": _v0,
      "aria-disabled": _v2,
      disabled: _v2,
      boxSize: "sm",
      align: "center",
      justify: "center",
      bg: "transparent",
      border: "none",
      p: "0",
      cursor: _v2 ? "not-allowed" : "pointer",
      _hover: {
        bg: "transparent"
      },
      _active: {
        bg: "transparent"
      },
      _focus: {
        bg: "transparent",
        boxShadow: "none",
        outline: "none"
      },
      _disabled: {
        bg: "transparent",
        opacity: .4
      },
      onClick: _v3,
      children: _v1
    });
  }
  function _v324({
    title: _v0,
    disableUpwardMovement: _v1,
    disableDownwardMovement: _v2,
    onSubmit: _v3,
    moveSection: _v4,
    removeSection: _v5
  }) {
    let [_v6, _v7] = (0, _v16.useState)(_v0),
      [_v8, _v9] = (0, _v16.useState)(!1),
      _v10 = (0, _v16.useCallback)(_v0 => {
        let _v1 = _v0.trim();
        _v1 ? _v1.length <= _v49.SECTION_NAME_MAX_LENGTH && _v0 !== _v1 && (_v9(!0), _v7(_v1), _v3(_v1).then(() => _v9(!1)).catch(() => _v9(!1))) : (_v9(!0), _v5().then(() => _v9(!1)).catch(() => _v9(!1)));
      }, [_v3, _v5, _v0]),
      _v11 = (0, _v16.useMemo)(() => _v2 || _v8, [_v2, _v8]),
      _v12 = (0, _v16.useMemo)(() => _v1 || _v8, [_v1, _v8]),
      _v13 = (0, _v16.useCallback)(() => {
        _v8 || (_v9(!0), _v137(_v49.BPEvent.CLICK_TO_REMOVE_SECTION, 1), _v5().then(() => _v9(!1)).catch(() => _v9(!1)));
      }, [_v8, _v5]),
      _v14 = (0, _v16.useCallback)((_v0, _v1) => {
        !_v0 && _v4 && (_v137(_v49.BPEvent.CLICK_TO_ORDER_SECTION, 1, {
          value: 1 === _v1 ? "down" : "up"
        }), _v4(_v1));
      }, [_v4]);
    return (0, _v16.useEffect)(() => {
      _v7(_v0);
    }, [_v0]), (0, _v6.jsxs)(_v33.Flex, {
      as: "section",
      align: "center",
      gap: "md",
      mx: "12px",
      mt: "12px",
      mb: "4px",
      h: "md",
      children: [(0, _v6.jsxs)(_v316.Editable, {
        flex: "1",
        variant: "heading-sm",
        value: _v6,
        onChange: _v7,
        onSubmit: _v10,
        onCancel: () => _v7(_v0),
        placeholder: _v51.default.EnterSectionName,
        startWithEditView: !_v0,
        isPreviewFocusable: !_v8,
        submitOnBlur: !0,
        children: [(0, _v6.jsx)(_v318.EditablePreview, {
          ..._v322,
          width: "100%",
          cursor: "pointer"
        }), (0, _v6.jsx)(_v317.EditableInput, {
          ..._v322,
          maxLength: _v49.SECTION_NAME_MAX_LENGTH,
          h: "md",
          px: "md",
          borderRadius: "md"
        })]
      }), (0, _v6.jsxs)(_v33.Flex, {
        gap: "md",
        align: "center",
        children: [(0, _v6.jsxs)(_v33.Flex, {
          align: "center",
          children: [(0, _v6.jsx)(_v86.Tooltip, {
            label: _v51.default.MoveUp,
            isDisabled: _v12,
            shouldWrapChildren: !0,
            children: (0, _v6.jsx)(_v323, {
              label: _v51.default.MoveUp,
              icon: (0, _v6.jsx)(_v320.ChevronUpSmall, {
                boxSize: (0, _v47.rem)(20)
              }),
              isDisabled: _v12,
              onClick: () => _v14(_v12, -1)
            })
          }), (0, _v6.jsx)(_v86.Tooltip, {
            label: _v51.default.MoveDown,
            isDisabled: _v11,
            shouldWrapChildren: !0,
            children: (0, _v6.jsx)(_v323, {
              label: _v51.default.MoveDown,
              icon: (0, _v6.jsx)(_v319.ChevronDownSmall, {
                boxSize: (0, _v47.rem)(20)
              }),
              isDisabled: _v11,
              onClick: () => _v14(_v11, 1)
            })
          })]
        }), (0, _v6.jsx)(_v86.Tooltip, {
          label: _v51.default.Remove,
          shouldWrapChildren: !0,
          children: (0, _v6.jsx)(_v323, {
            label: _v51.default.Remove,
            icon: (0, _v6.jsx)(_v321.TrashBin, {
              boxSize: (0, _v47.rem)(20)
            }),
            isDisabled: _v8,
            onClick: _v13
          })
        })]
      })]
    });
  }
  function _v325(_v0) {
    let {
      editMode: _v1
    } = (0, _v16.useContext)(_v50.default);
    return _v1 ? (0, _v6.jsx)(_v324, {
      ..._v0
    }) : (0, _v6.jsx)(_v33.Flex, {
      as: "section",
      align: "center",
      mx: "12px",
      mb: "12px",
      pt: "12px",
      pb: "xs",
      children: (0, _v6.jsx)(_v18.Text, {
        ..._v322,
        variant: "heading-xs",
        children: _v0.title
      })
    });
  }
  var _v326 = _v0.i(0);
  let _v327 = _v0 => (0, _v6.jsx)(_v203.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v6.jsx)("path", {
      d: "M21.71 2.29a.999.999 0 0 0-1.42 0l-5.79 5.8V6.5a1 1 0 1 0-2 0v4c.002.13.029.26.08.38a1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 1 0 0-2h-1.59l5.8-5.79a.998.998 0 0 0 0-1.42ZM10.88 12.58a1.001 1.001 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5.79-5.8v1.59a1 1 0 1 0 2 0v-4a.998.998 0 0 0-.08-.38 1 1 0 0 0-.54-.54Z",
      fill: "currentColor"
    })
  });
  var _v328 = _v0.i(0),
    _v329 = _v0.i(0),
    _v330 = _v0.i(0),
    _v331 = _v0.i(0),
    _v332 = _v0.i(0);
  let _v333 = (0, _v16.forwardRef)((_v0, _v1) => (0, _v6.jsx)("svg", {
    viewBox: "0 0 14 22",
    ref: _v1,
    ..._v0,
    children: (0, _v6.jsxs)("g", {
      transform: "translate(1 1)",
      fill: _v38.bokehTheme.colors.white,
      stroke: _v38.bokehTheme.colors.gray["800"],
      fillRule: "evenodd",
      strokeOpacity: "0.3",
      children: [(0, _v6.jsx)("circle", {
        cx: "10",
        cy: "2",
        r: "2.5"
      }), (0, _v6.jsx)("circle", {
        cx: "10",
        cy: "10",
        r: "2.5"
      }), (0, _v6.jsx)("circle", {
        cx: "10",
        cy: "18",
        r: "2.5"
      }), (0, _v6.jsx)("circle", {
        cx: "2",
        cy: "2",
        r: "2.5"
      }), (0, _v6.jsx)("circle", {
        cx: "2",
        cy: "18",
        r: "2.5"
      }), (0, _v6.jsx)("circle", {
        cx: "2",
        cy: "10",
        r: "2.5"
      })]
    })
  }));
  function _v334({
    title: _v0,
    buttonText: _v1,
    loading: _v2 = !1,
    onSubmit: _v3,
    onDismiss: _v4
  }) {
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v163.ModalCloseButton, {}), (0, _v6.jsx)(_v99.ModalHeader, {
        children: _v0
      }), (0, _v6.jsx)(_v98.ModalFooter, {
        children: (0, _v6.jsxs)(_v96.HStack, {
          spacing: "sm",
          children: [(0, _v6.jsx)(_v32.Button, {
            variant: "secondary",
            onClick: _v4,
            children: _v51.default.Cancel
          }), (0, _v6.jsx)(_v32.Button, {
            variant: "destructive",
            isDisabled: _v2,
            isLoading: _v2,
            onClick: _v3,
            children: _v1
          })]
        })
      })]
    });
  }
  let _v335 = {
      width: 118,
      height: 159
    },
    _v336 = {
      width: 88,
      height: 119
    };
  function _v337({
    badgeType: _v0,
    isExpanded: _v1,
    ..._v2
  }) {
    let _v3 = (0, _v16.useMemo)(() => {
        let _v0 = null;
        return /^staffpick/.test(_v0) ? (_v0 === _v49.StaffPicks.BEST_OF_THE_MONTH ? _v0 = {
          icon: "https://f.vimeocdn.com/p/images/badges/13x.svg",
          alt: "Vimeo Staff Pick: Best of the Month Badge"
        } : _v0 === _v49.StaffPicks.PREMIERE ? _v0 = {
          icon: "https://f.vimeocdn.com/p/images/badges/15x.svg",
          alt: "Vimeo Staff Pick: Premiere Badge"
        } : _v0 === _v49.StaffPicks.BEST_OF_THE_YEAR && (_v0 = {
          icon: "https://f.vimeocdn.com/p/images/badges/14x.svg",
          alt: "Vimeo Staff Pick: Best of the Year Badge"
        }), {
          normal: !0,
          iconData: _v0
        }) : {
          normal: !1,
          iconData: _v0
        };
      }, [_v0]),
      _v4 = _v1 ? _v335 : _v336;
    return _v3.normal ? (0, _v6.jsx)(_v338, {
      ..._v2,
      children: _v3.iconData ? (0, _v6.jsx)("img", {
        src: _v3.iconData.icon,
        width: _v4.width,
        height: _v4.height,
        alt: _v3.iconData.alt
      }) : (0, _v6.jsx)(_v339, {
        $size: _v1 ? 100 : 75,
        src: "https://f.vimeocdn.com/p/images/badges/1.svg",
        alt: "Vimeo Staff Pick Badge"
      })
    }) : null;
  }
  let _v338 = _v28.default.article.withConfig({
      displayName: "StaffpickBadge__StaffPickContainer",
      componentId: "sc-e20526b3-0"
    })`
  position: absolute;
  transition: all 230ms ease-in-out;
  top: ${(0, _v27.rem)(-16)};
  left: ${(0, _v27.rem)(-8)};
`,
    _v339 = _v28.default.img.withConfig({
      displayName: "StaffpickBadge__NormalStaffPickImg",
      componentId: "sc-e20526b3-1"
    })`
  margin: ${(0, _v27.rem)(10)} ${(0, _v27.rem)(10)} 0 ${(0, _v27.rem)(10)};
  width: ${({
      $size: _v0
    }) => (0, _v27.rem)(_v0)};
  height: ${({
      $size: _v0
    }) => (0, _v27.rem)(_v0)};
`,
    _v340 = {
      maxWidth: "none"
    };
  function _v341({
    video: _v0,
    className: _v1,
    style: _v2,
    setExpanded: _v3,
    removeVideo: _v4,
    newlyAdded: _v5,
    loading: _v6,
    videoIndex: _v7,
    aspectRatio: _v8,
    viewType: _v9,
    hideUploadDate: _v10
  }) {
    let [_v11, _v12] = (0, _v16.useState)(!1),
      _v13 = "2" === _v0.columnWidth,
      [_v14, _v15] = (0, _v16.useState)(!1),
      {
        editMode: _v16,
        userId: _v17
      } = (0, _v16.useContext)(_v50.default),
      _v18 = (0, _v106.useViewer)(),
      {
        settings: _v19
      } = (0, _v39.useOrionSettings)(),
      _v20 = _v19.profile_likes_activity,
      _v21 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        trackUserProfilePageThumbnailClicked: _v22,
        trackUserProfileVideoThumbnailResized: _v23,
        trackUserProfileVideoLikeClicked: _v24
      } = (0, _v24.useProfileTracking)(),
      {
        canLike: _v25,
        liked: _v26,
        toggleLike: _v27
      } = function ({
        clip: _v0,
        viewerId: _v1,
        onError: _v2
      }) {
        let [_v3, {
            error: _v4
          }] = (0, _v332.usePutUserLike)(),
          [_v5, {
            error: _v6
          }] = (0, _v332.useDeleteUserLike)(),
          [_v7, _v8] = (0, _v16.useState)(null),
          _v9 = (0, _v16.useRef)(null),
          _v10 = (0, _v16.useRef)(null),
          _v11 = _v0.metadata?.interactions?.like,
          _v12 = (0, _v16.useMemo)(() => _v59(_v0.uri), [_v0.uri]),
          {
            auth: _v13,
            password: _v14
          } = (0, _v16.useMemo)(() => {
            let _v0 = new URLSearchParams(_v11?.uri?.split("?")[1]);
            return {
              auth: _v0.get("auth") ?? void 0,
              password: _v0.get("password") ?? void 0
            };
          }, [_v11?.uri]),
          _v15 = !!_v11 && _v12 >= 0,
          _v16 = "like" === _v7 && !!_v4 || "unlike" === _v7 && !!_v6,
          _v17 = _v7 && !_v16 ? "like" === _v7 : !!_v11?.added,
          _v18 = (0, _v16.useEffectEvent)(() => {
            _v2();
          });
        (0, _v16.useEffect)(() => {
          _v4 && _v4 !== _v9.current && (_v9.current = _v4, _v18()), _v6 && _v6 !== _v10.current && (_v10.current = _v6, _v18());
        }, [_v4, _v6]);
        let _v19 = (0, _v16.useCallback)(async () => {
          if (!_v15) return;
          let _v0 = _v17 ? "unlike" : "like";
          _v8(_v0);
          let _v1 = "like" === _v0 ? _v3 : _v5;
          await _v1({
            where: {
              userId: _v1,
              videoId: _v12
            },
            query: {
              ...(null != _v13 && {
                auth: _v13
              }),
              ...(null != _v14 && {
                password: _v14
              })
            }
          });
        }, [_v15, _v17, _v3, _v5, _v1, _v12, _v13, _v14]);
        return {
          canLike: _v15,
          liked: _v17,
          toggleLike: _v19
        };
      }({
        clip: _v0.clip,
        viewerId: _v18?.user?.id ?? 0,
        onError: () => _v21({
          content: _v51.default.LikeError,
          status: "negative"
        })
      }),
      _v28 = (0, _v16.useMemo)(() => _v59(_v0.clip.uri), [_v0.clip.uri]);
    _v135(_v11 ? _v0 => _v61(_v0, () => _v12(!1)) : void 0, [_v11]);
    let _v29 = (0, _v16.useMemo)(() => {
        if ("masonry" === _v9) {
          let {
            width: _v0,
            height: _v1
          } = _v0.clip;
          return _v266(_v0.clip, _v1 / _v0);
        }
        return _v266(_v0.clip);
      }, [_v0.clip, _v9]),
      _v30 = (0, _v16.useMemo)(() => _v29[0], [_v29]),
      _v31 = (0, _v16.useMemo)(() => _v29.length > 1 ? _v29.slice(1).map((_v0, _v1) => `${_v0} ${_v1 + 2}x`).join(", ") : "", [_v29]),
      _v32 = (0, _v16.useMemo)(() => _v59(_v0.clip.user.uri) === _v17, [_v17, _v0.clip.user.uri]),
      _v33 = (0, _v16.useMemo)(() => {
        let _v0 = _v0.clip.user.name;
        if (_v10) return _v32 ? "" : _v0;
        let _v1 = _v83(_v0.clip.createdTime);
        return _v32 ? _v1 : `${_v1} \xb7 ${_v0}`;
      }, [_v10, _v32, _v0.clip.user.name, _v0.clip.createdTime]),
      _v34 = (0, _v16.useMemo)(() => {
        let _v0 = _v0.clip.live && _v0.clip.live?.status !== _v49.LIVE_STATUS.DONE ? _v0.clip.live?.recurringEvent?.link : _v0.clip.link;
        return _v16 && _v32 && !_v200 ? `/manage/${_v28}/general` : _v0;
      }, [_v32, _v28, _v16, _v0]),
      _v35 = (0, _v16.useCallback)(() => {
        _v23({
          userProfileResizeAction: _v13 ? "shrink" : "expand"
        }), _v15(!0), _v3 && _v3(!_v13).then(() => _v15(!1)).catch(() => _v15(!1));
      }, [_v13, _v3, _v23]),
      _v36 = (0, _v16.useMemo)(() => _v0.clip.live?.status === _v49.LIVE_STATUS.STREAMING, [_v0.clip.live?.status]),
      _v37 = (0, _v16.useMemo)(() => {
        let _v0 = "live" === _v0.clip.type,
          _v1 = _v0.clip.live?.status === _v49.LIVE_STATUS.DONE,
          _v2 = _v0.clip.duration > 0;
        return _v0 && (!_v1 && !_v2 || _v36);
      }, [_v0.clip.type, _v0.clip.live, _v0.clip.duration, _v36]),
      _v38 = (0, _v16.useMemo)(() => !!_v37 && (!!_v36 || !!_v0.clip.live?.scheduledStartTime && new Date(_v0.clip.live.scheduledStartTime) < new Date()), [_v37, _v36, _v0.clip.live]),
      _v39 = (0, _v16.useMemo)(() => _v37 ? _v38 ? _v51.default.Live : _v51.default.Upcoming : _v82(_v0.clip.duration), [_v37, _v38, _v0.clip.duration]),
      _v40 = _v37 && _v38 ? "mature" : void 0,
      _v41 = !_v200 && !!_v0.clip.configUrl && !_v37;
    (0, _v16.useEffect)(() => {
      _v6 || _v12(!1);
    }, [_v6]);
    let _v42 = (0, _v16.useMemo)(() => {
      if (_v0.clip.badge?.type) return "vod" === _v0.clip.badge.type ? (0, _v6.jsx)("img", {
        src: "https://i.vimeocdn.com/video_badge/vod_60x66",
        srcSet: "https://i.vimeocdn.com/video_badge/vod_300x328 2x",
        alt: `VOD - ${_v0.clip.name}`,
        width: 16,
        height: 16,
        style: {
          position: "relative",
          top: -8,
          left: -5
        }
      }) : (0, _v6.jsx)(_v337, {
        badgeType: _v0.clip.badge.type,
        isExpanded: _v13
      });
    }, [_v0.clip.badge, _v0.clip.name, _v13]);
    return (0, _v6.jsxs)(_v31.Box, {
      position: "relative",
      className: _v1,
      style: _v2,
      children: [_v5 && (0, _v6.jsx)(_v31.Box, {
        position: "absolute",
        inset: "0",
        bg: "vimeoBlue.100",
        opacity: .5,
        borderRadius: "xs",
        zIndex: 1
      }), (0, _v6.jsxs)(_v31.Box, {
        position: "relative",
        children: [(0, _v6.jsx)(_v331.VideoCard, {
          title: _v0.clip.name,
          subtitle: _v33,
          titleStyles: _v340,
          href: _v34,
          thumbnailSrc: _v30,
          thumbnailSrcSet: _v31,
          avatarSrc: "",
          showAvatar: !1,
          tagText: _v39,
          tagTextVariant: _v40,
          clipId: _v28,
          configUrl: _v0.clip.configUrl,
          quality: "540p",
          objectFit: "contain",
          aspectRatio: _v8,
          hasPlayOnHover: _v41,
          shouldUseNextLink: !1,
          pageName: "profile",
          onClick: () => {
            _v22({
              userProfilePageUserId: String(_v17),
              clipId: String(_v28),
              userProfilePageThumbnailPosition: _v7 + 1,
              userProfilePageThumbnailSection: "masonry" === _v9 ? "masonry" : "grid"
            });
          },
          hoverActions: _v16 && !_v200 ? (0, _v6.jsxs)(_v33.Flex, {
            position: "absolute",
            top: 3,
            left: 3,
            gap: "sm",
            zIndex: "docked",
            onClick: _v0 => {
              _v0.stopPropagation(), _v0.preventDefault();
            },
            children: [_v3 && !_v6 && (0, _v6.jsx)(_v330.ContentCard.HoverAction, {
              children: (0, _v6.jsx)(_v86.Tooltip, {
                label: _v13 ? _v51.default.Shrink : _v51.default.Expand,
                isDisabled: _v0.loading || _v14,
                children: (0, _v6.jsx)(_v44.IconButton, {
                  "aria-label": _v13 ? _v51.default.Shrink : _v51.default.Expand,
                  icon: _v13 ? (0, _v6.jsx)(_v327, {}) : (0, _v6.jsx)(_v326.ExpandAlt, {}),
                  variant: "blur",
                  size: "sm",
                  onClick: _v35,
                  isLoading: _v0.loading || _v14,
                  isDisabled: _v0.loading || _v14
                })
              })
            }), _v4 && (0, _v6.jsx)(_v330.ContentCard.HoverAction, {
              children: (0, _v6.jsx)(_v86.Tooltip, {
                label: _v51.default.Remove,
                children: (0, _v6.jsx)(_v44.IconButton, {
                  "aria-label": _v51.default.Remove,
                  icon: (0, _v6.jsx)(_v321.TrashBin, {}),
                  variant: "blur",
                  size: "sm",
                  onClick: () => _v12(!0),
                  isLoading: _v6,
                  isDisabled: _v6
                })
              })
            })]
          }) : _v20 && !_v16 && !_v200 && _v25 ? (0, _v6.jsx)(_v33.Flex, {
            position: "absolute",
            top: (0, _v47.rem)(8),
            right: (0, _v47.rem)(8),
            gap: "sm",
            zIndex: "docked",
            onClick: _v0 => {
              _v0.stopPropagation(), _v0.preventDefault();
            },
            children: (0, _v6.jsx)(_v330.ContentCard.HoverAction, {
              children: (0, _v6.jsx)(_v86.Tooltip, {
                label: _v26 ? _v51.default.Unlike : _v51.default.Like,
                children: (0, _v6.jsx)(_v44.IconButton, {
                  "aria-label": _v26 ? _v51.default.Unlike : _v51.default.Like,
                  icon: _v26 ? (0, _v6.jsx)(_v329.HeartFilled, {
                    color: "#FB1409"
                  }) : (0, _v6.jsx)(_v328.Heart, {}),
                  variant: "blur",
                  size: "sm",
                  onClick: () => {
                    _v24({
                      userProfilePageUserId: String(_v17),
                      clipId: String(_v28),
                      userProfilePageThumbnailPosition: _v7 + 1,
                      userProfilePageThumbnailSection: "masonry" === _v9 ? "masonry" : "grid",
                      userProfileVideoLikeAction: _v26 ? "unlike" : "like"
                    }), _v27();
                  }
                })
              })
            })
          }) : void 0,
          topLeftDecoration: _v42
        }), _v16 && !_v200 && !_v6 && (0, _v6.jsx)(_v31.Box, {
          className: "drag-handle",
          position: "absolute",
          top: 6,
          right: 6,
          zIndex: 2,
          cursor: "grab",
          sx: {
            svg: {
              overflow: "visible"
            }
          },
          children: (0, _v6.jsx)(_v333, {
            height: 20,
            width: 12
          })
        })]
      }), _v16 && _v4 && (0, _v6.jsxs)(_v34.Modal, {
        onClose: () => _v12(!1),
        isOpen: _v11,
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v35.ModalContent, {
          width: "662px",
          maxWidth: "90vw",
          children: (0, _v6.jsx)(_v334, {
            title: _v51.default.RemoveVideo,
            buttonText: _v51.default.Remove,
            loading: _v6,
            onSubmit: _v4,
            onDismiss: () => _v12(!1)
          })
        })]
      })]
    });
  }
  function _v342() {
    return (0, _v6.jsx)(_v31.Box, {
      padding: "0.5rem",
      borderWidth: ".125rem",
      borderColor: "transparent",
      children: (0, _v6.jsx)(_v121.Skeleton, {
        aspectRatio: "16 / 9",
        height: "auto"
      })
    });
  }
  function _v343({
    count: _v0,
    viewType: _v1
  }) {
    return (0, _v6.jsx)(_v31.Box, {
      as: "section",
      display: "grid",
      gridTemplateColumns: {
        base: "1fr",
        md: `repeat(${"grid" === _v1 ? 3 : 2}, 1fr)`
      },
      children: Array(_v0).fill(null).map((_v0, _v1) => (0, _v6.jsx)(_v342, {}, _v1))
    });
  }
  function _v344({
    section: _v0,
    index: _v1,
    disableDown: _v2,
    disableUp: _v3,
    onDragStart: _v4,
    removeDragPortal: _v5,
    setDragOver: _v6,
    draggedOver: _v7,
    updatePublicVideosCount: _v8,
    setSectionHasNext: _v9,
    shouldAutoAddVideos: _v10,
    toggleAutoAddVideos: _v11,
    hideUploadDate: _v12
  }) {
    let {
        editMode: _v13
      } = (0, _v16.useContext)(_v50.default),
      [_v14, _v15] = (0, _v16.useState)(null),
      [_v16, _v17] = (0, _v16.useState)(!1),
      {
        addVideosToSection: _v18,
        data: _v19,
        error: _v20,
        isValidating: _v21,
        moveSection: _v22,
        onDrop: _v23,
        removeSection: _v24,
        removeVideoFromSection: _v25,
        setSize: _v26,
        toggleVideoData: _v27,
        updateSectionTitle: _v28,
        videoLoading: _v29
      } = _v95(_v0.uri, _v0.videos.data, _v0.videos.total),
      _v30 = (0, _v16.useMemo)(() => _v19 ? _v65(_v19) : [], [_v19]),
      _v31 = (0, _v16.useMemo)(() => _v30.length > 0 && _v66(_v19), [_v19, _v30]),
      _v32 = (0, _v16.useRef)(!1);
    _v19?.[0] && (_v32.current = !0);
    let _v33 = !_v32.current,
      _v34 = (0, _v16.useMemo)(() => _v19 ? !_v19[0] && _v21 && !_v20 : !_v20, [_v19, _v20, _v21]),
      _v35 = (0, _v16.useMemo)(() => _v13 && !_v21 && !_v29, [_v13, _v21, _v29]),
      _v36 = (0, _v233.default)(_v0 => {
        (0, _v313.default)(_v7, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v6({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300),
      _v37 = (0, _v16.useCallback)(() => {
        _v17(!0), _v26(_v19 ? _v19.length + 1 : 1).catch(() => void 0);
      }, [_v26, _v19]);
    return (0, _v16.useEffect)(() => {
      _v9(_v0.uri, !!_v31);
    }, [_v31, _v0.uri, _v9]), (0, _v16.useEffect)(() => {
      _v21 || _v17(!1);
    }, [_v21]), (0, _v16.useEffect)(() => () => _v9(_v0.uri, !1), [_v0.uri, _v9]), (0, _v6.jsxs)(_v345, {
      children: [null !== _v0.title || 0 === _v30.length ? (0, _v6.jsx)(_v325, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v28(_v0.uri, _v0),
        moveSection: _v0 => _v22(_v1, _v0),
        removeSection: () => _v24(_v1)
      }) : null, (0, _v6.jsx)(_v315, {
        section: _v0,
        index: _v1,
        editMode: _v13,
        loading: _v34,
        sectionClipsLength: _v30.length,
        shouldAutoAddVideos: _v10,
        toggleAutoAddVideos: _v11,
        addVideosToSection: _v18,
        onDrop: _v23,
        updatePublicVideosCount: _v8
      }), (0, _v6.jsxs)(_v346, {
        children: [_v30.map((_v0, _v1) => {
          let _v2 = null != _v0 && "2" === _v0.columnWidth;
          return (0, _v6.jsx)(_v347, {
            isExpanded: _v2,
            isDraggedOver: _v7?.sectionIndex === _v1 && _v7?.videoIndex === _v1,
            draggable: _v35,
            dragStarted: null != _v7,
            isBeingDragged: _v14 === _v1,
            onDragStart: _v0 => {
              _v35 && (_v15(_v1), _v4(_v0, {
                video: _v0,
                videoIndex: _v1,
                sectionIndex: _v1,
                sectionUri: _v0.uri
              }));
            },
            onDragOver: _v0 => {
              _v35 && (_v0.preventDefault(), (null != _v7 || _v14 !== _v1) && _v36(_v1));
            },
            onDrop: _v0 => {
              if (_v35) {
                _v0.preventDefault();
                let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                _v0.sectionIndex === _v1 && (_v6(null), _v5(), _v15(null)), _v23(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                });
              }
            },
            onDragEnd: _v0 => {
              _v0.preventDefault(), _v15(null), _v5(), _v13 && _v7 && _v6(null);
            },
            children: (0, _v6.jsx)(_v341, {
              video: _v0,
              videoIndex: _v1,
              viewType: "grid",
              removeVideo: () => _v25(_v0.uri, _v0.clip.uri, _v8),
              setExpanded: _v0 => _v27(_v0, _v0 ? "2" : "1"),
              loading: _v29 || _v21,
              hideUploadDate: _v12
            })
          }, _v0.clip.uri);
        }), _v33 && !_v20 ? (0, _v6.jsx)(_v343, {
          count: 6,
          viewType: "grid"
        }) : _v16 ? (0, _v6.jsx)(_v343, {
          count: 2,
          viewType: "grid"
        }) : null, _v31 && !_v16 ? (0, _v6.jsx)(_v288, {
          onClick: _v37
        }) : null]
      })]
    });
  }
  let _v345 = _v28.default.section.withConfig({
      displayName: "SectionGrid__SectionWrapper",
      componentId: "sc-f8850b3e-0"
    })`
  margin-bottom: ${(0, _v27.rem)(8)};
`,
    _v346 = _v28.default.section.withConfig({
      displayName: "SectionGrid__Grid",
      componentId: "sc-f8850b3e-1"
    })`
  width: 100%;
  position: relative;
`,
    _v347 = _v28.default.article.withConfig({
      displayName: "SectionGrid__GridItem",
      componentId: "sc-f8850b3e-2"
    })`
  transition:
    width 0.5s ease-in,
    transform 250ms linear;
  position: relative;
  vertical-align: top;

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v28.css`
          & > * {
            opacity: 0;
          }
          border-radius: ${(0, _v27.rem)(8)};
          background-color: var(--vimeo-colors-fill-skeleton);
          [data-theme='dark'] & {
            background-color: var(--vimeo-colors-popover);
          }
        ` : _v1 ? _v28.css`
            transform: translateX(${(0, _v27.rem)(10)});
            &:before {
              content: '';
              height: 100%;
              width: ${(0, _v27.rem)(4)};
              left: -${(0, _v27.rem)(14)};
              position: absolute;
              background-color: ${(0, _v27.rgba)(_v38.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v28.css`
      user-select: none;
    `}

  ${({
      isExpanded: _v0
    }) => _v0 && _v28.css`
      width: 100%;
    `}
  ${_v43.media.sm`
    display: inline-block;
    width: ${({
      isExpanded: _v0
    }) => _v0 ? "100%" : "33.333%"};
  `}
`;
  function _v348({
    section: _v0,
    index: _v1,
    disableDown: _v2,
    disableUp: _v3,
    onDragStart: _v4,
    draggedOver: _v5,
    removeDragPortal: _v6,
    setDragOver: _v7,
    updatePublicVideosCount: _v8,
    setSectionHasNext: _v9,
    shouldAutoAddVideos: _v10,
    toggleAutoAddVideos: _v11,
    hideUploadDate: _v12
  }) {
    let {
        editMode: _v13
      } = (0, _v16.useContext)(_v50.default),
      [_v14, _v15] = (0, _v16.useState)(null),
      [_v16, _v17] = (0, _v16.useState)(!1),
      [_v18, _v19] = (0, _v16.useState)(!1),
      {
        addVideosToSection: _v20,
        data: _v21,
        error: _v22,
        isValidating: _v23,
        moveSection: _v24,
        onDrop: _v25,
        removeSection: _v26,
        removeVideoFromSection: _v27,
        setSize: _v28,
        toggleVideoData: _v29,
        updateSectionTitle: _v30,
        videoLoading: _v31
      } = _v95(_v0.uri, _v0.videos.data, _v0.videos.total),
      {
        width: _v32
      } = (0, _v42.useWindowSize)(),
      _v33 = (0, _v16.useRef)(null),
      [_v34, _v35] = (0, _v16.useState)(0);
    (0, _v16.useLayoutEffect)(() => {
      let _v0 = _v33.current;
      if (!_v0 || (_v35(_v0.getBoundingClientRect().width), "u" < typeof ResizeObserver)) return;
      let _v1 = new ResizeObserver(_v0 => {
        let _v1 = _v0[0]?.contentRect.width;
        "number" == typeof _v1 && _v35(_v1);
      });
      return _v1.observe(_v0), () => _v1.disconnect();
    }, []);
    let _v36 = (0, _v16.useMemo)(() => _v21 ? _v65(_v21) : [], [_v21]),
      _v37 = _v36.map(_v0 => {
        let {
          videoWidth: _v1,
          updatedHeight: _v2
        } = ((_v0, _v1, _v2) => {
          let _v3 = _v1 >= _v43.BreakPoints.sm && "2" !== _v0.columnWidth ? _v2 / 2 : _v2,
            {
              width: _v4,
              height: _v5
            } = _v0.clip;
          return {
            videoWidth: _v3,
            updatedHeight: (_v3 - 20) / _v4 * _v5
          };
        })(_v0, _v32, _v34);
        return {
          videoWidth: _v1,
          updatedHeight: _v2 += 68
        };
      }),
      {
        height: _v38,
        bounds: _v39
      } = ((_v0, _v1, _v2) => {
        let _v3 = [];
        if (_v2 >= _v43.BreakPoints.sm) {
          let _v0 = 0,
            _v1 = 0;
          return _v0.forEach((_v0, _v1) => {
            let _v2 = _v1[_v1];
            if ("2" === _v0.columnWidth) {
              let _v0 = Math.max(_v0, _v1);
              _v3.push({
                top: _v0,
                isFirst: !0
              }), _v0 = _v0 + _v2.updatedHeight, _v1 = _v0 + _v2.updatedHeight;
            } else _v0 <= _v1 ? (_v3.push({
              top: _v0,
              isFirst: !0
            }), _v0 += _v2.updatedHeight) : (_v3.push({
              top: _v1,
              isFirst: !1
            }), _v1 += _v2.updatedHeight);
          }), {
            height: Math.max(_v0, _v1),
            bounds: _v3
          };
        }
        {
          let _v0 = 0;
          return _v1.forEach(_v0 => {
            _v3.push({
              isFirst: !0,
              top: _v0
            }), _v0 += _v0.updatedHeight;
          }), {
            height: _v0,
            bounds: _v3
          };
        }
      })(_v36, _v37, _v32),
      _v40 = (0, _v16.useMemo)(() => _v36.length > 0 && _v66(_v21), [_v21, _v36]),
      _v41 = (0, _v16.useMemo)(() => _v13 && !_v23 && !_v31, [_v13, _v23, _v31]),
      _v42 = (0, _v16.useMemo)(() => null === _v0.title && _v36.length > 0, [_v0.title, _v36.length]),
      _v43 = (0, _v16.useRef)(!1);
    _v21?.[0] && (_v43.current = !0);
    let _v44 = !_v43.current,
      _v45 = (0, _v16.useMemo)(() => _v21 ? !_v21[0] && _v23 && !_v22 : !_v22, [_v21, _v22, _v23]),
      _v46 = (0, _v16.useCallback)(() => {
        _v17(!0), _v28?.(_v21 ? _v21.length + 1 : 0).catch(() => void 0);
      }, [_v28, _v21]),
      _v47 = (0, _v233.default)(_v0 => {
        (0, _v313.default)(_v5, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v7({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300);
    return (0, _v16.useEffect)(() => {
      _v9(_v0.uri, !!_v40);
    }, [_v40, _v0.uri, _v9]), (0, _v16.useEffect)(() => () => _v9(_v0.uri, !1), [_v0.uri, _v9]), (0, _v16.useEffect)(() => {
      !_v18 && _v36.length > 0 && setTimeout(() => _v19(!0), 100);
    }, [_v18, _v36]), (0, _v16.useEffect)(() => {
      _v23 || _v17(!1);
    }, [_v23]), (0, _v6.jsxs)(_v349, {
      hasNext: !!_v40,
      children: [_v42 ? null : (0, _v6.jsx)(_v325, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v30(_v0.uri, _v0),
        moveSection: _v0 => _v24(_v1, _v0),
        removeSection: () => _v26(_v1)
      }), (0, _v6.jsx)(_v315, {
        section: _v0,
        index: _v1,
        editMode: _v13,
        loading: _v45,
        sectionClipsLength: _v36.length,
        shouldAutoAddVideos: _v10,
        toggleAutoAddVideos: _v11,
        addVideosToSection: _v20,
        onDrop: _v25,
        updatePublicVideosCount: _v8
      }), (0, _v6.jsx)(_v350, {
        ref: _v33,
        clipsRendered: _v18,
        height: _v38,
        children: _v36.map((_v0, _v1) => {
          let _v2 = _v39[_v1],
            {
              videoWidth: _v3
            } = _v37[_v1],
            {
              width: _v4,
              height: _v5
            } = _v0.clip,
            _v6 = `${_v4} / ${_v5}`;
          return (0, _v6.jsx)(_v351, {
            isFirst: _v2.isFirst,
            videoWidth: _v3,
            top: _v2.top,
            draggable: _v41,
            dragStarted: null != _v5,
            isDraggedOver: _v5?.sectionIndex === _v1 && _v5?.videoIndex === _v1,
            isBeingDragged: _v14 === _v1,
            clipsRendered: _v18,
            onDragStart: _v0 => {
              _v41 && (_v15(_v1), _v4(_v0, {
                video: _v0,
                videoIndex: _v1,
                sectionIndex: _v1,
                sectionUri: _v0.uri
              }));
            },
            onDragOver: _v0 => {
              _v41 && (_v0.preventDefault(), (null != _v5 || _v14 !== _v1) && _v47(_v1));
            },
            onDrop: _v0 => {
              if (_v41) {
                _v0.preventDefault();
                let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                _v0.sectionIndex === _v1 && (_v7(null), _v6(), _v15(null)), _v25(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                });
              }
            },
            onDragEnd: _v0 => {
              _v0.preventDefault(), _v15(null), _v6(), _v13 && _v5 && _v7(null);
            },
            children: (0, _v6.jsx)(_v341, {
              video: _v0,
              videoIndex: _v1,
              aspectRatio: _v6,
              viewType: "masonry",
              removeVideo: () => _v27(_v0.uri, _v0.clip.uri, _v8),
              setExpanded: _v0 => _v29(_v0, _v0 ? "2" : "1"),
              className: "masonary-video-card",
              loading: _v31 || _v23,
              hideUploadDate: _v12
            })
          }, _v0.clip.uri);
        })
      }), _v44 && !_v22 ? (0, _v6.jsx)(_v343, {
        count: 6
      }) : _v16 ? (0, _v6.jsx)(_v343, {
        count: 2
      }) : null, _v40 && !_v16 ? (0, _v6.jsx)(_v352, {
        children: (0, _v6.jsx)(_v288, {
          onClick: _v46
        })
      }) : null]
    });
  }
  let _v349 = _v28.default.section.withConfig({
      displayName: "SectionMasonry__MasonryGrid",
      componentId: "sc-7a991fe-0"
    })`
  display: block;
  width: 100%;
  margin-bottom: ${(0, _v27.rem)(8)};

  ${({
      hasNext: _v0
    }) => _v0 && _v28.css`
      padding-bottom: ${(0, _v27.rem)(16)};
    `}
`,
    _v350 = _v28.default.article.withConfig({
      displayName: "SectionMasonry__MasonryItemContainer",
      componentId: "sc-7a991fe-1"
    })`
  position: relative;
  ${({
      height: _v0
    }) => _v28.css`
    height: ${(0, _v27.rem)(_v0)};
    max-height: ${(0, _v27.rem)(_v0)};
  `}
  ${({
      clipsRendered: _v0
    }) => _v0 && _v28.css`
      transition: all 0.5s ease-in;
    `}
`,
    _v351 = _v28.default.section.withConfig({
      displayName: "SectionMasonry__MasonryCard",
      componentId: "sc-7a991fe-2"
    })`
  position: absolute;
  top: ${({
      top: _v0
    }) => (0, _v27.rem)(_v0)};
  width: ${({
      videoWidth: _v0
    }) => (0, _v27.rem)(_v0)};

  ${({
      isFirst: _v0
    }) => _v0 ? _v28.css`
          left: 0;
        ` : _v28.css`
          right: 0;
        `}

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v28.css`
          .masonary-video-card > * {
            opacity: 0;
          }
          .masonary-video-card {
            border-radius: ${(0, _v27.rem)(8)};
            background-color: var(--vimeo-colors-fill-skeleton);
          }
          [data-theme='dark'] & .masonary-video-card {
            background-color: var(--vimeo-colors-popover);
          }
        ` : _v1 ? _v28.css`
            transform: translateX(${(0, _v27.rem)(10)});
            .masonary-video-card:before {
              content: '';
              height: 100%;
              width: ${(0, _v27.rem)(4)};
              left: -${(0, _v27.rem)(14)};
              position: absolute;
              background-color: ${(0, _v27.rgba)(_v38.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v28.css`
      user-select: none;
    `}

  ${({
      clipsRendered: _v0
    }) => _v0 && _v28.css`
      transition:
        width 0.5s ease-in,
        top 0.5s ease-in;
    `}
`,
    _v352 = _v28.default.article.withConfig({
      displayName: "SectionMasonry__LoadMoreContainer",
      componentId: "sc-7a991fe-3"
    })`
  margin-top: -${(0, _v27.rem)(16)};
`;
  var _v353 = _v0.i(0),
    _v354 = _v0.i(0),
    _v355 = _v0.i(0);
  let _v356 = _v0 => (0, _v6.jsx)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("path", {
        d: "M10 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H5v-6h4v6ZM20 3h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 8h-4V5h4v6Zm1 4h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-4v-2h4v2ZM10 3H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 7H5V5h4v2Z",
        fill: "currentColor"
      })
    }),
    _v357 = _v0 => (0, _v6.jsxs)(_v203.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: [(0, _v6.jsx)("path", {
        d: "M20 9H4C3.4 9 3 8.6 3 8C3 7.4 3.4 7 4 7H20C20.6 7 21 7.4 21 8C21 8.6 20.6 9 20 9Z",
        fill: "currentColor"
      }), (0, _v6.jsx)("path", {
        d: "M4 11H20C20.6 11 21 11.4 21 12C21 12.6 20.6 13 20 13H12H4C3.4 13 3 12.6 3 12C3 11.4 3.4 11 4 11Z",
        fill: "currentColor"
      }), (0, _v6.jsx)("path", {
        d: "M4 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H4C3.4 17 3 16.6 3 16C3 15.4 3.4 15 4 15Z",
        fill: "currentColor"
      }), (0, _v6.jsx)("path", {
        d: "M9.57933 4.86034C9.66932 4.94979 9.79104 5 9.91792 5C10.5757 5 11.9806 5 11.9806 5C11.9806 5 13.3688 5 14.0194 5C14.1462 5 14.268 4.94979 14.3579 4.86034C14.403 4.8157 14.4387 4.76258 14.4631 4.70406C14.4874 4.64553 14.5 4.58276 14.5 4.51936C14.5 4.45596 14.4874 4.39318 14.4631 4.33466C14.4387 4.27614 14.403 4.22302 14.3579 4.17837L12.3216 2.14206C12.277 2.09705 12.2239 2.06132 12.1653 2.03694C12.1068 2.01255 12.044 2 11.9806 2C11.9172 2 11.8545 2.01255 11.7959 2.03694C11.7374 2.06132 11.6843 2.09705 11.6397 2.14206L9.57933 4.17837C9.53432 4.22302 9.49859 4.27614 9.47421 4.33466C9.44983 4.39318 9.43727 4.45596 9.43727 4.51936C9.43727 4.58276 9.44983 4.64553 9.47421 4.70405C9.49859 4.76258 9.53432 4.8157 9.57933 4.86034Z",
        fill: "currentColor"
      }), (0, _v6.jsx)("path", {
        d: "M14.3579 19.1397C14.2679 19.0502 14.1462 19 14.0193 19C13.3616 19 11.9566 19 11.9566 19C11.9566 19 10.5684 19 9.9179 19C9.79102 19 9.6693 19.0502 9.57932 19.1397C9.5343 19.1843 9.49857 19.2374 9.47419 19.2959C9.44981 19.3545 9.43726 19.4172 9.43726 19.4806C9.43726 19.544 9.44981 19.6068 9.47419 19.6653C9.49857 19.7239 9.5343 19.777 9.57932 19.8216L11.6156 21.8579C11.6603 21.903 11.7134 21.9387 11.7719 21.9631C11.8304 21.9874 11.8932 22 11.9566 22C12.02 22 12.0828 21.9874 12.1413 21.9631C12.1998 21.9387 12.253 21.903 12.2976 21.8579L14.3579 19.8216C14.4029 19.777 14.4387 19.7239 14.463 19.6653C14.4874 19.6068 14.5 19.544 14.5 19.4806C14.5 19.4172 14.4874 19.3545 14.463 19.2959C14.4387 19.2374 14.4029 19.1843 14.3579 19.1397Z",
        fill: "currentColor"
      })]
    });
  function _v358({
    viewType: _v0,
    toggleViewType: _v1,
    onReorderClick: _v2,
    footerHeight: _v3,
    disableToggleView: _v4,
    disableReorder: _v5,
    reorderActive: _v6
  }) {
    let {
        settings: _v7
      } = (0, _v39.useOrionSettings)(),
      _v8 = !!_v7.show_profile_reorder_modal,
      _v9 = !!_v5 || !_v2,
      [_v10, _v11] = (0, _v16.useState)(!1),
      [_v12, _v13] = (0, _v16.useState)(!1),
      {
        trackUserProfileLayoutChanged: _v14,
        trackUserProfileReorderContentClicked: _v15,
        trackUserProfilePreviewClicked: _v16
      } = (0, _v24.useProfileTracking)(),
      _v17 = _v0 === _v49.ViewType.MASONRY ? {
        content: _v51.default.Grid,
        switchTo: _v49.ViewType.GRID,
        icon: (0, _v6.jsx)(_v355.GridView, {
          boxSize: 24
        })
      } : {
        content: _v51.default.Masonry,
        switchTo: _v49.ViewType.MASONRY,
        icon: (0, _v6.jsx)(_v356, {
          boxSize: 24
        })
      };
    return (0, _v16.useEffect)(() => {
      let _v0 = (0, _v233.default)(() => {
        let _v0,
          _v1 = (_v0 = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, document.body.scrollHeight <= _v0 + (window ? window.innerHeight : 0) + _v3);
        _v10 !== _v1 && _v11(_v1);
      }, 50);
      return document.addEventListener("scroll", _v0), () => {
        document.removeEventListener("scroll", _v0);
      };
    }, [_v10]), (0, _v16.useEffect)(() => {
      _v13(!1);
    }, [_v0]), (0, _v6.jsxs)(_v33.Flex, {
      position: _v10 ? "absolute" : "fixed",
      bottom: (0, _v47.rem)(24),
      right: (0, _v47.rem)(24),
      zIndex: 3,
      bg: "fill-surface",
      borderRadius: _v8 ? (0, _v47.rem)(18) : "md",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      padding: "md",
      gap: "sm",
      alignItems: "center",
      justifyContent: "center",
      h: (0, _v47.rem)(64),
      w: _v8 ? (0, _v47.rem)(168) : (0, _v47.rem)(112),
      children: [(0, _v6.jsx)(_v86.Tooltip, {
        label: _v17.content,
        placement: "top",
        isDisabled: _v4,
        children: (0, _v6.jsx)(_v44.IconButton, {
          icon: _v17.icon,
          "aria-label": _v17.content,
          variant: "tertiary",
          color: "text-secondary",
          _hover: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          _active: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          isDisabled: _v4,
          isLoading: _v12,
          onClick: () => {
            _v4 || (_v14({
              userProfileLayout: _v17.switchTo
            }), _v1?.(_v17.switchTo), _v13(!0));
          }
        })
      }), _v8 && (0, _v6.jsx)(_v86.Tooltip, {
        label: _v51.default.Reorder,
        placement: "top",
        isDisabled: _v9,
        children: (0, _v6.jsx)(_v44.IconButton, {
          icon: (0, _v6.jsx)(_v357, {
            boxSize: 24
          }),
          "aria-label": _v51.default.Reorder,
          variant: "tertiary",
          color: "text-secondary",
          _hover: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          _active: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          isDisabled: _v9,
          isActive: !!_v6,
          onClick: () => {
            _v15(), _v2?.();
          }
        })
      }), (0, _v6.jsx)(_v86.Tooltip, {
        label: _v51.default.Preview,
        placement: "top",
        children: (0, _v6.jsx)(_v44.IconButton, {
          as: _v353.default,
          href: `${window.location.pathname}?mode=preview`,
          target: "_blank",
          rel: "noopener noreferrer",
          icon: (0, _v6.jsx)(_v354.Eye, {
            boxSize: 24
          }),
          "aria-label": _v51.default.Preview,
          variant: "tertiary",
          color: "text-secondary",
          _hover: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          _active: {
            color: "text-primary",
            bg: "fill-component-hover"
          },
          onClick: _v16
        })
      })]
    });
  }
  function _v359({
    viewType: _v0,
    toggleViewType: _v1,
    footerHeight: _v2,
    updatePublicVideosCount: _v3,
    publicVideosCount: _v4,
    shouldAutoAddVideos: _v5,
    toggleAutoAddVideos: _v6,
    hideUploadDate: _v7
  }) {
    let {
        editMode: _v8
      } = (0, _v16.useContext)(_v50.default),
      {
        data: _v9,
        setSize: _v10,
        error: _v11,
        isValidating: _v12
      } = (0, _v16.useContext)(_v89),
      {
        isCreating: _v13,
        stop: _v14,
        registerCreator: _v15
      } = _v209(),
      {
        createSection: _v16
      } = _v95("", void 0, void 0, !1),
      _v17 = (0, _v16.useRef)(null),
      _v18 = (0, _v16.useRef)(null),
      _v19 = (0, _v16.useRef)(null),
      _v20 = (0, _v16.useRef)(!1),
      _v21 = (0, _v16.useRef)(!1),
      [_v22, _v23] = (0, _v16.useState)(null),
      [_v24, _v25] = (0, _v16.useState)(!1),
      [_v26, _v27] = (0, _v16.useState)(!1),
      [_v28, _v29] = (0, _v16.useState)({}),
      _v30 = (0, _v16.useMemo)(() => _v65(_v9), [_v9]),
      _v31 = (0, _v16.useMemo)(() => _v30.some(_v0 => _v0.videos.total > 0), [_v30]),
      _v32 = (0, _v16.useMemo)(() => _v30.length > 1 || 1 === _v30.length && null != _v30[0].title, [_v30]),
      _v33 = (0, _v16.useMemo)(() => _v66(_v9), [_v9]),
      _v34 = !_v9 && !_v11,
      _v35 = (0, _v16.useCallback)((_v0, _v1) => {
        null == _v19.current && (_v19.current = function (_v0, _v1 = "div") {
          let _v2 = document.getElementById(_v0);
          if (null == _v2) {
            let _v0 = document.createElement(_v1);
            return _v0.id = _v0, document.body.appendChild(_v0), document.getElementById(_v0);
          }
          return _v2;
        }((0, _v286.v4)()));
        let _v2 = _v19.current,
          _v3 = _v0.currentTarget;
        if (_v2 && _v3) {
          let {
              height: _v0,
              width: _v1
            } = _v3.getBoundingClientRect(),
            _v2 = _v3.cloneNode(!0);
          _v2.querySelectorAll("video").forEach(_v0 => _v0.remove()), _v2.querySelectorAll("*").forEach(_v0 => {
            _v0.style.setProperty("opacity", "1", "important");
          }), _v2.style.height = (0, _v27.rem)(_v0), _v2.style.width = (0, _v27.rem)(_v1), _v2.style.margin = (0, _v27.rem)(0), _v2.appendChild(_v2), _v2.style.position = "absolute", _v2.style.top = "100%", _v2.style.left = "100%", _v2.style.height = (0, _v27.rem)(_v0), _v2.style.width = (0, _v27.rem)(_v1);
          let _v3 = _v2.querySelector(".drag-handle");
          if (_v3) {
            let _v0 = _v2.getBoundingClientRect(),
              _v1 = _v3.getBoundingClientRect(),
              _v2 = _v1.x - _v0.x,
              _v3 = _v1.y - _v0.y;
            _v0.dataTransfer.setDragImage(_v2, _v2, _v3);
          } else _v0.dataTransfer.setDragImage(_v2, 0, 0);
        }
        _v0.dataTransfer.dropEffect = "move", _v0.dataTransfer.effectAllowed = "move", _v0.dataTransfer.setData("Text", JSON.stringify(_v1));
      }, []),
      _v36 = (0, _v16.useCallback)(() => {
        _v19.current && (_v19.current.innerHTML = "", _v19.current.style.height = "auto", _v19.current.style.width = "auto");
      }, []),
      _v37 = (0, _v16.useCallback)((_v0, _v1) => {
        _v29(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []),
      _v38 = (_v0, _v1) => ({
        section: _v0,
        index: _v1,
        draggedOver: _v22,
        removeDragPortal: _v36,
        updatePublicVideosCount: _v3,
        setSectionHasNext: _v37,
        disableDown: _v1 >= _v30.length - 1,
        disableUp: 0 === _v1,
        onDragStart: _v35,
        setDragOver: _v0 => _v23(_v0),
        shouldAutoAddVideos: _v5,
        toggleAutoAddVideos: _v6,
        hideUploadDate: _v7
      }),
      _v39 = (0, _v16.useCallback)(() => {
        _v20.current = !1, _v21.current = !1, _v25(!1);
      }, []),
      _v40 = (0, _v16.useCallback)(() => {
        _v33 && !_v20.current && _v10 && (_v20.current = !0, _v21.current = !1, _v25(!0), _v10(_v0 => (_v0 || 0) + 1).catch(() => {
          _v39();
        }));
      }, [_v33, _v39, _v10]);
    (0, _v16.useEffect)(() => {
      if (_v20.current) {
        if (_v12) {
          _v21.current = !0;
          return;
        }
        _v21.current && _v39();
      }
    }, [_v12, _v39]), (0, _v16.useEffect)(() => {
      _v33 || !_v20.current || _v12 || _v39();
    }, [_v33, _v12, _v39]), (0, _v16.useEffect)(() => {
      if (_v18.current) {
        let _v0,
          {
            offsetTop: _v1
          } = _v18.current;
        (document.documentElement?.scrollTop ?? 0) > _v1 && (_v0 = {
          behavior: navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? "auto" : "smooth",
          inline: "start",
          block: "start"
        }, _v18 && _v18 instanceof HTMLElement ? _v18.scrollIntoView(_v0) : _v18 && _v18.current && _v18.current.scrollIntoView(_v0));
      }
    }, [_v18, _v0]), (0, _v16.useEffect)(() => {
      _v29(_v0 => {
        let _v1 = new Set(_v30.map(_v0 => _v0.uri)),
          _v2 = !1,
          _v3 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v1.has(_v1) ? _v0[_v1] = _v2 : _v2 = !0, _v0), {});
        return _v2 ? _v3 : _v0;
      });
    }, [_v30]);
    let _v41 = (0, _v16.useMemo)(() => _v33 || _v24, [_v33, _v24]),
      _v42 = (0, _v16.useCallback)(async _v0 => _v16({
        title: _v0
      }), [_v16]);
    return (0, _v16.useEffect)(() => {
      if (_v13) return _v15({
        submitOrFocus: async () => {
          await _v17.current?.submitOrFocus();
        }
      }), () => _v15(null);
    }, [_v13, _v15]), _v30.length > 0 ? (0, _v6.jsxs)("section", {
      ref: _v18,
      children: [_v8 && (0, _v6.jsx)(_v358, {
        viewType: _v0,
        toggleViewType: _v1,
        onReorderClick: () => _v27(!0),
        footerHeight: _v2,
        disableToggleView: 0 === _v4,
        disableReorder: !_v31,
        reorderActive: _v26
      }), _v26 ? (0, _v6.jsx)(_v311, {
        sections: _v30,
        sectionsActive: _v32,
        isShowing: _v26,
        hasNextSections: !!_v33,
        loadingNextSections: _v24,
        onLoadNextSections: _v40,
        onDismiss: () => _v27(!1)
      }) : null, _v8 && _v13 ? (0, _v6.jsx)(_v312, {
        ref: _v17,
        onCreate: _v42,
        onCancel: _v14
      }) : null, _v30.map((_v0, _v1) => _v0 === _v49.ViewType.GRID ? (0, _v6.jsx)(_v344, {
        ..._v38(_v0, _v1)
      }, `GRID_${_v0.uri}`) : (0, _v6.jsx)(_v348, {
        ..._v38(_v0, _v1)
      }, `MASONARY_${_v0.uri}`)), _v41 ? (0, _v6.jsx)(_v288, {
        onClick: _v40,
        loading: _v24,
        translationKey: "LoadMoreSections"
      }) : null]
    }) : _v34 || _v12 ? (0, _v6.jsx)(_v343, {
      count: 6,
      viewType: _v0
    }) : null;
  }
  var _v360 = _v0.i(0),
    _v361 = _v0.i(0),
    _v362 = _v0.i(0),
    _v363 = _v0.i(0),
    _v364 = _v0.i(0),
    _v365 = _v0.i(0);
  function _v366({
    profileLink: _v0,
    profileName: _v1
  }) {
    let [_v2, _v3] = (0, _v16.useState)(!1),
      _v4 = (0, _v106.useViewer)(),
      _v5 = _v4?.facebookAppId ?? "",
      {
        userId: _v6
      } = (0, _v16.useContext)(_v50.default),
      _v7 = (0, _v16.useContext)(_v93.NotificationDispatchContext),
      {
        trackUserProfilePageShareButtonClicked: _v8,
        trackUserProfileShareActionClicked: _v9
      } = (0, _v24.useProfileTracking)(),
      {
        onCopy: _v10
      } = (0, _v361.useClipboard)(`${_v0}?fl=pp&fe=sh`),
      _v11 = (0, _v21.translate)({
        singular: "View {NAME}'s profile on {VIMEO_MENTION}",
        replacements: {
          NAME: _v1,
          VIMEO_MENTION: "#Vimeo"
        },
        dictionary: {
          es: {
            singular: "Ver el perfil de {NAME} en {VIMEO_MENTION}"
          },
          "de-DE": {
            singular: "Profil von {NAME} auf {VIMEO_MENTION} ansehen"
          },
          "fr-FR": {
            singular: "Voir le profil de {NAME} sur {VIMEO_MENTION}"
          },
          "ja-JP": {
            singular: "{VIMEO_MENTION}で{NAME}のプロフィールを見る"
          },
          "ko-KR": {
            singular: "{VIMEO_MENTION}에서 {NAME}의 프로필 보기"
          },
          "pt-BR": {
            singular: "Ver o perfil de {NAME} no {VIMEO_MENTION}"
          },
          "zh-CN": {
            singular: "在 {VIMEO_MENTION} 上查看 {NAME} 的个人资料"
          }
        }
      }),
      _v12 = _v0 => {
        _v137(_v49.BPEvent.CLICK_PROFILE_SHARE_SOCIAL_PLATFORM, 1, {
          profile_id: _v6,
          platform: _v0
        }), _v9({
          userProfilePageUserId: String(_v6),
          userProfileShareAction: _v0
        });
      },
      _v13 = [{
        icon: (0, _v6.jsx)(_v363.Facebook, {}),
        name: "Facebook",
        href: `https://www.facebook.com/dialog/share?app_id=${_v5}&display=popup&href=${encodeURI(`${_v0}?ref=fb-share&fl=pp&fe=fb`)}`,
        onClick: () => _v12(_v49.SOCIAL_PLATFORM.FACEBOOK)
      }, {
        icon: (0, _v6.jsx)(_v365.X, {}),
        name: "X",
        href: `https://x.com/intent/post?url=${encodeURI(`${_v0}?ref=tw-share&fl=pp&fe=tw`)}&text=${encodeURIComponent(_v11)}`,
        onClick: () => _v12(_v49.SOCIAL_PLATFORM.TWITTER)
      }, {
        icon: (0, _v6.jsx)(_v364.Linkedin, {}),
        name: "LinkedIn",
        href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(_v0)}&title=${encodeURI(_v1)}&fl=pp&fe=li`,
        onClick: () => _v12(_v49.SOCIAL_PLATFORM.LINKEDIN)
      }];
    return (0, _v6.jsxs)(_v31.Box, {
      mt: {
        base: (0, _v27.rem)(10),
        lg: 0
      },
      children: [(0, _v6.jsx)(_v86.Tooltip, {
        label: _v51.default.Share,
        children: (0, _v6.jsx)(_v44.IconButton, {
          variant: "tertiary",
          size: "sm",
          icon: (0, _v6.jsx)(_v362.Export, {}),
          "aria-label": _v51.default.Share,
          onClick: () => {
            _v137(_v49.BPEvent.CLICK_TO_SHARE_PROFILE, 1, {
              profile_id: _v6
            }), _v8({
              userProfilePageUserId: String(_v6)
            }), _v3(!0);
          }
        })
      }), (0, _v6.jsxs)(_v34.Modal, {
        isOpen: _v2,
        onClose: () => _v3(!1),
        size: "sm",
        children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsxs)(_v35.ModalContent, {
          children: [(0, _v6.jsx)(_v99.ModalHeader, {
            children: _v51.default.ShareProfile
          }), (0, _v6.jsx)(_v163.ModalCloseButton, {}), (0, _v6.jsxs)(_v97.ModalBody, {
            pb: "lg",
            children: [(0, _v6.jsx)(_v360.VStack, {
              align: "stretch",
              spacing: "xs",
              mb: "lg",
              children: _v13.map(_v0 => (0, _v6.jsx)(_v32.Button, {
                variant: "tertiary",
                size: "md",
                leftIcon: _v0.icon,
                justifyContent: "flex-start",
                onClick: () => {
                  _v0.onClick(), window.open(_v0.href, "", "width=500,height=500");
                },
                children: _v0.name
              }, _v0.name))
            }), (0, _v6.jsx)(_v18.Text, {
              variant: "heading-xs",
              color: "text-primary",
              mb: "xs",
              children: _v51.default.PageLink
            }), (0, _v6.jsx)(_v32.Button, {
              variant: "tertiary",
              size: "md",
              rightIcon: (0, _v6.jsx)(_v247.Link, {}),
              justifyContent: "space-between",
              width: "100%",
              onClick: () => {
                _v10(), _v12(_v49.SOCIAL_PLATFORM.CUSTOM_LINK), _v7({
                  content: _v51.default.LinkCopiedToClipboard,
                  status: "neutral"
                });
              },
              children: (0, _v6.jsx)(_v18.Text, {
                as: "span",
                variant: "body-md",
                color: "text-secondary",
                fontWeight: "regular",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                minWidth: 0,
                flex: "1",
                textAlign: "left",
                children: _v0
              })
            })]
          })]
        })]
      })]
    });
  }
  function _v367({
    userName: _v0,
    pictures: _v1,
    actionButtons: _v2,
    isShowing: _v3,
    isExpert: _v4
  }) {
    return (0, _v6.jsxs)(_v33.Flex, {
      position: "fixed",
      top: (0, _v47.rem)(64),
      zIndex: 3,
      w: "100%",
      h: (0, _v47.rem)(70),
      maxW: "100%",
      bg: "fill-surface",
      boxShadow: "md",
      px: (0, _v47.rem)(10),
      py: (0, _v47.rem)(10),
      justifyContent: "space-between",
      visibility: _v3 ? "visible" : "hidden",
      opacity: +!!_v3,
      transition: "all 230ms linear",
      display: {
        base: "flex",
        lg: "none"
      },
      children: [(0, _v6.jsxs)(_v33.Flex, {
        maxW: `calc(100% - ${(0, _v47.rem)(90)})`,
        children: [(0, _v6.jsx)(_v111.Avatar, {
          alt: _v0,
          size: "auto",
          src: _v1?.sizes?.[1]?.link,
          nameProps: {
            name: _v0
          },
          sx: {
            width: (0, _v47.rem)(50),
            height: (0, _v47.rem)(50)
          }
        }), (0, _v6.jsx)(_v18.Text, {
          as: "span",
          color: "text-primary",
          fontSize: (0, _v47.rem)(20),
          fontWeight: "bold",
          letterSpacing: (0, _v47.rem)(-.5),
          lineHeight: (0, _v47.rem)(32),
          m: (0, _v47.rem)(10),
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          children: _v0
        }), _v4 && (0, _v6.jsx)(_v31.Box, {
          alignSelf: "center",
          mr: (0, _v47.rem)(4),
          transform: `translateY(${(0, _v47.rem)(2)})`,
          sx: {
            a: {
              fontSize: (0, _v47.rem)(9),
              borderRadius: (0, _v47.rem)(2),
              fontWeight: 700
            }
          },
          children: (0, _v6.jsx)(_v276, {})
        })]
      }), null != _v2 ? (0, _v6.jsx)(_v33.Flex, {
        mt: (0, _v47.rem)(5),
        maxW: `calc(100% - ${(0, _v47.rem)(90)})`,
        children: _v2
      }) : null]
    });
  }
  function _v368({
    totalVideos: _v0,
    videosListUrl: _v1
  }) {
    if (!(_v0 > 0 && _v0 < 0)) return null;
    let _v2 = (0, _v21.translate)({
      singular: "{COUNT} video",
      plural: "{COUNT} videos",
      count: _v0,
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        "de-DE": {
          singular: "{COUNT} Video",
          plural: "{COUNT} Videos"
        },
        "fr-FR": {
          singular: "{COUNT} vidéo",
          plural: "{COUNT} vidéos"
        },
        "ja-JP": {
          singular: "{COUNT} 件の動画",
          plural: "{COUNT}件の動画"
        },
        "ko-KR": {
          singular: "동영상 {COUNT}개",
          plural: "동영상 {COUNT}개"
        },
        "pt-BR": {
          singular: "{COUNT} vídeo",
          plural: "{COUNT} vídeos"
        },
        "zh-CN": {
          singular: "{COUNT} 个视频",
          plural: "{COUNT} 个视频"
        }
      }
    });
    return _v1 ? (0, _v6.jsx)(_v32.Button, {
      as: "a",
      href: _v1,
      variant: "secondary",
      size: "sm",
      ml: "12px",
      fontFamily: "body",
      children: _v2
    }) : (0, _v6.jsx)(_v32.Button, {
      variant: "secondary",
      size: "sm",
      isDisabled: !0,
      ml: "12px",
      fontFamily: "body",
      children: _v2
    });
  }
  var _v369 = ((_v5 = {}).TOTAL_VIDEOS = "TOTAL_VIDEOS", _v5);
  let _v370 = {};
  function _v371({
    children: _v0,
    total: _v1
  }) {
    let [_v2, _v3] = (0, _v16.useReducer)((_v0, _v1) => "TOTAL_VIDEOS" === _v1.type ? {
      ..._v0,
      totalVideos: _v1.payload
    } : _v0, _v370);
    return (0, _v16.useEffect)(() => {
      _v3({
        type: _v369.TOTAL_VIDEOS,
        payload: _v1
      });
    }, [_v3, _v1]), (0, _v6.jsx)(_v6.Fragment, {
      children: _v0({
        state: _v2,
        dispatch: _v3
      })
    });
  }
  let _v372 = [{
      label: _v51.default.HideFromProfile,
      value: "n",
      hideValue: !0
    }, {
      label: "she/her",
      value: "f"
    }, {
      label: "he/him",
      value: "m"
    }, {
      label: "they/them",
      value: "o"
    }],
    _v373 = (0, _v16.lazy)(() => _v0.A(0)),
    _v374 = (0, _v16.lazy)(() => _v0.A(0));
  function _v375({
    profile: _v0,
    editMode: _v1,
    Footer: _v2,
    playerAssetUrls: _v3,
    canEditPersonalInfo: _v4
  }) {
    let {
        backgroundVideo: _v5,
        bio: _v6,
        contactEmails: _v7,
        createdTime: _v8,
        gender: _v9,
        link: _v10,
        locationDetails: _v11,
        membership: _v12,
        metadata: {
          connections: {
            albums: _v13,
            followers: _v14,
            following: _v15,
            likes: _v16,
            videos: _v17,
            vimeoExperts: _v18
          },
          publicVideos: {
            total: _v19
          }
        },
        name: _v20,
        pictures: _v21,
        profileDiscovery: _v22,
        profilePreferences: {
          layout: _v23,
          profileType: _v24,
          shouldAutoAddVideos: _v25,
          showAddVideoTip: _v26,
          showProfileTypeTip: _v27,
          showJoinVimeoExpertsModal: _v28,
          hideUploadDate: _v29
        },
        totalCollectionCount: _v30,
        uri: _v31,
        verified: _v32,
        websites: _v33
      } = _v0,
      {
        onUserUpdate: _v34,
        onPreferenceUpdate: _v35,
        fetchPublicVideosCount: _v36
      } = _v212(),
      {
        settings: _v37
      } = (0, _v39.useOrionSettings)(),
      [_v38, _v39] = (0, _v16.useState)(!1);
    (0, _v16.useEffect)(() => {
      _v39(_v1 && "creative_professional" == _v24 && _v28 && _v18?.isEnrolled === !1);
    }, [_v1, _v24, _v28, _v18]), (0, _v16.useEffect)(() => {
      let _v0 = document?.referrer || "";
      _v137(_v49.BPEvent.VISIT_PROFILE_PAGE, 2, {
        referrer: _v0,
        profile_id: _v59(_v31),
        profile_plan: _v12?.type ?? "",
        can_work_remotely: !1,
        available_for_hire: !1
      });
    }, []);
    let [_v40, _v41] = (0, _v16.useState)(!1),
      [_v42, _v43] = (0, _v16.useState)(_v27),
      [_v44, _v45] = (0, _v16.useState)(!1),
      _v46 = _v59(_v31),
      _v47 = _v10 ? `${_v10.replace(/\/$/, "")}/videos` : void 0,
      _v48 = (0, _v42.useWindowSize)(),
      _v49 = (0, _v16.useMemo)(() => _v48.width >= 16 * parseFloat(_v38.bokehTheme.breakpoints.lg), [_v48.width]),
      {
        locale: _v50,
        recaptchaSiteKey: _v51,
        user: _v52,
        xsrft: _v53,
        isFromCopyrightRestrictedRegion: _v54
      } = (0, _v16.useContext)(_v26.ViewerContext),
      _v55 = (0, _v16.useRef)(null),
      _v56 = document?.referrer || "",
      _v57 = (0, _v16.useCallback)(_v0 => {
        _v41(!0), _v43(!1), _v35({
          profilePreferences: {
            showProfileTypeTip: !1
          }
        }, !1);
        let _v1 = new FormData(),
          _v2 = [(0, _v29.decamelizeDeep)({
            questionKey: "segment",
            answerKey: _v0
          })];
        _v1.append("answers", JSON.stringify(_v2)), _v1.append("token", _v53), fetch("/survey/profile_onboarding", {
          method: "POST",
          body: _v1
        });
      }, [_v35, _v53]),
      _v58 = _v1 || _v54 ? null : (0, _v6.jsx)(_v232, {
        xsrft: _v53,
        isOwner: _v46 === _v52?.id,
        profileId: _v46
      });
    (0, _v16.useEffect)(() => {
      _v43(_v27);
    }, [_v27]);
    let _v59 = _v46 === _v52?.id;
    return (0, _v6.jsx)(_v40.PlayerContextProvider, {
      type: _v41.PlayerType.BarebonePlayer,
      assetUrls: _v3,
      children: (0, _v6.jsxs)(_v231, {
        profileId: _v46,
        children: [_v59 && !_v22 && (0, _v6.jsx)(_v17.AlertRoot, {
          background: "status-info-secondary",
          borderRadius: "0",
          position: "sticky",
          top: (0, _v27.rem)(64),
          zIndex: 99,
          justifyContent: "center",
          children: (0, _v6.jsx)(_v30.AlertDescription, {
            children: (0, _v6.jsx)(_v18.Text, {
              variant: "body-sm",
              children: _v51.default.HiddenProfileNotice
            })
          })
        }), (0, _v6.jsx)(_v238, {
          isDesktopView: _v49,
          footerRef: _v55,
          referrerUrl: _v56,
          isOwner: _v59,
          hugVideoPanelHeight: !!_v19,
          stickyTopNav: _v0 => (0, _v6.jsx)(_v367, {
            userName: _v0.name,
            pictures: _v21,
            actionButtons: _v58,
            isShowing: _v0 && !_v1,
            isExpert: _v0.isExpert
          }),
          header: _v1 ? (0, _v6.jsx)(_v202, {
            profile: _v0
          }) : !!_v5?.length && (0, _v6.jsx)(_v202, {
            profile: _v0
          }),
          infoPanel: (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsxs)(_v33.Flex, {
              justifyContent: "space-between",
              alignItems: "flex-start",
              children: [(0, _v6.jsx)(_v275, {
                editMode: _v1,
                name: _v20,
                picture: _v21
              }), (0, _v6.jsx)(_v366, {
                profileLink: _v10,
                profileName: _v20
              })]
            }), (0, _v6.jsx)(_v279, {
              name: _v20,
              onNameSubmit: _v34,
              canEditPersonalInfo: _v4,
              isExpert: _v0.isExpert
            }), "en" === _v50 && (0, _v6.jsx)(_v283, {
              gender: _v9,
              pronounsList: _v372,
              onPronounUpdate: _v34
            }), (0, _v6.jsxs)(_v33.Flex, {
              direction: "column",
              gap: "2px",
              children: [(0, _v6.jsx)(_v261, {
                value: _v11
              }), (0, _v6.jsx)(_v67, {
                onUpdate: _v34,
                value: _v6,
                isDesktopView: _v49
              }), (0, _v6.jsx)(_v218, {
                editMode: _v1,
                emails: _v7?.emails || []
              }), _v32 && (0, _v6.jsx)(_v256, {
                links: _v33
              }), _v49 && _v58 ? (0, _v6.jsx)(_v376, {
                children: _v58
              }) : null]
            }), !_v49 && _v58 ? (0, _v6.jsx)(_v376, {
              children: _v58
            }) : null]
          }),
          aboutPanel: (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)(_v151, {
              userId: _v46
            }), (0, _v6.jsx)(_v84, {
              userLink: _v10,
              totalShowcases: _v13.total,
              totalFollowers: _v14.total,
              totalFollowing: _v15.total,
              totalLikes: _v37.profile_likes_activity ? _v16?.total ?? 0 : 0,
              likesEnabled: _v37.profile_likes_activity,
              totalCollections: _v30,
              membership: _v12,
              createdTime: _v8 || "",
              userId: _v46,
              disableCollections: _v54
            })]
          }),
          videoPanel: (0, _v6.jsx)(_v371, {
            total: _v19,
            children: ({
              state: _v0
            }) => (0, _v6.jsx)(_v31.Box, {
              bg: "fill-surface",
              borderRadius: "lg",
              py: "md",
              px: "6px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              children: _v19 ? (0, _v6.jsxs)(_v208, {
                children: [(0, _v6.jsxs)(_v33.Flex, {
                  justify: "space-between",
                  align: "center",
                  mb: "12px",
                  children: [(0, _v6.jsx)(_v368, {
                    totalVideos: _v0.totalVideos ?? 0,
                    videosListUrl: _v47
                  }), _v1 ? (0, _v6.jsxs)(_v33.Flex, {
                    gap: "sm",
                    align: "center",
                    children: [(0, _v6.jsx)(_v139, {
                      shouldAutoAddVideos: _v25,
                      toggleAutoAddVideos: _v0 => _v35({
                        profilePreferences: {
                          shouldAutoAddVideos: _v0
                        }
                      }),
                      showAutoAddVideosNotification: () => _v45(!0),
                      updatePublicVideosCount: _v36
                    }), (0, _v6.jsx)(_v210, {})]
                  }) : null]
                }), (0, _v6.jsx)(_v359, {
                  viewType: _v23,
                  toggleViewType: _v0 => _v35({
                    profilePreferences: {
                      layout: _v0
                    }
                  }),
                  footerHeight: _v55.current?.offsetHeight || 0,
                  publicVideosCount: _v19,
                  updatePublicVideosCount: _v36,
                  shouldAutoAddVideos: _v25,
                  toggleAutoAddVideos: _v0 => _v35({
                    profilePreferences: {
                      shouldAutoAddVideos: _v0
                    }
                  }),
                  hideUploadDate: _v29
                })]
              }) : (0, _v6.jsx)(_v264, {
                showAddVideoCta: 0 !== _v17.total,
                editMode: _v1,
                shouldAutoAddVideos: _v25,
                toggleAutoAddVideos: _v0 => _v35({
                  profilePreferences: {
                    shouldAutoAddVideos: _v0
                  }
                }),
                updatePublicVideosCount: _v36
              })
            })
          })
        }), _v1 && (0, _v6.jsxs)(_v16.Suspense, {
          fallback: (0, _v6.jsx)(_v6.Fragment, {}),
          children: [_v42 || _v40 ? (0, _v6.jsx)(_v374, {
            onDismiss: () => {
              _v40 ? _v41(!1) : _v43(!1), _v35({
                profilePreferences: {
                  showProfileTypeTip: !1
                }
              }, !1);
            },
            selected: _v24,
            onProfileTypeSubmit: _v57,
            playerAssetUrls: _v3
          }) : null, !(_v42 || _v40) && _v26 && _v44 ? (0, _v6.jsx)(_v373, {
            onClose: () => {
              _v45(!1), _v35({
                profilePreferences: {
                  showAddVideoTip: !1
                }
              }, !1);
            },
            onAutoAddVideos: _v0 => {
              _v35({
                profilePreferences: {
                  shouldAutoAddVideos: _v0,
                  showAddVideoTip: !1
                }
              }, !1);
            }
          }) : null]
        }), (0, _v6.jsxs)(_v34.Modal, {
          isOpen: _v38,
          onClose: () => {
            _v35({
              profilePreferences: {
                showJoinVimeoExpertsModal: !1
              }
            }, !1), _v39(!1);
          },
          children: [(0, _v6.jsx)(_v36.ModalOverlay, {}), (0, _v6.jsx)(_v378, {
            children: (0, _v6.jsxs)(_v377, {
              children: [(0, _v6.jsx)(_v37.CloseX, {
                position: "absolute",
                top: (0, _v27.rem)(18),
                right: (0, _v27.rem)(18),
                boxSize: (0, _v27.rem)(20),
                cursor: "pointer",
                color: "white",
                _hover: {
                  boxSize: (0, _v27.rem)(22),
                  top: (0, _v27.rem)(17),
                  right: (0, _v27.rem)(17)
                },
                onClick: () => {
                  _v35({
                    profilePreferences: {
                      showJoinVimeoExpertsModal: !1
                    }
                  }, !1), _v39(!1);
                }
              }), (0, _v6.jsx)(_v382, {
                src: "https://i.vimeocdn.com/custom_asset/3286"
              }), (0, _v6.jsxs)(_v379, {
                children: [(0, _v6.jsx)(_v380, {
                  children: _v51.default.JoinExpertsInfoModalTitle
                }), (0, _v6.jsx)(_v381, {
                  children: _v51.default.JoinExpertsInfoModalContent
                }), (0, _v6.jsx)(_v32.Button, {
                  as: "a",
                  href: "/experts/dashboard",
                  size: "lg",
                  children: _v51.default.JoinExperts
                })]
              })]
            })
          })]
        }), (0, _v6.jsx)("div", {
          ref: _v55,
          children: _v2
        })]
      })
    });
  }
  function _v376({
    children: _v0
  }) {
    return (0, _v6.jsx)(_v33.Flex, {
      w: "100%",
      mt: {
        base: (0, _v27.rem)(16),
        lg: (0, _v27.rem)(10)
      },
      children: _v0
    });
  }
  let _v377 = _v28.default.div.withConfig({
      displayName: "App__ModalStyled",
      componentId: "sc-36044454-0"
    })`
  padding: ${(0, _v27.rem)(0)};
  border-radius: ${(0, _v27.rem)(16)};
  background: linear-gradient(107.96deg, #1b4070 14.43%, #2b103c 96.02%);
  max-width: ${(0, _v27.rem)(390)};
`,
    _v378 = (0, _v28.default)(_v35.ModalContent).withConfig({
      displayName: "App__ExpertsModalContent",
      componentId: "sc-36044454-1"
    })`
  &&& {
    padding: 0;
    overflow: hidden;
    border-radius: ${(0, _v27.rem)(16)};
    background: transparent;
    @media (min-width: ${_v43.BreakPoints.xmd}px) {
      position: fixed;
      bottom: ${(0, _v27.rem)(40)};
      right: ${(0, _v27.rem)(32)};
      margin: 0;
    }
  }
`,
    _v379 = _v28.default.div.withConfig({
      displayName: "App__Content",
      componentId: "sc-36044454-2"
    })`
  padding: ${(0, _v27.rem)(24)};
`,
    _v380 = _v28.default.div.withConfig({
      displayName: "App__CustomHeader",
      componentId: "sc-36044454-3"
    })`
  color: ${_v38.bokehTheme.colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: ${(0, _v27.rem)(28)};
  line-height: ${(0, _v27.rem)(33)};
  text-align: center;
  margin-bottom: ${(0, _v27.rem)(16)};
`,
    _v381 = _v28.default.div.withConfig({
      displayName: "App__CustomParagraph",
      componentId: "sc-36044454-4"
    })`
  color: ${_v38.bokehTheme.colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: ${(0, _v27.rem)(16)};
  line-height: ${(0, _v27.rem)(24)};
  text-align: center;
  margin-bottom: ${(0, _v27.rem)(40)};
`,
    _v382 = _v28.default.img.withConfig({
      displayName: "App__CustomImage",
      componentId: "sc-36044454-5"
    })`
  border-radius: ${(0, _v27.rem)(4)};
  width: 100%;
`;
  function _v383() {
    return (0, _v6.jsx)(_v384, {
      children: (0, _v6.jsx)(_v190.Spinner, {
        size: "xl"
      })
    });
  }
  let _v384 = _v28.default.div.withConfig({
      displayName: "AppLoader__LoaderWrapper",
      componentId: "sc-d237163f-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,
    _v385 = ["name", "gender", "bio", "uri", "link", "background_video", "location_details", "pictures", "verified", "metadata.public_videos.total", "metadata.connections.videos.total", "metadata.connections.albums.total", "metadata.connections.followers.total", "metadata.connections.following.total", "metadata.connections.likes.total", "metadata.connections.vimeo_experts.is_enrolled", "total_collection_count", "created_time", "profile_preferences", "membership", "is_expert", "profile_discovery", "websites", "contact_emails"];
  var _v386 = _v0.i(0),
    _v387 = _v0.i(0);
  function _v388({
    userId: _v0
  }) {
    let _v1 = (0, _v106.useViewer)();
    return (0, _v6.jsx)(_v33.Flex, {
      id: "profile-private-page",
      height: "70vh",
      alignItems: "center",
      textAlign: "center",
      children: (0, _v6.jsxs)(_v31.Box, {
        margin: "0 auto",
        paddingX: "200",
        children: [(0, _v6.jsx)(_v386.VimeoV, {
          width: "45px",
          height: "40px",
          mb: "lg"
        }), (0, _v6.jsx)(_v75.Header, {
          size: "xl",
          children: (0, _v21.translate)({
            singular: "This profile is private",
            dictionary: {
              es: {
                singular: "Este perfil es privado"
              },
              "de-DE": {
                singular: "Dieses Profil ist privat"
              },
              "fr-FR": {
                singular: "Ce profil est privé"
              },
              "ja-JP": {
                singular: "このプロフィールは非公開です"
              },
              "ko-KR": {
                singular: "이 프로필은 비공개입니다"
              },
              "pt-BR": {
                singular: "Este perfil é privado"
              },
              "zh-CN": {
                singular: "该个人资料为私密"
              }
            }
          })
        }), _v1?.user && (0, _v6.jsx)(_v33.Flex, {
          justify: "center",
          ml: "-1rem",
          mt: "lg",
          children: (0, _v6.jsx)(_v387.default, {
            forPrivatePage: !0,
            buttonLabel: (0, _v21.translate)({
              singular: "Report this person",
              dictionary: {
                es: {
                  singular: "Reportar a esta persona"
                },
                "de-DE": {
                  singular: "Diese Person melden"
                },
                "fr-FR": {
                  singular: "Signaler cette personne"
                },
                "ja-JP": {
                  singular: "このユーザーを報告する"
                },
                "ko-KR": {
                  singular: "이 사용자를 신고"
                },
                "pt-BR": {
                  singular: "Denunciar essa pessoa"
                },
                "zh-CN": {
                  singular: "举报此人"
                }
              }
            }),
            userId: _v0
          })
        })]
      })
    });
  }
  function _v389({
    playerAssetUrls: _v0,
    userId: _v1,
    isMod: _v2
  }) {
    let _v3,
      _v4,
      _v5 = (0, _v16.useContext)(_v26.ViewerContext),
      {
        capabilities: _v6
      } = (0, _v19.useCapability)(["canEditPersonalInfo"]),
      _v7 = (0, _v15.useRouter)(),
      [_v8, _v9] = (0, _v16.useState)(!1),
      {
        trackUserProfilePageDisplayed: _v10
      } = (0, _v24.useProfileTracking)(),
      _v11 = _v5?.user?.id.toString() === _v1 || _v5?.user?.link.endsWith(_v1) || !1,
      _v12 = _v6?.canEditPersonalInfo ?? !1;
    (0, _v16.useEffect)(() => {
      let _v0 = location.search.includes("preview");
      _v11 && !_v0 && _v9(!0), !_v11 && _v0 && _v7.replace(location.pathname);
    }, [_v11]);
    let {
        data: _v13,
        error: _v14,
        mutate: _v15,
        isValidating: _v16
      } = (_v3 = (0, _v92.default)(), _v4 = (0, _v16.useCallback)(_v0 => _v3(_v0, {
        fields: _v385,
        fetch_user_profile: "1"
      }), [_v3]), (0, _v124.default)(`users/${_v1}`, _v4)),
      _v17 = function (_v0) {
        let _v1 = (0, _v92.default)(),
          {
            settings: _v2
          } = (0, _v39.useOrionSettings)(),
          _v3 = _v2.profile_likes_activity;
        return (0, _v91.default)(_v0 => {
          let _v1 = {
              ...(0, _v49.getSectionVariables)(_v3),
              page: _v0 + 1
            },
            _v2 = (0, _v94.buildQueryString)((0, _v29.decamelizeDeep)(_v1));
          return `users/${_v0}/profile_sections${_v2}`;
        }, _v1);
      }(_v1),
      _v18 = !_v13 && !_v14;
    if ((0, _v23.usePicoEffect)(() => {
      if (!_v13 || !_v5) return !1;
      let _v0 = /^\d+$/.test(_v1) ? "default_url" : "custom_url";
      _v10({
        userProfilePageUserId: _v59(_v13.uri).toString(),
        referrerPage: (0, _v22.deriveReferrerPage)(),
        userProfilePageType: _v0,
        userProfilePageViewerAuthStatus: (0, _v22.deriveViewerAuthStatus)(_v5)
      });
    }, [_v13, _v1, _v5], {
      once: !0
    }), !_v5 || _v18) return (0, _v6.jsx)(_v383, {});
    if (_v14 && 404 === _v14.status) throw new _v20.ResourceNotFoundError(_v14);
    return _v14 || !_v13 ? null : (0, _v6.jsx)(_v88.Provider, {
      value: {
        data: _v13,
        error: _v14,
        mutate: _v15,
        isValidating: _v16
      },
      children: (0, _v6.jsx)(_v89.Provider, {
        value: _v17,
        children: (0, _v6.jsxs)(_v50.default.Provider, {
          value: {
            idOrUserName: _v1,
            editMode: _v8,
            userId: _v59(_v13.uri)
          },
          children: [_v2 && (0, _v6.jsx)(_v17.Alert, {
            status: "error",
            size: "md",
            borderRadius: "0",
            children: (0, _v6.jsxs)(_v18.Text, {
              variant: "body-xl",
              children: [(0, _v6.jsx)("strong", {
                children: (0, _v21.translate)({
                  singular: "This profile is private: ",
                  dictionary: {
                    es: {
                      singular: "Este perfil es privado: "
                    },
                    "de-DE": {
                      singular: "Dieses Profil ist privat: "
                    },
                    "fr-FR": {
                      singular: "Ce profil est privé : "
                    },
                    "ja-JP": {
                      singular: "このプロフィールは非公開です: "
                    },
                    "ko-KR": {
                      singular: "이 프로필은 비공개입니다: "
                    },
                    "pt-BR": {
                      singular: "Este perfil é privado: "
                    },
                    "zh-CN": {
                      singular: "此个人资料为私密： "
                    }
                  }
                })
              }), (0, _v21.translate)({
                singular: "Only staff and the profile's owner can see this page",
                dictionary: {
                  es: {
                    singular: "Solo el personal y el propietario del perfil pueden ver esta página"
                  },
                  "de-DE": {
                    singular: "Nur Mitarbeiter und der Profilinhaber können diese Seite sehen"
                  },
                  "fr-FR": {
                    singular: "Seuls le personnel et le propriétaire du profil peuvent voir cette page"
                  },
                  "ja-JP": {
                    singular: "このページを閲覧できるのはスタッフとプロフィールの所有者のみです。"
                  },
                  "ko-KR": {
                    singular: "이 페이지는 직원과 프로필 소유자만 볼 수 있습니다"
                  },
                  "pt-BR": {
                    singular: "Apenas a equipe e o proprietário do perfil podem ver esta página"
                  },
                  "zh-CN": {
                    singular: "仅工作人员和个人资料所有者可查看此页面"
                  }
                }
              })]
            })
          }), (0, _v6.jsx)(_v375, {
            profile: _v13,
            editMode: _v8,
            playerAssetUrls: _v0,
            canEditPersonalInfo: _v12,
            Footer: (0, _v6.jsx)(_v25.default, {
              ..._v5
            })
          })]
        })
      })
    });
  }
  let _v390 = ({
    playerAssetUrls: _v0,
    userId: _v1,
    numericUserId: _v2,
    isPrivate: _v3,
    isMod: _v4,
    profileMeta: _v5
  }) => {
    let _v6 = (0, _v106.useViewer)(),
      _v7 = _v5.crawlable,
      _v8 = (0, _v6.jsxs)(_v7.default, {
        children: [(0, _v6.jsx)("title", {
          children: _v5.title
        }), (0, _v6.jsx)("meta", {
          name: "description",
          content: _v5.description
        }), _v5.robots && (0, _v6.jsx)("meta", {
          name: "robots",
          content: _v5.robots
        }), (0, _v6.jsx)("link", {
          rel: "canonical",
          href: _v5.canonical
        }), _v7 && (0, _v6.jsxs)(_v6.Fragment, {
          children: [_v7.hasPublicVideos && (0, _v6.jsx)("link", {
            rel: "alternate",
            type: "application/rss+xml",
            href: `${_v7.pageUrl}/videos/rss`,
            title: _v7.rssTitle
          }), (0, _v6.jsx)("meta", {
            property: "og:type",
            content: "profile"
          }), (0, _v6.jsx)("meta", {
            property: "og:site_name",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            property: "og:url",
            content: _v7.pageUrl
          }), (0, _v6.jsx)("meta", {
            property: "og:title",
            content: _v7.name
          }), _v7.portrait && (0, _v6.jsxs)(_v6.Fragment, {
            children: [(0, _v6.jsx)("meta", {
              property: "og:image",
              content: _v7.portrait
            }), (0, _v6.jsx)("meta", {
              property: "og:image:height",
              content: "640"
            }), (0, _v6.jsx)("meta", {
              property: "og:image:width",
              content: "640"
            })]
          }), (0, _v6.jsx)("meta", {
            property: "og:description",
            content: _v5.description
          }), (0, _v6.jsx)("meta", {
            property: "al:ios:app_name",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            property: "al:ios:app_store_id",
            content: "425194759"
          }), (0, _v6.jsx)("meta", {
            property: "al:ios:url",
            content: `vimeo://app.vimeo.com/users/${_v7.userId}`
          }), (0, _v6.jsx)("meta", {
            property: "al:android:app_name",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            property: "al:android:package",
            content: "com.vimeo.android.videoapp"
          }), (0, _v6.jsx)("meta", {
            property: "al:android:url",
            content: `vimeo://app.vimeo.com/users/${_v7.userId}`
          }), (0, _v6.jsx)("meta", {
            property: "al:web:should_fallback",
            content: "true"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:card",
            content: "summary"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:site",
            content: "@vimeo"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:title",
            content: _v7.name
          }), (0, _v6.jsx)("meta", {
            name: "twitter:description",
            content: _v5.description
          }), _v7.portrait && (0, _v6.jsx)("meta", {
            name: "twitter:image",
            content: _v7.portrait
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:name:iphone",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:id:iphone",
            content: "425194759"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:url:iphone",
            content: `vimeo://app.vimeo.com/users/${_v7.userId}`
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:name:ipad",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:id:ipad",
            content: "425194759"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:url:ipad",
            content: `vimeo://app.vimeo.com/users/${_v7.userId}`
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:name:googleplay",
            content: "Vimeo"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:id:googleplay",
            content: "com.vimeo.android.videoapp"
          }), (0, _v6.jsx)("meta", {
            name: "twitter:app:url:googleplay",
            content: `vimeo://app.vimeo.com/users/${_v7.userId}`
          })]
        })]
      }),
      _v9 = _v7 && (0, _v6.jsx)("div", {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: `<script type="application/ld+json">${_v7.jsonLd}</script>`
        }
      });
    return _v6 ? _v3 && !_v4 ? (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v8, (0, _v6.jsx)(_v8.SWRConfig, {
        value: {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        },
        children: (0, _v6.jsx)(_v93.default, {
          children: (0, _v6.jsx)(_v388, {
            userId: _v2
          })
        })
      })]
    }) : (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v8, _v9, (0, _v6.jsx)(_v8.SWRConfig, {
        value: {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        },
        children: (0, _v6.jsx)(_v93.default, {
          children: (0, _v6.jsx)(_v389, {
            playerAssetUrls: _v0,
            userId: _v1,
            isMod: _v4
          })
        })
      })]
    }) : (0, _v6.jsxs)(_v6.Fragment, {
      children: [_v8, _v9]
    });
  };
  function _v391({
    children: _v0
  }) {
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v11.DefaultNavigation, {
        hasThemeSupport: !0
      }), _v0]
    });
  }
  function _v392(_v0) {
    if (!_v0) return;
    let _v1 = Date.parse(_v0);
    if (!Number.isNaN(_v1)) return new Date(_v1).toISOString().slice(0, 19) + "Z";
  }
  function _v393(_v0, _v1, _v2, _v3) {
    let _v4,
      _v5,
      _v6 = String(_v0.link ?? "").split("/").pop() ?? "",
      _v7 = `https://${_v1}/${_v6}`,
      _v8 = _v7.toLowerCase();
    if (!_v2) return {
      title: "Vimeo",
      description: (0, _v14.translate)({
        singular: "Join the web’s most supportive community of creators and get high-quality tools for hosting, sharing, and streaming videos in gorgeous HD with no ads.",
        dictionary: {
          es: {
            singular: "Únete a la comunidad de creadores más solidaria de la web y consigue herramientas de alta calidad para alojar, compartir y transmitir vídeos en un impresionante HD sin anuncios."
          },
          "de-DE": {
            singular: "Tritt der unterstützendsten Community von Kreativen im Web bei und erhalte hochwertige Tools zum Hosten, Teilen und Streamen von Videos in wunderschönem HD ganz ohne Werbung."
          },
          "fr-FR": {
            singular: "Rejoignez la communauté de créateurs la plus solidaire du web et bénéficiez d'outils de haute qualité pour héberger, partager et diffuser des vidéos magnifiques en HD, sans publicité."
          },
          "ja-JP": {
            singular: "ウェブで最も支え合うクリエイターコミュニティに参加し、広告なしで美しい HD 画質の動画をホスティング、共有、ストリーミングするための高品質なツールを入手しましょう。"
          },
          "ko-KR": {
            singular: "웹에서 가장 든든하게 지지하는 크리에이터 커뮤니티에 가입하고 광고 없는 아름다운 HD 화질로 동영상을 호스팅, 공유, 스트리밍할 수 있는 고품질 도구를 받으세요."
          },
          "pt-BR": {
            singular: "Junte-se à comunidade de criadores mais acolhedora da web e obtenha ferramentas de alta qualidade para hospedar, compartilhar e transmitir vídeos em HD deslumbrante sem anúncios."
          },
          "zh-CN": {
            singular: "加入网络上最支持创作者的社区，获取高质量的工具，用于托管、分享并以无广告的精美 HD 格式流式传输视频。"
          }
        }
      }),
      canonical: _v8
    };
    let _v9 = String(_v0.name ?? ""),
      _v10 = 0 === (_v5 = (Array.isArray(_v0.skills) ? _v0.skills.map(_v0 => _v0?.name).filter(_v0 => "string" == typeof _v0 && _v0.length > 0) : []).slice(0, 3)).length ? _v9 : (_v4 = 1 === _v5.length ? _v5[0] : 2 === _v5.length ? (0, _v14.translate)({
        singular: "{SKILL1} & {SKILL2}",
        replacements: {
          SKILL1: _v5[0],
          SKILL2: _v5[1]
        },
        dictionary: {
          "ja-JP": {
            singular: "{SKILL1} と {SKILL2}"
          },
          "pt-BR": {
            singular: "{SKILL1} e {SKILL2}"
          },
          "zh-CN": {
            singular: "{SKILL1} 和 {SKILL2}"
          }
        }
      }) : (0, _v14.translate)({
        singular: "{SKILL1}, {SKILL2} & {SKILL3}",
        replacements: {
          SKILL1: _v5[0],
          SKILL2: _v5[1],
          SKILL3: _v5[2]
        },
        dictionary: {
          "ja-JP": {
            singular: "{SKILL1}、 {SKILL2} と {SKILL3}"
          },
          "pt-BR": {
            singular: "{SKILL1}, {SKILL2} e {SKILL3}"
          },
          "zh-CN": {
            singular: "{SKILL1}、{SKILL2} 和 {SKILL3}"
          }
        }
      }), `${_v9} - ${_v4}`),
      _v11 = "string" == typeof _v0.bio ? _v0.bio : "",
      _v12 = _v11 ? function (_v0) {
        let _v1 = 160;
        !/[a-z]/.test(_v0) && /[A-Z]/.test(_v0) && (_v1 = 80);
        let _v2 = _v0;
        if (_v2.length > _v1 + 8) {
          let _v0 = _v2.slice(_v1).indexOf(" ");
          -1 !== _v0 && (_v2 = _v2.slice(0, _v1 + _v0) + "…");
        }
        return _v2.replace(/\r\n|\r|\n/g, " ").trim();
      }(_v11) : (0, _v14.translate)({
        singular: "{USER_NAME} is a member of Vimeo, the home for high quality videos and the people who love them.",
        replacements: {
          USER_NAME: _v9
        },
        dictionary: {
          es: {
            singular: "{USER_NAME} es miembro de Vimeo, el hogar de vídeos de alta calidad y de las personas que los aman."
          },
          "de-DE": {
            singular: "{USER_NAME} ist Mitglied bei Vimeo, dem Zuhause für hochwertige Videos und die Menschen, die sie lieben."
          },
          "fr-FR": {
            singular: "{USER_NAME} est membre de Vimeo, la plateforme des vidéos de haute qualité et des personnes qui les aiment."
          },
          "ja-JP": {
            singular: "{USER_NAME} は、高品質な動画とそれを愛する人々のための場である Vimeo のメンバーです。"
          },
          "ko-KR": {
            singular: "{USER_NAME}은 고품질 동영상과 그것을 사랑하는 사람들이 모이는 Vimeo의 회원입니다."
          },
          "pt-BR": {
            singular: "{USER_NAME} é membro do Vimeo, o lar de vídeos de alta qualidade e das pessoas que os amam."
          },
          "zh-CN": {
            singular: "{USER_NAME} 是 Vimeo 的成员，Vimeo 是高质量视频及其爱好者的家园。"
          }
        }
      });
    if (!_v3) return {
      title: _v10,
      description: _v12,
      canonical: _v8,
      robots: "noindex, nofollow"
    };
    let _v13 = Number(String(_v0.uri ?? "").split("/").pop()),
      _v14 = Array.isArray(_v0.pictures?.sizes) ? _v0.pictures.sizes : [],
      _v15 = (_v14.find(_v0 => 640 === _v0.width) ?? _v14[_v14.length - 1])?.link,
      _v16 = Array.isArray(_v0.websites) ? _v0.websites.map(_v0 => _v0?.link).filter(_v0 => "string" == typeof _v0 && _v0.length > 0).map(_v0 => /^https?:\/\//.test(_v0) ? _v0 : `https://${_v0}`) : [],
      _v17 = Number(_v0.metadata?.connections?.followers?.total ?? 0),
      _v18 = Number(_v0.metadata?.connections?.videos?.total ?? 0),
      _v19 = {
        "@context": "http://schema.org",
        "@graph": [{
          dateCreated: _v392(_v0.createdTime),
          dateModified: _v392(_v0.lastVideoUploadDate) ?? _v392(_v0.createdTime),
          url: _v7,
          mainEntity: {
            "@type": "Person",
            name: _v9,
            identifier: _v13,
            alternateName: _v6,
            interactionStatistic: {
              "@type": "InteractionCounter",
              interactionType: "https://schema.org/FollowAction",
              userInteractionCount: _v17
            },
            agentInteractionStatistic: {
              "@type": "InteractionCounter",
              interactionType: "https://schema.org/WriteAction",
              userInteractionCount: _v18
            },
            description: _v11,
            image: _v15,
            url: `/${_v6}`,
            sameAs: [_v7, ..._v16]
          },
          potentialAction: {
            "@type": "ViewAction",
            target: `vimeo://app.vimeo.com/users/${_v13}`
          },
          "@type": "ProfilePage"
        }]
      };
    return {
      title: _v10,
      description: _v12,
      canonical: _v8,
      crawlable: {
        pageUrl: _v7,
        name: _v9,
        userId: _v13,
        portrait: _v15,
        rssTitle: `${_v9}'s Videos`,
        hasPublicVideos: _v18 > 0,
        jsonLd: JSON.stringify(_v19).replace(/[<>&]/g, _v0 => `\\u${_v0.charCodeAt(0).toString(16).padStart(4, "0")}`)
      }
    };
  }
  _v390.getLayout = function (_v0) {
    return (0, _v6.jsx)(_v391, {
      children: _v0
    });
  }, (0, _v10.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = (_v1 = _v0.query.userId.match(/^user([0-9]{1,50})$/)) ? Number(_v1[1]) : null,
      _v3 = _v0.query.userId;
    if ("auth" === _v3) return {
      notFound: !0
    };
    let _v4 = null;
    try {
      _v4 = await (0, _v12.getUser)({
        where: {
          userId: _v2 ?? _v3
        },
        select: ["profileDiscovery", "isOwner", "link", "uri", "name", "bio", "createdTime", "lastVideoUploadDate", "skills.name", "pictures.sizes", "websites.link", "metadata.connections.viewProfile.disabled", "metadata.connections.viewProfile.modOverride", "metadata.connections.followers.total", "metadata.connections.videos.total"],
        baseUrl: _v0.baseUrl,
        headers: _v0.headers
      });
    } catch {
      return {
        notFound: !0
      };
    }
    let _v5 = !!_v4.metadata?.connections?.viewProfile?.disabled,
      _v6 = !!_v4.metadata?.connections?.viewProfile?.modOverride,
      _v7 = !!_v4.profileDiscovery && !_v5 || !!_v4.isOwner,
      _v8 = _v0.vimeoConfig.get("vimeo_url"),
      _v9 = _v2 ?? Number(_v4.uri?.split("/").pop()),
      _v10 = Number.isFinite(_v9) && _v9 > 0,
      _v11 = {
        isPrivate: _v5,
        isMod: _v6,
        userId: _v2 ?? _v3,
        numericUserId: _v9,
        hasThemeSupport: !0,
        layoutOptions: {
          headerFixed: !0
        }
      },
      _v12 = _v4.link.split("/").pop();
    if (null !== _v2 && `user${_v2}` !== _v12) return {
      redirect: {
        destination: `/${_v12}`,
        permanent: !0
      }
    };
    if (_v5 && !_v6) return _v0.res.statusCode = 410, (0, _v9.setCacheHeaders)(_v0.req, _v0.res, {
      ttl: 0
    }), {
      props: {
        ..._v11,
        profileMeta: _v393(_v4, _v8, _v7, !0)
      }
    };
    let _v13 = !0;
    if (_v7 && _v10) {
      let _v0 = await (0, _v13.getUserCapabilities)({
        where: {
          userId: _v9
        },
        select: ["crawlableContent"],
        baseUrl: _v0.baseUrl,
        headers: _v0.headers
      }).catch(() => null);
      _v0 && "boolean" == typeof _v0.crawlableContent && (_v13 = _v0.crawlableContent);
    }
    return (_v4.metadata?.connections?.videos?.total ?? 0) === 0 && _v0.res.setHeader("X-Robots-Tag", "noindex, follow"), _v10 && (0, _v9.setCacheHeaders)(_v0.req, _v0.res, {
      ttl: 600,
      keys: {
        user: _v9
      }
    }), {
      props: {
        ..._v11,
        profileMeta: _v393(_v4, _v8, _v7, _v13)
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0,
    inlineModbox: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v390], 0);
}