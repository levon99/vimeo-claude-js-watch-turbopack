{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
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
    _v31 = _v31,
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  function _v35() {
    return (0, _v14.jsx)(_v36, {
      children: (0, _v14.jsx)(_v34.Spinner, {
        size: "xl"
      })
    });
  }
  let _v36 = _v33.default.div.withConfig({
    displayName: "AppLoader__LoaderWrapper",
    componentId: "sc-9b6082b8-0"
  })`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  function _v40() {
    let _v0 = (0, _v22.useContext)(_v39.NotificationOptionsContext);
    return (0, _v14.jsx)(_v33.ThemeProvider, {
      theme: _v38.themes.dark,
      children: (0, _v14.jsx)(_v37.Notification, {
        ..._v0
      })
    });
  }
  let _v41 = _v22.default.createContext({
      mutate: () => Promise.resolve(),
      isValidating: !1
    }),
    _v42 = _v22.default.createContext({
      isValidating: !1,
      mutate: () => Promise.resolve([])
    });
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  function _v68({
    onClick: _v0,
    buttonText: _v1 = "Add",
    ..._v2
  }) {
    return (0, _v14.jsxs)(_v69, {
      onClick: _v0,
      ..._v2,
      children: [(0, _v14.jsx)(_v67.PlusCircle, {
        color: "gray.500",
        boxSize: 20
      }), (0, _v14.jsx)(_v70, {
        size: "2",
        children: _v1
      })]
    });
  }
  let _v69 = _v33.default.div.withConfig({
      displayName: "Add__AddContainer",
      componentId: "sc-acbc4b62-0"
    })`
  cursor: pointer;
  width: 100%;
  display: flex;
  margin-left: ${(0, _v51.rem)(10)};
  height: ${(0, _v51.rem)(40)};
  display: flex;
  align-items: center;

  &:hover {
    svg path {
      fill: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v53.bokehTheme.colors.white : _v53.bokehTheme.colors.gray["800"]};
    }
    p {
      color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v53.bokehTheme.colors.white : _v53.bokehTheme.colors.gray["800"]};
    }
  }
`,
    _v70 = (0, _v33.default)(_v57.Paragraph).withConfig({
      displayName: "Add__AddText",
      componentId: "sc-acbc4b62-1"
    })`
  display: inline-block;
  margin-left: ${(0, _v51.rem)(8)};
  margin-bottom: 0;
  color: ${_v53.bokehTheme.colors.gray["500"]};
`;
  var _v71 = _v0.i(0);
  let _v72 = _v33.default.div.withConfig({
      displayName: "CommonStyles__ErrorMsg",
      componentId: "sc-16731caa-0"
    })`
  font-weight: 400;
  font-size: ${(0, _v51.rem)(12)};
  line-height: ${(0, _v51.rem)(16)};
  margin-top: ${(0, _v51.rem)(10)};
  color: ${_v53.bokehTheme.colors.red["500"]};
`,
    _v73 = _v33.css`
  ${_v61.media.md`
    &:hover {
      cursor: text;
      border: ${(0, _v51.rem)(1)} solid ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["50"], .6)};
      border-radius: ${(0, _v51.rem)(3)};
      background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["50"], .6)};
    }
  `}
`;
  _v33.css`
  border: ${(0, _v51.rem)(2)} solid ${_v53.bokehTheme.colors.red["500"]};
`, _v33.default.div.withConfig({
    displayName: "CommonStyles__SectionWrapper",
    componentId: "sc-16731caa-1"
  })`
  padding-top: ${(0, _v51.rem)(25)};
  ${({
    hasFirstSectionTitle: _v0
  }) => _v0 && _v33.css`
      padding-top: 0;
    `}
`;
  let _v74 = _v33.default.div.withConfig({
    displayName: "CommonStyles__BadgeWrapper",
    componentId: "sc-16731caa-2"
  })`
  display: inline-block;
`;
  (0, _v33.default)(_v71.Text).attrs({
    format: "soft"
  }).withConfig({
    displayName: "CommonStyles__RateTitle",
    componentId: "sc-16731caa-3"
  })`
  display: block;
  font-size: ${(0, _v51.rem)(20)};
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(.22)};
  line-height: ${(0, _v51.rem)(24)};
  margin-bottom: ${(0, _v51.rem)(9)};
`;
  let _v75 = (_v0, _v1) => _v33.css`
  width: calc(50% - ${(0, _v51.rem)(_v0)});
  margin: ${(0, _v51.rem)(_v1)} 0;
  &:nth-child(2n) {
    margin-left: ${(0, _v51.rem)(_v0)};
  }
  &:nth-child(2n + 1) {
    margin-right: ${(0, _v51.rem)(_v0)};
  }
`,
    _v76 = _v33.default.article.withConfig({
      displayName: "CommonStyles__FilterGridItem",
      componentId: "sc-16731caa-4"
    })`
  margin: ${(0, _v51.rem)(_v49.GRID_GAP.DEFAULT / 2)} 0;

  ${_v61.media.sm`
    display: inline-block;
    ${_v75(9, _v49.GRID_GAP.SM_TOP / 2)};
  `}

  ${_v61.media.hd`
    ${_v75(12, _v49.GRID_GAP.HD_TOP / 2)};
  `}

  ${_v61.media.xhd`
    ${_v75(20, _v49.GRID_GAP.XHD / 2)};
  `}
`,
    _v77 = (0, _v33.default)(_v56.Modal).withConfig({
      displayName: "CommonStyles__VideoPickerModal",
      componentId: "sc-16731caa-5"
    })`
  width: 90vw;
  height: 85vh;
  max-width: ${(0, _v51.rem)(662)};
  max-height: ${(0, _v51.rem)(752)};
`,
    _v78 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "CommonStyles__FollowButton",
      componentId: "sc-16731caa-6"
    })`
  height: ${(0, _v51.rem)(40)};
  width: ${(0, _v51.rem)(40)};
  min-width: ${(0, _v51.rem)(40)};
  margin-right: ${(0, _v51.rem)(10)};
  padding: 0;
  svg {
    margin-right: 0;
  }
  ${_v61.media.md`
    width: 100%;
    svg {
      margin-right: ${(0, _v51.rem)(4)};
    }
  `}

  #dismiss-icon,
  #unfollow-text {
    display: none;
  }
  #check-icon,
  #following-text {
    display: inline-flex;
  }
  ${_v61.media.md`
    &:hover {
      #dismiss-icon,
      #unfollow-text {
        display: inline-flex;
      }
      #check-icon,
      #following-text {
        display: none;
      }
    }
  `}
`;
  var _v79 = _v0.i(0);
  function _v80({
    onClick: _v0,
    inlineMargin: _v1
  }) {
    return (0, _v14.jsx)(_v81, {
      inlineMargin: _v1,
      onClick: _v0,
      children: (0, _v14.jsx)(_v79.EditPencil, {
        verticalAlign: "text-bottom",
        color: "gray.300",
        boxSize: 20
      })
    });
  }
  let _v81 = _v33.default.div.withConfig({
    displayName: "EditIcon__PencilWrapper",
    componentId: "sc-2fe12332-0"
  })`
  display: inline-block;
  vertical-align: text-bottom;
  cursor: pointer;
  ${_v61.media.md`
    display: none;
  `}
  ${({
    inlineMargin: _v0
  }) => _v0 && _v33.css`
      margin-left: ${(0, _v51.rem)(6)};
    `}
`;
  function _v82(_v0) {
    let _v1 = _v0.value ?? "",
      {
        editMode: _v2
      } = (0, _v22.useContext)(_v43.default);
    return _v2 ? (0, _v14.jsx)(_v84, {
      ..._v0,
      value: _v1
    }) : (0, _v14.jsx)(_v85, {
      value: _v1
    });
  }
  let _v83 = (0, _v64.withCharacterCount)(_v63.TextArea);
  function _v84({
    maxLength: _v0 = _v49.ABOUT_MAX_CHAR_COUNT,
    placeholder: _v1 = _v66.default.TellPeopleAboutYourself,
    onUpdate: _v2,
    value: _v3 = "",
    isDesktopView: _v4
  }) {
    let [_v5, _v6] = (0, _v22.useState)(!1),
      [_v7, _v8] = (0, _v22.useState)(_v3 || ""),
      [_v9, _v10] = (0, _v22.useState)(!1),
      {
        userId: _v11
      } = (0, _v22.useContext)(_v43.default),
      {
        trackUserProfileEditFieldClicked: _v12
      } = (0, _v30.useProfileTracking)(),
      _v13 = () => {
        _v12({
          userProfilePageUserId: String(_v11),
          userProfileEditField: "add_bio"
        }), _v6(!0);
      },
      _v14 = (0, _v22.useCallback)(_v0 => {
        _v0 && _v0.setSelectionRange(_v3.length, _v3.length);
      }, [_v3]),
      _v15 = (0, _v22.useRef)(null);
    return (0, _v22.useEffect)(() => {
      _v3 && _v10(_v3.length > _v49.MINIMUM_BIO_LENGTH);
    }, [_v3]), (0, _v14.jsx)(_v87, {
      tabIndex: 0,
      onKeyDown: _v0 => !_v5 && (0, _v50.onTab)(_v0, _v13),
      children: _v5 ? (0, _v14.jsx)(_v91, {
        autoFocus: !0,
        ref: _v14,
        defaultValue: _v7,
        maxCharacters: _v0,
        maxLength: _v0,
        singular: _v66.default.Character,
        plural: _v66.default.Characters,
        onKeyDown: _v0 => {
          _v0.keyCode === _v49.KeyCodes.ESC && (_v8(_v3), _v6(!1));
        },
        placeholder: _v1,
        onBlur: () => {
          _v7.trim() || _v3 ? _v3 !== _v7 && _v2({
            bio: _v7
          }) : _v8(""), _v10(_v7.length > _v49.MINIMUM_BIO_LENGTH), _v6(!1);
        },
        onChange: _v0 => _v8(_v0.target.value)
      }) : _v7.length ? (0, _v14.jsxs)(_v89, {
        children: [(0, _v14.jsx)(_v86, {
          text: _v7,
          isCollapsed: _v9,
          setIsCollapsed: _v10,
          onClick: _v13,
          onMouseEnter: () => {
            _v4 && _v10(!1);
          },
          onMouseLeave: () => {
            _v4 && (_v10(_v7.length > _v49.MINIMUM_BIO_LENGTH), _v15 && _v15.current && (_v15.current.scrollTop = 0));
          },
          textRef: _v15,
          editMode: !0
        }), (0, _v14.jsx)(_v80, {
          inlineMargin: !0,
          onClick: _v13
        })]
      }) : (0, _v14.jsx)(_v68, {
        onClick: _v13,
        buttonText: _v66.default.AddBio
      })
    });
  }
  function _v85({
    value: _v0
  }) {
    let [_v1, _v2] = (0, _v22.useState)(!1);
    return (0, _v22.useEffect)(() => {
      _v0 && _v2(_v0.length > _v49.MINIMUM_BIO_LENGTH);
    }, [_v0]), _v0 ? (0, _v14.jsx)(_v87, {
      children: (0, _v14.jsx)(_v86, {
        text: _v0,
        isCollapsed: _v1,
        setIsCollapsed: _v2
      })
    }) : null;
  }
  function _v86({
    text: _v0,
    isCollapsed: _v1,
    setIsCollapsed: _v2,
    onClick: _v3,
    onMouseEnter: _v4,
    onMouseLeave: _v5,
    textRef: _v6,
    editMode: _v7
  }) {
    return (0, _v14.jsx)(_v90, {
      ref: _v6,
      onClick: _v3,
      onMouseEnter: () => _v4 && _v4(),
      onMouseLeave: () => _v5 && _v5(),
      showWhiteSpaces: !_v1,
      editMode: _v7,
      children: _v0.length > _v49.MINIMUM_BIO_LENGTH && _v1 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v65.default, {
          text: (0, _v62.default)(_v0, {
            length: _v49.MINIMUM_BIO_LENGTH
          }),
          customLinkCss: _v93
        }), (0, _v14.jsx)(_v92, {
          onClick: () => _v2(!1),
          children: _v66.default.ReadMore
        })]
      }) : (0, _v14.jsx)(_v65.default, {
        text: _v0,
        customLinkCss: _v93
      })
    });
  }
  let _v87 = _v33.default.div.withConfig({
      displayName: "About__Container",
      componentId: "sc-899f457e-0"
    })`
  margin-top: ${(0, _v51.rem)(10)};
  &:hover {
    outline: none;
  }
  ${_v61.media.md`
    padding: 0;
    margin-top: ${(0, _v51.rem)(2)};
  `}
`,
    _v88 = _v33.css`
  ${_v73}
  max-height: ${(0, _v51.rem)(100)};
  transition: max-height 0.3s ease-in;
  &:hover {
    max-height: ${(0, _v51.rem)(140)};
    overflow-y: auto;
  }
`,
    _v89 = _v33.default.div.withConfig({
      displayName: "About__EditViewWrapper",
      componentId: "sc-899f457e-1"
    })`
  ${_v61.media.md`
    padding: 0;
  `}
`,
    _v90 = _v33.default.div.withConfig({
      displayName: "About__AboutText",
      componentId: "sc-899f457e-2"
    })`
  font-size: ${(0, _v51.rem)(14)};
  line-height: ${(0, _v51.rem)(20)};
  ${({
      showWhiteSpaces: _v0
    }) => _v0 && _v33.css`
      white-space: pre-wrap;
    `};
  word-break: break-word;
  box-sizing: border-box;
  border: ${(0, _v51.rem)(1)} solid transparent;
  padding: ${(0, _v51.rem)(10)} 0;
  display: inline;
  padding-left: ${(0, _v51.rem)(10)};
  ${_v61.media.md`
    display: block;
    padding: ${(0, _v51.rem)(10)};
  `}
  ${({
      editMode: _v0
    }) => _v0 && _v88}
`,
    _v91 = (0, _v33.default)(_v83).withConfig({
      displayName: "About__TextAreaField",
      componentId: "sc-899f457e-3"
    })`
  resize: vertical;
  min-height: ${(0, _v51.rem)(140)};
  padding: ${(0, _v51.rem)(10)};
`,
    _v92 = _v33.default.span.withConfig({
      displayName: "About__ReadMore",
      componentId: "sc-899f457e-4"
    })`
  text-decoration: underline;
  cursor: pointer;
`,
    _v93 = _v33.css`
  text-decoration: underline;
  color: ${_v53.bokehTheme.colors.gray["800"]};
`;
  var _v94 = _v0.i(0);
  let _v95 = (_v0, _v1) => {
      let _v2 = [Math.floor(_v0 / 0), Math.floor(_v0 / 60) % 60, Math.floor(_v0 % 60)].map(_v0 => _v0 < 10 ? "0" + _v0 : _v0);
      return "hh:mm:SS" === _v1 ? _v2.join(":") : _v2.filter((_v0, _v1) => "00" !== _v0 || _v1 > 0).join(":");
    },
    _v96 = (_v0, _v1 = "en", _v2) => new Date(_v0).toLocaleString(_v1, _v2 || {
      year: "numeric",
      month: "short"
    });
  var _v97 = _v0.i(0);
  let _v98 = _v0 => {
      switch (_v0) {
        case _v97.BadgeType.Alum:
          return "alum";
        case _v97.BadgeType.Business:
          return "business";
        case _v97.BadgeType.LiveBusiness:
        case _v97.BadgeType.LivePremium:
        case _v97.BadgeType.LivePro:
          return "live";
        case _v97.BadgeType.Plus:
          return "plus";
        case _v97.BadgeType.Pro:
          return "pro";
        case _v97.BadgeType.Sponsor:
          return "sponsor";
        case _v97.BadgeType.Staff:
          return "staff";
        default:
          return "default";
      }
    },
    _v99 = _v33.default.div.withConfig({
      displayName: "InfoCard",
      componentId: "sc-8468e6c3-0"
    })`
  box-sizing: border-box;
  background-color: transparent;
  position: relative;
  ${({
      withoutEffects: _v0,
      fullWidth: _v1 = !1
    }) => !_v0 && _v33.css`
        padding: ${_v1 ? `${(0, _v51.rem)(25)} 0 ${(0, _v51.rem)(28)}` : `${(0, _v51.rem)(25)} ${(0, _v51.rem)(24)} ${(0, _v51.rem)(28)}`};
        border-radius: ${(0, _v51.rem)(8)};
        border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["100"]};
        background: ${({
      theme: _v0
    }) => _v0.content.background};
      `}
  margin-bottom: ${(0, _v51.rem)(12)};
`;
  function _v100({
    totalAlbums: _v0,
    totalFollowers: _v1,
    totalFollowing: _v2,
    totalCollections: _v3,
    membership: _v4,
    createdTime: _v5,
    userLink: _v6,
    userId: _v7,
    disableCollections: _v8 = !1
  }) {
    return (0, _v14.jsxs)(_v99, {
      fullWidth: !0,
      children: [(0, _v14.jsx)(_v102, {
        element: "p",
        format: "soft",
        children: _v66.default.Activity
      }), (0, _v14.jsx)(_v101, {
        text: _v66.default.Showcases,
        href: `${_v6}/albums`,
        count: _v0,
        linkType: "showcases",
        userId: _v7
      }), (0, _v14.jsx)(_v101, {
        text: _v66.default.Followers,
        href: `${_v6}/following/followers/sort:date`,
        count: _v1,
        linkType: "followers",
        userId: _v7
      }), (0, _v14.jsx)(_v101, {
        text: _v66.default.Following,
        href: `${_v6}/following`,
        count: _v2,
        linkType: "following",
        userId: _v7
      }), _v8 ? null : (0, _v14.jsx)(_v101, {
        text: _v66.default.Collections,
        href: `${_v6}/collections`,
        count: _v3,
        linkType: "collections",
        userId: _v7
      }), _v4?.type && (0, _v14.jsxs)(_v106, {
        children: [(0, _v14.jsx)(_v105, {
          children: _v66.default.MembershipPlan
        }), (0, _v14.jsx)(_v74, {
          children: (0, _v14.jsx)(_v94.Badge, {
            size: "sm",
            format: _v98(_v4?.type),
            children: _v4?.text
          })
        })]
      }), (0, _v14.jsxs)(_v106, {
        children: [(0, _v14.jsx)(_v105, {
          children: _v66.default.MemberSince
        }), (0, _v14.jsx)(_v105, {
          children: _v96(_v5)
        })]
      })]
    });
  }
  function _v101({
    text: _v0,
    href: _v1,
    count: _v2,
    linkType: _v3,
    userId: _v4
  }) {
    let {
        trackUserProfilePageActivityLinkClicked: _v5
      } = (0, _v30.useProfileTracking)(),
      _v6 = _v2 > 0;
    return (0, _v14.jsx)(_v103, {
      ...(_v6 ? {
        as: "a",
        href: _v1,
        isLink: _v6
      } : {
        as: "span",
        isLink: _v6
      }),
      onClick: () => {
        _v5({
          userProfilePageUserId: String(_v4),
          userProfilePageLinkType: _v3
        });
      },
      children: (0, _v14.jsxs)(_v104, {
        children: [(0, _v14.jsx)(_v71.Text, {
          format: "soft",
          children: _v0
        }), (0, _v14.jsx)(_v71.Text, {
          format: "soft",
          children: _v2.toLocaleString()
        })]
      })
    });
  }
  let _v102 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "Activity__Title",
      componentId: "sc-8b3dd3fe-0"
    })`
  font-size: ${(0, _v51.rem)(20)};
  font-weight: bold;
  margin: ${(0, _v51.rem)(25)} ${(0, _v51.rem)(35)} ${(0, _v51.rem)(5)} ${(0, _v51.rem)(35)};
`,
    _v103 = _v33.default.a.withConfig({
      displayName: "Activity__InfoRow",
      componentId: "sc-8b3dd3fe-1"
    })`
  padding: 0 ${(0, _v51.rem)(35)};
  display: block;
  text-decoration: none;
  ${({
      isLink: _v0
    }) => _v0 && _v33.css`
      &:hover {
        background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["50"], .6)};
      }
    `}
`,
    _v104 = _v33.default.div.withConfig({
      displayName: "Activity__BorderBox",
      componentId: "sc-8b3dd3fe-2"
    })`
  border-bottom: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["100"]};
  padding: ${(0, _v51.rem)(10)} 0;
  display: flex;
  justify-content: space-between;
`,
    _v105 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "Activity__GreyText",
      componentId: "sc-8b3dd3fe-3"
    })`
  color: ${_v53.bokehTheme.colors.gray["500"]};
`,
    _v106 = _v33.default.div.withConfig({
      displayName: "Activity__FlexInfoRow",
      componentId: "sc-8b3dd3fe-4"
    })`
  padding: 0 ${(0, _v51.rem)(35)};
  display: flex;
  justify-content: space-between;
  margin-top: ${(0, _v51.rem)(10)};
`;
  var _v107 = _v0.i(0);
  function _v108(_v0, _v1, _v2) {
    let _v3 = {
      product: "Profile Page",
      path: window.location.pathname,
      location: "profile_page"
    };
    _v107.BigPictureClient.sendEvent(new _v107.Event(_v0, _v1, {
      ..._v3,
      ..._v2
    }));
  }
  function _v109({
    userId: _v0,
    categories: _v1,
    selected: _v2,
    onCategoryChange: _v3
  }) {
    let _v4 = (0, _v22.useRef)(null),
      _v5 = (0, _v22.useRef)(null),
      [_v6, _v7] = (0, _v22.useState)(!1),
      [_v8, _v9] = (0, _v22.useState)(0),
      _v10 = (0, _v22.useMemo)(() => (_v1 || []).length, [_v1]),
      {
        width: _v11
      } = (0, _v60.useWindowSize)();
    (0, _v22.useEffect)(() => {
      (() => {
        let _v0 = document.querySelectorAll(".category-tag"),
          _v1 = _v4.current,
          _v2 = 0;
        if (_v1 && _v0.length > 0 && _v10 > 0) {
          let _v0 = _v1.getBoundingClientRect(),
            _v1 = _v0.top;
          if (_v0.forEach(_v0 => {
            let _v1 = _v0.getBoundingClientRect().top;
            (_v1 === _v1 || _v1 - 39 === _v1) && _v2++;
          }), _v10 && _v10 + 1 > _v2 && _v11 >= _v61.BreakPoints.sm) {
            let _v0 = _v0[_v2 - 1].getBoundingClientRect();
            _v5.current && _v0.right - _v0.right < _v5.current?.offsetWidth && (_v2 -= 1);
          }
        }
        _v9(_v2);
      })();
    }, [_v10, _v11, _v5]), (0, _v22.useEffect)(() => {
      _v10 && _v10 + 1 > _v8 && _v7(!0);
    }, [_v8, _v4, _v10]);
    let _v12 = (_v0, _v1) => {
      let _v2 = _v0 => {
          _v2?.word !== _v0.word && (_v108(_v49.BPEvent.CLICK_TO_CATEGORY, 1, {
            profile_id: _v0
          }), _v3(_v0));
        },
        _v3 = () => {
          _v108(_v49.BPEvent.CLICK_TO_CATEGORY, 1, {
            profile_id: _v0
          }), _v2?.word && _v3(void 0);
        };
      return (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v112, {
          tabIndex: 0,
          role: "button",
          selected: !_v2,
          onClick: _v3,
          onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v3),
          className: _v1,
          children: _v66.default.All
        }), _v0.map((_v0, _v1) => _v0 && (0, _v14.jsx)(_v112, {
          tabIndex: 0,
          role: "button",
          selected: _v2?.word === _v0.word,
          onClick: () => _v2(_v0),
          onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v2(_v0)),
          className: _v1,
          children: _v0.name
        }, `${_v0.word}_${_v1}`))]
      });
    };
    return _v10 ? (0, _v14.jsxs)(_v110, {
      children: [(0, _v14.jsx)(_v111, {
        ref: _v4,
        children: _v12(_v1, "category-tag")
      }), (0, _v14.jsxs)("div", {
        children: [_v12(_v6 ? _v1.slice(0, _v8 - 1) : _v1), _v8 > 0 && _v10 && _v10 + 1 > _v8 && (0, _v14.jsx)(_v113, {
          ref: _v5,
          onClick: () => _v7(!_v6),
          onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v7(!_v6)),
          children: _v6 ? _v66.default.ViewAll : _v66.default.ViewLess
        })]
      })]
    }) : null;
  }
  let _v110 = _v33.default.div.withConfig({
      displayName: "Categories__Wrapper",
      componentId: "sc-9e7a6104-0"
    })`
  padding-bottom: ${(0, _v51.rem)(25)};
  position: relative;
`,
    _v111 = _v33.default.div.withConfig({
      displayName: "Categories__PseudoContainer",
      componentId: "sc-9e7a6104-1"
    })`
  visibility: hidden;
  height: ${(0, _v51.rem)(78)};
  position: absolute;
`,
    _v112 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "Categories__Tag",
      componentId: "sc-9e7a6104-2"
    })`
  display: inline-block;
  cursor: pointer;
  margin-right: ${(0, _v51.rem)(10)};
  margin-bottom: ${(0, _v51.rem)(5)};
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
  font-weight: bold;
  padding: ${(0, _v51.rem)(5)} ${(0, _v51.rem)(8)};
  border-radius: ${(0, _v51.rem)(15)};
  min-width: ${(0, _v51.rem)(50)};
  height: ${(0, _v51.rem)(34)};
  text-align: center;
  box-sizing: border-box;
  border: ${(0, _v51.rem)(1)} solid transparent;
  &:hover {
    background-color: ${_v53.bokehTheme.colors.gray["100"]};
  }
  &:focus {
    outline: none;
    border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["800"]};
  }
  ${({
      selected: _v0
    }) => _v0 && _v33.css`
      background-color: ${_v53.bokehTheme.colors.gray["800"]};
      color: ${_v53.bokehTheme.colors.white};
      &:hover {
        background-color: ${_v53.bokehTheme.colors.gray["800"]};
      }
    `}
`,
    _v113 = _v33.default.button.withConfig({
      displayName: "Categories__ViewText",
      componentId: "sc-9e7a6104-3"
    })`
  color: ${_v53.bokehTheme.colors.blue["500"]};
  font-size: ${(0, _v51.rem)(14)};
  cursor: pointer;
  display: block;
  background: transparent;
  border: none;
  ${_v61.media.sm`
    display: inline;
  `}
`;
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  function _v117(_v0) {
    return _v0.sizes.sort((_v0, _v1) => _v0.width > _v1.width ? 1 : _v0.width < _v1.width ? -1 : 0);
  }
  function _v118(_v0, _v1 = .5625) {
    let _v2 = _v0.pictures.sizes[0],
      _v3 = `_${_v2.width}x${_v2.height}`,
      _v4 = _v117(_v0.pictures).filter(_v0 => _v0.width > 600);
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
  function _v119(_v0) {
    let _v1 = _v117(_v0),
      _v2 = _v1.filter(_v0 => _v0.width > 250);
    return 0 === _v2.length && (_v2 = _v1.filter(_v0 => _v0.width > 100)), _v2.map((_v0, _v1) => `${_v0.link} ${_v1 + 2}x`).join(", ");
  }
  var _v120 = _v0.i(0);
  function _v121() {
    return (0, _v14.jsx)(_v122, {
      children: (0, _v14.jsx)(_v34.Spinner, {
        size: "lg"
      })
    });
  }
  let _v122 = _v33.default.div.withConfig({
    displayName: "LoadingStateCard__EmptyCard",
    componentId: "sc-a8ce60f9-0"
  })`
  width: ${(0, _v51.rem)(320)};
  height: ${(0, _v51.rem)(350)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(0, _v51.rem)(9)};
  background-color: ${_v53.bokehTheme.colors.white};
  box-shadow:
    0 ${(0, _v51.rem)(15)} ${(0, _v51.rem)(12)} 0 rgba(0, 0, 0, 0.17),
    0 ${(0, _v51.rem)(19)} ${(0, _v51.rem)(38)} 0 rgba(0, 0, 0, 0.25);
`;
  var _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  let _v126 = (_v0, _v1, _v2, _v3) => _v33.css`
    color: ${_v2};
    font-size: ${(0, _v51.rem)(_v0)};
    line-height: ${(0, _v51.rem)(_v1)};
    font-weight: ${_v3};
  `,
    _v127 = _v33.css`
  width: 100%;
  height: 100%;
`,
    _v128 = _v33.keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`,
    _v129 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__CardContentWrapper",
      componentId: "sc-7547aaa0-0"
    })`
  min-width: ${(0, _v51.rem)(275)};
  position: relative;
  top: 0;
  border-radius: ${(0, _v51.rem)(9)};
  animation: 0.5s ${_v128} ease-out 1;
  background-color: ${_v53.bokehTheme.colors.white};
  transition: top 0.3s ease;
  z-index: 1;
  box-shadow:
    0 ${(0, _v51.rem)(15)} ${(0, _v51.rem)(12)} 0 rgba(0, 0, 0, 0.17),
    0 ${(0, _v51.rem)(19)} ${(0, _v51.rem)(38)} 0 rgba(0, 0, 0, 0.25);
  width: ${(0, _v51.rem)(320)};
  border: none;
  padding-bottom: ${(0, _v51.rem)(20)};
`,
    _v130 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__CardTop",
      componentId: "sc-7547aaa0-1"
    })`
  border-radius: ${(0, _v51.rem)(9)} ${(0, _v51.rem)(9)} 0 0;
  height: ${(0, _v51.rem)(70)};
  overflow: hidden;
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
`,
    _v131 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__CardBottom",
      componentId: "sc-7547aaa0-2"
    })`
  position: relative;
  padding: ${(0, _v51.rem)(15)} ${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)};
`,
    _v132 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__AvatarWrapper",
      componentId: "sc-7547aaa0-3"
    })`
  width: ${(0, _v51.rem)(91)};
  height: ${(0, _v51.rem)(91)};
  position: absolute;
  top: -${(0, _v51.rem)(50.5)};
  left: ${(0, _v51.rem)(19.5)};
`,
    _v133 = (0, _v33.default)(_v114.Avatar).withConfig({
      displayName: "ProfileCard.styles__AvatarCustom",
      componentId: "sc-7547aaa0-4"
    })`
  ${_v127}
`,
    _v134 = _v33.css`
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`,
    _v135 = _v33.default.span.withConfig({
      displayName: "ProfileCard.styles__NameText",
      componentId: "sc-7547aaa0-5"
    })`
  ${_v126(20, 26, _v53.bokehTheme.colors.gray["800"], 500)}
  ${_v134}
  letter-spacing: ${(0, _v51.rem)(.2)};
  margin-right: ${(0, _v51.rem)(6)};
  cursor: pointer;
  &:hover {
    color: ${_v53.bokehTheme.colors.blue["500"]};
    text-decoration: underline;
  }
`,
    _v136 = (0, _v33.default)(_v94.Badge).withConfig({
      displayName: "ProfileCard.styles__BadgeCustom",
      componentId: "sc-7547aaa0-6"
    })`
  align-self: center;
`,
    _v137 = _v33.default.span.withConfig({
      displayName: "ProfileCard.styles__LocationText",
      componentId: "sc-7547aaa0-7"
    })`
  ${_v126(14, 20, _v53.bokehTheme.colors.gray["800"], 500)}
  ${_v134}
  margin-left: ${(0, _v51.rem)(3)};
  height: ${(0, _v51.rem)(20)};
  vertical-align: text-top;
`,
    _v138 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__DetailsWrapper",
      componentId: "sc-7547aaa0-8"
    })`
  padding-top: ${(0, _v51.rem)(35)};
  display: flex;
`,
    _v139 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__LocationWrapper",
      componentId: "sc-7547aaa0-9"
    })`
  height: ${(0, _v51.rem)(20)};
  margin-top: ${(0, _v51.rem)(2)};
  display: flex;
  align-items: center;
`,
    _v140 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__BioText",
      componentId: "sc-7547aaa0-10"
    })`
  ${_v126(14, 20, _v53.bokehTheme.colors.gray["800"], 400)}
  margin-top: ${(0, _v51.rem)(2)};
`,
    _v141 = _v33.default.div.withConfig({
      displayName: "ProfileCard.styles__LocationIcon",
      componentId: "sc-7547aaa0-11"
    })`
  flex-shrink: 0;
`,
    _v142 = _v33.default.a.withConfig({
      displayName: "ProfileCard.styles__LinkContainer",
      componentId: "sc-7547aaa0-12"
    })`
  text-decoration: none;
  display: block;
`,
    _v143 = _v0 => _v0.replace("?r=pad", ""),
    _v144 = (_v0, _v1, _v2 = !1) => {
      if (_v0.length <= 0) return "";
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0],
          _v1 = !_v2 || _v0.height > _v0.width;
        if (_v0.width >= _v1 && _v1) return _v143(_v0.link);
      }
      return _v143(_v0[_v0.length - 1].link);
    };
  function _v145({
    clips: _v0,
    totalClips: _v1,
    isClipsLoading: _v2
  }) {
    let _v3 = (0, _v22.useMemo)(() => {
        let _v0 = [];
        if (_v0 && _v0.length > 0) {
          let _v0 = null != _v1 && _v1 > 4 ? 3 : _v0.length;
          _v0 = _v0.slice(0, _v0).map(_v0 => (0, _v14.jsx)("a", {
            href: `/${(0, _v50.getIdFromUri)(_v0.uri)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, _v14.jsx)(_v151, {
              src: _v0.pictures ? _v144(_v0.pictures.sizes, 100) : "",
              alt: _v0.name
            })
          }));
        }
        if (null != _v1 && _v1 > 4) {
          let _v0 = (0, _v14.jsxs)(_v152, {
            children: ["+", (0, _v27.humanize)(_v1 - 3)]
          });
          _v0.push(_v0);
        }
        return _v0;
      }, [_v0, _v1]),
      _v4 = (0, _v125.useTrail)(_v3.length, {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        },
        config: _v125.config.molasses
      });
    return _v3.length ? (0, _v14.jsx)(_v148, {
      children: _v4.map((_v0, _v1) => (0, _v14.jsx)(_v150, {
        style: _v0,
        children: _v3[_v1]
      }, `preview_${_v1}`))
    }) : _v2 ? (0, _v14.jsx)(_v148, {
      children: [,,,,].fill(null).map((_v0, _v1) => (0, _v14.jsx)(_v153, {}, `profile_clip_${_v1}`))
    }) : null;
  }
  let _v146 = _v33.keyframes`
  0% { opacity: 0.5 }
  50%  { opacity: 1 }
  100% { opacity: 0.5 }
`,
    _v147 = _v33.css`
  display: inline-block;
  width: calc(25% - ${(0, _v51.rem)(2.78)});
  margin: 0 ${(0, _v51.rem)(1.39)};
`,
    _v148 = _v33.default.div.withConfig({
      displayName: "PreviewClips__VideosContainer",
      componentId: "sc-9fbc258e-0"
    })`
  margin-top: ${(0, _v51.rem)(20)};
  height: ${(0, _v51.rem)(40)};
  width: 100%;
`,
    _v149 = _v124.animated.div,
    _v150 = (0, _v33.default)(_v149).withConfig({
      displayName: "PreviewClips__VideoCardWrapper",
      componentId: "sc-9fbc258e-1"
    })`
  position: relative;
  vertical-align: top;
  overflow: hidden;
  background: ${_v53.bokehTheme.colors.gray["50"]};
  height: 100%;
  ${_v147};
`,
    _v151 = _v33.default.img.withConfig({
      displayName: "PreviewClips__ClipImage",
      componentId: "sc-9fbc258e-2"
    })`
  ${_v127};
  &:hover {
    transition: all 1s ease-in-out;
    transform: scale(1.5);
    transform-origin: 50% 50%;
  }
`,
    _v152 = _v33.default.span.withConfig({
      displayName: "PreviewClips__TotalClip",
      componentId: "sc-9fbc258e-3"
    })`
  ${_v126(14, 39, _v53.bokehTheme.colors.white, 500)};
  ${_v127};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${_v53.bokehTheme.colors.gray["800"]};
  transition: background 0.3s ease-in;
  &:hover {
    background: ${_v53.bokehTheme.colors.blue["500"]};
  }
`,
    _v153 = _v33.default.div.withConfig({
      displayName: "PreviewClips__LoadingCard",
      componentId: "sc-9fbc258e-4"
    })`
  ${_v127};
  background: linear-gradient(270deg, ${_v49.COLORS.SNOW} 0%, ${_v49.COLORS.CYAN_WHITE} 100%);
  animation: ${_v146} 2s ease-in-out 0s infinite reverse;
  ${_v147};
`;
  var _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = {
      xl: 60,
      lg: 48,
      md: 39,
      sm: 32,
      xs: 24
    },
    _v158 = {
      xl: _v157.xl + 20,
      lg: _v157.lg + 20,
      md: _v157.md + 14,
      sm: _v157.sm + 8,
      xs: _v157.xs + 6
    },
    _v159 = (0, _v33.default)(_v54.Button).attrs({
      pill: !0,
      radius: 66
    })(_v11 || (_v11 = (0, _v154.a)(["\n  border-radius: ", ";\n\n  ", "\n"], ["\n  border-radius: ", ";\n\n  ", "\n"])), (0, _v155.rem)(66), function (_v0) {
      var _v1 = _v0.src,
        _v2 = _v0.size;
      return _v1 && "padding-left: ".concat((0, _v155.rem)(_v158[_v2]), " !important");
    }),
    _v160 = _v33.default.img(_v12 || (_v12 = (0, _v154.a)(["\n  position: absolute;\n  top: 0.03125rem;\n  left: 0.03125rem;\n  border-radius: 50%;\n  height: calc(100% - 0.03125rem);\n  width: ", ";\n"], ["\n  position: absolute;\n  top: 0.03125rem;\n  left: 0.03125rem;\n  border-radius: 50%;\n  height: calc(100% - 0.03125rem);\n  width: ", ";\n"])), function (_v0) {
      return (0, _v155.rem)(_v157[_v0.size]);
    }),
    _v161 = (0, _v33.default)(_v156.DismissX)(_v13 || (_v13 = (0, _v154.a)(["\n  transition: 120ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.1) rotate(15deg);\n  }\n"], ["\n  transition: 120ms ease-in-out;\n\n  &:hover {\n    transform: scale(1.1) rotate(15deg);\n  }\n"]))),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = (0, _v162.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.element,
        _v3 = _v0.forwardRef,
        _v4 = _v0.onClose,
        _v5 = _v0.size,
        _v6 = void 0 === _v5 ? "md" : _v5,
        _v7 = _v0.src,
        _v8 = _v0.theme,
        _v9 = (0, _v154.b)(_v0, ["children", "element", "forwardRef", "onClose", "size", "src", "theme"]),
        _v10 = (0, _v163.useClose)(_v4),
        _v11 = _v10.reject,
        _v12 = _v10.complete;
      return _v22.default.createElement(_v159, (0, _v154.c)({
        element: void 0 === _v2 ? "button" : _v2,
        format: "secondary",
        icon: _v11 && _v22.default.createElement(_v161, {
          onClick: function (_v0) {
            _v0.preventDefault(), _v11 && _v11(_v0), _v12 && _v12(_v0);
          }
        }),
        iconPosition: _v11 ? "right" : null,
        ref: _v3,
        size: _v6,
        src: _v7,
        theme: _v8
      }, _v9), _v7 && _v22.default.createElement(_v160, {
        size: _v6,
        src: _v7,
        alt: "User avatar image"
      }), _v1);
    });
  function _v165({
    skills: _v0
  }) {
    return (0, _v14.jsx)(_v166, {
      children: _v0.map(_v0 => (0, _v14.jsx)(_v167, {
        size: "sm",
        children: _v0.name
      }, _v0.uri))
    });
  }
  let _v166 = _v33.default.div.withConfig({
      displayName: "SkillsContainer__TagContainer",
      componentId: "sc-97e4807b-0"
    })`
  margin-top: ${(0, _v51.rem)(2)};
  position: relative;
  overflow: hidden;
  max-height: ${(0, _v51.rem)(80)};
  &:before {
    content: '';
    opacity: 0.8;
    background: linear-gradient(
      to bottom,
      ${(0, _v51.rgba)(_v53.bokehTheme.colors.white, 0)} 0%,
      ${(0, _v51.rgba)(_v53.bokehTheme.colors.white, 1)} 74%,
      ${(0, _v51.rgba)(_v53.bokehTheme.colors.white, 1)} 99%
    );
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${(0, _v51.rem)(80)};
    z-index: 1;
  }
`,
    _v167 = (0, _v33.default)(_v164).withConfig({
      displayName: "SkillsContainer__TagCustom",
      componentId: "sc-97e4807b-1"
    })`
  color: ${_v53.bokehTheme.colors.gray["500"]};
  font-weight: 500;
  margin: ${(0, _v51.rem)(8)} ${(0, _v51.rem)(8)} 0 0;
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }
`,
    _v168 = (0, _v33.default)(_v94.Badge).attrs({
      format: "pro"
    }).withConfig({
      displayName: "ExpertsBadge__StyledBadge",
      componentId: "sc-bdeaf6b-0"
    })`
  background-color: ${_v53.bokehTheme.colors.gray["300"]};
  a {
    color: ${_v53.bokehTheme.colors.gray["50"]};
  }
`,
    _v169 = ({
      className: _v0
    }) => (0, _v14.jsx)(_v168, {
      label: "EXPERT",
      href: "/experts",
      target: "_blank",
      className: _v0,
      onClick: _v0 => _v0.stopPropagation(),
      children: "EXPERT"
    });
  var _v170 = _v0.i(0);
  function _v171({
    configUrl: _v0,
    yPosition: _v1,
    poster: _v2,
    start: _v3,
    end: _v4,
    clipUrl: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(!1),
      _v8 = (0, _v22.useRef)(null),
      _v9 = (0, _v22.useRef)(null),
      _v10 = (0, _v22.useRef)(null),
      _v11 = (0, _v22.useRef)(null),
      {
        ofcomQualifies: _v12,
        user: _v13
      } = (0, _v22.useContext)(_v32.ViewerContext),
      _v14 = _v12 && !_v13,
      {
        player: _v15
      } = (0, _v170.usePlayer)(_v8, Number(_v5), !0, _v0, !0, "auto"),
      {
        width: _v16
      } = (0, _v60.useWindowSize)(),
      _v17 = (0, _v22.useMemo)(() => _v2, [_v2]),
      _v18 = (0, _v22.useCallback)(_v0 => {
        if (_v0.current && _v9.current) {
          let {
              offsetHeight: _v0
            } = _v0.current,
            _v1 = _v0 * _v1 / 100,
            _v2 = _v9.current.offsetHeight / 2;
          _v0.current.style.top = `-${_v1 - _v2}px`;
        }
      }, [_v1]);
    return (0, _v22.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v4 - .501 && (_v15.currentTime = _v3);
      };
      return _v15 && (_v15.currentTime = _v3, _v15.on("timeupdate", _v0)), () => {
        _v15 && _v15.off("timeupdate", _v0);
      };
    }, [_v15, _v3, _v4]), (0, _v22.useEffect)(() => {
      _v15 && !_v14 && _v15.play().then(() => _v7(!0));
    }, [_v15]), (0, _v22.useEffect)(() => {
      _v7(!1);
    }, [_v5]), (0, _v22.useEffect)(() => {
      _v18(_v10), _v18(_v11);
    }, [_v18, _v16, _v6, _v17]), (0, _v14.jsxs)(_v172, {
      ref: _v9,
      children: [(0, _v14.jsx)(_v173, {
        ref: _v10,
        hide: !_v6,
        children: (0, _v14.jsx)("div", {
          ref: _v8
        })
      }), !_v6 && (0, _v14.jsx)(_v173, {
        ref: _v11,
        children: (0, _v14.jsx)(_v174, {
          src: _v17,
          alt: _v5,
          onLoad: () => _v18(_v11)
        })
      })]
    });
  }
  let _v172 = _v33.default.section.withConfig({
      displayName: "ProfileVideo__Wrapper",
      componentId: "sc-c962c10-0"
    })`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`,
    _v173 = _v33.default.article.withConfig({
      displayName: "ProfileVideo__VideoImageContainer",
      componentId: "sc-c962c10-1"
    })`
  position: absolute;
  min-width: 100%;
  left: 0;
  right: 0;
  display: block;
  visibility: visible;

  ${({
      hide: _v0
    }) => _v0 && _v33.css`
      visibility: hidden;
    `}
`,
    _v174 = _v33.default.img.withConfig({
      displayName: "ProfileVideo__Image",
      componentId: "sc-c962c10-2"
    })`
  height: 100%;
  width: 100%;
`;
  function _v175({
    userLink: _v0,
    name: _v1,
    bio: _v2,
    clips: _v3,
    totalClips: _v4,
    pictures: _v5,
    skills: _v6,
    backgroundVideo: _v7,
    clipsLoading: _v8,
    membership: _v9,
    location: _v10,
    isExpert: _v11
  }) {
    let _v12 = (0, _v22.useMemo)(() => _v5.sizes[3].link, [_v5.sizes]),
      _v13 = (0, _v22.useMemo)(() => _v119(_v5), [_v5]),
      _v14 = _v7 && _v7.length ? _v7[0] : null;
    return (0, _v14.jsx)(_v129, {
      children: (0, _v14.jsxs)(_v142, {
        href: _v0,
        children: [(0, _v14.jsx)(_v130, {
          children: _v14 && (0, _v14.jsx)(_v171, {
            clipUrl: "" + _v14.clipId,
            configUrl: _v14.configUrl,
            end: _v14.endTime,
            start: _v14.startTime,
            poster: _v14.firstFrameURL,
            yPosition: _v14.yPosition
          })
        }), (0, _v14.jsxs)(_v131, {
          children: [(0, _v14.jsx)(_v132, {
            children: (0, _v14.jsx)(_v133, {
              alt: _v1,
              src: _v12,
              srcSet: _v13,
              size: "md"
            })
          }), (0, _v14.jsxs)(_v138, {
            children: [(0, _v14.jsx)(_v135, {
              children: _v1
            }), _v11 && (0, _v14.jsx)(_v176, {}), _v9?.badge && (0, _v14.jsx)(_v136, {
              format: _v98(_v9.badge.type),
              label: _v9.badge.text,
              href: _v9.badge.url,
              children: _v9.badge.text
            })]
          }), _v10 ? (0, _v14.jsxs)(_v139, {
            children: [(0, _v14.jsx)(_v141, {
              children: (0, _v14.jsx)(_v123.LocationIcon, {
                width: 9,
                height: 12
              })
            }), (0, _v14.jsx)(_v137, {
              children: _v10
            })]
          }) : null, _v2 && (0, _v14.jsx)(_v140, {
            children: (0, _v62.default)(_v2, {
              length: 80
            })
          }), (0, _v14.jsx)(_v145, {
            clips: _v3,
            totalClips: _v4,
            isClipsLoading: _v8
          }), !!_v6?.length && (0, _v14.jsx)(_v165, {
            skills: _v6
          })]
        })]
      })
    });
  }
  let _v176 = (0, _v33.default)(_v169).withConfig({
    displayName: "ProfileCard__StyledExpertsBadge",
    componentId: "sc-52e35438-0"
  })`
  align-self: center;
  font-size: ${(0, _v51.rem)(9)};
  border-radius: ${(0, _v51.rem)(2)};
  margin-right: ${(0, _v51.rem)(4)};
  a {
    font-weight: 700;
  }
`;
  function _v177({
    userId: _v0,
    waitBeforeShow: _v1 = 500,
    cardUser: _v2
  }) {
    let [_v3, {
        data: _v4,
        loading: _v5
      }] = (0, _v120.useLazyQuery)(`/users/${_v0}`, {
        variables: {
          fields: ["link", "name", "location_details.formatted_address", "bio", "pictures", "badge", "membership.badge", "available_for_hire", "skills", "background_video", "is_expert"]
        },
        accept: {
          version: "3.4.2"
        }
      }),
      [_v6, {
        data: _v7,
        loading: _v8
      }] = (0, _v120.useLazyQuery)(`/users/${_v0}/videos`, {
        variables: (0, _v47.decamelizeDeep)({
          perPage: 4,
          sizes: "100x75",
          fields: ["uri", "name", "pictures"]
        }),
        accept: {
          version: "3.4.2"
        }
      });
    (0, _v22.useEffect)(() => {
      let _v0 = null;
      return _v2 ? _v7 || _v8 || _v6() : _v0 = setTimeout(() => {
        _v4 || _v5 || _v3(), _v7 || _v8 || _v6();
      }, _v1), () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v1, _v3, _v6, _v2, _v7, _v8, _v4, _v5]);
    let _v9 = _v4 || _v2;
    return _v9 ? (0, _v14.jsx)(_v175, {
      ..._v9,
      clips: _v7?.items,
      totalClips: _v7?.total,
      userLink: _v9.link,
      clipsLoading: _v8
    }) : (0, _v14.jsx)(_v121, {});
  }
  let _v178 = _v33.default.section.withConfig({
      displayName: "PopupProfileCard__Container",
      componentId: "sc-fce8bfb7-0"
    })`
  position: relative;
`,
    _v179 = _v33.default.article.withConfig({
      displayName: "PopupProfileCard__PopupContainer",
      componentId: "sc-fce8bfb7-1"
    })`
  position: absolute;
  background: transparent;
  padding: ${(0, _v51.rem)(12)};
  width: ${(0, _v51.rem)(320)};
  opacity: 0;
  z-index: ${({
      zIndex: _v0
    }) => _v0};

  &.left {
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    /* To avoid flickering on first initialization */
    opacity: 1;
  }

  &.right {
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    opacity: 1;
  }

  &.top {
    bottom: 100%;
    left: 0;
    opacity: 1;
  }

  &.bottom {
    top: 100%;
    left: 0;
    opacity: 1;
  }
`,
    _v180 = ({
      children: _v0,
      userId: _v1,
      zIndex: _v2 = 1,
      childRef: _v3,
      cardUser: _v4
    }) => {
      let _v5 = (0, _v22.useRef)(null),
        [_v6, _v7] = (0, _v22.useState)(!1),
        {
          width: _v8,
          height: _v9
        } = (0, _v60.useWindowSize)(),
        _v10 = null;
      (0, _v22.useEffect)(() => {
        if (_v5.current && _v3.current && _v6) {
          let _v0 = _v5.current,
            _v1 = _v0.getBoundingClientRect(),
            _v2 = _v3.current.getBoundingClientRect();
          _v2.x > _v1.width ? _v0.classList.add("left") : _v8 - (_v2.x + _v2.width) > _v1.width ? _v0.classList.add("right") : _v1.height < _v2.y ? _v0.classList.add("top") : _v9 - (_v2.y + _v2.height) > _v1.height ? _v0.classList.add("bottom") : _v0.classList.add("top");
        }
      }, [_v3, _v5, _v6, _v8, _v9]);
      let _v11 = _v0 => {
        _v0 ? _v10 = setTimeout(() => {
          _v7(!0);
        }, 500) : (_v10 && clearTimeout(_v10), _v7(!1));
      };
      return (0, _v14.jsxs)(_v178, {
        onMouseEnter: () => _v11(!0),
        onMouseLeave: () => _v11(!1),
        children: [_v6 ? (0, _v14.jsx)(_v179, {
          ref: _v5,
          zIndex: _v2,
          children: (0, _v14.jsx)(_v177, {
            userId: _v1,
            cardUser: _v4
          })
        }) : null, _v0]
      });
    };
  var _v181 = _v0.i(0);
  function _v182({
    collaborator: _v0
  }) {
    let _v1 = (0, _v22.useRef)(null),
      {
        isFromCopyrightRestrictedRegion: _v2
      } = (0, _v22.useContext)(_v32.ViewerContext),
      _v3 = (0, _v50.getIdFromUri)(_v0.uri);
    return _v2 ? (0, _v14.jsx)(_v189, {
      as: "span",
      children: (0, _v14.jsx)(_v188, {
        src: _v0.pictures.sizes[1].link,
        srcSet: _v119(_v0.pictures),
        alt: _v0.name,
        nameProps: {
          name: _v0.name
        }
      })
    }) : (0, _v14.jsx)(_v187, {
      onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => window.location.href = _v0.link),
      children: (0, _v14.jsx)(_v180, {
        userId: _v3,
        childRef: _v1,
        cardUser: _v0,
        children: (0, _v14.jsx)(_v189, {
          href: _v0.link,
          ref: _v1,
          children: (0, _v14.jsx)(_v188, {
            src: _v0.pictures.sizes[1].link,
            srcSet: _v119(_v0.pictures),
            alt: _v0.name,
            nameProps: {
              name: _v0.name
            }
          })
        })
      })
    });
  }
  let _v183 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "Collaborators__Title",
      componentId: "sc-cbb6590b-0"
    })`
  font-size: ${(0, _v51.rem)(20)};
  font-weight: bold;
  margin-left: ${(0, _v51.rem)(25)};
  display: inline-block;
`,
    _v184 = (0, _v33.default)(_v116.CircleInfoSmall).withConfig({
      displayName: "Collaborators__InfoCircle",
      componentId: "sc-cbb6590b-1"
    })`
  g {
    fill: ${_v53.bokehTheme.colors.gray["200"]};
  }
`,
    _v185 = (0, _v33.default)(_v181.default).withConfig({
      displayName: "Collaborators__TooltipWrapper",
      componentId: "sc-cbb6590b-2"
    })`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`,
    _v186 = _v33.default.div.withConfig({
      displayName: "Collaborators__Content",
      componentId: "sc-cbb6590b-3"
    })`
  margin: ${(0, _v51.rem)(10)} ${(0, _v51.rem)(25)} 0;
`,
    _v187 = _v33.default.div.withConfig({
      displayName: "Collaborators__ProfileCardWrapper",
      componentId: "sc-cbb6590b-4"
    })`
  display: inline-block;
`,
    _v188 = (0, _v33.default)(_v114.Avatar).withConfig({
      displayName: "Collaborators__CustomAvatar",
      componentId: "sc-cbb6590b-5"
    })`
  width: ${(0, _v51.rem)(45)};
  height: ${(0, _v51.rem)(45)};
`,
    _v189 = _v33.default.a.withConfig({
      displayName: "Collaborators__AvatarAnchor",
      componentId: "sc-cbb6590b-6"
    })`
  display: inline-block;
  margin-right: ${(0, _v51.rem)(12)};
`,
    _v190 = _v22.default.memo(function ({
      userId: _v0
    }) {
      let {
        data: _v1,
        loading: _v2
      } = (0, _v115.useQuery)(`/users/${_v0}/collaborators`, {
        variables: {
          fields: ["background_video", "membership.badge", "bio", "link", "metadata.following", "skills", "name", "pictures.sizes", "uri", "location", "is_expert"]
        },
        accept: {
          version: "3.4.2"
        }
      });
      return !_v2 && _v1?.total ? (0, _v14.jsxs)(_v99, {
        fullWidth: !0,
        children: [(0, _v14.jsx)(_v183, {
          element: "p",
          format: "soft",
          children: _v66.default.Collaborators
        }), (0, _v14.jsx)(_v185, {
          text: _v66.default.AddCollaboratorsInVideoSettings,
          alignment: "top",
          trigger: "click",
          children: (0, _v14.jsx)(_v184, {
            tabIndex: 0,
            role: "button",
            "aria-label": _v66.default.AddCollaboratorsInVideoSettings,
            width: 22,
            height: 22,
            onKeyDown: _v0 => {
              _v0.keyCode === _v49.KeyCodes.SPACE && _v0.preventDefault();
            }
          })
        }), (0, _v14.jsx)(_v186, {
          children: _v1.items.map(_v0 => (0, _v14.jsx)(_v182, {
            collaborator: _v0
          }, _v0.uri))
        })]
      }) : null;
    });
  var _v191 = _v0.i(0);
  function _v192({
    onRemove: _v0,
    onReplace: _v1
  }) {
    return (0, _v14.jsxs)(_v193, {
      children: [(0, _v14.jsx)(_v194, {
        onClick: _v0,
        children: _v66.default.Remove
      }), (0, _v14.jsx)(_v194, {
        onClick: _v1,
        children: _v66.default.Replace
      })]
    });
  }
  let _v193 = _v33.default.aside.withConfig({
      displayName: "CoverVideoEditButtons__ButtonContainer",
      componentId: "sc-c4b6b603-0"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(24)};
  right: ${(0, _v51.rem)(30)};
  display: flex;
  z-index: 1;
  outline: none;
  transition: all 200ms linear;
`,
    _v194 = _v33.default.button.withConfig({
      displayName: "CoverVideoEditButtons__CustomButton",
      componentId: "sc-c4b6b603-1"
    })`
  &:first-child {
    margin-right: ${(0, _v51.rem)(6)};
  }

  &:hover {
    border: none;
    background-color: rgba(0, 0, 0, 0.4);
  }

  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  height: ${(0, _v51.rem)(40)};
  width: ${(0, _v51.rem)(88)};
  font-size: ${(0, _v51.rem)(14)};
  color: ${_v53.bokehTheme.colors.white};
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(.2)};
  line-height: ${(0, _v51.rem)(17)};
  text-align: center;
  border-radius: ${(0, _v51.rem)(3)};
  cursor: pointer;
`;
  var _v195 = _v0.i(0);
  let _v196 = (0, _v22.forwardRef)((_v0, _v1) => (0, _v14.jsx)("svg", {
    version: "1.1",
    viewBox: "0 0 48 31",
    ref: _v1,
    xmlns: "http://www.w3.org/2000/svg",
    ..._v0,
    children: (0, _v14.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, _v14.jsx)("g", {
        transform: "translate(-699 -100)",
        children: (0, _v14.jsx)("g", {
          transform: "translate(651 100)",
          children: (0, _v14.jsxs)("g", {
            transform: "translate(50)",
            children: [(0, _v14.jsx)("polygon", {
              points: "0 4.1289 0 29.129 37.5 29.129 37.5 10.258 32.565 4.1289"
            }), (0, _v14.jsx)("polyline", {
              points: "32.566 4 0 4 0 29 37.5 29 37.5 10.129",
              stroke: "#1A2E3B",
              strokeWidth: "2.5"
            }), (0, _v14.jsx)("path", {
              d: "m6.0011 24.129h23.75-23.75z",
              fill: "#E8EAEB"
            }), (0, _v14.jsx)("polygon", {
              points: "7.6019 23.662 3.7506 21.438 3.7506 25.884",
              fill: "#1A2E3B"
            }), (0, _v14.jsx)("polygon", {
              points: "30.698 7.8608 31.593 10.546 34.279 11.442 31.593 12.337 30.698 15.023 29.801 12.337 27.115 11.442 29.801 10.546",
              fill: "#1A2E3B"
            }), (0, _v14.jsx)("polygon", {
              points: "37.793 1.25e-4 36.732 3.1839 33.546 4.2464 36.732 5.3076 37.793 8.4926 38.854 5.3076 42.039 4.2464 38.854 3.1839 37.794 1.25e-4",
              fill: "#1A2E3B"
            }), (0, _v14.jsx)("path", {
              d: "m40.729 8.8935 1.4238 0.47375c0.28375 0.09375 0.5075 0.31875 0.60125 0.6025l0.475 1.4225 0.475-1.4225c0.09375-0.28375 0.3175-0.50875 0.60125-0.6025l1.4238-0.47375-1.4238-0.47625c-0.28375-0.09375-0.5075-0.3175-0.60125-0.6025l-0.475-1.4225-0.475 1.4225c-0.09375 0.285-0.3175 0.50875-0.60125 0.6025l-1.4238 0.47625z",
              fill: "#1A2E3B"
            }), (0, _v14.jsx)("line", {
              x1: "33.751",
              x2: "10.001",
              y1: "24.129",
              y2: "24.129",
              stroke: "#1A2E3B",
              strokeWidth: "2.5"
            })]
          })
        })
      })
    })
  }));
  function _v197({
    subTitle: _v0,
    onClick: _v1
  }) {
    return (0, _v14.jsxs)(_v198, {
      onClick: _v1,
      children: [(0, _v14.jsx)(_v196, {
        width: 46,
        height: 30
      }), (0, _v14.jsx)(_v199, {
        children: _v0
      })]
    });
  }
  let _v198 = _v33.default.button.withConfig({
      displayName: "EmptyVideoCover__Wrapper",
      componentId: "sc-eacaf71e-0"
    })`
  display: none;
  border: none;
  ${_v61.media.md`
    display: flex;
  `}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${(0, _v51.rem)(190)};
  width: ${(0, _v51.rem)(190)};
  cursor: pointer;
  border-radius: 50%;
  transition: all linear 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,
    _v199 = (0, _v33.default)(_v195.Header).attrs({
      size: "5"
    }).withConfig({
      displayName: "EmptyVideoCover__SubTitle",
      componentId: "sc-eacaf71e-1"
    })`
  margin: ${(0, _v51.rem)(9)} ${(0, _v51.rem)(0)} ${(0, _v51.rem)(0)};
`,
    _v200 = _v0 => (0, _v14.jsx)("svg", {
      viewBox: "0 0 160 138",
      ..._v0,
      children: (0, _v14.jsxs)("g", {
        fill: "none",
        fillRule: "evenodd",
        children: [(0, _v14.jsx)("circle", {
          fillOpacity: ".069",
          fill: "#00ADEF",
          fillRule: "nonzero",
          cx: "80",
          cy: "69",
          r: "69"
        }), (0, _v14.jsx)("path", {
          fill: "#D6D6D6",
          d: "M153.522 36.084l-3.886 1.299 3.886 1.298 1.296 3.893 1.295-3.893L160 37.383l-3.886-1.299-1.295-3.893zM131.171 28.947c0-1.075.87-1.947 1.943-1.947 1.074 0 1.944.872 1.944 1.947 0 1.075-.87 1.947-1.944 1.947a1.945 1.945 0 0 1-1.943-1.947"
        }), (0, _v14.jsx)("path", {
          d: "M142.554 54.992c0-3.598-2.93-6.533-6.522-6.533 3.592 0 6.522-2.935 6.522-6.534 0 3.599 2.93 6.534 6.52 6.534-3.59 0-6.52 2.935-6.52 6.533z",
          stroke: "#1A2E3B",
          strokeWidth: "1.296"
        }), (0, _v14.jsx)("path", {
          fill: "#1A2E3B",
          d: "M115.105 30.368l.79 2.374 2.368.79-2.369.792-.79 2.373-.789-2.373-2.369-.791 2.37-.791zM137.763 69.18l.841 1.54 1.538.844-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843zM138.402 75.171a.629.629 0 1 1-.89.894.629.629 0 0 1 .89-.894"
        }), (0, _v14.jsx)("path", {
          d: "M33.463 33.025a.63.63 0 1 1-.89.894.63.63 0 0 1 .89-.894",
          fill: "#E8EAEB"
        }), (0, _v14.jsx)("path", {
          fill: "#D6D6D6",
          d: "M3.886 47.116L0 48.415l3.886 1.298 1.296 3.893 1.296-3.893 3.886-1.298-3.886-1.299-1.296-3.893z"
        }), (0, _v14.jsx)("path", {
          d: "M22.024 40.628c0-1.075.87-1.947 1.944-1.947 1.073 0 1.943.872 1.943 1.947 0 1.075-.87 1.946-1.943 1.946a1.945 1.945 0 0 1-1.944-1.946",
          fill: "#1A2E3B"
        }), (0, _v14.jsx)("path", {
          d: "M24.011 66.672c0-3.597-2.93-6.532-6.521-6.532 3.592 0 6.521-2.935 6.521-6.534 0 3.599 2.93 6.534 6.521 6.534-3.591 0-6.521 2.935-6.521 6.532z",
          stroke: "#1A2E3B",
          strokeWidth: "1.296"
        }), (0, _v14.jsx)("path", {
          fill: "#E8EAEB",
          d: "M32.824 27l.841 1.54 1.538.843-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843z"
        }), (0, _v14.jsxs)("g", {
          children: [(0, _v14.jsx)("path", {
            stroke: "#1A2E3B",
            strokeWidth: "2.592",
            fill: "#EEF1F2",
            d: "M38.198 102.351h83.563V46.543H38.198z"
          }), (0, _v14.jsx)("path", {
            d: "M60.222 91.32h53.118-53.118z",
            fill: "#E8EAEB"
          }), (0, _v14.jsx)("path", {
            d: "M113.34 91.32H60.222",
            stroke: "#1A2E3B",
            strokeWidth: "2.592"
          }), (0, _v14.jsx)("path", {
            fill: "#1A2E3B",
            d: "M55.04 90.344l-8.42-4.865v9.734z"
          })]
        })]
      })
    });
  function _v201() {
    return (0, _v14.jsxs)(_v202, {
      children: [(0, _v14.jsx)(_v200, {
        width: 160,
        height: 138
      }), (0, _v14.jsx)(_v57.Paragraph, {
        size: "1",
        children: _v66.default.NoVideosYet
      }), (0, _v14.jsx)(_v203, {
        element: "a",
        format: "primary",
        href: "/upload",
        size: "md",
        children: _v66.default.Upload
      })]
    });
  }
  let _v202 = _v33.default.section.withConfig({
      displayName: "UploadVideo__Container",
      componentId: "sc-d5c75bb7-0"
    })`
  padding: ${(0, _v51.rem)(24)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`,
    _v203 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "UploadVideo__UploadButton",
      componentId: "sc-d5c75bb7-1"
    })`
  width: ${(0, _v51.rem)(106)};
  text-decoration: none;
`;
  var _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0);
  function _v207({
    src: _v0,
    clipTitle: _v1,
    timestamp: _v2,
    duration: _v3,
    isPrivate: _v4,
    disabled: _v5
  }) {
    let _v6 = (0, _v22.useMemo)(() => {
        let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
        return _v66.default.Modified + " " + (_v1 = (_v0 = new Date(_v2)).getDate(), _v2 = _v0.getMonth() + 1, _v3 = _v0.getFullYear(), _v4 = _v0.getHours(), _v5 = _v0.getMinutes(), _v6 = _v0.getSeconds(), [_v2, _v1, _v3].map(_v0 => _v0 < 10 ? "0" + _v0 : _v0).join("/") + " " + [0 === _v4 ? 12 : _v4, _v5, _v6].map(_v0 => _v0 < 10 ? "0" + _v0 : _v0).join(":") + "  " + (_v4 > 12 ? "PM" : "AM"));
      }, [_v2]),
      _v7 = (0, _v22.useMemo)(() => _v95(_v3), [_v3]),
      _v8 = (0, _v22.useMemo)(() => _v0, [_v0]);
    return (0, _v14.jsxs)(_v209, {
      disabled: _v5,
      children: [(0, _v14.jsxs)(_v211, {
        children: [(0, _v14.jsx)(_v210, {
          src: _v8,
          alt: _v1
        }), _v4 && (0, _v14.jsx)(_v216, {
          children: (0, _v14.jsx)(_v206.LockFilled, {
            boxSize: "15",
            color: "white"
          })
        }), (0, _v14.jsx)(_v215, {
          children: _v7
        })]
      }), (0, _v14.jsxs)(_v212, {
        children: [(0, _v14.jsx)(_v214, {
          size: "5",
          children: _v1
        }), (0, _v14.jsx)(_v213, {
          size: "2",
          children: _v6
        })]
      })]
    });
  }
  let _v208 = _v33.css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
`,
    _v209 = _v33.default.section.withConfig({
      displayName: "ClipItem__Wrapper",
      componentId: "sc-5df621f6-0"
    })`
  overflow: hidden;
  width: 100%;

  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      opacity: 0.5;
    `}
`,
    _v210 = _v33.default.img.withConfig({
      displayName: "ClipItem__Image",
      componentId: "sc-5df621f6-1"
    })`
  width: 100%;
  height: 100%;
  border-radius: ${(0, _v51.rem)(3)};
`,
    _v211 = _v33.default.aside.withConfig({
      displayName: "ClipItem__ImageWrapper",
      componentId: "sc-5df621f6-2"
    })`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 30%;
  height: ${(0, _v51.rem)(76)};
  max-width: ${(0, _v51.rem)(136)};
  background: linear-gradient(206.43deg, ${(0, _v51.rgba)(0, 0, 0, 0)} 0%, ${_v53.bokehTheme.colors.gray["900"]} 100%);
`,
    _v212 = _v33.default.aside.withConfig({
      displayName: "ClipItem__DescriptionWrapper",
      componentId: "sc-5df621f6-3"
    })`
  padding-left: ${(0, _v51.rem)(20)};
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  width: 70%;
`,
    _v213 = (0, _v33.default)(_v57.Paragraph).withConfig({
      displayName: "ClipItem__CustomParagraph",
      componentId: "sc-5df621f6-4"
    })`
  ${_v208};
  color: ${_v53.bokehTheme.colors.gray["500"]};
`,
    _v214 = (0, _v33.default)(_v195.Header).withConfig({
      displayName: "ClipItem__CustomHeader",
      componentId: "sc-5df621f6-5"
    })`
  ${_v208};
  color: ${_v53.bokehTheme.colors.gray["800"]};
`,
    _v215 = _v33.default.span.withConfig({
      displayName: "ClipItem__DurationWrapper",
      componentId: "sc-5df621f6-6"
    })`
  height: ${(0, _v51.rem)(12)};
  width: ${(0, _v51.rem)(27)};
  color: ${_v53.bokehTheme.colors.white};
  font-size: ${(0, _v51.rem)(10)};
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(.4)};
  line-height: ${(0, _v51.rem)(12)};
  text-shadow: 0 0 ${(0, _v51.rem)(4)} 0 ${(0, _v51.rgba)(0, 0, 0, .24)};
  position: absolute;
  bottom: ${(0, _v51.rem)(3)};
  left: ${(0, _v51.rem)(8)};
`,
    _v216 = _v33.default.span.withConfig({
      displayName: "ClipItem__PrivateWrapper",
      componentId: "sc-5df621f6-7"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(5)};
  right: ${(0, _v51.rem)(5)};
  padding: ${(0, _v51.rem)(5)};
  background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.red["500"], .75)};
  border-radius: ${(0, _v51.rem)(5)};
`;
  var _v217 = ((_v1 = _v217 || {}).NOBODY = "nobody", _v1.PASSWORD = "password", _v1.ON_DEMAND = "ptv", _v1.ON_DEMAND_HIDDEN = "ptvhide", _v1);
  function _v218({
    inputType: _v0 = "radio",
    isVerticalClipAllowed: _v1,
    clip: _v2,
    isSelected: _v3,
    onClick: _v4,
    isUpcomingEventAllowed: _v5,
    isOnDemandAllowed: _v6
  }) {
    let _v7 = _v2.width < _v2.height,
      _v8 = !_v1 && _v7,
      _v9 = "nobody" === _v2.privacy.view || "password" === _v2.privacy.view,
      _v10 = !_v6 && ("ptv" === _v2.privacy.view || "ptvhide" === _v2.privacy.view),
      _v11 = null != _v2.live && "done" !== _v2.live.status,
      _v12 = !_v5 && _v11,
      _v13 = (0, _v22.useMemo)(() => _v8 || _v10 || _v12, [_v8, _v10, _v12]),
      _v14 = (0, _v22.useMemo)(() => _v8 ? _v66.default.VerticalVideoNotSupported : _v10 ? _v66.default.OnDemandVideoNotSupported : _v12 ? _v66.default.UpcomingVideoNotSupported : "", [_v8, _v10, _v12]),
      _v15 = (0, _v22.useCallback)(() => {
        _v13 || _v4();
      }, [_v4, _v13]),
      _v16 = (0, _v22.useMemo)(() => (0, _v14.jsx)(_v207, {
        clipTitle: _v2.name,
        src: _v2.pictures.sizes[0].link,
        timestamp: _v2.createdTime,
        duration: _v2.duration,
        isPrivate: _v9,
        disabled: _v13
      }), [_v2.createdTime, _v2.duration, _v2.name, _v2.pictures.sizes, _v13, _v9]);
    return (0, _v14.jsx)(_v219, {
      disabled: _v13,
      children: (0, _v14.jsx)(_v181.default, {
        text: _v13 ? _v14 : "",
        children: "radio" === _v0 ? (0, _v14.jsx)(_v222, {
          defaultValue: _v2.uri,
          name: "add_video_section",
          checked: !_v13 && _v3,
          disabled: _v13,
          onChange: _v15,
          label: _v16
        }) : (0, _v14.jsx)(_v221, {
          defaultValue: _v2.uri,
          name: "add_video_section",
          checked: !_v13 && _v3,
          disabled: _v13,
          onChange: _v15,
          label: _v16
        })
      })
    });
  }
  let _v219 = _v33.default.li.withConfig({
      displayName: "ClipRow__CustomLi",
      componentId: "sc-be436926-0"
    })`
  cursor: pointer;
  position: relative;
  width: 100%;
  &:not(:last-child) {
    box-shadow: inset 0 ${(0, _v51.rem)(-1)} 0 0 ${_v53.bokehTheme.colors.gray["100"]};
  }
  &:hover {
    background-color: ${_v53.bokehTheme.colors.gray["50"]};
  }

  &:not(:first-child) {
    .btn-tip {
      top: auto;
      bottom: calc(100% + ${(0, _v51.rem)(12)});
    }
  }

  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      cursor: not-allowed;
    `}
`,
    _v220 = _v33.css`
  padding: ${(0, _v51.rem)(12)} 0 ${(0, _v51.rem)(12)} ${(0, _v51.rem)(20)};
  width: 100%;
  label {
    padding-right: ${(0, _v51.rem)(28)};
    padding-top: 0;
    padding-bottom: 0;
  }
`,
    _v221 = (0, _v33.default)(_v204.Checkbox).withConfig({
      displayName: "ClipRow__StyledCheckbox",
      componentId: "sc-be436926-1"
    })`
  ${_v220}
`,
    _v222 = (0, _v33.default)(_v205.Radio).withConfig({
      displayName: "ClipRow__StyledRadio",
      componentId: "sc-be436926-2"
    })`
  ${_v220}
`;
  function _v223() {
    return (0, _v14.jsxs)(_v224, {
      children: [(0, _v14.jsx)(_v226, {
        children: (0, _v14.jsx)(_v227, {})
      }), (0, _v14.jsx)(_v228, {}), (0, _v14.jsxs)(_v229, {
        children: [(0, _v14.jsx)(_v230, {}), (0, _v14.jsx)(_v231, {})]
      })]
    });
  }
  let _v224 = _v33.default.li.withConfig({
      displayName: "LoadingRow__EmptyRowWrapper",
      componentId: "sc-9ca5dd66-0"
    })`
  display: flex;
  flex-direction: row;
  height: ${(0, _v51.rem)(100)};
  align-items: center;
  box-shadow: inset 0 ${(0, _v51.rem)(-1)} 0 0 ${_v53.bokehTheme.colors.gray["100"]};
`,
    _v225 = _v33.keyframes`
  0% { opacity: 0.5 }
  50%  { opacity: 1 }
  100% { opacity: 0.5 }
`,
    _v226 = _v33.default.div.withConfig({
      displayName: "LoadingRow__InputRadioWrapper",
      componentId: "sc-9ca5dd66-1"
    })`
  margin-left: ${(0, _v51.rem)(20)};
  margin-right: ${(0, _v51.rem)(20)};
`,
    _v227 = _v33.default.span.withConfig({
      displayName: "LoadingRow__LoadingCheckbox",
      componentId: "sc-9ca5dd66-2"
    })`
  height: ${(0, _v51.rem)(22)};
  width: ${(0, _v51.rem)(22)};
  opacity: 0.9;
  background: linear-gradient(270deg, ${_v49.COLORS.CYAN_WHITE} 0%, ${_v49.COLORS.SNOW} 100%);
  border-radius: 50%;
  display: inline-block;
`,
    _v228 = _v33.default.div.withConfig({
      displayName: "LoadingRow__LoadingThumbnailBox",
      componentId: "sc-9ca5dd66-3"
    })`
  ${_v61.media.xs`
    display: none;
  `}
  ${_v61.media.xsm`
    display: inline-block;
  `}
  ${_v61.media.sm`
    width: ${(0, _v51.rem)(136)};
    height: ${(0, _v51.rem)(76)};
  `}
  background: linear-gradient(270deg, ${_v49.COLORS.SNOW} 0%, ${_v49.COLORS.CYAN_WHITE} 100%);
  animation: ${_v225} 2s ease-in-out 0s infinite reverse;
  border-radius: ${(0, _v51.rem)(3)};
  width: ${(0, _v51.rem)(88)};
  height: ${(0, _v51.rem)(49)};
`,
    _v229 = _v33.default.div.withConfig({
      displayName: "LoadingRow__ClipItem",
      componentId: "sc-9ca5dd66-4"
    })`
  margin-left: ${(0, _v51.rem)(20)};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  animation: ${_v225} 2s ease-in-out 0s infinite reverse;
`,
    _v230 = _v33.default.div.withConfig({
      displayName: "LoadingRow__ClipHeader",
      componentId: "sc-9ca5dd66-5"
    })`
  height: ${(0, _v51.rem)(16)};
  width: 100%;
  background: linear-gradient(90deg, ${_v49.COLORS.SNOW} 0%, ${_v49.COLORS.CYAN_WHITE} 100%);
  margin-bottom: ${(0, _v51.rem)(6)};
`,
    _v231 = _v33.default.div.withConfig({
      displayName: "LoadingRow__ClipDesc",
      componentId: "sc-9ca5dd66-6"
    })`
  height: ${(0, _v51.rem)(16)};
  width: 70%;
  background: linear-gradient(90deg, ${_v49.COLORS.CYAN_WHITE} 0%, ${_v49.COLORS.SNOW} 100%);
`;
  function _v232(_v0, _v1, _v2 = _v49.SCROLL_BUFFER) {
    if (_v0.current) {
      let _v0 = _v0.current,
        _v1 = _v0.scrollHeight;
      _v0.clientHeight + _v0.scrollTop + _v2 >= _v1 && _v1();
    }
  }
  function _v233({
    inputType: _v0 = "radio",
    isVerticalClipAllowed: _v1,
    clips: _v2,
    selectedClips: _v3,
    loading: _v4,
    onSelectionChange: _v5,
    fetchNext: _v6,
    isUpcomingEventAllowed: _v7,
    isOnDemandAllowed: _v8
  }) {
    let _v9 = (0, _v22.useRef)(null),
      _v10 = _v2.length > 0 ? 1 : 6,
      _v11 = (0, _v22.useMemo)(() => _v3.map(_v0 => _v0.uri), [_v3]);
    return (0, _v14.jsxs)(_v234, {
      ref: _v9,
      onScroll: () => _v232(_v9, _v6),
      children: [_v2.map(_v0 => {
        let _v1 = -1 !== _v11.indexOf(_v0.uri);
        return (0, _v14.jsx)(_v218, {
          inputType: _v0,
          clip: _v0,
          isVerticalClipAllowed: _v1,
          isUpcomingEventAllowed: _v7,
          isOnDemandAllowed: _v8,
          isSelected: _v1,
          onClick: () => {
            if ("checkbox" === _v0) {
              let _v0 = _v3 ? [..._v3] : [],
                _v1 = _v0.map(_v0 => _v0.uri);
              if (_v1) {
                let _v0 = _v1.indexOf(_v0.uri);
                _v0.splice(_v0, 1);
              } else _v0.push(_v0);
              _v5(_v0);
            } else _v5([_v0]);
          }
        }, `clip_row_${_v0.uri}`);
      }), _v4 && [...Array(_v10).keys()].map(_v0 => (0, _v14.jsx)(_v223, {}, _v0))]
    });
  }
  let _v234 = _v33.default.ul.withConfig({
    displayName: "ClipsList__CustomUl",
    componentId: "sc-74ca04-0"
  })`
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: ${(0, _v51.rem)(12)};
`;
  var _v235 = function (_v0) {
    return _v22.default.createElement("svg", (0, _v154.c)({
      viewBox: "0 0 176 82"
    }, _v0), _v22.default.createElement("path", {
      d: "M87 2a40 40 0 1 0 40 40A40 40 0 0 0 87 2zm18.41 58.41a2 2 0 0 1-2.82 0l-8-8a2 2 0 0 1-.48-.77 15.54 15.54 0 1 1 2.53-2.53 2 2 0 0 1 .77.48l8 8a2 2 0 0 1 0 2.82z",
      fill: "#8699a6"
    }), _v22.default.createElement("circle", {
      cx: 84.5,
      cy: 39.5,
      r: 11.5,
      fill: "#8699a6"
    }), _v22.default.createElement("path", {
      d: "M22 26a3 3 0 1 1 3 3 3 3 0 0 1-3-3",
      fill: "#8699a6"
    }), _v22.default.createElement("path", {
      d: "M149 46.49a1.5 1.5 0 1 1 1.5 1.51 1.5 1.5 0 0 1-1.5-1.49M129 2.49A1.5 1.5 0 1 1 130.5 4a1.5 1.5 0 0 1-1.5-1.51",
      fill: "#d6d6d6"
    }), _v22.default.createElement("path", {
      d: "M143 74a3 3 0 0 0-3-3 3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3z",
      fill: "#657987"
    }), _v22.default.createElement("path", {
      fill: "#e8eaeb",
      d: "M37.78 3l1.45 4.31 4.33 1.44-4.33 1.44-1.45 4.3-1.44-4.3L32 8.75l4.34-1.44L37.78 3z"
    }), _v22.default.createElement("path", {
      d: "M138.12 30.29a4.44 4.44 0 0 0-4-4 .1.1 0 0 1 0-.19 4.36 4.36 0 0 0 4-4 .09.09 0 0 1 .18 0 4.32 4.32 0 0 0 4 4 .1.1 0 0 1 0 .19 4.4 4.4 0 0 0-4 4 .09.09 0 0 1-.18 0m-111 45a4.44 4.44 0 0 0-4-4 .1.1 0 0 1 0-.19 4.36 4.36 0 0 0 4-4 .09.09 0 0 1 .18 0 4.32 4.32 0 0 0 4 4 .1.1 0 0 1 0 .19 4.4 4.4 0 0 0-4 4 .09.09 0 0 1-.18 0",
      fill: "#657987"
    }), _v22.default.createElement("path", {
      fill: "#d6d6d6",
      d: "M4.88 42l1.21 3.63 3.66 1.22-3.66 1.21-1.21 3.63-1.22-3.63L0 46.85l3.66-1.22L4.88 42z"
    }), _v22.default.createElement("path", {
      d: "M15 2.2l1.26.41a.85.85 0 0 1 .53.53l.42 1.25.42-1.25a.85.85 0 0 1 .53-.53l1.26-.41-1.26-.42a.85.85 0 0 1-.53-.53L17.21 0l-.42 1.25a.85.85 0 0 1-.53.53z",
      fill: "#8699a6"
    }), _v22.default.createElement("path", {
      fill: "#657987",
      d: "M155.67 5l1.3 2.36 2.37 1.29-2.37 1.29-1.3 2.36-1.3-2.36L152 8.65l2.37-1.29 1.3-2.36zm.99 9.28a1 1 0 0 1 0 1.37 1 1 0 0 1-1.38-1.37 1 1 0 0 1 1.38 0m6 50a1 1 0 0 1 0 1.37 1 1 0 0 1-1.38-1.37 1 1 0 0 1 1.38 0"
    }), _v22.default.createElement("path", {
      d: "M21.66 53.28a1 1 0 0 1 0 1.37 1 1 0 1 1-1.38-1.37 1 1 0 0 1 1.38 0m148.08-19.57l-3.77 1.25 3.77 1.25 1.26 3.75 1.26-3.75 3.77-1.25-3.77-1.25-1.26-3.75-1.26 3.75z",
      fill: "#d6d6d6"
    }));
  };
  function _v236({
    searchText: _v0,
    backLabel: _v1,
    onBack: _v2
  }) {
    return (0, _v14.jsxs)(_v237, {
      children: [(0, _v14.jsx)(_v235, {
        height: "138",
        width: "180"
      }), (0, _v14.jsx)(_v57.Paragraph, {
        size: "1",
        children: (0, _v27.translate)({
          singular: "No results for {SEARCH_TEXT}",
          replacements: {
            SEARCH_TEXT: _v0
          },
          dictionary: {
            es: {
              singular: "Sin resultados para {SEARCH_TEXT}"
            },
            "de-DE": {
              singular: "Keine Ergebnisse für {SEARCH_TEXT}"
            },
            "fr-FR": {
              singular: "Pas de résultat pour {SEARCH_TEXT}"
            },
            "ja-JP": {
              singular: "{SEARCH_TEXT} の検索結果がありません"
            },
            "ko-KR": {
              singular: "{SEARCH_TEXT}에 대한 검색 결과 없음"
            },
            "pt-BR": {
              singular: "Nenhum resultado para {SEARCH_TEXT}"
            },
            "zh-CN": {
              singular: "没有 {SEARCH_TEXT} 的结果"
            }
          }
        })
      }), _v1 && (0, _v14.jsx)(_v54.Button, {
        format: "primary",
        onClick: () => _v2 && _v2(),
        children: _v1
      })]
    });
  }
  let _v237 = _v33.default.article.withConfig({
    displayName: "NoResults__Wrapper",
    componentId: "sc-10dfde32-0"
  })`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${(0, _v51.rem)(20)};
`;
  var _v238 = _v0.i(0),
    _v239 = _v0.i(0);
  function _v240({
    onSearch: _v0,
    disabled: _v1,
    searchText: _v2
  }) {
    let _v3 = (0, _v22.useRef)(null);
    return (0, _v22.useLayoutEffect)(() => {
      _v3.current && (_v3.current.value = _v2);
    }, [_v3, _v2]), (0, _v22.useLayoutEffect)(() => {
      _v3.current && (_v3.current.disabled = _v1, _v1 || _v3.current.select());
    }, [_v3, _v1]), (0, _v14.jsxs)(_v241, {
      children: [(0, _v14.jsx)(_v242, {
        ref: _v3,
        onKeyUp: _v0 => {
          _v3.current && _v0.keyCode === _v49.KeyCodes.ENTER && (_v0(_v3.current.value), _v0.preventDefault());
        },
        placeholder: _v66.default.Search
      }), (0, _v14.jsx)(_v243, {
        children: (0, _v14.jsx)(_v244, {
          icon: (0, _v14.jsx)(_v238.SearchMagnifier, {
            height: (0, _v51.rem)(22),
            color: "black",
            opacity: "0.25"
          }),
          variant: "minimal",
          format: "secondary",
          onClick: () => _v0(_v3.current?.value || "")
        })
      })]
    });
  }
  let _v241 = _v33.default.article.withConfig({
      displayName: "SearchInputField__Wrapper",
      componentId: "sc-69b46ac8-0"
    })`
  position: relative;
  width: 100%;
`,
    _v242 = (0, _v33.default)(_v239.Input).withConfig({
      displayName: "SearchInputField__SearchInput",
      componentId: "sc-69b46ac8-1"
    })`
  input {
    box-sizing: border-box;
    height: ${(0, _v51.rem)(50)};
    padding-right: ${(0, _v51.rem)(50)};

    &::placeholder {
      color: ${_v53.bokehTheme.colors.gray["200"]};
    }

    &:disabled {
      pointer-events: none;
      background-color: ${_v53.bokehTheme.colors.gray["50"]};

      &::placeholder {
        color: ${_v53.bokehTheme.colors.gray["500"]};
      }
    }
  }
`,
    _v243 = _v33.default.aside.withConfig({
      displayName: "SearchInputField__IconWrapper",
      componentId: "sc-69b46ac8-2"
    })`
  height: ${(0, _v51.rem)(50)};
  width: ${(0, _v51.rem)(50)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v244 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "SearchInputField__SearchButton",
      componentId: "sc-69b46ac8-3"
    })`
  width: calc(100% - ${(0, _v51.rem)(2)});
  height: calc(100% - ${(0, _v51.rem)(2)});
`;
  function _v245({
    queryUrl: _v0,
    inputType: _v1 = "radio",
    authToken: _v2,
    parentLoading: _v3 = !1,
    isVerticalClipAllowed: _v4,
    selectedClips: _v5,
    onSelectedClipsChange: _v6,
    onNoInitialClips: _v7,
    filterNonProfileVideos: _v8,
    isUpcomingEventAllowed: _v9,
    isOnDemandAllowed: _v10
  }) {
    let [_v11, _v12] = (0, _v22.useState)([]),
      {
        data: _v13,
        searchText: _v14,
        error: _v15,
        setPage: _v16,
        setSearchText: _v17
      } = function (_v0, _v1, _v2, _v3 = !1) {
        let [_v4, _v5] = (0, _v22.useState)(1),
          [_v6, _v7] = (0, _v22.useState)(""),
          _v8 = (0, _v45.default)(),
          _v9 = (0, _v22.useCallback)((_v0, _v1, _v2, _v3, _v4) => {
            let _v5 = {
              page: _v2,
              sizes: "295x166",
              perPage: 20,
              fields: "uri,name,created_time,pictures.sizes.link,duration,privacy.view,width,height,live.status"
            };
            return _v3 && (_v5.filter = "non-profile"), _v1 && (_v5.useBelugaSearch = !0, _v5.weakSearch = !0, _v5.sort = "date", _v5.direction = "desc", _v5.query = _v1), _v8(_v0, _v5, void 0, void 0, _v4 ? {
              Authorization: _v4
            } : void 0);
          }, [_v8]),
          {
            data: _v10,
            error: _v11,
            isValidating: _v12
          } = (0, _v44.default)(_v1 ? [_v0, _v6, _v4, _v3, _v2] : null, ([_v0, _v1, _v2, _v3, _v4]) => _v9(_v0, _v1, _v2, _v3, _v4));
        return {
          setPage: _v5,
          setSearchText: _v7,
          searchText: _v6,
          data: _v10,
          error: _v11,
          isValidating: _v12
        };
      }(_v0, !_v3, _v2, _v8),
      _v18 = !_v13 && !_v15,
      _v19 = (_v0 = "") => {
        _v14 !== _v0 && (_v12([]), _v6([]), ((_v0 = "") => {
          _v16(1), _v17(_v0);
        })(_v0));
      };
    return (0, _v22.useEffect)(() => {
      if (_v13) {
        let _v0 = [...(_v13.items || [])];
        _v12(_v0 => [..._v0, ..._v0]), 1 !== _v13.page || 0 !== _v0.length || _v14 || _v7();
      }
    }, [_v13, _v7, _v14]), (0, _v14.jsx)(_v246, {
      children: (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v240, {
          onSearch: _v19,
          searchText: _v14,
          disabled: _v18 || _v3
        }), (0, _v14.jsx)(_v233, {
          inputType: _v1,
          clips: _v11,
          loading: _v18 || _v3,
          fetchNext: () => {
            !_v18 && _v13 && _v13.paging.next && _v16(_v0 => _v0 + 1);
          },
          isVerticalClipAllowed: _v4,
          isUpcomingEventAllowed: _v9,
          selectedClips: _v5,
          onSelectionChange: _v0 => _v6(_v0),
          isOnDemandAllowed: _v10
        }), !_v18 && !_v3 && _v13 && !_v13.items?.length && !_v11.length && _v14 && (0, _v14.jsx)(_v236, {
          searchText: _v14,
          backLabel: _v66.default.BackToVideos,
          onBack: _v19
        })]
      })
    });
  }
  let _v246 = _v33.default.section.withConfig({
    displayName: "clip-selector__ListWrapper",
    componentId: "sc-78665913-0"
  })`
  overflow: auto;
  padding: ${(0, _v51.rem)(12)} ${(0, _v51.rem)(24)} 0 ${(0, _v51.rem)(26)};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
  var _v247 = _v0.i(0),
    _v248 = _v0.i(0);
  function _v249({
    showCropper: _v0,
    setYPosition: _v1,
    children: _v2
  }) {
    let _v3 = (0, _v22.useRef)(null),
      _v4 = (0, _v22.useRef)(null),
      [_v5, _v6] = (0, _v22.useState)(0);
    (0, _v22.useEffect)(() => {
      if (_v3.current && _v0) {
        let {
          offsetHeight: _v0,
          offsetWidth: _v1
        } = _v3.current;
        _v6(18 * _v1 / 100 / _v0 * 100);
      }
    }, [_v3, _v0]);
    let _v7 = (0, _v248.useGesture)({
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
    return (0, _v14.jsxs)(_v250, {
      ref: _v3,
      children: [_v0 && (0, _v14.jsxs)(_v254, {
        ref: _v4,
        ..._v7(),
        style: {
          top: `${(100 - _v5) / 2}%`
        },
        children: [(0, _v14.jsx)(_v252, {}), (0, _v14.jsx)(_v253, {})]
      }), _v2]
    });
  }
  let _v250 = _v33.default.section.withConfig({
      displayName: "Cropper__Wrapper",
      componentId: "sc-66dde965-0"
    })`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,
    _v251 = _v33.css`
  &:before,
  &:after {
    content: '';
    width: ${(0, _v51.rem)(20)};
    height: ${(0, _v51.rem)(20)};
    border-style: solid;
    border-color: ${_v53.bokehTheme.colors.white};
    position: absolute;
  }

  &:before {
    left: ${(0, _v51.rem)(3)};
    border-right: none;
  }

  &:after {
    right: ${(0, _v51.rem)(3)};
    border-left: none;
  }
`,
    _v252 = _v33.default.div.withConfig({
      displayName: "Cropper__TopContainer",
      componentId: "sc-66dde965-1"
    })`
  ${_v251};
  &:before,
  &:after {
    top: ${(0, _v51.rem)(3)};
    border-bottom: none;
  }
`,
    _v253 = _v33.default.div.withConfig({
      displayName: "Cropper__BottomContainer",
      componentId: "sc-66dde965-2"
    })`
  ${_v251};
  &:before,
  &:after {
    bottom: ${(0, _v51.rem)(3)};
    border-top: none;
  }
`,
    _v254 = _v33.default.div.withConfig({
      displayName: "Cropper__CropBox",
      componentId: "sc-66dde965-3"
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
  function _v255({
    label: _v0,
    duration: _v1,
    hasError: _v2,
    onInvalidFormat: _v3,
    onChange: _v4,
    onSubmit: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)("00:00:00");
    (0, _v22.useEffect)(() => {
      _v7(_v95(_v1, "hh:mm:SS"));
    }, [_v1]);
    let _v8 = (0, _v22.useMemo)(() => {
        let _v0 = _v6.split(":").map(_v0 => /^\d$/.test(_v0) ? "0" + _v0 : _v0),
          _v1 = 3 - _v0.length;
        return _v1 > 0 ? [...Array(_v1).keys()].map(() => "00").join(":") + ":" + _v6 : 0 === _v1 ? _v0.join(":") : -1;
      }, [_v6]),
      _v9 = () => {
        _v95(_v1, "hh:mm:SS") !== _v8 && (-1 !== _v8 && /^[0-9]+:[0-5][0-9]:[0-5][0-9]$/.test(_v8) ? _v5(_v8.split(":").map((_v0, _v1) => parseInt(_v0, 10) * Math.pow(60, 2 - _v1)).reduce((_v0, _v1) => _v0 + _v1, 0)) : _v3());
      };
    return (0, _v14.jsx)(_v257, {
      label: (0, _v14.jsx)(_v258, {
        children: _v0
      }),
      value: _v6,
      onChange: _v0 => {
        _v4?.(), _v7(_v0.target.value);
      },
      onKeyDown: _v0 => {
        _v0.keyCode === _v49.KeyCodes.ENTER && _v9();
      },
      onBlur: _v9,
      status: _v2 ? "negative" : "neutral",
      messages: {
        error: (0, _v14.jsx)(_v57.Paragraph, {
          size: "3",
          role: "note",
          status: "negative",
          children: _v66.default.Invalid
        })
      }
    });
  }
  let _v256 = _v33.css`
  color: ${_v53.bokehTheme.colors.gray["800"]};
  font-size: ${(0, _v51.rem)(14)};
  letter-spacing: 0;
  line-height: ${(0, _v51.rem)(20)};
  font-weight: normal;
`,
    _v257 = (0, _v33.default)(_v239.Input).withConfig({
      displayName: "TimeInput__InputField",
      componentId: "sc-bbd6be44-0"
    })`
  input {
    ${_v256};
  }
`,
    _v258 = _v33.default.span.withConfig({
      displayName: "TimeInput__Label",
      componentId: "sc-bbd6be44-1"
    })`
  ${_v256};
`;
  function _v259({
    start: _v0,
    end: _v1,
    duration: _v2,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(!1),
      [_v6, _v7] = (0, _v22.useState)(!1);
    (0, _v22.useEffect)(() => {
      _v5(!1);
    }, [_v0]), (0, _v22.useEffect)(() => {
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
    return (0, _v14.jsxs)(_v260, {
      children: [(0, _v14.jsx)(_v261, {
        children: (0, _v14.jsx)(_v255, {
          duration: _v0,
          onSubmit: _v0 => _v8(_v0, !0),
          onChange: () => _v5(!1),
          hasError: _v4,
          onInvalidFormat: () => _v5(!0),
          label: _v66.default.Start
        })
      }), (0, _v14.jsx)(_v261, {
        children: (0, _v14.jsx)(_v255, {
          duration: _v1,
          onSubmit: _v0 => _v8(_v0, !1),
          onChange: () => _v7(!1),
          hasError: _v6,
          onInvalidFormat: () => _v7(!0),
          label: _v66.default.End
        })
      })]
    });
  }
  let _v260 = _v33.default.section.withConfig({
      displayName: "InputContainer__Container",
      componentId: "sc-616e2b10-0"
    })`
  margin-top: ${(0, _v51.rem)(29)};
`,
    _v261 = _v33.default.article.withConfig({
      displayName: "InputContainer__InputWrapper",
      componentId: "sc-616e2b10-1"
    })`
  width: ${(0, _v51.rem)(80)};
  display: inline-block;
  &:first-child {
    margin-right: ${(0, _v51.rem)(14)};
  }
`;
  var _v262 = ((_v2 = _v262 || {}).LEFT = "left", _v2.RIGHT = "right", _v2);
  function _v263({
    duration: _v0 = 0,
    onDrag: _v1,
    onDragStart: _v2,
    onDragEnd: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(0),
      [_v6, _v7] = (0, _v22.useState)(0),
      [_v8, _v9] = (0, _v22.useState)(!1),
      [_v10, _v11] = (0, _v22.useState)(!1),
      _v12 = (0, _v22.useRef)(null),
      _v13 = (0, _v22.useRef)(null),
      _v14 = (0, _v22.useRef)(null),
      _v15 = (0, _v22.useRef)(null),
      _v16 = (0, _v22.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (0 === _v0 ? 0 : (_v0 > _v0 ? _v0 : _v0) / _v0) * _v0;
      }, [_v0, _v12]),
      _v17 = (0, _v22.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (_v0 > _v0 ? _v0 : _v0) / _v0 * _v0;
      }, [_v0, _v12]),
      _v18 = (0, _v22.useMemo)(() => {
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
      _v19 = (0, _v22.useMemo)(() => ({
        from: _v95(_v18.from),
        to: _v95(_v18.to)
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
      _v23 = (0, _v248.useGesture)({
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
      _v24 = (0, _v248.useGesture)({
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
      _v25 = (0, _v248.useGesture)({
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
    return (0, _v22.useEffect)(() => {
      _v13.current && _v7(_v13.current.offsetWidth);
    }, [_v13]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v264, {
        ref: _v12,
        children: (0, _v14.jsxs)(_v265, {
          ref: _v13,
          children: [(0, _v14.jsx)(_v267, {
            ..._v23(),
            isStart: !0,
            ref: _v14,
            children: (0, _v14.jsx)(_v271, {
              theme: _v38.themes.dark,
              show: _v8,
              isStart: !0,
              children: _v19.from
            })
          }), (0, _v14.jsx)(_v268, {
            ..._v25()
          }), (0, _v14.jsx)(_v267, {
            ..._v24(),
            ref: _v15,
            children: (0, _v14.jsx)(_v271, {
              theme: _v38.themes.dark,
              show: _v10,
              children: _v19.to
            })
          })]
        })
      }), (0, _v14.jsxs)(_v269, {
        children: [(0, _v14.jsx)(_v270, {
          children: _v95(0)
        }), (0, _v14.jsx)(_v270, {
          children: _v95(_v0)
        })]
      }), (0, _v14.jsx)(_v259, {
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
  let _v264 = _v33.default.section.withConfig({
      displayName: "Trimmer__TrimmerContainer",
      componentId: "sc-5bd9fe3b-0"
    })`
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
  width: 100%;
  height: ${(0, _v51.rem)(32)};
  border-radius: ${(0, _v51.rem)(2)};
  position: relative;
  box-sizing: border-box;
`,
    _v265 = _v33.default.article.withConfig({
      displayName: "Trimmer__TrimmerSelection",
      componentId: "sc-5bd9fe3b-1"
    })`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["400"], .3)};
`,
    _v266 = _v33.css`
  height: ${(0, _v51.rem)(32)};
  min-width: ${(0, _v51.rem)(_v49.SCRUBBER_WIDTH)};
  color: ${_v53.bokehTheme.colors.white};
  background-color: ${_v53.bokehTheme.colors.blue["500"]};
  line-height: ${(0, _v51.rem)(28)};
  text-align: center;
  cursor: grab;
  position: relative;

  &:after {
    content: '|';
    font-size: ${(0, _v51.rem)(12)};
  }
`,
    _v267 = _v33.default.div.withConfig({
      displayName: "Trimmer__Scrubber",
      componentId: "sc-5bd9fe3b-2"
    })`
  ${_v266}
  ${({
      isStart: _v0
    }) => _v0 ? _v33.css`
          border-top-left-radius: ${(0, _v51.rem)(2)};
          border-bottom-left-radius: ${(0, _v51.rem)(2)};
        ` : _v33.css`
          border-top-right-radius: ${(0, _v51.rem)(2)};
          border-bottom-right-radius: ${(0, _v51.rem)(2)};
        `}
`,
    _v268 = _v33.default.div.withConfig({
      displayName: "Trimmer__Selection",
      componentId: "sc-5bd9fe3b-3"
    })`
  width: 100%;
  height: 100%;
  cursor: move;
`,
    _v269 = _v33.default.section.withConfig({
      displayName: "Trimmer__DurationContainer",
      componentId: "sc-5bd9fe3b-4"
    })`
  margin-top: ${(0, _v51.rem)(7)};
  display: flex;
  justify-content: space-between;
`,
    _v270 = _v33.default.time.withConfig({
      displayName: "Trimmer__TimeLabel",
      componentId: "sc-5bd9fe3b-5"
    })`
  color: ${_v53.bokehTheme.colors.gray["400"]};
  font-size: ${(0, _v51.rem)(12)};
  letter-spacing: ${(0, _v51.rem)(.17)};
  line-height: ${(0, _v51.rem)(14)};
`,
    _v271 = _v33.default.aside.withConfig({
      displayName: "Trimmer__Tooltip",
      componentId: "sc-5bd9fe3b-6"
    })`
  background-color: ${({
      theme: _v0
    }) => _v0.content.background};
  position: absolute;
  padding: 0 ${(0, _v51.rem)(12)};
  top: -${(0, _v51.rem)(34)};
  font-size: ${(0, _v51.rem)(14)};
  letter-spacing: ${(0, _v51.rem)(.1)};
  line-height: ${(0, _v51.rem)(24)};
  opacity: 0;
  transition: opacity 100ms linear;

  ${({
      show: _v0
    }) => _v0 && _v33.css`
      opacity: 1;
    `}

  ${({
      isStart: _v0
    }) => _v0 ? _v33.css`
          left: -${(0, _v51.rem)(24)};
        ` : _v33.css`
          right: -${(0, _v51.rem)(24)};
        `}
`;
  function _v272({
    size: _v0 = "xl",
    format: _v1
  }) {
    return (0, _v14.jsx)(_v273, {
      children: (0, _v14.jsx)(_v34.Spinner, {
        ...("basic" === _v1 ? {
          size: _v0,
          color: "gray.500"
        } : {
          size: _v0
        })
      })
    });
  }
  let _v273 = _v33.default.aside.withConfig({
    displayName: "OverlayLoader__LoaderWrapper",
    componentId: "sc-2252c850-0"
  })`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
  function _v274({
    coverClip: {
      configUrl: _v0,
      clipId: _v1,
      duration: _v2
    },
    setYPosition: _v3,
    setTimeBounds: _v4,
    timeBounds: _v5,
    onVideoLoad: _v6
  }) {
    let [_v7, _v8] = (0, _v22.useState)(!1),
      {
        startTime: _v9,
        endTime: _v10
      } = _v5,
      _v11 = (0, _v22.useRef)(null),
      _v12 = (0, _v22.useRef)(null),
      {
        player: _v13
      } = (0, _v170.usePlayer)(_v11, Number(_v1), !0, _v0),
      _v14 = () => {
        _v12.current = _v13?.play() || null;
      };
    return (0, _v22.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v10 + _v49.TRIMMER_ROUND_OFFSET && (_v13.currentTime = _v9);
      };
      return _v13 && (_v13.muted = !0, _v13.on("timeupdate", _v0), _v13.once("timeupdate", () => {
        _v8(!0), _v6();
      })), () => {
        _v13 && _v13.off("timeupdate", _v0);
      };
    }, [_v13, _v9, _v10, _v7, _v6]), (0, _v22.useEffect)(() => {
      _v14();
    }, [_v13]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [!_v7 && (0, _v14.jsx)(_v272, {}), (0, _v14.jsxs)(_v277, {
        isVideoBuffering: !_v7,
        children: [(0, _v14.jsx)(_v275, {
          children: (0, _v14.jsx)(_v249, {
            showCropper: _v7,
            setYPosition: _v3,
            children: (0, _v14.jsx)(_v276, {
              ref: _v11
            })
          })
        }), _v13 && (0, _v14.jsx)(_v263, {
          onDrag: _v0 => {
            _v13.currentTime = _v0;
          },
          onDragStart: () => _v12.current?.then(() => _v13?.pause()),
          onDragEnd: ({
            from: _v0,
            to: _v1
          }) => {
            _v4({
              ..._v5,
              startTime: _v0,
              endTime: _v1
            }), _v14();
          },
          duration: _v2
        })]
      })]
    });
  }
  let _v275 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__CropWrapper",
      componentId: "sc-9b73360c-0"
    })`
  position: relative;
  width: 100%;
  height: 100%;
`,
    _v276 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__VideoWrapper",
      componentId: "sc-9b73360c-1"
    })`
  video {
    display: block;
  }
`,
    _v277 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__VideoContentWrapper",
      componentId: "sc-9b73360c-2"
    })`
  padding: ${(0, _v51.rem)(24)};

  ${({
      isVideoBuffering: _v0
    }) => _v0 && _v33.css`
      opacity: 0.15;
      pointer-events: none;
    `}
`;
  function _v278(_v0) {
    let {
        clipUri: _v1,
        setTimeBounds: _v2,
        timeBounds: _v3,
        onLoad: _v4
      } = _v0,
      {
        data: _v5,
        loading: _v6
      } = (0, _v115.useQuery)(`/videos/${(0, _v50.getIdFromUri)(_v1)}?autoplay=1&background=1&default_to_hd=1`);
    return (0, _v22.useEffect)(() => {
      _v5 && _v2({
        ..._v3,
        endTime: _v5.duration
      });
    }, [_v5]), (0, _v14.jsx)(_v279, {
      children: !_v6 && _v5 ? (0, _v14.jsx)(_v274, {
        ..._v0,
        coverClip: {
          clipId: String((0, _v50.getIdFromUri)(_v5.uri)),
          configUrl: _v5.configUrl,
          duration: _v5.duration
        },
        onVideoLoad: () => _v4(!0)
      }) : (0, _v14.jsx)(_v272, {})
    });
  }
  let _v279 = _v33.default.div.withConfig({
    displayName: "VideoTrimmerAndCrop__SectionContainer",
    componentId: "sc-938e3550-0"
  })`
  position: relative;
  height: 100%;
  overflow: auto;
`;
  function _v280({
    onSubmit: _v0,
    onDismiss: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(0),
      [_v4, _v5] = (0, _v22.useState)(!1),
      [_v6, _v7] = (0, _v22.useState)(),
      [_v8, _v9] = (0, _v22.useState)(!0),
      [_v10, _v11] = (0, _v22.useState)(50),
      [_v12, _v13] = (0, _v22.useState)(!1),
      [_v14, _v15] = (0, _v22.useState)({
        startTime: 0,
        endTime: 0
      }),
      _v16 = (0, _v22.useContext)(_v32.ViewerContext),
      _v17 = `users/${_v16.user?.id}/videos`,
      _v18 = (0, _v22.useCallback)(() => _v9(!1), []),
      _v19 = _v0 => {
        let _v1 = _v2 + _v0;
        2 === _v1 && _v6 ? (_v13(!0), _v0({
          clipId: (0, _v50.getIdFromUri)(_v6.uri),
          yPosition: Math.trunc(_v10),
          ..._v14
        })) : _v3(_v1), _v5(0 !== _v1);
      };
    return (0, _v14.jsxs)(_v282, {
      children: [(0, _v14.jsx)(_v247.default, {
        onClick: _v1
      }), (0, _v14.jsx)(_v281, {
        size: "4",
        children: 0 === _v2 ? _v66.default.PickerHeader : _v66.default.VideoTrimCropModalHeader
      }), _v8 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [0 === _v2 ? (0, _v14.jsx)(_v245, {
          queryUrl: _v17,
          selectedClips: _v6 ? [_v6] : [],
          onSelectedClipsChange: _v0 => _v7(_v0[0]),
          onNoInitialClips: _v18
        }) : (0, _v14.jsx)(_v278, {
          clipUri: String(_v6?.uri),
          yPosition: _v10,
          setYPosition: _v11,
          timeBounds: _v14,
          setTimeBounds: _v15,
          onLoad: _v0 => _v5(!_v0)
        }), (0, _v14.jsxs)(_v283, {
          children: [(0, _v14.jsx)(_v284, {
            children: (0, _v27.translate)({
              singular: "{STEP} of {STEPS}",
              replacements: {
                STEP: _v2 + 1,
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
                  singular: "{STEP} / {STEPS}"
                },
                "ko-KR": {
                  singular: "{STEP}/{STEPS}"
                },
                "pt-BR": {
                  singular: "{STEP} de {STEPS}"
                },
                "zh-CN": {
                  singular: "{STEP} / {STEPS}"
                }
              }
            })
          }), (0, _v14.jsxs)(_v285, {
            children: [(0, _v14.jsx)(_v286, {
              format: "secondary",
              onClick: () => _v19(-1),
              disabled: 0 === _v2 || _v12,
              children: _v66.default.Back
            }), (0, _v14.jsx)(_v286, {
              format: "primary",
              onClick: () => {
                _v4 || _v12 || _v19(1);
              },
              disabled: _v12 || _v4 || !_v6,
              loading: _v12,
              children: 0 === _v2 ? _v66.default.Next : _v66.default.Done
            })]
          })]
        })]
      }) : (0, _v14.jsx)(_v201, {})]
    });
  }
  let _v281 = (0, _v33.default)(_v195.Header).withConfig({
      displayName: "VideoPicker__CustomHeader",
      componentId: "sc-23d0bb57-0"
    })`
  padding: ${(0, _v51.rem)(24)} ${(0, _v51.rem)(40)} 0 ${(0, _v51.rem)(25)};
  color: ${_v53.bokehTheme.colors.gray["800"]};
  letter-spacing: 0.2;
`,
    _v282 = _v33.default.section.withConfig({
      displayName: "VideoPicker__Container",
      componentId: "sc-23d0bb57-1"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  width: 90vw;
  height: 85vh;
  max-width: ${(0, _v51.rem)(662)};
  max-height: ${(0, _v51.rem)(752)};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`,
    _v283 = _v33.default.footer.withConfig({
      displayName: "VideoPicker__ModalFooter",
      componentId: "sc-23d0bb57-2"
    })`
  display: flex;
  box-shadow: 0 ${(0, _v51.rem)(-4)} ${(0, _v51.rem)(8)} 0 rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  align-items: center;
`,
    _v284 = (0, _v33.default)(_v57.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "VideoPicker__Steps",
      componentId: "sc-23d0bb57-3"
    })`
  margin: 0 0 0 ${(0, _v51.rem)(25)};
`,
    _v285 = _v33.default.aside.withConfig({
      displayName: "VideoPicker__ButtonWrapper",
      componentId: "sc-23d0bb57-4"
    })`
  margin: ${(0, _v51.rem)(20)};
  display: flex;
`,
    _v286 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "VideoPicker__CustomButton",
      componentId: "sc-23d0bb57-5"
    })`
  width: ${(0, _v51.rem)(100)};
  ${_v61.media.xsm`
    width: ${(0, _v51.rem)(120)};
  `}

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  &:first-child {
    margin-right: ${(0, _v51.rem)(10)};
  }
`;
  var _v287 = _v0.i(0);
  let _v288 = /iphone|ipod|ipad|android|webos|blackberry|windows phone|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  function _v289({
    coverVideo: _v0,
    setCoverVideo: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      _v4 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      {
        trackUserProfileCoverVideoActionClicked: _v5
      } = (0, _v30.useProfileTracking)();
    (0, _v287.default)(_v2 ? _v0 => (0, _v50.onEsc)(_v0, () => _v3(!1)) : void 0, [_v2]);
    let [{
      put: _v6,
      destroy: _v7
    }, {
      loading: _v8,
      error: _v9,
      data: _v10
    }] = (0, _v191.useMutation)("/me/background_video");
    return (0, _v22.useEffect)(() => {
      !_v8 && _v10 && _v3(_v8);
    }, [_v10, _v8]), (0, _v22.useEffect)(() => {
      _v10 && _v1(_v10);
    }, [_v1, _v10]), (0, _v22.useEffect)(() => {
      !_v10 || _v8 || _v9 || _v4();
    }, [_v10, _v8, _v9, _v4]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [_v0 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [!_v8 && (0, _v14.jsx)(_v192, {
          onRemove: () => {
            _v5({
              userProfileCoverVideoAction: "remove"
            }), _v7(), _v1(null);
          },
          onReplace: () => {
            _v5({
              userProfileCoverVideoAction: "replace"
            }), _v3(!0);
          }
        }), (0, _v14.jsx)(_v171, {
          clipUrl: "" + _v0.clipId,
          configUrl: _v0.configUrl,
          end: _v0.endTime,
          start: _v0.startTime,
          poster: _v0.firstFrameURL,
          yPosition: _v0.yPosition
        })]
      }) : (0, _v14.jsx)(_v197, {
        subTitle: _v66.default.AddCoverVideo,
        onClick: () => _v3(!0)
      }), (0, _v14.jsx)(_v77, {
        onOpen: () => _v3(!1),
        active: _v2,
        content: (0, _v14.jsx)(_v280, {
          onSubmit: _v0 => {
            _v6({
              variables: (0, _v47.decamelizeDeep)(_v0)
            });
          },
          onDismiss: () => _v3(!1)
        })
      })]
    });
  }
  function _v290({
    profile: _v0
  }) {
    let {
        editMode: _v1
      } = (0, _v22.useContext)(_v43.default),
      [_v2, _v3] = (0, _v22.useState)(_v0.backgroundVideo?.[0] || null);
    return (0, _v14.jsx)(_v14.Fragment, {
      children: (_v1 || !!_v2) && (0, _v14.jsx)(_v291, {
        children: _v1 && !_v288 ? (0, _v14.jsx)(_v289, {
          coverVideo: _v2,
          setCoverVideo: _v3
        }) : _v2 && (0, _v14.jsx)(_v171, {
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
  let _v291 = _v33.default.section.withConfig({
    displayName: "CoverVideo__Wrapper",
    componentId: "sc-197d422c-0"
  })`
  border-top: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["200"]};
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
  transition: all 200ms linear;
`;
  var _v292 = _v0.i(0);
  let _v293 = _v22.default.forwardRef(({
      value: _v0,
      size: _v1 = "md",
      placeholder: _v2,
      onSubmit: _v3,
      errorMsg: _v4,
      disabled: _v5 = !1,
      onChange: _v6
    }, _v7) => {
      let [_v8, _v9] = (0, _v22.useState)(""),
        _v10 = (0, _v22.useRef)(null);
      return (0, _v22.useEffect)(() => {
        let _v0 = _v0 => {
            _v0.preventDefault(), _v9("");
          },
          _v1 = _v10.current;
        return _v1?.addEventListener("mousedown", _v0), () => _v1?.removeEventListener("mousedown", _v0);
      }, [_v10, _v8, _v0, _v5]), (0, _v22.useEffect)(() => {
        _v9(_v0);
      }, [_v0]), (0, _v14.jsxs)(_v294, {
        children: [(0, _v14.jsx)(_v295, {
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
          status: _v4 ? "negative" : "neutral",
          ref: _v7,
          disabled: _v5,
          autoFocus: !0
        }), !!_v8 && !_v5 && (0, _v14.jsx)(_v297, {
          children: (0, _v14.jsx)(_v298, {
            icon: (0, _v14.jsx)(_v52.CloseX, {}),
            format: "soft",
            variant: "hyperminimal",
            ref: _v10,
            size: "xs"
          })
        })]
      });
    }),
    _v294 = _v33.default.div.withConfig({
      displayName: "DismissableInput__InputContainer",
      componentId: "sc-e963c0e2-0"
    })`
  position: relative;
`,
    _v295 = (0, _v33.default)(_v239.Input).withConfig({
      displayName: "DismissableInput__CustomInput",
      componentId: "sc-e963c0e2-1"
    })`
  input {
    padding-right: ${(0, _v51.rem)(36)};

    &::-ms-clear {
      display: none;
    }

    &:disabled {
      pointer-events: none;
      background-color: ${(0, _v51.rgba)(0, 0, 0, .05)};
    }
  }
`,
    _v296 = _v33.keyframes`
    0% {opacity: 0}
  100% {opacity: 1}
`,
    _v297 = _v33.default.div.withConfig({
      displayName: "DismissableInput__DismissContainer",
      componentId: "sc-e963c0e2-2"
    })`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  animation: 0.3s ${_v296} ease-out 1;
`,
    _v298 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "DismissableInput__DismissButton",
      componentId: "sc-e963c0e2-3"
    })`
  &:hover {
    background-color: transparent;
  }
`;
  function _v299() {
    let {
        mutate: _v0
      } = (0, _v22.useContext)(_v41),
      _v1 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      _v2 = (0, _v45.default)(),
      [{
        loading: _v3,
        called: _v4,
        error: _v5
      }, _v6] = (0, _v22.useState)({
        loading: !1,
        called: !1,
        error: !1
      }),
      _v7 = (0, _v22.useCallback)(_v0 => (_v6({
        loading: !1,
        called: !0,
        error: !0
      }), Promise.reject(_v0)), []),
      _v8 = (0, _v22.useCallback)(() => {
        _v1(), _v6({
          loading: !1,
          called: !0,
          error: !1
        });
      }, [_v1]),
      _v9 = (0, _v22.useCallback)((_v0, _v1) => _v2("me", {
        fields: _v0
      }, _v49.HTTPMethods.PATCH, _v1), [_v2]),
      _v10 = (0, _v22.useCallback)(_v0 => _v0(_v0 => _v0 ? {
        ..._v0,
        ..._v0
      } : _v0, {
        revalidate: !1
      }), [_v0]),
      _v11 = (0, _v22.useCallback)(_v0 => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v1 = (0, _v47.decamelizeDeep)(_v0);
        return _v10(_v0), _v9(Object.keys(_v1).join(","), _v1).then(_v8).catch(_v7);
      }, [_v10, _v7, _v8, _v9]),
      _v12 = (0, _v22.useCallback)(_v0 => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v9("location_details", (0, _v47.decamelizeDeep)(_v0)).then(() => {
        _v10({
          locationDetails: _v0
        }), _v8();
      }).catch(_v7)), [_v10, _v7, _v8, _v9]),
      _v13 = (0, _v22.useCallback)(_v0 => {
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
      _v14 = (0, _v22.useCallback)((_v0, _v1 = !0) => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        }), _v13(_v0);
        let _v2 = (0, _v47.decamelizeDeep)(_v0);
        return _v9(Object.keys(_v2.profile_preferences).map(_v0 => "profile_preferences." + _v0).join(","), _v2).then(() => {
          _v1 && _v1(), _v6({
            loading: !1,
            called: !0,
            error: !1
          });
        }).catch(_v7);
      }, [_v7, _v1, _v13, _v9]),
      _v15 = (0, _v22.useCallback)(() => (_v6({
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
      _v16 = (0, _v22.useCallback)(_v0 => _v0 && _v0.json ? _v0.json().then(_v0 => {
        let _v1 = (0, _v47.camelizeDeep)(_v0),
          _v2 = _v1.invalidParameters?.[0]?.errorCode === _v49.EMAIL_INVALID_DOMAIN_ERROR_CODE ? _v66.default.InvalidDomainError : _v66.default.InvalidEmailAddress;
        return _v6({
          loading: !1,
          called: !0,
          error: !0
        }), Promise.reject(_v2);
      }) : Promise.reject(void 0), []),
      _v17 = (0, _v22.useCallback)((_v0, _v1) => (_v6({
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
      _v18 = (0, _v22.useCallback)((_v0, _v1) => {
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
      }, [_v0]),
      _v19 = (0, _v22.useCallback)((_v0, _v1, _v2) => {
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
      _v20 = (0, _v22.useCallback)(_v0 => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v1 = {
          skills: _v0.map(_v0 => _v0.name).join(",")
        };
        return _v2("me/skills", void 0, _v49.HTTPMethods.PUT, _v1).then(() => {
          _v10({
            skills: _v0
          }), _v8();
        }).catch(_v7);
      }, [_v2, _v10, _v7, _v8]),
      _v21 = (0, _v22.useCallback)(_v0 => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v1 = _v0.map(_v0 => _v0.uri).join(","),
          _v2 = (0, _v47.decamelizeDeep)({
            projectUris: _v1
          });
        return _v2("me/project_types", void 0, _v49.HTTPMethods.PUT, _v2).then(() => {
          _v10({
            projectTypes: _v0
          }), _v8();
        }).catch(_v7);
      }, [_v2, _v10, _v7, _v8]);
    return {
      called: _v4,
      error: _v5,
      fetchPublicVideosCount: _v15,
      loading: _v3,
      onLocationUpdate: _v12,
      onPreferenceUpdate: _v14,
      onUserUpdate: _v11,
      updateEmail: _v17,
      updateLink: _v19,
      updateProfilePicture: (0, _v22.useCallback)(_v0 => _v10({
        pictures: _v0
      }), [_v10]),
      updateProjectTypes: _v21,
      updateSkills: _v20
    };
  }
  function _v300({
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
    return _v0 ? (0, _v14.jsx)(_v305, {
      onClick: () => _v1 && _v1(),
      editMode: _v2,
      children: (0, _v14.jsxs)(_v306, {
        children: [(0, _v14.jsx)(_v304, {
          id: "email-envelope"
        }), (0, _v14.jsx)(_v309, {
          editMode: _v2,
          ..._v3,
          children: _v0
        })]
      })
    }) : null;
  }
  function _v301({
    email: _v0,
    errorMsg: _v1,
    disable: _v2,
    onSubmit: _v3,
    onChange: _v4
  }) {
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsxs)(_v307, {
        children: [(0, _v14.jsx)(_v304, {}), (0, _v14.jsx)(_v310, {
          children: (0, _v14.jsx)(_v293, {
            value: _v0,
            errorMsg: _v1,
            onSubmit: _v3,
            onChange: _v4,
            disabled: _v2
          })
        })]
      }), _v1 && (0, _v14.jsx)(_v311, {
        children: _v1
      })]
    });
  }
  function _v302({
    email: _v0 = ""
  }) {
    let [_v1, _v2] = (0, _v22.useState)(!1),
      [_v3, _v4] = (0, _v22.useState)(""),
      [_v5, _v6] = (0, _v22.useState)(!1),
      [_v7, _v8] = (0, _v22.useState)(),
      {
        updateEmail: _v9
      } = _v299(),
      {
        userId: _v10
      } = (0, _v22.useContext)(_v43.default),
      {
        trackUserProfileEditFieldClicked: _v11
      } = (0, _v30.useProfileTracking)(),
      _v12 = () => {
        _v11({
          userProfilePageUserId: String(_v10),
          userProfileEditField: "add_email"
        }), _v2(!0);
      },
      _v13 = (0, _v22.useCallback)(_v0 => {
        if (!_v5) {
          let _v0 = _v0.trim();
          _v3 !== _v0 ? (_v4(_v0), _v0 === _v0 ? (_v8(void 0), _v2(!1)) : (0, _v50.validateEmail)(_v0) || !_v0 ? (_v8(void 0), _v6(!0), _v9(_v0, !!(_v0 && _v0)).then(() => {
            _v6(!1), _v2(!1);
          }).catch(_v0 => {
            _v6(!1), _v8(_v0);
          })) : _v8(_v66.default.InvalidEmailAddress)) : _v2(!!_v7);
        }
      }, [_v0, _v7, _v5, _v9, _v3]);
    return (0, _v22.useEffect)(() => {
      _v4(_v0);
    }, [_v0]), (0, _v14.jsx)(_v312, {
      tabIndex: 0,
      onKeyDown: _v0 => {
        (0, _v50.onTab)(_v0, () => {
          _v1 || _v12();
        }), _v0.keyCode === _v49.KeyCodes.ESC && (_v0.preventDefault(), _v2(!1), _v8(void 0), _v4(_v0));
      },
      children: _v1 ? (0, _v14.jsx)(_v301, {
        email: _v3,
        errorMsg: _v7,
        onSubmit: _v13,
        disable: _v5,
        onChange: () => {
          _v7 && _v8(void 0);
        }
      }) : _v3 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v300, {
          email: _v3,
          onClick: _v12,
          editMode: !0
        }), (0, _v14.jsx)(_v80, {
          onClick: _v12
        })]
      }) : (0, _v14.jsx)(_v308, {
        children: (0, _v14.jsx)(_v68, {
          buttonText: _v66.default.AddEmail,
          onClick: _v12
        })
      })
    });
  }
  function _v303({
    editMode: _v0,
    emails: _v1
  }) {
    return _v0 ? (0, _v14.jsx)(_v302, {
      email: _v1[0]
    }) : (0, _v14.jsx)(_v300, {
      email: _v1[0]
    });
  }
  let _v304 = _v0 => (0, _v14.jsx)(_v292.Envelope, {
      ..._v0,
      height: (0, _v51.rem)(24),
      flex: `0 0 ${(0, _v51.rem)(24)}`,
      verticalAlign: "middle",
      marginLeft: (0, _v51.rem)(-3)
    }),
    _v305 = _v33.default.article.withConfig({
      displayName: "Email__ViewInputWrapper",
      componentId: "sc-51301c0e-0"
    })`
  display: inline-block;
  padding: ${(0, _v51.rem)(10)} 0 ${(0, _v51.rem)(10)} ${(0, _v51.rem)(10)};
  padding-right: ${(0, _v51.rem)(5)};
  border: ${(0, _v51.rem)(1)} solid transparent;
  ${_v61.media.md`
    display: block;
  `}
  ${({
      editMode: _v0
    }) => _v0 && _v73}
`,
    _v306 = _v33.default.article.withConfig({
      displayName: "Email__FlexContainer",
      componentId: "sc-51301c0e-1"
    })`
  display: flex;
  align-items: center;
`,
    _v307 = _v33.default.article.withConfig({
      displayName: "Email__InputWrapper",
      componentId: "sc-51301c0e-2"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v51.rem)(10)} 0 ${(0, _v51.rem)(10)} ${(0, _v51.rem)(10)};
  box-sizing: border-box;
  height: ${(0, _v51.rem)(42)};
  border: ${(0, _v51.rem)(1)} solid transparent;
  height: ${(0, _v51.rem)(46)};
`,
    _v308 = _v33.default.div.withConfig({
      displayName: "Email__AddContainer",
      componentId: "sc-51301c0e-3"
    })`
  height: ${(0, _v51.rem)(46)};
  display: flex;
  align-items: center;
`,
    _v309 = _v33.default.a.withConfig({
      displayName: "Email__EmailContainer",
      componentId: "sc-51301c0e-4"
    })`
  margin-left: ${(0, _v51.rem)(22)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  vertical-align: middle;
  display: inline;
  font-size: ${(0, _v51.rem)(14)};

  ${({
      editMode: _v0
    }) => !_v0 && _v33.css`
      ${_v61.media.xs`
        margin-left: ${(0, _v51.rem)(8)};
      `}
      ${_v61.media.md`
        margin-left: ${(0, _v51.rem)(22)};
      `}
      vertical-align: text-bottom;
    `}
`,
    _v310 = _v33.default.article.withConfig({
      displayName: "Email__InputContainer",
      componentId: "sc-51301c0e-5"
    })`
  margin-top: -${(0, _v51.rem)(1)};
  margin-left: ${(0, _v51.rem)(8)};
  width: 100%;
  position: relative;
  &:hover {
    outline: none;
  }

  input {
    font-size: ${(0, _v51.rem)(14)};
    font-family: inherit;
    padding-left: ${(0, _v51.rem)(13)};
  }
`,
    _v311 = (0, _v33.default)(_v57.Paragraph).attrs({
      size: "3",
      status: "negative"
    }).withConfig({
      displayName: "Email__ErrorMessage",
      componentId: "sc-51301c0e-6"
    })`
  margin-left: ${(0, _v51.rem)(41.5)};
  display: block;
`,
    _v312 = _v33.default.div.withConfig({
      displayName: "Email__Container",
      componentId: "sc-51301c0e-7"
    })`
  display: none;
  margin-top: ${(0, _v51.rem)(10)};
  &:hover {
    outline: none;
  }

  ${_v61.media.sm`
    display: block;
  `};
  ${_v61.media.md`
    margin-top: ${(0, _v51.rem)(1)};
  `}
`;
  var _v313 = _v0.i(0),
    _v314 = _v0.i(0);
  function _v315({
    onClick: _v0,
    loading: _v1 = !1,
    translationKey: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      _v5 = (0, _v22.useRef)(null),
      {
        height: _v6,
        width: _v7
      } = (0, _v60.useWindowSize)();
    return (0, _v22.useEffect)(() => {
      let _v0 = (0, _v313.default)(() => {
        if (_v5.current) {
          let {
              top: _v0,
              bottom: _v1
            } = _v5.current.getBoundingClientRect(),
            _v2 = window.innerHeight || document.documentElement.clientHeight,
            _v3 = _v2 - _v0 > _v49.LOAD_MORE_DISPLAY_BUFFER && _v2 - _v1 > _v49.LOAD_MORE_DISPLAY_BUFFER;
          _v3 !== _v3 && _v4(_v3);
        }
      }, 50);
      return window && window.addEventListener("scroll", _v0), () => {
        window && window.removeEventListener("scroll", _v0);
      };
    }, [_v6, _v7, _v5, _v3]), (0, _v14.jsx)(_v316, {
      show: _v3,
      ref: _v5,
      children: (0, _v14.jsx)(_v54.Button, {
        icon: (0, _v14.jsx)(_v314.ArrowDown, {}),
        iconPosition: "right",
        size: "sm",
        onClick: _v0,
        pill: !0,
        floating: !0,
        loading: _v1,
        disabled: _v1,
        children: _v2 ? _v66.default[_v2] : _v66.default.LoadMore
      })
    });
  }
  let _v316 = _v33.default.section.withConfig({
    displayName: "LoadMore__LoadMoreContainer",
    componentId: "sc-1214b445-0"
  })`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(0, _v51.rem)(12.5)};
  transition: opacity 250ms ease-in-out;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  ${({
    show: _v0
  }) => _v0 && _v33.css`
      opacity: 1;
    `}
`;
  function _v317(_v0, _v1 = !0) {
    let {
        userId: _v2
      } = (0, _v22.useContext)(_v43.default),
      _v3 = (0, _v45.default)();
    return (0, _v46.default)(_v0 => {
      if (_v0) {
        let _v0 = {
            ..._v49.FILTERED_VIDEOS_VARIABLES,
            filterCategory: _v0,
            page: _v0 + 1
          },
          _v1 = (0, _v48.buildQueryString)((0, _v47.decamelizeDeep)(_v0));
        return `users/${_v2}/videos${_v1}`;
      }
      return null;
    }, _v3, {
      revalidateOnMount: _v1
    });
  }
  var _v318 = _v0.i(0),
    _v319 = ((_v3 = {}).SELECTED_CATEGORY = "SELECTED_CATEGORY", _v3.PLAY_SECTION_VIDEO = "PLAY_SECTION_VIDEO", _v3.HIDE_VIDEO = "HIDE_VIDEO", _v3.TOTAL_VIDEOS = "TOTAL_VIDEOS", _v3),
    _v320 = _v0.i(0);
  function _v321({
    profile: _v0
  }) {
    let _v1 = (0, _v22.useRef)(null),
      {
        name: _v2,
        uri: _v3,
        link: _v4,
        membership: _v5,
        pictures: _v6
      } = _v0,
      _v7 = (0, _v50.getIdFromUri)(_v3);
    return (0, _v14.jsx)(_v180, {
      userId: _v7,
      childRef: _v1,
      cardUser: _v0,
      zIndex: 2,
      children: (0, _v14.jsxs)(_v322, {
        ref: _v1,
        href: _v4,
        target: "_blank",
        children: [(0, _v14.jsx)(_v323, {
          alt: _v2,
          src: _v6.sizes[0].link,
          srcSet: _v6.sizes[1].link,
          size: "sm",
          nameProps: {
            name: _v2
          }
        }), (0, _v14.jsx)(_v324, {
          children: _v2
        })]
      })
    });
  }
  let _v322 = _v33.default.a.withConfig({
      displayName: "ClipOwner__UserDetailsContainer",
      componentId: "sc-e99ea70b-0"
    })`
  margin-top: ${(0, _v51.rem)(5)};
  display: flex;
  text-decoration: none;
  cursor: pointer;
`,
    _v323 = (0, _v33.default)(_v114.Avatar).withConfig({
      displayName: "ClipOwner__UserAvatar",
      componentId: "sc-e99ea70b-1"
    })`
  width: ${(0, _v51.rem)(24)};
  height: ${(0, _v51.rem)(24)};
`,
    _v324 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "ClipOwner__UserName",
      componentId: "sc-e99ea70b-2"
    })`
  margin-left: ${(0, _v51.rem)(6)};
  margin-top: ${(0, _v51.rem)(2)};
  display: inline-block;
  font-size: ${(0, _v51.rem)(14)};
  line-height: ${(0, _v51.rem)(20)};
  color: ${_v53.bokehTheme.colors.gray["500"]};
  &:hover {
    color: ${_v53.bokehTheme.colors.gray["800"]};
  }
`;
  var _v325 = _v0.i(0),
    _v326 = _v0.i(0);
  let _v327 = _v33.default.button.withConfig({
    displayName: "CommonStyles__Wrapper",
    componentId: "sc-b06e0b56-0"
  })`
  height: ${(0, _v51.rem)(32)};
  width: ${(0, _v51.rem)(64)};
  border: none;
  border-radius: ${(0, _v51.rem)(16)};
  background-color: ${_v53.bokehTheme.colors.white};
  box-shadow: 0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(4)} 0 rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  outline: none;
  svg path {
    transition: all 230ms ease-in-out;
    fill: ${_v53.bokehTheme.colors.gray["800"]};
    opacity: 0.4;
  }
  &:hover,
  &:focus {
    svg path {
      opacity: 1;
    }
  }
  ${({
    disable: _v0
  }) => _v0 && _v33.css`
      pointer-events: none;
    `}
`;
  function _v328(_v0) {
    return (0, _v14.jsx)(_v326.default, {
      tooltipText: _v0.tooltipText,
      children: (0, _v14.jsx)(_v329, {
        ..._v0,
        children: (0, _v14.jsx)(_v325.Comment, {
          width: (0, _v51.rem)(20),
          height: (0, _v51.rem)(18)
        })
      })
    });
  }
  let _v329 = (0, _v33.default)(_v327).withConfig({
    displayName: "CommentButton__IconWrapper",
    componentId: "sc-bb190c20-0"
  })`
  width: ${(0, _v51.rem)(32)};
  padding: ${(0, _v51.rem)(8)} ${(0, _v51.rem)(6)};
`;
  var _v330 = _v0.i(0),
    _v331 = _v0.i(0);
  function _v332(_v0) {
    let {
      expanded: _v1,
      loading: _v2
    } = _v0;
    return (0, _v14.jsx)(_v326.default, {
      tooltipText: _v1 ? _v66.default.Shrink : _v66.default.Expand,
      disable: _v2,
      children: (0, _v14.jsx)(_v327, {
        disable: _v2,
        ..._v0,
        children: _v2 ? (0, _v14.jsx)(_v336, {
          size: "md",
          color: "gray.500"
        }) : (0, _v14.jsxs)(_v14.Fragment, {
          children: [(0, _v14.jsx)(_v334, {
            expanded: _v1,
            children: (0, _v14.jsx)(_v331.ArrowRight, {
              boxSize: 25
            })
          }), (0, _v14.jsx)(_v335, {
            expanded: _v1,
            children: (0, _v14.jsx)(_v330.ArrowLeft, {
              boxSize: 25
            })
          })]
        })
      })
    });
  }
  let _v333 = _v33.css`
  position: absolute;
  top: ${(0, _v51.rem)(4)};
  transition: transform 0.8s ease-in-out;
`,
    _v334 = _v33.default.span.withConfig({
      displayName: "ExpandButton__RightArrow",
      componentId: "sc-858a396-0"
    })`
  ${_v333}
  right: ${(0, _v51.rem)(6)};
  ${({
      expanded: _v0
    }) => _v0 && _v33.css`
      transform: rotateY(-180deg);
    `};
`,
    _v335 = _v33.default.span.withConfig({
      displayName: "ExpandButton__LeftArrow",
      componentId: "sc-858a396-1"
    })`
  ${_v333}
  left: ${(0, _v51.rem)(6)};
  ${({
      expanded: _v0
    }) => _v0 && _v33.css`
      transform: rotateY(180deg);
    `};
`,
    _v336 = (0, _v33.default)(_v34.Spinner).withConfig({
      displayName: "ExpandButton__CustomLoader",
      componentId: "sc-858a396-2"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(4)};
  left: ${(0, _v51.rem)(20)};
  opacity: 0.4;
`;
  function _v337({
    name: _v0,
    badge: _v1,
    src: _v2,
    srcSet: _v3,
    href: _v4
  }) {
    return (0, _v14.jsxs)(_v340, {
      ...(_v4 ? {
        as: "a",
        href: _v4,
        target: "_blank"
      } : {
        as: "div"
      }),
      children: [(0, _v14.jsx)(_v338, {
        alt: _v0,
        src: _v2,
        srcSet: _v3,
        size: "xs",
        nameProps: {
          name: _v0
        }
      }), (0, _v14.jsx)(_v339, {
        children: _v0
      }), _v1 && (0, _v14.jsx)(_v341, {
        children: (0, _v14.jsx)(_v94.Badge, {
          size: "sm",
          format: _v98(_v1.type),
          children: _v1.text
        })
      })]
    });
  }
  let _v338 = (0, _v33.default)(_v114.Avatar).withConfig({
      displayName: "UserDetails__UserAvatar",
      componentId: "sc-58732249-0"
    })`
  width: ${(0, _v51.rem)(18)};
  height: ${(0, _v51.rem)(18)};
`,
    _v339 = (0, _v33.default)(_v71.Text).attrs({
      format: "soft"
    }).withConfig({
      displayName: "UserDetails__Name",
      componentId: "sc-58732249-1"
    })`
  margin-left: ${(0, _v51.rem)(10)};
  display: inline-block;
  font-size: ${(0, _v51.rem)(14)};
  line-height: ${(0, _v51.rem)(20)};
`,
    _v340 = _v33.default.a.withConfig({
      displayName: "UserDetails__UserDetailsContainer",
      componentId: "sc-58732249-2"
    })`
  display: flex;
  text-decoration: none;
`,
    _v341 = _v33.default.div.withConfig({
      displayName: "UserDetails__BadgeWrapper",
      componentId: "sc-58732249-3"
    })`
  display: inline-block;
  vertical-align: super;
  margin-left: ${(0, _v51.rem)(4)};
  margin-top: ${(0, _v51.rem)(3)};
`;
  var _v342 = _v0.i(0);
  function _v343({
    tooltipText: _v0,
    loading: _v1 = !1,
    ..._v2
  }) {
    return (0, _v14.jsx)(_v326.default, {
      tooltipText: _v0,
      children: (0, _v14.jsx)(_v344, {
        loading: _v1,
        ..._v2,
        children: _v1 ? (0, _v14.jsx)(_v345, {
          size: "md",
          color: "gray.500"
        }) : (0, _v14.jsx)(_v342.StopBanRight, {
          boxSize: (0, _v51.rem)(20)
        })
      })
    });
  }
  let _v344 = (0, _v33.default)(_v327).withConfig({
      displayName: "RemoveButton__IconWrapper",
      componentId: "sc-d84a0637-0"
    })`
  width: ${(0, _v51.rem)(32)};
  padding: ${(0, _v51.rem)(6)};
  ${({
      loading: _v0
    }) => _v0 && _v33.css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`,
    _v345 = (0, _v33.default)(_v34.Spinner).withConfig({
      displayName: "RemoveButton__CustomLoader",
      componentId: "sc-d84a0637-1"
    })`
  opacity: 0.4;
`;
  function _v346({
    comment: _v0,
    hideBorder: _v1,
    editMode: _v2,
    onRemove: _v3,
    onUpdate: _v4
  }) {
    let _v5 = _v0?.user,
      _v6 = (0, _v22.useRef)(null),
      _v7 = (_v0?.text || "").length > _v49.TRUNCATE_FEATURED_COMMENT_AFTER,
      [_v8, _v9] = (0, _v22.useState)(!1),
      _v10 = (0, _v62.default)(_v0?.text, {
        length: _v49.TRUNCATE_FEATURED_COMMENT_AFTER
      }),
      _v11 = _v7 ? {
        as: "a",
        href: _v0?.link,
        isLink: _v7,
        target: "_blank"
      } : {
        as: "div"
      };
    return (0, _v14.jsx)(_v14.Fragment, {
      children: _v5 && (0, _v14.jsxs)(_v349, {
        hideBorder: _v1,
        children: [(0, _v14.jsx)(_v351, {
          ..._v11,
          children: (0, _v14.jsx)(_v65.default, {
            text: _v10
          })
        }), (0, _v14.jsx)(_v350, {
          children: (0, _v14.jsx)(_v180, {
            userId: (0, _v50.getIdFromUri)(_v5.uri),
            childRef: _v6,
            zIndex: 3,
            cardUser: {
              link: _v5.link,
              membership: _v5.membership,
              name: _v5.name,
              pictures: _v5.pictures,
              uri: _v5.uri,
              backgroundVideo: _v5.backgroundVideo,
              bio: _v5.bio,
              skills: _v5.skills,
              location: _v5.locationDetails?.formattedAddress
            },
            children: (0, _v14.jsx)("div", {
              ref: _v6,
              children: (0, _v14.jsx)(_v337, {
                name: _v5.name,
                src: _v5.pictures.sizes[0].link,
                srcSet: `${_v5.pictures.sizes[1].link} 2x`,
                href: _v5.link,
                badge: _v5.membership?.badge
              })
            })
          })
        }), _v2 && (0, _v14.jsxs)(_v347, {
          className: "comment-cta-button",
          isFocused: _v8,
          children: [_v4 && (0, _v14.jsx)(_v348, {
            children: (0, _v14.jsx)(_v328, {
              onFocus: () => _v9(!0),
              onBlur: () => _v9(!1),
              onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v4),
              onClick: _v4,
              tooltipText: _v66.default.UpdateComment
            })
          }), _v3 && (0, _v14.jsx)(_v348, {
            children: (0, _v14.jsx)(_v343, {
              onFocus: () => _v9(!0),
              onBlur: () => _v9(!1),
              onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v3),
              onClick: () => _v3(),
              tooltipText: _v66.default.RemoveComment
            })
          })]
        })]
      })
    });
  }
  let _v347 = _v33.default.div.withConfig({
      displayName: "FeaturedComment__CtaWrapper",
      componentId: "sc-c2bfb531-0"
    })`
  margin-top: ${(0, _v51.rem)(10)};
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear;
  position: absolute;

  ${({
      isFocused: _v0
    }) => _v0 && _v33.css`
      opacity: 1;
    `}
`,
    _v348 = _v33.default.div.withConfig({
      displayName: "FeaturedComment__ButtonWrapper",
      componentId: "sc-c2bfb531-1"
    })`
  margin-right: ${(0, _v51.rem)(8)};
  display: inline-block;
`,
    _v349 = _v33.default.div.withConfig({
      displayName: "FeaturedComment__CommentWrapper",
      componentId: "sc-c2bfb531-2"
    })`
  z-index: 2;
  flex: 0;
  ${_v61.media.sm`
    padding: ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.SM_TOP)} ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.SM_RIGHT)};
    border-top: ${(0, _v51.rem)(1)} solid ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["100"], .8)};
    ${({
      hideBorder: _v0
    }) => _v0 && _v33.css`
        border-top: none;
        padding-left: 0;
      `};
  `}
  ${_v61.media.md`
    padding: ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.MD_TOP)} ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.MD_RIGHT)} ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.MD_BOTTOM)};
    ${({
      hideBorder: _v0
    }) => _v0 && _v33.css`
        padding-left: ${(0, _v51.rem)(3)};
      `}
  `}
  ${_v61.media.xhd`
    padding: ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.XHD_TOP)} ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.XHD_RIGHT)} ${(0, _v51.rem)(_v49.COMMENT_WRAPPER_GAP.XHD_BOTTOM)};
    ${({
      hideBorder: _v0
    }) => _v0 && _v33.css`
        padding-left: 0;
      `}
  `}
  &:hover .comment-cta-button {
    opacity: 1;
  }
`,
    _v350 = _v33.default.div.withConfig({
      displayName: "FeaturedComment__UserDetailsContainer",
      componentId: "sc-c2bfb531-3"
    })`
  margin-top: ${(0, _v51.rem)(_v49.COMMENT_USER_DETAIL_GAP.DEFAULT)};
  display: flex;
  ${_v61.media.sm`
    margin-top: ${(0, _v51.rem)(_v49.COMMENT_USER_DETAIL_GAP.SM)};
  `}
  ${_v61.media.md`
    margin-top: ${(0, _v51.rem)(_v49.COMMENT_USER_DETAIL_GAP.MD)};
  `}
  ${_v61.media.hd`
    margin-top: ${(0, _v51.rem)(_v49.COMMENT_USER_DETAIL_GAP.HD)};
  `}
`,
    _v351 = _v33.default.a.withConfig({
      displayName: "FeaturedComment__CommentText",
      componentId: "sc-c2bfb531-4"
    })`
  color: ${_v53.bokehTheme.colors.gray["800"]};
  font-weight: 300;
  line-height: ${(0, _v51.rem)(24)};
  font-size: ${(0, _v51.rem)(16)};
  text-decoration: none;
  ${_v61.media.lg`
    font-size: ${(0, _v51.rem)(18)};
    line-height: ${(0, _v51.rem)(26)};
  `}
  ${({
      isLink: _v0
    }) => _v0 && _v33.css`
      &:hover {
        text-decoration: underline;
        color: ${_v53.bokehTheme.colors.blue["500"]};
      }
    `}
`,
    _v352 = (0, _v22.forwardRef)((_v0, _v1) => (0, _v14.jsx)("svg", {
      viewBox: "0 0 14 22",
      ref: _v1,
      ..._v0,
      children: (0, _v14.jsxs)("g", {
        transform: "translate(1 1)",
        fill: _v53.bokehTheme.colors.white,
        stroke: _v53.bokehTheme.colors.gray["800"],
        fillRule: "evenodd",
        strokeOpacity: "0.3",
        children: [(0, _v14.jsx)("circle", {
          cx: "10",
          cy: "2",
          r: "2.5"
        }), (0, _v14.jsx)("circle", {
          cx: "10",
          cy: "10",
          r: "2.5"
        }), (0, _v14.jsx)("circle", {
          cx: "10",
          cy: "18",
          r: "2.5"
        }), (0, _v14.jsx)("circle", {
          cx: "2",
          cy: "2",
          r: "2.5"
        }), (0, _v14.jsx)("circle", {
          cx: "2",
          cy: "18",
          r: "2.5"
        }), (0, _v14.jsx)("circle", {
          cx: "2",
          cy: "10",
          r: "2.5"
        })]
      })
    }));
  function _v353({
    title: _v0,
    buttonText: _v1,
    loading: _v2 = !1,
    onSubmit: _v3,
    onDismiss: _v4
  }) {
    return (0, _v14.jsxs)(_v355, {
      children: [(0, _v14.jsx)(_v354, {
        size: "4",
        children: _v0
      }), (0, _v14.jsx)(_v247.default, {
        onClick: _v4
      }), (0, _v14.jsx)(_v356, {
        children: (0, _v14.jsxs)(_v357, {
          children: [(0, _v14.jsx)(_v358, {
            format: "secondary",
            onClick: _v4,
            children: _v66.default.Cancel
          }), (0, _v14.jsx)(_v358, {
            status: "negative",
            disabled: _v2,
            loading: _v2,
            onClick: () => {
              _v3();
            },
            children: _v1
          })]
        })
      })]
    });
  }
  let _v354 = (0, _v33.default)(_v195.Header).attrs({
      format: "soft"
    }).withConfig({
      displayName: "Confirmation__CustomHeader",
      componentId: "sc-f5d7488b-0"
    })`
  padding: ${(0, _v51.rem)(36)} 0 ${(0, _v51.rem)(4)} ${(0, _v51.rem)(36)};
  letter-spacing: 0.2;
`,
    _v355 = _v33.default.section.withConfig({
      displayName: "Confirmation__Container",
      componentId: "sc-f5d7488b-1"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  position: relative;
  display: flex;
  flex-direction: column;
`,
    _v356 = _v33.default.footer.withConfig({
      displayName: "Confirmation__ModalFooter",
      componentId: "sc-f5d7488b-2"
    })`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,
    _v357 = _v33.default.aside.withConfig({
      displayName: "Confirmation__ButtonWrapper",
      componentId: "sc-f5d7488b-3"
    })`
  margin: ${(0, _v51.rem)(20)};
  display: flex;
`,
    _v358 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "Confirmation__CustomButton",
      componentId: "sc-f5d7488b-4"
    })`
  min-width: ${(0, _v51.rem)(93)};
  &:first-child {
    margin-right: ${(0, _v51.rem)(10)};
  }
`;
  function _v359({
    isSelected: _v0,
    onClick: _v1,
    children: _v2
  }) {
    return (0, _v14.jsx)(_v360, {
      selected: _v0,
      onClick: _v1,
      children: (0, _v14.jsx)(_v205.Radio, {
        name: "commentPickerList",
        checked: _v0,
        onChange: _v1,
        label: (0, _v14.jsx)(_v361, {
          children: _v2
        })
      })
    });
  }
  let _v360 = _v33.default.li.withConfig({
      displayName: "CommentItem__ListItem",
      componentId: "sc-b6a7eda4-0"
    })`
  box-sizing: border-box;
  width: 100%;
  border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["200"]};
  border-radius: ${(0, _v51.rem)(7)};
  padding: ${(0, _v51.rem)(20)} ${(0, _v51.rem)(22)} ${(0, _v51.rem)(20)} ${(0, _v51.rem)(30)};
  cursor: pointer;
  margin-bottom: ${(0, _v51.rem)(8)};
  position: relative;
  &:hover {
    background-color: ${_v53.bokehTheme.colors.gray["100"]};
  }
  ${({
      selected: _v0
    }) => _v0 && _v33.css`
      background-color: ${_v53.bokehTheme.colors.gray["50"]};
    `}
`,
    _v361 = (0, _v33.default)(_v71.Text).attrs({
      format: "soft"
    }).withConfig({
      displayName: "CommentItem__RadioText",
      componentId: "sc-b6a7eda4-1"
    })`
  display: inline-block;
`;
  function _v362({
    loading: _v0,
    fetchNext: _v1,
    commentsList: _v2,
    selectedComment: _v3,
    onSelectionChange: _v4
  }) {
    let _v5 = (0, _v22.useRef)(null),
      _v6 = (0, _v22.useMemo)(() => (0, _v50.getIdFromUri)(_v3?.uri), [_v3]);
    return (0, _v14.jsxs)(_v363, {
      ref: _v5,
      onScroll: () => _v232(_v5, _v1, 0),
      children: [!_v0 && (0, _v14.jsx)(_v359, {
        isSelected: !_v3,
        onClick: () => _v4(),
        children: _v66.default.None
      }, "none-comment-item"), (_v2 || []).map(_v0 => {
        let {
          uri: _v1,
          text: _v2,
          user: {
            pictures: {
              sizes: _v3
            },
            name: _v4,
            badge: _v5
          }
        } = _v0;
        return (0, _v14.jsx)(_v359, {
          isSelected: _v6 === (0, _v50.getIdFromUri)(_v1),
          onClick: () => _v4(_v0),
          children: (0, _v14.jsxs)(_v14.Fragment, {
            children: [_v2, (0, _v14.jsx)(_v364, {
              children: (0, _v14.jsx)(_v337, {
                name: _v4,
                badge: _v5,
                src: _v3[0].link,
                srcSet: `${_v3[0].link} 2x`
              })
            })]
          })
        }, _v1);
      }), _v0 && (0, _v14.jsxs)(_v14.Fragment, {
        children: [[...[,,,,].keys()].map(_v0 => (0, _v14.jsx)(_v365, {
          children: (0, _v14.jsx)(_v367, {})
        }, _v0)), (0, _v14.jsx)(_v368, {})]
      })]
    });
  }
  let _v363 = _v33.default.ul.withConfig({
      displayName: "CommentsList__Wrapper",
      componentId: "sc-7f4b3f6-0"
    })`
  padding: 0 ${(0, _v51.rem)(36)} 0;
  max-height: ${(0, _v51.rem)(500)};
  overflow-y: auto;
`,
    _v364 = _v33.default.div.withConfig({
      displayName: "CommentsList__UserDetailsContainer",
      componentId: "sc-7f4b3f6-1"
    })`
  margin-top: ${(0, _v51.rem)(10)};
`,
    _v365 = _v33.default.div.withConfig({
      displayName: "CommentsList__LoadingRowWrapper",
      componentId: "sc-7f4b3f6-2"
    })`
  margin-bottom: ${(0, _v51.rem)(8)};
`,
    _v366 = _v33.keyframes`
  0% { opacity: 0.5 }
  50%  { opacity: 1 }
  100% { opacity: 0.5 }
`,
    _v367 = _v33.default.div.withConfig({
      displayName: "CommentsList__LoadingRow",
      componentId: "sc-7f4b3f6-3"
    })`
  height: ${(0, _v51.rem)(100)};
  width: 100%;
  border-radius: ${(0, _v51.rem)(7)};
  background: linear-gradient(270deg, ${_v49.COLORS.SNOW} 0%, ${_v49.COLORS.CYAN_WHITE} 100%);
  animation: ${_v366} 2s ease-in-out 0s infinite reverse;
`,
    _v368 = (0, _v33.default)(_v367).withConfig({
      displayName: "CommentsList__LoadingHalfRow",
      componentId: "sc-7f4b3f6-4"
    })`
  height: ${(0, _v51.rem)(66)};
`;
  function _v369(_v0) {
    let {
      onDismiss: _v1,
      isShowing: _v2
    } = _v0;
    return (0, _v287.default)(_v2 ? _v0 => (0, _v50.onEsc)(_v0, _v1) : void 0, [_v2, _v1]), (0, _v14.jsx)(_v56.Modal, {
      onOpen: _v1,
      active: _v2,
      content: (0, _v14.jsx)(_v370, {
        ..._v0
      })
    });
  }
  function _v370({
    submitting: _v0,
    onDismiss: _v1,
    onSubmit: _v2,
    videoId: _v3,
    selectedFeaturedComment: _v4,
    error: _v5
  }) {
    let _v6,
      [_v7, _v8] = (0, _v22.useState)(_v4),
      [_v9, _v10] = (0, _v22.useState)(!1),
      [_v11, _v12] = (0, _v22.useState)(!1),
      {
        data: _v13,
        error: _v14,
        size: _v15,
        setSize: _v16
      } = (_v6 = (0, _v45.default)(), (0, _v46.default)(_v0 => {
        let _v1 = {
            ..._v49.VIDEO_COMMENTS_VARIABLES,
            page: _v0 + 1
          },
          _v2 = (0, _v48.buildQueryString)((0, _v47.decamelizeDeep)(_v1));
        return `videos/${_v3}/comments${_v2}`;
      }, _v6)),
      _v17 = !_v13 && !_v14,
      _v18 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v13) || [], [_v13]),
      _v19 = (0, _v22.useMemo)(() => _v18.length > 0 && (0, _v50.hasNext)(_v13), [_v18, _v13]);
    (0, _v22.useEffect)(() => {
      _v8(_v4);
    }, [_v4]), (0, _v22.useEffect)(() => {
      _v10(!!_v5 || !!_v14);
    }, [_v5, _v14]);
    let _v20 = _v0 || !_v4 && !_v7 || (0, _v50.getIdFromUri)(_v7?.uri) === (0, _v50.getIdFromUri)(_v4?.uri);
    return (0, _v14.jsxs)(_v371, {
      hasResponseLoaded: !_v17,
      children: [(0, _v14.jsx)(_v374, {
        onClick: _v1
      }), (0, _v14.jsx)(_v373, {
        size: "4",
        children: _v66.default.SelectComment
      }), _v9 && (0, _v14.jsx)(_v372, {
        children: (0, _v14.jsx)(_v55.Notice, {
          format: "negative",
          onClose: () => _v10(!1),
          children: (0, _v14.jsx)(_v71.Text, {
            format: "soft",
            children: _v66.default.ErrorMsg
          })
        })
      }), (0, _v14.jsx)(_v362, {
        commentsList: _v18,
        fetchNext: () => {
          _v19 && !_v17 && !_v11 && _v16 && (_v12(!0), _v16(_v15 ? _v15 + 1 : 0).then(() => _v12(!1)));
        },
        loading: _v17 || _v11,
        selectedComment: _v7,
        onSelectionChange: _v8
      }), (0, _v14.jsxs)(_v375, {
        children: [(0, _v14.jsx)(_v376, {
          format: "secondary",
          onClick: _v1,
          disabled: _v0,
          children: _v66.default.Cancel
        }), (0, _v14.jsx)(_v377, {
          format: "primary",
          onClick: () => _v2(_v7),
          disabled: _v20,
          loading: _v0,
          children: _v66.default.Select
        })]
      })]
    });
  }
  let _v371 = _v33.default.div.withConfig({
      displayName: "FeaturedCommentPicker__Container",
      componentId: "sc-174933dd-0"
    })`
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  position: relative;
  border-radius: ${(0, _v51.rem)(3)};
  width: 90vw;
  height: 90vh;
  max-height: ${(0, _v51.rem)(650)};
  max-width: ${(0, _v51.rem)(660)};
  /* To fix the modal position on screen */
  ${({
      hasResponseLoaded: _v0
    }) => _v0 && _v33.css`
      height: auto;
    `}
  ${_v61.media.sm`
    width: 74vw;
  `}
`,
    _v372 = _v33.default.div.withConfig({
      displayName: "FeaturedCommentPicker__ErrorContainer",
      componentId: "sc-174933dd-1"
    })`
  margin: ${(0, _v51.rem)(10)} ${(0, _v51.rem)(36)} ${(0, _v51.rem)(8)};
`,
    _v373 = (0, _v33.default)(_v195.Header).withConfig({
      displayName: "FeaturedCommentPicker__Title",
      componentId: "sc-174933dd-2"
    })`
  font-weight: bold;
  padding: ${(0, _v51.rem)(36)} 0 ${(0, _v51.rem)(20)} ${(0, _v51.rem)(36)};
`,
    _v374 = (0, _v33.default)(_v247.default).withConfig({
      displayName: "FeaturedCommentPicker__DismissIcon",
      componentId: "sc-174933dd-3"
    })`
  top: ${(0, _v51.rem)(12)};
  right: ${(0, _v51.rem)(12)};
`,
    _v375 = _v33.default.footer.withConfig({
      displayName: "FeaturedCommentPicker__ActionContainer",
      componentId: "sc-174933dd-4"
    })`
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(12)} 0 ${(0, _v51.rgba)(0, 0, 0, .2)};
  padding: ${(0, _v51.rem)(16)};
`,
    _v376 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "FeaturedCommentPicker__CtaButton",
      componentId: "sc-174933dd-5"
    })`
  width: ${(0, _v51.rem)(92)};
`,
    _v377 = (0, _v33.default)(_v376).withConfig({
      displayName: "FeaturedCommentPicker__SelectCta",
      componentId: "sc-174933dd-6"
    })`
  margin-left: ${(0, _v51.rem)(8)};
`;
  function _v378({
    badgeType: _v0,
    ..._v1
  }) {
    let _v2 = (0, _v22.useMemo)(() => {
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
    }, [_v0]);
    return _v2.normal ? (0, _v14.jsx)(_v379, {
      ..._v1,
      children: _v2.iconData ? (0, _v14.jsx)("img", {
        src: _v2.iconData.icon,
        width: "118",
        height: "159",
        alt: _v2.iconData.alt
      }) : (0, _v14.jsx)(_v380, {
        src: "https://f.vimeocdn.com/p/images/badges/1.svg",
        alt: "Vimeo Staff Pick Badge"
      })
    }) : null;
  }
  let _v379 = _v33.default.article.withConfig({
      displayName: "StaffpickBadge__StaffPickContainer",
      componentId: "sc-5b5a185-0"
    })`
  position: absolute;
  transition: all 230ms ease-in-out;
  top: 0;
  left: 0;
`,
    _v380 = _v33.default.img.withConfig({
      displayName: "StaffpickBadge__NormalStaffPickImg",
      componentId: "sc-5b5a185-1"
    })`
  margin: ${(0, _v51.rem)(10)} ${(0, _v51.rem)(10)} 0 ${(0, _v51.rem)(10)};
  width: ${(0, _v51.rem)(100)};
  height: ${(0, _v51.rem)(100)};
`,
    _v381 = (0, _v320.default)(async () => {
      let {
        VideoCardPlayer: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  function _v382({
    video: _v0,
    viewType: _v1,
    className: _v2,
    style: _v3,
    setExpanded: _v4,
    removeVideo: _v5,
    hasComments: _v6,
    newlyAdded: _v7,
    loading: _v8,
    addOrUpdateFeaturedComment: _v9,
    videoIndex: _v10
  }) {
    let {
        settings: _v11
      } = (0, _v20.useOrionSettings)(),
      [_v12, _v13] = (0, _v22.useState)(!1),
      _v14 = (0, _v22.useRef)(null),
      _v15 = "2" === _v0.columnWidth,
      [_v16, _v17] = (0, _v22.useState)(!1),
      [_v18, _v19] = (0, _v22.useState)(!1),
      [_v20, _v21] = (0, _v22.useState)(!1),
      [_v22, _v23] = (0, _v22.useState)(!1),
      [_v24, _v25] = (0, _v22.useState)(!1),
      [_v26, _v27] = (0, _v22.useState)(),
      [_v28, _v29] = (0, _v22.useState)(!1),
      {
        editMode: _v30,
        userId: _v31
      } = (0, _v22.useContext)(_v43.default),
      {
        trackUserProfilePageThumbnailClicked: _v32,
        trackUserProfileVideoThumbnailResized: _v33
      } = (0, _v30.useProfileTracking)(),
      _v34 = (0, _v22.useMemo)(() => (0, _v50.getIdFromUri)(_v0.clip.uri), [_v0.clip.uri]);
    (0, _v287.default)(_v12 ? _v0 => (0, _v50.onEsc)(_v0, () => _v13(!1)) : void 0, [_v12]);
    let _v35 = (0, _v22.useMemo)(() => _v0.showFeaturedComment ? _v0.featuredComment?.text : "", [_v0.featuredComment?.text, _v0.showFeaturedComment]),
      _v36 = (0, _v22.useMemo)(() => {
        if (_v1 === _v49.ViewType.GRID) return _v118(_v0.clip);
        let {
          width: _v0,
          height: _v1
        } = _v0.clip;
        return _v118(_v0.clip, _v1 / _v0);
      }, [_v0.clip, _v1]),
      _v37 = (0, _v22.useMemo)(() => _v36[0], [_v36]),
      _v38 = (0, _v22.useMemo)(() => _v36.length > 1 ? _v36.slice(1).map((_v0, _v1) => `${_v0} ${_v1 + 2}x`).join(", ") : "", [_v36]),
      _v39 = (0, _v22.useMemo)(() => (0, _v50.getIdFromUri)(_v0.clip.user.uri) === _v31, [_v31, _v0.clip.user.uri]),
      _v40 = (0, _v22.useMemo)(() => {
        let _v0 = _v0.clip.live && _v0.clip.live?.status !== _v49.LIVE_STATUS.DONE ? _v0.clip.live?.recurringEvent?.link : _v0.clip.link;
        return _v30 && _v39 && !_v288 ? `/manage/${_v34}/general` : _v0;
      }, [_v39, _v34, _v30, _v0]),
      _v41 = _v0 => {
        _v17(!0), _v27(void 0), _v9?.(_v0).then(() => {
          _v17(!1), _v19(!1);
        }).catch(_v0 => {
          _v27(_v0), _v17(!1);
        });
      },
      _v42 = () => {
        _v33({
          userProfileResizeAction: _v15 ? "shrink" : "expand"
        }), _v29(!0), _v20 && _v21(!1), _v4 && _v4(!_v15).then(() => _v29(!1)).catch(() => _v29(!1));
      },
      _v43 = (0, _v22.useMemo)(() => _v0.clip.live?.status === _v49.LIVE_STATUS.STREAMING, [_v0.clip.live?.status]),
      _v44 = (0, _v22.useCallback)(() => {
        let _v0 = {
          badgeFormat: "live-archive",
          badgeValue: _v66.default.Upcoming
        };
        return _v0.clip.live && _v0.clip.live.scheduledStartTime && new Date(_v0.clip.live.scheduledStartTime) < new Date() && (_v0.badgeValue = _v66.default.Live), _v43 && (_v0 = {
          badgeFormat: "live",
          badgeValue: _v66.default.Live
        }), _v0;
      }, [_v43, _v0.clip.live]),
      _v45 = (0, _v22.useMemo)(() => {
        let _v0 = "live" === _v0.clip.type,
          _v1 = _v0.clip.live?.status === _v49.LIVE_STATUS.DONE,
          _v2 = _v0.clip.duration > 0;
        return _v0 && (!_v1 && !_v2 || _v43);
      }, [_v0.clip.type, _v0.clip.live, _v0.clip.duration, _v43]),
      _v46 = !!_v11.enable_profile_hover_video_preview && !_v288 && !!_v0.clip.configUrl && !_v45,
      _v47 = !!_v35,
      _v48 = _v15 || _v1 === _v49.ViewType.MASONRY;
    return (0, _v22.useEffect)(() => {
      _v8 || _v13(!1);
    }, [_v8]), (0, _v14.jsx)(_v14.Fragment, {
      children: (0, _v14.jsxs)(_v384, {
        className: _v2,
        style: _v3,
        newlyAdded: _v7,
        children: [(0, _v14.jsxs)(_v401, {
          children: [(0, _v14.jsxs)(_v385, {
            isGrid: _v1 === _v49.ViewType.GRID,
            hasSingleColumnComment: _v48,
            aspectRatio: _v0.clip.height / _v0.clip.width,
            hasFeaturedComment: _v47,
            isExpanded: _v15,
            isLoading: _v28,
            children: [(0, _v14.jsxs)(_v386, {
              ref: _v14,
              onMouseEnter: _v46 ? () => _v23(!0) : void 0,
              onMouseLeave: _v46 ? () => _v23(!1) : void 0,
              children: [_v46 && (0, _v14.jsx)(_v387, {
                children: (0, _v14.jsx)(_v381, {
                  clipId: _v34,
                  configUrl: _v0.clip.configUrl,
                  objectFit: "contain",
                  quality: "540p",
                  isHovering: _v22,
                  setIsPlayerReady: _v25
                })
              }), (0, _v14.jsxs)(_v408, {
                onClick: () => {
                  _v32({
                    userProfilePageUserId: String(_v31),
                    clipId: String(_v34),
                    userProfilePageThumbnailPosition: _v10 + 1,
                    userProfilePageThumbnailSection: _v1 === _v49.ViewType.GRID ? "grid" : "masonry"
                  }), window.location.href = _v40;
                },
                children: [(0, _v14.jsx)(_v409, {
                  src: _v37,
                  srcSet: _v38,
                  alt: _v0.clip.name,
                  hover: _v46 && _v22 && _v24
                }), !_v30 || _v288 || _v8 ? null : (0, _v14.jsx)(_v404, {
                  className: "drag-handle",
                  children: (0, _v14.jsx)(_v352, {
                    height: 20,
                    width: 12
                  })
                }), _v45 ? (0, _v14.jsx)(_v393, {
                  show: !0,
                  children: (0, _v14.jsx)(_v94.Badge, {
                    format: _v44().badgeFormat,
                    children: _v44().badgeValue
                  })
                }) : (0, _v14.jsx)(_v392, {
                  show: !0,
                  children: (0, _v14.jsx)(_v396, {
                    children: _v95(_v0.clip.duration)
                  })
                }), (0, _v14.jsx)(_v397, {
                  show: !0,
                  children: (0, _v14.jsx)(_v398, {})
                })]
              }), _v46 && _v22 && !_v24 && (0, _v14.jsx)(_v388, {
                onClick: () => {
                  window.location.href = _v40;
                },
                children: (0, _v14.jsx)(_v389, {
                  size: "xl",
                  color: "gray.900"
                })
              })]
            }), _v0.clip.badge?.type != null ? "vod" === _v0.clip.badge.type ? (0, _v14.jsx)(_v406, {
              className: "badge-container",
              children: (0, _v14.jsx)(_v407, {
                src: "https://i.vimeocdn.com/video_badge/vod_60x66",
                srcSet: "https://i.vimeocdn.com/video_badge/vod_300x328 2x",
                alt: `VOD - ${_v0.clip.name}`
              })
            }) : (0, _v14.jsx)(_v378, {
              badgeType: _v0.clip.badge.type,
              className: "badge-container"
            }) : null, _v30 && (0, _v14.jsxs)(_v14.Fragment, {
              children: [_v5 && (0, _v14.jsx)(_v405, {
                onOpen: () => _v13(!1),
                active: _v12,
                content: (0, _v14.jsx)(_v353, {
                  title: _v66.default.RemoveVideo,
                  buttonText: _v66.default.Remove,
                  loading: _v8,
                  onSubmit: _v5,
                  onDismiss: () => _v13(!1)
                })
              }), !_v288 && (0, _v14.jsxs)(_v394, {
                className: "cta-button",
                isFocused: _v20,
                children: [_v4 && !_v8 && (0, _v14.jsx)(_v332, {
                  onFocus: () => _v21(!0),
                  onBlur: () => _v21(!1),
                  onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v42),
                  loading: _v0.loading || _v28,
                  expanded: _v15,
                  onClick: _v42
                }), !_v8 && _v6 && !_v47 && (0, _v14.jsx)(_v395, {
                  children: (0, _v14.jsx)(_v328, {
                    onFocus: () => _v21(!0),
                    onBlur: () => _v21(!1),
                    onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v19(!0)),
                    onClick: () => _v19(!0),
                    tooltipText: _v66.default.FeatureComment
                  })
                }), _v5 && (0, _v14.jsx)(_v395, {
                  children: (0, _v14.jsx)(_v343, {
                    onFocus: () => _v21(!0),
                    onBlur: () => _v21(!1),
                    onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v13(!0)),
                    onClick: () => _v13(!0),
                    tooltipText: _v66.default.Remove,
                    loading: _v8
                  })
                })]
              })]
            })]
          }), _v47 && !_v48 && !_v8 && (0, _v14.jsx)(_v399, {
            children: (0, _v14.jsx)(_v346, {
              comment: _v0.featuredComment,
              editMode: !!_v30,
              onRemove: _v41,
              onUpdate: () => _v19(!0)
            })
          })]
        }), (0, _v14.jsxs)(_v402, {
          hasFeaturedComment: _v47,
          hasSingleColumnComment: _v48,
          children: [(0, _v14.jsx)(_v403, {
            href: _v40,
            children: (0, _v14.jsx)(_v390, {
              size: "5",
              hasFeaturedComment: _v47,
              element: "span",
              children: _v0.clip.name
            })
          }), !_v39 && (0, _v14.jsx)(_v321, {
            profile: _v0.clip.user
          }), _v47 && (0, _v14.jsx)(_v400, {
            hasSingleColumnComment: _v48,
            children: (0, _v14.jsx)(_v346, {
              comment: _v0.featuredComment,
              hideBorder: _v48,
              editMode: !!_v30,
              onRemove: _v41,
              onUpdate: () => _v19(!0)
            })
          })]
        }), (0, _v14.jsx)(_v369, {
          videoId: _v34,
          isShowing: _v18,
          submitting: _v16,
          selectedFeaturedComment: _v0.featuredComment,
          onDismiss: () => _v19(!1),
          onSubmit: _v41,
          error: _v26
        })]
      })
    });
  }
  let _v383 = _v33.css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
`,
    _v384 = _v33.default.div.withConfig({
      displayName: "VideoCard__Container",
      componentId: "sc-68f6320c-0"
    })`
  position: relative;
  ${({
      newlyAdded: _v0
    }) => _v0 && _v33.css`
      &:before {
        content: '';
        background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["100"], .5)};
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        z-index: 1;
        border-radius: ${(0, _v51.rem)(5)};
      }
    `}
`,
    _v385 = _v33.default.div.withConfig({
      displayName: "VideoCard__VideoContainer",
      componentId: "sc-68f6320c-1"
    })`
  position: relative;
  transition: width 0.5s ease-in;
  ${({
      isGrid: _v0,
      aspectRatio: _v1
    }) => _v0 ? _v33.css`
          padding-top: 56.25%; // added for Grid view to keep 16:9 ratio
        ` : _v33.css`
          padding-top: ${100 * _v1}%;
        `}

  ${_v61.media.sm`
    width: 100%;
  `}
  ${({
      hasFeaturedComment: _v0,
      hasSingleColumnComment: _v1
    }) => _v0 && !_v1 && _v61.media.sm`
      /* added for Grid view to keep 16:9 ratio calculated as per flex 3:2 ratio. */
      width: 60%;
      padding-top: 33.75%;
    `}

  &:hover .cta-button {
    ${_v61.media.sm`
      opacity: 1;
     `}
  }
  ${({
      isLoading: _v0
    }) => _v0 && _v33.css`
      .cta-button {
        opacity: 1;
      }
    `}
  &:hover .badge-container {
    opacity: 0;
  }
`,
    _v386 = _v33.default.div.withConfig({
      displayName: "VideoCard__VideoPlayerWrapper",
      componentId: "sc-68f6320c-2"
    })`
  border-radius: ${(0, _v51.rem)(8)};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,
    _v387 = _v33.default.div.withConfig({
      displayName: "VideoCard__PlayerLayer",
      componentId: "sc-68f6320c-3"
    })`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  border: 0;
  z-index: 0;
`,
    _v388 = _v33.default.div.withConfig({
      displayName: "VideoCard__SpinnerContainer",
      componentId: "sc-68f6320c-4"
    })`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background: transparent;
  z-index: 1;
  cursor: pointer;
`,
    _v389 = (0, _v33.default)(_v34.Spinner).withConfig({
      displayName: "VideoCard__Loader",
      componentId: "sc-68f6320c-5"
    })`
  margin: 0;
`,
    _v390 = (0, _v33.default)(_v195.Header).withConfig({
      displayName: "VideoCard__VideoTitle",
      componentId: "sc-68f6320c-6"
    })`
  height: ${(0, _v51.rem)(32)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  letter-spacing: 0;
  line-height: ${(0, _v51.rem)(32)};
  transition: color 230ms ease-in-out;
  margin-bottom: 0;
  &:hover {
    color: ${_v53.bokehTheme.colors.blue["500"]};
  }
  ${({
      hasFeaturedComment: _v0
    }) => _v0 && _v33.css`
      margin-left: ${(0, _v51.rem)(10)};
    `}
`,
    _v391 = _v0 => _v33.css`
  position: absolute;
  bottom: ${(0, _v51.rem)(22)};
  right: ${(0, _v51.rem)(12)};
  transition: all 230ms ease-in-out;
  opacity: ${+!!_v0};
`,
    _v392 = _v33.default.div.withConfig({
      displayName: "VideoCard__TimeStampWrapper",
      componentId: "sc-68f6320c-7"
    })`
  height: ${(0, _v51.rem)(22)};
  width: ${(0, _v51.rem)(52)};
  color: ${_v53.bokehTheme.colors.white};
  background-color: rgba(0, 0, 0, 0.7);

  ${({
      show: _v0
    }) => _v391(_v0)}
`,
    _v393 = _v33.default.div.withConfig({
      displayName: "VideoCard__LiveBadgeWrapper",
      componentId: "sc-68f6320c-8"
    })`
  ${({
      show: _v0
    }) => _v391(_v0)}
`,
    _v394 = _v33.default.div.withConfig({
      displayName: "VideoCard__ButtonCTABox",
      componentId: "sc-68f6320c-9"
    })`
  z-index: 10;
  position: absolute;
  top: ${(0, _v51.rem)(12)};
  left: ${(0, _v51.rem)(12)};
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear;
  display: flex;

  ${({
      isFocused: _v0
    }) => _v0 && _v33.css`
      ${_v61.media.sm`
        opacity: 1;
      `}
    `}
`,
    _v395 = _v33.default.div.withConfig({
      displayName: "VideoCard__ButtonCTAWrapper",
      componentId: "sc-68f6320c-10"
    })`
  margin-left: ${(0, _v51.rem)(8)};
  outline: none;
`,
    _v396 = _v33.default.span.withConfig({
      displayName: "VideoCard__TimeStamp",
      componentId: "sc-68f6320c-11"
    })`
  ${_v383}
  font-size: ${(0, _v51.rem)(12)};
  letter-spacing: ${(0, _v51.rem)(.17)};
  line-height: ${(0, _v51.rem)(14)};
`,
    _v397 = _v33.default.button.withConfig({
      displayName: "VideoCard__PlayButtonWrapper",
      componentId: "sc-68f6320c-12"
    })`
  cursor: pointer;
  position: absolute;
  bottom: ${(0, _v51.rem)(12)};
  left: ${(0, _v51.rem)(12)};
  height: ${(0, _v51.rem)(40)};
  width: ${(0, _v51.rem)(65)};
  border-radius: ${(0, _v51.rem)(5)};
  border: none;
  background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["800"], .75)};
  opacity: 0;
  transition: opacity 230ms ease-in-out;
  &:hover {
    background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .9)};
  }
  &:focus {
    opacity: 1;
  }
  ${({
      show: _v0
    }) => _v0 && _v33.css`
      opacity: 1;
    `}
`,
    _v398 = _v33.default.span.withConfig({
      displayName: "VideoCard__PlayButton",
      componentId: "sc-68f6320c-13"
    })`
  ${_v383}
  width: 0;
  height: 0;
  border-top: ${(0, _v51.rem)(9)} solid transparent;
  border-bottom: ${(0, _v51.rem)(9)} solid transparent;
  border-left: ${(0, _v51.rem)(18)} solid ${_v53.bokehTheme.colors.white};
`,
    _v399 = _v33.default.div.withConfig({
      displayName: "VideoCard__FeaturedCommentWrapper",
      componentId: "sc-68f6320c-14"
    })`
  transition: all 0.5s ease-in;
  display: none;
  ${_v61.media.sm`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 40%;
    opacity: 1;
  `}
`,
    _v400 = _v33.default.div.withConfig({
      displayName: "VideoCard__MobileFeaturedComment",
      componentId: "sc-68f6320c-15"
    })`
  display: block;
  margin-bottom: ${(0, _v51.rem)(10)};
  padding-left: ${(0, _v51.rem)(_v49.MOBILE_FEATURE_COMMENT_PADDING)};
  position: relative;
  ${({
      hasSingleColumnComment: _v0
    }) => !_v0 && _v61.media.sm`
      display: none;
    `}
`,
    _v401 = _v33.default.div.withConfig({
      displayName: "VideoCard__Wrapper",
      componentId: "sc-68f6320c-16"
    })`
  display: flex;
  flex-direction: column;
  ${_v61.media.sm`
    flex-direction: row;
  `}
`,
    _v402 = _v33.default.div.withConfig({
      displayName: "VideoCard__VideoTitleWrapper",
      componentId: "sc-68f6320c-17"
    })`
  margin-top: ${(0, _v51.rem)(3)};
  position: relative;
  ${({
      hasFeaturedComment: _v0
    }) => _v0 && _v33.css`
      border-left: ${(0, _v51.rem)(1)} solid ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["100"], .8)};
      margin-left: ${(0, _v51.rem)(12)};
    `};

  ${_v61.media.sm`
    margin: 0;
  `}
  ${({
      hasSingleColumnComment: _v0,
      hasFeaturedComment: _v1
    }) => _v0 && _v1 ? _v61.media.sm`
          border-left: ${(0, _v51.rem)(1)} solid ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["100"], .8)};
        ` : _v61.media.sm`
          border: none;
        `}
`,
    _v403 = _v33.default.a.withConfig({
      displayName: "VideoCard__TitleAnchor",
      componentId: "sc-68f6320c-18"
    })`
  text-decoration: none;
`,
    _v404 = _v33.default.div.withConfig({
      displayName: "VideoCard__DragIconContainer",
      componentId: "sc-68f6320c-19"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(8.53)};
  right: ${(0, _v51.rem)(13.59)};
  z-index: 2;
  cursor: grab;
  svg {
    overflow: visible;
  }
`,
    _v405 = (0, _v33.default)(_v56.Modal).withConfig({
      displayName: "VideoCard__RemoveModal",
      componentId: "sc-68f6320c-20"
    })`
  width: ${(0, _v51.rem)(662)};
  max-width: 90vw;
`,
    _v406 = _v33.default.aside.withConfig({
      displayName: "VideoCard__VODContainer",
      componentId: "sc-68f6320c-21"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(10)};
  left: ${(0, _v51.rem)(10)};
  padding: ${(0, _v51.rem)(8)};
  display: block;
  background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["800"], .75)};
  border-radius: ${(0, _v51.rem)(5)};
`,
    _v407 = _v33.default.img.withConfig({
      displayName: "VideoCard__VODImage",
      componentId: "sc-68f6320c-22"
    })`
  width: ${(0, _v51.rem)(16)};
  height: ${(0, _v51.rem)(16)};
`,
    _v408 = _v33.default.div.withConfig({
      displayName: "VideoCard__ThumbnailWrapper",
      componentId: "sc-68f6320c-23"
    })`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`,
    _v409 = _v33.default.img.withConfig({
      displayName: "VideoCard__ClipImage",
      componentId: "sc-68f6320c-24"
    })`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: ${_v53.bokehTheme.colors.gray["900"]};
  opacity: ${({
      hover: _v0
    }) => +!_v0};
`;
  function _v410() {
    return (0, _v14.jsx)(_v411, {
      children: (0, _v14.jsx)(_v413, {})
    });
  }
  let _v411 = _v33.default.section.withConfig({
      displayName: "LoadingVideoCard__Container",
      componentId: "sc-3da857b8-0"
    })`
  padding-top: 56.25%;
  position: relative;
`,
    _v412 = _v33.keyframes`
  0% { opacity: 0.5 }
  50%  { opacity: 1 }
  100% { opacity: 0.5 }
`,
    _v413 = _v33.default.article.withConfig({
      displayName: "LoadingVideoCard__VideoContainer",
      componentId: "sc-3da857b8-1"
    })`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(270deg, ${_v49.COLORS.SNOW} 0%, ${_v49.COLORS.CYAN_WHITE} 100%);
  animation: ${_v412} 2s ease-in-out 0s infinite reverse;
  border-radius: ${(0, _v51.rem)(8)};
`;
  function _v414({
    count: _v0
  }) {
    return (0, _v14.jsx)("section", {
      children: Array(_v0).fill(null).map((_v0, _v1) => (0, _v14.jsx)(_v76, {
        children: (0, _v14.jsx)(_v410, {})
      }, _v1))
    });
  }
  function _v415({
    selectedCategory: _v0,
    dispatch: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      {
        data: _v4,
        error: _v5,
        size: _v6,
        setSize: _v7
      } = _v317(_v0.word),
      _v8 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v4), [_v4]),
      _v9 = (0, _v22.useMemo)(() => (0, _v50.hasNext)(_v4), [_v4]),
      _v10 = (0, _v22.useMemo)(() => !_v4 && !_v5, [_v4, _v5]),
      _v11 = (0, _v22.useCallback)(() => {
        _v3(!0), _v7?.(_v6 ? _v6 + 1 : 0).then(() => _v3(!1)).catch(() => _v3(!1));
      }, [_v6, _v7]);
    return (0, _v22.useEffect)(() => {
      if (_v4 && _v4[0]) {
        let _v0 = _v4[0];
        _v1({
          type: _v319.TOTAL_VIDEOS,
          payload: _v0.total
        });
      }
    }, [_v4, _v1]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [_v8.length > 0 ? (0, _v14.jsxs)("section", {
        children: [_v8.map((_v0, _v1) => (0, _v14.jsx)(_v76, {
          children: (0, _v14.jsx)(_v382, {
            video: {
              clip: _v0
            },
            viewType: _v49.ViewType.GRID,
            videoIndex: _v1
          }, _v0.uri)
        })), _v9 && !_v2 ? (0, _v14.jsx)(_v315, {
          onClick: _v11
        }) : null]
      }) : null, _v10 || _v2 ? (0, _v14.jsx)(_v414, {
        count: _v10 ? 4 : 2
      }) : null]
    });
  }
  var _v416 = _v0.i(0),
    _v417 = _v0.i(0),
    _v418 = _v0.i(0),
    _v419 = _v0.i(0);
  let _v420 = async (_v0, _v1, _v2) => {
      let _v3 = await fetch(`//${_v0}/me/following/${_v1}`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v2}`
        }
      });
      return _v3.ok || 404 === _v3.status ? Promise.resolve(404 !== _v3.status) : Promise.reject(_v3);
    },
    _v421 = (_v0, _v1, _v2) => fetch(`//${_v0}/me/following/${_v1}?check_email_verification=true`, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.vimeo.*;version=3.4.2",
        Authorization: `jwt ${_v2}`
      }
    }),
    _v422 = async (_v0, _v1, _v2) => {
      let _v3 = await fetch(`//${_v0}/me/following/${_v1}`, {
        method: "DELETE",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v2}`
        }
      });
      return _v3.ok ? Promise.resolve(_v3) : Promise.reject(_v3);
    },
    _v423 = async (_v0, _v1, _v2 = 1, _v3 = 1) => {
      let _v4 = await fetch(`//${_v0}/me/following?page=${_v2}&per_page=${_v3}&fields=uri`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v1}`
        }
      });
      return _v4.ok ? _v4.json().then(_v0 => (0, _v48.standardizeResponseObject)(_v0)) : Promise.reject(_v4);
    },
    _v424 = async (_v0, _v1) => {
      let _v2 = await fetch(`//${_v0}/me?fields=verified`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v1}`
        }
      });
      return _v2.ok ? _v2.json().then(_v0 => _v0) : Promise.reject(_v2);
    },
    _v425 = () => Error("Not implemented"),
    _v426 = (0, _v22.createContext)({
      isLoggedIn: !1,
      isStaffUser: !1,
      isVerifiedUser: !1,
      isLoading: !1,
      submitting: !1,
      isFollowing: !1,
      isUserFollowing: !1,
      onFollowUser: () => Promise.reject("Not implemented"),
      onUnfollowUser: _v425,
      onLoginSuccess: _v425
    });
  function _v427({
    children: _v0,
    profileId: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)({
        submitting: !1,
        isFollowing: !1,
        loading: !1,
        usersFollowing: null,
        isVerifiedUser: !1,
        error: null
      }),
      _v4 = (0, _v22.useContext)(_v32.ViewerContext),
      _v5 = (0, _v22.useMemo)(() => _v4?.apiUrl || "", [_v4]),
      _v6 = (0, _v22.useMemo)(() => _v4?.jwt || "", [_v4]),
      _v7 = (0, _v22.useMemo)(() => _v4?.user, [_v4]),
      _v8 = (0, _v22.useCallback)(async () => {
        let [_v0, _v1, _v2] = await Promise.all([_v1 !== _v7?.id ? _v420(_v5, _v1, _v6) : Promise.resolve(!1), _v423(_v5, _v6), _v1 !== _v7?.id ? _v424(_v5, _v6) : Promise.resolve({
          verified: !1
        })]);
        return {
          checkIfFollowing: _v0,
          usersFollowing: _v1,
          userIsVerified: _v2
        };
      }, [_v5, _v7, _v6, _v1]);
    (0, _v22.useEffect)(() => {
      _v7 && (_v3(_v0 => ({
        ..._v0,
        loading: !0
      })), _v8().then(_v0 => {
        _v3(_v0 => ({
          ..._v0,
          loading: !1,
          isFollowing: _v0.checkIfFollowing,
          usersFollowing: _v0.usersFollowing,
          isVerifiedUser: _v0.userIsVerified.verified
        }));
      }).catch(_v0 => _v3(_v0 => ({
        ..._v0,
        loading: !1,
        error: _v0
      }))));
    }, [_v7, _v1, _v8]);
    let _v9 = (0, _v22.useCallback)(_v0 => {
        _v423(_v5, _v6).then(_v0 => {
          _v3(_v0 => ({
            ..._v0,
            submitting: !1,
            usersFollowing: _v0,
            isFollowing: _v0
          }));
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v5, _v6]),
      _v10 = (0, _v22.useCallback)(() => (_v3(_v0 => ({
        ..._v0,
        submitting: !0
      })), _v421(_v5, _v1, _v6).then(_v0 => _v0.ok ? (_v9(!0), Promise.resolve(_v0)) : (_v3(_v0 => ({
        ..._v0,
        submitting: !1,
        error: _v0
      })), Promise.reject(_v0)))), [_v6, _v5, _v1, _v9]),
      _v11 = (0, _v22.useCallback)(() => {
        _v3(_v0 => ({
          ..._v0,
          submitting: !0
        })), _v422(_v5, _v1, _v6).then(() => {
          _v9(!1);
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v6, _v5, _v1, _v9]),
      _v12 = (0, _v22.useCallback)(async () => {
        let _v0 = await fetch("/_next/jwt", {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        return await _v0.json();
      }, []),
      _v13 = (0, _v22.useCallback)(async () => {
        try {
          _v3(_v0 => ({
            ..._v0,
            submitting: !0
          }));
          let _v0 = await _v12();
          await _v421(_v5, _v1, _v0.token);
        } catch (_v0) {}
        window.location.reload();
      }, [_v5, _v12, _v1]),
      _v14 = (0, _v22.useMemo)(() => {
        let _v0 = !!_v2.usersFollowing?.items?.length;
        return {
          isLoggedIn: !!_v7,
          isStaffUser: _v7?.badge.type === _v97.BadgeType.Staff,
          isVerifiedUser: _v2.isVerifiedUser,
          isLoading: _v2.loading,
          submitting: _v2.submitting,
          isFollowing: _v2.isFollowing,
          isUserFollowing: _v0,
          onFollowUser: _v10,
          onUnfollowUser: _v11,
          onLoginSuccess: _v13
        };
      }, [_v2, _v7, _v10, _v11, _v13]);
    return (0, _v14.jsx)(_v426.Provider, {
      value: _v14,
      children: _v0
    });
  }
  function _v428({
    xsrft: _v0,
    isOwner: _v1,
    profileId: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      _v5 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      {
        trackUserProfilePageFollowClicked: _v6
      } = (0, _v30.useProfileTracking)(),
      {
        isFollowing: _v7,
        isLoading: _v8,
        isLoggedIn: _v9,
        isVerifiedUser: _v10,
        onFollowUser: _v11,
        onLoginSuccess: _v12,
        onUnfollowUser: _v13,
        submitting: _v14
      } = (0, _v22.useContext)(_v426);
    (0, _v287.default)(_v3 ? _v0 => (0, _v50.onEsc)(_v0, () => _v4(!1)) : void 0, [_v3]);
    let _v15 = (0, _v22.useCallback)(() => {
      _v1 ? _v5({
        content: _v66.default.FollowSameUser,
        status: "negative"
      }) : _v10 ? (_v108(_v49.BPEvent.CLICK_TO_FOLLOW_CREATOR, 1, {
        following: !_v7
      }), _v6({
        userProfilePageUserId: String(_v2),
        userProfilePageFollowEffect: _v7 ? "unfollow" : "follow"
      }), _v7 ? _v13() : _v11().catch(_v0 => {
        (_v0.status === _v49.ErrorCodes.ENHACE_YOUR_CALM || _v0.status === _v49.ErrorCodes.TOO_MANY_REQUESTS) && _v4(!0);
      })) : _v4(!0);
    }, [_v7, _v1, _v10, _v11, _v5, _v13]);
    return _v8 ? null : (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v419.LoginJoinModal, {
        type: "login",
        xsrft: _v0,
        onSuccess: _v12,
        children: _v0 => (0, _v14.jsx)(_v78, {
          icon: _v7 ? (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)(_v52.CloseX, {
              id: "dismiss-icon"
            }), (0, _v14.jsx)(_v416.Checkmark, {
              id: "check-icon"
            })]
          }) : (0, _v14.jsx)(_v417.Plus, {}),
          format: "secondary",
          onClick: () => _v9 ? _v15() : _v0(),
          disabled: _v14,
          loading: _v14,
          children: (0, _v14.jsx)(_v430, {
            children: !_v14 && _v7 ? (0, _v14.jsxs)(_v14.Fragment, {
              children: [(0, _v14.jsx)("span", {
                id: "following-text",
                children: _v66.default.Following
              }), (0, _v14.jsx)("span", {
                id: "unfollow-text",
                children: _v66.default.Unfollow
              })]
            }) : _v66.default.Follow
          })
        })
      }), (0, _v14.jsx)(_v56.Modal, {
        active: _v3,
        onOpen: () => _v4(!1),
        content: (0, _v14.jsxs)(_v429, {
          children: [(0, _v14.jsx)(_v247.default, {
            onClick: () => _v4(!1)
          }), (0, _v14.jsx)(_v195.Header, {
            size: "3",
            children: _v10 ? _v66.default.UnableToFollow : _v66.default.VerifyAccountTitle
          }), (0, _v14.jsx)(_v57.Paragraph, {
            size: "2",
            children: _v10 ? _v66.default.TooManyFollow : (0, _v14.jsx)(_v14.Fragment, {
              children: (0, _v27.translate)({
                singular: "You need to verify your email address before following other members on Vimeo. {LINK}Need help?{/LINK}",
                replacements: {
                  LINK: _v0 => (0, _v14.jsx)(_v418.Link, {
                    variant: "minimal",
                    href: "/help/verify_email",
                    children: _v0
                  }, "info-modal-text")
                },
                dictionary: {
                  es: {
                    singular: "Necesitas verificar tu dirección de correo electrónico antes de que puedas seguir a otros miembros en Vimeo. {LINK}¿Necesitas ayuda?{/LINK}"
                  },
                  "de-DE": {
                    singular: "Deine E-Mail-Adresse muss überprüft werden, bevor du anderen Mitgliedern auf Vimeo folgen kannst. {LINK}Brauchst du Hilfe?{/LINK}"
                  },
                  "fr-FR": {
                    singular: "Vous devez vérifier votre adresse e-mail avant de suivre d'autres membres sur Vimeo. {LINK}Besoin d'aide ?{/LINK}"
                  },
                  "ja-JP": {
                    singular: "Vimeoメンバーをフォローするにはまずメールアドレスを承認してください。{LINK}お困りですか？{/LINK}"
                  },
                  "ko-KR": {
                    singular: "Vimeo에서 다른 사용자들을 팔로우하려면 이메일 주소를 검증해야 합니다. {LINK}도움이 필요하신가요?{/LINK}"
                  },
                  "pt-BR": {
                    singular: "Você precisa confirmar o seu endereço de e-mail antes de seguir outros membros no Vimeo. {LINK}Precisa de ajuda? {/LINK}"
                  },
                  "zh-CN": {
                    singular: "在关注 Vimeo 上的其他会员之前，您需要验证您的电子邮件地址。{LINK}需要帮助吗？{/LINK}"
                  }
                }
              })
            })
          })]
        })
      })]
    });
  }
  let _v429 = _v33.default.div.withConfig({
      displayName: "Follow__Content",
      componentId: "sc-2b5f36c1-0"
    })`
  padding: ${(0, _v51.rem)(40)} ${(0, _v51.rem)(30)} ${(0, _v51.rem)(20)};
  background-color: ${_v53.bokehTheme.colors.white};
`,
    _v430 = _v33.default.span.withConfig({
      displayName: "Follow__ButtonText",
      componentId: "sc-2b5f36c1-1"
    })`
  display: none;
  ${_v61.media.md`
    display: inline;
  `}
`;
  var _v431 = _v0.i(0),
    _v432 = _v0.i(0),
    _v433 = _v0.i(0),
    _v434 = _v0.i(0),
    _v435 = ((_v4 = _v435 || {}).ABOUT = "about", _v4.VIDEO = "video", _v4);
  let _v436 = (0, _v22.lazy)(() => _v0.A(0));
  var _v437 = ((_v5 = _v437 || {}).ABOUT = "about", _v5.VIDEO = "video", _v5);
  function _v438({
    header: _v0,
    infoPanel: _v1,
    aboutPanel: _v2,
    videoPanel: _v3,
    isDesktopView: _v4,
    showSearchResultsButton: _v5,
    referrerUrl: _v6,
    footerRef: _v7,
    stickyTopNav: _v8,
    isOwner: _v9
  }) {
    let [_v10, _v11] = (0, _v22.useState)("about"),
      [_v12, _v13] = (0, _v22.useState)(!1),
      _v14 = (0, _v22.useRef)(null),
      _v15 = (0, _v22.useRef)(null);
    return !function (_v0, _v1) {
      let [_v2, _v3] = (0, _v22.useState)("about"),
        _v4 = (0, _v434.useViewer)(),
        _v5 = _v4?.user?.id,
        _v6 = _v4?.vuid,
        _v7 = "/profile";
      _v7 = window.location?.pathname;
      let {
          assignment: _v8
        } = (0, _v433.useEppoAssignment)({
          flagKey: "profile-mobile-default-tab",
          subject: {
            key: _v6,
            keyType: _v432.SubjectKeyTypes.VUID,
            additionalData: _v5 ? {
              cuid: _v5
            } : {}
          },
          bigPictureOverrides: {
            product_analytics_context: {
              product: "community",
              device_type: "mobile"
            },
            web_context: {
              page_name: "user_profile",
              path: _v7
            }
          },
          defaultAssignment: "control",
          disabled: _v1
        }),
        _v9 = "variant" === _v8 ? "video" : "about";
      _v9 !== _v2 && _v3(_v9), (0, _v22.useEffect)(() => {
        _v0(_v2);
      }, [_v2, _v0, _v1]);
    }(_v11, _v4), (0, _v22.useLayoutEffect)(() => {
      let _v0 = (0, _v313.default)(() => {
        if (_v14.current) {
          let _v0 = _v14.current.getBoundingClientRect(),
            _v1 = window?.innerHeight,
            _v2 = _v0.bottom >= 0 && _v0.top < _v1,
            _v3 = _v15.current;
          if (_v13(!_v2), _v3) {
            if (_v2) _v3.classList.remove("showUserInfoPanel");else if (_v3.classList.add("showUserInfoPanel"), _v7?.current) {
              let _v0 = document.documentElement;
              _v0.scrollHeight - (_v0.scrollTop + _v7.current.offsetHeight) - 100 < _v3.offsetHeight ? _v3.classList.add("scrolledToBottom") : _v3.classList.remove("scrolledToBottom");
            }
          }
        }
      }, 50);
      return document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v14, _v15, _v7]), (0, _v14.jsxs)(_v444, {
      children: [_v0 && (0, _v14.jsx)(_v447, {
        children: _v0
      }), _v8?.(_v12), (0, _v14.jsxs)(_v446, {
        noHeader: !_v0,
        children: [_v5 && (0, _v14.jsxs)(_v439, {
          href: _v6,
          children: [(0, _v14.jsx)(_v440, {
            children: (0, _v14.jsx)(_v431.ChevronRightSmall, {})
          }), _v66.default.SearchResults]
        }), (0, _v14.jsxs)(_v450, {
          noHeader: !_v0,
          children: [(0, _v14.jsxs)("div", {
            ref: _v14,
            children: [(0, _v14.jsx)(_v99, {
              withoutEffects: !_v4,
              children: _v1
            }), _v4 && _v2]
          }), _v4 && (0, _v14.jsx)(_v443, {
            ref: _v15,
            children: _v1
          })]
        }), (0, _v14.jsxs)(_v451, {
          noHeader: !_v0,
          children: [!_v4 && (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsxs)(_v448, {
              children: [(0, _v14.jsx)(_v449, {
                onClick: () => _v11("video"),
                isActive: "video" === _v10,
                href: void 0,
                children: _v66.default.Videos
              }), (0, _v14.jsx)(_v449, {
                onClick: () => _v11("about"),
                isActive: "about" === _v10,
                href: void 0,
                children: _v66.default.About
              })]
            }), "about" === _v10 ? (0, _v14.jsx)(_v14.Fragment, {
              children: _v2
            }) : null]
          }), _v4 || "video" === _v10 ? (0, _v14.jsx)(_v14.Fragment, {
            children: _v3
          }) : null]
        })]
      }), _v9 ? null : (0, _v14.jsx)(_v22.Suspense, {
        fallback: (0, _v14.jsx)(_v14.Fragment, {}),
        children: (0, _v14.jsx)(_v436, {
          footerRef: _v7,
          isDesktopView: _v4
        })
      })]
    });
  }
  let _v439 = _v33.default.a.withConfig({
      displayName: "Layout__SearchResults",
      componentId: "sc-cc36a67a-0"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-size: ${(0, _v51.rem)(14)};
  font-weight: bold;
  line-height: ${(0, _v51.rem)(17)};
  letter-spacing: ${(0, _v51.rem)(.2)};
  border-radius: ${(0, _v51.rem)(2)};
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${(0, _v51.rem)(8)} ${(0, _v51.rem)(14)} ${(0, _v51.rem)(8)} ${(0, _v51.rem)(10)};
  cursor: pointer;
  z-index: 1;
  width: ${(0, _v51.rem)(146)};
  position: absolute;
  top: ${(0, _v51.rem)(30)};
  left: ${(0, _v51.rem)(16)};
  text-decoration: none;
  ${_v61.media.sm`
    left: ${(0, _v51.rem)(30)};
  `};
  ${_v61.media.md`
    top: ${(0, _v51.rem)(20)};
    left: ${(0, _v51.rem)(40)};
  `}
  ${_v61.media.hd`
    left: ${(0, _v51.rem)(60)};
  `};
  ${_v61.media.xhd`
    left: ${(0, _v51.rem)(70)};
  `};
`,
    _v440 = _v33.default.div.withConfig({
      displayName: "Layout__ChevronLeft",
      componentId: "sc-cc36a67a-1"
    })`
  display: inline-block;
  vertical-align: middle;
  width: ${(0, _v51.rem)(20)};
  height: ${(0, _v51.rem)(20)};
  transform: rotate(180deg);
  svg path {
    fill: ${_v53.bokehTheme.colors.white};
  }
`,
    _v441 = _v33.keyframes`
  from {
    transform: translateY(${(0, _v51.rem)(50)});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,
    _v442 = _v33.keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(${(0, _v51.rem)(50)});
    opacity: 0;
  }
`,
    _v443 = (0, _v33.default)(_v99).withConfig({
      displayName: "Layout__CustomInfoPanel",
      componentId: "sc-cc36a67a-2"
    })`
  position: fixed;
  top: ${(0, _v51.rem)(90)};
  opacity: 0;
  animation: ${_v442} 0.5s ease-out;
  visibility: hidden;
  &.showUserInfoPanel {
    opacity: 1;
    z-index: 2;
    visibility: visible;
    animation: ${_v441} 0.5s ease-in;
  }
  &.scrolledToBottom {
    position: absolute;
    top: auto;
    bottom: ${(0, _v51.rem)(20)};
  }
  ${_v61.media.md`
    width: ${(0, _v51.rem)(320)};
  `}
  ${_v61.media.hd`
    width: ${(0, _v51.rem)(424)};
  `};
  ${_v61.media.xhd`
    width: ${(0, _v51.rem)(566)};
  `}
`,
    _v444 = _v33.default.div.withConfig({
      displayName: "Layout__Container",
      componentId: "sc-cc36a67a-3"
    })`
  position: relative;
  padding-bottom: ${(0, _v51.rem)(76)};
`,
    _v445 = _v33.css`
  padding: 0 ${(0, _v51.rem)(16)};
  ${_v61.media.sm`
    padding: 0 ${(0, _v51.rem)(30)};
  `};
  ${_v61.media.md`
    padding: 0;
  `}
`,
    _v446 = _v33.default.div.withConfig({
      displayName: "Layout__SubContainer",
      componentId: "sc-cc36a67a-4"
    })`
  ${({
      noHeader: _v0
    }) => _v0 && _v33.css`
      padding-top: ${(0, _v51.rem)(50)};
    `};
  ${_v61.media.md`
    display: flex;
  `}
`,
    _v447 = _v33.default.div.withConfig({
      displayName: "Layout__HeaderWrapper",
      componentId: "sc-cc36a67a-5"
    })`
  height: ${(0, _v51.rem)(138)};
  ${_v61.media.md`
    height: ${(0, _v51.rem)(194)};
  `}
  ${_v61.media.hd`
    height: ${(0, _v51.rem)(258)};
  `};
  ${_v61.media.xhd`
    height: ${(0, _v51.rem)(344)};
  `}
`,
    _v448 = _v33.default.div.withConfig({
      displayName: "Layout__NavMenu",
      componentId: "sc-cc36a67a-6"
    })`
  margin: ${(0, _v51.rem)(30)} 0;
  padding: ${(0, _v51.rem)(2)};
  height: ${(0, _v51.rem)(28)};
  border-radius: ${(0, _v51.rem)(6)};
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
  display: flex;
`,
    _v449 = _v33.default.a.withConfig({
      displayName: "Layout__NavMenuLink",
      componentId: "sc-cc36a67a-7"
    })`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(0, _v51.rem)(13)};
  font-weight: 400;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  ${({
      isActive: _v0
    }) => _v0 && _v33.css`
      border-radius: ${(0, _v51.rem)(6)};
      background-color: ${_v53.bokehTheme.colors.white};
      box-shadow: 0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(4)} 0 ${_v53.bokehTheme.colors.gray["100"]};
    `};
`,
    _v450 = _v33.default.div.withConfig({
      displayName: "Layout__LeftPanelWrapper",
      componentId: "sc-cc36a67a-8"
    })`
  ${_v445}
  margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(100)};
  ${_v61.media.sm`
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(65)};
  `}
  ${_v61.media.md`
    flex: 0 0 auto;
    width: ${(0, _v51.rem)(320)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(30) : (0, _v51.rem)(-50)};
    margin-left: ${(0, _v51.rem)(40)};
  `};
  ${_v61.media.hd`
    width: ${(0, _v51.rem)(424)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(25) : (0, _v51.rem)(-70)};
    margin-left: ${(0, _v51.rem)(60)};
  `};
  ${_v61.media.xhd`
    width: ${(0, _v51.rem)(566)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(30) : (0, _v51.rem)(-154)};
    margin-left: ${(0, _v51.rem)(70)};
  `};
`,
    _v451 = _v33.default.div.withConfig({
      displayName: "Layout__RightPanelWrapper",
      componentId: "sc-cc36a67a-9"
    })`
  ${_v445}
  ${_v61.media.md`
    flex: 1 1 auto;
    width: calc(100% - ${(0, _v51.rem)(360)});
    padding: ${(0, _v51.rem)(21)} ${(0, _v51.rem)(38)} ${(0, _v51.rem)(20)} ${(0, _v51.rem)(20)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(15)};
  `}
  ${_v61.media.hd`
    width: calc(100% - ${(0, _v51.rem)(484)});
    padding: ${(0, _v51.rem)(34)} ${(0, _v51.rem)(60)} ${(0, _v51.rem)(20)} ${(0, _v51.rem)(24)};
    margin-top: 0;
    padding-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(25)};
  `};
  ${_v61.media.xhd`
    width: calc(100% - ${(0, _v51.rem)(636)});
    padding: ${(0, _v51.rem)(34)} ${(0, _v51.rem)(70)} ${(0, _v51.rem)(20)} ${(0, _v51.rem)(40)};
  `};
`,
    _v452 = _v33.default.div.withConfig({
      displayName: "Links.styles__EditAddWrapper",
      componentId: "sc-987b32f-0"
    })`
  &:hover {
    outline: none;
  }
`,
    _v453 = _v33.default.div.withConfig({
      displayName: "Links.styles__SavedLinkWrapper",
      componentId: "sc-987b32f-1"
    })`
  padding: ${(0, _v51.rem)(10)};
  padding-right: ${(0, _v51.rem)(5)};
  box-sizing: border-box;
  border: ${(0, _v51.rem)(1)} solid transparent; // To fix moving of text by a px
  display: inline-block;

  ${_v61.media.md`
    display: flex;
  `}
  ${({
      editMode: _v0
    }) => _v0 && _v73}
`,
    _v454 = _v33.default.div.withConfig({
      displayName: "Links.styles__IconWrapper",
      componentId: "sc-987b32f-2"
    })`
  display: inline-block;
  svg {
    width: ${(0, _v51.rem)(19)};
    height: ${(0, _v51.rem)(19)};
  }
  ${({
      editing: _v0
    }) => _v0 && _v33.css`
      margin-left: ${(0, _v51.rem)(11)};
    `}
`,
    _v455 = _v33.default.a.withConfig({
      displayName: "Links.styles__LinkName",
      componentId: "sc-987b32f-3"
    })`
  display: inline-block;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  text-decoration: none;
  font-size: ${(0, _v51.rem)(14)};
  line-height: ${(0, _v51.rem)(20)};
  margin-left: ${(0, _v51.rem)(22)};
  max-height: ${(0, _v51.rem)(20)};
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: center;

  ${({
      editMode: _v0
    }) => !_v0 && _v33.css`
      ${_v61.media.sm`
        margin-left: ${(0, _v51.rem)(8)};
      `}
      ${_v61.media.md`
        margin-left: ${(0, _v51.rem)(22)};
      `}
      vertical-align: text-bottom;
    `}
`,
    _v456 = _v33.default.div.withConfig({
      displayName: "Links.styles__InputWrapper",
      componentId: "sc-987b32f-4"
    })`
  position: relative;
  width: 100%;
  padding: ${(0, _v51.rem)(4)} 0;
  border: ${(0, _v51.rem)(1)} solid transparent;
  input {
    font-family: inherit;
    padding-left: ${(0, _v51.rem)(13)};
    font-size: ${(0, _v51.rem)(14)};
    &::placeholder {
      color: ${_v53.bokehTheme.colors.gray["200"]};
    }
  }
  margin: -${(0, _v51.rem)(1)} 0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(7)};
  ${_v61.media.md`
    margin: -${(0, _v51.rem)(1)} 0 ${(0, _v51.rem)(1)} ${(0, _v51.rem)(7)};
  `}

  ${({
      isNewLink: _v0
    }) => _v0 && _v33.css`
      margin-left: ${(0, _v51.rem)(37)};
      ${_v61.media.sm`
        margin-left: ${(0, _v51.rem)(8)};
      `}
    `}
`,
    _v457 = _v33.default.div.withConfig({
      displayName: "Links.styles__EditLinkWrapper",
      componentId: "sc-987b32f-5"
    })`
  display: flex;
  align-items: center;
`,
    _v458 = _v33.default.div.withConfig({
      displayName: "Links.styles__ViewAll",
      componentId: "sc-987b32f-6"
    })`
  font-size: ${(0, _v51.rem)(14)};
  cursor: pointer;
  margin: ${(0, _v51.rem)(10)};
  text-decoration: underline;
`;
  var _v459 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M6.2 13.4c.2 0 .5 0 .7-.1.2 0 .4-.1.6-.2.2-.1.3-.3.4-.5 0-.2.1-.4.1-.7 0-.6-.2-1-.5-1.2-.3-.2-.8-.4-1.3-.4H3.5v3.1h2.7zM6 8.6c.4 0 .8-.1 1.1-.3.3-.2.4-.6.4-1 0-.3 0-.5-.1-.7-.1-.2-.2-.3-.4-.4-.1-.1-.3-.2-.5-.2s-.5-.1-.7-.1H3.5v2.6l2.5.1zM6.3 4c.5 0 1 0 1.5.1.4.1.8.3 1.1.5.3.2.6.5.7.9.2.4.3.8.3 1.3 0 .6-.1 1-.4 1.4-.2.4-.6.7-1.1 1 .7.2 1.2.6 1.6 1.1.3.5.5 1.1.5 1.8 0 .6-.1 1.1-.3 1.5-.2.4-.5.8-.9 1-.4.2-.9.4-1.3.5-.5.1-1 .2-1.5.2H1V4h5.3z"
      }), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M16.2 8.8c-.3-.3-.7-.4-1.2-.4-.4 0-.7.1-.9.2-.2.1-.4.3-.6.5l-.3.6c-.1.2-.1.4-.1.5h3.7c-.2-.6-.4-1.1-.6-1.4m-2.6 4.3c.3.3.8.5 1.5.5.5 0 .8-.1 1.2-.3.3-.2.5-.5.6-.7h2c-.3 1-.8 1.7-1.5 2.1-.7.4-1.4.6-2.4.6-.6 0-1.2-.1-1.7-.3-.5-.2-1-.5-1.3-.9-.4-.4-.6-.8-.8-1.4-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.3-1.7.2-.5.5-1 .9-1.4.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.7-.3.7 0 1.3.1 1.8.4.5.3.9.6 1.3 1.1.3.5.6 1 .7 1.6.1.6.2 1.2.2 1.8h-5.9c-.1.7.1 1.2.4 1.5"
      }), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M12.7 5.8h4.6V4.6h-4.6z"
      }));
    }),
    _v460 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 24 24",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M14.808 12.828A25.836 25.836 0 0116.05 18.3a7.51 7.51 0 002.322-2.358c.6-.96.96-1.998 1.08-3.114-.876-.06-1.674-.09-2.394-.09-.66 0-1.41.03-2.25.09m-1.062-2.718c.18.384.384.87.612 1.458a30.892 30.892 0 012.898-.126c.744 0 1.482.018 2.214.054-.096-1.632-.684-3.084-1.764-4.356-.78 1.164-2.1 2.154-3.96 2.97m-3.582-5.364c1.056 1.092 2.034 2.454 2.934 4.086 1.632-.684 2.862-1.554 3.69-2.61C15.396 5.07 13.8 4.494 12 4.494c-.612 0-1.224.084-1.836.252M7.41 17.922c1.356 1.056 2.886 1.584 4.59 1.584.888 0 1.77-.168 2.646-.504a26.431 26.431 0 00-1.404-5.958c-1.104.24-2.217.846-3.339 1.818-1.122.972-1.953 1.992-2.493 3.06m-2.682-7.776c.264.024.654.036 1.17.036 2.004 0 3.906-.27 5.706-.81-.912-1.62-1.914-2.97-3.006-4.05A7.307 7.307 0 006.159 7.32a7.685 7.685 0 00-1.431 2.826M4.494 12c0 1.872.63 3.522 1.89 4.95.576-1.128 1.488-2.202 2.736-3.222 1.248-1.02 2.466-1.662 3.654-1.926-.18-.42-.354-.798-.522-1.134-2.064.66-4.296.99-6.696.99-.468 0-.816-.006-1.044-.018 0 .048-.003.108-.009.18a2.239 2.239 0 00-.009.18M3 12c0-1.632.402-3.138 1.206-4.518a8.936 8.936 0 013.276-3.276A8.816 8.816 0 0112 3c1.632 0 3.138.402 4.518 1.206a8.936 8.936 0 013.276 3.276A8.816 8.816 0 0121 12a8.816 8.816 0 01-1.206 4.518 8.936 8.936 0 01-3.276 3.276A8.816 8.816 0 0112 21a8.816 8.816 0 01-4.518-1.206 8.936 8.936 0 01-3.276-3.276A8.816 8.816 0 013 12",
        fill: "#474747"
      }));
    }),
    _v461 = _v0.i(0),
    _v462 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M10 0C7.3 0 6.9 0 5.9.1 4.8.1 4.1.3 3.5.6c-.7.2-1.3.6-1.8 1.1-.6.6-.9 1.1-1.2 1.8-.2.6-.4 1.4-.4 2.4C0 7 0 7.3 0 10s0 3.1.1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.2 1.4.4 2.4.5h4c2.7 0 3.1 0 4.1-.1 1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1 0-2.7 0-3.1-.1-4.1 0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.2-1.4-.4-2.4-.5-1 .2-1.4.1-4.1.1m0 1.8c2.7 0 3 0 4 .1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.8.3.3.6.7.7 1.1.2.4.4.9.4 1.9 0 1.1.1 1.4.1 4 0 2.7 0 3-.1 4 0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.5.3-1 .4-2 .5-1.1 0-1.4.1-4 .1s-3 0-4-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.6-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4 0-2.7 0-3 .1-4 0-1 .2-1.5.3-1.9.1-.6.3-1 .7-1.3.3-.3.7-.6 1.1-.7.4-.2.9-.4 1.9-.4 1 0 1.3-.1 4-.1"
      }), _v22.default.createElement("path", {
        d: "M10 13.4c-1.8 0-3.3-1.5-3.3-3.3S8.2 6.7 10 6.7s3.3 1.5 3.3 3.3-1.5 3.4-3.3 3.4m0-8.5c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1m6.5-.2c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2"
      }));
    }),
    _v463 = _v0.i(0),
    _v464 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M3 5.104C3 3.942 3.934 3 5.087 3c1.152 0 2.086.942 2.086 2.104a2.095 2.095 0 01-2.086 2.103A2.095 2.095 0 013 5.104zM15.944 8.352c2.417 0 4.147 1.476 4.147 4.53V20.1H16.58v-5.984c0-1.641-.624-2.557-1.921-2.557-1.413 0-2.15.954-2.15 2.557V20.1H9.123V8.7h3.384v1.535s1.018-1.883 3.436-1.883zM3.34 20.1h3.528V8.7H3.339z"
      }));
    }),
    _v465 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 1000 1000",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M520.6 62.5c-238.8 0-359.2 171.1-359.2 313.9 0 86.4 32.7 163.4 102.9 192.1 11.5 4.7 21.9.2 25.1-12.6 2.4-8.8 7.8-31.1 10.2-40.3 3.3-12.6 2.1-17-7.2-28-20.2-23.9-33.2-54.8-33.2-98.5 0-127 95-240.8 247.4-240.8 134.9 0 209.1 82.4 209.1 192.6 0 144.9-64.1 267.2-159.3 267.2-52.6 0-91.9-43.5-79.3-96.9 15.1-63.7 44.4-132.4 44.4-178.3 0-41.1-22-75.4-67.7-75.4-53.8 0-97 55.6-97 130.1 0 47.4 16.1 79.5 16.1 79.5S318 700.2 308.4 741c-19.2 81.3-2.9 181-1.5 191 .8 6 8.5 7.4 12 2.9 4.9-6.5 68.9-85.5 90.7-164.5 6.1-22.3 35.3-138.2 35.3-138.2 17.5 33.3 68.5 62.6 122.8 62.6 161.5 0 271.2-147.3 271.2-344.5-.1-148.9-126.4-287.8-318.3-287.8z"
      }));
    }),
    _v466 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 1000 1000",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M688.1 532.7c2.3 5.8 3.3 11.7 3.3 17.7 0 11.9-4.1 23.5-11 33-6.8 9.3-16.5 16.6-27.9 19.8l-.2.1h-.2c-5.3 1.8-10.8 2.7-16.2 2.7-12.7 0-25.2-4.6-35.2-12.4-9.9-7.8-17.4-19-19.8-32.2v-.2c-.7-3.4-1.1-6.8-1.1-10.2 0-11.5 3.9-22.5 10.4-31.6 6.4-9.1 15.5-16.3 26.1-20h.2c6-2.2 12.4-3.3 18.6-3.3 11.4 0 22.7 3.5 32.2 9.8 9.4 6.2 17 15.4 20.8 26.7l.1.2c-.1-.2-.1-.1-.1-.1zm-35 141c-4.5-2.9-9.7-4.7-15.2-4.7-4.4 0-9 1.3-13.1 4-38.7 23.1-84.1 35.7-129.3 35.7-33.9 0-67.5-7.1-98-22.1l-.2-.1-.2-.1c-4.6-1.9-9.8-5.9-15.6-9.7-2.9-1.9-5.9-3.8-9.3-5.1-3.3-1.4-7-2.4-11-2.4-3.3 0-6.7.7-10.1 2.3l-.5.2c-5.3 2-9.5 5.7-12.2 10.1-2.8 4.5-4.2 9.8-4.2 15.1 0 4.7 1.1 9.5 3.4 13.8 2.2 4.1 5.6 7.7 10 10 43.6 29.4 94.9 42.7 146.5 42.7 46.5 0 93.2-10.8 134.8-30.3l.2-.1.2-.1c5.5-3.2 12.8-6.2 19.7-10.4 3.4-2.2 6.7-4.7 9.6-7.9 2.8-3.2 5.1-7.2 6.4-12 .5-2.1.8-4.1.8-6.1 0-3.9-.9-7.5-2.5-10.8-2-5.1-5.8-9.1-10.2-12zM347 603c.1 0 .2 0 .3.1 5.6 2 11.3 3 17 3 14.2 0 27.9-5.8 38.4-15.3 10.4-9.5 17.5-22.9 17.5-38.2v-1.3c0-.7.1-1.4.1-2.2 0-15.2-7-28.6-17.3-38.2-10.3-9.5-24.1-15.4-38.3-15.4-3.8 0-7.7.4-11.5 1.3h-.3c-18.8 3.9-35.3 17.9-41.4 37.1v.1c-1.7 5.3-2.6 10.7-2.6 16.1 0 11.8 3.9 23.2 10.6 32.7 6.6 9.3 16.1 16.6 27.4 20l.1.2zm590.3-137.4c.1 2 .2 3.9.2 5.8 0 21.2-6.8 41.7-18.2 59-10.6 16.2-25.3 29.8-42.1 39 1.1 8.5 1.7 17 1.7 25.5 0 45.8-15.8 90.7-43.3 126.8h-.1C784.8 789.3 706.8 829.2 628 849.3h-.1c-42 10.2-85.3 15.4-128.6 15.4-64.5 0-129-11.6-189.2-35.8v-.1h-.1c-62.4-25.7-121.9-66.6-158.3-126.5-19.6-32-30.4-69.5-30.4-107.1 0-8.5.6-17.1 1.7-25.5-16.4-9.2-30.6-22.4-41.2-38-11.3-16.8-18.4-36.5-19.3-57.3v-.3c0-29.2 12.7-56.8 32.4-77.2s46.6-33.7 75.4-33.7h1.2c3-.2 6.1-.3 9.1-.3 14.5 0 29 2.3 42.8 7.6l.1.1h.1c11.8 5 23.5 10.9 33.9 19.2 3.4-1.8 7.1-3.8 11.2-5.3 63.2-37.4 136.6-51.9 208.2-56 .6-35.5 5-72.6 22.3-105.1 14.4-27 39.4-48 69.2-55.3l.1-.1h.2c11.3-2.2 22.8-3.2 34.1-3.2 30.2 0 60.1 7.2 88.1 18.3 12.4-18.7 30.1-33.3 50.8-41.4l.2-.1.2-.1c12.2-3.8 25-6 37.9-6 13.6 0 27.3 2.5 40.2 8.2l.2.1c18.4 7.1 34 20.2 45.1 36.5 11.1 16.4 17.6 36 17.6 56.1 0 3.7-.2 7.4-.6 11.2v.3c-2.2 26.1-15.4 48.9-34 65.2-18.8 16.4-43.1 26.3-68.1 26.3-4 0-8.1-.2-12.1-.8-24.8-1.9-47.9-13.9-64.9-31.7-17-17.8-28-41.6-28-67.3 0-1.2.1-2.5.2-3.7-23.3-10.4-48-19-72.5-18.9-3.6 0-7.1.2-10.7.6-18.4 1.8-35.5 13.4-43.8 30v.1c-12.6 24.5-15.1 53.1-15.5 81.5 70.5 4.6 141.4 21.5 203.5 57.2h.1l.9.5c1.2.7 3.4 1.9 5.3 2.9 4.3-3.5 8.8-7 13.9-10.1 18.9-12.6 41.2-18.8 63.5-18.8 9.9 0 19.8 1.3 29.5 3.7l.4.1.4.1c22.7 5.8 43.3 18.9 58.8 36.5 15.5 17.7 25.9 40.1 27.9 64.3zM729.8 235c0 .9 0 1.9.1 2.9v.2c.5 12.2 6.2 23.6 15 32.1 8.8 8.4 20.5 13.6 32.4 13.7h.3c.9.1 1.7.1 2.6.1 12 0 23.9-5.2 32.9-13.5 9-8.4 14.9-19.9 15.3-32.2v-.3c.1-.9.1-1.8.1-2.8 0-12.7-5.9-24.8-15.2-33.8-9.3-9-21.7-14.5-34-14.5-4 0-7.9.5-11.8 1.7h-.2c-10.1 2.6-19.6 8.9-26.5 17.2-6.9 8.4-11 18.6-11 29.2zM209.6 423.9c-9.4-4.4-19.2-7.5-28.8-7.5-1.6 0-3.2.1-4.9.3h-.4c-13.8.4-27.8 6.4-38.2 16.1-10.5 9.6-17.4 22.6-17.9 37v.2c-.1 1.2-.1 2.3-.1 3.4 0 8.8 2.7 17.4 7.3 25.2 3.4 5.8 7.9 11.1 12.9 15.7 16-35.4 41.3-65.4 70.1-90.4zm613.9 173c0-31.5-11.4-63.2-29.8-88.7-36.7-51.1-93.7-84.4-153-103l-.4-.1c-11.4-3.5-22.9-6.6-34.4-9.2-34.6-7.9-70.1-11.8-105.6-11.8-47.6 0-95.3 7-140.9 21.1-59.2 18.8-116.4 51.9-153 103.2-18.6 25.6-29.5 57.4-29.5 89 0 11.6 1.5 23.3 4.5 34.6 6.7 25.4 19.7 48.1 36.6 67.9 16.9 19.8 37.6 36.7 59.4 50.5 4.8 3 9.7 5.8 14.6 8.6 63.3 35.3 136.1 50.8 208.4 50.8 12.2 0 24.5-.4 36.7-1.3 72.8-6 145.9-27.5 205.1-71.4 18.8-13.9 36.2-30.7 50-49.9 13.8-19.2 24-40.6 28.5-63.8v-.1c1.9-8.7 2.8-17.5 2.8-26.4zM881 471.5c0-7.7-1.8-15.3-5.6-22.4l-.1-.1v-.1c-5.1-10.6-13.2-18.5-22.9-24s-21.1-8.3-32.5-8.3c-10.3 0-20.5 2.3-29.6 6.9 28.9 25.1 54.3 55.3 70.7 90.8 5.3-4.6 9.8-10.2 13.1-16.5 4.4-8.1 6.9-17.3 6.9-26.3z"
      }));
    }),
    _v467 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 1000 1000",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M280.1 437.3c-8.4 0-15.8 3-21.8 9s-9.2 13.2-9.2 21.6v251.2h.2c0 7.9 2.9 13.8 8.6 17.7s13.1 5.9 22 5.9c8.7 0 16-2 21.6-5.9s8.5-9.8 8.5-17.7V467.8c0-8.4-3.1-15.6-8.9-21.6-5.7-5.9-12.8-8.9-21-8.9zm-187.7 70c-8.1 0-15.4 2.9-21.2 8.8-5.8 5.8-9 13-9 21.4v118.1c0 10.9 4.2 19.1 12.1 24.6 7.9 5.6 16.4 7.5 25.4 5.9 8.4-1.6 14.2-4.6 17.6-9 3.4-4.3 5-11.5 5-21.6v-118c0-8.4-2.7-15.5-8.6-21.4-5.9-5.9-12.9-8.8-21.3-8.8zm93.7-106.2c-8.1 0-15.2 2.9-21 8.8-5.8 5.8-8.8 12.8-8.8 21V706c0 7.9 2.9 13.8 8.4 17.7 5.6 3.9 12.7 5.9 21.4 5.9 9 0 16.2-2 21.8-5.9s8.4-9.8 8.4-17.7V430.8c0-8.1-2.9-15.1-8.8-21-5.9-5.8-13-8.7-21.4-8.7zm196.5-126.7c-9-2.2-17.7.4-26.4 7.7s-13 17.6-13 30.9v407.2c0 14.9 9.9 22.4 30 22.4s30-7.5 30-22.4V313.1c0-22.8-6.8-35.7-20.6-38.7zm514.6 233.7c-27-26.9-59.5-40.3-97.5-40.3-18.7 0-36.4 3.5-52.9 10.6-3.5-40.7-16.4-78-38.5-111.8s-51.1-60.5-86.9-80c-35.8-19.5-74.5-29.3-116-29.3-17.9 0-36.1 2.2-54.3 6.5-8.4 2.7-12.8 11.1-12.8 25.2v443c0 1.6.8 3.5 2 5.7s3.1 3.7 5.6 4.5l354.3.4c37.7 0 70.1-13.4 97.1-40.3s40.5-59.3 40.5-97.3c-.1-37.7-13.6-70-40.6-96.9z"
      }));
    }),
    _v468 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M17.8 5.2c-1.8 0-3.5-1.2-4-3.1-.1-.4-.2-.8-.1-1.2h-3.2v12.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.2 0 .5 0 .7.1V7.7c-.7-.1-1.4 0-2.2.2-3 .8-4.8 3.9-4 6.9.8 3 3.9 4.8 6.9 4 2.5-.7 4.2-3 4.2-5.5V7.1c1.2.8 2.7 1.3 4.2 1.3V5.2z",
        fill: "#3b5162"
      }));
    }),
    _v469 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 1000 1000",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M576.4 777.7c-14.7-8.7-28.2-23.5-33.6-37.8-5.4-14.4-4.7-43.7-4.7-94.4V421.1h204.1V264.9H538.1V62.4H412.5c-5.6 45.1-15.9 82.3-30.9 111.5-15 29.2-34.7 54.3-59.6 75.1-24.7 20.8-64.8 36.9-99.5 48v124h119.9v306.9c0 40.1 4.2 70.6 12.7 91.7 8.5 21 23.6 41 45.6 59.7 21.9 18.6 48.3 33 79.4 43.1 31 10.1 54.8 15.1 95.1 15.1 35.5 0 68.5-3.6 99.1-10.6 30.6-7.2 64.8-19.5 102.4-37v-138c-44.2 28.8-88.6 43.1-133.4 43.1-25 0-47.3-5.8-66.9-17.3z"
      }));
    }),
    _v470 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M6.3 18.3C13.8 18.3 18 12 18 6.6v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.5-2.4.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.1-6.4-1.8-8.4-4.2-.4.6-.6 1.3-.6 2 0 1.4.7 2.7 1.8 3.4-.6 0-1.2-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.9-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.9 1.2 4.1 1.9 6.4 1.9",
        fill: "#00aced"
      }));
    }),
    _v471 = _v0.i(0);
  function _v472({
    type: _v0
  }) {
    let _v1 = {
      facebook: (0, _v14.jsx)(_v461.Facebook, {}),
      reddit: (0, _v14.jsx)(_v466, {}),
      tumblr: (0, _v14.jsx)(_v469, {}),
      twitter: (0, _v14.jsx)(_v473, {}),
      instagram: (0, _v14.jsx)(_v462, {}),
      linkedin: (0, _v14.jsx)(_v464, {}),
      behance: (0, _v14.jsx)(_v459, {}),
      pinterest: (0, _v14.jsx)(_v465, {}),
      soundcloud: (0, _v14.jsx)(_v467, {}),
      vimeo: (0, _v14.jsx)(_v471.VimeoV, {}),
      dribbble: (0, _v14.jsx)(_v460, {}),
      tiktok: (0, _v14.jsx)(_v468, {}),
      link: (0, _v14.jsx)(_v463.Link, {})
    };
    return _v1[_v0] || _v1.link;
  }
  let _v473 = (0, _v33.default)(_v470).withConfig({
    displayName: "LinkIcon__TwitterIcon",
    componentId: "sc-f3d3139c-0"
  })`
  path {
    fill: ${_v53.bokehTheme.colors.gray["600"]};
  }
`;
  function _v474({
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
    return (0, _v14.jsxs)(_v453, {
      editMode: _v0,
      onClick: _v2,
      children: [(0, _v14.jsx)(_v454, {
        children: (0, _v14.jsx)(_v472, {
          type: _v1.type
        })
      }), (0, _v14.jsx)(_v455, {
        editMode: _v0,
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
      })]
    });
  }
  function _v475({
    link: _v0,
    loading: _v1,
    onSubmit: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(""),
      [_v5, _v6] = (0, _v22.useState)(!1),
      {
        userId: _v7
      } = (0, _v22.useContext)(_v43.default),
      {
        trackUserProfileEditFieldClicked: _v8
      } = (0, _v30.useProfileTracking)(),
      _v9 = () => {
        _v8({
          userProfilePageUserId: String(_v7),
          userProfileEditField: "add_link"
        }), _v6(!0);
      },
      _v10 = (0, _v22.useCallback)(_v0 => {
        if (_v4(""), _v0?.link === _v0) _v6(!1);else if (_v0) {
          let {
            validatedUrl: _v0,
            error: _v1
          } = (_v0 => {
            if (_v0) {
              let _v0 = _v0.trim();
              return (_v0.match(/^https?:\/\//) || (_v0 = `https://${_v0}`), _v49.REGEX_URL.test(_v0)) ? _v0.length > _v49.MAX_LINK_LENGTH ? {
                validatedUrl: _v0,
                error: _v66.default.LinkTooLong
              } : {
                validatedUrl: _v0,
                error: ""
              } : {
                validatedUrl: _v0,
                error: _v66.default.EnterValidUrl
              };
            }
            return {
              validatedUrl: _v0,
              error: ""
            };
          })(_v0);
          _v1 ? _v4(_v1) : _v2(_v0).then(() => _v6(!1));
        } else _v2().then(() => _v6(!1));
      }, [_v0, _v2]);
    return (0, _v14.jsx)(_v452, {
      tabIndex: 0,
      onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => {
        _v5 || _v1 || _v9();
      }),
      children: _v5 ? (0, _v14.jsxs)(_v457, {
        children: [_v0 ? (0, _v14.jsx)(_v454, {
          editing: !0,
          children: (0, _v14.jsx)(_v472, {
            type: _v0.type
          })
        }) : null, (0, _v14.jsxs)(_v456, {
          isNewLink: null == _v0,
          children: [(0, _v14.jsx)(_v293, {
            onSubmit: _v10,
            value: _v0?.link || "",
            disabled: _v1,
            errorMsg: _v3,
            placeholder: _v66.default.EnterUrl,
            onChange: () => _v4("")
          }), !!_v3 && (0, _v14.jsx)(_v72, {
            children: _v3
          })]
        })]
      }) : _v0 ? (0, _v14.jsxs)("div", {
        children: [(0, _v14.jsx)(_v474, {
          editMode: !0,
          link: _v0,
          onClick: () => _v1 ? void 0 : _v9()
        }), (0, _v14.jsx)(_v80, {
          onClick: () => _v1 ? void 0 : _v9()
        })]
      }) : _v1 ? null : (0, _v14.jsx)(_v68, {
        buttonText: _v66.default.AddLink,
        onClick: _v9
      })
    });
  }
  function _v476({
    links: _v0,
    children: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      _v4 = (0, _v22.useRef)(!1),
      _v5 = (0, _v22.useCallback)(() => {
        _v4.current = !0, _v3(!1);
      }, []);
    return (0, _v22.useEffect)(() => {
      _v4.current || _v3(_v0.length > _v49.MIN_NO_OF_LINKS_TO_SHOW);
    }, [_v0]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(_v2 ? _v0.slice(0, _v49.MIN_NO_OF_LINKS_TO_SHOW) : _v0).map((_v0, _v1) => _v1(_v0, _v1)), _v2 && (0, _v14.jsx)(_v458, {
        onClick: _v5,
        tabIndex: 0,
        onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v5),
        children: _v66.default.ViewAll
      })]
    });
  }
  function _v477({
    links: _v0
  }) {
    let {
        updateLink: _v1,
        loading: _v2
      } = _v299(),
      _v3 = (0, _v22.useCallback)((_v0, _v1, _v2) => _v1(_v0, (0, _v50.getIdFromUri)(_v1), _v2), [_v1]);
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v476, {
        links: _v0,
        children: (_v0, _v1) => (0, _v14.jsx)(_v475, {
          link: _v0,
          loading: _v2,
          onSubmit: _v0 => _v3(_v1, _v0.uri, _v0)
        }, _v0.uri)
      }), (0, _v14.jsx)(_v475, {
        loading: _v2,
        onSubmit: _v0 => _v0 ? _v3(_v0.length, void 0, _v0) : Promise.resolve()
      }, "add_link")]
    });
  }
  function _v478({
    links: _v0
  }) {
    let {
        editMode: _v1,
        userId: _v2
      } = (0, _v22.useContext)(_v43.default),
      {
        trackUserProfilePageWebsiteLinkClicked: _v3
      } = (0, _v30.useProfileTracking)();
    return (0, _v14.jsx)(_v14.Fragment, {
      children: _v1 ? (0, _v14.jsx)(_v479, {
        children: (0, _v14.jsx)(_v477, {
          links: _v0
        })
      }) : _v0 && _v0.length ? (0, _v14.jsx)(_v479, {
        children: (0, _v14.jsx)(_v476, {
          links: _v0,
          children: _v0 => (0, _v14.jsx)(_v474, {
            editMode: !1,
            link: _v0,
            relMe: !0,
            onClick: () => _v3({
              userProfilePageUserId: String(_v2)
            })
          }, _v0.uri)
        })
      }) : null
    });
  }
  let _v479 = _v33.default.div.withConfig({
    displayName: "links__Container",
    componentId: "sc-955a147d-0"
  })`
  display: none;

  ${_v61.media.sm`
    display: block;
  `}
`;
  var _v480 = _v0.i(0),
    _v481 = _v0.i(0),
    _v482 = _v0.i(0);
  function _v483({
    value: _v0
  }) {
    let {
      editMode: _v1
    } = (0, _v22.useContext)(_v43.default);
    return _v1 ? (0, _v14.jsx)(_v485, {
      value: _v0
    }) : (0, _v14.jsx)(_v484, {
      location: _v0,
      editMode: _v1
    });
  }
  let _v484 = ({
      location: _v0,
      onClick: _v1,
      editMode: _v2
    }) => (0, _v14.jsx)(_v14.Fragment, {
      children: _v0?.formattedAddress && (0, _v14.jsxs)(_v490, {
        className: "location-view-mode",
        onClick: _v1,
        editMode: _v2,
        children: [(0, _v14.jsx)(_v491, {
          width: 10,
          height: 20
        }), (0, _v14.jsx)(_v489, {
          children: _v0.formattedAddress
        })]
      })
    }),
    _v485 = ({
      value: _v0
    }) => {
      let _v1 = (0, _v22.useContext)(_v32.ViewerContext),
        _v2 = (0, _v22.useRef)(null),
        _v3 = (0, _v22.useRef)(null),
        [_v4, _v5] = (0, _v22.useState)(_v0),
        [_v6, _v7] = (0, _v22.useState)(!1),
        {
          loading: _v8,
          onLocationUpdate: _v9
        } = _v299(),
        {
          width: _v10
        } = (0, _v60.useWindowSize)(),
        _v11 = (0, _v22.useCallback)(_v0 => {
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
        _v12 = (0, _v22.useCallback)(_v0 => {
          _v8 || (_v11(_v0) ? (_v7(!1), _v2.current?.blur()) : (_v2.current && (_v2.current.disabled = !0), _v9(_v0 ? {
            ..._v0,
            location: _v0.formattedAddress
          } : {
            location: "",
            formattedAddress: "",
            latitude: 0,
            longitude: 0
          }).then(() => {
            _v7(!1), _v2.current && (_v2.current.disabled = !1, _v2.current.blur());
          })));
        }, [_v11, _v8, _v9]);
      return (0, _v482.default)(_v6 && !_v8 ? _v3 : null, () => {
        _v12(_v4);
      }, null, [_v4?.formattedAddress, _v6, _v12, _v3, _v8]), (0, _v22.useEffect)(() => {
        _v2.current?.focus();
      }, [_v6]), (0, _v22.useEffect)(() => {
        _v5(_v0);
      }, [_v0]), (0, _v22.useEffect)(() => {
        _v7(!1);
      }, [_v10]), (0, _v14.jsx)(_v486, {
        ref: _v3,
        tabIndex: 0,
        onKeyDown: (_v0, _v1) => {
          _v49.KeyCodes.ENTER !== _v0.keyCode || _v6 || _v8 || _v7(!0), _v6 && !_v8 && (_v49.KeyCodes.ESC === _v0.keyCode ? _v12(_v0) : _v49.KeyCodes.TAB === _v0.keyCode && _v12(_v4), _v1 && _v1(_v0));
        },
        disabled: _v8,
        showBorder: !_v6,
        children: _v6 ? (0, _v14.jsx)("div", {
          children: (0, _v14.jsx)(_v480.default, {
            googleApiKey: _v1?.googleMapApiKey || "",
            children: (0, _v14.jsx)(_v488, {
              value: _v4,
              ref: _v2,
              inputIcon: (0, _v14.jsx)(_v123.LocationIcon, {
                width: 10
              }),
              onChange: _v0 => {
                _v5(_v0), _v0 && _v12(_v0);
              }
            })
          })
        }) : _v4?.formattedAddress ? (0, _v14.jsxs)(_v14.Fragment, {
          children: [(0, _v14.jsx)(_v484, {
            location: _v4,
            onClick: () => _v7(!0),
            editMode: !0
          }), (0, _v14.jsx)(_v80, {
            onClick: () => _v7(!0)
          })]
        }) : (0, _v14.jsx)(_v68, {
          buttonText: _v66.default.AddLocation,
          onClick: () => _v7(!0)
        })
      });
    },
    _v486 = _v33.default.div.withConfig({
      displayName: "LocationInput__Container",
      componentId: "sc-9a196be2-0"
    })`
  margin-top: ${(0, _v51.rem)(2)};
  border: ${(0, _v51.rem)(1)} solid transparent;

  /* Added this css, so that the dismiss button 
  looks same as the other fields */
  button svg {
    height: ${(0, _v51.rem)(14.5)};
    width: ${(0, _v51.rem)(14.5)};

    path {
      fill: currentColor;
    }
  }

  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      pointer-events: none;

      button {
        display: none;
      }
    `}

  input {
    &:disabled {
      background-color: ${_v53.bokehTheme.colors.gray["50"]};
      pointer-events: none;
    }
  }

  ${({
      showBorder: _v0
    }) => _v0 && _v33.css`
      &:hover {
        border: ${(0, _v51.rem)(1)} solid ${(0, _v51.rgba)(0, 0, 0, .5)};
        border-radius: ${(0, _v51.rem)(4)};
      }
    }
  `}
`,
    _v487 = _v33.css`
  font-family: inherit;
  font-size: ${(0, _v51.rem)(14)};
  font-weight: 500;
  letter-spacing: ${(0, _v51.rem)(.16)};
  line-height: ${(0, _v51.rem)(24)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,
    _v488 = (0, _v33.default)(_v481.default).withConfig({
      displayName: "LocationInput__LocAutocomplete",
      componentId: "sc-9a196be2-1"
    })`
  input {
    ${_v487};
    height: ${(0, _v51.rem)(40)};
  }
`,
    _v489 = _v33.default.span.withConfig({
      displayName: "LocationInput__ViewLocation",
      componentId: "sc-9a196be2-2"
    })`
  ${_v487};
  line-height: ${(0, _v51.rem)(17)};
  padding: ${(0, _v51.rem)(1)} 0 0 ${(0, _v51.rem)(4)};
  ${({
      isEditMode: _v0
    }) => _v0 && _v33.css`
      max-width: ${(0, _v51.rem)(275)};
    `}
  ${_v61.media.xmd`
    max-width: none;
  `}
`,
    _v490 = _v33.default.div.withConfig({
      displayName: "LocationInput__ViewWrapper",
      componentId: "sc-9a196be2-3"
    })`
  display: inline-flex;
  align-items: center;
  padding: 0 ${(0, _v51.rem)(6)} 0 ${(0, _v51.rem)(13)};
  height: ${(0, _v51.rem)(40)};
  vertical-align: middle;
  max-width: 100%;

  ${_v61.media.md`
    display: flex;
    max-width: none;
  `};

  ${({
      editMode: _v0
    }) => _v0 ? _v33.css`
          padding: 0 ${(0, _v51.rem)(5)} 0 ${(0, _v51.rem)(12)};
          max-width: calc(100% - ${(0, _v51.rem)(20)});
        ` : _v33.css`
          pointer-events: none;
        `}
`,
    _v491 = (0, _v33.default)(_v123.LocationIcon).withConfig({
      displayName: "LocationInput__LocIcon",
      componentId: "sc-9a196be2-4"
    })`
  flex-shrink: 0;
  vertical-align: sub;
`;
  var _v492 = _v0.i(0);
  function _v493({
    name: _v0,
    profileUserId: _v1,
    xsrft: _v2
  }) {
    return (0, _v14.jsx)(_v419.LoginJoinModal, {
      type: "join",
      xsrft: _v2,
      onSuccess: () => window.location.reload(),
      children: _v0 => (0, _v14.jsxs)(_v494, {
        children: [(0, _v14.jsxs)(_v495, {
          children: [(0, _v14.jsx)(_v497, {
            children: (0, _v27.translate)({
              singular: "Create a free Vimeo Basic account to view {USER_NAME}’s contact details",
              replacements: {
                USER_NAME: _v0
              },
              dictionary: {
                es: {
                  singular: "Crea una cuenta gratuita de Vimeo Basic para ver los datos de contacto de {USER_NAME}."
                },
                "de-DE": {
                  singular: "Erstelle ein kostenloses Vimeo Basic-Konto, um die Kontaktdaten von {USER_NAME} zu sehen"
                },
                "fr-FR": {
                  singular: "Créez un compte Vimeo Basic gratuit pour consulter les coordonnées de {USER_NAME}"
                },
                "ja-JP": {
                  singular: "無料のVimeo Basicアカウントを作成して、{USER_NAME} さんの連絡先を表示"
                },
                "ko-KR": {
                  singular: "{USER_NAME}님의 연락처를 보려면 Vimeo Basic 무료 계정을 만드세요"
                },
                "pt-BR": {
                  singular: "Crie uma conta gratuita no Vimeo Basic para ver os detalhes de contato de {USER_NAME}"
                },
                "zh-CN": {
                  singular: "创建免费的 Vimeo Basic 帐户以查看 {USER_NAME} 的联系方式"
                }
              }
            })
          }), (0, _v14.jsx)(_v54.Button, {
            format: "primary",
            onClick: () => {
              _v0(), _v108(_v49.BPEvent.CLICK_TO_JOIN_CONTACT_MODULE, 1, {
                profile_id: _v1
              });
            },
            children: _v66.default.Join
          })]
        }), (0, _v14.jsx)(_v496, {
          children: (0, _v14.jsx)(_v78, {
            icon: (0, _v14.jsx)(_v492.PlusSmall, {}),
            format: "secondary",
            children: _v66.default.Follow
          })
        })]
      })
    });
  }
  let _v494 = _v33.default.section.withConfig({
      displayName: "LoggedOutJoinCTA__Wrapper",
      componentId: "sc-86189f71-0"
    })`
  position: relative;
  height: ${(0, _v51.rem)(152)};
`,
    _v495 = _v33.default.section.withConfig({
      displayName: "LoggedOutJoinCTA__Container",
      componentId: "sc-86189f71-1"
    })`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`,
    _v496 = _v33.default.article.withConfig({
      displayName: "LoggedOutJoinCTA__BackdropContainer",
      componentId: "sc-86189f71-2"
    })`
  display: none;
  ${_v61.media.md`
    display: flex;
  `}
  filter: blur(${(0, _v51.rem)(7)});
  position: absolute;
  opacity: 0.15;
  width: 100%;
  left: 0;
  bottom: 0;
`,
    _v497 = (0, _v33.default)(_v57.Paragraph).attrs({
      format: "soft",
      size: "1"
    }).withConfig({
      displayName: "LoggedOutJoinCTA__CTADescription",
      componentId: "sc-86189f71-3"
    })`
  display: block;
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(12)};
`;
  var _v498 = _v0.i(0),
    _v499 = _v0.i(0),
    _v500 = _v0.i(0);
  function _v501({
    text: _v0,
    illustration: _v1
  }) {
    return (0, _v14.jsxs)(_v502, {
      children: [_v1, (0, _v14.jsx)(_v503, {
        size: "1",
        children: _v0
      })]
    });
  }
  let _v502 = _v33.default.article.withConfig({
      displayName: "NoResults__Wrapper",
      componentId: "sc-e9879eff-0"
    })`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${(0, _v51.rem)(20)};
`,
    _v503 = (0, _v33.default)(_v57.Paragraph).withConfig({
      displayName: "NoResults__StyledParagraph",
      componentId: "sc-e9879eff-1"
    })`
  margin-top: ${(0, _v51.rem)(15)};
`,
    _v504 = async () => {
      let _v0 = await fetch("/_next/jwt?only_public=true", {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v0.ok) return (await _v0.json()).token;
      throw _v0;
    };
  function _v505({
    onSubmit: _v0,
    onDismiss: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)([]),
      [_v6, _v7] = (0, _v22.useState)(!0),
      [_v8, _v9] = (0, _v22.useState)(null),
      [_v10, _v11] = (0, _v22.useState)(!1),
      [_v12, _v13] = (0, _v22.useState)(!1),
      [_v14, _v15] = (0, _v22.useState)(_v2),
      [_v16, _v17] = (0, _v22.useState)("my_public_videos"),
      _v18 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        trackUserProfileVideoAdded: _v19
      } = (0, _v30.useProfileTracking)(),
      _v20 = (0, _v22.useCallback)(() => _v7(!1), []),
      _v21 = (0, _v22.useCallback)(() => _v7(!0), []);
    return (0, _v22.useEffect)(() => {
      _v504().then(_v0 => {
        _v9(_v0);
      });
    }, []), (0, _v22.useEffect)(() => {
      _v14 !== _v2 && _v3(_v14);
    }, [_v14]), (0, _v22.useEffect)(() => {
      _v14 !== _v2 && _v15(_v2);
    }, [_v2]), (0, _v14.jsxs)(_v508, {
      children: [(0, _v14.jsx)(_v506, {
        size: "4",
        children: _v66.default.SelectVideos
      }), (0, _v14.jsx)(_v247.default, {
        onClick: () => !_v10 && _v1()
      }), (0, _v14.jsx)(_v507, {
        children: (0, _v14.jsxs)(_v500.Tabs, {
          format: "alternative",
          variant: "minimalTransparent",
          className: "tabStyle",
          children: [(0, _v14.jsx)(_v500.Tabs.Panel, {
            className: "panelStyle",
            label: _v66.default.MyPublicVideos,
            onActivate: () => {
              _v17("my_public_videos"), _v21();
            },
            children: _v6 ? (0, _v14.jsx)(_v245, {
              queryUrl: `/users/${_v18.user?.id}/videos`,
              authToken: `jwt ${_v8}`,
              parentLoading: !_v8,
              isVerticalClipAllowed: !0,
              inputType: "checkbox",
              selectedClips: _v4,
              onSelectedClipsChange: _v0 => _v5(_v0),
              onNoInitialClips: _v20,
              filterNonProfileVideos: !0,
              isUpcomingEventAllowed: !0,
              isOnDemandAllowed: !0
            }) : (0, _v14.jsx)(_v501, {
              text: _v14 ? _v66.default.PublicVideoAutoAddText : _v66.default.PublicVideosEmptyText,
              illustration: (0, _v14.jsx)(_v498.ShowcaseEmptyState, {
                height: "138",
                width: "180"
              })
            })
          }, "public"), (0, _v14.jsx)(_v500.Tabs.Panel, {
            className: "panelStyle",
            label: _v66.default.CreditedVideos,
            onActivate: () => {
              _v17("credited_videos"), _v21();
            },
            children: _v6 ? (0, _v14.jsx)(_v245, {
              queryUrl: `/users/${_v18.user?.id}/appearances`,
              isVerticalClipAllowed: !0,
              inputType: "checkbox",
              selectedClips: _v4,
              onSelectedClipsChange: _v0 => _v5(_v0),
              onNoInitialClips: _v20,
              filterNonProfileVideos: !0,
              isUpcomingEventAllowed: !0,
              isOnDemandAllowed: !0
            }) : (0, _v14.jsx)(_v501, {
              text: _v66.default.CreditsEmptyText,
              illustration: (0, _v14.jsx)(_v498.ShowcaseEmptyState, {
                height: "138",
                width: "180"
              })
            })
          }, "credited")]
        })
      }), (0, _v14.jsxs)(_v509, {
        children: [(0, _v14.jsx)(_v510, {
          onChange: () => _v15(!_v14),
          label: _v66.default.PublicVideosToggleText,
          name: "videoToggle",
          size: "sm",
          checked: _v14
        }), (0, _v14.jsxs)(_v511, {
          children: [(0, _v14.jsx)(_v512, {
            format: "secondary",
            onClick: () => !_v10 && _v1(),
            children: _v66.default.Cancel
          }), (0, _v14.jsx)(_v512, {
            format: "primary",
            status: _v12 ? "negative" : void 0,
            onClick: () => {
              _v11(!0), _v0(_v4).then(() => {
                _v19({
                  userProfileVideoSourceTab: _v16,
                  userProfileVideoCount: _v4.length
                }), _v11(!1);
              }).catch(() => {
                _v11(!1), _v13(!0), setTimeout(() => _v13(!1), 0);
              });
            },
            disabled: _v10 || !_v4.length,
            loading: _v10,
            children: _v66.default.Add
          })]
        })]
      })]
    });
  }
  let _v506 = (0, _v33.default)(_v195.Header).attrs({
      format: "soft"
    }).withConfig({
      displayName: "VideoPicker__CustomHeader",
      componentId: "sc-cb0d17c-0"
    })`
  padding: ${(0, _v51.rem)(24)} ${(0, _v51.rem)(24)} 0 ${(0, _v51.rem)(25)};
  letter-spacing: 0.2;
`,
    _v507 = _v33.default.div.withConfig({
      displayName: "VideoPicker__TabsWrapper",
      componentId: "sc-cb0d17c-1"
    })`
  margin-top: ${(0, _v51.rem)(12)};
  height: 100%;
  overflow: hidden;
  & .tabStyle {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: ${(0, _v51.rem)(3)};
  }
  & .panelStyle {
    overflow: hidden;
    height: 100%;
  }
  & a {
    text-decoration: none;
  }
  & li {
    flex: 1 0 auto;
  }
`,
    _v508 = _v33.default.section.withConfig({
      displayName: "VideoPicker__Container",
      componentId: "sc-cb0d17c-2"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  width: 90vw;
  height: 85vh;
  max-width: ${(0, _v51.rem)(662)};
  max-height: ${(0, _v51.rem)(752)};
  position: relative;
  display: flex;
  flex-direction: column;
`,
    _v509 = _v33.default.footer.withConfig({
      displayName: "VideoPicker__ModalFooter",
      componentId: "sc-cb0d17c-3"
    })`
  display: flex;
  box-shadow: 0 ${(0, _v51.rem)(-4)} ${(0, _v51.rem)(8)} 0 ${(0, _v51.rgba)(0, 0, 0, .08)};
  justify-content: space-between;
  align-items: center;
`,
    _v510 = (0, _v33.default)(_v499.Toggle).withConfig({
      displayName: "VideoPicker__StyledToggle",
      componentId: "sc-cb0d17c-4"
    })`
  margin-left: ${(0, _v51.rem)(20)};
`,
    _v511 = _v33.default.aside.withConfig({
      displayName: "VideoPicker__ButtonWrapper",
      componentId: "sc-cb0d17c-5"
    })`
  margin: ${(0, _v51.rem)(20)} ${(0, _v51.rem)(5)};
  ${_v61.media.sm`
    margin: ${(0, _v51.rem)(20)};
  `}
  display: flex;
`,
    _v512 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "VideoPicker__CustomButton",
      componentId: "sc-cb0d17c-6"
    })`
  ${_v61.media.sm`
    width: ${(0, _v51.rem)(120)};
  `}
  &:first-child {
    margin-right: ${(0, _v51.rem)(10)};
  }
`;
  var _v513 = _v0.i(0);
  function _v514(_v0, _v1, _v2, _v3 = !0) {
    let {
        cache: _v4,
        mutate: _v5
      } = (0, _v513.useSWRConfig)(),
      _v6 = (0, _v45.default)(),
      _v7 = (0, _v45.default)(),
      _v8 = (0, _v45.default)(),
      _v9 = (0, _v45.default)(),
      _v10 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      {
        mutate: _v11,
        data: _v12,
        setSize: _v13
      } = (0, _v22.useContext)(_v42),
      [_v14, _v15] = (0, _v22.useState)(!1),
      {
        idOrUserName: _v16
      } = (0, _v22.useContext)(_v43.default),
      _v17 = (0, _v22.useCallback)(_v0 => _v49.DEFAULT_PROFILE_URI_REGEX.test(_v0), []),
      _v18 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = RegExp(`^\\$inf\\$${_v0.substring(1)}/videos`),
          _v2 = Array.from(_v4.keys()).find(_v0 => _v1.test(_v0)),
          _v3 = new Set();
        return _v2 ? _v5(_v2, _v0 => (_v0 && (0, _v50.convertToArray)(_v0).forEach(_v0 => _v3.add(_v0.clip.uri)), _v0), {
          revalidate: !1
        }).then(() => Promise.resolve([..._v3])) : Promise.resolve([..._v3]);
      }, [_v4, _v5]),
      _v19 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = (0, _v47.decamelizeDeep)({
          containerUri: _v0
        });
        if (_v17(_v0)) {
          let _v0 = await _v8("me/profile_sections", {
            fields: ["uri"]
          }, _v49.HTTPMethods.POST, _v1);
          if (_v0) {
            let _v0 = await _v18(_v0),
              _v1 = (0, _v47.decamelizeDeep)({
                clipUris: _v0
              }),
              _v2 = (0, _v50.getIdFromUri)(_v0.uri),
              _v3 = await _v8(`me/profile_sections/${_v2}`, {
                fields: ["uri", "clip_uris"]
              }, _v49.HTTPMethods.PATCH, _v1),
              _v4 = (0, _v50.convertToArray)(_v12),
              _v5 = _v4.findIndex(_v0 => _v0.uri === _v0);
            if (-1 !== _v5 && _v3) return _v4[_v5].uri = _v3.uri, _v4[_v5].clipUris = _v3.clipUris, await _v11(_v0 => _v0 ? (0, _v50.divideToPages)(_v4, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            }), _v0.uri;
          }
        }
        return _v0;
      }, [_v18, _v17, _v8, _v12, _v11]),
      _v20 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = await _v19(_v0);
        return (0, _v50.convertToArray)(_v12).find(_v0 => _v0.uri === _v1);
      }, [_v19, _v12]),
      _v21 = (0, _v22.useCallback)(() => {
        if (null != _v2 && null != _v1) {
          let _v0 = Math.ceil(_v2 / _v49.VIDEO_VARIABLES.perPage);
          return {
            items: _v1,
            page: 1,
            paging: {
              first: "page=1",
              last: "page=" + _v0,
              next: _v0 > 1 ? "page=2" : null,
              previous: null
            },
            perPage: _v49.VIDEO_VARIABLES.perPage,
            total: _v2
          };
        }
      }, [_v1, _v2]),
      _v22 = (0, _v22.useCallback)(_v0 => {
        let _v1 = RegExp(`^${_v0.substring(1)}/videos`);
        (0, _v50.removeCacheKeys)(_v4, _v1);
        let _v2 = RegExp(`^\\$inf\\$${_v0.substring(1)}/videos`),
          _v3 = Array.from(_v4.keys()).find(_v0 => _v2.test(_v0));
        return _v3 ? _v5(_v3) : Promise.resolve();
      }, [_v4, _v5]),
      _v23 = (0, _v22.useCallback)(async _v0 => {
        if (!_v0.length) return;
        let _v1 = new Map();
        _v0.forEach(_v0 => _v1.set(_v0.sectionUri, _v0));
        let _v2 = (0, _v50.convertToArray)(_v12),
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
        _v3 && (await _v11(_v0 => _v0 ? (0, _v50.divideToPages)(_v4, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        }));
      }, [_v12, _v11]),
      _v24 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = (0, _v47.decamelizeDeep)({
            operations: _v0
          }),
          _v2 = await _v9("me/profile_sections/videos/batch", void 0, _v49.HTTPMethods.PATCH, _v1),
          _v3 = _v2?.affectedSections || [];
        await _v23(_v3);
        let _v4 = [...new Set(_v3.map(_v0 => _v0.sectionUri))];
        return await Promise.all(_v4.map(_v0 => _v22(_v0))), _v2;
      }, [_v23, _v22, _v9]),
      _v25 = (0, _v22.useCallback)((_v0, _v1) => `${_v0.substring(1)}/videos${(0, _v48.buildQueryString)((0, _v47.decamelizeDeep)({
        ..._v49.VIDEO_VARIABLES,
        page: _v1
      }))}`, []),
      {
        isValidating: _v26,
        mutate: _v27,
        data: _v28,
        error: _v29,
        setSize: _v30,
        size: _v31
      } = (0, _v46.default)(_v0 => _v3 ? _v25(_v0, _v0 + 1) : null, _v6, {
        revalidateOnMount: !0,
        fallbackData: [_v21()]
      }),
      _v32 = (0, _v22.useMemo)(() => _v28?.map(_v0 => _v0 ? {
        ..._v0,
        items: _v0.items.filter(_v0 => null != _v0.clip)
      } : _v0), [_v28]),
      _v33 = (0, _v22.useCallback)(_v0 => {
        _v0 && _v0.json && _v0.json().then(_v0 => _v10({
          content: _v0.error,
          status: "negative"
        })), _v11(), _v27();
      }, [_v27, _v10, _v11]),
      _v34 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = (0, _v50.convertToArray)(_v12),
          _v3 = (0, _v50.getIdFromUri)(_v0),
          _v4 = _v2.findIndex(_v0 => _v0.uri === _v0);
        try {
          if (-1 !== _v4) {
            let _v0 = {
              ..._v2[_v4],
              clipUris: _v1
            };
            _v2[_v4] = _v0, _v11(_v0 => _v0 ? (0, _v50.divideToPages)(_v2, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            });
            let _v1 = (0, _v47.decamelizeDeep)({
                clipUris: _v1.length > 0 ? _v1 : null
              }),
              _v2 = await _v8(`me/profile_sections/${_v3}`, void 0, _v49.HTTPMethods.PATCH, _v1);
            return _v2 ? _v2.clipUris : [];
          }
          return [];
        } catch (_v0) {
          return _v33(_v0), [];
        }
      }, [_v33, _v8, _v12, _v11]),
      _v35 = (0, _v22.useCallback)(async (_v0, _v1, _v2) => {
        if (_v2) {
          let _v0 = await _v18(_v0);
          if (!_v0.every((_v0, _v1) => _v1[_v1] === _v0)) return await _v34(_v0, _v0);
        }
        return [...new Set(_v1)];
      }, [_v18, _v34]),
      _v36 = (0, _v22.useCallback)(async (_v0, _v1, _v2, _v3, _v4 = !0) => {
        _v15(!0);
        try {
          let _v0 = await _v19(_v0),
            _v1 = (0, _v50.convertToArray)(_v12),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v35(_v0, [..._v0.clipUris], _v0.unbounded);
            _v1.splice(_v1, 0, ..._v2);
            let _v2 = [...new Set(_v1)];
            await _v34(_v0.uri, _v2);
            let _v3 = _v4 ? _v27() : Promise.resolve([]);
            return Promise.all([_v3(), _v3]).then(() => (_v10(), _v15(!1), _v2));
          }
        } catch (_v0) {
          _v33(_v0);
        }
        return _v15(!1), [];
      }, [_v19, _v12, _v35, _v34, _v10, _v27, _v33]),
      _v37 = (0, _v22.useCallback)(async (_v0, _v1, _v2) => {
        _v15(!0);
        try {
          let _v0 = await _v19(_v0),
            _v1 = (0, _v50.convertToArray)(_v12),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v35(_v0, [..._v0.clipUris], _v0.unbounded),
              _v2 = _v1.findIndex(_v0 => _v0 === _v1);
            if (-1 !== _v2 && _v32) {
              _v1.splice(_v2, 1);
              let _v0 = (0, _v50.convertToArray)(_v32);
              _v0.splice(_v2, 1);
              let _v1 = (0, _v50.divideToPages)(_v0, _v32, _v49.VIDEO_VARIABLES.perPage),
                _v2 = _v32.length - _v1.length,
                _v3 = await _v34(_v0, _v1),
                _v4 = RegExp(`^${_v0.substring(1)}/videos`);
              return (0, _v50.removeCacheKeys)(_v4, _v4), Promise.all([_v2(), 0 !== _v2 ? _v30(_v1.length) : _v27()]).then(() => (_v10(), _v15(!1), _v3));
            }
          }
        } catch (_v0) {
          _v33(_v0);
        }
        return _v15(!1), [];
      }, [_v4, _v19, _v12, _v35, _v32, _v34, _v30, _v27, _v10, _v33]),
      _v38 = (0, _v22.useCallback)(async (_v0, _v1, _v2) => {
        _v15(!0);
        try {
          let _v0 = _v17(_v0),
            _v1 = null,
            _v2 = [];
          if (_v0) _v2 = (_v1 = await _v20(_v0)) ? _v1.clipUris : [];else {
            let _v0 = (0, _v50.convertToArray)(_v12),
              _v1 = _v0.findIndex(_v0 => _v0.uri === _v0);
            -1 !== _v1 && (_v1 = _v0[_v1], _v2 = await _v35(_v1.uri, [..._v1.clipUris], _v1.unbounded));
          }
          if (_v1 && _v2.length) {
            let _v0 = _v2.findIndex(_v0 => _v0 === _v1),
              _v1 = _v2.slice(0, _v0);
            _v1.clipUris = _v1;
            let _v2 = _v1.uri,
              _v3 = (0, _v47.decamelizeDeep)({
                containerUri: _v2,
                title: _v2,
                containerSectionClipUris: _v1
              }),
              _v4 = await _v8("me/profile_sections", void 0, _v49.HTTPMethods.POST, _v3),
              _v5 = `${_v1.uri.substring(1)}/videos`,
              _v6 = new RegExp(_v5.substring(1));
            if ((0, _v50.removeCacheKeys)(_v4, _v6), !_v0 && _v32) {
              let _v0 = (0, _v50.convertToArray)(_v32).slice(0, _v0),
                _v1 = (0, _v50.divideToPages)(_v0, _v32, _v49.VIDEO_VARIABLES.perPage);
              await _v30(_v1.length);
            }
            if (_v4) {
              let _v0 = (0, _v50.convertToArray)(_v12),
                _v1 = _v0.findIndex(_v0 => _v0.uri === _v2);
              _v0.splice(_v1 + 1, 0, _v4);
              let _v2 = Math.ceil(_v0.length / _v49.SECTION_VARIABLES.perPage);
              _v13 && _v2 > (_v12 || []).length ? ((0, _v50.resetSections)(_v4, _v16), await _v11()) : await _v11(_v0 => _v0 ? (0, _v50.divideToPages)(_v0, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
                revalidate: !1
              });
            }
          }
        } catch (_v0) {
          _v33(_v0);
        }
        _v15(!1);
      }, [_v4, _v17, _v20, _v12, _v35, _v8, _v32, _v30, _v13, _v16, _v11, _v33]),
      _v39 = (0, _v22.useCallback)(() => {
        let _v0 = (0, _v50.getIdFromUri)(_v0);
        return _v8(`me/profile_sections/${_v0}`, void 0, _v49.HTTPMethods.DELETE).then(() => {
          let _v0 = RegExp(`${_v0.substring(1)}`);
          (0, _v50.removeCacheKeys)(_v4, _v0);
        }).catch(_v0 => {
          throw _v11(), _v0;
        });
      }, [_v4, _v8, _v11, _v0]),
      _v40 = (0, _v22.useCallback)(async _v0 => {
        _v15(!0);
        try {
          let _v0 = (0, _v50.convertToArray)(_v12),
            _v1 = _v0[_v0],
            _v2 = (0, _v50.getIdFromUri)(_v1.uri);
          if (0 === _v0) {
            let _v0 = _v0[_v0 + 1];
            if (_v0) {
              let _v0 = await _v35(_v1.uri, [..._v1.clipUris], _v1.unbounded);
              if (_v0.length > 0) {
                let _v0 = _v0.map((_v0, _v1) => ({
                  videoUri: _v0,
                  fromSectionUri: _v1.uri,
                  toSectionUri: _v0.uri,
                  toVideoIndex: _v1
                }));
                await _v24(_v0);
              }
            }
            await _v8(`me/profile_sections/${_v2}`, void 0, _v49.HTTPMethods.DELETE), _v11(), _v10();
          } else {
            await _v39();
            let _v0 = _v0[_v0 - 1];
            _v0.splice(_v0, 1);
            let _v1 = Math.ceil(_v0.length / _v49.SECTION_VARIABLES.perPage),
              _v2 = () => {
                _v15(!1), _v10();
              };
            if (_v13 && _v1 < (_v12 || []).length) return (0, _v50.resetSections)(_v4, _v16), Promise.all([_v13(_v1), _v22(_v0.uri)]).then(_v2);
            return Promise.all([_v11(), _v22(_v0.uri)]).then(_v2);
          }
        } catch (_v0) {
          _v33(_v0);
        }
        _v15(!1);
      }, [_v4, _v12, _v8, _v11, _v10, _v39, _v13, _v16, _v22, _v33, _v35, _v24]),
      _v41 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = "me/profile_sections",
          _v3 = (0, _v47.decamelizeDeep)({
            containerUri: _v0,
            title: _v1
          }),
          _v4 = _v49.HTTPMethods.POST;
        if (!_v17(_v0)) {
          let _v0 = (0, _v50.getIdFromUri)(_v0);
          _v2 = `me/profile_sections/${_v0}`, _v3 = {
            title: _v1
          }, _v4 = _v49.HTTPMethods.PATCH;
        }
        let _v5 = await _v8(_v2, {
            fields: ["title", "uri"]
          }, _v4, _v3),
          _v6 = (0, _v50.convertToArray)(_v12),
          _v7 = _v6.findIndex(_v0 => _v0.uri === _v0);
        -1 !== _v7 && _v5 && (_v6[_v7] = {
          ..._v6[_v7],
          title: _v5.title,
          uri: _v5.uri
        }, await _v11(_v0 => _v0 ? (0, _v50.divideToPages)(_v6, _v0, _v49.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        })), _v10();
      }, [_v17, _v8, _v12, _v11, _v10]),
      _v42 = (0, _v22.useCallback)((_v0, _v1) => {
        _v11(_v0 => {
          if (!_v0) return _v0;
          let _v1 = (0, _v50.convertToArray)(_v0),
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
            _v8 = (0, _v50.getIdFromUri)(_v6.uri);
          return _v8(`me/profile_sections/${_v8}`, void 0, _v49.HTTPMethods.PATCH, {
            position: _v7
          }).then(() => {
            _v11(), _v10();
          }), (0, _v50.divideToPages)(_v1, _v0, _v49.SECTION_VARIABLES.perPage);
        }, {
          revalidate: !1
        });
      }, [_v8, _v10, _v11]),
      _v43 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = _v0.video.clip.uri === _v1.video.clip.uri;
        if (_v15(!0), _v2) return void _v15(!1);
        try {
          let _v0 = await _v19(_v0.sectionUri),
            _v1 = _v0.sectionUri === _v1.sectionUri ? _v0 : await _v19(_v1.sectionUri),
            _v2 = (0, _v50.convertToArray)(_v12),
            _v3 = _v2.find(_v0 => _v0.uri === _v0),
            _v4 = _v2.find(_v0 => _v0.uri === _v1);
          _v3 && _v4 && (await _v35(_v0, [..._v3.clipUris], _v3.unbounded), _v0 !== _v1 && (await _v35(_v1, [..._v4.clipUris], _v4.unbounded)), await _v24([{
            videoUri: _v0.video.clip.uri,
            fromSectionUri: _v0,
            toSectionUri: _v1,
            toVideoIndex: _v1.videoIndex
          }])), _v10();
        } catch (_v0) {
          _v33(_v0);
        } finally {
          _v15(!1);
        }
      }, [_v35, _v19, _v33, _v24, _v10, _v12]),
      _v44 = (0, _v22.useCallback)(async (_v0, _v1, _v2 = !1, _v3) => {
        try {
          let _v0 = (0, _v47.decamelizeDeep)(_v3 ? {
              columnWidth: _v3
            } : {
              featuredCommentId: _v1,
              showFeaturedComment: !!_v1
            }),
            _v1 = await _v19(_v0),
            _v2 = (0, _v50.getIdFromUri)(_v1),
            _v3 = `me/profile_sections/${_v2}/videos/${_v0}`;
          await _v7(_v3, void 0, _v49.HTTPMethods.PATCH, _v0), _v3 ? _v10() : _v1 ? _v2 ? _v10({
            content: _v66.default.CommentUpdated,
            status: "neutral"
          }) : _v10() : _v10({
            content: _v66.default.CommentRemoved,
            status: "neutral"
          });
        } catch (_v0) {
          _v33(_v0);
        }
      }, [_v19, _v33, _v10, _v7, _v0]),
      _v45 = (0, _v22.useCallback)((_v0, _v1, _v2) => {
        let _v3 = (0, _v50.getIdFromUri)(_v0.clip.uri),
          _v4 = _v1 ? (0, _v50.getIdFromUri)(_v1.uri) : null;
        return _v44(_v3, _v4, _v0.showFeaturedComment, _v2).then(() => {
          let _v0 = (0, _v50.convertToArray)(_v32),
            _v1 = _v0.findIndex(_v0 => _v0.clip.uri === _v0.clip.uri);
          if (-1 !== _v1) {
            let _v0 = {
              ..._v0[_v1]
            };
            _v2 ? _v0.columnWidth = _v2 : (_v0.featuredComment = _v1, _v0.showFeaturedComment = !!_v4), _v0[_v1] = _v0, _v27(_v0 => _v0 ? (0, _v50.divideToPages)(_v0, _v0, _v49.VIDEO_VARIABLES.perPage) : _v0, {
              revalidate: !1
            });
          }
        });
      }, [_v44, _v32, _v27]);
    return {
      addVideosToSection: _v36,
      createSection: _v38,
      data: _v32,
      error: _v29,
      isValidating: _v26,
      moveSection: _v42,
      mutate: _v27,
      onDrop: _v43,
      removeSection: _v40,
      removeVideoFromSection: _v37,
      revalidate: _v27,
      setSize: _v30,
      size: _v31,
      toggleVideoData: _v45,
      updateSectionTitle: _v41,
      videoLoading: _v14
    };
  }
  function _v515({
    showAddVideoCta: _v0,
    editMode: _v1,
    hasCoverVideo: _v2,
    shouldAutoAddVideos: _v3,
    toggleAutoAddVideos: _v4,
    updatePublicVideosCount: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(!1);
    (0, _v287.default)(_v6 ? _v0 => (0, _v50.onEsc)(_v0, () => _v7(!1)) : void 0, [_v6]);
    let {
        addVideosToSection: _v8
      } = _v514("", void 0, void 0, !1),
      {
        data: _v9
      } = (0, _v22.useContext)(_v42),
      _v10 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v9), [_v9]),
      _v11 = (0, _v22.useCallback)(_v0 => {
        let _v1 = _v0.map(_v0 => _v0.uri);
        return _v8(_v10[0].uri, 0, _v1, _v5).then(() => {
          _v7(!1);
        });
      }, [_v8, _v10, _v5]);
    return (0, _v14.jsxs)(_v517, {
      children: [(0, _v14.jsx)(_v516, {
        reduceTopMargin: _v2 || _v1
      }), (0, _v14.jsx)(_v518, {
        children: (0, _v14.jsx)("span", {
          className: "upload-videos-text",
          children: _v1 ? _v0 ? _v66.default.AddPublicVideos : _v66.default.UploadVideos : _v66.default.NoVideos
        })
      }), _v1 && _v0 && (0, _v14.jsx)(_v519, {
        size: "sm",
        format: "secondary",
        onClick: () => _v7(!0),
        children: _v66.default.AddVideos
      }), (0, _v14.jsx)(_v77, {
        onOpen: () => _v7(!1),
        active: _v6,
        content: (0, _v14.jsx)(_v505, {
          shouldAutoAddVideos: _v3,
          toggleAutoAddVideos: _v4,
          onSubmit: _v11,
          onDismiss: () => _v7(!1)
        })
      })]
    });
  }
  let _v516 = (0, _v33.default)(_v498.ShowcaseEmptyState).withConfig({
      displayName: "NoVideos__EmptyStateIllustration",
      componentId: "sc-32a3d38b-0"
    })`
  height: ${(0, _v51.rem)(99)};
  width: ${(0, _v51.rem)(130)};
  margin-top: ${(0, _v51.rem)(35)};
  ${_v61.media.sm`
    margin-top: ${(0, _v51.rem)(55)};
  `}
  ${_v61.media.md`
    height: ${(0, _v51.rem)(129)};
    width: ${(0, _v51.rem)(170)};
    margin-top: ${(0, _v51.rem)(195)};
    ${({
      reduceTopMargin: _v0
    }) => _v0 && _v33.css`
        margin-top: ${(0, _v51.rem)(130)};
      `}
  `}
  ${_v61.media.hd`
    margin-top: ${(0, _v51.rem)(264)};
    ${({
      reduceTopMargin: _v0
    }) => _v0 && _v33.css`
        margin-top: ${(0, _v51.rem)(167)};
      `}
  `}
  ${_v61.media.xhd`
    margin-top: ${(0, _v51.rem)(356)};
    ${({
      reduceTopMargin: _v0
    }) => _v0 && _v33.css`
        margin-top: ${(0, _v51.rem)(214)};
      `}
  `}
`,
    _v517 = _v33.default.article.withConfig({
      displayName: "NoVideos__Wrapper",
      componentId: "sc-32a3d38b-1"
    })`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,
    _v518 = (0, _v33.default)(_v71.Text).attrs({
      format: "soft"
    }).withConfig({
      displayName: "NoVideos__Heading",
      componentId: "sc-32a3d38b-2"
    })`
  font-size: ${(0, _v51.rem)(16)};
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(.18)};
  line-height: ${(0, _v51.rem)(24)};
  text-align: center;
  margin-top: ${(0, _v51.rem)(8)};
  display: block;
  ${_v61.media.md`
    font-size: ${(0, _v51.rem)(20)};
    letter-spacing: ${(0, _v51.rem)(.22)};
    margin-top: ${(0, _v51.rem)(16)};
  `}
  .upload-videos-text {
    max-width: ${(0, _v51.rem)(180)};
    ${_v61.media.md`
      max-width: none;
    `}
  }
`,
    _v519 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "NoVideos__AddVideosCta",
      componentId: "sc-32a3d38b-3"
    })`
  width: ${(0, _v51.rem)(126)};
  margin-top: ${(0, _v51.rem)(12)};
  display: none;
  ${_v61.media.md`
    display: block;
  `}
`;
  var _v520 = _v0.i(0);
  let _v521 = (0, _v33.default)(_v164).withConfig({
      displayName: "VideoCategories.styles__CustomTag",
      componentId: "sc-3259adb5-0"
    })`
  margin: ${(0, _v51.rem)(4)} ${(0, _v51.rem)(6)} ${(0, _v51.rem)(4)} 0;
  cursor: auto;
  display: inline-block;
  vertical-align: top;
  svg {
    vertical-align: middle;
    width: ${(0, _v51.rem)(16)};
    height: ${(0, _v51.rem)(16)};
    cursor: pointer;
    margin-top: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`,
    _v522 = _v33.default.article.withConfig({
      displayName: "VideoCategories.styles__MenuPanelContainer",
      componentId: "sc-3259adb5-1"
    })`
  width: ${(0, _v51.rem)(250)};
  background: ${_v53.bokehTheme.colors.white};
  box-shadow: 0 ${(0, _v51.rem)(3)} ${(0, _v51.rem)(5)} 0 rgba(0, 0, 0, 0.12);
  border-radius: ${(0, _v51.rem)(3)};
  position: absolute;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  z-index: 14; // 1 greater than the z-index of player progress bar
  opacity: 0;
  margin: ${(0, _v51.rem)(10)} 0;
  transition: opacity 0.2s ease-in;

  &.top {
    bottom: 100%;
    left: 0;
    opacity: 1;
  }

  &.bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
`,
    _v523 = _v33.default.div.withConfig({
      displayName: "VideoCategories.styles__Content",
      componentId: "sc-3259adb5-2"
    })`
  padding: ${(0, _v51.rem)(20)};
  height: ${(0, _v51.rem)(325)};
  overflow: auto;
  background-color: ${_v53.bokehTheme.colors.white};
`,
    _v524 = _v33.default.div.withConfig({
      displayName: "VideoCategories.styles__ActionFooter",
      componentId: "sc-3259adb5-3"
    })`
  padding: ${(0, _v51.rem)(10)};
  box-shadow: 0 ${(0, _v51.rem)(-2)} ${(0, _v51.rem)(4)} 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  background-color: ${_v53.bokehTheme.colors.white};
`,
    _v525 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "VideoCategories.styles__CustomButton",
      componentId: "sc-3259adb5-4"
    })`
  width: ${(0, _v51.rem)(112)};
`,
    _v526 = _v33.default.div.withConfig({
      displayName: "VideoCategories.styles__SubMenuContainer",
      componentId: "sc-3259adb5-5"
    })`
  padding-left: ${(0, _v51.rem)(25)};
  display: none;
  ${({
      show: _v0
    }) => _v0 && _v33.css`
      display: block;
    `}
`,
    _v527 = _v33.default.div.withConfig({
      displayName: "VideoCategories.styles__LoaderWrapper",
      componentId: "sc-3259adb5-6"
    })`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  function _v528({
    menuItem: _v0,
    subMenu: _v1,
    selected: _v2,
    onChange: _v3
  }) {
    let _v4 = null != _v2.find(_v0 => _v0.uri === _v0.uri),
      _v5 = _v2.length >= _v49.MAX_CATEGORY_SELECTION_ALLOWED;
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v204.Checkbox, {
        label: _v0.name,
        disabled: _v5 && !_v4,
        checked: _v4,
        onChange: () => _v3({
          uri: _v0.uri,
          name: _v0.name
        })
      }), _v1 ? (0, _v14.jsx)(_v526, {
        show: !!_v4,
        children: _v1.map(_v0 => (0, _v14.jsx)(_v528, {
          menuItem: _v0,
          selected: _v2,
          onChange: _v3
        }, _v0.uri))
      }) : null]
    });
  }
  let _v529 = (_v0, _v1) => {
    let _v2 = _v1.filter(_v0 => _v0.uri !== _v0.uri);
    if (-1 === _v0.uri.indexOf("subcategories")) {
      let _v0 = RegExp(`^${_v0.uri}/subcategories/`);
      _v2 = _v2.filter(_v0 => !_v0.test(_v0.uri));
    }
    return _v2;
  };
  function _v530({
    categories: _v0,
    selected: _v1,
    setSelected: _v2
  }) {
    let _v3 = (0, _v22.useMemo)(() => _v1.map(_v0 => _v0.uri), [_v1]),
      _v4 = (0, _v22.useCallback)(_v0 => {
        -1 !== _v3.indexOf(_v0.uri) ? _v2([..._v529(_v0, _v1)]) : _v2([..._v1, _v0]);
      }, [_v1, _v3]);
    return (0, _v14.jsx)(_v14.Fragment, {
      children: _v0.map(_v0 => (0, _v14.jsx)(_v528, {
        menuItem: _v0,
        subMenu: _v0.subcategories,
        onChange: _v4,
        selected: _v1
      }, _v0.uri))
    });
  }
  function _v531({
    selectedCategories: _v0,
    onCancel: _v1,
    onAdd: _v2,
    isLoading: _v3,
    childRef: _v4
  }) {
    let [_v5, _v6] = (0, _v22.useState)(_v0),
      _v7 = (0, _v22.useRef)(null),
      {
        width: _v8,
        height: _v9
      } = (0, _v60.useWindowSize)(),
      {
        data: _v10,
        loading: _v11
      } = (0, _v115.useQuery)("/categories", {
        resourceKey: _v49.ResourceKeys.VIDEO_CATEGORIES_RESOURCE,
        variables: {
          page: 1,
          per_page: 25,
          fields: "uri,name,subcategories",
          from_profile: !0
        }
      });
    (0, _v482.default)(_v7, _v1);
    let _v12 = (0, _v22.useMemo)(() => _v11 || _v3 || !_v5.length || (0, _v318.default)(_v5, _v0), [_v5, _v0, _v3, _v11]);
    return (0, _v22.useEffect)(() => {
      _v6(_v0);
    }, [_v0]), (0, _v22.useEffect)(() => {
      if (_v7.current && _v4.current) {
        let _v0 = _v7.current,
          _v1 = _v0.getBoundingClientRect(),
          _v2 = _v4.current.getBoundingClientRect();
        _v1.height < _v2.y && _v8 < _v61.BreakPoints.hd ? (_v0.classList.add("top"), _v0.style.left = `${Math.max(0, _v2.right - _v0.offsetWidth)}px`) : _v9 - (_v2.y + _v2.height) > _v1.height ? _v0.classList.add("bottom") : _v0.classList.add("top");
      }
    }, [_v4, _v7, _v8, _v9]), (0, _v14.jsxs)(_v522, {
      ref: _v7,
      children: [(0, _v14.jsx)(_v523, {
        children: _v11 ? (0, _v14.jsx)(_v527, {
          children: (0, _v14.jsx)(_v34.Spinner, {
            size: "md"
          })
        }) : (0, _v14.jsx)(_v530, {
          categories: _v10?.items || [],
          selected: _v5,
          setSelected: _v6
        })
      }), (0, _v14.jsxs)(_v524, {
        children: [(0, _v14.jsx)(_v525, {
          format: "secondary",
          disabled: _v11 || _v3,
          onClick: _v1,
          children: _v66.default.Cancel
        }), (0, _v14.jsx)(_v525, {
          disabled: _v12,
          loading: _v3,
          onClick: () => _v2(_v5),
          children: _v66.default.Add
        })]
      })]
    });
  }
  function _v532({
    selectedCategories: _v0,
    clipId: _v1,
    onUpdate: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)(_v0),
      [_v7, _v8] = (0, _v22.useState)(!1),
      _v9 = (0, _v22.useRef)(null),
      _v10 = (0, _v22.useCallback)(_v0 => {
        _v8(!0), _v2(_v1, _v0).then(() => {
          _v6(_v0), _v8(!1), _v3 && _v4(!1);
        }).catch(() => {
          _v8(!1), _v3 && _v4(!1);
        });
      }, [_v2, _v1, _v3]),
      _v11 = (0, _v22.useCallback)(_v0 => {
        _v10(_v529(_v0, _v5));
      }, [_v10, _v529, _v5]);
    return (0, _v22.useEffect)(() => {
      _v6(_v0);
    }, [_v0]), (0, _v14.jsxs)(_v535, {
      children: [_v5.length > 0 ? _v5.map(_v0 => (0, _v14.jsx)(_v521, {
        size: "sm",
        element: "span",
        theme: _v38.themes.dark,
        disabled: _v7,
        onClose: {
          reject: () => _v11(_v0)
        },
        children: _v0.name
      }, _v0.uri)) : null, (0, _v14.jsx)(_v534, {
        ref: _v9,
        children: (0, _v14.jsx)(_v533, {
          theme: _v38.themes.dark,
          buttonText: _v5.length > 0 ? " " : _v66.default.AddCategories,
          onClick: () => _v4(!0),
          onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v4(!0)),
          disable: _v7 || _v3,
          tabIndex: 0,
          role: "button"
        })
      }), _v3 && (0, _v14.jsx)(_v531, {
        selectedCategories: _v5,
        onCancel: () => _v4(!1),
        onAdd: _v10,
        isLoading: _v7,
        childRef: _v9
      })]
    });
  }
  let _v533 = (0, _v33.default)(_v68).withConfig({
      displayName: "Edit__AddButton",
      componentId: "sc-24893c72-0"
    })`
  ${({
      disable: _v0
    }) => _v0 && _v33.css`
      pointer-events: none;
    `}
`,
    _v534 = _v33.default.div.withConfig({
      displayName: "Edit__Wrapper",
      componentId: "sc-24893c72-1"
    })`
  display: inline-block;
`,
    _v535 = _v33.default.div.withConfig({
      displayName: "Edit__Container",
      componentId: "sc-24893c72-2"
    })`
  position: relative;
`;
  function _v536({
    categories: _v0,
    editMode: _v1,
    clipId: _v2,
    onUpdate: _v3
  }) {
    return (0, _v14.jsx)(_v538, {
      children: _v1 ? (0, _v14.jsx)(_v532, {
        selectedCategories: _v0,
        clipId: _v2,
        onUpdate: _v3
      }) : _v0.length > 0 ? (0, _v14.jsx)(_v537, {
        categories: _v0
      }) : null
    });
  }
  function _v537({
    categories: _v0
  }) {
    return (0, _v14.jsx)(_v14.Fragment, {
      children: _v0.map(_v0 => (0, _v14.jsx)(_v521, {
        size: "sm",
        element: "span",
        theme: _v38.themes.dark,
        children: _v0.name
      }, _v0.uri))
    });
  }
  let _v538 = _v33.default.article.withConfig({
    displayName: "video-categories__Container",
    componentId: "sc-50b93b63-0"
  })`
  margin-top: ${(0, _v51.rem)(20)};
  position: relative;

  ${_v61.media.hd`
    margin-left: ${(0, _v51.rem)(3)};
  `}
`;
  var _v539 = _v0.i(0);
  function _v540({
    content: _v0 = "",
    onSave: _v1,
    maxCharacterCount: _v2,
    validate: _v3,
    allowNewLines: _v4 = !0,
    fullWidth: _v5,
    resetOnEmpty: _v6,
    className: _v7,
    placeholder: _v8,
    autoFocus: _v9,
    ..._v10
  }) {
    let _v11 = (0, _v22.useRef)(null),
      [_v12, _v13] = (0, _v22.useState)(_v0 || ""),
      {
        width: _v14
      } = (0, _v60.useWindowSize)(),
      _v15 = (0, _v22.useCallback)(_v0 => {
        _v0 && (_v0.style.height = "auto", _v0.style.height = (0, _v51.rem)(_v0.scrollHeight), _v2 && _v0.value.length > _v2 ? _v0.style.paddingBottom = (0, _v51.rem)(30) : _v0.style.paddingBottom = (0, _v51.rem)(0));
      }, []),
      _v16 = (!_v2 || !(_v12.length > _v2)) && (!_v3 || _v3(_v12)),
      _v17 = {
        Enter: _v0 => {
          _v4 && (!_v4 || _v0.shiftKey) || (_v0.preventDefault(), _v11.current?.blur());
        },
        Escape: _v0 => {
          _v4 && (!_v4 || _v0.shiftKey) || (_v0.preventDefault(), _v11.current?.blur());
        }
      };
    return (0, _v22.useEffect)(() => {
      _v15(_v11.current);
    }, [_v11, _v15, _v14]), (0, _v22.useEffect)(() => {
      _v13(_v0 || "");
    }, [_v0]), (0, _v14.jsx)(_v542, {
      children: (0, _v14.jsxs)(_v547, {
        fullWidth: _v5,
        children: [!_v16 && (0, _v14.jsx)(_v539.InfoCircle, {
          position: "absolute",
          left: (0, _v51.rem)(-30),
          boxSize: (0, _v51.rem)(20),
          color: "red.500"
        }), (0, _v14.jsx)(_v546, {
          onBlur: () => {
            let _v0 = _v11.current;
            if (_v0) {
              if (_v6 && !_v0.value) _v0.value = _v0 || "", _v15(_v0), _v13(_v0 || "");else if (_v1 && _v16) {
                let {
                  value: _v0
                } = _v0;
                _v4 ? _v1(_v0.trim()) : _v1(_v0.replace(/[\r\n\v]+/g, "").trim());
              }
            }
          },
          onChange: _v0 => {
            let {
              value: _v1
            } = _v0.currentTarget;
            _v15(_v0.currentTarget), _v13(_v1);
          },
          onKeyDown: _v0 => {
            let {
              key: _v1
            } = _v0;
            _v17[_v1] && _v17[_v1](_v0);
          },
          ref: _v11,
          defaultValue: _v0 || "",
          error: !_v16,
          className: _v7,
          placeholder: _v8,
          autoFocus: _v9,
          fullWidth: _v5,
          rows: 1,
          allowNewLines: _v4,
          onFocus: _v0 => {
            let _v1 = _v0.target.value;
            _v0.target.value = "", _v0.target.value = _v1;
          },
          ..._v10
        }), _v2 && !_v16 && (0, _v14.jsx)(_v543, {
          children: `${_v12.length}/${_v2}`
        })]
      })
    });
  }
  let _v541 = _v53.bokehTheme.colors.red["500"],
    _v542 = _v33.default.div.withConfig({
      displayName: "EditableText__Container",
      componentId: "sc-8466b49c-0"
    })`
  position: relative;
`,
    _v543 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "EditableText__CharacterCount",
      componentId: "sc-8466b49c-1"
    })`
  position: absolute;
  bottom: ${(0, _v51.rem)(0)};
  right: ${(0, _v51.rem)(7)};
  font-size: ${(0, _v51.rem)(12)};
  letter-spacing: ${(0, _v51.rem)(-.4)};
  color: ${_v541};
`,
    _v544 = _v33.css`
  font-family: inherit;
  white-space: pre-wrap;

  padding: ${(0, _v51.rem)(5)} ${(0, _v51.rem)(5)} ${(0, _v51.rem)(12)};

  border: ${(0, _v51.rem)(1)} solid transparent;
  outline: none;
  resize: none;
  border-radius: ${(0, _v51.rem)(4)};
  transition: background 0.25s;
  -ms-overflow-style: none;

  &:hover {
    background: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .25)};
  }

  &:focus {
    background-color: transparent;
  }
`,
    _v545 = _v33.css`
  border: ${(0, _v51.rem)(1)} solid ${_v541};
`,
    _v546 = _v33.default.textarea.withConfig({
      displayName: "EditableText__TextArea",
      componentId: "sc-8466b49c-2"
    })`
  ${_v544}
  margin: 0;
  overflow: hidden;
  ${({
      fullWidth: _v0
    }) => _v0 && _v33.css`
      width: 100%;
    `}
  ${({
      error: _v0
    }) => _v0 && _v545}
  ${({
      allowNewLines: _v0
    }) => !_v0 && _v33.css`
      white-space: normal;
    `}
`,
    _v547 = _v33.default.div.withConfig({
      displayName: "EditableText__TextareaWrapper",
      componentId: "sc-8466b49c-3"
    })`
  display: inline-block;
  position: relative;
  ${({
      fullWidth: _v0
    }) => _v0 && _v33.css`
      width: 100%;
    `}
`;
  function _v548({
    description: _v0,
    editMode: _v1,
    setEnableEdit: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)(!1),
      _v7 = (0, _v22.useRef)(null);
    return (0, _v22.useEffect)(() => {
      let _v0 = _v7.current;
      _v0 && _v6(_v0.scrollHeight > _v0.offsetHeight);
    }, [_v7, _v0]), (0, _v14.jsxs)(_v558, {
      children: [(0, _v14.jsxs)(_v553, {
        editMode: _v1,
        onMouseOut: () => {
          _v1 && _v7.current && _v7.current.scrollTo({
            top: 0,
            behavior: "auto"
          });
        },
        onClick: _v2,
        className: "wrapper",
        children: [(0, _v14.jsx)(_v554, {
          ref: _v7,
          expanded: _v3,
          className: "description",
          children: (0, _v14.jsx)(_v65.default, {
            text: _v0
          })
        }), _v5 ? (0, _v14.jsx)(_v555, {
          className: "description-overlay"
        }) : null]
      }), _v5 ? (0, _v14.jsx)(_v556, {
        onClick: () => {
          _v4(!0), _v6(!1);
        },
        className: "read-more",
        children: _v66.default.ReadMore
      }) : null]
    });
  }
  function _v549({
    description: _v0,
    onSubmit: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      [_v4, _v5] = (0, _v22.useState)(_v0);
    return (0, _v22.useEffect)(() => {
      _v5(_v0);
    }, [_v0]), (0, _v14.jsx)(_v552, {
      editMode: !0,
      children: _v2 ? (0, _v14.jsx)(_v540, {
        content: _v4,
        onSave: _v0 => {
          _v0 !== _v4 && (_v1(_v0), _v5(_v0)), _v3(!1);
        },
        maxCharacterCount: _v49.VIDEO_DESCRIPTION_MAX_LENGTH,
        placeholder: _v66.default.ClickToAddDescription,
        autoFocus: !0,
        fullWidth: !0
      }) : _v4 ? (0, _v14.jsx)(_v548, {
        description: _v4,
        editMode: !0,
        setEnableEdit: () => _v3(!0)
      }) : (0, _v14.jsx)(_v557, {
        buttonText: _v66.default.AddDescription,
        onClick: () => _v3(!0),
        onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v3(!0)),
        theme: _v38.themes.dark,
        tabIndex: 0,
        role: "button"
      })
    });
  }
  function _v550({
    description: _v0,
    editMode: _v1,
    onSubmit: _v2
  }) {
    return _v1 ? (0, _v14.jsx)(_v549, {
      description: _v0,
      onSubmit: _v2
    }) : _v0 ? (0, _v14.jsx)(_v548, {
      description: _v0
    }) : null;
  }
  let _v551 = _v33.css`
  color: ${_v53.bokehTheme.colors.gray["500"]};
  font-size: ${(0, _v51.rem)(16)};
  line-height: ${(0, _v51.rem)(24)};

  ${_v61.media.md`
    font-size: ${(0, _v51.rem)(14)};
    line-height: ${(0, _v51.rem)(20)};
  `}
  ${_v61.media.xhd`
    font-size: ${(0, _v51.rem)(16)};
    line-height: ${(0, _v51.rem)(22)};
  `}
`,
    _v552 = _v33.default.article.withConfig({
      displayName: "VideoDescription__DescriptionContainer",
      componentId: "sc-396910fa-0"
    })`
  margin-top: ${(0, _v51.rem)(20)};

  &:focus {
    outline: none;
  }

  ${_v61.media.hd`
    margin-left: ${(0, _v51.rem)(3)};
  `}

  ${({
      editMode: _v0
    }) => _v0 ? _v33.css`
          textarea {
            ${_v551};
            padding: ${(0, _v51.rem)(8.2)};
            background: transparent;
            font-family: inherit;
          }

          &:hover {
            .description-overlay {
              display: none;
            }

            .wrapper {
              ${_v61.media.md`
                background: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .25)};
                border-radius: ${(0, _v51.rem)(4)};
              `}
            }

            .description {
              overflow-y: auto;
            }

            .read-more {
              visibility: hidden;
            }
          }
        ` : null}
`,
    _v553 = _v33.default.article.withConfig({
      displayName: "VideoDescription__DescriptionWrapper",
      componentId: "sc-396910fa-1"
    })`
  position: relative;
  padding: ${(0, _v51.rem)(8.2)};
  border: ${(0, _v51.rem)(1)} solid transparent;

  ${({
      editMode: _v0
    }) => _v0 ? _v33.css`
          margin-top: 0;
        ` : _v33.css`
          margin-top: ${(0, _v51.rem)(20)};
          ${_v61.media.hd`
            margin-left: ${(0, _v51.rem)(3)};
          `}
        `}
`,
    _v554 = _v33.default.p.withConfig({
      displayName: "VideoDescription__Description",
      componentId: "sc-396910fa-2"
    })`
  ${_v551}
  height: ${(0, _v51.rem)(104)};
  overflow-wrap: break-word;
  white-space: break-spaces;

  a {
    word-break: normal;
    overflow-wrap: break-word;
  }

  ${({
      expanded: _v0
    }) => _v0 ? _v33.css`
          height: 100%;
          overflow-y: auto;
        ` : _v33.css`
          overflow: hidden;
          ${_v61.media.sm`
          height: ${(0, _v51.rem)(90)};
        `}
          ${_v61.media.md`
          height: ${(0, _v51.rem)(76)};
        `}
        ${_v61.media.hd`
          height: ${(0, _v51.rem)(104)};
        `}
        `}
`,
    _v555 = _v33.default.article.withConfig({
      displayName: "VideoDescription__Overlay",
      componentId: "sc-396910fa-3"
    })`
  position: absolute;
  left: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["800"], 0)} 0%,
    ${_v53.bokehTheme.colors.gray["900"]} 100%
  );
  height: ${(0, _v51.rem)(76)};
  top: ${(0, _v51.rem)(28)};

  ${_v61.media.sm`
    height: ${(0, _v51.rem)(72)};
    top: ${(0, _v51.rem)(26.2)};
  `}
  ${_v61.media.md`
    height: ${(0, _v51.rem)(67)};
    top: ${(0, _v51.rem)(17.2)};
  `}
  ${_v61.media.hd`
    height: ${(0, _v51.rem)(97)};
    top: ${(0, _v51.rem)(15.2)};
  `}
  ${_v61.media.xhd`
    top: ${(0, _v51.rem)(21.2)};
  `}
`,
    _v556 = _v33.default.p.withConfig({
      displayName: "VideoDescription__ReadMore",
      componentId: "sc-396910fa-4"
    })`
  ${_v551}
  text-decoration: underline;
  cursor: pointer;
  margin: ${(0, _v51.rem)(8)} 0 0 ${(0, _v51.rem)(9.2)};

  ${_v61.media.sm`
    margin-top: ${(0, _v51.rem)(14)}
  `}
  ${_v61.media.md`
    margin-top: ${(0, _v51.rem)(0)};
  `}
  ${_v61.media.xhd`
    margin-top: ${(0, _v51.rem)(23)};
  `}
`,
    _v557 = (0, _v33.default)(_v68).withConfig({
      displayName: "VideoDescription__AddButton",
      componentId: "sc-396910fa-5"
    })`
  margin-left: ${(0, _v51.rem)(9.2)};
`,
    _v558 = _v33.default.section.withConfig({
      displayName: "VideoDescription__Container",
      componentId: "sc-396910fa-6"
    })`
  margin-bottom: ${(0, _v51.rem)(44)};
`;
  function _v559({
    name: _v0,
    onSubmit: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      [_v4, _v5] = (0, _v22.useState)(_v0);
    return (0, _v22.useEffect)(() => {
      _v5(_v0);
    }, [_v0]), _v2 ? (0, _v14.jsx)(_v564, {
      children: (0, _v14.jsx)(_v540, {
        content: _v4,
        maxCharacterCount: _v49.VIDEO_NAME_MAX_LENGTH,
        validate: _v0 => _v0.length > 0 && _v0.length <= _v49.VIDEO_NAME_MAX_LENGTH,
        onSave: _v0 => {
          _v0 !== _v4 && (_v5(_v0), _v1(_v0)), _v3(!1);
        },
        fullWidth: !0,
        resetOnEmpty: !0,
        autoFocus: !0
      })
    }) : (0, _v14.jsx)(_v560, {
      name: _v4,
      onClick: () => _v3(!0),
      editMode: !0
    });
  }
  function _v560({
    name: _v0,
    clipLink: _v1,
    editMode: _v2 = !1,
    onClick: _v3
  }) {
    return (0, _v14.jsx)(_v564, {
      tabIndex: _v2 ? 0 : -1,
      onClick: _v3,
      onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v3?.()),
      children: _v2 ? (0, _v14.jsxs)(_v566, {
        children: [_v0, (0, _v14.jsx)(_v567, {
          icon: (0, _v14.jsx)(_v79.EditPencil, {}),
          variant: "hyperminimal",
          element: "span",
          format: "alternative"
        })]
      }) : (0, _v14.jsx)(_v565, {
        href: _v1,
        children: _v0
      })
    });
  }
  function _v561({
    name: _v0,
    editMode: _v1,
    clipLink: _v2,
    onSubmit: _v3
  }) {
    return _v1 ? (0, _v14.jsx)(_v559, {
      name: _v0,
      onSubmit: _v3
    }) : (0, _v14.jsx)(_v560, {
      name: _v0,
      clipLink: _v2
    });
  }
  let _v562 = _v33.css`
  font-size: ${(0, _v51.rem)(42)};
  font-weight: bold;
  line-height: ${(0, _v51.rem)(48)};
  color: ${_v53.bokehTheme.colors.white};
  letter-spacing: ${(0, _v51.rem)(-.88)};
`,
    _v563 = _v33.css`
  padding: ${(0, _v51.rem)(9.01)};
  border: ${(0, _v51.rem)(1)} solid transparent;
  word-break: break-word;

  ${_v61.media.hd`
    padding: ${(0, _v51.rem)(9.01)} ${(0, _v51.rem)(6)};
  `}
`,
    _v564 = _v33.default.article.withConfig({
      displayName: "VideoName__TitleContainer",
      componentId: "sc-ed7e3b5f-0"
    })`
  margin: ${(0, _v51.rem)(6)} 0 ${(0, _v51.rem)(12)};
  border-radius: ${(0, _v51.rem)(4)};

  ${_v61.media.hd`
    margin: ${(0, _v51.rem)(6)} ${(0, _v51.rem)(3)} ${(0, _v51.rem)(12)};
  `}

  textarea {
    ${_v562};
    padding: ${(0, _v51.rem)(8.7)};
    font-family: inherit;
    background: transparent;

    &:hover {
      background: transparent;
    }

    ${_v61.media.hd`
      padding: ${(0, _v51.rem)(8.7)} ${(0, _v51.rem)(6)};
    `}
  }
`,
    _v565 = _v33.default.a.withConfig({
      displayName: "VideoName__ViewTitle",
      componentId: "sc-ed7e3b5f-1"
    })`
  ${_v562};
  ${_v563};
  text-decoration: none;
  transition: all 230ms ease-in-out;
  display: block;

  &:hover {
    text-decoration: underline;
    color: ${_v53.bokehTheme.colors.blue["500"]};
  }
`,
    _v566 = _v33.default.p.withConfig({
      displayName: "VideoName__EditTitle",
      componentId: "sc-ed7e3b5f-2"
    })`
  ${_v562};
  ${_v563};
  cursor: text;

  &:hover {
    background: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .25)};
  }
`,
    _v567 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "VideoName__EditButton",
      componentId: "sc-ed7e3b5f-3"
    })`
  display: inline;
  margin-left: ${(0, _v51.rem)(10)};

  ${_v61.media.sm`
    display: none;
  `}
`;
  function _v568({
    profileName: _v0,
    profileImg: _v1,
    name: _v2,
    clipId: _v3,
    clipLink: _v4,
    createdTime: _v5,
    categories: _v6,
    description: _v7,
    editMode: _v8,
    onSubmitName: _v9,
    onSubmitDescription: _v10,
    onUpdateCategories: _v11
  }) {
    let _v12 = new Date(_v5);
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v569, {
        src: _v1,
        alt: _v0
      }), (0, _v14.jsx)(_v561, {
        name: _v2,
        clipLink: _v4,
        editMode: _v8,
        onSubmit: _v9
      }), (0, _v14.jsx)(_v570, {
        size: "5",
        theme: _v38.themes.dark,
        children: (0, _v14.jsx)("time", {
          dateTime: _v12.toString(),
          title: _v12.toLocaleString(),
          children: (0, _v520.fromNow)(_v12)
        })
      }), (0, _v14.jsx)(_v536, {
        categories: _v6,
        editMode: _v8,
        clipId: _v3,
        onUpdate: _v11
      }), (0, _v14.jsx)(_v550, {
        description: _v7 || "",
        editMode: _v8,
        onSubmit: _v10
      })]
    });
  }
  let _v569 = _v33.default.img.withConfig({
      displayName: "VideoDetails__AvatarImg",
      componentId: "sc-a7a8e2a7-0"
    })`
  height: ${(0, _v51.rem)(24)};
  width: ${(0, _v51.rem)(24)};
  border-radius: 100%;
  margin-left: ${(0, _v51.rem)(9.2)};

  ${_v61.media.hd`
    margin-left: ${(0, _v51.rem)(12.2)};
  `}
`,
    _v570 = (0, _v33.default)(_v195.Header).withConfig({
      displayName: "VideoDetails__TimeContainer",
      componentId: "sc-a7a8e2a7-1"
    })`
  margin: ${(0, _v51.rem)(7)} 0 0 ${(0, _v51.rem)(9.2)};
  letter-spacing: 0;

  ${_v61.media.hd`
    margin-left: ${(0, _v51.rem)(12.2)};
  `}
`;
  function _v571({
    name: _v0,
    clipId: _v1,
    configUrl: _v2,
    clipImage: _v3,
    clipSrcSet: _v4,
    currentTime: _v5,
    badgeType: _v6,
    isScheduledEvent: _v7 = !1
  }) {
    let _v8 = (0, _v22.useRef)(null),
      [_v9, _v10] = (0, _v22.useState)(!1),
      {
        player: _v11
      } = (0, _v170.usePlayer)(_v8, _v1, !0, _v2, !1);
    return (0, _v22.useEffect)(() => (_v10(!0), _v11 && _v11.ready && _v11.ready(() => {
      _v5 && _v11.seekTo(_v5), _v7 ? _v10(!1) : _v11.play().then(() => {
        _v10(!1);
      }).catch(() => {
        _v10(!1);
      });
    }), () => {
      _v11 && _v11.ready && !_v7 && _v11.ready(() => {
        _v11.volume = 0, _v11.play().then(() => _v11.pause());
      });
    }), [_v5, _v7, _v11]), (0, _v14.jsx)(_v572, {
      children: (0, _v14.jsx)(_v573, {
        children: (0, _v14.jsxs)(_v574, {
          children: [_v9 ? (0, _v14.jsx)(_v576, {
            children: (0, _v14.jsx)(_v34.Spinner, {
              size: "xl",
              color: "gray.500"
            })
          }) : null, (0, _v14.jsx)(_v378, {
            badgeType: _v6 && _v9 ? _v6 : ""
          }), (0, _v14.jsx)(_v577, {
            src: _v3,
            srcSet: _v4,
            alt: _v0,
            show: _v9
          }), (0, _v14.jsx)(_v575, {
            show: !_v9,
            children: (0, _v14.jsx)("div", {
              ref: _v8,
              className: "player js-player"
            })
          })]
        })
      })
    });
  }
  let _v572 = _v33.default.header.withConfig({
      displayName: "VimeoPlayer__AspectRatioBox",
      componentId: "sc-ee0de87e-0"
    })`
  padding-top: 56.25%;
  position: relative;
  height: 0;
  overflow: hidden;
  width: 100%;
  border-radius: ${(0, _v51.rem)(10)};
`,
    _v573 = _v33.default.article.withConfig({
      displayName: "VimeoPlayer__ApsectRatioBoxInside",
      componentId: "sc-ee0de87e-1"
    })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,
    _v574 = _v33.default.article.withConfig({
      displayName: "VimeoPlayer__FlexBoxCentering",
      componentId: "sc-ee0de87e-2"
    })`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v575 = _v33.default.article.withConfig({
      displayName: "VimeoPlayer__PlayerWrapper",
      componentId: "sc-ee0de87e-3"
    })`
  opacity: 0;
  width: 100%;
  height: 100%;

  ${({
      show: _v0
    }) => _v0 && _v33.css`
      opacity: 1;
    `}
`,
    _v576 = _v33.default.article.withConfig({
      displayName: "VimeoPlayer__LoadingContainer",
      componentId: "sc-ee0de87e-4"
    })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`,
    _v577 = _v33.default.img.withConfig({
      displayName: "VimeoPlayer__ClipImage",
      componentId: "sc-ee0de87e-5"
    })`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #000;
  opacity: 0;
  z-index: 1;
  pointer-events: none;

  ${({
      show: _v0
    }) => _v0 && _v33.css`
      opacity: 1;
    `}
`,
    _v578 = (0, _v22.forwardRef)((_v0, _v1) => (0, _v14.jsx)("svg", {
      version: "1.1",
      viewBox: "0 0 9 12",
      ref: _v1,
      ..._v0,
      children: (0, _v14.jsx)("g", {
        fill: "none",
        fillRule: "evenodd",
        children: (0, _v14.jsx)("g", {
          transform: "translate(-227 -695)",
          fill: "#fff",
          fillRule: "nonzero",
          children: (0, _v14.jsxs)("g", {
            transform: "translate(227 695)",
            children: [(0, _v14.jsx)("rect", {
              x: "1.4554e-12",
              width: "1.8",
              height: "12"
            }), (0, _v14.jsx)("polygon", {
              transform: "translate(4.55 6) rotate(-90) translate(-4.55 -6)",
              points: "4.55 1.95 10.55 10.05 -1.45 10.05"
            })]
          })
        })
      })
    }));
  function _v579({
    clip: _v0,
    currentTime: _v1,
    profile: _v2,
    onClose: _v3,
    previous: _v4,
    next: _v5,
    onChange: _v6,
    playerAssetUrls: _v7,
    navDirection: _v8,
    selectedCategory: _v9
  }) {
    let {
        editMode: _v10,
        userId: _v11
      } = (0, _v22.useContext)(_v43.default),
      {
        updateVideoData: _v12,
        updateCategories: _v13
      } = function (_v0) {
        let _v1 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
          {
            userId: _v2
          } = (0, _v22.useContext)(_v43.default),
          {
            cache: _v3,
            mutate: _v4
          } = (0, _v513.useSWRConfig)(),
          {
            mutate: _v5
          } = _v317(_v0, !1),
          _v6 = (0, _v45.default)(),
          _v7 = (0, _v45.default)(),
          [_v8, _v9] = (0, _v22.useState)(),
          _v10 = (0, _v22.useCallback)((_v0, _v1, _v2) => {
            _v0 && _v5(_v0 => {
              if (!_v0) return _v0;
              let _v1 = (0, _v50.convertToArray)(_v0).map(_v0 => {
                if ((0, _v50.getIdFromUri)(_v0.uri) === _v0) {
                  let _v0 = {
                    ..._v0
                  };
                  return _v0[_v1] = _v2, _v0;
                }
                return _v0;
              });
              return (0, _v50.divideToPages)(_v1, _v0, _v49.FILTERED_VIDEOS_VARIABLES.perPage);
            }, {
              revalidate: !1
            });
            let _v3 = RegExp(`^\\$inf\\$users/${_v2}/profile_sections/\\d+/videos`),
              _v4 = new Set();
            return Array.from(_v3.keys()).forEach(_v0 => {
              if (_v3.test(_v0)) {
                let _v0 = _v3.get(_v0)?.data,
                  _v1 = (0, _v50.convertToArray)(_v0).findIndex(_v0 => (0, _v50.getIdFromUri)(_v0.clip.uri) === _v0);
                -1 !== _v1 && (_v4.add(_v0), _v4(_v0, _v0 => {
                  if (!_v0) return _v0;
                  let _v1 = (0, _v50.convertToArray)(_v0),
                    _v2 = {
                      ..._v1[_v1]
                    };
                  return _v2[_v1] = _v2, _v1.splice(_v1, 1, _v2), (0, _v50.divideToPages)(_v1, _v0, _v49.VIDEO_VARIABLES.perPage);
                }, {
                  revalidate: !1
                }));
              }
            }), [..._v4.values()];
          }, [_v0, _v5, _v2, _v3, _v4]),
          _v11 = (0, _v22.useCallback)(_v0 => {
            _v0 ? _v5() : _v0?.forEach(_v0 => _v4(_v0));
          }, [_v5, _v0, _v4]);
        return {
          updateVideoData: (0, _v22.useCallback)((_v0, _v1, _v2) => {
            _v9(void 0);
            let _v3 = _v1 ? {
                name: _v1
              } : {
                description: _v2
              },
              _v4 = _v1 ? ["name"] : ["description"],
              _v5 = _v10(_v0, _v4[0], _v3[_v4[0]]);
            _v6(`videos/${_v0}`, {
              fields: _v4
            }, _v49.HTTPMethods.PATCH, _v3).then(() => {
              _v11(_v5), _v1();
            }).catch(_v0 => {
              _v11(_v5), _v9(_v0);
            });
          }, [_v6, _v10, _v1, _v11]),
          updateCategories: (0, _v22.useCallback)((_v0, _v1) => {
            _v9(void 0);
            let _v2 = _v1.map(_v0 => {
                var _v1;
                let _v2;
                return {
                  category: (_v2 = (_v1 = _v0.uri).lastIndexOf("/"), _v1.substr(_v2 + 1))
                };
              }),
              _v3 = _v10(_v0, "categories", _v1);
            return _v7(`videos/${_v0}/categories`, void 0, _v49.HTTPMethods.PUT, _v2).then(() => {
              _v11(_v3), _v1();
            }).catch(_v0 => {
              throw _v11(_v3), _v9(_v0), "function" == typeof _v0.json && _v0.json().then(_v0 => _v1({
                content: _v0.error,
                status: "negative"
              })), Error();
            });
          }, [_v7, _v10, _v1, _v11]),
          error: _v8
        };
      }(_v9),
      _v14 = (0, _v50.getIdFromUri)(_v0.uri),
      _v15 = (0, _v50.getIdFromUri)(_v0.user.uri),
      _v16 = (0, _v22.useMemo)(() => _v118(_v0), [_v0]),
      _v17 = (0, _v22.useMemo)(() => _v16.length > 1 ? _v16.slice(1).map((_v0, _v1) => `${_v0} ${_v1 + 2}x`).join(", ") : "", [_v16]),
      _v18 = (0, _v22.useMemo)(() => {
        let _v0 = "live" === _v0.type,
          _v1 = _v0.duration > 0,
          _v2 = _v0.live?.status === _v49.LIVE_STATUS.STREAMING;
        return _v0 && !_v1 && !_v2;
      }, [_v0.type, _v0.duration, _v0.live?.status]);
    (0, _v287.default)(_v0 => {
      let _v1 = _v0.target;
      _v0.keyCode !== _v49.KeyCodes.ESC || /input|textarea/gi.test(_v1.nodeName) || _v3();
    }, [_v3]), (0, _v22.useEffect)(() => {
      let _v0 = document?.querySelector("body"),
        _v1 = window?.scrollY || 0;
      return _v0 && (_v0.style.position = "fixed", _v0.style.top = `-${_v1}px`), () => {
        _v0 && (_v0.style.position = "", _v0.style.top = "", window?.scrollTo(0, _v1));
      };
    }, []);
    let _v19 = (0, _v125.useSpring)({
      to: {
        transform: "translateX(0)"
      },
      from: {
        transform: null == _v8 ? "translateX(0)" : -1 === _v8 ? "translateX(-200%)" : "translateX(200%)"
      },
      config: {
        mass: 1,
        tension: 200,
        friction: 10,
        clamp: !0
      }
    });
    return (0, _v14.jsxs)(_v58.PlayerContextProvider, {
      type: _v59.PlayerType.VimeoPlayer,
      assetUrls: _v7,
      children: [(0, _v14.jsx)(_v582, {
        autoFocus: !0
      }), (0, _v14.jsx)(_v583, {
        onClick: _v3,
        children: (0, _v14.jsx)(_v52.CloseX, {
          color: "gray.500",
          transition: "fill 230ms ease-in-out",
          _hover: {
            color: "gray.300"
          },
          boxSize: "45"
        })
      }), (0, _v14.jsxs)(_v581, {
        style: _v19,
        children: [(0, _v14.jsxs)(_v584, {
          children: [(0, _v14.jsx)(_v571, {
            name: _v0.name,
            clipId: _v14,
            clipImage: _v16[0],
            clipSrcSet: _v17,
            configUrl: _v0.configUrl,
            currentTime: _v1,
            badgeType: _v0.badge?.type,
            isScheduledEvent: _v18
          }), (0, _v14.jsxs)(_v586, {
            children: [(0, _v14.jsxs)(_v587, {
              onClick: () => _v4 ? _v6(_v4, -1) : void 0,
              disabled: null == _v4,
              children: [(0, _v14.jsx)(_v589, {
                height: "12",
                width: "10"
              }), " ", _v66.default.Previous]
            }), (0, _v14.jsxs)(_v587, {
              onClick: () => _v5 ? _v6(_v5, 1) : void 0,
              disabled: null == _v5,
              children: [_v66.default.UpNext, " ", (0, _v14.jsx)(_v588, {
                height: "12",
                width: "10"
              })]
            })]
          })]
        }), (0, _v14.jsx)(_v585, {
          children: (0, _v14.jsx)(_v568, {
            categories: _v0.categories || [],
            createdTime: _v0.createdTime,
            description: _v0.description,
            name: _v0.name,
            profileImg: _v2.pictures.sizes[2].link,
            profileName: _v2.name,
            clipId: _v14,
            clipLink: _v0.link,
            editMode: _v10 && _v15 === _v11,
            onSubmitName: _v0 => _v12(_v14, _v0),
            onSubmitDescription: _v0 => _v12(_v14, void 0, _v0),
            onUpdateCategories: _v13
          })
        })]
      })]
    });
  }
  let _v580 = _v124.animated.section,
    _v581 = (0, _v33.default)(_v580).withConfig({
      displayName: "PlayerContainer__Wrapper",
      componentId: "sc-ca21cda0-0"
    })`
  height: 100%;
  width: 100%;
  position: relative;
  padding: ${(0, _v51.rem)(79)} ${(0, _v51.rem)(15)} ${(0, _v51.rem)(81)} ${(0, _v51.rem)(18)};
  ${_v61.media.sm`
    padding: ${(0, _v51.rem)(93)} ${(0, _v51.rem)(30)} ${(0, _v51.rem)(90)};
  `}
  ${_v61.media.md`
    padding: ${(0, _v51.rem)(93)} ${(0, _v51.rem)(125)} ${(0, _v51.rem)(113)};
  `}
  ${_v61.media.hd`
    display: flex;
    padding: 0;
  `}
`,
    _v582 = _v33.default.button.withConfig({
      displayName: "PlayerContainer__PseudoButton",
      componentId: "sc-ca21cda0-1"
    })`
  opacity: 0;
`,
    _v583 = _v33.default.button.withConfig({
      displayName: "PlayerContainer__DismissBtnContainer",
      componentId: "sc-ca21cda0-2"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(20)};
  right: ${(0, _v51.rem)(20)};
  cursor: pointer;
  z-index: 1;
  background: transparent;
  border: none;
`,
    _v584 = _v33.default.section.withConfig({
      displayName: "PlayerContainer__PlayerWrapper",
      componentId: "sc-ca21cda0-3"
    })`
  ${_v61.media.hd`
    height: 100%;
    display: inline-block;
    width: calc(75% - ${(0, _v51.rem)(28)});
    margin-right: ${(0, _v51.rem)(28)};
    padding: ${(0, _v51.rem)(50)} 0 0 ${(0, _v51.rem)(60)};
    box-sizing: border-box;
  `}
  ${_v61.media.xhd`
    width: calc(75% - ${(0, _v51.rem)(35)});
    margin-right: ${(0, _v51.rem)(35)};
    padding-top: ${(0, _v51.rem)(153)};
  `}
`,
    _v585 = _v33.default.article.withConfig({
      displayName: "PlayerContainer__DetailsWrapper",
      componentId: "sc-ca21cda0-4"
    })`
  margin: ${(0, _v51.rem)(48)} 0;
  ${_v61.media.hd`
    height: 100%;
    display: inline-block;
    overflow: hidden;
    overflow-y: auto;
    width: 25%;
    margin: 0;
    padding: ${(0, _v51.rem)(75)} ${(0, _v51.rem)(60)} 0 ${(0, _v51.rem)(28)};
  `}
  ${_v61.media.xhd`
    padding: ${(0, _v51.rem)(160)} ${(0, _v51.rem)(70)} 0 ${(0, _v51.rem)(35)};
  `}
`,
    _v586 = _v33.default.article.withConfig({
      displayName: "PlayerContainer__NavigationContainer",
      componentId: "sc-ca21cda0-5"
    })`
  display: flex;
  justify-content: space-between;
  margin-top: ${(0, _v51.rem)(23)};
`,
    _v587 = _v33.default.button.withConfig({
      displayName: "PlayerContainer__NavButton",
      componentId: "sc-ca21cda0-6"
    })`
  font-size: ${(0, _v51.rem)(16)};
  font-weight: bold;
  color: ${_v53.bokehTheme.colors.white};
  text-shadow: 0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(3)} 0 rgba(0, 0, 0, 0.08);
  letter-spacing: ${(0, _v51.rem)(.23)};
  line-height: ${(0, _v51.rem)(20)};
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: opacity 230ms linear;
  background: transparent;
  border: none;
  svg g {
    fill: ${_v53.bokehTheme.colors.white};
  }

  ${({
      disabled: _v0
    }) => _v0 ? _v33.css`
          pointer-events: none;
          cursor: not-allowed;
          opacity: 0.2;
        ` : _v33.css`
          cursor: pointer;

          &:hover {
            opacity: 1;
          }
        `}

  ${_v61.media.sm`
    font-size: ${(0, _v51.rem)(16)};
    letter-spacing: ${(0, _v51.rem)(.23)};
    line-height: ${(0, _v51.rem)(20)};
  `}

  ${_v61.media.md`
    font-size: ${(0, _v51.rem)(14)};
    letter-spacing: ${(0, _v51.rem)(.2)};
  `}

  ${_v61.media.hd`
    line-height: ${(0, _v51.rem)(17)};
  `}

  ${_v61.media.xhd`
    font-size: ${(0, _v51.rem)(16)};
    letter-spacing: ${(0, _v51.rem)(.23)};
    line-height: ${(0, _v51.rem)(22)};
  `}
`,
    _v588 = (0, _v33.default)(_v578).withConfig({
      displayName: "PlayerContainer__CustomNext",
      componentId: "sc-ca21cda0-7"
    })`
  transform: rotate(180deg);
  margin-left: ${(0, _v51.rem)(6)};
`,
    _v589 = (0, _v33.default)(_v578).withConfig({
      displayName: "PlayerContainer__CustomPrevious",
      componentId: "sc-ca21cda0-8"
    })`
  margin-right: ${(0, _v51.rem)(6)};
`,
    _v590 = (0, _v22.forwardRef)(({
      zoomRatio: _v0,
      image: _v1,
      imageCropCircleDiameter: _v2,
      windowWidth: _v3
    }, _v4) => {
      let _v5 = (0, _v22.useRef)(null),
        _v6 = (0, _v22.useRef)(null),
        _v7 = (0, _v22.useRef)(null),
        [_v8, _v9] = (0, _v22.useState)(!0),
        _v10 = (0, _v22.useRef)(null),
        [_v11, _v12] = (0, _v22.useState)({
          top: 0,
          left: 0
        }),
        [{
          pos: _v13
        }, _v14] = (0, _v125.useSpring)(() => ({
          from: {
            pos: [0, 0]
          }
        })),
        [_v15, _v16] = (0, _v22.useState)(!1),
        _v17 = (0, _v22.useCallback)(_v0 => {
          if (null !== _v0) {
            let {
              offsetWidth: _v0,
              offsetHeight: _v1
            } = _v0;
            _v14({
              pos: [-(_v0 * _v1.naturalWidth - _v0) / 2, -(_v0 * _v1.naturalHeight - _v1) / 2],
              immediate: !0
            }), _v12({
              left: (_v0 - _v2) / 2,
              top: (_v1 - _v2) / 2
            });
          }
        }, [_v3, _v1, _v2]);
      (0, _v22.useImperativeHandle)(_v4, () => ({
        calculateCropSize() {
          let _v0 = _v7.current,
            _v1 = _v5.current;
          if (_v0 && _v1) {
            let {
                top: _v0,
                left: _v1
              } = _v0.getBoundingClientRect(),
              {
                top: _v2,
                left: _v3
              } = _v1.getBoundingClientRect(),
              _v4 = Math.max(Math.round((_v1 - _v3) / _v0), 0),
              _v5 = Math.max(Math.round((_v0 - _v2) / _v0), 0),
              _v6 = _v2 / _v0,
              _v7 = Math.min(Math.round(_v4 + _v6), _v1.naturalWidth),
              _v8 = Math.min(Math.round(_v5 + _v6), _v1.naturalHeight);
            return {
              xMin: _v4,
              yMin: _v5,
              xMax: _v7,
              yMax: _v8
            };
          }
        }
      }));
      let _v18 = _v0 => {
          let [_v1, _v2] = _v0,
            {
              offsetWidth: _v3,
              offsetHeight: _v4
            } = _v5.current || {
              offsetWidth: 0,
              offsetHeight: 0
            },
            _v5 = _v11.left + _v2 - _v3,
            _v6 = _v11.top + _v2 - _v4;
          return _v1 > _v11.left ? _v1 = _v11.left : _v1 < _v5 && (_v1 = _v5), _v2 > _v11.top ? _v2 = _v11.top : _v2 < _v6 && (_v2 = _v6), [_v1, _v2];
        },
        _v19 = (0, _v248.useDrag)(({
          down: _v0,
          active: _v1,
          movement: _v2,
          memo: _v3 = _v13.get()
        }) => {
          let _v4 = (0, _v248.addV)(_v2, _v3);
          return _v16(_v0), _v14({
            pos: _v18(_v4),
            immediate: _v1
          }), _v3;
        });
      (0, _v22.useEffect)(() => {
        let {
            naturalWidth: _v0,
            naturalHeight: _v1
          } = _v1,
          _v2 = _v0 * _v0,
          _v3 = _v1 * _v0,
          [_v4, _v5] = _v13.get();
        if (_v2 >= _v2 && _v3 >= _v2 && _v5.current && _v6.current) {
          let _v0 = (_v5.current.width - _v2) / 2 + _v4,
            _v1 = (_v5.current.height - _v3) / 2 + _v5;
          _v5.current.height = _v6.current.height = _v3, _v5.current.width = _v6.current.width = _v2, _v8 ? _v9(!1) : _v14({
            pos: _v18([_v0, _v1]),
            immediate: !0
          });
        }
      }, [_v0, _v3]);
      let _v20 = (_v0, _v1 = {
        top: 0,
        left: 0
      }) => {
        let _v2 = _v124.animated.div;
        return (0, _v14.jsx)(_v2, {
          ..._v19(),
          ref: _v10,
          style: {
            cursor: _v15 ? "grabbing" : "grab",
            transform: _v13.to((_v0, _v1) => `translate3d(${_v0 - _v1.left}px, ${_v1 - _v1.top}px, 0px)`)
          },
          children: (0, _v14.jsx)("img", {
            src: _v1.src,
            ref: _v0,
            alt: _v1.name,
            draggable: !1,
            onDragStart: _v0 => {
              _v0.preventDefault();
            }
          })
        });
      };
      return (0, _v14.jsxs)(_v591, {
        ref: _v17,
        children: [(0, _v14.jsx)(_v593, {
          imageCropCircleDiameter: _v2,
          ref: _v7,
          style: {
            transform: `translate3d(${_v11.left}px, ${_v11.top}px, 0px)`
          },
          children: _v20(_v6, _v11)
        }), (0, _v14.jsx)(_v592, {
          children: _v20(_v5)
        })]
      });
    }),
    _v591 = _v33.default.div.withConfig({
      displayName: "ImageCrop__Wrapper",
      componentId: "sc-2a5b1d3f-0"
    })`
  background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.gray["800"], .7)};
  overflow: hidden;
  position: relative;
  height: ${(0, _v51.rem)(255)};
  ${_v61.media.sm`
    height: ${(0, _v51.rem)(284)};
 `}
`,
    _v592 = _v33.default.div.withConfig({
      displayName: "ImageCrop__ImageWrapper",
      componentId: "sc-2a5b1d3f-1"
    })`
  opacity: 0.5;
  position: relative;
  user-select: none;
`,
    _v593 = _v33.default.div.withConfig({
      displayName: "ImageCrop__SelectionBox",
      componentId: "sc-2a5b1d3f-2"
    })`
  position: absolute;
  height: ${({
      imageCropCircleDiameter: _v0
    }) => (0, _v51.rem)(_v0)};
  width: ${({
      imageCropCircleDiameter: _v0
    }) => (0, _v51.rem)(_v0)};
  border-radius: 50%;
  overflow: hidden;
`,
    _v594 = _v33.default.div.withConfig({
      displayName: "Slider.styles__LeftIcon",
      componentId: "sc-a972c954-0"
    })`
  background-color: ${_v53.bokehTheme.colors.gray["800"]};
  border-bottom: ${(0, _v51.rem)(7)} solid ${_v53.bokehTheme.colors.white};
  border-top: ${(0, _v51.rem)(7)} solid ${_v53.bokehTheme.colors.white};
  bottom: ${(0, _v51.rem)(5)};
  height: ${(0, _v51.rem)(16)};
  margin-right: ${(0, _v51.rem)(4)};
  position: relative;
  width: ${(0, _v51.rem)(16)};
  cursor: pointer;
`,
    _v595 = _v33.default.div.withConfig({
      displayName: "Slider.styles__PseudoSliderContainer",
      componentId: "sc-a972c954-1"
    })`
  display: flex;
`,
    _v596 = _v33.default.div.withConfig({
      displayName: "Slider.styles__PseudoSliderTrack",
      componentId: "sc-a972c954-2"
    })`
  background-image: ${({
      value: _v0
    }) => `linear-gradient(to right, ${_v53.bokehTheme.colors.blue["500"]} ${_v0}%, ${_v53.bokehTheme.colors.gray["100"]} ${_v0}%)`};
  border-radius: ${(0, _v51.rem)(3)};
  height: ${(0, _v51.rem)(4)};
  width: 100%;
  transform: translateX(${(0, _v51.rem)(10)});
  cursor: pointer;
`,
    _v597 = _v33.default.div.withConfig({
      displayName: "Slider.styles__RightIcon",
      componentId: "sc-a972c954-3"
    })`
  bottom: ${(0, _v51.rem)(12)};
  height: ${(0, _v51.rem)(30)};
  position: relative;
  width: ${(0, _v51.rem)(30)};
  cursor: pointer;
  background:
    linear-gradient(${_v53.bokehTheme.colors.gray["800"]}, ${_v53.bokehTheme.colors.gray["800"]}),
    linear-gradient(${_v53.bokehTheme.colors.gray["800"]}, ${_v53.bokehTheme.colors.gray["800"]});
  background-position: center;
  background-size:
    55% ${(0, _v51.rem)(1.8)},
    ${(0, _v51.rem)(1.8)} 50%;
  background-repeat: no-repeat;
`,
    _v598 = _v33.default.div.withConfig({
      displayName: "Slider.styles__SliderContainer",
      componentId: "sc-a972c954-4"
    })`
  padding: ${(0, _v51.rem)(40)} ${(0, _v51.rem)(22)};
  height: ${(0, _v51.rem)(80)};
`,
    _v599 = _v33.default.div.withConfig({
      displayName: "Slider.styles__SliderHandle",
      componentId: "sc-a972c954-5"
    })`
  background-color: ${_v53.bokehTheme.colors.blue["500"]};
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  pointer-events: none;
  width: calc(100% - ${(0, _v51.rem)(8)});
  height: calc(100% - ${(0, _v51.rem)(8)});
  position: absolute;
`,
    _v600 = _v124.animated.div,
    _v601 = (0, _v33.default)(_v600).withConfig({
      displayName: "Slider.styles__SliderWrapper",
      componentId: "sc-a972c954-6"
    })`
  background-color: transparent;
  cursor: grab;
  height: ${(0, _v51.rem)(24)};
  position: absolute;
  width: ${(0, _v51.rem)(24)};
  top: ${(0, _v51.rem)(-10)};
  z-index: 2;
`,
    _v602 = _v33.default.div.withConfig({
      displayName: "Slider.styles__SliderHandleContainer",
      componentId: "sc-a972c954-7"
    })`
  padding: 0 ${(0, _v51.rem)(26)} 0 ${(0, _v51.rem)(10)};
  position: relative;
  width: 100%;
  user-drag: none;
`,
    _v603 = (_v0, _v1) => _v0 => _v0 > _v1 ? _v1 : _v0 < _v0 ? _v0 : _v0;
  function _v604({
    value: _v0 = 0,
    onChange: _v1,
    windowWidth: _v2
  }) {
    let _v3 = (0, _v22.useRef)({
        left: 0,
        width: 0
      }),
      _v4 = (0, _v22.useRef)(null),
      _v5 = (0, _v22.useRef)(_v0),
      [{
        x: _v6
      }, _v7] = (0, _v125.useSpring)(() => ({
        from: {
          x: 0
        }
      })),
      _v8 = _v0 => 100 * _v603(0, _v3.current.width)(_v0) / _v3.current.width,
      _v9 = _v0 => {
        let _v1 = _v603(0, 100)(_v0);
        return _v3.current.width * _v1 / 100;
      };
    (0, _v22.useLayoutEffect)(() => {
      _v3.current.width > 0 && _v7({
        x: _v9(_v0),
        immediate: !0
      });
    }, [_v7, _v0, _v2]);
    let _v10 = (0, _v22.useCallback)(_v0 => {
        if (null !== _v0) {
          let {
            left: _v0,
            width: _v1
          } = _v0.getBoundingClientRect();
          _v3.current = {
            left: _v0,
            width: _v1
          }, _v7({
            x: _v9(_v0),
            immediate: !0
          });
        }
      }, [_v2, _v0]),
      _v11 = _v0 => {
        _v7({
          x: _v9(_v0 + _v0),
          immediate: !0
        }), _v1(Math[0 > _v0 ? "max" : "min"](_v0 + _v0, 0 > _v0 ? 0 : 100));
      },
      _v12 = (0, _v248.useDrag)(({
        down: _v0,
        active: _v1,
        movement: _v2,
        memo: _v3 = [_v6.get()]
      }) => {
        let _v4 = (0, _v248.addV)(_v2, _v3)[0];
        if (_v4.current && (_v4.current.style.cursor = _v0 ? "grabbing" : "grab"), _v3.current?.width >= _v4 && _v4 > -1) {
          _v7({
            x: _v4,
            immediate: _v1
          });
          let _v0 = _v8(_v4);
          Math.abs(_v0 - _v5.current) >= 1 && (_v1(_v0), _v5.current = _v0);
        }
        return _v3;
      });
    return (0, _v14.jsx)(_v598, {
      children: (0, _v14.jsxs)(_v595, {
        children: [(0, _v14.jsx)(_v594, {
          onClick: () => _v11(-1)
        }), (0, _v14.jsxs)(_v602, {
          draggable: !1,
          children: [(0, _v14.jsx)(_v596, {
            ref: _v10,
            value: _v0,
            onClick: _v0 => {
              let _v1 = _v0.nativeEvent.clientX - _v3.current.left;
              _v7({
                x: _v1,
                immediate: !0
              }), _v1(_v8(_v1));
            }
          }), (0, _v14.jsx)(_v601, {
            ..._v12(),
            ref: _v4,
            style: {
              transform: _v6.to(_v0 => `translate3D(${_v0}px, 0, 0)`)
            },
            children: (0, _v14.jsx)(_v599, {
              draggable: !1
            })
          })]
        }), (0, _v14.jsx)(_v597, {
          onClick: () => _v11(1)
        })]
      })
    });
  }
  let _v605 = (_v0, _v1) => _v1 ? 100 * _v0 / Math.min(_v1.naturalHeight, _v1.naturalWidth) : 0,
    _v606 = (0, _v22.forwardRef)(({
      onDismiss: _v0,
      image: _v1,
      onSubmit: _v2
    }, _v3) => {
      let {
          width: _v4
        } = (0, _v60.useWindowSize)(),
        _v5 = (0, _v22.useMemo)(() => _v4 > 480 ? _v49.IMAGE_CROP_CIRCLE_DIAMETER : _v49.IMAGE_CROP_CIRCLE_DIAMETER_MOBILE, [_v4]),
        _v6 = (0, _v22.useRef)(_v605(_v5, _v1)),
        [_v7, _v8] = (0, _v22.useState)(50 + _v6.current),
        [_v9, _v10] = (0, _v22.useState)(!1);
      return (0, _v22.useEffect)(() => {
        _v6.current = _v605(_v5, _v1), _v8(50 + _v6.current);
      }, [_v1, _v5]), (0, _v14.jsxs)(_v608, {
        children: [(0, _v14.jsxs)(_v609, {
          children: [(0, _v14.jsx)(_v610, {
            children: _v66.default.CropThumbnail
          }), (0, _v14.jsx)(_v611, {
            icon: (0, _v14.jsx)(_v52.CloseX, {}),
            size: "sm",
            variant: "minimalTransparent",
            format: "basic",
            onClick: _v0
          })]
        }), (0, _v14.jsx)(_v14.Fragment, {
          children: _v1 ? (0, _v14.jsxs)(_v607, {
            disabled: _v9,
            children: [(0, _v14.jsx)(_v590, {
              ref: _v3,
              image: _v1,
              zoomRatio: _v7 / 100,
              imageCropCircleDiameter: _v5,
              windowWidth: _v4
            }), (0, _v14.jsx)(_v604, {
              value: _v7 - _v6.current,
              onChange: _v0 => _v8(_v0 + _v6.current),
              windowWidth: _v4
            })]
          }) : (0, _v14.jsx)(_v615, {
            children: (0, _v14.jsx)(_v34.Spinner, {
              size: "xl"
            })
          })
        }), (0, _v14.jsxs)(_v612, {
          children: [(0, _v14.jsx)(_v614, {
            format: "secondary",
            onClick: _v0,
            children: _v66.default.Cancel
          }), (0, _v14.jsx)(_v613, {
            loading: _v9,
            onClick: () => {
              _v10(!0), _v2();
            },
            disabled: !_v1 || _v9,
            children: _v66.default.Done
          })]
        })]
      });
    }),
    _v607 = _v33.default.div.withConfig({
      displayName: "UploadPreviewModalContainer__Wrapper",
      componentId: "sc-402950bf-0"
    })`
  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      pointer-events: none;
      opacity: 0.6;
    `}
`,
    _v608 = _v33.default.section.withConfig({
      displayName: "UploadPreviewModalContainer__Container",
      componentId: "sc-402950bf-1"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  background: white;
  position: relative;
  user-select: none;
  overflow: scroll;
  width: 90vw;
  height: 85vh;
  max-width: ${(0, _v51.rem)(506)};
  max-height: ${(0, _v51.rem)(516)};
`,
    _v609 = _v33.default.header.withConfig({
      displayName: "UploadPreviewModalContainer__ModalHeader",
      componentId: "sc-402950bf-2"
    })`
  height: ${(0, _v51.rem)(72)};
`,
    _v610 = _v33.default.span.withConfig({
      displayName: "UploadPreviewModalContainer__HeaderText",
      componentId: "sc-402950bf-3"
    })`
  position: absolute;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  font-size: ${(0, _v51.rem)(18)};
  font-weight: bold;
  line-height: ${(0, _v51.rem)(20)};
  margin: ${(0, _v51.rem)(24)} 0 0 ${(0, _v51.rem)(24)};
  user-select: none;
`,
    _v611 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "UploadPreviewModalContainer__Dismiss",
      componentId: "sc-402950bf-4"
    })`
  position: absolute;
  top: ${(0, _v51.rem)(16)};
  right: ${(0, _v51.rem)(16)};
`,
    _v612 = _v33.default.footer.withConfig({
      displayName: "UploadPreviewModalContainer__ModalFooter",
      componentId: "sc-402950bf-5"
    })`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  box-shadow: 0 ${(0, _v51.rem)(-4)} ${(0, _v51.rem)(8)} 0 ${(0, _v51.rgba)(0, 0, 0, .04)};
  padding: ${(0, _v51.rem)(10)};
  user-select: none;
  padding: ${(0, _v51.rem)(10)};
  ${_v61.media.xmd`
    flex-direction: row;
    padding: ${(0, _v51.rem)(20)} ${(0, _v51.rem)(24)};
  `}
`,
    _v613 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "UploadPreviewModalContainer__ConfirmButton",
      componentId: "sc-402950bf-6"
    })`
  height: ${(0, _v51.rem)(40)};
  ${_v61.media.xmd`
    width: ${(0, _v51.rem)(120)};
  `}
`,
    _v614 = (0, _v33.default)(_v613).withConfig({
      displayName: "UploadPreviewModalContainer__CancelButton",
      componentId: "sc-402950bf-7"
    })`
  margin-bottom: ${(0, _v51.rem)(6)};
  ${_v61.media.xmd`
    margin: 0 ${(0, _v51.rem)(8)} 0;
  `}
`,
    _v615 = _v33.default.aside.withConfig({
      displayName: "UploadPreviewModalContainer__LoadingWrapper",
      componentId: "sc-402950bf-8"
    })`
  width: 100%;
  height: calc(100% - ${(0, _v51.rem)(152)});
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(0, _v51.rem)(366)};
  ${_v61.media.sm`
    height: ${(0, _v51.rem)(284)};
 `}
`,
    _v616 = {
      0: "pixelXDimension",
      0: "pixelYDimension"
    },
    _v617 = {
      0: "ExifIFDPointer",
      274: "orientation"
    };
  function _v618(_v0, _v1, _v2, _v3, _v4) {
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
          for (_v6 = 0, _v4 = _v8 > 2 ? _v9 : _v1 + 8, _v5 = []; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint16(_v4 + 2 * _v6, !_v3);
          return _v5;
        case 4:
          if (1 === _v8) return _v0.getUint32(_v1 + 8, !_v3);
          for (_v6 = 0, _v5 = []; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint32(_v9 + 4 * _v6, !_v3);
          return _v5;
      }
    }(_v0, _v5, _v1, _v4));
    return _v9;
  }
  function _v619({
    onChange: _v0,
    children: _v1,
    className: _v2,
    onEditStart: _v3
  }) {
    let _v4 = (0, _v22.useRef)(null),
      _v5 = (0, _v22.useRef)(null),
      [_v6, _v7] = (0, _v22.useState)(!1),
      [_v8, _v9] = (0, _v22.useState)(),
      [_v10, _v11] = (0, _v22.useState)(null),
      _v12 = "/me/pictures/",
      _v13 = (0, _v22.useContext)(_v39.NotificationDispatchContext);
    (0, _v287.default)(_v6 ? _v0 => (0, _v50.onEsc)(_v0, () => _v7(!1)) : void 0, [_v6]);
    let [{
        post: _v14
      }, {
        data: _v15
      }] = (0, _v191.useMutation)(_v12),
      [{
        patch: _v16
      }, {
        data: _v17
      }] = (0, _v191.useMutation)(_v12 + _v10);
    return (0, _v22.useEffect)(() => {
      (async _v0 => {
        if (_v8 && _v0) {
          let _v0 = (_v0 => {
              let _v1,
                _v2 = _v0.split(","),
                _v3 = new Uint8Array(new ArrayBuffer((_v1 = _v2[0].indexOf("base64") >= 0 ? atob(_v2[1]) : decodeURIComponent(_v2[1])).length));
              for (let _v0 = 0; _v0 < _v1.length; _v0 += 1) _v3[_v0] = _v1.charCodeAt(_v0);
              return new Blob([_v3], {
                type: _v2[0].split(":")[1].split(";")[0]
              });
            })(_v8.src),
            _v1 = new File([_v0], "profile_pic"),
            _v2 = await fetch(_v0, {
              method: "PUT",
              body: _v1,
              headers: {
                "Content-Type": _v0.type
              }
            });
          _v2.ok && _v2.json().then(_v0 => {
            "success" === _v0.Status.toLowerCase() && _v11((0, _v50.getIdFromUri)(_v0.Path));
          });
        }
      })(_v15?.link);
    }, [_v15]), (0, _v22.useEffect)(() => {
      _v17 && (_v0(_v17), _v9(void 0), _v7(!1), _v13());
    }, [_v17]), (0, _v22.useEffect)(() => {
      let _v0 = _v5.current?.calculateCropSize();
      _v10 && _v0 && (_v16({
        variables: {
          active: !0,
          picture_prefs: {
            subrect: Object.values(_v0).join(","),
            r: "cover"
          }
        }
      }), _v11(null));
    }, [_v10]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsxs)(_v621, {
        onClick: () => {
          _v3?.(), _v4.current?.click();
        },
        className: _v2,
        children: [_v1, (0, _v14.jsx)(_v620, {
          ref: _v4,
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
              _v7(!0), _v0 = new FileReader(), _v1 = new Image(), _v2 = document.createElement("canvas"), _v0.onload = _v0 => {
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
                          if ((_v3 = _v618(_v0, _v6, _v6 + _v7, _v617, _v2)).ExifIFDPointer) for (_v4 in _v5 = _v618(_v0, _v6, _v6 + _v3.ExifIFDPointer, _v616, _v2)) _v3[_v4] = _v5[_v4];
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
                      _v0.name = _v3.name, _v9(_v0);
                    })(_v2));
                  })(_v1), _v1.src = _v2;
                }
              }, _v0.readAsArrayBuffer(_v3), _v1.value = "";
            }
          }
        })]
      }), _v6 && (0, _v14.jsx)(_v622, {
        active: _v6,
        onOpen: () => _v7(!1),
        content: (0, _v14.jsx)(_v606, {
          image: _v8,
          ref: _v5,
          onSubmit: () => _v14({}),
          onDismiss: () => {
            _v7(!1), _v9(void 0);
          }
        })
      })]
    });
  }
  let _v620 = _v33.default.input.withConfig({
      displayName: "ImagePickerAndUploader__HiddenInput",
      componentId: "sc-b5e8b07e-0"
    })`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
`,
    _v621 = _v33.default.div.withConfig({
      displayName: "ImagePickerAndUploader__ClickableDiv",
      componentId: "sc-b5e8b07e-1"
    })`
  cursor: pointer;
`,
    _v622 = (0, _v33.default)(_v56.Modal).withConfig({
      displayName: "ImagePickerAndUploader__UploadPreviewModal",
      componentId: "sc-b5e8b07e-2"
    })`
  width: 90vw;
  height: 85vh;
  max-width: ${(0, _v51.rem)(506)};
  max-height: ${(0, _v51.rem)(516)};
`;
  function _v623({
    editMode: _v0,
    picture: _v1,
    name: _v2
  }) {
    let _v3 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        userId: _v4
      } = (0, _v22.useContext)(_v43.default),
      {
        updateProfilePicture: _v5
      } = _v299(),
      {
        trackUserProfileEditFieldClicked: _v6
      } = (0, _v30.useProfileTracking)(),
      _v7 = (0, _v22.useMemo)(() => _v1.sizes[3].link, [_v1.sizes]),
      _v8 = (0, _v22.useMemo)(() => _v119(_v1), [_v1]),
      _v9 = "default" === _v1.type;
    return (0, _v14.jsx)(_v624, {
      children: (0, _v14.jsx)(_v625, {
        isDefaultPic: _v9,
        children: _v0 ? (0, _v14.jsxs)(_v619, {
          onChange: _v0 => {
            if (_v5(_v0), _v3?.user && _v3.setUser) {
              let _v0 = _v3.user;
              _v3.setUser({
                ..._v0,
                pictures: _v0
              });
            }
          },
          className: "container",
          onEditStart: () => _v6({
            userProfilePageUserId: String(_v4),
            userProfileEditField: "avatar"
          }),
          children: [(0, _v14.jsx)(_v114.Avatar, {
            alt: _v2,
            src: _v7,
            srcSet: _v8,
            size: "3xl",
            nameProps: {
              name: _v2
            }
          }), (0, _v14.jsx)(_v626, {
            isDefaultPic: _v9,
            className: "content",
            children: _v66.default.UploadPicture
          })]
        }) : (0, _v14.jsx)(_v114.Avatar, {
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
  let _v624 = _v33.default.div.withConfig({
      displayName: "ProfileAvatar__Wrapper",
      componentId: "sc-1d8aea17-0"
    })`
  position: relative;
  margin-top: -${(0, _v51.rem)(35)};

  ${_v61.media.sm`
    margin-top: -${(0, _v51.rem)(20)};
  `};
  ${_v61.media.md`
    margin-top: 0;
    margin-left: ${(0, _v51.rem)(10)};
  `}
`,
    _v625 = _v33.default.div.withConfig({
      displayName: "ProfileAvatar__ImageWrapper",
      componentId: "sc-1d8aea17-1"
    })`
  height: ${(0, _v51.rem)(122)};
  width: ${(0, _v51.rem)(122)};
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({
      isDefaultPic: _v0
    }) => !_v0 && _v33.css`
      &:hover .container .content {
        bottom: -60%;
      }
      /* one or more available input mechanism(s) cannot hover or there are no pointing input mechanisms */
      @media (any-hover: none) {
        .container .content {
          bottom: -60%;
        }
      }
    `}
`,
    _v626 = _v33.default.div.withConfig({
      displayName: "ProfileAvatar__UploadText",
      componentId: "sc-1d8aea17-2"
    })`
  height: 100%;
  left: 0;
  position: absolute;
  transition: bottom 0.2s ease;
  width: 100%;
  color: ${_v53.bokehTheme.colors.gray["50"]};
  font-size: ${(0, _v51.rem)(14)};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${(0, _v51.rem)(16)};
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding-top: ${(0, _v51.rem)(6)};
  word-spacing: 100vw;
  ${({
      isDefaultPic: _v0
    }) => _v0 ? _v33.css`
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        ` : _v33.css`
          bottom: -100%;
        `}
`;
  function _v627(_v0) {
    let {
        name: _v1,
        canEditPersonalInfo: _v2,
        isExpert: _v3
      } = _v0,
      {
        editMode: _v4
      } = (0, _v22.useContext)(_v43.default);
    return (0, _v14.jsx)(_v634, {
      children: _v4 && _v2 ? (0, _v14.jsx)(_v628, {
        ..._v0
      }) : (0, _v14.jsx)(_v632, {
        editMode: !1,
        children: (0, _v14.jsxs)("span", {
          children: [(0, _v14.jsx)(_v637, {
            children: _v1
          }), _v3 && (0, _v14.jsx)(_v635, {})]
        })
      })
    });
  }
  function _v628({
    name: _v0,
    onNameSubmit: _v1,
    isExpert: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)("");
    return (0, _v14.jsx)(_v630, {
      tabIndex: 0,
      onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => {
        _v3 || _v4(!0);
      }, !1),
      children: _v3 ? (0, _v14.jsxs)(_v633, {
        hasError: !!_v5.length,
        children: [(0, _v14.jsx)(_v293, {
          value: _v0,
          onSubmit: _v0 => {
            let _v1;
            return _v6(""), void ((_v1 = _v0.trim()) ? _v1.length && _v1.length <= _v49.PROFILE_NAME_MAX_LENGTH ? (_v0 !== _v1 && _v1({
              name: _v1
            }), _v4(!1)) : _v1.length > _v49.PROFILE_NAME_MAX_LENGTH && _v6(_v66.default.TooLongNameError) : _v6(_v66.default.NameIsRequired));
          },
          errorMsg: _v5,
          onChange: () => _v6("")
        }), !!_v5 && (0, _v14.jsx)(_v72, {
          children: _v5
        })]
      }) : (0, _v14.jsx)(_v631, {
        children: (0, _v14.jsx)(_v632, {
          editMode: !0,
          onClick: () => _v4(!0),
          children: (0, _v14.jsxs)("span", {
            children: [(0, _v14.jsx)(_v637, {
              children: _v0
            }), _v2 && (0, _v14.jsx)(_v635, {}), (0, _v14.jsx)(_v636, {
              children: (0, _v14.jsx)(_v80, {
                inlineMargin: !0,
                onClick: () => _v4(!0)
              })
            })]
          })
        })
      })
    });
  }
  let _v629 = _v33.css`
  font-family: inherit;
  font-size: ${(0, _v51.rem)(28)};
  font-weight: bold;
  min-height: ${(0, _v51.rem)(45)};
  letter-spacing: ${(0, _v51.rem)(-.7)};
  display: flex;
  flex-direction: column;
  justify-content: center;
`,
    _v630 = _v33.default.div.withConfig({
      displayName: "ProfileName__EditWrapper",
      componentId: "sc-7ef945a6-0"
    })`
  &:hover {
    outline: none;
  }
`,
    _v631 = _v33.default.div.withConfig({
      displayName: "ProfileName__EditViewWrapper",
      componentId: "sc-7ef945a6-1"
    })`
  padding: ${(0, _v51.rem)(5.5)} 0;

  ${_v61.media.md`
    padding: 0;
  `}
`,
    _v632 = _v33.default.div.withConfig({
      displayName: "ProfileName__Name",
      componentId: "sc-7ef945a6-2"
    })`
  ${_v629}
  padding: 0 ${(0, _v51.rem)(10)};

  ${_v61.media.md`
    margin-top: ${(0, _v51.rem)(4)};
  `}
  word-break: break-word;
  box-sizing: border-box;
  border: ${(0, _v51.rem)(1)} solid transparent; // To fix moving of text by a px
  ${({
      editMode: _v0
    }) => _v0 && _v73}
`,
    _v633 = _v33.default.div.withConfig({
      displayName: "ProfileName__InputFieldContainer",
      componentId: "sc-7ef945a6-3"
    })`
  position: relative;
  margin-top: ${(0, _v51.rem)(4)};
  input {
    ${_v629}
    padding: ${(0, _v51.rem)(4.7)} ${(0, _v51.rem)(36)} ${(0, _v51.rem)(4.7)} ${(0, _v51.rem)(10)};
  }
`,
    _v634 = _v33.default.div.withConfig({
      displayName: "ProfileName__Container",
      componentId: "sc-7ef945a6-4"
    })`
  margin-top: ${(0, _v51.rem)(10)};
  ${_v61.media.md`
    margin-top: 0;
  `}
`,
    _v635 = (0, _v33.default)(_v169).withConfig({
      displayName: "ProfileName__StyledExpertsBadge",
      componentId: "sc-7ef945a6-5"
    })`
  transform: translateY(-${(0, _v51.rem)(4)});
  border-radius: ${(0, _v51.rem)(2)};
  font-size: ${(0, _v51.rem)(9)};
  width: fit-content;
  display: inline-block;
  a {
    font-weight: 700;
    padding: ${(0, _v51.rem)(2)} ${(0, _v51.rem)(4)};
  }
`,
    _v636 = _v33.default.div.withConfig({
      displayName: "ProfileName__EditIconWrapper",
      componentId: "sc-7ef945a6-6"
    })`
  display: inline;
  div {
    transform: translateY(-${(0, _v51.rem)(4)});
  }
`,
    _v637 = _v33.default.h1.withConfig({
      displayName: "ProfileName__NameText",
      componentId: "sc-7ef945a6-7"
    })`
  margin-right: ${(0, _v51.rem)(8)};
  display: inline;
  margin-top: 0;
  margin-bottom: 0;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
`;
  var _v638 = _v0.i(0);
  function _v639(_v0) {
    let {
        gender: _v1,
        pronounsList: _v2
      } = _v0,
      _v3 = (0, _v22.useMemo)(() => _v2.find(_v0 => _v0.value === _v1) || _v2[0], [_v1, _v2]),
      {
        editMode: _v4
      } = (0, _v22.useContext)(_v43.default);
    return _v4 ? (0, _v14.jsx)(_v649, {
      children: (0, _v14.jsx)(_v640, {
        selected: _v3,
        ..._v0
      })
    }) : _v3.hideValue ? null : (0, _v14.jsx)(_v649, {
      children: (0, _v14.jsx)(_v648, {
        size: "2",
        children: _v3.label
      })
    });
  }
  function _v640({
    gender: _v0,
    pronounsList: _v1,
    selected: _v2,
    onPronounUpdate: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(!1),
      [_v6, _v7] = (0, _v22.useState)(0),
      _v8 = (0, _v22.useMemo)(() => _v0 ? _v1.findIndex(_v0 => _v0.value === _v0) : 0, [_v0, _v1]),
      _v9 = (0, _v22.useRef)(null),
      _v10 = _v0 => {
        _v0.label !== _v2?.label && _v3({
          gender: _v0.value
        });
      },
      _v11 = () => {
        _v10(_v2), _v5(!1);
      };
    return (0, _v482.default)(_v4 ? _v9 : null, _v11, null, [_v2, _v4]), (0, _v22.useEffect)(() => _v7(_v8), [_v8, _v4]), (0, _v14.jsxs)(_v641, {
      ref: _v9,
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v0.keyCode === _v49.KeyCodes.UP ? (_v7(_v6 > 0 ? _v6 - 1 : _v6), _v0.preventDefault()) : _v0.keyCode === _v49.KeyCodes.DOWN ? (_v7(_v6 < _v1.length - 1 ? _v6 + 1 : _v6), _v0.preventDefault()) : _v0.keyCode === _v49.KeyCodes.ENTER ? _v4 ? (_v10(_v1[_v6]), _v5(!1), _v9.current?.blur()) : _v5(!0) : _v0.keyCode === _v49.KeyCodes.TAB ? _v11() : _v0.keyCode === _v49.KeyCodes.ESC && _v5(!1);
      },
      hideOutline: _v4,
      children: [(0, _v14.jsxs)(_v642, {
        className: _v4 ? "" : "pronouns-edit-mode",
        children: [(0, _v14.jsxs)(_v643, {
          onClick: () => _v5(!0),
          children: [_v2.label, (0, _v14.jsx)(_v644, {
            children: (0, _v14.jsx)(_v638.ChevronDownSmall, {})
          })]
        }), _v4 && (0, _v14.jsx)(_v646, {
          children: _v1.map((_v0, _v1) => (0, _v14.jsxs)(_v647, {
            isActive: _v1 === _v6,
            onMouseEnter: () => {
              _v7(_v1);
            },
            onClick: () => {
              _v10(_v0), _v5(!1);
            },
            children: [_v2.value === _v0.value && (0, _v14.jsx)(_v645, {
              children: (0, _v14.jsx)(_v416.Checkmark, {})
            }), _v0.label]
          }, `option-${_v1}`))
        })]
      }), !_v4 && (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v648, {
          className: "pronouns-view-mode",
          size: "2",
          onClick: () => _v5(!0),
          children: _v2.label
        }), (0, _v14.jsx)(_v80, {
          onClick: () => _v5(!0)
        })]
      })]
    });
  }
  let _v641 = _v33.default.div.withConfig({
      displayName: "Pronouns__Wrapper",
      componentId: "sc-2df3b80-0"
    })`
  .pronouns-edit-mode {
    display: none;
  }

  ${_v61.media.mlg`
    &:hover {
      outline: none;
      .pronouns-edit-mode {
        display: flex;
      }
      .pronouns-view-mode {
        display: none;
      }
    }
  `}

  ${({
      hideOutline: _v0
    }) => _v0 && _v33.css`
      &:focus {
        outline: none;
      }
    `}
`,
    _v642 = _v33.default.div.withConfig({
      displayName: "Pronouns__DropdownWrapper",
      componentId: "sc-2df3b80-1"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _v643 = _v33.default.div.withConfig({
      displayName: "Pronouns__DropdownContainer",
      componentId: "sc-2df3b80-2"
    })`
  width: 100%;
  padding: ${(0, _v51.rem)(11)} ${(0, _v51.rem)(9)};
  cursor: pointer;
  font-size: ${(0, _v51.rem)(14)};
  font-weight: 500;
  letter-spacing: ${(0, _v51.rem)(.16)};
  display: flex;
  justify-content: space-between;
  border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["100"]};
  border-radius: ${(0, _v51.rem)(3)};
`,
    _v644 = _v33.default.div.withConfig({
      displayName: "Pronouns__IconWrapper",
      componentId: "sc-2df3b80-3"
    })`
  display: inline-block;
  height: ${(0, _v51.rem)(10)};
  width: ${(0, _v51.rem)(21)};
`,
    _v645 = (0, _v33.default)(_v644).withConfig({
      displayName: "Pronouns__CheckIconWrapper",
      componentId: "sc-2df3b80-4"
    })`
  svg path {
    fill: ${_v53.bokehTheme.colors.blue["500"]};
  }
  vertical-align: sub;
  position: absolute;
  left: ${(0, _v51.rem)(5)};
`,
    _v646 = _v33.default.ul.withConfig({
      displayName: "Pronouns__OptionsContainer",
      componentId: "sc-2df3b80-5"
    })`
  min-width: ${(0, _v51.rem)(235)};
  background: ${_v53.bokehTheme.colors.white};
  box-shadow:
    0 0 ${(0, _v51.rem)(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${(0, _v51.rem)(4)} ${(0, _v51.rem)(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: ${(0, _v51.rem)(3)};
  position: absolute;
  color: ${_v53.bokehTheme.colors.gray["800"]};
  overflow: auto;
  padding: ${(0, _v51.rem)(10)};
  margin-top: ${(0, _v51.rem)(80)};
  border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["100"]};
  z-index: 1;
`,
    _v647 = _v33.default.li.withConfig({
      displayName: "Pronouns__OptionItem",
      componentId: "sc-2df3b80-6"
    })`
  height: ${(0, _v51.rem)(30)};
  font-size: ${(0, _v51.rem)(14)};
  line-height: ${(0, _v51.rem)(20)};
  padding: ${(0, _v51.rem)(5)} 0 ${(0, _v51.rem)(5)} ${(0, _v51.rem)(30)};
  cursor: pointer;
  position: relative;
  ${({
      isActive: _v0
    }) => _v0 && _v33.css`
      background-color: ${_v53.bokehTheme.colors.gray["50"]};
    `}
`,
    _v648 = (0, _v33.default)(_v57.Paragraph).withConfig({
      displayName: "Pronouns__SelectedValue",
      componentId: "sc-2df3b80-7"
    })`
  color: ${_v53.bokehTheme.colors.gray["800"]};
  font-weight: 500;
  padding: ${(0, _v51.rem)(10.5)} ${(0, _v51.rem)(6)} ${(0, _v51.rem)(10.5)} ${(0, _v51.rem)(10)};
  margin-bottom: 0;
  display: inline-block;
  pointer-events: none;
  ${_v61.media.md`
    display: flex;
    pointer-events: auto;
  `};
`,
    _v649 = _v33.default.div.withConfig({
      displayName: "Pronouns__Container",
      componentId: "sc-2df3b80-8"
    })`
  margin-top: ${(0, _v51.rem)(2)};
`;
  var _v650 = _v0.i(0),
    _v651 = _v0.i(0),
    _v652 = _v0.i(0),
    _v653 = _v0.i(0),
    _v654 = _v0.i(0),
    _v655 = _v0.i(0),
    _v656 = _v0.i(0),
    _v657 = _v0.i(0),
    _v658 = _v0.i(0),
    _v659 = _v0.i(0),
    _v660 = _v0.i(0);
  let _v661 = (_v0, _v1) => {
    let {
      top: _v2,
      height: _v3
    } = _v0.currentTarget.getBoundingClientRect();
    return _v0.clientY > _v2 + _v3 / 2 ? _v1 + 1 : _v1;
  };
  function _v662({
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
      _v14 = (0, _v22.useMemo)(() => 0 === _v2, [_v2]),
      _v15 = (0, _v22.useMemo)(() => _v2 === _v3 - 1, [_v2, _v3]),
      _v16 = (0, _v22.useMemo)(() => _v6?.sectionUri === _v1 && _v6.itemIndex === _v2, [_v6, _v2, _v1]),
      _v17 = (0, _v22.useMemo)(() => _v13 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v2, [_v7, _v13, _v2, _v1]),
      _v18 = (0, _v22.useMemo)(() => {
        if (!_v13) return !1;
        let _v0 = _v7?.sectionUri === _v1 && _v7.itemIndex === _v3;
        return _v7?.sectionUri === _v1 && _v7.itemIndex === _v2 + 1 && !(_v0 && _v2 === _v3 - 1);
      }, [_v7, _v13, _v2, _v3, _v1]),
      _v19 = (0, _v22.useMemo)(() => _v13 && _v14 && _v7?.sectionUri === _v1 && 0 === _v7.itemIndex, [_v7, _v13, _v14, _v1]),
      _v20 = (0, _v22.useMemo)(() => _v13 && _v15 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v3, [_v7, _v13, _v15, _v3, _v1]),
      _v21 = (0, _v22.useCallback)(() => _v9({
        sectionUri: _v1,
        itemIndex: _v2
      }), [_v2, _v9, _v1]),
      _v22 = (0, _v22.useCallback)(_v0 => {
        _v8?.(_v0), _v0.preventDefault(), _v6 && _v10({
          sectionUri: _v1,
          itemIndex: _v661(_v0, _v2)
        });
      }, [_v6, _v2, _v8, _v10, _v1]),
      _v23 = (0, _v22.useCallback)(_v0 => {
        _v0.preventDefault(), _v11({
          sectionUri: _v1,
          itemIndex: _v661(_v0, _v2)
        }), _v12(_v0);
      }, [_v2, _v11, _v12, _v1]);
    return (0, _v14.jsxs)(_v656.Flex, {
      as: "li",
      draggable: !_v5,
      alignItems: "center",
      gap: (0, _v658.rem)(14),
      padding: `${(0, _v658.rem)(10)} ${(0, _v658.rem)(16)}`,
      borderTopWidth: _v19 ? (0, _v658.rem)(2) : 0,
      borderTopStyle: "solid",
      borderTopColor: _v19 ? "gray.500" : "transparent",
      borderBottomWidth: _v18 || _v20 ? (0, _v658.rem)(2) : _v4 ? (0, _v658.rem)(1) : 0,
      borderBottomStyle: "solid",
      borderBottomColor: _v18 || _v20 ? "gray.500" : "gray.300",
      background: _v17 ? "blackAlpha.50" : "transparent",
      opacity: _v16 ? .45 : 1,
      cursor: "grab",
      onDragStart: _v21,
      onDragOver: _v22,
      onDrop: _v23,
      onDragEnd: _v12,
      children: [(0, _v14.jsx)(_v654.Box, {
        as: "span",
        display: "inline-flex",
        className: "drag-handle",
        children: (0, _v14.jsx)(_v660.DragV, {
          boxSize: (0, _v658.rem)(18),
          color: "text-primary"
        })
      }), (0, _v14.jsxs)(_v654.Box, {
        width: (0, _v658.rem)(98),
        minWidth: (0, _v658.rem)(98),
        height: (0, _v658.rem)(56),
        borderRadius: (0, _v658.rem)(8),
        overflow: "hidden",
        position: "relative",
        background: "gray.300",
        children: [(0, _v14.jsx)(_v659.Image, {
          src: _v0.display.thumbnail,
          alt: _v0.display.videoName,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block"
        }), (0, _v14.jsx)(_v654.Box, {
          as: "span",
          position: "absolute",
          right: (0, _v658.rem)(6),
          bottom: (0, _v658.rem)(6),
          borderRadius: (0, _v658.rem)(10),
          padding: `${(0, _v658.rem)(2)} ${(0, _v658.rem)(6)}`,
          background: "blackAlpha.700",
          color: "white",
          fontSize: (0, _v658.rem)(9),
          lineHeight: (0, _v658.rem)(12),
          fontWeight: 700,
          children: _v0.display.duration
        })]
      }), (0, _v14.jsxs)(_v654.Box, {
        minWidth: 0,
        children: [(0, _v14.jsx)(_v24.Text, {
          as: "div",
          variant: "body-md",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginBottom: (0, _v658.rem)(1),
          children: _v0.display.videoName
        }), (0, _v14.jsx)(_v24.Text, {
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
  function _v663({
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
          _v3 = (0, _v22.useMemo)(() => {
            let _v0, _v1;
            return _v0 = _v0.items.some(_v0 => !_v0.sectionClip), _v1 = _v0.items.length < _v0.section.videos.total, _v0 || _v1;
          }, [_v0]),
          {
            data: _v4,
            isValidating: _v5,
            setSize: _v6
          } = _v514(_v2, _v0.section.videos.data, _v0.section.videos.total, _v3),
          _v7 = (0, _v22.useRef)(!1),
          _v8 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v4), [_v4]),
          _v9 = (0, _v22.useMemo)(() => !!(0, _v50.hasNext)(_v4), [_v4]),
          _v10 = (0, _v22.useCallback)(_v0 => {
            _v0.length && _v1(_v0 => {
              let _v1;
              return _v1 = new Set(_v0.flatMap(_v0 => _v0.items.map(_v0 => _v0.clipUri))), _v0.map(_v0 => {
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
                return _v0.forEach(_v0 => {
                  let _v1 = _v0.clip.uri,
                    _v2 = _v4.has(_v1),
                    _v3 = _v1.has(_v1) && !_v2;
                  _v2 || _v3 || (_v2 = !0, _v4.add(_v1), _v3.push({
                    clipUri: _v1,
                    sectionUri: _v2,
                    sectionClip: _v0
                  }));
                }), _v2 ? {
                  ..._v0,
                  items: _v3
                } : _v0;
              });
            });
          }, [_v2, _v1]);
        (0, _v22.useEffect)(() => {
          _v10(_v8);
        }, [_v10, _v8]);
        let _v11 = (0, _v22.useCallback)(() => {
          _v3 && _v9 && !_v5 && !_v7.current && _v6 && (_v7.current = !0, Promise.resolve(_v6(_v0 => (_v0 || 0) + 1)).catch(() => {}).finally(() => {
            _v7.current = !1;
          }));
        }, [_v9, _v5, _v6, _v3]);
        return (0, _v22.useEffect)(() => {
          _v3 && _v9 && _v11();
        }, [_v9, _v11, _v8.length, _v3]), {
          isFetchingVideosInSection: _v3 && (_v5 || _v9)
        };
      }({
        group: _v0,
        setSectionGroups: _v9
      }),
      _v20 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v14(_v0);
      }, [_v19, _v14]),
      _v21 = (0, _v22.useCallback)(_v0 => {
        _v0.preventDefault(), _v19 || _v15();
      }, [_v19, _v15]),
      _v22 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v12(_v0);
      }, [_v19, _v12]),
      _v23 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v13(_v0);
      }, [_v19, _v13]),
      _v24 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v11(_v0);
      }, [_v19, _v11]);
    if ((0, _v22.useEffect)(() => {
      _v10(_v17.uri, _v19);
    }, [_v19, _v10, _v17.uri]), (0, _v22.useEffect)(() => () => {
      _v10(_v17.uri, !1);
    }, [_v10, _v17.uri]), !_v18.some(_v0 => !!_v0.sectionClip)) return null;
    let _v25 = _v17.title?.trim() || `${_v16} ${_v1 + 1}`;
    return (0, _v14.jsxs)(_v654.Box, {
      as: "li",
      listStyleType: "none",
      position: "relative",
      borderRadius: _v5 ? (0, _v658.rem)(10) : 0,
      background: _v5 ? "gray.100" : "transparent",
      overflow: _v5 ? "hidden" : "visible",
      marginBottom: _v5 && _v1 < _v2 - 1 ? (0, _v658.rem)(10) : 0,
      children: [_v5 ? (0, _v14.jsx)(_v24.Text, {
        variant: "heading-sm",
        margin: 0,
        padding: `${(0, _v658.rem)(10)} ${(0, _v658.rem)(14)}`,
        background: "fill-component-hover",
        borderBottomWidth: (0, _v658.rem)(1),
        borderBottomStyle: "solid",
        borderBottomColor: "gray.300",
        children: _v25
      }) : null, (0, _v14.jsx)(_v654.Box, {
        pointerEvents: _v19 ? "none" : "auto",
        children: _v18.map((_v0, _v1) => {
          if (!_v0.sectionClip) return null;
          let _v2 = _v3 + _v1 === _v4 - 1,
            _v3 = _v5 ? _v1 < _v18.length - 1 : !_v2;
          return (0, _v14.jsx)(_v662, {
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
      }), _v19 ? (0, _v14.jsx)(_v656.Flex, {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.28)",
        children: (0, _v14.jsx)(_v34.Spinner, {
          size: "md"
        })
      }) : null]
    });
  }
  let _v664 = _v0 => _v0.videos?.data || [];
  function _v665({
    sections: _v0,
    hasNextSections: _v1,
    loadingNextSections: _v2,
    onLoadNextSections: _v3,
    onDismiss: _v4
  }) {
    let {
        cache: _v5,
        mutate: _v6
      } = (0, _v513.useSWRConfig)(),
      _v7 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      {
        mutate: _v8
      } = (0, _v22.useContext)(_v42),
      _v9 = (0, _v45.default)(),
      {
        trackUserProfileReorderSaved: _v10,
        trackUserProfileVideoReordered: _v11
      } = (0, _v30.useProfileTracking)(),
      _v12 = (0, _v22.useMemo)(() => _v0.map(_v0 => {
        let _v1 = new Map(_v664(_v0).map(_v0 => [_v0.clip.uri, _v0])),
          _v2 = (_v0.clipUris?.length ? _v0.clipUris : _v664(_v0).map(_v0 => _v0.clip.uri)).map(_v0 => ({
            clipUri: _v0,
            sectionUri: _v0.uri,
            sectionClip: _v1.get(_v0)
          }));
        return {
          section: _v0,
          items: _v2
        };
      }), [_v0]),
      [_v13, _v14] = (0, _v22.useState)(_v12),
      [_v15, _v16] = (0, _v22.useState)({}),
      [_v17, _v18] = (0, _v22.useState)(!1),
      _v19 = (0, _v22.useRef)(!1);
    (0, _v22.useEffect)(() => {
      if (!_v19.current) {
        _v14(_v12), _v19.current = !0;
        return;
      }
      _v14(_v0 => {
        let _v1 = new Map(_v0.map(_v0 => [_v0.section.uri, _v0])),
          _v2 = [..._v0];
        return _v12.forEach(_v0 => {
          _v1.has(_v0.section.uri) || _v2.push(_v0);
        }), _v2.map(_v0 => {
          let _v1 = _v12.find(_v0 => _v0.section.uri === _v0.section.uri);
          return _v1 ? {
            ..._v0,
            section: _v1.section
          } : _v0;
        });
      });
    }, [_v12]);
    let _v20 = (0, _v22.useMemo)(() => _v13.map(_v0 => ({
        ..._v0,
        items: _v0.items.map(_v0 => {
          let _v1, _v2, _v3;
          return {
            ..._v0,
            display: (_v1 = _v0.sectionClip?.clip, _v2 = _v1?.name || _v66.default.Video, _v3 = _v1?.pictures?.sizes?.length ? _v144(_v1.pictures.sizes, 160) : "", {
              videoName: _v2,
              thumbnail: _v3,
              duration: _v95(_v1?.duration || 0),
              uploadedOn: _v1?.createdTime ? `${_v66.default.Uploaded} ${_v96(_v1.createdTime, "en", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}` : _v66.default.Uploaded
            })
          };
        })
      })), [_v13]),
      _v21 = (0, _v22.useMemo)(() => {
        let _v0 = _v13.some(({
          section: _v0
        }) => !!_v0.title && _v0.title.trim().length > 0);
        return _v13.length > 1 || _v0;
      }, [_v13]),
      _v22 = (0, _v22.useMemo)(() => _v13.reduce((_v0, _v1) => _v0 + _v1.items.length, 0), [_v13]),
      _v23 = (0, _v22.useMemo)(() => {
        let _v0 = 0;
        return _v13.map(_v0 => {
          let _v1 = _v0;
          return _v0 += _v0.items.length, _v1;
        });
      }, [_v13]),
      {
        dragOrigin: _v24,
        dragTarget: _v25,
        listRef: _v26,
        onDragEnd: _v27,
        onDrop: _v28,
        onListDragOverForAutoScroll: _v29,
        onRowDragStart: _v30,
        onTargetChange: _v31
      } = function ({
        setSectionGroups: _v0
      }) {
        let _v1 = (0, _v22.useRef)(null),
          _v2 = (0, _v22.useRef)(null),
          _v3 = (0, _v22.useRef)(null),
          _v4 = (0, _v22.useRef)(0),
          [_v5, _v6] = (0, _v22.useState)(null),
          [_v7, _v8] = (0, _v22.useState)(null),
          _v9 = (0, _v22.useCallback)(_v0 => {
            (_v7?.sectionUri !== _v0.sectionUri || _v7.itemIndex !== _v0.itemIndex) && _v8(_v0);
          }, [_v7]),
          _v10 = (0, _v22.useCallback)(() => {
            null !== _v2.current && (cancelAnimationFrame(_v2.current), _v2.current = null), _v3.current = null, _v4.current = 0;
          }, []),
          _v11 = (0, _v22.useCallback)(() => {
            if (null !== _v2.current) return;
            let _v0 = () => {
              let _v0 = _v1.current,
                _v1 = _v3.current,
                _v2 = _v4.current;
              if (!_v0 || null == _v1 || performance.now() - _v2 > 120) {
                _v2.current = null;
                return;
              }
              let _v3 = _v0.getBoundingClientRect(),
                _v4 = 0;
              _v1 < _v3.top + 72 ? _v4 = -Math.min(18, Math.max(2, (_v3.top + 72 - _v1) / 4)) : _v1 > _v3.bottom - 72 && (_v4 = Math.min(18, Math.max(2, (_v1 - (_v3.bottom - 72)) / 4))), 0 !== _v4 && (_v0.scrollTop += _v4), _v2.current = requestAnimationFrame(_v0);
            };
            _v2.current = requestAnimationFrame(_v0);
          }, []),
          _v12 = (0, _v22.useCallback)(_v0 => {
            _v3.current = _v0.clientY, _v4.current = performance.now(), _v11();
          }, [_v11]),
          _v13 = (0, _v22.useCallback)(_v0 => {
            _v6(_v0), _v9(_v0);
          }, [_v9]),
          _v14 = (0, _v22.useCallback)(() => {
            _v6(null), _v8(null), _v10();
          }, [_v10]);
        (0, _v22.useEffect)(() => {
          !_v5 && _v7 && _v8(null);
        }, [_v5, _v7]), (0, _v22.useEffect)(() => _v10, [_v10]);
        let _v15 = (0, _v22.useCallback)(_v0 => {
          if (!_v5) {
            _v8(null), _v10();
            return;
          }
          _v0(_v0 => ((_v0, _v1, _v2) => {
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
          })(_v0, _v5, _v0)), _v6(null), _v8(null), _v10();
        }, [_v5, _v0, _v10]);
        return {
          dragOrigin: _v5,
          dragTarget: _v7,
          listRef: _v1,
          onDragEnd: _v14,
          onDrop: _v15,
          onListDragOverForAutoScroll: _v12,
          onRowDragStart: _v13,
          onTargetChange: _v9
        };
      }({
        setSectionGroups: _v14
      }),
      _v32 = (0, _v22.useCallback)(_v0 => {
        let _v1 = !!_v24;
        _v28(_v0), _v1 && _v11();
      }, [_v28, _v24, _v11]),
      {
        onListScrollRequestNextSections: _v33
      } = function ({
        hasNextSections: _v0,
        loadingNextSections: _v1,
        onLoadNextSections: _v2
      }) {
        let _v3 = (0, _v22.useRef)(!1);
        (0, _v22.useEffect)(() => {
          _v1 || (_v3.current = !1);
        }, [_v1]);
        let _v4 = (0, _v22.useCallback)(() => {
          _v3.current || !_v0 || _v1 || (_v3.current = !0, _v2());
        }, [_v0, _v1, _v2]);
        return {
          onListScrollRequestNextSections: (0, _v22.useCallback)(_v0 => {
            let _v1 = _v0.currentTarget;
            _v1.scrollTop + _v1.clientHeight >= _v1.scrollHeight - 120 && _v4();
          }, [_v4])
        };
      }({
        hasNextSections: _v1,
        loadingNextSections: _v2,
        onLoadNextSections: _v3
      }),
      _v34 = (0, _v22.useCallback)(_v0 => {
        _v33(_v0);
      }, [_v33]),
      _v35 = (0, _v22.useCallback)((_v0, _v1) => {
        _v16(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []);
    (0, _v22.useEffect)(() => {
      let _v0 = new Set(_v13.map(_v0 => _v0.section.uri));
      _v16(_v0 => {
        let _v1 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v0.has(_v1) && (_v0[_v1] = _v2), _v0), {});
        return Object.keys(_v0).some(_v0 => !(_v0 in _v1)) ? _v1 : _v0;
      });
    }, [_v13]);
    let _v36 = (0, _v22.useMemo)(() => Object.values(_v15).some(Boolean), [_v15]),
      _v37 = (0, _v22.useMemo)(() => {
        var _v0, _v1;
        let _v2, _v3;
        return _v0 = _v12, _v1 = _v13, _v2 = _v0.map(_v0 => ({
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
      }, [_v12, _v13]),
      _v38 = (0, _v22.useMemo)(() => _v36 || _v2 || _v17 || 0 === _v22, [_v36, _v2, _v17, _v22]),
      _v39 = (0, _v22.useCallback)(_v0 => {
        let _v1 = RegExp(`^${_v0.substring(1)}/videos`);
        (0, _v50.removeCacheKeys)(_v5, _v1);
        let _v2 = RegExp(`^\\$inf\\$${_v0.substring(1)}/videos`),
          _v3 = Array.from(_v5.keys()).find(_v0 => _v2.test(_v0));
        return _v3 ? _v6(_v3) : Promise.resolve();
      }, [_v5, _v6]),
      _v40 = (0, _v22.useCallback)(async () => {
        if (!_v38) {
          if (0 === _v37.length) return void _v4();
          _v18(!0);
          try {
            let _v0 = await _v9("me/profile_sections/videos/batch", void 0, _v49.HTTPMethods.PATCH, (0, _v47.decamelizeDeep)({
                operations: _v37
              })),
              _v1 = [...new Set((_v0?.affectedSections || []).map(_v0 => _v0.sectionUri))].filter(_v0 => "string" == typeof _v0);
            await Promise.all(_v1.map(_v0 => _v39(_v0))), await _v8(), _v10(), _v7(), _v4();
          } catch (_v0) {
            if (_v0 && "object" == typeof _v0 && "json" in _v0) {
              let _v0 = _v0.json ? _v0.json() : null;
              _v0 && _v0.then(_v0 => _v7({
                content: _v0.error,
                status: "negative"
              }));
            }
          } finally {
            _v18(!1);
          }
        }
      }, [_v38, _v4, _v7, _v37, _v39, _v9, _v8, _v10]);
    return (0, _v14.jsxs)(_v654.Box, {
      width: `min(90vw, ${(0, _v658.rem)(620)})`,
      background: "gray.100",
      borderRadius: (0, _v658.rem)(20),
      position: "relative",
      padding: `${(0, _v658.rem)(28)} ${(0, _v658.rem)(32)} ${(0, _v658.rem)(24)}`,
      boxShadow: "2xl",
      marginX: "auto",
      children: [(0, _v14.jsx)(_v657.Header, {
        size: "lg",
        marginBottom: (0, _v658.rem)(24),
        fontWeight: 700,
        children: _v66.default.ReorderContent
      }), (0, _v14.jsxs)(_v654.Box, {
        as: "ul",
        ref: _v26,
        margin: 0,
        padding: (0, _v658.rem)(12),
        listStyleType: "none",
        maxHeight: `min(${(0, _v658.rem)(440)}, 55vh)`,
        overflowY: "auto",
        borderRadius: (0, _v658.rem)(12),
        background: "gray.200",
        onScroll: _v34,
        children: [_v20.map((_v0, _v1) => (0, _v14.jsx)(_v663, {
          group: _v0,
          sectionIndex: _v1,
          sectionsCount: _v20.length,
          groupOffset: _v23[_v1] || 0,
          totalItems: _v22,
          showSectionWrappers: _v21,
          saving: _v17,
          dragOrigin: _v24,
          dragTarget: _v25,
          setSectionGroups: _v14,
          onSectionVideoFetchingChange: _v35,
          onListDragOver: _v29,
          onDragStart: _v30,
          onTargetChange: _v31,
          onDrop: _v32,
          onDragEnd: _v27,
          untitledSectionLabel: _v66.default.UntitledSection
        }, _v0.section.uri)), _v2 ? (0, _v14.jsx)(_v656.Flex, {
          as: "li",
          alignItems: "center",
          justifyContent: "center",
          listStyleType: "none",
          paddingY: (0, _v658.rem)(12),
          children: (0, _v14.jsx)(_v34.Spinner, {
            size: "md"
          })
        }) : null]
      }), (0, _v14.jsxs)(_v656.Flex, {
        justifyContent: "flex-end",
        gap: (0, _v658.rem)(10),
        paddingTop: (0, _v658.rem)(24),
        children: [(0, _v14.jsx)(_v655.Button, {
          variant: "tertiary",
          onClick: _v4,
          paddingX: (0, _v658.rem)(16),
          isDisabled: _v17,
          children: _v66.default.Cancel
        }), (0, _v14.jsx)(_v655.Button, {
          onClick: _v40,
          isDisabled: _v38 || _v17,
          children: _v66.default.SaveNewOrder
        })]
      })]
    });
  }
  function _v666({
    sections: _v0,
    isShowing: _v1,
    hasNextSections: _v2,
    loadingNextSections: _v3,
    onLoadNextSections: _v4,
    onDismiss: _v5
  }) {
    return ((0, _v287.default)(_v1 ? _v0 => (0, _v50.onEsc)(_v0, _v5) : void 0, [_v1, _v5]), _v0.length) ? (0, _v14.jsxs)(_v651.Modal, {
      isOpen: _v1,
      onClose: _v5,
      children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
        padding: 0,
        background: "transparent",
        boxShadow: "none",
        maxW: "none",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        children: (0, _v14.jsx)(_v665, {
          sections: _v0,
          hasNextSections: _v2,
          loadingNextSections: _v3,
          onLoadNextSections: _v4,
          onDismiss: _v5
        })
      })]
    }) : null;
  }
  let _v667 = (_v0, _v1, _v2, _v3) => _v0.showFeaturedComment || "2" === _v0.columnWidth || (_v2 - _v3) % 2 == 0 || _v1.showFeaturedComment || "2" === _v1.columnWidth;
  var _v668 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "800 1212 24 24",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M818,1225.2h-12c-0.55,0-1,0.45-1,1s0.45,1,1,1h4l1.11,2.21c0.25,0.49,0.85,0.69,1.34,0.45\n   c0.19-0.1,0.35-0.25,0.45-0.45l1.11-2.21h4c0.55,0,1-0.45,1-1S818.55,1225.2,818,1225.2z"
      }), _v22.default.createElement("path", {
        fill: "#474747",
        d: "M806,1221.62h12c0.55,0,1-0.45,1-1s-0.45-1-1-1h-4l-1.11-2.21c-0.1-0.19-0.25-0.35-0.45-0.45\n   c-0.49-0.25-1.09-0.05-1.34,0.45l-1.11,2.21h-4c-0.55,0-1,0.45-1,1S805.45,1221.62,806,1221.62z"
      }));
    }),
    _v669 = _v0.i(0);
  function _v670({
    title: _v0,
    disableUpwardMovement: _v1,
    disableDownwardMovement: _v2,
    onSubmit: _v3,
    moveSection: _v4,
    removeSection: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(!_v0),
      [_v8, _v9] = (0, _v22.useState)(_v0),
      [_v10, _v11] = (0, _v22.useState)(!1),
      _v12 = (0, _v22.useCallback)(_v0 => {
        _v0 ? _v0.length && _v0.length <= _v49.SECTION_NAME_MAX_LENGTH && (_v0 !== _v0 && (_v11(!0), _v9(_v0), _v3(_v0).then(() => _v11(!1))), _v7(!1)) : (_v11(!0), _v5().then(() => _v11(!1)).catch(() => _v11(!1)));
      }, [_v3, _v5, _v0]),
      _v13 = (0, _v22.useMemo)(() => _v2 || _v10, [_v2, _v10]),
      _v14 = (0, _v22.useMemo)(() => _v1 || _v10, [_v1, _v10]),
      _v15 = (0, _v22.useCallback)(() => {
        _v10 || (_v11(!0), _v108(_v49.BPEvent.CLICK_TO_REMOVE_SECTION, 1), _v5().then(() => _v11(!1)).catch(() => _v11(!1)));
      }, [_v10, _v5]),
      _v16 = (0, _v22.useCallback)(() => {
        _v6 || _v10 || _v7(!0);
      }, [_v6, _v10]),
      _v17 = (0, _v22.useCallback)((_v0, _v1) => {
        !_v0 && _v4 && (_v108(_v49.BPEvent.CLICK_TO_ORDER_SECTION, 1, {
          value: 1 === _v1 ? "down" : "up"
        }), _v4(_v1));
      }, [_v4]);
    return (0, _v22.useEffect)(() => {
      _v9(_v0);
    }, [_v0]), (0, _v14.jsxs)(_v674, {
      enableEdit: _v6,
      children: [(0, _v14.jsx)(_v675, {
        tabIndex: _v10 ? -1 : 0,
        onKeyDown: _v0 => {
          (0, _v50.onTab)(_v0, _v16, !1);
        },
        onClick: _v16,
        children: _v6 ? (0, _v14.jsx)(_v681, {
          content: _v8,
          maxCharacterCount: _v49.SECTION_NAME_MAX_LENGTH,
          autoFocus: !0,
          fullWidth: !0,
          allowNewLines: !1,
          onSave: _v12,
          placeholder: _v66.default.EnterTitleHere
        }) : (0, _v14.jsx)(_v680, {
          editMode: !0,
          children: _v8
        })
      }), (0, _v14.jsxs)(_v676, {
        children: [(0, _v14.jsx)(_v678, {
          isDisabled: _v14,
          children: (0, _v14.jsx)(_v326.default, {
            tooltipText: _v66.default.MoveUp,
            disable: _v14,
            children: (0, _v14.jsx)(_v669.ChevronUpSmall, {
              ..._v677,
              tabIndex: _v14 ? -1 : 0,
              width: 26,
              height: 26,
              onClick: () => _v17(_v14, -1),
              onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v17(_v14, -1))
            })
          })
        }), (0, _v14.jsx)(_v678, {
          isDisabled: _v13,
          children: (0, _v14.jsx)(_v326.default, {
            tooltipText: _v66.default.MoveDown,
            disable: _v13,
            children: (0, _v14.jsx)(_v638.ChevronDownSmall, {
              ..._v677,
              tabIndex: _v13 ? -1 : 0,
              width: 26,
              height: 26,
              onClick: () => _v17(_v13, 1),
              onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v17(_v13, 1))
            })
          })
        }), (0, _v14.jsx)(_v678, {
          isDisabled: _v10,
          children: (0, _v14.jsx)(_v326.default, {
            tooltipText: _v66.default.Remove,
            children: (0, _v14.jsx)(_v342.StopBanRight, {
              ..._v677,
              padding: (0, _v51.rem)(4),
              tabIndex: _v10 ? -1 : 0,
              boxSize: 26,
              onClick: _v15,
              onKeyDown: _v0 => (0, _v50.onTab)(_v0, _v15)
            })
          })
        })]
      })]
    });
  }
  function _v671(_v0) {
    let {
      editMode: _v1
    } = (0, _v22.useContext)(_v43.default);
    return (0, _v14.jsx)(_v672, {
      children: _v1 ? (0, _v14.jsx)(_v670, {
        ..._v0
      }) : (0, _v14.jsx)(_v673, {
        children: (0, _v14.jsx)(_v680, {
          children: _v0.title
        })
      })
    });
  }
  let _v672 = _v33.default.div.withConfig({
      displayName: "SectionTitle__Container",
      componentId: "sc-e20869cf-0"
    })`
  width: 100%;
  margin-bottom: ${(0, _v51.rem)(12)};
  border-top: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["100"]};
`,
    _v673 = _v33.default.div.withConfig({
      displayName: "SectionTitle__ViewWrapper",
      componentId: "sc-e20869cf-1"
    })`
  padding: ${(0, _v51.rem)(12)} ${(0, _v51.rem)(12)} ${(0, _v51.rem)(6)} 0;
`,
    _v674 = _v33.default.div.withConfig({
      displayName: "SectionTitle__EditContainer",
      componentId: "sc-e20869cf-2"
    })`
  display: flex;
  padding: ${(0, _v51.rem)(12)} ${(0, _v51.rem)(12)} ${(0, _v51.rem)(6)} 0;
  border: ${(0, _v51.rem)(1)} solid transparent;
  ${({
      enableEdit: _v0
    }) => !_v0 && _v73}
`,
    _v675 = _v33.default.div.withConfig({
      displayName: "SectionTitle__EditWrapper",
      componentId: "sc-e20869cf-3"
    })`
  flex: 1 1 auto;
`,
    _v676 = _v33.default.div.withConfig({
      displayName: "SectionTitle__IconContainer",
      componentId: "sc-e20869cf-4"
    })`
  flex: 0 0 auto;
  display: flex;
`,
    _v677 = {
      cursor: "pointer",
      color: "gray.900"
    },
    _v678 = _v33.default.div.withConfig({
      displayName: "SectionTitle__ChevronWrapper",
      componentId: "sc-e20869cf-5"
    })`
  display: inline-block;
  ${({
      isDisabled: _v0
    }) => _v0 && _v33.css`
      opacity: 0.5;
      pointer-events: none;
    `}
`,
    _v679 = _v33.css`
  font-family: inherit;
  font-size: ${(0, _v51.rem)(20)};
  font-weight: 500;
  letter-spacing: ${(0, _v51.rem)(.22)};
  line-height: ${(0, _v51.rem)(24)};
`,
    _v680 = _v33.default.div.withConfig({
      displayName: "SectionTitle__ViewTitle",
      componentId: "sc-e20869cf-6"
    })`
  ${_v679}
  padding: ${(0, _v51.rem)(6)} ${(0, _v51.rem)(6)} ${(0, _v51.rem)(16)} 0;
  ${({
      editMode: _v0
    }) => _v0 && _v33.css`
      cursor: pointer;
    `}
`,
    _v681 = (0, _v33.default)(_v540).withConfig({
      displayName: "SectionTitle__StyledEditableText",
      componentId: "sc-e20869cf-7"
    })`
  ${_v679}
  padding-left: 0;
  &::placeholder {
    font-weight: 400;
    opacity: 0.6;
  }
`;
  function _v682({
    isTitleLess: _v0,
    shouldAutoAddVideos: _v1,
    toggleAutoAddVideos: _v2,
    addSectionVideo: _v3,
    createSection: _v4,
    showAutoAddVideosNotification: _v5,
    setCreatingSection: _v6,
    disableButtons: _v7,
    isMasonry: _v8 = !1,
    hideCreateSection: _v9 = !1
  }) {
    let [_v10, _v11] = (0, _v22.useState)(!1),
      [_v12, _v13] = (0, _v22.useState)(!1),
      [_v14, _v15] = (0, _v22.useState)(!1),
      {
        trackUserProfileAddVideoClicked: _v16,
        trackUserProfileSectionCreated: _v17
      } = (0, _v30.useProfileTracking)();
    return (0, _v287.default)(_v10 ? _v0 => (0, _v50.onEsc)(_v0, () => _v11(!1)) : void 0, [_v10]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [_v12 ? (0, _v14.jsx)(_v683, {
        isTitleLess: _v0,
        children: (0, _v14.jsx)(_v671, {
          title: "",
          disableDownwardMovement: !0,
          disableUpwardMovement: !0,
          onSubmit: _v0 => _v4(_v0).then(() => {
            _v17(), _v0 || (_v13(!1), _v6?.(!1));
          }),
          removeSection: () => (_v13(!1), _v6?.(!1), Promise.resolve())
        })
      }) : (0, _v14.jsx)(_v684, {
        isTitleLess: _v0,
        isMasonry: _v8,
        hide: _v7,
        children: (0, _v14.jsx)(_v685, {
          isFocused: _v14,
          children: (0, _v14.jsx)(_v688, {
            className: "section_split_ruler",
            children: (0, _v14.jsxs)(_v687, {
              children: [(0, _v14.jsx)(_v686, {
                icon: (0, _v14.jsx)(_v492.PlusSmall, {}),
                format: "secondary",
                floating: !0,
                pill: !0,
                onClick: () => {
                  _v108(_v49.BPEvent.CLICK_TO_ADD_VIDEO, 1), _v16(), _v5?.(), _v11(!0), _v15(!1);
                },
                onFocus: () => _v15(!0),
                onBlur: () => _v15(!1),
                disabled: _v7,
                children: _v66.default.AddVideo
              }), _v9 ? null : (0, _v14.jsx)(_v686, {
                icon: (0, _v14.jsx)(_v668, {}),
                format: "secondary",
                floating: !0,
                pill: !0,
                onClick: () => {
                  _v108(_v49.BPEvent.CLICK_TO_CREATE_SECTION, 1), _v5?.(), _v13(!0), _v6?.(!0), _v15(!1);
                },
                onFocus: () => _v15(!0),
                onBlur: () => _v15(!1),
                disabled: _v7,
                children: _v66.default.CreateSection
              })]
            })
          })
        })
      }), (0, _v14.jsx)(_v77, {
        onOpen: () => _v11(!1),
        active: _v10,
        content: (0, _v14.jsx)(_v505, {
          shouldAutoAddVideos: _v1,
          toggleAutoAddVideos: _v2,
          onSubmit: _v0 => _v3(_v0).then(() => _v11(!1)),
          onDismiss: () => {
            _v11(!1), _v108(_v49.BPEvent.CLOSE_ADD_VIDEO_MODAL, 1);
          }
        })
      })]
    });
  }
  let _v683 = _v33.default.div.withConfig({
      displayName: "SectionDivider__TitleContainer",
      componentId: "sc-120d6def-0"
    })`
  padding-top: ${(0, _v51.rem)(25)};

  ${({
      isTitleLess: _v0
    }) => _v0 && _v33.css`
      padding-top: 0;
      margin-bottom: ${(0, _v51.rem)(_v49.GRID_GAP.DEFAULT / 2 + 12)};
      ${_v61.media.sm`
    margin-bottom: ${(0, _v51.rem)(_v49.GRID_GAP.SM_TOP / 2 + 12)};
  `}
      ${_v61.media.hd`
    margin-bottom: ${(0, _v51.rem)(_v49.GRID_GAP.HD_TOP / 2 + 12)};
  `}
  ${_v61.media.xhd`
    margin-bottom: ${(0, _v51.rem)(_v49.GRID_GAP.XHD / 2 + 12)};
  `}
    `}
`,
    _v684 = _v33.default.div.withConfig({
      displayName: "SectionDivider__RelativeWrapper",
      componentId: "sc-120d6def-1"
    })`
  position: relative;
  width: 100%;
  z-index: 1;
  ${({
      isTitleLess: _v0,
      isMasonry: _v1
    }) => _v0 && !_v1 && _v33.css`
      top: -${(0, _v51.rem)(_v49.GRID_GAP.DEFAULT / 2)};
      ${_v61.media.sm`
        top: -${(0, _v51.rem)(_v49.GRID_GAP.SM_TOP / 2)};
      `}
      ${_v61.media.hd`
        top: -${(0, _v51.rem)(_v49.GRID_GAP.HD_TOP / 2)};
      `}
      ${_v61.media.xhd`
        top: -${(0, _v51.rem)(_v49.GRID_GAP.XHD / 2)};
      `}
    `}

  ${({
      hide: _v0
    }) => _v0 && _v33.css`
      opacity: 0;
    `}
`,
    _v685 = _v33.default.div.withConfig({
      displayName: "SectionDivider__Wrapper",
      componentId: "sc-120d6def-2"
    })`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${(0, _v51.rem)(_v49.GRID_GAP.DEFAULT)};

  &:hover .section_split_ruler {
    opacity: 1;
  }

  ${({
      isFocused: _v0
    }) => _v0 && _v33.css`
      .section_split_ruler {
        opacity: 1;
      }
    `}

  ${_v61.media.sm`
    height: ${(0, _v51.rem)(_v49.GRID_GAP.SM_TOP)};
  `}
  ${_v61.media.hd`
    height: ${(0, _v51.rem)(_v49.GRID_GAP.HD_TOP)};
  `}
  ${_v61.media.xhd`
    height: ${(0, _v51.rem)(_v49.GRID_GAP.XHD)};
  `}
`,
    _v686 = (0, _v33.default)(_v54.Button).withConfig({
      displayName: "SectionDivider__RulerButton",
      componentId: "sc-120d6def-3"
    })`
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  display: inline-flex;
  width: ${(0, _v51.rem)(160)};

  &:first-child {
    margin-right: ${(0, _v51.rem)(10)};
  }
`,
    _v687 = _v33.default.div.withConfig({
      displayName: "SectionDivider__ButtonWrapper",
      componentId: "sc-120d6def-4"
    })`
  position: relative;
  top: -${(0, _v51.rem)(20)};
`,
    _v688 = _v33.default.div.withConfig({
      displayName: "SectionDivider__HorizontalRuler",
      componentId: "sc-120d6def-5"
    })`
  opacity: 0;
  display: flex;
  border: ${(0, _v51.rem)(.5)} dashed ${_v53.bokehTheme.colors.gray["400"]};
  margin-top: -${(0, _v51.rem)(8)};
  position: relative;
  justify-content: center;
  transition: opacity 200ms ease-out;
  height: 0;
`;
  function _v689({
    section: _v0,
    index: _v1,
    disableDown: _v2,
    disableUp: _v3,
    isSingleCellView: _v4,
    onDragStart: _v5,
    removeDragPortal: _v6,
    setDragOver: _v7,
    draggedOver: _v8,
    shouldAutoAddVideos: _v9,
    toggleAutoAddVideos: _v10,
    showAutoAddVideosNotification: _v11,
    updatePublicVideosCount: _v12,
    setSectionHasNext: _v13
  }) {
    let _v14 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        editMode: _v15
      } = (0, _v22.useContext)(_v43.default),
      [_v16, _v17] = (0, _v22.useState)([]),
      [_v18, _v19] = (0, _v22.useState)(null),
      [_v20, _v21] = (0, _v22.useState)(!1),
      [_v22, _v23] = (0, _v22.useState)(!1),
      [_v24, _v25] = (0, _v22.useState)(!1),
      {
        addVideosToSection: _v26,
        createSection: _v27,
        data: _v28,
        error: _v29,
        isValidating: _v30,
        moveSection: _v31,
        onDrop: _v32,
        removeSection: _v33,
        removeVideoFromSection: _v34,
        setSize: _v35,
        toggleVideoData: _v36,
        updateSectionTitle: _v37,
        videoLoading: _v38
      } = _v514(_v0.uri, _v0.videos.data, _v0.videos.total),
      _v39 = (0, _v22.useMemo)(() => _v28 ? (0, _v50.convertToArray)(_v28) : [], [_v28]),
      _v40 = (0, _v22.useMemo)(() => _v4 ? [] : function (_v0) {
        let _v1 = [],
          _v2 = 0;
        for (let _v0 = 1; _v0 < _v0.length; _v0++) _v667(_v0[_v0 - 1], _v0[_v0], _v0, _v2) && (_v1.push(_v0), _v2 = _v0);
        return _v1;
      }(_v39), [_v4, _v39]),
      _v41 = (0, _v22.useMemo)(() => _v39.length > 0 && (0, _v50.hasNext)(_v28), [_v28, _v39]),
      _v42 = (0, _v22.useMemo)(() => _v28 ? !_v28[0] && _v30 && !_v29 : !_v29, [_v28, _v29, _v30]),
      _v43 = (0, _v22.useMemo)(() => _v15 && !_v30 && !_v38, [_v15, _v30, _v38]),
      _v44 = (0, _v22.useMemo)(() => 1 === _v39.length && null != _v0.title, [_v39, _v0]),
      _v45 = (0, _v22.useCallback)((_v0, _v1) => {
        let _v2 = _v1.map(_v0 => _v0.uri);
        return _v26(_v0.uri, _v0, _v2, _v12).then(_v0 => {
          _v17(_v0);
        });
      }, [_v26, _v0.uri, _v12]),
      _v46 = (0, _v313.default)(_v0 => {
        (0, _v318.default)(_v8, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v7({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300),
      _v47 = (0, _v22.useCallback)(() => {
        _v21(!0), _v35(_v28 ? _v28.length + 1 : 1).catch(() => void 0);
      }, [_v35, _v28]);
    return (0, _v22.useEffect)(() => {
      let _v0 = null;
      return _v16 && _v16.length && (_v0 = setTimeout(() => {
        _v17([]);
      }, 0)), () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v16]), (0, _v22.useEffect)(() => {
      _v13(_v0.uri, !!_v41);
    }, [_v41, _v0.uri, _v13]), (0, _v22.useEffect)(() => {
      _v30 || _v21(!1);
    }, [_v30]), (0, _v22.useEffect)(() => () => _v13(_v0.uri, !1), [_v0.uri, _v13]), (0, _v14.jsxs)(_v690, {
      isFirstSection: 0 === _v1,
      children: [null == _v0.title && _v15 ? (0, _v14.jsx)(_v682, {
        shouldAutoAddVideos: _v9,
        toggleAutoAddVideos: _v10,
        addSectionVideo: _v0 => _v45(0, _v0),
        isTitleLess: 0 === _v1 && null == _v0.title,
        createSection: _v0 => _v37(_v0.uri, _v0),
        showAutoAddVideosNotification: _v11,
        disableButtons: _v38 || _v30
      }) : null, null != _v0.title ? (0, _v14.jsx)(_v671, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v37(_v0.uri, _v0),
        moveSection: _v0 => _v31(_v1, _v0),
        removeSection: () => _v33(_v1)
      }) : null, (0, _v14.jsxs)(_v691, {
        isFirstAndTitleLess: 0 === _v1 && null == _v0.title,
        editMode: _v15,
        children: [_v39.map((_v0, _v1) => {
          let _v2 = -1 !== _v40.indexOf(_v1),
            _v3 = null != _v0 && (_v0.showFeaturedComment && null != _v0.featuredComment || "2" === _v0.columnWidth),
            _v4 = _v4 ? null != _v0.title && 0 === _v1 : null != _v0.title && _v1 < _v40[0];
          return (0, _v14.jsxs)(_v14.Fragment, {
            children: [_v15 && (_v2 || _v44) ? (0, _v14.jsx)(_v694, {
              isSingleVideoSection: _v44,
              children: (0, _v14.jsx)(_v682, {
                addSectionVideo: _v0 => _v45(_v1, _v0),
                createSection: _v0 => _v27(_v0.uri, _v0.clip.uri, _v0),
                shouldAutoAddVideos: _v9,
                toggleAutoAddVideos: _v10,
                showAutoAddVideosNotification: _v11,
                disableButtons: _v38 || _v30,
                setCreatingSection: _v0 => _v25(_v0),
                hideCreateSection: null != _v0.title && _v44
              }, `divider_${_v1}_${_v1}`)
            }) : null, (0, _v14.jsx)(_v693, {
              top: _v24 && _v44 ? 75 : 0,
              isFirst: _v2 || 0 === _v1,
              isExpanded: _v3,
              hideTopPadding: _v4,
              isDraggedOver: _v8?.videoIndex === _v1,
              editMode: _v15,
              draggable: _v43,
              dragStarted: null != _v8,
              isBeingDragged: _v18 === _v1,
              onDragStart: _v0 => {
                _v43 && (_v19(_v1), _v5(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                }));
              },
              onDragOver: _v0 => {
                _v43 && (_v0.preventDefault(), (null != _v8 || _v18 !== _v1) && _v46(_v1));
              },
              onDrop: _v0 => {
                if (_v43) {
                  _v0.preventDefault();
                  let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                  _v0.sectionIndex === _v1 && (_v7(null), _v6(), _v19(null)), _v32(_v0, {
                    video: _v0,
                    videoIndex: _v1,
                    sectionIndex: _v1,
                    sectionUri: _v0.uri
                  });
                }
              },
              onDragEnd: _v0 => {
                _v0.preventDefault(), _v19(null), _v6(), _v15 && _v8 && _v7(null);
              },
              children: (0, _v14.jsx)(_v382, {
                video: _v0,
                viewType: _v49.ViewType.GRID,
                videoIndex: _v1,
                removeVideo: () => _v34(_v0.uri, _v0.clip.uri, _v12),
                setExpanded: _v0 => _v36(_v0, void 0, _v0 ? "2" : "1"),
                hasComments: !!_v0.clip.metadata.connections.comments.total,
                newlyAdded: -1 !== _v16.indexOf(_v0.clip.uri),
                addOrUpdateFeaturedComment: _v0 => _v36(_v0, _v0),
                loading: _v38 || _v30,
                isOFCOM: _v14?.ofcomQualifies && !_v14.user
              })
            }, _v0.clip.uri)]
          });
        }), (_v20 || _v42 || _v30) && !_v22 ? (0, _v14.jsx)(_v414, {
          count: _v42 ? 6 : 2
        }) : null, !_v41 || _v20 || _v30 ? null : (0, _v14.jsx)(_v315, {
          onClick: _v47
        })]
      })]
    });
  }
  let _v690 = _v33.default.section.withConfig({
      displayName: "SectionGrid__Container",
      componentId: "sc-4bf18dc6-0"
    })`
  ${({
      isFirstSection: _v0
    }) => _v0 ? _v33.css`
          padding-top: 0;
        ` : _v33.css`
          padding-top: ${(0, _v51.rem)(25)};
        `}
`,
    _v691 = _v33.default.section.withConfig({
      displayName: "SectionGrid__Grid",
      componentId: "sc-4bf18dc6-1"
    })`
  width: 100%;
  position: relative;

  ${({
      isFirstAndTitleLess: _v0,
      editMode: _v1
    }) => _v0 && _v1 && _v33.css`
      margin-top: -${(0, _v51.rem)(_v49.GRID_GAP.DEFAULT / 2)};
      ${_v61.media.sm`
        margin-top: -${(0, _v51.rem)(_v49.GRID_GAP.SM_TOP / 2)};
      `}
      ${_v61.media.hd`
        margin-top: -${(0, _v51.rem)(_v49.GRID_GAP.HD_TOP / 2)};
      `}
      ${_v61.media.xhd`
        margin-top: -${(0, _v51.rem)(_v49.GRID_GAP.XHD / 2)};
      `}
    `}
`,
    _v692 = (_v0, _v1, _v2, _v3) => _v33.css`
  margin-left: ${_v1 || _v2 ? 0 : (0, _v51.rem)(_v0)};
  margin-right: ${_v1 && !_v2 ? (0, _v51.rem)(_v0) : 0};
  padding-top: ${0 === _v3 ? 0 : (0, _v51.rem)(_v3)};
  padding-bottom: ${0 === _v3 ? 0 : (0, _v51.rem)(_v3)};
  width: ${_v2 ? "100%" : `calc(50% - ${(0, _v51.rem)(_v0)})`};
`,
    _v693 = _v33.default.article.withConfig({
      displayName: "SectionGrid__GridItem",
      componentId: "sc-4bf18dc6-2"
    })`
  transition:
    width 0.5s ease-in,
    transform 250ms linear,
    top 0.5s ease-in;
  padding-top: ${({
      hideTopPadding: _v0
    }) => _v0 ? 0 : (0, _v51.rem)(_v49.GRID_GAP.DEFAULT / 2)};
  position: relative;
  vertical-align: top;
  top: ${({
      top: _v0
    }) => (0, _v51.rem)(_v0)};

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v33.css`
          & > * {
            opacity: 0;
          }
          border-radius: ${(0, _v51.rem)(8)};
          background-color: ${_v1 ? _v53.bokehTheme.colors.blue["50"] : _v53.bokehTheme.colors.gray["50"]};
        ` : _v1 ? _v33.css`
            transform: translateX(${(0, _v51.rem)(10)});
            &:before {
              content: '';
              height: 100%;
              width: ${(0, _v51.rem)(4)};
              left: -${(0, _v51.rem)(14)};
              position: absolute;
              background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v33.css`
      user-select: none;
    `}

  ${({
      isExpanded: _v0
    }) => _v0 && _v33.css`
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    `}
  ${_v61.media.sm`
    display: inline-block;
    ${({
      isExpanded: _v0,
      isFirst: _v1,
      editMode: _v2,
      hideTopPadding: _v3
    }) => _v692(9, _v1, _v0, _v2 || _v3 ? 0 : _v49.GRID_GAP.SM_TOP / 2)};
  `}
  ${_v61.media.md`
    ${({
      isExpanded: _v0,
      isFirst: _v1,
      editMode: _v2,
      hideTopPadding: _v3
    }) => _v692(10, _v1, _v0, _v2 || _v3 ? 0 : _v49.GRID_GAP.SM_TOP / 2)};
  `}
  ${_v61.media.hd`
    ${({
      isExpanded: _v0,
      isFirst: _v1,
      editMode: _v2,
      hideTopPadding: _v3
    }) => _v692(12, _v1, _v0, _v2 || _v3 ? 0 : _v49.GRID_GAP.HD_TOP / 2)};
  `}

  ${_v61.media.xhd`
    ${({
      isExpanded: _v0,
      isFirst: _v1,
      editMode: _v2,
      hideTopPadding: _v3
    }) => _v692(20, _v1, _v0, _v2 || _v3 ? 0 : _v49.GRID_GAP.XHD / 2)};
  `}
`,
    _v694 = _v33.default.div.withConfig({
      displayName: "SectionGrid__DividerContainer",
      componentId: "sc-4bf18dc6-3"
    })`
  ${({
      isSingleVideoSection: _v0
    }) => _v0 && _v33.css`
      position: absolute;
      width: 100%;
      top: -${(0, _v51.rem)(25)};
    `}
`;
  var _v695 = _v0.i(0),
    _v696 = _v0.i(0);
  let _v697 = _v0 => {
    let _v1 = _v49.GRID_GAP.DEFAULT;
    return _v0 >= _v61.BreakPoints.sm && (_v1 = _v49.GRID_GAP.SM_TOP), _v0 >= _v61.BreakPoints.hd && (_v1 = _v49.GRID_GAP.HD_TOP), _v0 >= _v61.BreakPoints.xhd && (_v1 = _v49.GRID_GAP.XHD), _v1;
  };
  function _v698({
    section: _v0,
    index: _v1,
    disableDown: _v2,
    disableUp: _v3,
    onDragStart: _v4,
    draggedOver: _v5,
    removeDragPortal: _v6,
    setDragOver: _v7,
    updatePublicVideosCount: _v8,
    shouldAutoAddVideos: _v9,
    toggleAutoAddVideos: _v10,
    showAutoAddVideosNotification: _v11,
    setSectionHasNext: _v12
  }) {
    var _v13;
    let _v14,
      _v15 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        editMode: _v16,
        userId: _v17
      } = (0, _v22.useContext)(_v43.default),
      [_v18, _v19] = (0, _v22.useState)(null),
      [_v20, _v21] = (0, _v22.useState)([]),
      [_v22, _v23] = (0, _v22.useState)(null),
      [_v24, _v25] = (0, _v22.useState)(!1),
      [_v26, _v27] = (0, _v22.useState)(!1),
      [_v28, _v29] = (0, _v22.useState)(!1),
      {
        addVideosToSection: _v30,
        createSection: _v31,
        data: _v32,
        error: _v33,
        isValidating: _v34,
        moveSection: _v35,
        onDrop: _v36,
        removeSection: _v37,
        removeVideoFromSection: _v38,
        setSize: _v39,
        toggleVideoData: _v40,
        updateSectionTitle: _v41,
        videoLoading: _v42
      } = _v514(_v0.uri, _v0.videos.data, _v0.videos.total),
      {
        width: _v43
      } = (0, _v60.useWindowSize)(),
      _v44 = (0, _v22.useMemo)(() => _v697(_v43), [_v43]),
      [_v45, _v46] = (0, _v696.useClientRect)(["width"], [_v43]),
      _v47 = (0, _v22.useMemo)(() => _v32 ? (0, _v50.convertToArray)(_v32) : [], [_v32]),
      _v48 = (_v13 = _v45?.width || 0, _v14 = _v697(_v43), _v47.map(_v0 => {
        let {
          videoWidth: _v1,
          updatedHeight: _v2
        } = ((_v0, _v1, _v2) => {
          let _v3 = _v1 >= _v61.BreakPoints.sm,
            _v4 = _v2;
          _v3 && "2" !== _v0.columnWidth && (_v4 = _v2 / 2 - _v49.GRID_GAP.SM_RIGHT / 2, _v1 >= _v61.BreakPoints.hd && (_v4 = _v2 / 2 - _v49.GRID_GAP.HD_RIGHT / 2), _v1 >= _v61.BreakPoints.xhd && (_v4 = _v2 / 2 - _v49.GRID_GAP.XHD / 2));
          let {
              width: _v5,
              height: _v6
            } = _v0.clip,
            _v7 = _v4 / _v5 * _v6;
          return {
            videoWidth: _v4,
            updatedHeight: _v7
          };
        })(_v0, _v43, _v13);
        if (_v2 += 32, _v2 += _v14, (0, _v50.getIdFromUri)(_v0.clip.user.uri) !== _v17 && (_v2 += 24), _v0.showFeaturedComment && _v0.featuredComment) {
          let _v0;
          _v2 += ((_v0, _v1, _v2) => {
            let _v3 = 0,
              _v4 = 0,
              _v5 = 0;
            if (_v0.showFeaturedComment && _v0.featuredComment) {
              let _v0 = document.createElement("canvas").getContext("2d");
              if (_v0) {
                _v0.font = `300 ${(0, _v51.rem)(16)}/${(0, _v51.rem)(26)} Arial, system-ui, sans-serif`;
                let _v0 = (0, _v695.default)(_v0.featuredComment.text, {
                    length: _v49.TRUNCATE_FEATURED_COMMENT_AFTER
                  }),
                  _v1 = _v0.measureText(_v0).width;
                return _v1 >= _v61.BreakPoints.sm && (_v3 = _v49.COMMENT_WRAPPER_GAP.SM_TOP, _v5 = _v49.COMMENT_WRAPPER_GAP.SM_RIGHT), _v1 >= _v61.BreakPoints.md && (_v3 = _v49.COMMENT_WRAPPER_GAP.MD_TOP, _v4 = _v49.COMMENT_WRAPPER_GAP.MD_BOTTOM, _v5 = _v49.COMMENT_WRAPPER_GAP.MD_RIGHT), _v1 >= _v61.BreakPoints.xhd && (_v3 = _v49.COMMENT_WRAPPER_GAP.XHD_TOP, _v4 = _v49.COMMENT_WRAPPER_GAP.XHD_BOTTOM, _v5 = _v49.COMMENT_WRAPPER_GAP.XHD_RIGHT), 26 * Math.ceil(_v1 / (_v2 - _v49.MOBILE_FEATURE_COMMENT_PADDING - 2 * _v5)) + _v3 + _v4;
              }
            }
            return 0;
          })(_v0, _v43, _v1), _v2 += (_v0 = _v49.COMMENT_USER_DETAIL_GAP.DEFAULT, _v43 >= _v61.BreakPoints.sm && (_v0 = _v49.COMMENT_USER_DETAIL_GAP.SM), _v43 >= _v61.BreakPoints.md && (_v0 = _v49.COMMENT_USER_DETAIL_GAP.MD), _v43 >= _v61.BreakPoints.hd && (_v0 = _v49.COMMENT_USER_DETAIL_GAP.HD), 20 + _v0), _v16 && (_v2 += 17);
        }
        return {
          videoWidth: _v1,
          updatedHeight: _v2
        };
      })),
      {
        height: _v49,
        bounds: _v50
      } = ((_v0, _v1, _v2) => {
        let _v3 = _v697(_v2),
          _v4 = [];
        if (_v2 >= _v61.BreakPoints.sm) {
          let _v0 = 0,
            _v1 = 0;
          return _v0.forEach((_v0, _v1) => {
            let _v2 = _v1[_v1];
            if ("2" === _v0.columnWidth) {
              let _v0 = Math.max(_v0, _v1);
              _v4.push({
                top: _v0,
                isFirst: !0,
                showDivider: {
                  top: _v0 - _v3
                }
              }), _v0 = _v0 + _v2.updatedHeight, _v1 = _v0 + _v2.updatedHeight;
            } else _v0 <= _v1 ? (_v4.push({
              top: _v0,
              isFirst: !0,
              showDivider: _v0 === _v1 ? {
                top: _v0 - _v3
              } : void 0
            }), _v0 += _v2.updatedHeight) : (_v4.push({
              top: _v1,
              isFirst: !1
            }), _v1 += _v2.updatedHeight);
          }), {
            height: Math.max(_v0, _v1),
            bounds: _v4
          };
        }
        {
          let _v0 = 0;
          return _v1.forEach(_v0 => {
            _v4.push({
              isFirst: !0,
              top: _v0
            }), _v0 += _v0.updatedHeight;
          }), {
            height: _v0,
            bounds: _v4
          };
        }
      })(_v47, _v48, _v43),
      _v51 = (0, _v22.useMemo)(() => _v47.length > 0 && (0, _v50.hasNext)(_v32), [_v32, _v47]),
      _v52 = (0, _v22.useMemo)(() => _v16 && !_v34 && !_v42, [_v16, _v34, _v42]),
      _v53 = (0, _v22.useMemo)(() => !_v0.title && "" !== _v0.title, [_v0.title]),
      _v54 = (0, _v22.useMemo)(() => _v32 ? !_v32[0] && _v34 && !_v33 : !_v33, [_v32, _v33, _v34]),
      _v55 = (0, _v22.useCallback)((_v0, _v1) => {
        let _v2 = _v1.map(_v0 => _v0.uri);
        return _v30(_v0.uri, _v0, _v2, _v8).then(_v0 => {
          _v21(_v0);
        });
      }, [_v30, _v0.uri, _v8]),
      _v56 = (0, _v22.useCallback)(() => {
        _v25(!0), _v39?.(_v32 ? _v32.length + 1 : 0).catch(() => void 0);
      }, [_v39, _v32]),
      _v57 = (0, _v313.default)(_v0 => {
        (0, _v318.default)(_v5, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v7({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300),
      _v58 = (0, _v22.useCallback)((_v0, _v1) => (0 === _v0 && _v53 ? _v41(_v0.uri, _v1) : _v31(_v0.uri, _v47[_v0].clip.uri, _v1)).then(() => _v19(null)), [_v31, _v53, _v0.uri, _v47, _v41]);
    return (0, _v22.useEffect)(() => {
      let _v0 = null;
      return _v20 && _v20.length && (_v0 = setTimeout(() => {
        _v21([]);
      }, 0)), () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v20]), (0, _v22.useEffect)(() => {
      _v12(_v0.uri, !!_v51);
    }, [_v51, _v0.uri, _v12]), (0, _v22.useEffect)(() => () => _v12(_v0.uri, !1), [_v0.uri, _v12]), (0, _v22.useEffect)(() => {
      !_v28 && _v47.length > 0 && setTimeout(() => _v29(!0), 100);
    }, [_v28, _v46, _v47]), (0, _v22.useEffect)(() => {
      _v34 || _v25(!1);
    }, [_v34]), (0, _v14.jsxs)(_v699, {
      hasNext: !!_v51,
      isSectionTitleLess: _v53,
      children: [_v53 ? null : (0, _v14.jsx)(_v671, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v41(_v0.uri, _v0),
        moveSection: _v0 => _v35(_v1, _v0),
        removeSection: () => _v37(_v1)
      }), (0, _v14.jsx)(_v700, {
        ref: _v46,
        clipsRendered: _v28,
        height: _v49 + 90 * (null != _v18),
        children: _v47.map((_v0, _v1) => {
          let _v2 = _v50[_v1],
            {
              videoWidth: _v3,
              updatedHeight: _v4
            } = _v48[_v1],
            _v5 = null != _v18 && _v18 <= _v1 ? 0 === _v18 ? 90 - _v44 : 90 : 0,
            _v6 = 0 === _v1,
            _v7 = !!_v16 && (_v6 ? _v53 || 1 === _v47.length : null != _v2.showDivider);
          return (0, _v14.jsxs)(_v14.Fragment, {
            children: [_v7 ? (0, _v14.jsx)(_v702, {
              top: (_v2.showDivider?.top || 0) + 90 * (null != _v18 && _v18 < _v1),
              children: (0, _v14.jsx)(_v682, {
                shouldAutoAddVideos: _v9,
                toggleAutoAddVideos: _v10,
                addSectionVideo: _v0 => _v55(0, _v0),
                isTitleLess: 0 === _v1 && null == _v0.title,
                createSection: _v0 => _v58(_v1, _v0),
                showAutoAddVideosNotification: _v11,
                setCreatingSection: _v0 => _v0 ? _v19(_v1) : _v19(null),
                disableButtons: _v42 || _v34,
                hideCreateSection: !_v53 && 1 === _v47.length,
                isMasonry: !0
              })
            }) : null, (0, _v14.jsx)(_v701, {
              isFirst: _v2.isFirst,
              videoWidth: _v3,
              top: _v2.top + _v5,
              videoHeight: _v4,
              draggable: _v52,
              dragStarted: null != _v5,
              isDraggedOver: _v5?.videoIndex === _v1,
              isBeingDragged: _v22 === _v1,
              clipsRendered: _v28,
              onDragStart: _v0 => {
                _v52 && (_v23(_v1), _v4(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                }));
              },
              onDragOver: _v0 => {
                _v52 && (_v0.preventDefault(), (null != _v5 || _v22 !== _v1) && _v57(_v1));
              },
              onDrop: _v0 => {
                if (_v52) {
                  _v0.preventDefault();
                  let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                  _v0.sectionIndex === _v1 && (_v7(null), _v6(), _v23(null)), _v36(_v0, {
                    video: _v0,
                    videoIndex: _v1,
                    sectionIndex: _v1,
                    sectionUri: _v0.uri
                  });
                }
              },
              onDragEnd: _v0 => {
                _v0.preventDefault(), _v23(null), _v6(), _v16 && _v5 && _v7(null);
              },
              children: (0, _v14.jsx)(_v382, {
                video: _v0,
                viewType: _v49.ViewType.MASONRY,
                videoIndex: _v1,
                removeVideo: () => _v38(_v0.uri, _v0.clip.uri, _v8),
                setExpanded: _v0 => _v40(_v0, void 0, _v0 ? "2" : "1"),
                hasComments: !!_v0.clip.metadata.connections.comments.total,
                addOrUpdateFeaturedComment: _v0 => _v40(_v0, _v0),
                className: "masonary-video-card",
                loading: _v42 || _v34,
                newlyAdded: -1 !== _v20.indexOf(_v0.clip.uri),
                isOFCOM: _v15?.ofcomQualifies && !_v15.user
              })
            })]
          });
        })
      }), (_v24 || _v54 || _v34) && !_v26 ? (0, _v14.jsx)(_v414, {
        count: _v54 ? 6 : 2
      }) : null, !_v51 || _v24 || _v34 ? null : (0, _v14.jsx)(_v703, {
        children: (0, _v14.jsx)(_v315, {
          onClick: _v56
        })
      })]
    });
  }
  let _v699 = _v33.default.section.withConfig({
      displayName: "SectionMasonry__MasonryGrid",
      componentId: "sc-81287153-0"
    })`
  display: block;
  width: 100%;

  ${({
      hasNext: _v0
    }) => _v0 && _v33.css`
      padding-bottom: ${(0, _v51.rem)(16)};
    `}

  ${({
      isSectionTitleLess: _v0
    }) => _v0 ? _v33.css`
          padding-top: ${(0, _v51.rem)(25)};
        ` : _v33.css`
          padding-top: 0;
        `}
`,
    _v700 = _v33.default.article.withConfig({
      displayName: "SectionMasonry__MasonryItemContainer",
      componentId: "sc-81287153-1"
    })`
  position: relative;
  ${({
      height: _v0
    }) => _v33.css`
    height: ${(0, _v51.rem)(_v0)};
    max-height: ${(0, _v51.rem)(_v0)};
  `}
  ${({
      clipsRendered: _v0
    }) => _v0 && _v33.css`
      transition: all 0.5s ease-in;
    `}
`,
    _v701 = _v33.default.section.withConfig({
      displayName: "SectionMasonry__MasonryCard",
      componentId: "sc-81287153-2"
    })`
  position: absolute;
  top: ${({
      top: _v0
    }) => (0, _v51.rem)(_v0)};
  width: ${({
      videoWidth: _v0
    }) => (0, _v51.rem)(_v0)};
  height: ${({
      videoHeight: _v0
    }) => (0, _v51.rem)(_v0)};

  video {
    background-size: cover;
    object-fit: cover;
  }

  ${({
      isFirst: _v0
    }) => _v0 ? _v33.css`
          left: 0;
        ` : _v33.css`
          right: 0;
        `}

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v33.css`
          .masonary-video-card > * {
            opacity: 0;
          }
          .masonary-video-card {
            border-radius: ${(0, _v51.rem)(8)};
            background-color: ${_v1 ? _v53.bokehTheme.colors.blue["50"] : _v53.bokehTheme.colors.gray["50"]};
          }
        ` : _v1 ? _v33.css`
            transform: translateX(${(0, _v51.rem)(10)});
            .masonary-video-card:before {
              content: '';
              height: 100%;
              width: ${(0, _v51.rem)(4)};
              left: -${(0, _v51.rem)(14)};
              position: absolute;
              background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v33.css`
      user-select: none;
    `}

  ${({
      clipsRendered: _v0
    }) => _v0 && _v33.css`
      transition:
        width 0.5s ease-in,
        top 0.5s ease-in;
    `}
`,
    _v702 = _v33.default.section.withConfig({
      displayName: "SectionMasonry__DividerContainer",
      componentId: "sc-81287153-3"
    })`
  position: absolute;
  top: ${({
      top: _v0
    }) => (0, _v51.rem)(_v0)};
  width: 100%;
  height: auto;
`,
    _v703 = _v33.default.article.withConfig({
      displayName: "SectionMasonry__LoadMoreContainer",
      componentId: "sc-81287153-4"
    })`
  margin-top: -${(0, _v51.rem)(16 + _v49.GRID_GAP.DEFAULT)};
  ${_v61.media.sm`
    margin-top: -${(0, _v51.rem)(16 + _v49.GRID_GAP.SM_TOP)};
  `}
  ${_v61.media.hd`
    margin-top: -${(0, _v51.rem)(16 + _v49.GRID_GAP.HD_TOP)};
  `}
  ${_v61.media.xhd`
    margin-top: -${(0, _v51.rem)(16 + _v49.GRID_GAP.XHD)};
  `}
`;
  var _v704 = _v0.i(0),
    _v705 = _v0.i(0),
    _v706 = _v0.i(0),
    _v707 = _v0.i(0);
  let _v708 = _v0 => (0, _v14.jsxs)(_v707.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: [(0, _v14.jsx)("path", {
      d: "M20 9H4C3.4 9 3 8.6 3 8C3 7.4 3.4 7 4 7H20C20.6 7 21 7.4 21 8C21 8.6 20.6 9 20 9Z",
      fill: "currentColor"
    }), (0, _v14.jsx)("path", {
      d: "M4 11H20C20.6 11 21 11.4 21 12C21 12.6 20.6 13 20 13H12H4C3.4 13 3 12.6 3 12C3 11.4 3.4 11 4 11Z",
      fill: "currentColor"
    }), (0, _v14.jsx)("path", {
      d: "M4 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H4C3.4 17 3 16.6 3 16C3 15.4 3.4 15 4 15Z",
      fill: "currentColor"
    }), (0, _v14.jsx)("path", {
      d: "M9.57933 4.86034C9.66932 4.94979 9.79104 5 9.91792 5C10.5757 5 11.9806 5 11.9806 5C11.9806 5 13.3688 5 14.0194 5C14.1462 5 14.268 4.94979 14.3579 4.86034C14.403 4.8157 14.4387 4.76258 14.4631 4.70406C14.4874 4.64553 14.5 4.58276 14.5 4.51936C14.5 4.45596 14.4874 4.39318 14.4631 4.33466C14.4387 4.27614 14.403 4.22302 14.3579 4.17837L12.3216 2.14206C12.277 2.09705 12.2239 2.06132 12.1653 2.03694C12.1068 2.01255 12.044 2 11.9806 2C11.9172 2 11.8545 2.01255 11.7959 2.03694C11.7374 2.06132 11.6843 2.09705 11.6397 2.14206L9.57933 4.17837C9.53432 4.22302 9.49859 4.27614 9.47421 4.33466C9.44983 4.39318 9.43727 4.45596 9.43727 4.51936C9.43727 4.58276 9.44983 4.64553 9.47421 4.70405C9.49859 4.76258 9.53432 4.8157 9.57933 4.86034Z",
      fill: "currentColor"
    }), (0, _v14.jsx)("path", {
      d: "M14.3579 19.1397C14.2679 19.0502 14.1462 19 14.0193 19C13.3616 19 11.9566 19 11.9566 19C11.9566 19 10.5684 19 9.9179 19C9.79102 19 9.6693 19.0502 9.57932 19.1397C9.5343 19.1843 9.49857 19.2374 9.47419 19.2959C9.44981 19.3545 9.43726 19.4172 9.43726 19.4806C9.43726 19.544 9.44981 19.6068 9.47419 19.6653C9.49857 19.7239 9.5343 19.777 9.57932 19.8216L11.6156 21.8579C11.6603 21.903 11.7134 21.9387 11.7719 21.9631C11.8304 21.9874 11.8932 22 11.9566 22C12.02 22 12.0828 21.9874 12.1413 21.9631C12.1998 21.9387 12.253 21.903 12.2976 21.8579L14.3579 19.8216C14.4029 19.777 14.4387 19.7239 14.463 19.6653C14.4874 19.6068 14.5 19.544 14.5 19.4806C14.5 19.4172 14.4874 19.3545 14.463 19.2959C14.4387 19.2374 14.4029 19.1843 14.3579 19.1397Z",
      fill: "currentColor"
    })]
  });
  var _v709 = (0, _v22.forwardRef)(function (_v0, _v1) {
    return _v22.default.createElement("svg", (0, _v154.c)({
      viewBox: "0 0 20 20",
      ref: _v1
    }, _v0), _v22.default.createElement("g", {
      stroke: "#1a2e3b",
      strokeWidth: "2",
      fill: "none"
    }, _v22.default.createElement("rect", {
      x: "1",
      y: "1",
      width: "7",
      height: "10",
      rx: "2"
    }), _v22.default.createElement("rect", {
      x: "12",
      y: "1",
      width: "7",
      height: "4",
      rx: "2"
    }), _v22.default.createElement("rect", {
      x: "1",
      y: "15",
      width: "7",
      height: "4",
      rx: "2"
    }), _v22.default.createElement("rect", {
      x: "12",
      y: "9",
      width: "7",
      height: "10",
      rx: "2"
    })));
  });
  let _v710 = _v53.bokehTheme?.semanticTokens?.space?.md,
    _v711 = _v53.bokehTheme?.semanticTokens?.radii?.md,
    _v712 = _v53.bokehTheme?.semanticTokens?.space?.sm,
    _v713 = "var(--vimeo-colors-text-primary, #11191d)",
    _v714 = "var(--vimeo-colors-fill-component-hover, rgba(26, 70, 128, 0.12))";
  function _v715({
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
      } = (0, _v20.useOrionSettings)(),
      _v8 = !!_v7.show_profile_reorder_modal,
      _v9 = !!_v5 || !_v2,
      [_v10, _v11] = (0, _v22.useState)(!1),
      [_v12, _v13] = (0, _v22.useState)(!1),
      {
        trackUserProfileLayoutChanged: _v14,
        trackUserProfilePreviewClicked: _v15,
        trackUserProfileReorderContentClicked: _v16
      } = (0, _v30.useProfileTracking)(),
      _v17 = _v0 === _v49.ViewType.MASONRY ? {
        content: _v66.default.Grid,
        switchTo: _v49.ViewType.GRID,
        icon: (0, _v14.jsx)(_v706.GridView, {
          boxSize: 24
        })
      } : {
        content: _v66.default.Masonry,
        switchTo: _v49.ViewType.MASONRY,
        icon: (0, _v14.jsx)(_v709, {
          width: 22,
          height: 22
        })
      };
    return (0, _v22.useEffect)(() => {
      let _v0 = (0, _v313.default)(() => {
        let _v0,
          _v1 = (_v0 = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, document.body.scrollHeight <= _v0 + (window ? window.innerHeight : 0) + _v3);
        _v10 !== _v1 && _v11(_v1);
      }, 50);
      return document.addEventListener("scroll", _v0), () => {
        document.removeEventListener("scroll", _v0);
      };
    }, [_v10]), (0, _v22.useEffect)(() => {
      _v13(!1);
    }, [_v0]), (0, _v14.jsxs)(_v716, {
      scrolledToBottom: _v10,
      shouldShowProfileReorderModal: _v8,
      children: [(0, _v14.jsx)(_v326.default, {
        alignment: "top",
        tooltipText: _v17.content,
        disable: _v4,
        children: (0, _v14.jsx)(_v722, {
          children: (0, _v14.jsx)(_v718, {
            "aria-label": _v17.content,
            disabled: _v4,
            onClick: () => {
              _v4 || (_v14({
                userProfileLayout: _v17.switchTo
              }), _v1?.(_v17.switchTo), _v13(!0));
            },
            children: (0, _v14.jsx)(_v719, {
              className: "view-icon",
              disable: _v4,
              loading: _v12,
              children: _v12 ? (0, _v14.jsx)(_v34.Spinner, {
                size: "md",
                color: "gray.500"
              }) : _v17.icon
            })
          })
        })
      }), _v8 && (0, _v14.jsx)(_v326.default, {
        alignment: "top",
        tooltipText: _v66.default.Reorder,
        disable: _v9,
        children: (0, _v14.jsx)(_v722, {
          children: (0, _v14.jsx)(_v721, {
            "aria-label": _v66.default.Reorder,
            type: "button",
            onClick: () => {
              _v16(), _v2?.();
            },
            disabled: _v9,
            isActive: !!_v6,
            children: (0, _v14.jsx)(_v708, {
              boxSize: 24
            })
          })
        })
      }), (0, _v14.jsx)(_v326.default, {
        alignment: "top",
        tooltipText: _v66.default.Preview,
        children: (0, _v14.jsx)(_v722, {
          children: (0, _v14.jsx)(_v720, {
            href: `/profile${window.location.pathname}?mode=preview`,
            forwardedAs: `${window.location.pathname}?mode=preview`,
            target: "_blank",
            onClick: _v15,
            onKeyDown: _v0 => {
              (0, _v50.onTab)(_v0, () => window.open(`/profile${window.location.pathname}?mode=preview`), !0);
            },
            children: (0, _v14.jsx)(_v705.Eye, {
              boxSize: 24
            })
          })
        })
      })]
    });
  }
  let _v716 = _v33.default.div.withConfig({
      displayName: "SectionToolbar__Container",
      componentId: "sc-78674cc1-0"
    })`
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  width: ${({
      shouldShowProfileReorderModal: _v0
    }) => _v0 ? (0, _v51.rem)(168) : (0, _v51.rem)(112)};
  height: ${(0, _v51.rem)(64)};
  border: ${(0, _v51.rem)(1)} dashed ${_v53.bokehTheme.colors.gray["50"]};
  border-radius: ${({
      shouldShowProfileReorderModal: _v0
    }) => _v0 ? (0, _v51.rem)(18) : _v711};
  box-shadow: 0 0 ${(0, _v51.rem)(10)} 0 ${(0, _v51.rgba)(0, 0, 0, .5)};
  padding: ${_v710};
  display: flex;
  justify-content: center;
  gap: ${_v712};
  align-items: center;
  /* One more than comment wrapper component */
  z-index: 3;
  position: fixed;
  bottom: ${(0, _v51.rem)(24)};
  right: ${(0, _v51.rem)(24)};

  &:before,
  &:after {
    content: '';
    display: block;
  }
  ${({
      scrolledToBottom: _v0
    }) => _v0 && _v33.css`
      position: absolute;
    `}
`,
    _v717 = _v33.css`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ${_v711};
  background: transparent;
  color: ${"var(--vimeo-colors-text-secondary, #657987)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 200ms ease-in-out,
    color 200ms ease-in-out;

  &:hover,
  &:focus-visible {
    background: ${_v714};
    color: ${_v713};
  }

  &:active {
    background: ${"var(--vimeo-colors-input-stroke, rgba(41, 81, 128, 0.24))"};
  }

  &:focus-visible {
    outline: ${(0, _v51.rem)(2)} solid ${"var(--vimeo-colors-focus, #00adef)"};
    outline-offset: ${(0, _v51.rem)(2)};
  }
`,
    _v718 = _v33.default.button.withConfig({
      displayName: "SectionToolbar__ViewIconWrapper",
      componentId: "sc-78674cc1-1"
    })`
  ${_v717}
  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      pointer-events: none;
      opacity: 0.35;
    `}
`,
    _v719 = _v33.default.span.withConfig({
      displayName: "SectionToolbar__IconWrapper",
      componentId: "sc-78674cc1-2"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({
      disable: _v0
    }) => _v0 && _v33.css`
      opacity: 0.35;
    `}
  ${({
      loading: _v0
    }) => _v0 && _v33.css`
      outline: none;
    `}
`,
    _v720 = (0, _v33.default)(_v704.default).withConfig({
      displayName: "SectionToolbar__PreviewWrapper",
      componentId: "sc-78674cc1-3"
    })`
  ${_v717}
`,
    _v721 = _v33.default.button.withConfig({
      displayName: "SectionToolbar__ReorderWrapper",
      componentId: "sc-78674cc1-4"
    })`
  ${_v717}
  ${({
      isActive: _v0
    }) => _v0 && _v33.css`
      background: ${_v714};
      color: ${_v713};
    `}
  ${({
      disabled: _v0
    }) => _v0 && _v33.css`
      pointer-events: none;
      opacity: 0.35;
    `}
`,
    _v722 = _v33.default.div.withConfig({
      displayName: "SectionToolbar__IconContainer",
      componentId: "sc-78674cc1-5"
    })`
  display: flex;
  width: ${(0, _v51.rem)(44)};
  height: ${(0, _v51.rem)(44)};
  align-items: center;
  justify-content: center;
  &:before,
  &:after {
    content: '';
    display: block;
  }
`;
  function _v723({
    viewType: _v0,
    toggleViewType: _v1,
    footerHeight: _v2,
    shouldAutoAddVideos: _v3,
    toggleAutoAddVideos: _v4,
    updatePublicVideosCount: _v5,
    publicVideosCount: _v6,
    showAutoAddVideosNotification: _v7
  }) {
    let {
        editMode: _v8
      } = (0, _v22.useContext)(_v43.default),
      {
        data: _v9,
        setSize: _v10,
        error: _v11,
        isValidating: _v12
      } = (0, _v22.useContext)(_v42),
      {
        width: _v13
      } = (0, _v60.useWindowSize)(),
      _v14 = (0, _v22.useRef)(null),
      _v15 = (0, _v22.useRef)(null),
      _v16 = (0, _v22.useRef)(!1),
      _v17 = (0, _v22.useRef)(!1),
      [_v18, _v19] = (0, _v22.useState)(null),
      [_v20, _v21] = (0, _v22.useState)(!1),
      [_v22, _v23] = (0, _v22.useState)(!1),
      [_v24, _v25] = (0, _v22.useState)({}),
      _v26 = (0, _v22.useMemo)(() => _v13 < _v61.BreakPoints.sm, [_v13]),
      _v27 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v9), [_v9]),
      _v28 = (0, _v22.useMemo)(() => _v27.some(_v0 => _v0.videos.total > 0), [_v27]),
      _v29 = (0, _v22.useMemo)(() => _v27.length > 0 && null == _v27[0].title, [_v27]),
      _v30 = (0, _v22.useMemo)(() => (0, _v50.hasNext)(_v9), [_v9]),
      _v31 = +!!_v29,
      _v32 = !_v9 && !_v11,
      _v33 = (0, _v22.useCallback)((_v0, _v1) => {
        null == _v15.current && (_v15.current = function (_v0, _v1 = "div") {
          let _v2 = document.getElementById(_v0);
          if (null == _v2) {
            let _v0 = document.createElement(_v1);
            return _v0.id = _v0, document.body.appendChild(_v0), document.getElementById(_v0);
          }
          return _v2;
        }((0, _v650.generateUID)()));
        let _v2 = _v15.current,
          _v3 = _v0.currentTarget;
        if (_v2 && _v3) {
          let {
              height: _v0,
              width: _v1
            } = _v3.getBoundingClientRect(),
            _v2 = _v3.cloneNode(!0);
          _v2.style.height = (0, _v51.rem)(_v0), _v2.style.width = (0, _v51.rem)(_v1), _v2.style.margin = (0, _v51.rem)(0), _v2.appendChild(_v2), _v2.style.position = "absolute", _v2.style.top = "100%", _v2.style.left = "100%", _v2.style.height = (0, _v51.rem)(_v0), _v2.style.width = (0, _v51.rem)(_v1);
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
      _v34 = (0, _v22.useCallback)(() => {
        _v15.current && (_v15.current.innerHTML = "", _v15.current.style.height = "auto", _v15.current.style.width = "auto");
      }, []),
      _v35 = (0, _v22.useCallback)((_v0, _v1) => {
        _v25(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []),
      _v36 = (_v0, _v1) => ({
        isSingleCellView: _v26,
        section: _v0,
        index: _v1,
        draggedOver: _v18,
        removeDragPortal: _v34,
        updatePublicVideosCount: _v5,
        shouldAutoAddVideos: _v3,
        toggleAutoAddVideos: _v4,
        showAutoAddVideosNotification: _v7,
        setSectionHasNext: _v35,
        disableDown: _v1 >= _v27.length - 1,
        disableUp: _v1 === _v31,
        onDragStart: _v33,
        setDragOver: _v0 => _v19(_v0)
      }),
      _v37 = (0, _v22.useCallback)(() => {
        _v16.current = !1, _v17.current = !1, _v21(!1);
      }, []),
      _v38 = (0, _v22.useCallback)(() => {
        _v30 && !_v16.current && _v10 && (_v16.current = !0, _v17.current = !1, _v21(!0), _v10(_v0 => (_v0 || 0) + 1).catch(() => {
          _v37();
        }));
      }, [_v30, _v37, _v10]);
    (0, _v22.useEffect)(() => {
      if (_v16.current) {
        if (_v12) {
          _v17.current = !0;
          return;
        }
        _v17.current && _v37();
      }
    }, [_v12, _v37]), (0, _v22.useEffect)(() => {
      _v30 || !_v16.current || _v12 || _v37();
    }, [_v30, _v12, _v37]), (0, _v22.useEffect)(() => {
      if (_v14.current) {
        let _v0,
          {
            offsetTop: _v1
          } = _v14.current;
        (document.documentElement?.scrollTop ?? 0) > _v1 && (_v0 = {
          behavior: navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? "auto" : "smooth",
          inline: "start",
          block: "start"
        }, _v14 && _v14 instanceof HTMLElement ? _v14.scrollIntoView(_v0) : _v14 && _v14.current && _v14.current.scrollIntoView(_v0));
      }
    }, [_v14, _v0]), (0, _v22.useEffect)(() => {
      _v25(_v0 => {
        let _v1 = new Set(_v27.map(_v0 => _v0.uri)),
          _v2 = !1,
          _v3 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v1.has(_v1) ? _v0[_v1] = _v2 : _v2 = !0, _v0), {});
        return _v2 ? _v3 : _v0;
      });
    }, [_v27]);
    let _v39 = (0, _v22.useMemo)(() => _v30 || _v20 || _v12, [_v30, _v20, _v12]);
    return _v27.length > 0 ? (0, _v14.jsxs)("section", {
      ref: _v14,
      children: [_v8 && (0, _v14.jsx)(_v715, {
        viewType: _v0,
        toggleViewType: _v1,
        onReorderClick: () => _v23(!0),
        footerHeight: _v2,
        disableToggleView: 0 === _v6,
        disableReorder: !_v28,
        reorderActive: _v22
      }), _v22 ? (0, _v14.jsx)(_v666, {
        sections: _v27,
        isShowing: _v22,
        hasNextSections: !!_v30,
        loadingNextSections: _v20,
        onLoadNextSections: _v38,
        onDismiss: () => _v23(!1)
      }) : null, _v27.map((_v0, _v1) => _v0 === _v49.ViewType.GRID ? (0, _v14.jsx)(_v689, {
        ..._v36(_v0, _v1)
      }, `GRID_${_v0.uri}`) : (0, _v14.jsx)(_v698, {
        ..._v36(_v0, _v1)
      }, `MASONARY_${_v0.uri}`)), _v39 ? (0, _v14.jsx)(_v315, {
        onClick: _v38,
        loading: _v20 || _v12,
        translationKey: "LoadMoreSections"
      }) : null]
    }) : _v32 ? (0, _v14.jsx)(_v414, {
      count: 6
    }) : null;
  }
  var _v724 = _v0.i(0),
    _v725 = _v0.i(0),
    _v726 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M18.89.07H1.1A1.1 1.1 0 0 0 0 1.17v17.72A1.1 1.1 0 0 0 1.09 20h9.59v-7.73H8.07v-3h2.6V7.08a3.63 3.63 0 0 1 3.88-4 21.45 21.45 0 0 1 2.33.12v2.69h-1.6c-1.26 0-1.5.59-1.5 1.46v1.93h3l-.39 3h-2.6V20h5.1A1.1 1.1 0 0 0 20 18.9V1.17a1.1 1.1 0 0 0-1.11-1.1z",
        fill: "#3c5a99"
      }));
    }),
    _v727 = (0, _v22.forwardRef)(function (_v0, _v1) {
      return _v22.default.createElement("svg", (0, _v154.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v22.default.createElement("path", {
        d: "M18.5 0h-17C.7 0 0 .6 0 1.4v17.1c0 .9.7 1.5 1.5 1.5h17c.8 0 1.5-.6 1.5-1.4V1.4c0-.8-.7-1.4-1.5-1.4z",
        fill: "#007bb5"
      }), _v22.default.createElement("path", {
        d: "M3 7.5h3V17H3V7.5zm1.4-4.7c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-1 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7m3.4 4.7h2.8v1.3C11 8 12 7.3 13.4 7.3c3 0 3.6 2 3.6 4.5V17h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5V17h-3V7.5z",
        fill: "#fff"
      }));
    });
  let _v728 = (0, _v22.forwardRef)((_v0, _v1) => (0, _v14.jsx)("svg", {
    viewBox: "0 0 16 20",
    ..._v0,
    ref: _v1,
    children: (0, _v14.jsxs)("g", {
      fill: "#1A2E3B",
      fillRule: "nonzero",
      children: [(0, _v14.jsx)("path", {
        d: "M7.998 2.414l3.295 3.293 1.414-1.414-4.002-4a1 1 0 00-1.414 0l-3.998 4 1.414 1.414 3.291-3.293z"
      }), (0, _v14.jsx)("path", {
        d: "M7 2h2v13H7z"
      }), (0, _v14.jsx)("path", {
        d: "M4.625 8v2H3a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1h-1.625V8H13a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3h1.625z"
      })]
    })
  }));
  function _v729({
    profileLink: _v0,
    profileName: _v1,
    onlyCTA: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      {
        facebookAppId: _v5
      } = (0, _v22.useContext)(_v32.ViewerContext),
      {
        userId: _v6
      } = (0, _v22.useContext)(_v43.default),
      _v7 = (0, _v22.useContext)(_v39.NotificationDispatchContext),
      {
        trackUserProfilePageShareButtonClicked: _v8,
        trackUserProfileShareActionClicked: _v9
      } = (0, _v30.useProfileTracking)(),
      _v10 = (0, _v27.translate)({
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
            singular: "Profil von {NAME} auf {VIMEO_MENTION} anzeigen"
          },
          "fr-FR": {
            singular: "Voir le profil de {NAME} sur {VIMEO_MENTION}"
          },
          "ja-JP": {
            singular: "{NAME}さんのプロフィールを{VIMEO_MENTION}で表示"
          },
          "ko-KR": {
            singular: "{VIMEO_MENTION}에서 {NAME}의 프로필을 확인하세요"
          },
          "pt-BR": {
            singular: "Ver o perfil de {NAME} no {VIMEO_MENTION}"
          },
          "zh-CN": {
            singular: "查看 {NAME} 的 {VIMEO_MENTION} 个人资料"
          }
        }
      }),
      _v11 = _v0 => {
        _v108(_v49.BPEvent.CLICK_PROFILE_SHARE_SOCIAL_PLATFORM, 1, {
          profile_id: _v6,
          platform: _v0
        }), _v9({
          userProfilePageUserId: String(_v6),
          userProfileShareAction: _v0
        });
      },
      _v12 = [{
        icon: (0, _v14.jsx)(_v740, {}),
        name: "Facebook",
        href: `https://www.facebook.com/dialog/share?app_id=${_v5}&display=popup&href=${encodeURI(`${_v0}?ref=fb-share&fl=pp&fe=fb`)}`,
        onClick: () => _v11(_v49.SOCIAL_PLATFORM.FACEBOOK)
      }, {
        icon: (0, _v14.jsx)(_v470, {}),
        name: "Twitter",
        href: `https://twitter.com/share?url=${encodeURI(`${_v0}?ref=tw-share&fl=pp&fe=tw`)}&text=${encodeURIComponent(_v10)}`,
        onClick: () => _v11(_v49.SOCIAL_PLATFORM.TWITTER)
      }, {
        icon: (0, _v14.jsx)(_v727, {}),
        name: "LinkedIn",
        href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(_v0)}&title=${encodeURI(_v1)}&fl=pp&fe=li`,
        onClick: () => _v11(_v49.SOCIAL_PLATFORM.LINKEDIN)
      }],
      _v13 = () => {
        (0, _v724.default)(`${_v0}?fl=pp&fe=sh`), _v11(_v49.SOCIAL_PLATFORM.CUSTOM_LINK), _v7({
          content: _v66.default.LinkCopiedToClipboard,
          status: "neutral"
        });
      };
    return (0, _v287.default)(_v3 ? _v0 => (0, _v50.onEsc)(_v0, () => _v4(!1)) : void 0, [_v3]), (0, _v14.jsxs)(_v730, {
      onlyCTA: _v2,
      children: [(0, _v14.jsx)(_v326.default, {
        tooltipText: _v66.default.Share,
        children: (0, _v14.jsx)(_v54.Button, {
          format: "soft",
          variant: "minimalTransparent",
          icon: (0, _v14.jsx)(_v728, {}),
          onClick: () => {
            _v108(_v49.BPEvent.CLICK_TO_SHARE_PROFILE, 1, {
              profile_id: _v6
            }), _v8({
              userProfilePageUserId: String(_v6)
            }), _v4(!0);
          }
        })
      }), (0, _v14.jsx)(_v56.Modal, {
        active: _v3,
        onOpen: () => _v4(!1),
        content: (0, _v14.jsxs)(_v738, {
          children: [(0, _v14.jsx)(_v247.default, {
            onClick: () => _v4(!1)
          }), (0, _v14.jsx)(_v739, {
            children: _v66.default.ShareProfile
          }), (0, _v14.jsx)(_v734, {
            children: _v12.map(_v0 => (0, _v14.jsxs)(_v732, {
              onClick: () => {
                _v0.onClick(), window.open(_v0.href, _v66.default.Share, "width=500,height=500");
              },
              children: [(0, _v14.jsx)(_v735, {
                children: _v0.icon
              }), (0, _v14.jsx)(_v736, {
                children: _v0.name
              })]
            }, _v0.name))
          }), (0, _v14.jsx)(_v195.Header, {
            size: "6",
            children: _v66.default.PageLink
          }), (0, _v14.jsxs)(_v733, {
            onClick: _v13,
            onKeyDown: _v0 => (0, _v50.onTab)(_v0, () => _v13()),
            children: [(0, _v14.jsx)(_v737, {
              children: _v0
            }), (0, _v14.jsx)(_v725.Link, {
              cursor: "pointer",
              boxSize: 18
            })]
          })]
        })
      })]
    });
  }
  let _v730 = _v33.default.div.withConfig({
      displayName: "Share__Wrapper",
      componentId: "sc-50d7fcd0-0"
    })`
  position: absolute;
  top: ${({
      onlyCTA: _v0
    }) => _v0 ? (0, _v51.rem)(10) : (0, _v51.rem)(30)};
  right: ${({
      onlyCTA: _v0
    }) => _v0 ? 0 : (0, _v51.rem)(95)};
  ${_v61.media.md`
    top: ${(0, _v51.rem)(10)};
    right: ${(0, _v51.rem)(10)};
  `}
`,
    _v731 = _v33.css`
  height: ${(0, _v51.rem)(36)};
  width: 100%;
  background-color: ${_v53.bokehTheme.colors.white};
  border-radius: ${(0, _v51.rem)(18)};
  padding: ${(0, _v51.rem)(7)} ${(0, _v51.rem)(12)} ${(0, _v51.rem)(5)};
  display: flex;
  cursor: pointer;
`,
    _v732 = _v33.default.button.withConfig({
      displayName: "Share__CircularContainer",
      componentId: "sc-50d7fcd0-1"
    })`
  ${_v731}
  margin-bottom: ${(0, _v51.rem)(6)};
  border: ${(0, _v51.rem)(1)} solid ${_v53.bokehTheme.colors.gray["50"]};
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${_v53.bokehTheme.colors.gray["50"]};
  }
`,
    _v733 = _v33.default.button.withConfig({
      displayName: "Share__PageLink",
      componentId: "sc-50d7fcd0-2"
    })`
  ${_v731}
  background-color: ${_v53.bokehTheme.colors.gray["50"]};
  justify-content: space-between;
  padding-top: ${(0, _v51.rem)(8)};
  border: none;
  &:hover,
  &:focus {
    background-color: ${_v53.bokehTheme.colors.gray["100"]};
  }
`,
    _v734 = _v33.default.div.withConfig({
      displayName: "Share__SocialLinksContainer",
      componentId: "sc-50d7fcd0-3"
    })`
  margin-bottom: ${(0, _v51.rem)(24)};
`,
    _v735 = _v33.default.div.withConfig({
      displayName: "Share__IconWrapper",
      componentId: "sc-50d7fcd0-4"
    })`
  height: ${(0, _v51.rem)(23)};
  width: ${(0, _v51.rem)(23)};
  margin-right: ${(0, _v51.rem)(15)};
`,
    _v736 = (0, _v33.default)(_v195.Header).attrs({
      size: "6"
    }).withConfig({
      displayName: "Share__GrayHeader",
      componentId: "sc-50d7fcd0-5"
    })`
  color: ${_v53.bokehTheme.colors.gray["500"]};
`,
    _v737 = (0, _v33.default)(_v736).withConfig({
      displayName: "Share__ProfileLink",
      componentId: "sc-50d7fcd0-6"
    })`
  font-weight: normal;
  margin-bottom: 0;
  max-width: calc(100% - ${(0, _v51.rem)(40)});
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,
    _v738 = _v33.default.div.withConfig({
      displayName: "Share__Content",
      componentId: "sc-50d7fcd0-7"
    })`
  padding: ${(0, _v51.rem)(36)};
  background-color: ${_v53.bokehTheme.colors.white};
  width: ${(0, _v51.rem)(360)};
  border: ${(0, _v51.rem)(1)} solid ${_v49.COLORS.PALE_GRAY};
  border-radius: ${(0, _v51.rem)(3)};
`,
    _v739 = (0, _v33.default)(_v71.Text).withConfig({
      displayName: "Share__Title",
      componentId: "sc-50d7fcd0-8"
    })`
  display: block;
  font-weight: bold;
  font-size: ${(0, _v51.rem)(18)};
  line-height: ${(0, _v51.rem)(20)};
  color: ${_v53.bokehTheme.colors.gray["800"]};
  margin-bottom: ${(0, _v51.rem)(24)};
`,
    _v740 = (0, _v33.default)(_v726).withConfig({
      displayName: "Share__Facebook",
      componentId: "sc-50d7fcd0-9"
    })`
  border-radius: ${(0, _v51.rem)(12)};
`;
  function _v741({
    userName: _v0,
    pictures: _v1,
    actionButtons: _v2,
    isShowing: _v3,
    isExpert: _v4
  }) {
    return (0, _v14.jsxs)(_v743, {
      show: _v3,
      children: [(0, _v14.jsxs)(_v742, {
        children: [(0, _v14.jsx)(_v744, {
          alt: _v0,
          size: "md",
          src: _v1.sizes[1].link,
          nameProps: {
            name: _v0
          }
        }), (0, _v14.jsx)(_v745, {
          children: _v0
        }), _v4 && (0, _v14.jsx)(_v747, {})]
      }), null != _v2 ? (0, _v14.jsx)(_v746, {
        children: _v2
      }) : null]
    });
  }
  let _v742 = _v33.default.div.withConfig({
      displayName: "StickyTopNav__FlexWrapper",
      componentId: "sc-d846f686-0"
    })`
  display: flex;
  max-width: calc(100% - ${(0, _v51.rem)(90)});
`,
    _v743 = (0, _v33.default)(_v742).withConfig({
      displayName: "StickyTopNav__Container",
      componentId: "sc-d846f686-1"
    })`
  height: ${(0, _v51.rem)(70)};
  width: 100%;
  max-width: 100%;
  background-color: ${_v53.bokehTheme.colors.white};
  padding: ${(0, _v51.rem)(10)};
  box-shadow: 0 ${(0, _v51.rem)(5)} ${(0, _v51.rem)(12)} 0 rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  visibility: hidden;
  opacity: 0;
  transition: all 230ms linear;
  top: ${(0, _v51.rem)(41)};
  @media (min-width: ${0}px) {
    top: ${(0, _v51.rem)(66)};
  }
  ${({
      show: _v0
    }) => _v0 && _v33.css`
      visibility: visible;
      opacity: 1;
    `}
  ${_v61.media.md`
    display: none;
  `}
`,
    _v744 = (0, _v33.default)(_v114.Avatar).withConfig({
      displayName: "StickyTopNav__UserAvatar",
      componentId: "sc-d846f686-2"
    })`
  height: ${(0, _v51.rem)(50)};
  width: ${(0, _v51.rem)(50)};
`,
    _v745 = _v33.default.div.withConfig({
      displayName: "StickyTopNav__UserName",
      componentId: "sc-d846f686-3"
    })`
  font-size: ${(0, _v51.rem)(20)};
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(-.5)};
  line-height: ${(0, _v51.rem)(32)};
  margin: ${(0, _v51.rem)(10)};
  color: ${_v53.bokehTheme.colors.gray["800"]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
    _v746 = (0, _v33.default)(_v742).withConfig({
      displayName: "StickyTopNav__CtaWrapper",
      componentId: "sc-d846f686-4"
    })`
  margin-top: ${(0, _v51.rem)(5)};
`,
    _v747 = (0, _v33.default)(_v169).withConfig({
      displayName: "StickyTopNav__StyledExpertsBadge",
      componentId: "sc-d846f686-5"
    })`
  align-self: center;
  font-size: ${(0, _v51.rem)(9)};
  border-radius: ${(0, _v51.rem)(2)};
  margin-right: ${(0, _v51.rem)(4)};
  transform: translateY(${(0, _v51.rem)(2)});
  a {
    font-weight: 700;
  }
`;
  function _v748({
    totalVideos: _v0,
    videosListUrl: _v1
  }) {
    if (!(_v0 > 0 && _v0 < 0)) return null;
    let _v2 = (0, _v27.translate)({
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
    return (0, _v14.jsx)(_v749, {
      children: _v1 ? (0, _v14.jsx)(_v750, {
        href: _v1,
        children: _v2
      }) : _v2
    });
  }
  let _v749 = (0, _v33.default)(_v195.Header).attrs({
      size: "2",
      format: "soft"
    }).withConfig({
      displayName: "TotalVideos__VideosCount",
      componentId: "sc-19b4f877-0"
    })`
  font-weight: bold;
  letter-spacing: ${(0, _v51.rem)(-.7)};
`,
    _v750 = _v33.default.a.withConfig({
      displayName: "TotalVideos__VideosLink",
      componentId: "sc-19b4f877-1"
    })`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`,
    _v751 = {};
  function _v752({
    children: _v0,
    total: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useReducer)((_v0, _v1) => {
        switch (_v1.type) {
          case "SELECTED_CATEGORY":
            if (!(0, _v318.default)(_v0.selectedCategory, _v1.payload)) return {
              ..._v0,
              selectedCategory: _v1.payload
            };
            break;
          case "PLAY_SECTION_VIDEO":
            return {
              ..._v0,
              playerOptions: {
                ..._v1.payload,
                showPlayer: !0
              }
            };
          case "HIDE_VIDEO":
            return {
              ..._v0,
              playerOptions: {
                ..._v0.playerOptions,
                showPlayer: !1
              }
            };
          case "TOTAL_VIDEOS":
            return {
              ..._v0,
              totalVideos: _v1.payload
            };
        }
        return _v0;
      }, _v751),
      {
        userId: _v4
      } = (0, _v22.useContext)(_v43.default),
      {
        cache: _v5
      } = (0, _v513.useSWRConfig)(),
      {
        data: _v6
      } = (0, _v22.useContext)(_v42),
      {
        data: _v7
      } = _v317(_v2.selectedCategory?.word),
      _v8 = (0, _v22.useMemo)(() => (0, _v50.convertToArray)(_v7), [_v7]),
      _v9 = (0, _v22.useCallback)(() => {
        let _v0 = (0, _v50.convertToArray)(_v6),
          _v1 = new Map();
        return _v0.forEach((_v0, _v1) => {
          let _v2 = (0, _v50.getIdFromUri)(_v0.uri),
            _v3 = RegExp(`^\\$inf\\$users/${_v4}/profile_sections/${-1 === _v2 ? "default" : _v2}/videos`),
            _v4 = new Map();
          Array.from(_v5.keys()).filter(_v0 => _v3.test(_v0)).forEach(_v0 => {
            let _v1 = _v5.get(_v0)?.data;
            _v1 && _v1.reduce((_v0, _v1) => _v1 ? _v0.concat(_v1.items) : _v0, []).forEach((_v0, _v1) => {
              _v4.set(_v1, _v0.clip);
            });
          }), _v1.set(_v1, _v4);
        }), _v1;
      }, [_v5, _v6, _v4]),
      _v10 = (0, _v22.useCallback)(() => {
        if (_v2.selectedCategory) {
          let _v0 = new Map(),
            _v1 = new Map();
          return _v8.forEach((_v0, _v1) => _v1.set(_v1, _v0)), _v0.set(0, _v1);
        }
        return _v9();
      }, [_v2.selectedCategory, _v9, _v8]),
      _v11 = (0, _v22.useCallback)((_v0, _v1) => {
        let _v2,
          _v3,
          _v4,
          _v5 = _v10(),
          _v6 = _v5.get(_v0);
        if (_v6) {
          if (_v2 = _v6.get(_v1), _v6.size > _v1 + 1 ? _v4 = {
            sectionIndex: _v0,
            videoIndex: _v1 + 1
          } : _v5.size > _v0 + 1 && (_v4 = {
            sectionIndex: _v0 + 1,
            videoIndex: 0
          }), _v6.size > 0 && _v1 > 0) _v3 = {
            sectionIndex: _v0,
            videoIndex: _v1 - 1
          };else if (_v0 > 0) {
            let _v0 = _v5.get(_v0 - 1);
            _v0 && (_v3 = {
              sectionIndex: _v0 - 1,
              videoIndex: _v0.size - 1
            });
          }
          return {
            clip: _v2,
            previous: _v3,
            next: _v4
          };
        }
        return {
          clip: void 0,
          previous: void 0,
          next: void 0
        };
      }, [_v10]),
      _v12 = (0, _v22.useCallback)(({
        current: _v0,
        navDirection: _v1
      }) => {
        let {
            sectionIndex: _v2,
            videoIndex: _v3
          } = _v0,
          _v4 = _v11(_v2, _v3);
        _v3({
          type: _v319.PLAY_SECTION_VIDEO,
          payload: {
            ..._v4,
            current: _v0,
            currentTime: 0,
            navDirection: _v1
          }
        });
      }, [_v11, _v3]);
    return (0, _v22.useEffect)(() => {
      _v2.selectedCategory || _v3({
        type: _v319.TOTAL_VIDEOS,
        payload: _v1
      });
    }, [_v3, _v2.selectedCategory, _v1]), (0, _v14.jsx)(_v14.Fragment, {
      children: _v0({
        state: _v2,
        dispatch: _v3,
        triggerPlayback: _v12
      })
    });
  }
  let _v753 = [{
      label: _v66.default.HideFromProfile,
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
    _v754 = (0, _v22.lazy)(() => _v0.A(0)),
    _v755 = (0, _v22.lazy)(() => _v0.A(0));
  function _v756({
    profile: _v0,
    editMode: _v1,
    Footer: _v2,
    playerAssetUrls: _v3,
    hideContacts: _v4,
    canEditPersonalInfo: _v5
  }) {
    let {
        backgroundVideo: _v6,
        bio: _v7,
        categories: _v8,
        contactEmails: _v9,
        createdTime: _v10,
        gender: _v11,
        link: _v12,
        locationDetails: _v13,
        membership: _v14,
        metadata: {
          connections: {
            albums: _v15,
            followers: _v16,
            following: _v17,
            videos: _v18,
            vimeoExperts: _v19
          },
          publicVideos: {
            total: _v20
          }
        },
        name: _v21,
        pictures: _v22,
        profileDiscovery: _v23,
        profilePreferences: {
          layout: _v24,
          profileType: _v25,
          shouldAutoAddVideos: _v26,
          showAddVideoTip: _v27,
          showProfileTypeTip: _v28,
          showJoinVimeoExpertsModal: _v29
        },
        projectTypes: _v30,
        skills: _v31,
        totalCollectionCount: _v32,
        uri: _v33,
        verified: _v34,
        websites: _v35
      } = _v0,
      {
        onUserUpdate: _v36,
        onPreferenceUpdate: _v37,
        fetchPublicVideosCount: _v38
      } = _v299(),
      [_v39, _v40] = (0, _v22.useState)(!1);
    (0, _v22.useEffect)(() => {
      _v40(_v1 && "creative_professional" == _v25 && _v29 && _v19?.isEnrolled === !1);
    }, [_v1, _v25, _v29, _v19]), (0, _v22.useEffect)(() => {
      let _v0 = document?.referrer || "";
      _v108(_v49.BPEvent.VISIT_PROFILE_PAGE, 2, {
        referrer: _v0,
        profile_id: (0, _v50.getIdFromUri)(_v33),
        profile_plan: _v14?.type ?? "",
        can_work_remotely: !1,
        available_for_hire: !1
      });
    }, []);
    let [_v41, _v42] = (0, _v22.useState)(!1),
      [_v43, _v44] = (0, _v22.useState)(_v28),
      [_v45, _v46] = (0, _v22.useState)(!1),
      _v47 = (0, _v50.getIdFromUri)(_v33),
      _v48 = _v12 ? `${_v12.replace(/\/$/, "")}/videos` : void 0,
      {
        trackUserProfileJoinExpertsClicked: _v49
      } = (0, _v30.useProfileTracking)(),
      _v50 = (0, _v60.useWindowSize)(),
      _v51 = (0, _v22.useMemo)(() => _v50.width >= _v61.BreakPoints.md, [_v50.width]),
      {
        locale: _v52,
        recaptchaSiteKey: _v53,
        user: _v54,
        xsrft: _v55,
        isFromCopyrightRestrictedRegion: _v56
      } = (0, _v22.useContext)(_v32.ViewerContext),
      _v57 = (0, _v22.useRef)(null),
      _v58 = document?.referrer || "",
      _v59 = (0, _v22.useCallback)(_v0 => {
        _v42(!0), _v44(!1), _v37({
          profilePreferences: {
            showProfileTypeTip: !1
          }
        }, !1);
        let _v1 = new FormData(),
          _v2 = [(0, _v47.decamelizeDeep)({
            questionKey: "segment",
            answerKey: _v0
          })];
        _v1.append("answers", JSON.stringify(_v2)), _v1.append("token", _v55), fetch("/survey/profile_onboarding", {
          method: "POST",
          body: _v1
        });
      }, [_v37, _v55]),
      _v60 = _v1 || _v4 || _v56 ? null : (0, _v14.jsx)(_v428, {
        xsrft: _v55,
        isOwner: _v47 === _v54?.id,
        profileId: _v47
      });
    (0, _v22.useEffect)(() => {
      _v44(_v28);
    }, [_v28]);
    let _v61 = _v47 === _v54?.id;
    return (0, _v14.jsx)(_v58.PlayerContextProvider, {
      type: _v59.PlayerType.BarebonePlayer,
      assetUrls: _v3,
      children: (0, _v14.jsxs)(_v427, {
        profileId: _v47,
        children: [_v61 && !_v23 && (0, _v14.jsx)(_v767, {
          format: "primary",
          children: (0, _v14.jsx)(_v57.Paragraph, {
            size: "2",
            children: _v66.default.HiddenProfileNotice
          })
        }), (0, _v14.jsx)(_v438, {
          isDesktopView: _v51,
          footerRef: _v57,
          referrerUrl: _v58,
          isOwner: _v61,
          stickyTopNav: _v0 => (0, _v14.jsx)(_v741, {
            userName: _v0.name,
            pictures: _v22,
            actionButtons: _v60,
            isShowing: _v0 && !_v1,
            isExpert: _v0.isExpert
          }),
          header: _v1 ? (0, _v14.jsx)(_v290, {
            profile: _v0
          }) : !!_v6?.length && (0, _v14.jsx)(_v290, {
            profile: _v0
          }),
          infoPanel: (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsxs)(_v760, {
              children: [(0, _v14.jsx)(_v623, {
                editMode: _v1,
                name: _v21,
                picture: _v22
              }), !_v51 && _v60 ? (0, _v14.jsx)(_v758, {
                children: _v60
              }) : null, (0, _v14.jsx)(_v729, {
                onlyCTA: _v1 || _v4,
                profileLink: _v12,
                profileName: _v21
              })]
            }), (0, _v14.jsx)(_v627, {
              name: _v21,
              onNameSubmit: _v36,
              canEditPersonalInfo: _v5,
              isExpert: _v0.isExpert
            }), (0, _v14.jsx)(_v483, {
              value: _v13
            }), "en" === _v52 && (0, _v14.jsx)(_v639, {
              gender: _v11,
              pronounsList: _v753,
              onPronounUpdate: _v36
            }), (0, _v14.jsx)(_v82, {
              onUpdate: _v36,
              value: _v7,
              isDesktopView: _v51
            }), _v4 ? (0, _v14.jsx)(_v493, {
              name: _v21,
              profileUserId: _v47,
              xsrft: _v55
            }) : (0, _v14.jsxs)(_v14.Fragment, {
              children: [(0, _v14.jsx)(_v303, {
                editMode: _v1,
                emails: _v9?.emails || []
              }), _v34 && (0, _v14.jsx)(_v478, {
                links: _v35
              }), _v51 && _v60 ? (0, _v14.jsx)(_v758, {
                children: _v60
              }) : null]
            })]
          }),
          aboutPanel: (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)(_v100, {
              userLink: _v12,
              totalAlbums: _v15.total,
              totalFollowers: _v16.total,
              totalFollowing: _v17.total,
              totalCollections: _v32,
              membership: _v14?.badge,
              createdTime: _v10 || "",
              userId: _v47,
              disableCollections: _v56
            }), (0, _v14.jsx)(_v190, {
              userId: _v47
            })]
          }),
          videoPanel: (0, _v14.jsx)(_v752, {
            total: _v20,
            children: ({
              state: _v0,
              dispatch: _v1,
              triggerPlayback: _v2
            }) => {
              let {
                selectedCategory: _v3
              } = _v0;
              return _v20 ? (0, _v14.jsxs)(_v14.Fragment, {
                children: [(0, _v14.jsx)(_v748, {
                  totalVideos: _v0.totalVideos ?? 0,
                  videosListUrl: _v48
                }), (0, _v14.jsx)(_v109, {
                  userId: _v47,
                  selected: _v3,
                  onCategoryChange: _v0 => _v1({
                    type: _v319.SELECTED_CATEGORY,
                    payload: _v0
                  }),
                  categories: _v8
                }), _v3 ? (0, _v14.jsxs)(_v14.Fragment, {
                  children: [_v1 && (0, _v14.jsx)(_v715, {
                    viewType: _v24,
                    footerHeight: _v57.current?.offsetHeight || 0,
                    disableToggleView: !0
                  }), (0, _v14.jsx)(_v415, {
                    selectedCategory: _v3,
                    dispatch: _v1
                  })]
                }) : (0, _v14.jsx)(_v723, {
                  viewType: _v24,
                  toggleViewType: _v0 => _v37({
                    profilePreferences: {
                      layout: _v0
                    }
                  }),
                  shouldAutoAddVideos: _v26,
                  toggleAutoAddVideos: _v0 => _v37({
                    profilePreferences: {
                      shouldAutoAddVideos: _v0
                    }
                  }),
                  footerHeight: _v57.current?.offsetHeight || 0,
                  publicVideosCount: _v20,
                  updatePublicVideosCount: _v38,
                  showAutoAddVideosNotification: () => _v46(!0)
                }), _v0.playerOptions && _v0.playerOptions.showPlayer && _v0.playerOptions.clip ? (0, _v14.jsx)(_v759, {
                  children: (0, _v14.jsx)(_v579, {
                    profile: _v0,
                    playerAssetUrls: _v3,
                    onClose: () => _v1({
                      type: _v319.HIDE_VIDEO
                    }),
                    onChange: (_v0, _v1) => _v2({
                      current: _v0,
                      navDirection: _v1
                    }),
                    clip: _v0.playerOptions.clip,
                    ..._v0.playerOptions
                  }, "playback_" + _v0.playerOptions.clip.uri)
                }) : null]
              }) : (0, _v14.jsx)(_v515, {
                showAddVideoCta: 0 !== _v18.total,
                editMode: _v1,
                hasCoverVideo: !!_v6?.length,
                shouldAutoAddVideos: _v26,
                toggleAutoAddVideos: _v0 => _v37({
                  profilePreferences: {
                    shouldAutoAddVideos: _v0
                  }
                }),
                updatePublicVideosCount: _v38
              });
            }
          })
        }), _v1 && (0, _v14.jsxs)(_v22.Suspense, {
          fallback: (0, _v14.jsx)(_v14.Fragment, {}),
          children: [_v43 || _v41 ? (0, _v14.jsx)(_v755, {
            onDismiss: () => {
              _v41 ? _v42(!1) : _v44(!1), _v37({
                profilePreferences: {
                  showProfileTypeTip: !1
                }
              }, !1);
            },
            selected: _v25,
            onProfileTypeSubmit: _v59,
            playerAssetUrls: _v3
          }) : null, !(_v43 || _v41) && _v27 && _v45 ? (0, _v14.jsx)(_v754, {
            onClose: () => {
              _v46(!1), _v37({
                profilePreferences: {
                  showAddVideoTip: !1
                }
              }, !1);
            },
            onAutoAddVideos: _v0 => {
              _v37({
                profilePreferences: {
                  shouldAutoAddVideos: _v0,
                  showAddVideoTip: !1
                }
              }, !1);
            }
          }) : null]
        }), (0, _v14.jsx)(_v762, {
          active: _v39,
          content: (0, _v14.jsxs)(_v761, {
            children: [(0, _v14.jsx)(_v52.CloseX, {
              position: "absolute",
              top: (0, _v51.rem)(18),
              right: (0, _v51.rem)(18),
              boxSize: (0, _v51.rem)(20),
              cursor: "pointer",
              color: "white",
              _hover: {
                boxSize: (0, _v51.rem)(22),
                top: (0, _v51.rem)(17),
                right: (0, _v51.rem)(17)
              },
              onClick: () => {
                _v37({
                  profilePreferences: {
                    showJoinVimeoExpertsModal: !1
                  }
                }, !1), _v40(!1);
              }
            }), (0, _v14.jsx)(_v766, {
              src: "https://i.vimeocdn.com/custom_asset/3286"
            }), (0, _v14.jsxs)(_v763, {
              children: [(0, _v14.jsx)(_v764, {
                children: _v66.default.JoinExpertsInfoModalTitle
              }), (0, _v14.jsx)(_v765, {
                children: _v66.default.JoinExpertsInfoModalContent
              }), (0, _v14.jsx)(_v54.Button, {
                element: "a",
                href: "/experts/dashboard",
                size: "lg",
                onClick: () => _v49({
                  userProfilePageUserId: String(_v47)
                }),
                children: _v66.default.JoinExperts
              })]
            })]
          })
        }), (0, _v14.jsx)("div", {
          ref: _v57,
          children: _v2
        })]
      })
    });
  }
  let _v757 = _v33.keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%) scale(0.25);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,
    _v758 = _v33.default.div.withConfig({
      displayName: "App__CtaContainer",
      componentId: "sc-a1e4a0f8-0"
    })`
  margin-top: ${(0, _v51.rem)(30)};
  display: flex;
  ${_v61.media.md`
    margin: ${(0, _v51.rem)(20)} ${(0, _v51.rem)(10)} 0;
  `}
`,
    _v759 = _v33.default.section.withConfig({
      displayName: "App__ContentContainer",
      componentId: "sc-a1e4a0f8-1"
    })`
  position: fixed;
  background-color: ${_v53.bokehTheme.colors.gray["900"]};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1002; // higher than the top nav
  animation: ${_v757} 230ms ease-in;
`,
    _v760 = _v33.default.div.withConfig({
      displayName: "App__Wrapper",
      componentId: "sc-a1e4a0f8-2"
    })`
  display: flex;
  justify-content: space-between;
`,
    _v761 = _v33.default.div.withConfig({
      displayName: "App__ModalStyled",
      componentId: "sc-a1e4a0f8-3"
    })`
  padding: ${(0, _v51.rem)(0)};
  border-radius: ${(0, _v51.rem)(16)};
  background: linear-gradient(107.96deg, #1b4070 14.43%, #2b103c 96.02%);
  max-width: ${(0, _v51.rem)(390)};
`,
    _v762 = (0, _v33.default)(_v56.Modal).withConfig({
      displayName: "App__ModalContainer",
      componentId: "sc-a1e4a0f8-4"
    })`
  @media (min-width: ${_v61.BreakPoints.xmd}px) {
    bottom: ${(0, _v51.rem)(40)};
    right: ${(0, _v51.rem)(32)};
    position: fixed;
  }
`,
    _v763 = _v33.default.div.withConfig({
      displayName: "App__Content",
      componentId: "sc-a1e4a0f8-5"
    })`
  padding: ${(0, _v51.rem)(24)};
`,
    _v764 = _v33.default.div.withConfig({
      displayName: "App__CustomHeader",
      componentId: "sc-a1e4a0f8-6"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: ${(0, _v51.rem)(28)};
  line-height: ${(0, _v51.rem)(33)};
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(16)};
`,
    _v765 = _v33.default.div.withConfig({
      displayName: "App__CustomParagraph",
      componentId: "sc-a1e4a0f8-7"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: ${(0, _v51.rem)(16)};
  line-height: ${(0, _v51.rem)(24)};
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(40)};
`,
    _v766 = _v33.default.img.withConfig({
      displayName: "App__CustomImage",
      componentId: "sc-a1e4a0f8-8"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  width: 100%;
`,
    _v767 = (0, _v33.default)(_v55.Notice).withConfig({
      displayName: "App__ProfileHiddenNotice",
      componentId: "sc-a1e4a0f8-9"
    })`
  position: sticky;
  top: ${(0, _v51.rem)(64)};
  display: flex;
  justify-content: center;
  background: #d9f3fd;
  z-index: 99;
  gap: ${(0, _v51.rem)(8)};
  margin-bottom: 0;
  span {
    position: relative;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
  }
`;
  var _v768 = _v0.i(0),
    _v769 = _v0.i(0);
  function _v770({
    userId: _v0
  }) {
    let _v1 = (0, _v434.useViewer)();
    return (0, _v14.jsx)(_v656.Flex, {
      id: "profile-private-page",
      height: "70vh",
      alignItems: "center",
      textAlign: "center",
      children: (0, _v14.jsxs)(_v654.Box, {
        margin: "0 auto",
        paddingX: "200",
        children: [(0, _v14.jsx)(_v768.VimeoV, {
          width: "45px",
          height: "40px",
          mb: "lg"
        }), (0, _v14.jsx)(_v657.Header, {
          size: "xl",
          children: (0, _v27.translate)({
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
        }), _v1.user && (0, _v14.jsx)(_v656.Flex, {
          justify: "center",
          ml: "-1rem",
          mt: "lg",
          children: (0, _v14.jsx)(_v769.default, {
            forPrivatePage: !0,
            isDesktopView: !1,
            buttonLabel: (0, _v27.translate)({
              singular: "Report this person",
              dictionary: {
                es: {
                  singular: "Denunciar a esta persona"
                },
                "de-DE": {
                  singular: "Diese Person melden"
                },
                "fr-FR": {
                  singular: "Signaler cette personne"
                },
                "ja-JP": {
                  singular: "このメンバーを通報する"
                },
                "ko-KR": {
                  singular: "사용자 신고하기"
                },
                "pt-BR": {
                  singular: "Denunciar esta pessoa"
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
  var _v771 = _v0.i(0);
  let _v772 = _v22.useLayoutEffect,
    _v773 = _v33.createGlobalStyle`
  html,
  html[data-theme='light'],
  html[data-theme='dark'] {
    background-color: #FFFFFF !important;
  }
`,
    _v774 = "chakra-ui-dark",
    _v775 = "chakra-ui-light";
  function _v776(_v0) {
    let _v1 = document.documentElement,
      _v2 = document.body;
    _v1.getAttribute("data-theme") !== _v0 && _v1.setAttribute("data-theme", _v0), _v1.style.colorScheme !== _v0 && (_v1.style.colorScheme = _v0);
    let _v3 = "dark" === _v0 ? _v774 : _v775,
      _v4 = "dark" === _v0 ? _v775 : _v774;
    _v2.classList.contains(_v3) || _v2.classList.add(_v3), _v2.classList.contains(_v4) && _v2.classList.remove(_v4);
  }
  function _v777({
    children: _v0
  }) {
    return _v772(() => {
      if ("u" < typeof document) return;
      _v776("light");
      let _v0 = () => _v776("light"),
        _v1 = new MutationObserver(_v0);
      _v1.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-theme", "style"]
      });
      let _v2 = new MutationObserver(_v0);
      return _v2.observe(document.body, {
        attributes: !0,
        attributeFilter: ["class"]
      }), () => {
        _v1.disconnect(), _v2.disconnect(), _v776(function () {
          try {
            let _v0 = window.localStorage.getItem("bokeh-color-mode");
            if ("dark" === _v0 || "light" === _v0) return _v0;
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
          } catch {}
          return "light";
        }());
      };
    }, []), (0, _v14.jsx)(_v771.default, {
      colorMode: "light",
      bokehStorageKey: "profile-v1-light-lock-color-mode",
      children: (0, _v14.jsxs)(_v33.ThemeProvider, {
        theme: _v38.themes.light,
        children: [(0, _v14.jsx)(_v773, {}), _v0]
      })
    });
  }
  function _v778({
    playerAssetUrls: _v0,
    userId: _v1,
    isMod: _v2
  }) {
    let _v3,
      _v4,
      _v5,
      _v6,
      _v7 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        capabilities: _v8
      } = (0, _v25.useCapability)(["canEditPersonalInfo"]),
      _v9 = (0, _v21.useRouter)(),
      [_v10, _v11] = (0, _v22.useState)(!1),
      {
        trackUserProfilePageDisplayed: _v12
      } = (0, _v30.useProfileTracking)(),
      _v13 = _v7?.user?.id.toString() === _v1 || _v7?.user?.link.endsWith(_v1) || !1,
      _v14 = _v8?.canEditPersonalInfo ?? !1;
    (0, _v22.useEffect)(() => {
      let _v0 = location.search.includes("preview");
      _v13 && !_v0 && _v11(!0), !_v13 && _v0 && _v9.replace(location.pathname);
    }, [_v13]);
    let {
        data: _v15,
        error: _v16,
        mutate: _v17,
        isValidating: _v18
      } = (_v3 = (0, _v45.default)(), _v4 = ["name", "gender", "bio", "uri", "link", "background_video", "location_details", "pictures", "verified", "metadata.public_videos.total", "metadata.connections.videos.total", "metadata.connections.albums.total", "metadata.connections.followers.total", "metadata.connections.following.total", "metadata.public_videos.total", "metadata.connections.vimeo_experts.is_enrolled", "total_collection_count", "created_time", "profile_preferences", "membership", "clients", "skills", "project_types", "rates", "categories", "is_expert", "profile_discovery"], _v4.push("websites", "contact_emails"), _v5 = (0, _v22.useCallback)(_v0 => _v3(_v0, {
        fields: _v4,
        fetch_user_profile: "1"
      }), [_v3, _v4]), (0, _v44.default)(`users/${_v1}`, _v5)),
      _v19 = (_v6 = (0, _v45.default)(), (0, _v46.default)(_v0 => {
        let _v1 = {
            ..._v49.SECTION_VARIABLES,
            page: _v0 + 1
          },
          _v2 = (0, _v48.buildQueryString)((0, _v47.decamelizeDeep)(_v1));
        return `users/${_v1}/profile_sections${_v2}`;
      }, _v6)),
      _v20 = !_v15 && !_v16;
    if ((0, _v29.usePicoEffect)(() => {
      if (!_v15 || !_v7) return !1;
      let _v0 = /^\d+$/.test(_v1) ? "default_url" : "custom_url";
      _v12({
        userProfilePageUserId: (0, _v50.getIdFromUri)(_v15.uri).toString(),
        referrerPage: (0, _v28.deriveReferrerPage)(),
        userProfilePageType: _v0,
        userProfilePageViewerAuthStatus: (0, _v28.deriveViewerAuthStatus)(_v7)
      });
    }, [_v15, _v1, _v7], {
      once: !0
    }), !_v7 || _v20) return (0, _v14.jsx)(_v35, {});
    if (_v16 && 404 === _v16.status) throw new _v26.ResourceNotFoundError(_v16);
    return _v16 || !_v15 ? null : (0, _v14.jsx)(_v41.Provider, {
      value: {
        data: _v15,
        error: _v16,
        mutate: _v17,
        isValidating: _v18
      },
      children: (0, _v14.jsx)(_v42.Provider, {
        value: _v19,
        children: (0, _v14.jsxs)(_v43.default.Provider, {
          value: {
            idOrUserName: _v1,
            editMode: _v10,
            userId: (0, _v50.getIdFromUri)(_v15.uri)
          },
          children: [_v2 && (0, _v14.jsx)(_v23.Alert, {
            status: "error",
            size: "md",
            borderRadius: "0",
            children: (0, _v14.jsxs)(_v24.Text, {
              variant: "body-xl",
              children: [(0, _v14.jsx)("strong", {
                children: (0, _v27.translate)({
                  singular: "This profile is private: ",
                  dictionary: {
                    es: {
                      singular: "Este perfil es privado: "
                    },
                    "de-DE": {
                      singular: "Dieses Profil ist privat: "
                    },
                    "fr-FR": {
                      singular: "Ce profil est privé : "
                    },
                    "ja-JP": {
                      singular: "このプロフィールは非公開です： "
                    },
                    "ko-KR": {
                      singular: "이 프로필은 비공개 상태입니다. "
                    },
                    "pt-BR": {
                      singular: "Este perfil é privado: "
                    },
                    "zh-CN": {
                      singular: "此个人资料是私密的： "
                    }
                  }
                })
              }), (0, _v27.translate)({
                singular: "Only staff and the profile's owner can see this page",
                dictionary: {
                  es: {
                    singular: "solo el personal y el propietario del perfil pueden ver esta página"
                  },
                  "de-DE": {
                    singular: "Nur Mitarbeitende und Profilinhaber können diese Seite sehen"
                  },
                  "fr-FR": {
                    singular: "Seul le personnel et le propriétaire du profil peuvent voir cette page."
                  },
                  "ja-JP": {
                    singular: "このページを見ることができるのは、スタッフとプロフィールの所有者だけです。"
                  },
                  "ko-KR": {
                    singular: "직원과 프로필 소유자만 이 페이지를 볼 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "somente a equipe e o proprietário do perfil podem visualizar esta página"
                  },
                  "zh-CN": {
                    singular: "仅员工和资料所有者可查看此页面"
                  }
                }
              })]
            })
          }), (0, _v14.jsx)(_v756, {
            profile: _v15,
            editMode: _v10,
            playerAssetUrls: _v0,
            hideContacts: !1,
            canEditPersonalInfo: _v14,
            Footer: (0, _v14.jsx)(_v31.default, {
              ..._v7
            })
          })]
        })
      })
    });
  }
  var _v31 = _v31;
  function _v779() {
    return (0, _v14.jsx)(_v780, {
      children: (0, _v14.jsx)(_v34.Spinner, {
        size: "xl"
      })
    });
  }
  let _v780 = _v33.default.div.withConfig({
      displayName: "AppLoader__LoaderWrapper",
      componentId: "sc-bd6487eb-0"
    })`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,
    _v781 = _v22.default.createContext({
      mutate: () => Promise.resolve(),
      isValidating: !1
    }),
    _v782 = _v22.default.createContext({
      isValidating: !1,
      mutate: () => Promise.resolve([])
    });
  var _v783 = _v0.i(0),
    _v784 = _v0.i(0),
    _v785 = _v0.i(0);
  let _v786 = ["name", "gender", "bio", "uri", "link", "background_video", "location_details", "pictures", "verified", "metadata.public_videos.total", "metadata.connections.videos.total", "metadata.connections.albums.total", "metadata.connections.followers.total", "metadata.connections.following.total", "metadata.connections.vimeo_experts.is_enrolled", "total_collection_count", "created_time", "profile_preferences", "membership", "is_expert", "profile_discovery", "websites", "contact_emails"];
  var _v787 = _v0.i(0),
    _v788 = _v0.i(0);
  let _v789 = _v0 => {
      let _v1 = _v0 && _v0.match(/\d+$/);
      return _v1 ? parseInt(_v1[0], 10) : -1;
    },
    _v790 = (_v0, _v1, _v2 = !0) => {
      (_v0.keyCode === _v788.KeyCodes.ENTER || _v0.keyCode === _v788.KeyCodes.SPACE) && (_v1(), _v2 && _v0.preventDefault());
    },
    _v791 = (_v0, _v1) => {
      _v0.keyCode === _v788.KeyCodes.ESC && (_v1(), _v0.preventDefault());
    };
  function _v792(_v0, _v1, _v2) {
    let _v3 = [];
    for (let _v0 = 0; _v0 < _v0.length; _v0 += _v2) _v3.push(_v0.slice(_v0, _v0 + _v2));
    return _v1.map((_v0, _v1) => _v0 ? {
      ..._v0,
      items: _v3[_v1]
    } : _v0).filter(_v0 => !!_v0 && null != _v0.items);
  }
  let _v793 = (_v0, _v1) => {
      Array.from(_v0.keys()).filter(_v0 => _v1.test(_v0)).forEach(_v0 => _v0.delete(_v0));
    },
    _v794 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v2.substring(1);
      _v3?.purge && _v793(_v0, RegExp(`^${_v4}/videos`));
      let _v5 = RegExp(`^\\$inf\\$${_v4}/videos`),
        _v6 = Array.from(_v0.keys()).filter(_v0 => _v5.test(_v0));
      return 0 === _v6.length ? Promise.resolve() : Promise.all(_v6.map(_v0 => _v1(_v0)));
    };
  function _v795(_v0) {
    return (_v0 || []).reduce((_v0, _v1) => _v1 ? _v0.concat(_v1.items) : _v0, []).filter(_v0 => null != _v0);
  }
  function _v796(_v0) {
    let _v1 = null != _v0 && _v0.length > 0 ? _v0[_v0.length - 1] : null;
    return _v1 && _v1.paging && null !== _v1.paging.next;
  }
  var _v797 = _v0.i(0),
    _v798 = _v0.i(0),
    _v799 = _v0.i(0),
    _v800 = _v0.i(0),
    _v801 = _v0.i(0);
  let _v802 = {
      [`@media (min-width: ${_v53.bokehTheme.breakpoints.lg})`]: {
        "&:hover": {
          backgroundColor: "fill-component",
          border: "1px solid",
          borderColor: "input-stroke"
        }
      }
    },
    _v803 = {
      "&:hover": {
        "& svg path": {
          fill: "var(--vimeo-colors-text-primary)"
        },
        "& p": {
          color: "var(--vimeo-colors-text-primary)"
        }
      }
    };
  function _v804({
    icon: _v0,
    children: _v1,
    editable: _v2,
    addButton: _v3,
    onClick: _v4,
    as: _v5
  }) {
    return (0, _v14.jsxs)(_v656.Flex, {
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
      sx: _v2 ? _v802 : _v3 ? _v803 : void 0,
      children: [_v0 && (0, _v14.jsx)(_v656.Flex, {
        w: "xs",
        flexShrink: 0,
        align: "center",
        justify: "center",
        children: _v0
      }), (0, _v14.jsx)(_v656.Flex, {
        flex: 1,
        minW: 0,
        alignItems: "center",
        children: _v1
      })]
    });
  }
  function _v805({
    onClick: _v0,
    buttonText: _v1 = "Add"
  }) {
    return (0, _v14.jsx)(_v804, {
      addButton: !0,
      onClick: _v0,
      icon: (0, _v14.jsx)(_v656.Flex, {
        boxSize: "xs",
        borderRadius: "xs",
        bg: "fill-component",
        align: "center",
        justify: "center",
        children: (0, _v14.jsx)(_v492.PlusSmall, {
          boxSize: 16,
          color: "text-tertiary"
        })
      }),
      children: (0, _v14.jsx)(_v799.Paragraph, {
        size: "md",
        color: "text-secondary",
        children: _v1
      })
    });
  }
  function _v806({
    onClick: _v0,
    inlineMargin: _v1
  }) {
    return (0, _v14.jsx)(_v654.Box, {
      display: {
        base: "inline-block",
        lg: "none"
      },
      verticalAlign: "text-bottom",
      cursor: "pointer",
      marginInlineStart: _v1 ? (0, _v51.rem)(6) : void 0,
      onClick: _v0,
      children: (0, _v14.jsx)(_v79.EditPencil, {
        verticalAlign: "text-bottom",
        color: "gray.300",
        boxSize: 20
      })
    });
  }
  function _v807(_v0) {
    let {
        value: _v1
      } = _v0,
      {
        editMode: _v2
      } = (0, _v22.useContext)(_v784.default);
    return _v2 ? (0, _v14.jsx)(_v809, {
      ..._v0
    }) : (0, _v14.jsx)(_v810, {
      value: _v1
    });
  }
  let _v808 = {
    backgroundColor: "fill-component",
    borderColor: "input-stroke",
    maxHeight: (0, _v51.rem)(140),
    overflowY: "auto"
  };
  function _v809({
    maxLength: _v0 = _v788.ABOUT_MAX_CHAR_COUNT,
    placeholder: _v1 = _v801.default.TellPeopleAboutYourself,
    onUpdate: _v2,
    value: _v3 = "",
    isDesktopView: _v4
  }) {
    let _v5 = _v3 ?? "",
      {
        userId: _v6
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfileEditFieldClicked: _v7
      } = (0, _v30.useProfileTracking)(),
      [_v8, _v9] = (0, _v22.useState)(!1),
      [_v10, _v11] = (0, _v22.useState)(_v5 || ""),
      [_v12, _v13] = (0, _v22.useState)(!1),
      _v14 = () => {
        _v7({
          userProfilePageUserId: String(_v6),
          userProfileEditField: "add_bio"
        }), _v9(!0);
      },
      _v15 = (0, _v22.useCallback)(_v0 => {
        _v0 && "function" == typeof _v0.setSelectionRange && _v0.setSelectionRange(_v5.length, _v5.length);
      }, [_v5]),
      _v16 = (0, _v22.useRef)(null);
    return (0, _v22.useEffect)(() => {
      _v5 && _v13(_v5.length > _v788.MINIMUM_BIO_LENGTH);
    }, [_v5]), (0, _v14.jsx)(_v654.Box, {
      _hover: {
        outline: "none"
      },
      tabIndex: 0,
      onKeyDown: _v0 => !_v8 && _v790(_v0, _v14),
      children: _v8 ? (0, _v14.jsxs)(_v654.Box, {
        position: "relative",
        children: [(0, _v14.jsx)(_v800.Textarea, {
          autoFocus: !0,
          ref: _v15,
          defaultValue: _v10,
          maxLength: _v0,
          onKeyDown: _v0 => {
            _v0.keyCode === _v788.KeyCodes.ESC && (_v11(_v5), _v9(!1));
          },
          placeholder: _v1,
          onBlur: () => {
            _v10.trim() || _v5 ? _v5 !== _v10 && _v2({
              bio: _v10
            }) : _v11(""), _v13(_v10.length > _v788.MINIMUM_BIO_LENGTH), _v9(!1);
          },
          onChange: _v0 => _v11(_v0.target.value),
          mt: "sm",
          minH: (0, _v51.rem)(96)
        }), (0, _v14.jsx)(_v654.Box, {
          position: "absolute",
          top: (0, _v51.rem)(10),
          right: (0, _v51.rem)(6),
          onMouseDown: _v0 => _v0.preventDefault(),
          children: (0, _v14.jsx)(_v798.IconButton, {
            variant: "tertiary",
            icon: (0, _v14.jsx)(_v52.CloseX, {}),
            onClick: () => {
              _v11(_v5), _v9(!1);
            },
            "aria-label": _v801.default.Dismiss,
            size: "xs"
          })
        }), (0, _v14.jsxs)(_v799.Paragraph, {
          size: "xs",
          textAlign: "right",
          color: "text-tertiary",
          children: [_v10.length, "/", _v0, " ", 1 === _v10.length ? _v801.default.Character : _v801.default.Characters]
        })]
      }) : _v10.length ? (0, _v14.jsxs)(_v654.Box, {
        children: [(0, _v14.jsx)(_v812, {
          text: _v10,
          isCollapsed: _v12,
          setIsCollapsed: _v13,
          onClick: _v14,
          onMouseEnter: () => {
            _v4 && _v13(!1);
          },
          onMouseLeave: () => {
            _v4 && (_v13(_v10.length > _v788.MINIMUM_BIO_LENGTH), _v16 && _v16.current && (_v16.current.scrollTop = 0));
          },
          textRef: _v16,
          editMode: !0
        }), (0, _v14.jsx)(_v806, {
          inlineMargin: !0,
          onClick: _v14
        })]
      }) : (0, _v14.jsx)(_v805, {
        buttonText: _v801.default.AddBio,
        onClick: _v14
      })
    });
  }
  function _v810({
    value: _v0
  }) {
    let [_v1, _v2] = (0, _v22.useState)(!1);
    return (0, _v22.useEffect)(() => {
      _v0 && _v2(_v0.length > _v788.MINIMUM_BIO_LENGTH);
    }, [_v0]), _v0 ? (0, _v14.jsx)(_v654.Box, {
      _hover: {
        outline: "none"
      },
      children: (0, _v14.jsx)(_v812, {
        text: _v0,
        isCollapsed: _v1,
        setIsCollapsed: _v2
      })
    }) : null;
  }
  let _v811 = _v22.default.forwardRef(({
    showWhiteSpaces: _v0,
    editMode: _v1,
    children: _v2,
    onClick: _v3,
    onMouseEnter: _v4,
    onMouseLeave: _v5
  }, _v6) => (0, _v14.jsx)(_v654.Box, {
    ref: _v6,
    onClick: _v3,
    onMouseEnter: _v4,
    onMouseLeave: _v5,
    fontSize: (0, _v51.rem)(14),
    overflowWrap: "break-word",
    border: "1px solid transparent",
    borderRadius: "md",
    px: "xs",
    py: "sm",
    display: {
      base: "inline",
      lg: "block"
    },
    whiteSpace: _v0 ? "pre-wrap" : void 0,
    maxH: _v1 ? (0, _v51.rem)(100) : void 0,
    transition: _v1 ? "max-height 0.3s ease-in, background-color 120ms ease-in-out 0s, border 120ms ease-in-out 0s" : void 0,
    sx: _v1 ? {
      [`@media (min-width: ${_v53.bokehTheme.breakpoints.lg})`]: {
        "&:hover": _v808
      }
    } : void 0,
    children: _v2
  }));
  function _v812({
    text: _v0,
    isCollapsed: _v1,
    setIsCollapsed: _v2,
    onClick: _v3,
    onMouseEnter: _v4,
    onMouseLeave: _v5,
    textRef: _v6,
    editMode: _v7
  }) {
    return (0, _v14.jsx)(_v811, {
      ref: _v6,
      onClick: _v3,
      onMouseEnter: _v4,
      onMouseLeave: _v5,
      showWhiteSpaces: !_v1,
      editMode: _v7,
      children: _v0.length > _v788.MINIMUM_BIO_LENGTH && _v1 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v65.default, {
          text: (0, _v62.default)(_v0, {
            length: _v788.MINIMUM_BIO_LENGTH
          })
        }), (0, _v14.jsx)(_v654.Box, {
          as: "span",
          textDecoration: "underline",
          cursor: "pointer",
          onClick: () => _v2(!1),
          children: _v801.default.ReadMore
        })]
      }) : (0, _v14.jsx)(_v65.default, {
        text: _v0
      })
    });
  }
  _v811.displayName = "AboutText";
  var _v813 = _v0.i(0),
    _v814 = _v0.i(0);
  let _v815 = _v0 => (0, _v14.jsx)(_v707.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v14.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v14.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 8.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-5.172a3 3 0 0 1-2.12-.879l-.83-.828a1 1 0 0 0-.706-.293H5Zm-3 1a3 3 0 0 1 3-3h2.172a3 3 0 0 1 2.12.879l.83.828a1 1 0 0 0 .706.293H16a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8Z"
      }), (0, _v14.jsx)("path", {
        d: "M4.17 5.5A3.001 3.001 0 0 1 7 3.5h2.172a3 3 0 0 1 2.12.879l.83.828a1 1 0 0 0 .706.293H19a3 3 0 0 1 3 3v6a3.001 3.001 0 0 1-2 2.83V8.5a1 1 0 0 0-1-1h-6.172a3 3 0 0 1-2.12-.879l-.83-.828a1 1 0 0 0-.706-.293H4.17Z"
      })]
    })
  });
  var _v816 = _v0.i(0),
    _v817 = _v0.i(0);
  let _v818 = (_v0, _v1) => {
      let _v2 = [Math.floor(_v0 / 0), Math.floor(_v0 / 60) % 60, Math.floor(_v0 % 60)].map(_v0 => _v0 < 10 ? "0" + _v0 : _v0);
      return "hh:mm:SS" === _v1 ? _v2.join(":") : _v2.filter((_v0, _v1) => "00" !== _v0 || _v1 > 0).join(":");
    },
    _v819 = (_v0, _v1 = "en", _v2) => new Date(_v0).toLocaleString(_v1, _v2 || {
      year: "numeric",
      month: "short"
    }),
    _v820 = _v22.default.forwardRef(({
      withoutEffects: _v0 = !1,
      fullWidth: _v1 = !1,
      className: _v2,
      children: _v3,
      ..._v4
    }, _v5) => (0, _v14.jsx)(_v654.Box, {
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
  function _v821({
    totalShowcases: _v0,
    totalFollowers: _v1,
    totalFollowing: _v2,
    totalCollections: _v3,
    membership: _v4,
    createdTime: _v5,
    userLink: _v6,
    userId: _v7,
    disableCollections: _v8 = !1
  }) {
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsxs)(_v820, {
        fullWidth: !0,
        children: [(0, _v14.jsx)(_v656.Flex, {
          align: "center",
          px: "md",
          mb: (0, _v658.rem)(10),
          children: (0, _v14.jsx)(_v657.Header, {
            size: "sm",
            as: "p",
            mb: 0,
            children: _v801.default.Activity
          })
        }), (0, _v14.jsx)(_v822, {
          icon: (0, _v14.jsx)(_v817.Showcase, {}),
          label: _v801.default.Showcases,
          count: _v0,
          href: `${_v6}/albums`,
          linkType: "showcases",
          userId: _v7
        }), (0, _v14.jsx)(_v822, {
          icon: (0, _v14.jsx)(_v816.PersonUserAdd, {}),
          label: _v801.default.Followers,
          count: _v1,
          href: `${_v6}/following/followers/sort:date`,
          linkType: "followers",
          userId: _v7
        }), (0, _v14.jsx)(_v822, {
          icon: (0, _v14.jsx)(_v814.BookmarkChapter, {}),
          label: _v801.default.Following,
          count: _v2,
          href: `${_v6}/following`,
          linkType: "following",
          userId: _v7
        }), !_v8 && (0, _v14.jsx)(_v822, {
          icon: (0, _v14.jsx)(_v815, {}),
          label: _v801.default.Collections,
          count: _v3,
          href: `${_v6}/collections`,
          linkType: "collections",
          userId: _v7
        })]
      }), _v4?.badge?.type && (0, _v14.jsxs)(_v656.Flex, {
        justify: "space-between",
        px: "sm",
        mt: (0, _v658.rem)(10),
        children: [(0, _v14.jsx)(_v24.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v801.default.MembershipPlan
        }), (0, _v14.jsx)(_v813.Badge, {
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
          })(_v4.badge.type),
          textTransform: "uppercase",
          children: _v4.badge.text
        })]
      }), (0, _v14.jsxs)(_v656.Flex, {
        justify: "space-between",
        px: "sm",
        mt: (0, _v658.rem)(10),
        children: [(0, _v14.jsx)(_v24.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v801.default.MemberSince
        }), (0, _v14.jsx)(_v24.Text, {
          color: "text-tertiary",
          fontSize: "body-sm",
          children: _v819(_v5)
        })]
      })]
    });
  }
  function _v822({
    icon: _v0,
    label: _v1,
    count: _v2,
    href: _v3,
    linkType: _v4,
    userId: _v5
  }) {
    let {
        trackUserProfilePageActivityLinkClicked: _v6
      } = (0, _v30.useProfileTracking)(),
      _v7 = _v2 > 0,
      _v8 = (0, _v22.useCallback)(() => {
        _v6({
          userProfilePageUserId: String(_v5),
          userProfilePageLinkType: _v4
        });
      }, [_v6, _v5, _v4]),
      _v9 = (0, _v14.jsxs)(_v656.Flex, {
        align: "center",
        justify: "space-between",
        py: "sm",
        px: "md",
        children: [(0, _v14.jsxs)(_v656.Flex, {
          align: "center",
          gap: "sm",
          children: [(0, _v14.jsx)(_v654.Box, {
            color: "text-tertiary",
            children: _v0
          }), (0, _v14.jsx)(_v24.Text, {
            fontSize: "body-sm",
            children: _v1
          })]
        }), (0, _v14.jsx)(_v24.Text, {
          fontSize: "body-sm",
          children: _v2.toLocaleString()
        })]
      });
    return _v7 ? (0, _v14.jsx)(_v654.Box, {
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
  _v820.displayName = "InfoCard";
  var _v823 = _v0.i(0),
    _v824 = _v0.i(0);
  function _v825(_v0, _v1, _v2, _v3 = !0, _v4) {
    let {
        cache: _v5,
        mutate: _v6
      } = (0, _v513.useSWRConfig)(),
      _v7 = (0, _v785.default)(),
      _v8 = (0, _v785.default)(),
      _v9 = (0, _v785.default)(),
      _v10 = (0, _v785.default)(),
      _v11 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      {
        mutate: _v12,
        data: _v13
      } = (0, _v22.useContext)(_v782),
      [_v14, _v15] = (0, _v22.useState)(!1),
      _v16 = _v4?.perPage ?? _v788.VIDEO_VARIABLES.perPage,
      _v17 = _v4?.revalidateAll ?? !0,
      _v18 = _v4?.revalidateOnFocus,
      _v19 = (0, _v22.useCallback)(_v0 => _v788.DEFAULT_PROFILE_URI_REGEX.test(_v0), []),
      _v20 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = RegExp(`^\\$inf\\$${_v0.substring(1)}/videos`),
          _v2 = Array.from(_v5.keys()).find(_v0 => _v1.test(_v0)),
          _v3 = new Set();
        return _v2 ? _v6(_v2, _v0 => (_v0 && _v795(_v0).forEach(_v0 => _v3.add(_v0.clip.uri)), _v0), {
          revalidate: !1
        }).then(() => Promise.resolve([..._v3])) : Promise.resolve([..._v3]);
      }, [_v5, _v6]),
      _v21 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = (0, _v47.decamelizeDeep)({
          containerUri: _v0
        });
        if (_v19(_v0)) {
          let _v0 = await _v9("me/profile_sections", {
            fields: ["uri"]
          }, _v788.HTTPMethods.POST, _v1);
          if (_v0) {
            let _v0 = await _v20(_v0),
              _v1 = (0, _v47.decamelizeDeep)({
                clipUris: _v0
              }),
              _v2 = _v789(_v0.uri),
              _v3 = await _v9(`me/profile_sections/${_v2}`, {
                fields: ["uri", "clip_uris"]
              }, _v788.HTTPMethods.PATCH, _v1),
              _v4 = _v795(_v13),
              _v5 = _v4.findIndex(_v0 => _v0.uri === _v0);
            if (-1 !== _v5 && _v3) return _v4[_v5].uri = _v3.uri, _v4[_v5].clipUris = _v3.clipUris, await _v12(_v0 => _v0 ? _v792(_v4, _v0, _v788.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            }), _v0.uri;
          }
        }
        return _v0;
      }, [_v20, _v19, _v9, _v13, _v12]),
      _v22 = (0, _v22.useCallback)(() => {
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
      _v23 = (0, _v22.useCallback)(_v0 => _v794(_v5, _v6, _v0), [_v5, _v6]),
      _v24 = (0, _v22.useCallback)(async _v0 => {
        if (!_v0.length) return;
        let _v1 = new Map();
        _v0.forEach(_v0 => _v1.set(_v0.sectionUri, _v0));
        let _v2 = _v795(_v13),
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
        _v3 && (await _v12(_v0 => _v0 ? _v792(_v4, _v0, _v788.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        }));
      }, [_v13, _v12]),
      _v25 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = (0, _v47.decamelizeDeep)({
            operations: _v0
          }),
          _v2 = await _v10("me/profile_sections/videos/batch", void 0, _v788.HTTPMethods.PATCH, _v1),
          _v3 = _v2?.affectedSections || [];
        await _v24(_v3);
        let _v4 = [...new Set(_v3.map(_v0 => _v0.sectionUri))];
        return await Promise.all(_v4.map(_v0 => _v23(_v0))), _v2;
      }, [_v24, _v23, _v10]),
      _v26 = (0, _v22.useCallback)((_v0, _v1) => `${_v0.substring(1)}/videos${(0, _v787.buildQueryString)((0, _v47.decamelizeDeep)({
        ..._v788.VIDEO_VARIABLES,
        page: _v1,
        perPage: _v16
      }))}`, [_v16]),
      {
        isValidating: _v27,
        mutate: _v28,
        data: _v29,
        error: _v30,
        setSize: _v31,
        size: _v32
      } = (0, _v46.default)(_v0 => _v3 ? _v26(_v0, _v0 + 1) : null, _v7, {
        revalidateAll: _v17,
        revalidateOnMount: !0,
        fallbackData: [_v22()],
        ...(void 0 !== _v18 && {
          revalidateOnFocus: _v18
        })
      }),
      _v33 = (0, _v22.useMemo)(() => _v29?.map(_v0 => _v0 ? {
        ..._v0,
        items: _v0.items.filter(_v0 => null != _v0.clip)
      } : _v0), [_v29]),
      _v34 = (0, _v22.useCallback)(_v0 => {
        _v0 && _v0.json && _v0.json().then(_v0 => _v11({
          content: _v0.error,
          status: "negative"
        })), _v12(), _v28();
      }, [_v28, _v11, _v12]),
      _v35 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = _v795(_v13),
          _v3 = _v789(_v0),
          _v4 = _v2.findIndex(_v0 => _v0.uri === _v0);
        try {
          if (-1 !== _v4) {
            let _v0 = {
              ..._v2[_v4],
              clipUris: _v1
            };
            _v2[_v4] = _v0, _v12(_v0 => _v0 ? _v792(_v2, _v0, _v788.SECTION_VARIABLES.perPage) : _v0, {
              revalidate: !1
            });
            let _v1 = (0, _v47.decamelizeDeep)({
                clipUris: _v1.length > 0 ? _v1 : null
              }),
              _v2 = await _v9(`me/profile_sections/${_v3}`, void 0, _v788.HTTPMethods.PATCH, _v1);
            return _v2 ? _v2.clipUris : [];
          }
          return [];
        } catch (_v0) {
          return _v34(_v0), [];
        }
      }, [_v34, _v9, _v13, _v12]),
      _v36 = (0, _v22.useCallback)(async (_v0, _v1, _v2) => {
        if (_v2) {
          let _v0 = await _v20(_v0);
          if (!_v0.every((_v0, _v1) => _v1[_v1] === _v0)) return await _v35(_v0, _v0);
        }
        return [...new Set(_v1)];
      }, [_v20, _v35]),
      _v37 = (0, _v22.useCallback)(async (_v0, _v1, _v2, _v3, _v4 = !0) => {
        _v15(!0);
        try {
          let _v0 = await _v21(_v0),
            _v1 = _v795(_v13),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v36(_v0, [..._v0.clipUris], _v0.unbounded);
            _v1.splice(_v1, 0, ..._v2);
            let _v2 = [...new Set(_v1)];
            await _v35(_v0.uri, _v2);
            let _v3 = _v4 ? _v23(_v0) : Promise.resolve();
            return Promise.all([_v3(), _v3]).then(() => (_v11(), _v15(!1), _v2));
          }
        } catch (_v0) {
          _v34(_v0);
        }
        return _v15(!1), [];
      }, [_v21, _v13, _v36, _v35, _v11, _v23, _v34]),
      _v38 = (0, _v22.useCallback)(async (_v0, _v1, _v2) => {
        _v15(!0);
        try {
          let _v0 = await _v21(_v0),
            _v1 = _v795(_v13),
            _v2 = _v1.findIndex(_v0 => _v0.uri === _v0);
          if (-1 !== _v2) {
            let _v0 = {
                ..._v1[_v2]
              },
              _v1 = await _v36(_v0, [..._v0.clipUris], _v0.unbounded),
              _v2 = _v1.findIndex(_v0 => _v0 === _v1);
            if (-1 !== _v2 && _v33) {
              _v1.splice(_v2, 1);
              let _v0 = _v795(_v33);
              _v0.splice(_v2, 1);
              let _v1 = _v792(_v0, _v33, _v16),
                _v2 = _v33.length - _v1.length,
                _v3 = await _v35(_v0, _v1),
                _v4 = RegExp(`^${_v0.substring(1)}/videos`);
              return _v793(_v5, _v4), Promise.all([_v2(), 0 !== _v2 ? _v31(Math.max(_v1.length, 1)) : _v28()]).then(() => (_v11(), _v15(!1), _v3));
            }
          }
        } catch (_v0) {
          _v34(_v0);
        }
        return _v15(!1), [];
      }, [_v5, _v21, _v13, _v36, _v33, _v35, _v31, _v28, _v11, _v34, _v16]),
      _v39 = (0, _v22.useCallback)(async ({
        title: _v0
      }) => {
        _v15(!0);
        try {
          let _v0 = _v795(_v13)[0];
          if (!_v0) return;
          let _v1 = (0, _v47.decamelizeDeep)({
              containerUri: _v0.uri,
              title: _v0,
              createEmpty: !0
            }),
            _v2 = await _v9("me/profile_sections", void 0, _v788.HTTPMethods.POST, _v1);
          if (!_v2) return;
          return await _v12(), _v2;
        } catch (_v0) {
          _v34(_v0);
          return;
        } finally {
          _v15(!1);
        }
      }, [_v13, _v9, _v12, _v34]),
      _v40 = (0, _v22.useCallback)(async _v0 => {
        let _v1 = _v795(_v13),
          _v2 = _v1[_v0];
        if (!_v2) throw Error(`No section at index ${_v0}`);
        let _v3 = _v0 > 0 ? _v1[_v0 - 1] : _v1[_v0 + 1],
          _v4 = _v789(_v2.uri);
        _v15(!0);
        try {
          await _v9(`me/profile_sections/${_v4}`, void 0, _v788.HTTPMethods.DELETE), await _v12(_v0 => {
            if (!_v0) return _v0;
            let _v1 = _v795(_v0).filter(_v0 => _v0.uri !== _v2.uri);
            return _v792(_v1, _v0, _v788.SECTION_VARIABLES.perPage);
          }, {
            revalidate: !1
          }), _v3 && (await _v23(_v3.uri)), await _v12(), _v11();
        } catch (_v0) {
          _v34(_v0);
        } finally {
          _v15(!1);
        }
      }, [_v13, _v9, _v12, _v23, _v11, _v34]),
      _v41 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = "me/profile_sections",
          _v3 = (0, _v47.decamelizeDeep)({
            containerUri: _v0,
            title: _v1
          }),
          _v4 = _v788.HTTPMethods.POST;
        if (!_v19(_v0)) {
          let _v0 = _v789(_v0);
          _v2 = `me/profile_sections/${_v0}`, _v3 = {
            title: _v1
          }, _v4 = _v788.HTTPMethods.PATCH;
        }
        let _v5 = await _v9(_v2, {
            fields: ["title", "uri"]
          }, _v4, _v3),
          _v6 = _v795(_v13),
          _v7 = _v6.findIndex(_v0 => _v0.uri === _v0);
        -1 !== _v7 && _v5 && (_v6[_v7] = {
          ..._v6[_v7],
          title: _v5.title,
          uri: _v5.uri
        }, await _v12(_v0 => _v0 ? _v792(_v6, _v0, _v788.SECTION_VARIABLES.perPage) : _v0, {
          revalidate: !1
        })), _v11();
      }, [_v19, _v9, _v13, _v12, _v11]),
      _v42 = (0, _v22.useCallback)((_v0, _v1) => {
        _v12(_v0 => {
          if (!_v0) return _v0;
          let _v1 = _v795(_v0),
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
            _v8 = _v789(_v6.uri);
          return _v9(`me/profile_sections/${_v8}`, void 0, _v788.HTTPMethods.PATCH, {
            position: _v7
          }).then(() => {
            _v12(), _v11();
          }), _v792(_v1, _v0, _v788.SECTION_VARIABLES.perPage);
        }, {
          revalidate: !1
        });
      }, [_v9, _v11, _v12]),
      _v43 = (0, _v22.useCallback)(async (_v0, _v1) => {
        let _v2 = null != _v1.video && _v0.video.clip.uri === _v1.video.clip.uri;
        if (_v15(!0), _v2) return void _v15(!1);
        try {
          let _v0 = await _v21(_v0.sectionUri),
            _v1 = _v0.sectionUri === _v1.sectionUri ? _v0 : await _v21(_v1.sectionUri),
            _v2 = _v795(_v13),
            _v3 = _v2.find(_v0 => _v0.uri === _v0),
            _v4 = _v2.find(_v0 => _v0.uri === _v1);
          _v3 && _v4 && (await _v36(_v0, [..._v3.clipUris], _v3.unbounded), _v0 !== _v1 && (await _v36(_v1, [..._v4.clipUris], _v4.unbounded)), await _v25([{
            videoUri: _v0.video.clip.uri,
            fromSectionUri: _v0,
            toSectionUri: _v1,
            toVideoIndex: _v1.videoIndex
          }])), _v11();
        } catch (_v0) {
          _v34(_v0);
        } finally {
          _v15(!1);
        }
      }, [_v36, _v21, _v34, _v25, _v11, _v13]),
      _v44 = (0, _v22.useCallback)(async (_v0, _v1) => {
        try {
          let _v0 = (0, _v47.decamelizeDeep)({
              columnWidth: _v1
            }),
            _v1 = await _v21(_v0),
            _v2 = _v789(_v1),
            _v3 = `me/profile_sections/${_v2}/videos/${_v0}`;
          await _v8(_v3, void 0, _v788.HTTPMethods.PATCH, _v0), _v11();
        } catch (_v0) {
          _v34(_v0);
        }
      }, [_v21, _v34, _v11, _v8, _v0]),
      _v45 = (0, _v22.useCallback)((_v0, _v1) => _v44(_v789(_v0.clip.uri), _v1).then(() => {
        let _v0 = _v795(_v33),
          _v1 = _v0.findIndex(_v0 => _v0.clip.uri === _v0.clip.uri);
        if (-1 !== _v1) {
          let _v0 = {
            ..._v0[_v1]
          };
          _v0.columnWidth = _v1, _v0[_v1] = _v0, _v28(_v0 => _v0 ? _v792(_v0, _v0, _v16) : _v0, {
            revalidate: !1
          });
        }
      }), [_v44, _v33, _v28, _v16]);
    return {
      addVideosToSection: _v37,
      createSection: _v39,
      data: _v33,
      error: _v30,
      isValidating: _v27,
      moveSection: _v42,
      mutate: _v28,
      onDrop: _v43,
      removeSection: _v40,
      removeVideoFromSection: _v38,
      revalidate: _v28,
      setSize: _v31,
      size: _v32,
      toggleVideoData: _v45,
      updateSectionTitle: _v41,
      videoLoading: _v14
    };
  }
  function _v826(_v0, _v1, _v2) {
    let _v3 = {
      product: "Profile Page",
      path: window.location.pathname,
      location: "profile_page"
    };
    _v107.BigPictureClient.sendEvent(new _v107.Event(_v0, _v1, {
      ..._v3,
      ..._v2
    }));
  }
  let _v827 = function (_v0, _v1 = [], _v2) {
    (0, _v22.useEffect)(() => {
      if (!_v0) return;
      let _v0 = _v2?.current || document,
        _v1 = _v0 => {
          _v0?.(_v0);
        };
      return _v0.addEventListener("keydown", _v1), () => _v0.removeEventListener("keydown", _v1);
    }, _v1);
  };
  var _v828 = _v0.i(0),
    _v829 = _v0.i(0),
    _v830 = _v0.i(0),
    _v831 = _v0.i(0),
    _v832 = _v0.i(0),
    _v833 = _v0.i(0),
    _v834 = _v0.i(0),
    _v835 = _v0.i(0),
    _v836 = _v0.i(0),
    _v837 = _v0.i(0),
    _v838 = _v0.i(0),
    _v839 = _v0.i(0),
    _v840 = _v0.i(0),
    _v841 = _v0.i(0);
  function _v842({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) {
    return (0, _v14.jsxs)(_v656.Flex, {
      as: "article",
      direction: "column",
      align: "center",
      justify: "center",
      width: "100%",
      height: "100%",
      flex: "1",
      py: "2xl",
      children: [_v2 && (0, _v14.jsx)(_v656.Flex, {
        width: (0, _v658.rem)(128),
        justify: "center",
        children: _v2
      }), (0, _v14.jsxs)(_v656.Flex, {
        direction: "column",
        align: "center",
        textAlign: "center",
        margin: `${(0, _v658.rem)(16)} 0`,
        rowGap: (0, _v658.rem)(16),
        maxW: (0, _v658.rem)(320),
        children: [_v1, _v3]
      }), _v0]
    });
  }
  var _v843 = _v0.i(0),
    _v844 = _v0.i(0),
    _v845 = _v0.i(0),
    _v846 = ((_v6 = _v846 || {}).NOBODY = "nobody", _v6.PASSWORD = "password", _v6.ON_DEMAND = "ptv", _v6.ON_DEMAND_HIDDEN = "ptvhide", _v6);
  let _v847 = {
      borderRadius: (0, _v658.rem)(6),
      minWidth: (0, _v658.rem)(72)
    },
    _v848 = {
      bottom: (0, _v658.rem)(3),
      right: (0, _v658.rem)(3),
      fontSize: (0, _v658.rem)(10),
      padding: "xs",
      borderRadius: "xs"
    },
    _v849 = {
      [`@media screen and (min-width: ${_v53.bokehTheme.breakpoints.md})`]: {
        gridTemplateColumns: `${(0, _v658.rem)(24)} ${(0, _v658.rem)(72)} 1fr ${(0, _v658.rem)(90)}`
      }
    };
  function _v850({
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
      _v14 = (0, _v22.useMemo)(() => _v9 || _v11 || _v13, [_v9, _v11, _v13]),
      _v15 = (0, _v22.useMemo)(() => _v9 ? _v801.default.VerticalVideoNotSupported : _v11 ? _v801.default.OnDemandVideoNotSupported : _v13 ? _v801.default.UpcomingVideoNotSupported : "", [_v9, _v11, _v13]),
      _v16 = (0, _v22.useCallback)(() => {
        _v14 || _v4();
      }, [_v4, _v14]),
      _v17 = (0, _v845.useLocale)(),
      _v18 = _v819(_v2.createdTime, _v17, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    return (0, _v14.jsx)(_v823.Tooltip, {
      label: _v15,
      isDisabled: !_v14,
      closeOnScroll: !0,
      shouldWrapChildren: !0,
      placement: "top",
      children: (0, _v14.jsxs)(_v843.ContentRow, {
        listGridColumns: `${(0, _v658.rem)(24)} ${(0, _v658.rem)(72)} 1fr`,
        sx: _v849,
        isSelected: !_v14 && _v3,
        isDisabled: _v14,
        opacity: _v14 ? .5 : 1,
        onClick: _v0 => {
          _v0.preventDefault(), _v16();
        },
        cursor: _v14 ? "not-allowed" : "pointer",
        tabIndex: -1,
        userSelect: "none",
        children: [(0, _v14.jsx)(_v843.ContentRow.Column, {
          children: "radio" === _v0 ? (0, _v14.jsx)(_v843.ContentRow.SelectRadio, {
            isDisabled: _v14,
            size: "md"
          }) : (0, _v14.jsx)(_v843.ContentRow.SelectCheckbox, {
            isDisabled: _v14,
            size: "md"
          })
        }), (0, _v14.jsx)(_v843.ContentRow.Column, {
          children: (0, _v14.jsx)(_v843.ContentRow.Thumbnail, {
            alt: _v2.name,
            src: _v2.pictures.sizes[0].link,
            badgeText: _v818(_v2.duration),
            badgeSx: _v848,
            isLocked: _v10,
            ..._v847
          })
        }), (0, _v14.jsx)(_v843.ContentRow.Column, {
          overflow: "auto",
          justifyColumn: "auto",
          children: (0, _v14.jsxs)(_v654.Box, {
            children: [(0, _v14.jsx)(_v844.OverflowToolTip, {
              labelToolTip: _v2.name,
              children: (0, _v14.jsx)(_v24.Text, {
                variant: "heading-xs",
                noOfLines: 1,
                children: _v2.name
              })
            }), _v7 && _v2.user && (0, _v14.jsxs)(_v656.Flex, {
              alignItems: "center",
              gap: "xs",
              children: [(0, _v14.jsx)(_v114.Avatar, {
                alt: "",
                size: "xs",
                sx: {
                  width: (0, _v658.rem)(16),
                  height: (0, _v658.rem)(16)
                },
                src: _v2.user.pictures?.sizes?.[0]?.link ?? "",
                nameProps: {
                  name: _v2.user.name
                }
              }), (0, _v14.jsx)(_v24.Text, {
                variant: "body-xs",
                color: "text-secondary",
                noOfLines: 1,
                children: _v2.user.name
              })]
            })]
          })
        }), (0, _v14.jsx)(_v843.ContentRow.Column, {
          hideAtWidth: _v53.bokehTheme.breakpoints.md,
          children: (0, _v14.jsx)(_v24.Text, {
            variant: "body-sm",
            color: "text-secondary",
            noOfLines: 1,
            children: _v18
          })
        })]
      })
    });
  }
  var _v851 = _v0.i(0),
    _v852 = _v0.i(0);
  function _v853({
    inputType: _v0 = "radio"
  }) {
    return (0, _v14.jsxs)(_v843.ContentRow, {
      listGridColumns: `${(0, _v658.rem)(24)} ${(0, _v658.rem)(72)} 1fr`,
      gridTemplateColumns: {
        base: `${(0, _v658.rem)(24)} ${(0, _v658.rem)(72)} 1fr`,
        md: `${(0, _v658.rem)(24)} ${(0, _v658.rem)(72)} 1fr ${(0, _v658.rem)(90)}`
      },
      disableHover: !0,
      tabIndex: -1,
      children: [(0, _v14.jsx)(_v843.ContentRow.Column, {
        children: "radio" === _v0 ? (0, _v14.jsx)(_v851.Radio, {
          isDisabled: !0,
          size: "md"
        }) : (0, _v14.jsx)(_v838.Checkbox, {
          isDisabled: !0,
          size: "md"
        })
      }), (0, _v14.jsx)(_v843.ContentRow.Column, {
        children: (0, _v14.jsx)(_v852.Skeleton, {
          h: (0, _v658.rem)(39),
          borderRadius: (0, _v658.rem)(6),
          minWidth: (0, _v658.rem)(72)
        })
      }), (0, _v14.jsx)(_v843.ContentRow.Column, {
        overflow: "auto",
        justifyColumn: "auto",
        children: (0, _v14.jsx)(_v852.Skeleton, {
          variant: "text",
          width: "80%"
        })
      }), (0, _v14.jsx)(_v843.ContentRow.Column, {
        hideAtWidth: _v53.bokehTheme.breakpoints.md,
        children: (0, _v14.jsx)(_v852.Skeleton, {
          variant: "text",
          w: (0, _v658.rem)(70)
        })
      })]
    });
  }
  function _v854({
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
    let _v11 = (0, _v22.useRef)(null),
      _v12 = _v2.length > 0 ? 1 : 8,
      _v13 = (0, _v22.useMemo)(() => _v3.map(_v0 => _v0.uri), [_v3]);
    return (0, _v14.jsxs)(_v654.Box, {
      ref: _v11,
      onScroll: () => function (_v0, _v1, _v2 = _v788.SCROLL_BUFFER) {
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
      marginTop: (0, _v658.rem)(12),
      px: "3",
      gap: "sm",
      children: [_v2.map(_v0 => {
        let _v1 = -1 !== _v13.indexOf(_v0.uri);
        return (0, _v14.jsx)(_v850, {
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
      }), _v4 && [...Array(_v12).keys()].map(_v0 => (0, _v14.jsx)(_v853, {
        inputType: _v0
      }, _v0)), !_v4 && _v5 && (0, _v14.jsx)(_v853, {
        inputType: _v0
      })]
    });
  }
  function _v855({
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
    let [_v17, _v18] = (0, _v22.useState)([]),
      {
        data: _v19,
        error: _v20,
        setPage: _v21,
        isValidating: _v22
      } = function (_v0, _v1, _v2, _v3 = !1, _v4 = "", _v5 = "date", _v6 = "desc") {
        let [_v7, _v8] = (0, _v22.useState)(1),
          _v9 = (0, _v785.default)(),
          [_v10, _v11] = (0, _v22.useState)(_v4);
        _v4 !== _v10 && (_v11(_v4), _v8(1));
        let [_v12, _v13] = (0, _v22.useState)(_v5),
          [_v14, _v15] = (0, _v22.useState)(_v6);
        (_v5 !== _v12 || _v6 !== _v14) && (_v13(_v5), _v15(_v6), _v8(1));
        let _v16 = (0, _v22.useCallback)((_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
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
          } = (0, _v44.default)(_v1 ? [_v0, _v4, _v7, _v3, _v5, _v6, _v2] : null, ([_v0, _v1, _v2, _v3, _v4, _v5, _v6]) => _v16(_v0, _v1, _v2, _v3, _v4, _v5, _v6));
        return {
          setPage: _v8,
          data: _v17,
          error: _v18,
          isValidating: _v19
        };
      }(_v0, !_v5, _v4, _v11, _v1, _v15, _v16),
      _v23 = !_v19 && !_v20;
    return (0, _v22.useEffect)(() => {
      if (_v19) {
        let _v0 = [...(_v19.items || [])],
          _v1 = 1 === _v19.page;
        _v18(_v0 => _v1 ? _v0 : [..._v0, ..._v0]), _v1 && 0 === _v0.length && !_v1 && _v9();
      }
    }, [_v19, _v9, _v1]), (0, _v22.useEffect)(() => {
      _v10?.(_v17);
    }, [_v17, _v10]), (0, _v14.jsxs)(_v656.Flex, {
      as: "section",
      overflow: "hidden",
      flexDirection: "column",
      height: "100%",
      children: [(0, _v14.jsx)(_v854, {
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
      }), _v23 || _v5 || !_v19 || _v19.items?.length || _v17.length || !_v1 ? null : (0, _v14.jsx)(_v842, {
        icon: (0, _v14.jsx)(_v841.SearchMagnifierFilled, {
          boxSize: "md"
        }),
        header: (0, _v14.jsx)(_v24.Text, {
          as: "p",
          variant: "body-xl",
          color: "text-secondary",
          children: (0, _v27.translate)({
            singular: "No results for {SEARCH_TEXT}",
            replacements: {
              SEARCH_TEXT: _v1
            },
            dictionary: {
              es: {
                singular: "Sin resultados para {SEARCH_TEXT}"
              },
              "de-DE": {
                singular: "Keine Ergebnisse für {SEARCH_TEXT}"
              },
              "fr-FR": {
                singular: "Pas de résultat pour {SEARCH_TEXT}"
              },
              "ja-JP": {
                singular: "{SEARCH_TEXT} の検索結果がありません"
              },
              "ko-KR": {
                singular: "{SEARCH_TEXT}에 대한 검색 결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado para {SEARCH_TEXT}"
              },
              "zh-CN": {
                singular: "没有 {SEARCH_TEXT} 的结果"
              }
            }
          })
        }),
        cta: (0, _v14.jsx)(_v655.Button, {
          mt: "lg",
          size: "lg",
          variant: "secondary",
          onClick: _v2,
          children: _v801.default.BackToVideos
        })
      })]
    });
  }
  var _v856 = _v0.i(0);
  function _v857({
    query: _v0,
    onChange: _v1,
    isDisabled: _v2
  }) {
    return (0, _v14.jsx)(_v654.Box, {
      px: "6",
      paddingTop: "5",
      paddingBottom: "3",
      children: (0, _v14.jsx)(_v856.Search, {
        value: _v0,
        onChange: _v0 => _v1(_v0.target.value),
        placeholder: _v801.default.Search,
        isDisabled: _v2,
        variant: "minimal",
        size: "md"
      })
    });
  }
  var _v858 = _v0.i(0);
  function _v859() {
    let [_v0, _v1] = (0, _v22.useState)(""),
      _v2 = (0, _v858.useDebouncedValue)(_v0, 500);
    return {
      query: _v0,
      setQuery: _v1,
      searchText: _v2,
      clearQuery: () => _v1("")
    };
  }
  let _v860 = {
    addedDesc: {
      text: _v801.default.LastAdded,
      sortBy: "date",
      sortDirection: "desc"
    },
    addedAsc: {
      text: _v801.default.FirstAdded,
      sortBy: "date",
      sortDirection: "asc"
    },
    titleAsc: {
      text: _v801.default.TitleAZ,
      sortBy: "alphabetical",
      sortDirection: "asc"
    },
    titleDesc: {
      text: _v801.default.TitleZA,
      sortBy: "alphabetical",
      sortDirection: "desc"
    }
  };
  function _v861({
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
      } = _v859(),
      [_v11, _v12] = (0, _v22.useState)("addedDesc"),
      [_v13, _v14] = (0, _v22.useState)([]),
      [_v15, _v16] = (0, _v22.useState)(!0),
      _v17 = new Set(_v13.map(_v0 => _v0.uri)),
      _v18 = _v3.reduce((_v0, _v1) => _v17.has(_v1.uri) ? _v0 + 1 : _v0, 0),
      _v19 = _v13.length > 0 && _v18 === _v13.length,
      _v20 = (0, _v22.useCallback)(() => _v16(!1), []);
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v857, {
        query: _v7,
        onChange: _v8,
        isDisabled: _v2
      }), (0, _v14.jsxs)(_v656.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "6",
        paddingBottom: "3",
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v14.jsx)(_v838.Checkbox, {
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
          children: (0, _v27.translate)({
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
        }), (0, _v14.jsx)(_v840.SortSelect, {
          sortOptions: _v860,
          selectedSort: _v11,
          onSortOptionClick: _v0 => _v12(_v0)
        })]
      }), (0, _v14.jsx)(_v654.Box, {
        flex: 1,
        minH: 0,
        overflow: "hidden",
        children: _v15 ? (0, _v14.jsx)(_v855, {
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
          sort: _v860[_v11].sortBy,
          direction: _v860[_v11].sortDirection,
          showAuthor: _v6,
          filterNonProfileVideos: !0,
          isVerticalClipAllowed: !0,
          isUpcomingEventAllowed: !0,
          isOnDemandAllowed: !0
        }) : (0, _v14.jsx)(_v842, {
          icon: (0, _v14.jsx)(_v839.VideosStack, {
            boxSize: "md"
          }),
          header: (0, _v14.jsx)(_v24.Text, {
            as: "p",
            variant: "body-xl",
            color: "text-secondary",
            children: _v5
          })
        })
      })]
    });
  }
  let _v862 = async () => {
    let _v0 = await fetch("/_next/jwt?only_public=true", {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    if (_v0.ok) return (await _v0.json()).token;
    throw _v0;
  };
  function _v863({
    onSubmit: _v0,
    onDismiss: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)([]),
      [_v6, _v7] = (0, _v22.useState)(null),
      [_v8, _v9] = (0, _v22.useState)(!1),
      [_v10, _v11] = (0, _v22.useState)(!1),
      [_v12, _v13] = (0, _v22.useState)(_v2),
      [_v14, _v15] = (0, _v22.useState)(0),
      _v16 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        trackUserProfileAutomaticAddVideoToggled: _v17,
        trackUserProfileVideoAdded: _v18
      } = (0, _v30.useProfileTracking)();
    return (0, _v22.useEffect)(() => {
      _v862().then(_v0 => {
        _v7(_v0);
      });
    }, []), (0, _v22.useEffect)(() => {
      _v12 !== _v2 && _v3(_v12);
    }, [_v12]), (0, _v22.useEffect)(() => {
      _v12 !== _v2 && _v13(_v2);
    }, [_v2]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v831.ModalHeader, {
        paddingBottom: 0,
        children: (0, _v14.jsx)(_v657.Header, {
          as: "h4",
          size: "md",
          children: _v801.default.SelectVideos
        })
      }), (0, _v14.jsx)(_v829.ModalBody, {
        padding: 0,
        overflow: "hidden",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        children: (0, _v14.jsxs)(_v834.Tabs, {
          variant: "underline",
          isLazy: !0,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minH: 0,
          onChange: _v0 => {
            _v15(_v0), _v5([]);
          },
          children: [(0, _v14.jsxs)(_v835.TabList, {
            paddingX: "6",
            children: [(0, _v14.jsx)(_v833.Tab, {
              children: _v801.default.MyPublicVideos
            }), (0, _v14.jsx)(_v833.Tab, {
              children: _v801.default.CreditedVideos
            }), (0, _v14.jsx)(_v834.TabIndicator, {})]
          }), (0, _v14.jsxs)(_v837.TabPanels, {
            flex: 1,
            minH: 0,
            overflow: "hidden",
            children: [(0, _v14.jsx)(_v836.TabPanel, {
              h: "100%",
              overflow: "hidden",
              p: 0,
              display: "flex",
              flexDirection: "column",
              children: (0, _v14.jsx)(_v861, {
                queryUrl: `/users/${_v16.user?.id}/videos`,
                authToken: _v6 ? `jwt ${_v6}` : void 0,
                parentLoading: !_v6,
                selectedClips: _v4,
                onSelectedClipsChange: _v5,
                emptyStateText: _v12 ? _v801.default.PublicVideoAutoAddText : _v801.default.PublicVideosEmptyText
              })
            }), (0, _v14.jsx)(_v836.TabPanel, {
              h: "100%",
              overflow: "hidden",
              p: 0,
              display: "flex",
              flexDirection: "column",
              children: (0, _v14.jsx)(_v861, {
                queryUrl: `/users/${_v16.user?.id}/appearances`,
                selectedClips: _v4,
                onSelectedClipsChange: _v5,
                emptyStateText: _v801.default.CreditsEmptyText,
                showAuthor: !0
              })
            })]
          })]
        })
      }), (0, _v14.jsx)(_v830.ModalFooter, {
        borderTop: "1px solid",
        borderColor: "stroke",
        children: (0, _v14.jsxs)(_v656.Flex, {
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
          children: [(0, _v14.jsxs)(_v656.Flex, {
            alignItems: "center",
            gap: "sm",
            flex: "1",
            minW: 0,
            children: [(0, _v14.jsx)(_v832.Switch, {
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
            }), (0, _v14.jsx)(_v24.Text, {
              as: "label",
              htmlFor: "auto-add-public-videos",
              fontSize: "sm",
              lineHeight: "base",
              whiteSpace: "normal",
              cursor: "pointer",
              children: _v801.default.PublicVideosToggleText
            })]
          }), (0, _v14.jsxs)(_v828.HStack, {
            spacing: "sm",
            flexShrink: 0,
            justifyContent: {
              base: "flex-end",
              sm: "initial"
            },
            children: [(0, _v14.jsx)(_v655.Button, {
              variant: "secondary",
              onClick: () => !_v8 && _v1(),
              children: _v801.default.Cancel
            }), (0, _v14.jsx)(_v655.Button, {
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
              children: _v801.default.AddToProfile
            })]
          })]
        })
      })]
    });
  }
  function _v864({
    isOpen: _v0,
    onClose: _v1,
    onSubmit: _v2,
    shouldAutoAddVideos: _v3,
    toggleAutoAddVideos: _v4
  }) {
    return _v827(_v0 ? _v0 => _v791(_v0, _v1) : void 0, [_v0, _v1]), (0, _v14.jsxs)(_v651.Modal, {
      onClose: _v1,
      isOpen: _v0,
      children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
        width: "90vw",
        maxWidth: (0, _v658.rem)(662),
        height: "85vh",
        maxHeight: (0, _v658.rem)(752),
        padding: 0,
        overflow: "hidden",
        children: (0, _v14.jsx)(_v863, {
          shouldAutoAddVideos: _v3,
          toggleAutoAddVideos: _v4,
          onSubmit: async _v0 => {
            await _v2(_v0), _v1();
          },
          onDismiss: () => {
            _v1(), _v826(_v788.BPEvent.CLOSE_ADD_VIDEO_MODAL, 1);
          }
        })
      })]
    });
  }
  function _v865({
    shouldAutoAddVideos: _v0,
    toggleAutoAddVideos: _v1,
    showAutoAddVideosNotification: _v2,
    updatePublicVideosCount: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(!1),
      {
        data: _v6
      } = (0, _v22.useContext)(_v782),
      _v7 = (0, _v22.useMemo)(() => _v795(_v6), [_v6]),
      {
        addVideosToSection: _v8,
        videoLoading: _v9
      } = _v825("", void 0, void 0, !1),
      {
        trackUserProfileAddVideoClicked: _v10
      } = (0, _v30.useProfileTracking)(),
      _v11 = async _v0 => {
        if (!_v7[0]) return;
        let _v1 = _v0.map(_v0 => _v0.uri);
        await _v8(_v7[0].uri, 0, _v1, _v3);
      };
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v823.Tooltip, {
        label: _v801.default.AddVideo,
        shouldWrapChildren: !0,
        children: (0, _v14.jsx)(_v656.Flex, {
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
          "aria-label": _v801.default.AddVideo,
          "aria-disabled": _v9,
          disabled: _v9,
          onClick: () => {
            _v9 || (_v826(_v788.BPEvent.CLICK_TO_ADD_VIDEO, 1), _v10(), _v2(), _v5(!0));
          },
          children: (0, _v14.jsx)(_v824.PlusSquare, {
            boxSize: (0, _v658.rem)(20)
          })
        })
      }), (0, _v14.jsx)(_v864, {
        isOpen: _v4,
        onClose: () => _v5(!1),
        onSubmit: _v11,
        shouldAutoAddVideos: _v0,
        toggleAutoAddVideos: _v1
      })]
    });
  }
  var _v866 = _v0.i(0),
    _v867 = _v0.i(0),
    _v868 = _v0.i(0);
  async function _v869({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v867.measureLatency)("getUserCollaborators", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/collaborators?fields=${_v1.map(_v868.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v868.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v868.deepCamelCase)(_v1);
    });
  }
  var _v870 = _v0.i(0),
    _v871 = _v0.i(0);
  function _v872(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v871.useGctlConfig)();
    return (0, _v44.default)(_v2 ? `/users/${_v2.where.userId}/collaborators${(0, _v870.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v869({
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
  "true" === _v866.default.env.STORYBOOK && (0, _v870.assignMswData)(_v872, {
    endpoint: "/users/:userId/collaborators",
    method: "GET"
  }), "true" === _v866.default.env.STORYBOOK && (0, _v870.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v513.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v871.useGctlConfig)(),
      [_v5, _v6] = (0, _v870.useInternalState)();
    return [(0, _v22.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/collaborators${(0, _v870.serializeQuery)(_v0)}`, _v869({
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
  var _v873 = _v0.i(0),
    _v874 = _v0.i(0);
  function _v875({
    collaborator: _v0
  }) {
    let {
        isFromCopyrightRestrictedRegion: _v1
      } = (0, _v22.useContext)(_v32.ViewerContext),
      [_v2, _v3] = (0, _v874.getAvatarImages)(_v0.pictures?.sizes),
      _v4 = (0, _v14.jsx)(_v114.Avatar, {
        src: _v2,
        srcSet: _v3,
        alt: _v0.name,
        size: "md",
        nameProps: {
          name: _v0.name ?? ""
        }
      });
    return _v1 ? (0, _v14.jsx)(_v654.Box, {
      as: "span",
      children: _v4
    }) : (0, _v14.jsx)(_v873.UserCard, {
      user: _v0,
      profileUrl: _v0.link,
      openDelay: 500,
      children: (0, _v14.jsx)(_v654.Box, {
        as: "a",
        href: _v0.link,
        children: _v4
      })
    });
  }
  let _v876 = _v22.default.memo(function ({
    userId: _v0
  }) {
    let {
      data: _v1,
      isLoading: _v2
    } = _v872({
      where: {
        userId: _v0
      },
      select: ["backgroundVideo", "link", "locationDetails.formattedAddress", "metadata.connections.followers.total", "metadata.publicVideos.total", "name", "pictures.sizes", "skills.name", "uri"],
      headers: {
        Accept: "application/vnd.vimeo.*+json;version=3.4.2"
      }
    });
    return !_v2 && _v1?.total ? (0, _v14.jsxs)(_v820, {
      fullWidth: !0,
      children: [(0, _v14.jsxs)(_v656.Flex, {
        align: "center",
        px: "md",
        gap: "xs",
        mb: (0, _v658.rem)(10),
        children: [(0, _v14.jsx)(_v657.Header, {
          size: "sm",
          as: "p",
          mb: 0,
          children: _v801.default.Collaborators
        }), (0, _v14.jsx)(_v823.Tooltip, {
          label: _v801.default.AddCollaboratorsInVideoSettings,
          placement: "top",
          shouldWrapChildren: !0,
          children: (0, _v14.jsx)(_v539.InfoCircle, {
            width: 16,
            height: 16,
            color: "text-tertiary"
          })
        })]
      }), (0, _v14.jsx)(_v656.Flex, {
        wrap: "wrap",
        gap: "sm",
        px: "md",
        children: _v1.data.map(_v0 => (0, _v14.jsx)(_v875, {
          collaborator: _v0
        }, _v0.uri))
      })]
    }) : null;
  });
  var _v877 = _v0.i(0);
  function _v878({
    onRemove: _v0,
    onReplace: _v1
  }) {
    return (0, _v14.jsx)(_v654.Box, {
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
      children: (0, _v14.jsxs)(_v877.ButtonGroup, {
        spacing: "sm",
        children: [(0, _v14.jsx)(_v655.Button, {
          variant: "primary",
          size: "md",
          onClick: _v1,
          children: _v801.default.Replace
        }), (0, _v14.jsx)(_v655.Button, {
          variant: "destructive",
          size: "md",
          onClick: _v0,
          children: _v801.default.Remove
        })]
      })
    });
  }
  var _v879 = _v0.i(0),
    _v880 = _v0.i(0);
  function _v881({
    subTitle: _v0,
    onClick: _v1
  }) {
    return (0, _v14.jsx)(_v879.Show, {
      above: "md",
      children: (0, _v14.jsx)(_v655.Button, {
        size: "md",
        leftIcon: (0, _v14.jsx)(_v880.ImagePlus, {
          boxSize: "lg"
        }),
        variant: "secondary",
        onClick: _v1,
        children: _v0
      })
    });
  }
  function _v882({
    configUrl: _v0,
    yPosition: _v1,
    poster: _v2,
    start: _v3,
    end: _v4,
    clipUrl: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(!1),
      _v8 = (0, _v22.useRef)(null),
      _v9 = (0, _v22.useRef)(null),
      _v10 = (0, _v22.useRef)(null),
      _v11 = (0, _v22.useRef)(null),
      {
        ofcomQualifies: _v12,
        user: _v13
      } = (0, _v22.useContext)(_v32.ViewerContext),
      _v14 = _v12 && !_v13,
      {
        player: _v15
      } = (0, _v170.usePlayer)(_v8, Number(_v5), !0, _v0, !0, "auto"),
      {
        width: _v16
      } = (0, _v60.useWindowSize)(),
      _v17 = (0, _v22.useMemo)(() => _v2, [_v2]),
      _v18 = (0, _v22.useCallback)(_v0 => {
        if (_v0.current && _v9.current) {
          let {
              offsetHeight: _v0
            } = _v0.current,
            _v1 = _v0 * _v1 / 100,
            _v2 = _v9.current.offsetHeight / 2;
          _v0.current.style.top = `-${_v1 - _v2}px`;
        }
      }, [_v1]);
    return (0, _v22.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v4 - .501 && (_v15.currentTime = _v3);
      };
      return _v15 && (_v15.currentTime = _v3, _v15.on("timeupdate", _v0)), () => {
        _v15 && _v15.off("timeupdate", _v0);
      };
    }, [_v15, _v3, _v4]), (0, _v22.useEffect)(() => {
      _v15 && !_v14 && _v15.play().then(() => _v7(!0));
    }, [_v15]), (0, _v22.useEffect)(() => {
      _v7(!1);
    }, [_v5]), (0, _v22.useEffect)(() => {
      _v18(_v10), _v18(_v11);
    }, [_v18, _v16, _v6, _v17]), (0, _v14.jsxs)(_v883, {
      ref: _v9,
      children: [(0, _v14.jsx)(_v884, {
        ref: _v10,
        hide: !_v6,
        children: (0, _v14.jsx)("div", {
          ref: _v8
        })
      }), !_v6 && (0, _v14.jsx)(_v884, {
        ref: _v11,
        children: (0, _v14.jsx)(_v885, {
          src: _v17,
          alt: _v5,
          onLoad: () => _v18(_v11)
        })
      })]
    });
  }
  let _v883 = _v33.default.section.withConfig({
      displayName: "ProfileVideo__Wrapper",
      componentId: "sc-be761675-0"
    })`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`,
    _v884 = _v33.default.article.withConfig({
      displayName: "ProfileVideo__VideoImageContainer",
      componentId: "sc-be761675-1"
    })`
  position: absolute;
  min-width: 100%;
  left: 0;
  right: 0;
  display: block;
  visibility: visible;

  ${({
      hide: _v0
    }) => _v0 && _v33.css`
      visibility: hidden;
    `}
`,
    _v885 = _v33.default.img.withConfig({
      displayName: "ProfileVideo__Image",
      componentId: "sc-be761675-2"
    })`
  height: 100%;
  width: 100%;
`;
  var _v886 = _v0.i(0);
  function _v887({
    showCropper: _v0,
    setYPosition: _v1,
    children: _v2
  }) {
    let _v3 = (0, _v22.useRef)(null),
      _v4 = (0, _v22.useRef)(null),
      [_v5, _v6] = (0, _v22.useState)(0);
    (0, _v22.useEffect)(() => {
      if (_v3.current && _v0) {
        let {
          offsetHeight: _v0,
          offsetWidth: _v1
        } = _v3.current;
        _v6(18 * _v1 / 100 / _v0 * 100);
      }
    }, [_v3, _v0]);
    let _v7 = (0, _v248.useGesture)({
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
    return (0, _v14.jsxs)(_v888, {
      ref: _v3,
      children: [_v0 && (0, _v14.jsxs)(_v892, {
        ref: _v4,
        ..._v7(),
        style: {
          top: `${(100 - _v5) / 2}%`
        },
        children: [(0, _v14.jsx)(_v890, {}), (0, _v14.jsx)(_v891, {})]
      }), _v2]
    });
  }
  let _v888 = _v33.default.section.withConfig({
      displayName: "Cropper__Wrapper",
      componentId: "sc-fa267c04-0"
    })`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`,
    _v889 = _v33.css`
  &:before,
  &:after {
    content: '';
    width: ${(0, _v51.rem)(20)};
    height: ${(0, _v51.rem)(20)};
    border-style: solid;
    border-color: ${_v53.bokehTheme.colors.white};
    position: absolute;
  }

  &:before {
    left: ${(0, _v51.rem)(3)};
    border-right: none;
  }

  &:after {
    right: ${(0, _v51.rem)(3)};
    border-left: none;
  }
`,
    _v890 = _v33.default.div.withConfig({
      displayName: "Cropper__TopContainer",
      componentId: "sc-fa267c04-1"
    })`
  ${_v889};
  &:before,
  &:after {
    top: ${(0, _v51.rem)(3)};
    border-bottom: none;
  }
`,
    _v891 = _v33.default.div.withConfig({
      displayName: "Cropper__BottomContainer",
      componentId: "sc-fa267c04-2"
    })`
  ${_v889};
  &:before,
  &:after {
    bottom: ${(0, _v51.rem)(3)};
    border-top: none;
  }
`,
    _v892 = _v33.default.div.withConfig({
      displayName: "Cropper__CropBox",
      componentId: "sc-fa267c04-3"
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
  var _v893 = _v0.i(0),
    _v894 = _v0.i(0),
    _v895 = _v0.i(0),
    _v896 = _v0.i(0);
  function _v897({
    label: _v0,
    duration: _v1,
    hasError: _v2,
    onInvalidFormat: _v3,
    onChange: _v4,
    onSubmit: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)("00:00:00");
    (0, _v22.useEffect)(() => {
      _v7(_v818(_v1, "hh:mm:SS"));
    }, [_v1]);
    let _v8 = (0, _v22.useMemo)(() => {
        let _v0 = _v6.split(":").map(_v0 => /^\d$/.test(_v0) ? "0" + _v0 : _v0),
          _v1 = 3 - _v0.length;
        return _v1 > 0 ? [...Array(_v1).keys()].map(() => "00").join(":") + ":" + _v6 : 0 === _v1 ? _v0.join(":") : -1;
      }, [_v6]),
      _v9 = () => {
        _v818(_v1, "hh:mm:SS") !== _v8 && (-1 !== _v8 && /^[0-9]+:[0-5][0-9]:[0-5][0-9]$/.test(_v8) ? _v5(_v8.split(":").map((_v0, _v1) => parseInt(_v0, 10) * Math.pow(60, 2 - _v1)).reduce((_v0, _v1) => _v0 + _v1, 0)) : _v3());
      };
    return (0, _v14.jsxs)(_v899, {
      isInvalid: _v2,
      children: [(0, _v14.jsx)(_v900, {
        children: (0, _v14.jsx)(_v902, {
          children: _v0
        })
      }), (0, _v14.jsx)(_v901, {
        size: "sm",
        value: _v6,
        onChange: _v0 => {
          _v4?.(), _v7(_v0.target.value);
        },
        onKeyDown: _v0 => {
          _v0.keyCode === _v788.KeyCodes.ENTER && _v9();
        },
        onBlur: _v9
      }), _v2 && (0, _v14.jsx)(_v894.FormErrorMessage, {
        children: (0, _v14.jsx)(_v799.Paragraph, {
          size: "sm",
          role: "note",
          color: "red.500",
          children: _v801.default.Invalid
        })
      })]
    });
  }
  let _v898 = _v33.css`
  font-size: ${(0, _v51.rem)(14)};
  letter-spacing: 0;
  line-height: ${(0, _v51.rem)(20)};
  font-weight: normal;
`,
    _v899 = (0, _v33.default)(_v893.FormControl).withConfig({
      displayName: "TimeInput__CompactFormControl",
      componentId: "sc-1ea1fd67-0"
    })`
  &&& {
    margin-bottom: 0;
  }
`,
    _v900 = (0, _v33.default)(_v895.FormLabel).withConfig({
      displayName: "TimeInput__CompactFormLabel",
      componentId: "sc-1ea1fd67-1"
    })`
  &&& {
    margin-bottom: 0.2rem;
  }
`,
    _v901 = (0, _v33.default)(_v896.Input).withConfig({
      displayName: "TimeInput__InputField",
      componentId: "sc-1ea1fd67-2"
    })`
  ${_v898};
`,
    _v902 = _v33.default.span.withConfig({
      displayName: "TimeInput__Label",
      componentId: "sc-1ea1fd67-3"
    })`
  ${_v898};
`;
  function _v903({
    start: _v0,
    end: _v1,
    duration: _v2,
    onChange: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(!1),
      [_v6, _v7] = (0, _v22.useState)(!1);
    (0, _v22.useEffect)(() => {
      _v5(!1);
    }, [_v0]), (0, _v22.useEffect)(() => {
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
    return (0, _v14.jsxs)(_v904, {
      children: [(0, _v14.jsx)(_v905, {
        children: (0, _v14.jsx)(_v897, {
          duration: _v0,
          onSubmit: _v0 => _v8(_v0, !0),
          onChange: () => _v5(!1),
          hasError: _v4,
          onInvalidFormat: () => _v5(!0),
          label: _v801.default.Start
        })
      }), (0, _v14.jsx)(_v905, {
        children: (0, _v14.jsx)(_v897, {
          duration: _v1,
          onSubmit: _v0 => _v8(_v0, !1),
          onChange: () => _v7(!1),
          hasError: _v6,
          onInvalidFormat: () => _v7(!0),
          label: _v801.default.End
        })
      })]
    });
  }
  let _v904 = _v33.default.section.withConfig({
      displayName: "InputContainer__Container",
      componentId: "sc-5bffe85-0"
    })`
  margin-top: ${(0, _v51.rem)(29)};
`,
    _v905 = _v33.default.article.withConfig({
      displayName: "InputContainer__InputWrapper",
      componentId: "sc-5bffe85-1"
    })`
  width: ${(0, _v51.rem)(100)};
  display: inline-block;
  &:first-child {
    margin-right: ${(0, _v51.rem)(14)};
  }
`;
  var _v906 = ((_v7 = _v906 || {}).LEFT = "left", _v7.RIGHT = "right", _v7);
  let _v907 = {
      h: (0, _v51.rem)(32),
      minW: (0, _v51.rem)(_v788.SCRUBBER_WIDTH),
      color: "white",
      bg: "blue.500",
      lineHeight: (0, _v51.rem)(28),
      textAlign: "center",
      cursor: "grab",
      position: "relative",
      sx: {
        _after: {
          content: '"|"',
          fontSize: (0, _v51.rem)(12)
        }
      }
    },
    _v908 = {
      as: "aside",
      bg: "popover",
      color: "text-primary",
      position: "absolute",
      px: (0, _v51.rem)(12),
      top: `-${(0, _v51.rem)(34)}`,
      fontSize: (0, _v51.rem)(14),
      letterSpacing: (0, _v51.rem)(.1),
      lineHeight: (0, _v51.rem)(24),
      transition: "opacity 100ms linear"
    },
    _v909 = {
      as: "time",
      color: "text-tertiary",
      fontSize: (0, _v51.rem)(12),
      letterSpacing: (0, _v51.rem)(.17),
      lineHeight: (0, _v51.rem)(14)
    };
  function _v910({
    duration: _v0 = 0,
    onDrag: _v1,
    onDragStart: _v2,
    onDragEnd: _v3
  }) {
    let [_v4, _v5] = (0, _v22.useState)(0),
      [_v6, _v7] = (0, _v22.useState)(0),
      [_v8, _v9] = (0, _v22.useState)(!1),
      [_v10, _v11] = (0, _v22.useState)(!1),
      _v12 = (0, _v22.useRef)(null),
      _v13 = (0, _v22.useRef)(null),
      _v14 = (0, _v22.useRef)(null),
      _v15 = (0, _v22.useRef)(null),
      _v16 = (0, _v22.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (0 === _v0 ? 0 : (_v0 > _v0 ? _v0 : _v0) / _v0) * _v0;
      }, [_v0, _v12]),
      _v17 = (0, _v22.useCallback)(() => {
        let _v0;
        return _v0 = _v12.current?.offsetWidth || 0, _v0 => (_v0 > _v0 ? _v0 : _v0) / _v0 * _v0;
      }, [_v0, _v12]),
      _v18 = (0, _v22.useMemo)(() => {
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
      _v19 = (0, _v22.useMemo)(() => ({
        from: _v818(_v18.from),
        to: _v818(_v18.to)
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
      _v23 = (0, _v248.useGesture)({
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
      _v24 = (0, _v248.useGesture)({
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
      _v25 = (0, _v248.useGesture)({
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
    return (0, _v22.useEffect)(() => {
      _v13.current && _v7(_v13.current.offsetWidth);
    }, [_v13]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v654.Box, {
        ref: _v12,
        bg: "fill-component-secondary",
        w: "100%",
        h: (0, _v51.rem)(32),
        borderRadius: (0, _v51.rem)(2),
        position: "relative",
        boxSizing: "border-box",
        children: (0, _v14.jsxs)(_v654.Box, {
          ref: _v13,
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          h: "100%",
          bg: "rgba(66, 153, 225, 0.3)",
          children: [(0, _v14.jsx)(_v654.Box, {
            ..._v23(),
            ref: _v14,
            ..._v907,
            borderTopLeftRadius: (0, _v51.rem)(2),
            borderBottomLeftRadius: (0, _v51.rem)(2),
            children: (0, _v14.jsx)(_v654.Box, {
              ..._v908,
              opacity: +!!_v8,
              left: `-${(0, _v51.rem)(24)}`,
              children: _v19.from
            })
          }), (0, _v14.jsx)(_v654.Box, {
            ..._v25(),
            w: "100%",
            h: "100%",
            cursor: "move"
          }), (0, _v14.jsx)(_v654.Box, {
            ..._v24(),
            ref: _v15,
            ..._v907,
            borderTopRightRadius: (0, _v51.rem)(2),
            borderBottomRightRadius: (0, _v51.rem)(2),
            children: (0, _v14.jsx)(_v654.Box, {
              ..._v908,
              opacity: +!!_v10,
              right: `-${(0, _v51.rem)(24)}`,
              children: _v19.to
            })
          })]
        })
      }), (0, _v14.jsxs)(_v654.Box, {
        mt: (0, _v51.rem)(7),
        display: "flex",
        justifyContent: "space-between",
        children: [(0, _v14.jsx)(_v654.Box, {
          ..._v909,
          children: _v818(0)
        }), (0, _v14.jsx)(_v654.Box, {
          ..._v909,
          children: _v818(_v0)
        })]
      }), (0, _v14.jsx)(_v903, {
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
  function _v911({
    size: _v0 = "xl"
  }) {
    return (0, _v14.jsx)(_v912, {
      children: (0, _v14.jsx)(_v34.Spinner, {
        size: _v0
      })
    });
  }
  let _v912 = _v33.default.aside.withConfig({
    displayName: "OverlayLoader__LoaderWrapper",
    componentId: "sc-525450b6-0"
  })`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
  function _v913({
    coverClip: {
      configUrl: _v0,
      clipId: _v1,
      duration: _v2
    },
    setYPosition: _v3,
    setTimeBounds: _v4,
    timeBounds: _v5,
    onVideoLoad: _v6
  }) {
    let [_v7, _v8] = (0, _v22.useState)(!1),
      {
        startTime: _v9,
        endTime: _v10
      } = _v5,
      _v11 = (0, _v22.useRef)(null),
      _v12 = (0, _v22.useRef)(null),
      {
        player: _v13
      } = (0, _v170.usePlayer)(_v11, Number(_v1), !0, _v0),
      _v14 = () => {
        _v12.current = _v13?.play() || null;
      };
    return (0, _v22.useEffect)(() => {
      let _v0 = ({
        currentTime: _v0
      }) => {
        _v0 >= _v10 + _v788.TRIMMER_ROUND_OFFSET && (_v13.currentTime = _v9);
      };
      return _v13 && (_v13.muted = !0, _v13.on("timeupdate", _v0), _v13.once("timeupdate", () => {
        _v8(!0), _v6();
      })), () => {
        _v13 && _v13.off("timeupdate", _v0);
      };
    }, [_v13, _v9, _v10, _v7, _v6]), (0, _v22.useEffect)(() => {
      _v14();
    }, [_v13]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [!_v7 && (0, _v14.jsx)(_v911, {}), (0, _v14.jsxs)(_v916, {
        isVideoBuffering: !_v7,
        children: [(0, _v14.jsx)(_v914, {
          children: (0, _v14.jsx)(_v887, {
            showCropper: _v7,
            setYPosition: _v3,
            children: (0, _v14.jsx)(_v915, {
              ref: _v11
            })
          })
        }), _v13 && (0, _v14.jsx)(_v910, {
          onDrag: _v0 => {
            _v13.currentTime = _v0;
          },
          onDragStart: () => _v12.current?.then(() => _v13?.pause()),
          onDragEnd: ({
            from: _v0,
            to: _v1
          }) => {
            _v4({
              ..._v5,
              startTime: _v0,
              endTime: _v1
            }), _v14();
          },
          duration: _v2
        })]
      })]
    });
  }
  let _v914 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__CropWrapper",
      componentId: "sc-57512f98-0"
    })`
  position: relative;
  width: 100%;
  height: 100%;
`,
    _v915 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__VideoWrapper",
      componentId: "sc-57512f98-1"
    })`
  video {
    display: block;
  }
`,
    _v916 = _v33.default.div.withConfig({
      displayName: "VideoPlayer__VideoContentWrapper",
      componentId: "sc-57512f98-2"
    })`
  padding: ${(0, _v51.rem)(24)};

  ${({
      isVideoBuffering: _v0
    }) => _v0 && _v33.css`
      opacity: 0.15;
      pointer-events: none;
    `}
`;
  function _v917(_v0) {
    let {
        clipUri: _v1,
        setTimeBounds: _v2,
        timeBounds: _v3,
        onLoad: _v4
      } = _v0,
      {
        data: _v5,
        loading: _v6
      } = (0, _v115.useQuery)(`/videos/${_v789(_v1)}?autoplay=1&background=1&default_to_hd=1`);
    return (0, _v22.useEffect)(() => {
      _v5 && _v2({
        ..._v3,
        endTime: _v5.duration
      });
    }, [_v5]), (0, _v14.jsx)(_v918, {
      children: !_v6 && _v5 ? (0, _v14.jsx)(_v913, {
        ..._v0,
        coverClip: {
          clipId: String(_v789(_v5.uri)),
          configUrl: _v5.configUrl,
          duration: _v5.duration
        },
        onVideoLoad: () => _v4(!0)
      }) : (0, _v14.jsx)(_v911, {})
    });
  }
  let _v918 = _v33.default.div.withConfig({
    displayName: "VideoTrimmerAndCrop__SectionContainer",
    componentId: "sc-8602342a-0"
  })`
  position: relative;
  height: 100%;
  overflow: auto;
`;
  function _v919({
    onSubmit: _v0
  }) {
    let [_v1, _v2] = (0, _v22.useState)(0),
      [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)(),
      [_v7, _v8] = (0, _v22.useState)(!0),
      [_v9, _v10] = (0, _v22.useState)(50),
      [_v11, _v12] = (0, _v22.useState)(!1),
      [_v13, _v14] = (0, _v22.useState)({
        startTime: 0,
        endTime: 0
      }),
      {
        query: _v15,
        setQuery: _v16,
        searchText: _v17,
        clearQuery: _v18
      } = _v859(),
      _v19 = (0, _v22.useContext)(_v32.ViewerContext),
      _v20 = `users/${_v19.user?.id}/videos`,
      {
        trackUserProfileCoverVideoConfirmed: _v21
      } = (0, _v30.useProfileTracking)(),
      _v22 = (0, _v22.useCallback)(() => _v8(!1), []),
      _v23 = _v0 => {
        let _v1 = _v1 + _v0;
        if (2 === _v1 && _v5) {
          _v12(!0);
          let _v0 = {
            clipId: _v789(_v5.uri),
            yPosition: Math.trunc(_v9),
            ..._v13
          };
          _v21(), _v0(_v0);
        } else _v2(_v1);
        _v4(0 !== _v1);
      };
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v886.ModalCloseButton, {}), (0, _v14.jsx)(_v831.ModalHeader, {
        paddingBottom: 0,
        children: (0, _v14.jsx)(_v657.Header, {
          as: "h4",
          size: "md",
          children: 0 === _v1 ? _v801.default.PickerHeader : _v801.default.VideoTrimCropModalHeader
        })
      }), _v7 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v829.ModalBody, {
          padding: 0,
          overflow: "hidden",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          children: 0 === _v1 ? (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)(_v857, {
              query: _v15,
              onChange: _v16
            }), (0, _v14.jsx)(_v855, {
              queryUrl: _v20,
              searchText: _v17,
              onClearSearch: _v18,
              selectedClips: _v5 ? [_v5] : [],
              onSelectedClipsChange: _v0 => _v6(_v0[0]),
              onNoInitialClips: _v22
            })]
          }) : (0, _v14.jsx)(_v917, {
            clipUri: String(_v5?.uri),
            yPosition: _v9,
            setYPosition: _v10,
            timeBounds: _v13,
            setTimeBounds: _v14,
            onLoad: _v0 => _v4(!_v0)
          })
        }), (0, _v14.jsx)(_v830.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v14.jsxs)(_v656.Flex, {
            flexGrow: "1",
            justify: "space-between",
            align: "center",
            children: [(0, _v14.jsx)(_v24.Text, {
              variant: "body-md",
              children: (0, _v27.translate)({
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
                    singular: "{STEP} / {STEPS}"
                  },
                  "ko-KR": {
                    singular: "{STEP}/{STEPS}"
                  },
                  "pt-BR": {
                    singular: "{STEP} de {STEPS}"
                  },
                  "zh-CN": {
                    singular: "{STEP} / {STEPS}"
                  }
                }
              })
            }), (0, _v14.jsxs)(_v828.HStack, {
              spacing: "sm",
              children: [(0, _v14.jsx)(_v655.Button, {
                variant: "secondary",
                onClick: () => _v23(-1),
                isDisabled: 0 === _v1 || _v11,
                children: _v801.default.Back
              }), (0, _v14.jsx)(_v655.Button, {
                variant: "primary",
                onClick: () => {
                  _v3 || _v11 || _v23(1);
                },
                isDisabled: _v11 || _v3 || !_v5,
                isLoading: _v11,
                children: 0 === _v1 ? _v801.default.Next : _v801.default.Done
              })]
            })]
          })
        })]
      }) : (0, _v14.jsx)(_v829.ModalBody, {
        padding: 0,
        children: (0, _v14.jsx)(_v842, {
          icon: (0, _v14.jsx)(_v839.VideosStack, {
            boxSize: "md"
          }),
          header: (0, _v14.jsx)(_v24.Text, {
            as: "p",
            variant: "body-xl",
            color: "text-secondary",
            children: _v801.default.NoVideosYet
          }),
          cta: (0, _v14.jsx)(_v655.Button, {
            as: "a",
            mt: "lg",
            size: "lg",
            variant: "secondary",
            href: "/upload",
            textDecoration: "none",
            children: _v801.default.UploadAVideo
          })
        })
      })]
    });
  }
  let _v920 = /iphone|ipod|ipad|android|webos|blackberry|windows phone|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  function _v921({
    coverVideo: _v0,
    setCoverVideo: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      _v4 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      {
        trackUserProfileCoverVideoActionClicked: _v5,
        trackUserProfileCoverAddClicked: _v6
      } = (0, _v30.useProfileTracking)(),
      [{
        put: _v7,
        destroy: _v8
      }, {
        loading: _v9,
        error: _v10,
        data: _v11
      }] = (0, _v191.useMutation)("/me/background_video");
    return (0, _v22.useEffect)(() => {
      !_v9 && _v11 && _v3(_v9);
    }, [_v11, _v9]), (0, _v22.useEffect)(() => {
      _v11 && _v1(_v11);
    }, [_v1, _v11]), (0, _v22.useEffect)(() => {
      !_v11 || _v9 || _v10 || _v4();
    }, [_v11, _v9, _v10, _v4]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [_v0 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [!_v9 && (0, _v14.jsx)(_v878, {
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
        }), (0, _v14.jsx)(_v882, {
          clipUrl: "" + _v0.clipId,
          configUrl: _v0.configUrl,
          end: _v0.endTime,
          start: _v0.startTime,
          poster: _v0.firstFrameURL,
          yPosition: _v0.yPosition
        })]
      }) : (0, _v14.jsx)(_v881, {
        subTitle: _v801.default.AddCoverVideo,
        onClick: () => {
          _v6(), _v3(!0);
        }
      }), (0, _v14.jsxs)(_v651.Modal, {
        onClose: () => _v3(!1),
        isOpen: _v2,
        size: "lg",
        returnFocusOnClose: !1,
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
          width: "90vw",
          height: "85vh",
          maxHeight: (0, _v658.rem)(752),
          padding: 0,
          overflow: "hidden",
          children: (0, _v14.jsx)(_v919, {
            onSubmit: _v0 => {
              _v7({
                variables: (0, _v47.decamelizeDeep)(_v0)
              });
            }
          })
        })]
      })]
    });
  }
  function _v922({
    profile: _v0
  }) {
    let {
        editMode: _v1
      } = (0, _v22.useContext)(_v784.default),
      [_v2, _v3] = (0, _v22.useState)(_v0.backgroundVideo?.[0] || null);
    return (0, _v14.jsx)(_v14.Fragment, {
      children: (_v1 || !!_v2) && (0, _v14.jsx)(_v654.Box, {
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
        children: _v1 && !_v920 ? (0, _v14.jsx)(_v921, {
          coverVideo: _v2,
          setCoverVideo: _v3
        }) : _v2 && (0, _v14.jsx)(_v882, {
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
  let _v923 = _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M19 16a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2Zm0-10a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6Zm2 12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2Zm0-10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2Z",
        fill: "currentColor"
      })
    }),
    _v924 = () => void 0,
    _v925 = async () => void 0,
    _v926 = (0, _v22.createContext)({
      isCreating: !1,
      trigger: _v925,
      stop: _v924,
      registerCreator: _v924
    });
  function _v927({
    children: _v0
  }) {
    let [_v1, _v2] = (0, _v22.useState)(!1),
      _v3 = (0, _v22.useRef)(null),
      _v4 = (0, _v22.useCallback)(async () => {
        _v3.current ? await _v3.current.submitOrFocus() : _v2(!0);
      }, []),
      _v5 = (0, _v22.useCallback)(() => {
        _v3.current = null, _v2(!1);
      }, []),
      _v6 = (0, _v22.useCallback)(_v0 => {
        _v3.current = _v0;
      }, []),
      _v7 = (0, _v22.useMemo)(() => ({
        isCreating: _v1,
        trigger: _v4,
        stop: _v5,
        registerCreator: _v6
      }), [_v1, _v4, _v5, _v6]);
    return (0, _v14.jsx)(_v926.Provider, {
      value: _v7,
      children: _v0
    });
  }
  function _v928() {
    return (0, _v22.useContext)(_v926);
  }
  function _v929({
    isDisabled: _v0 = !1
  }) {
    let {
        trigger: _v1
      } = _v928(),
      {
        trackUserProfileSectionCreated: _v2
      } = (0, _v30.useProfileTracking)();
    return (0, _v14.jsx)(_v823.Tooltip, {
      label: _v801.default.AddSection,
      shouldWrapChildren: !0,
      children: (0, _v14.jsx)(_v656.Flex, {
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
        "aria-label": _v801.default.AddSection,
        "aria-disabled": _v0,
        disabled: _v0,
        onClick: () => {
          _v0 || (_v826(_v788.BPEvent.CLICK_TO_CREATE_SECTION, 1), _v2(), _v1());
        },
        children: (0, _v14.jsx)(_v923, {
          boxSize: (0, _v658.rem)(20)
        })
      })
    });
  }
  function _v930() {
    let {
        mutate: _v0
      } = (0, _v22.useContext)(_v781),
      _v1 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      _v2 = (0, _v785.default)(),
      [{
        loading: _v3,
        called: _v4,
        error: _v5
      }, _v6] = (0, _v22.useState)({
        loading: !1,
        called: !1,
        error: !1
      }),
      _v7 = (0, _v22.useCallback)(_v0 => (_v6({
        loading: !1,
        called: !0,
        error: !0
      }), Promise.reject(_v0)), []),
      _v8 = (0, _v22.useCallback)(() => {
        _v1(), _v6({
          loading: !1,
          called: !0,
          error: !1
        });
      }, [_v1]),
      _v9 = (0, _v22.useCallback)((_v0, _v1) => _v2("me", {
        fields: _v0
      }, _v788.HTTPMethods.PATCH, _v1), [_v2]),
      _v10 = (0, _v22.useCallback)(_v0 => _v0(_v0 => _v0 ? {
        ..._v0,
        ..._v0
      } : _v0, {
        revalidate: !1
      }), [_v0]),
      _v11 = (0, _v22.useCallback)(_v0 => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v1 = (0, _v47.decamelizeDeep)(_v0);
        return _v10(_v0), _v9(Object.keys(_v1).join(","), _v1).then(_v8).catch(_v7);
      }, [_v10, _v7, _v8, _v9]),
      _v12 = (0, _v22.useCallback)(_v0 => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v9("location_details", (0, _v47.decamelizeDeep)(_v0)).then(() => {
        _v10({
          locationDetails: _v0
        }), _v8();
      }).catch(_v7)), [_v10, _v7, _v8, _v9]),
      _v13 = (0, _v22.useCallback)(_v0 => {
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
      _v14 = (0, _v22.useCallback)((_v0, _v1 = !0) => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        }), _v13(_v0);
        let _v2 = (0, _v47.decamelizeDeep)(_v0);
        return _v9(Object.keys(_v2.profile_preferences).map(_v0 => "profile_preferences." + _v0).join(","), _v2).then(() => {
          _v1 && _v1(), _v6({
            loading: !1,
            called: !0,
            error: !1
          });
        }).catch(_v7);
      }, [_v7, _v1, _v13, _v9]),
      _v15 = (0, _v22.useCallback)(() => (_v6({
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
      _v16 = (0, _v22.useCallback)(_v0 => _v0 && _v0.json ? _v0.json().then(_v0 => {
        let _v1 = (0, _v47.camelizeDeep)(_v0),
          _v2 = _v1.invalidParameters?.[0]?.errorCode === _v788.EMAIL_INVALID_DOMAIN_ERROR_CODE ? _v801.default.InvalidDomainError : _v801.default.InvalidEmailAddress;
        return _v6({
          loading: !1,
          called: !0,
          error: !0
        }), Promise.reject(_v2);
      }) : Promise.reject(void 0), []),
      _v17 = (0, _v22.useCallback)((_v0, _v1) => (_v6({
        loading: !0,
        called: !0,
        error: !1
      }), _v2("me/contact_emails", void 0, _v0 ? _v1 ? _v788.HTTPMethods.PUT : _v788.HTTPMethods.POST : _v788.HTTPMethods.DELETE, _v0 ? {
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
      _v18 = (0, _v22.useCallback)((_v0, _v1) => {
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
      updateLink: (0, _v22.useCallback)((_v0, _v1, _v2) => {
        _v6({
          loading: !0,
          called: !0,
          error: !1
        });
        let _v3 = `me/links/${_v1}`;
        if (!_v2) return _v2(_v3, void 0, _v788.HTTPMethods.DELETE).then(() => {
          _v18(null, _v0), _v8();
        }).catch(_v7);
        {
          let _v0 = _v788.HTTPMethods.PATCH;
          return -1 === _v1 && (_v0 = _v788.HTTPMethods.POST, _v3 = "me/links"), _v2(_v3, void 0, _v0, {
            link: _v2
          }).then(_v0 => {
            _v18(_v0, _v0), _v8();
          }).catch(_v7);
        }
      }, [_v2, _v7, _v8, _v18]),
      updateProfilePicture: (0, _v22.useCallback)(_v0 => _v10({
        pictures: _v0
      }), [_v10])
    };
  }
  let _v931 = {
      "&&": {
        paddingRight: (0, _v51.rem)(30)
      },
      "&::-ms-clear": {
        display: "none"
      },
      "&:disabled": {
        pointerEvents: "none",
        backgroundColor: (0, _v51.rgba)(0, 0, 0, .05)
      }
    },
    _v932 = _v22.default.forwardRef(({
      value: _v0,
      size: _v1 = "md",
      placeholder: _v2,
      onSubmit: _v3,
      errorMsg: _v4,
      disabled: _v5 = !1,
      onChange: _v6
    }, _v7) => {
      let [_v8, _v9] = (0, _v22.useState)(""),
        _v10 = (0, _v22.useRef)(null);
      return (0, _v22.useEffect)(() => {
        let _v0 = _v0 => {
            _v0.preventDefault(), _v9("");
          },
          _v1 = _v10.current;
        return _v1?.addEventListener("mousedown", _v0), () => _v1?.removeEventListener("mousedown", _v0);
      }, [_v10, _v8, _v0, _v5]), (0, _v22.useEffect)(() => {
        _v9(_v0);
      }, [_v0]), (0, _v14.jsxs)(_v654.Box, {
        position: "relative",
        children: [(0, _v14.jsx)(_v896.Input, {
          value: _v8 || "",
          onChange: _v0 => {
            _v5 || (_v9(_v0.target.value), _v6?.(_v0));
          },
          size: _v1,
          placeholder: _v2,
          onKeyDown: _v0 => {
            _v5 || (_v0.keyCode === _v788.KeyCodes.ENTER ? _v3(_v8) : _v0.keyCode === _v788.KeyCodes.ESC && _v3(_v0));
          },
          onBlur: () => {
            _v5 || _v3(_v8);
          },
          isInvalid: !!_v4,
          ref: _v7,
          isDisabled: _v5,
          autoFocus: !0,
          sx: _v931
        }), !!_v8 && !_v5 && (0, _v14.jsx)(_v656.Flex, {
          position: "absolute",
          top: 0,
          right: (0, _v51.rem)(4),
          h: "100%",
          align: "center",
          children: (0, _v14.jsx)(_v798.IconButton, {
            icon: (0, _v14.jsx)(_v52.CloseX, {}),
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
  function _v933({
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
    return _v0 ? (0, _v14.jsx)(_v804, {
      as: "article",
      editable: _v2,
      onClick: _v1,
      icon: (0, _v14.jsx)(_v292.Envelope, {
        boxSize: "xs"
      }),
      children: (0, _v14.jsx)(_v654.Box, {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: "inherit",
        display: "inline",
        fontSize: (0, _v51.rem)(14),
        ..._v3,
        children: _v0
      })
    }) : null;
  }
  function _v934({
    email: _v0,
    errorMsg: _v1,
    disable: _v2,
    onSubmit: _v3,
    onChange: _v4
  }) {
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v804, {
        icon: (0, _v14.jsx)(_v292.Envelope, {
          boxSize: "xs"
        }),
        children: (0, _v14.jsx)(_v654.Box, {
          width: "100%",
          position: "relative",
          children: (0, _v14.jsx)(_v932, {
            value: _v0,
            errorMsg: _v1,
            onSubmit: _v3,
            onChange: _v4,
            disabled: _v2
          })
        })
      }), _v1 && (0, _v14.jsx)(_v799.Paragraph, {
        size: "sm",
        color: "red.500",
        ml: (0, _v51.rem)(7),
        mt: (0, _v51.rem)(2),
        display: "block",
        children: _v1
      })]
    });
  }
  function _v935({
    email: _v0 = ""
  }) {
    let {
        userId: _v1
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfileEditFieldClicked: _v2
      } = (0, _v30.useProfileTracking)(),
      [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)(""),
      [_v7, _v8] = (0, _v22.useState)(!1),
      [_v9, _v10] = (0, _v22.useState)(),
      {
        updateEmail: _v11
      } = _v930(),
      _v12 = () => {
        _v2({
          userProfilePageUserId: String(_v1),
          userProfileEditField: "add_email"
        }), _v4(!0);
      },
      _v13 = (0, _v22.useCallback)(_v0 => {
        if (!_v7) {
          let _v0 = _v0.trim();
          if (_v5 !== _v0) {
            if (_v6(_v0), _v0 === _v0) _v10(void 0), _v4(!1);else /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_v0) || !_v0 ? (_v10(void 0), _v8(!0), _v11(_v0, !!(_v0 && _v0)).then(() => {
              _v8(!1), _v4(!1);
            }).catch(_v0 => {
              _v8(!1), _v10(_v0);
            })) : _v10(_v801.default.InvalidEmailAddress);
          } else _v4(!!_v9);
        }
      }, [_v0, _v9, _v7, _v11, _v5]);
    return (0, _v22.useEffect)(() => {
      _v6(_v0);
    }, [_v0]), (0, _v14.jsx)(_v654.Box, {
      tabIndex: 0,
      display: {
        base: "none",
        md: "block"
      },
      onKeyDown: _v0 => {
        _v790(_v0, () => {
          _v3 || _v12();
        }), _v0.keyCode === _v788.KeyCodes.ESC && (_v0.preventDefault(), _v4(!1), _v10(void 0), _v6(_v0));
      },
      children: _v3 ? (0, _v14.jsx)(_v934, {
        email: _v5,
        errorMsg: _v9,
        onSubmit: _v13,
        disable: _v7,
        onChange: () => {
          _v9 && _v10(void 0);
        }
      }) : _v5 ? (0, _v14.jsxs)(_v656.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v14.jsx)(_v933, {
          email: _v5,
          onClick: _v12,
          editMode: !0
        }), (0, _v14.jsx)(_v806, {
          onClick: _v12
        })]
      }) : (0, _v14.jsx)(_v805, {
        buttonText: _v801.default.AddEmail,
        onClick: _v12
      })
    });
  }
  function _v936({
    editMode: _v0,
    emails: _v1
  }) {
    return _v0 ? (0, _v14.jsx)(_v935, {
      email: _v1[0]
    }) : (0, _v14.jsx)(_v933, {
      email: _v1[0]
    });
  }
  var _v937 = _v0.i(0);
  function _v938({
    onClick: _v0,
    size: _v1,
    className: _v2
  }) {
    return (0, _v14.jsx)(_v654.Box, {
      position: "absolute",
      top: (0, _v51.rem)(16),
      right: (0, _v51.rem)(16),
      className: _v2,
      children: (0, _v14.jsx)(_v798.IconButton, {
        variant: "tertiary",
        icon: (0, _v14.jsx)(_v52.CloseX, {}),
        onClick: _v0,
        "aria-label": _v801.default.Dismiss,
        size: _v1
      })
    });
  }
  let _v939 = async (_v0, _v1, _v2) => {
      let _v3 = await fetch(`//${_v0}/me/following/${_v1}`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v2}`
        }
      });
      return _v3.ok || 404 === _v3.status ? Promise.resolve(404 !== _v3.status) : Promise.reject(_v3);
    },
    _v940 = (_v0, _v1, _v2) => fetch(`//${_v0}/me/following/${_v1}?check_email_verification=true`, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.vimeo.*;version=3.4.2",
        Authorization: `jwt ${_v2}`
      }
    }),
    _v941 = async (_v0, _v1, _v2) => {
      let _v3 = await fetch(`//${_v0}/me/following/${_v1}`, {
        method: "DELETE",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v2}`
        }
      });
      return _v3.ok ? Promise.resolve(_v3) : Promise.reject(_v3);
    },
    _v942 = async (_v0, _v1, _v2 = 1, _v3 = 1) => {
      let _v4 = await fetch(`//${_v0}/me/following?page=${_v2}&per_page=${_v3}&fields=uri`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v1}`
        }
      });
      return _v4.ok ? _v4.json().then(_v0 => (0, _v787.standardizeResponseObject)(_v0)) : Promise.reject(_v4);
    },
    _v943 = async (_v0, _v1) => {
      let _v2 = await fetch(`//${_v0}/me?fields=verified`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.vimeo.*;version=3.4.2",
          Authorization: `jwt ${_v1}`
        }
      });
      return _v2.ok ? _v2.json().then(_v0 => _v0) : Promise.reject(_v2);
    },
    _v944 = () => Error("Not implemented"),
    _v945 = (0, _v22.createContext)({
      isLoggedIn: !1,
      isStaffUser: !1,
      isVerifiedUser: !1,
      isLoading: !1,
      submitting: !1,
      isFollowing: !1,
      isUserFollowing: !1,
      onFollowUser: () => Promise.reject("Not implemented"),
      onUnfollowUser: _v944,
      onLoginSuccess: _v944
    });
  function _v946({
    children: _v0,
    profileId: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)({
        submitting: !1,
        isFollowing: !1,
        loading: !1,
        usersFollowing: null,
        isVerifiedUser: !1,
        error: null
      }),
      _v4 = (0, _v22.useContext)(_v32.ViewerContext),
      _v5 = (0, _v22.useMemo)(() => _v4?.apiUrl || "", [_v4]),
      _v6 = (0, _v22.useMemo)(() => _v4?.jwt || "", [_v4]),
      _v7 = (0, _v22.useMemo)(() => _v4?.user, [_v4]),
      _v8 = (0, _v22.useCallback)(async () => {
        let [_v0, _v1, _v2] = await Promise.all([_v1 !== _v7?.id ? _v939(_v5, _v1, _v6) : Promise.resolve(!1), _v942(_v5, _v6), _v1 !== _v7?.id ? _v943(_v5, _v6) : Promise.resolve({
          verified: !1
        })]);
        return {
          checkIfFollowing: _v0,
          usersFollowing: _v1,
          userIsVerified: _v2
        };
      }, [_v5, _v7, _v6, _v1]);
    (0, _v22.useEffect)(() => {
      _v7 && (_v3(_v0 => ({
        ..._v0,
        loading: !0
      })), _v8().then(_v0 => {
        _v3(_v0 => ({
          ..._v0,
          loading: !1,
          isFollowing: _v0.checkIfFollowing,
          usersFollowing: _v0.usersFollowing,
          isVerifiedUser: _v0.userIsVerified.verified
        }));
      }).catch(_v0 => _v3(_v0 => ({
        ..._v0,
        loading: !1,
        error: _v0
      }))));
    }, [_v7, _v1, _v8]);
    let _v9 = (0, _v22.useCallback)(_v0 => {
        _v942(_v5, _v6).then(_v0 => {
          _v3(_v0 => ({
            ..._v0,
            submitting: !1,
            usersFollowing: _v0,
            isFollowing: _v0
          }));
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v5, _v6]),
      _v10 = (0, _v22.useCallback)(() => (_v3(_v0 => ({
        ..._v0,
        submitting: !0
      })), _v940(_v5, _v1, _v6).then(_v0 => _v0.ok ? (_v9(!0), Promise.resolve(_v0)) : (_v3(_v0 => ({
        ..._v0,
        submitting: !1,
        error: _v0
      })), Promise.reject(_v0)))), [_v6, _v5, _v1, _v9]),
      _v11 = (0, _v22.useCallback)(() => {
        _v3(_v0 => ({
          ..._v0,
          submitting: !0
        })), _v941(_v5, _v1, _v6).then(() => {
          _v9(!1);
        }).catch(_v0 => _v3(_v0 => ({
          ..._v0,
          submitting: !1,
          error: _v0
        })));
      }, [_v6, _v5, _v1, _v9]),
      _v12 = (0, _v22.useCallback)(async () => {
        let _v0 = await fetch("/_next/jwt", {
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        return await _v0.json();
      }, []),
      _v13 = (0, _v22.useCallback)(async () => {
        try {
          _v3(_v0 => ({
            ..._v0,
            submitting: !0
          }));
          let _v0 = await _v12();
          await _v940(_v5, _v1, _v0.token);
        } catch (_v0) {}
        window.location.reload();
      }, [_v5, _v12, _v1]),
      _v14 = (0, _v22.useMemo)(() => {
        let _v0 = !!_v2.usersFollowing?.items?.length;
        return {
          isLoggedIn: !!_v7,
          isStaffUser: _v7?.badge.type === "staff",
          isVerifiedUser: _v2.isVerifiedUser,
          isLoading: _v2.loading,
          submitting: _v2.submitting,
          isFollowing: _v2.isFollowing,
          isUserFollowing: _v0,
          onFollowUser: _v10,
          onUnfollowUser: _v11,
          onLoginSuccess: _v13
        };
      }, [_v2, _v7, _v10, _v11, _v13]);
    return (0, _v14.jsx)(_v945.Provider, {
      value: _v14,
      children: _v0
    });
  }
  function _v947({
    xsrft: _v0,
    isOwner: _v1,
    profileId: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      _v5 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      {
        trackUserProfilePageFollowClicked: _v6
      } = (0, _v30.useProfileTracking)(),
      {
        isFollowing: _v7,
        isLoading: _v8,
        isLoggedIn: _v9,
        isVerifiedUser: _v10,
        onFollowUser: _v11,
        onLoginSuccess: _v12,
        onUnfollowUser: _v13,
        submitting: _v14
      } = (0, _v22.useContext)(_v945);
    _v827(_v3 ? _v0 => _v791(_v0, () => _v4(!1)) : void 0, [_v3]);
    let _v15 = (0, _v22.useCallback)(() => {
      _v1 ? _v5({
        content: _v801.default.FollowSameUser,
        status: "negative"
      }) : _v10 ? (_v826(_v788.BPEvent.CLICK_TO_FOLLOW_CREATOR, 1, {
        following: !_v7
      }), _v6({
        userProfilePageUserId: String(_v2),
        userProfilePageFollowEffect: _v7 ? "unfollow" : "follow"
      }), _v7 ? _v13() : _v11().catch(_v0 => {
        (_v0.status === _v788.ErrorCodes.ENHACE_YOUR_CALM || _v0.status === _v788.ErrorCodes.TOO_MANY_REQUESTS) && _v4(!0);
      })) : _v4(!0);
    }, [_v7, _v1, _v10, _v11, _v5, _v13]);
    return _v8 ? null : (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v419.LoginJoinModal, {
        type: "login",
        xsrft: _v0,
        onSuccess: _v12,
        children: _v0 => (0, _v14.jsx)(_v655.Button, {
          w: "100%",
          variant: "secondary",
          leftIcon: _v7 ? (0, _v14.jsxs)(_v654.Box, {
            as: "span",
            display: "inline-flex",
            alignItems: "center",
            children: [(0, _v14.jsx)(_v52.CloseX, {
              id: "dismiss-icon"
            }), (0, _v14.jsx)(_v416.Checkmark, {
              id: "check-icon"
            })]
          }) : (0, _v14.jsx)(_v492.PlusSmall, {}),
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
            [`@media (min-width: ${_v53.bokehTheme.breakpoints.lg})`]: {
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
          children: !_v14 && _v7 ? (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)("span", {
              id: "following-text",
              children: _v801.default.Following
            }), (0, _v14.jsx)("span", {
              id: "unfollow-text",
              children: _v801.default.Unfollow
            })]
          }) : _v801.default.Follow
        })
      }), (0, _v14.jsxs)(_v651.Modal, {
        isOpen: _v3,
        onClose: () => _v4(!1),
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
          children: (0, _v14.jsxs)(_v654.Box, {
            p: `${(0, _v51.rem)(40)} ${(0, _v51.rem)(30)} ${(0, _v51.rem)(20)}`,
            children: [(0, _v14.jsx)(_v938, {
              onClick: () => _v4(!1)
            }), (0, _v14.jsx)(_v657.Header, {
              size: "md",
              children: _v10 ? _v801.default.UnableToFollow : _v801.default.VerifyAccountTitle
            }), (0, _v14.jsx)(_v799.Paragraph, {
              size: "md",
              children: _v10 ? _v801.default.TooManyFollow : (0, _v14.jsx)(_v14.Fragment, {
                children: (0, _v27.translate)({
                  singular: "You need to verify your email address before following other members on Vimeo. {LINK}Need help?{/LINK}",
                  replacements: {
                    LINK: _v0 => (0, _v14.jsx)(_v937.Link, {
                      href: "/help/verify_email",
                      color: "inherit",
                      children: _v0
                    }, "info-modal-text")
                  },
                  dictionary: {
                    es: {
                      singular: "Necesitas verificar tu dirección de correo electrónico antes de que puedas seguir a otros miembros en Vimeo. {LINK}¿Necesitas ayuda?{/LINK}"
                    },
                    "de-DE": {
                      singular: "Deine E-Mail-Adresse muss überprüft werden, bevor du anderen Mitgliedern auf Vimeo folgen kannst. {LINK}Brauchst du Hilfe?{/LINK}"
                    },
                    "fr-FR": {
                      singular: "Vous devez vérifier votre adresse e-mail avant de suivre d'autres membres sur Vimeo. {LINK}Besoin d'aide ?{/LINK}"
                    },
                    "ja-JP": {
                      singular: "Vimeoメンバーをフォローするにはまずメールアドレスを承認してください。{LINK}お困りですか？{/LINK}"
                    },
                    "ko-KR": {
                      singular: "Vimeo에서 다른 사용자들을 팔로우하려면 이메일 주소를 검증해야 합니다. {LINK}도움이 필요하신가요?{/LINK}"
                    },
                    "pt-BR": {
                      singular: "Você precisa confirmar o seu endereço de e-mail antes de seguir outros membros no Vimeo. {LINK}Precisa de ajuda? {/LINK}"
                    },
                    "zh-CN": {
                      singular: "在关注 Vimeo 上的其他会员之前，您需要验证您的电子邮件地址。{LINK}需要帮助吗？{/LINK}"
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
  var _v948 = ((_v8 = _v948 || {}).ABOUT = "about", _v8.VIDEO = "video", _v8);
  let _v949 = (0, _v22.lazy)(() => _v0.A(0));
  var _v950 = ((_v9 = _v950 || {}).ABOUT = "about", _v9.VIDEO = "video", _v9);
  function _v951({
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
    let [_v11, _v12] = (0, _v22.useState)("about"),
      [_v13, _v14] = (0, _v22.useState)(!1),
      _v15 = (0, _v22.useRef)(null),
      _v16 = (0, _v22.useRef)(null);
    return !function (_v0, _v1) {
      let [_v2, _v3] = (0, _v22.useState)("about"),
        _v4 = (0, _v434.useViewer)(),
        _v5 = _v4?.user?.id,
        _v6 = _v4?.vuid,
        _v7 = "/profile";
      _v7 = window.location?.pathname;
      let {
          assignment: _v8
        } = (0, _v433.useEppoAssignment)({
          flagKey: "profile-mobile-default-tab",
          subject: {
            key: _v6,
            keyType: _v432.SubjectKeyTypes.VUID,
            additionalData: _v5 ? {
              cuid: _v5
            } : {}
          },
          bigPictureOverrides: {
            product_analytics_context: {
              product: "community",
              device_type: "mobile"
            },
            web_context: {
              page_name: "user_profile",
              path: _v7
            }
          },
          defaultAssignment: "control",
          disabled: _v1
        }),
        _v9 = "variant" === _v8 ? "video" : "about";
      _v9 !== _v2 && _v3(_v9), (0, _v22.useEffect)(() => {
        _v0(_v2);
      }, [_v2, _v0, _v1]);
    }(_v12, _v4), (0, _v22.useLayoutEffect)(() => {
      let _v0 = (0, _v313.default)(() => {
        if (_v15.current) {
          let _v0 = _v15.current.getBoundingClientRect(),
            _v1 = window?.innerHeight,
            _v2 = _v0.bottom >= 0 && _v0.top < _v1,
            _v3 = _v16.current;
          if (_v14(!_v2), _v3) {
            if (_v2) _v3.classList.remove("showUserInfoPanel");else if (_v3.classList.add("showUserInfoPanel"), _v7?.current) {
              let _v0 = document.documentElement;
              _v0.scrollHeight - (_v0.scrollTop + _v7.current.offsetHeight) - 100 < _v3.offsetHeight ? _v3.classList.add("scrolledToBottom") : _v3.classList.remove("scrolledToBottom");
            }
          }
        }
      }, 50);
      return document.addEventListener("scroll", _v0), () => document.removeEventListener("scroll", _v0);
    }, [_v15, _v16, _v7]), (0, _v14.jsxs)(_v654.Box, {
      position: "relative",
      pb: (0, _v51.rem)(76),
      children: [_v0 && (0, _v14.jsx)(_v958, {
        children: _v0
      }), _v8?.(_v13), (0, _v14.jsxs)(_v654.Box, {
        pt: _v0 ? void 0 : (0, _v51.rem)(50),
        display: {
          lg: "flex"
        },
        children: [_v5 && (0, _v14.jsxs)(_v952, {
          href: _v6,
          children: [(0, _v14.jsx)(_v953, {
            children: (0, _v14.jsx)(_v431.ChevronRightSmall, {})
          }), _v801.default.SearchResults]
        }), (0, _v14.jsxs)(_v959, {
          noHeader: !_v0,
          children: [(0, _v14.jsxs)("div", {
            ref: _v15,
            children: [(0, _v14.jsx)(_v820, {
              withoutEffects: !_v4,
              children: _v1
            }), _v4 && _v2]
          }), _v4 && (0, _v14.jsx)(_v956, {
            ref: _v16,
            children: _v1
          })]
        }), (0, _v14.jsxs)(_v960, {
          noHeader: !_v0,
          hugContent: _v10,
          children: [!_v4 && (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)(_v834.Tabs, {
              size: "xs",
              variant: "soft",
              isFitted: !0,
              width: "100%",
              my: (0, _v51.rem)(16),
              index: +("video" !== _v11),
              onChange: _v0 => _v12(0 === _v0 ? "video" : "about"),
              children: (0, _v14.jsxs)(_v835.TabList, {
                children: [(0, _v14.jsx)(_v833.Tab, {
                  children: _v801.default.Videos
                }), (0, _v14.jsx)(_v833.Tab, {
                  children: _v801.default.About
                }), (0, _v14.jsx)(_v834.TabIndicator, {})]
              })
            }), "about" === _v11 ? (0, _v14.jsx)(_v14.Fragment, {
              children: _v2
            }) : null]
          }), _v4 || "video" === _v11 ? (0, _v14.jsx)(_v14.Fragment, {
            children: _v3
          }) : null]
        })]
      }), _v9 ? null : (0, _v14.jsx)(_v22.Suspense, {
        fallback: (0, _v14.jsx)(_v14.Fragment, {}),
        children: (0, _v14.jsx)(_v949, {
          footerRef: _v7,
          isDesktopView: _v4
        })
      })]
    });
  }
  let _v952 = _v33.default.a.withConfig({
      displayName: "Layout__SearchResults",
      componentId: "sc-e02544f9-0"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-size: ${(0, _v51.rem)(14)};
  font-weight: bold;
  line-height: ${(0, _v51.rem)(17)};
  letter-spacing: ${(0, _v51.rem)(.2)};
  border-radius: ${(0, _v51.rem)(2)};
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${(0, _v51.rem)(8)} ${(0, _v51.rem)(14)} ${(0, _v51.rem)(8)} ${(0, _v51.rem)(10)};
  cursor: pointer;
  z-index: 1;
  width: ${(0, _v51.rem)(146)};
  position: absolute;
  top: ${(0, _v51.rem)(30)};
  left: ${(0, _v51.rem)(16)};
  text-decoration: none;
  ${_v61.media.sm`
    left: ${(0, _v51.rem)(30)};
  `};
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    top: ${(0, _v51.rem)(20)};
    left: ${(0, _v51.rem)(40)};
  }
  ${_v61.media.hd`
    left: ${(0, _v51.rem)(60)};
  `};
  ${_v61.media.xhd`
    left: ${(0, _v51.rem)(70)};
  `};
`,
    _v953 = _v33.default.div.withConfig({
      displayName: "Layout__ChevronLeft",
      componentId: "sc-e02544f9-1"
    })`
  display: inline-block;
  vertical-align: middle;
  width: ${(0, _v51.rem)(20)};
  height: ${(0, _v51.rem)(20)};
  transform: rotate(180deg);
  svg path {
    fill: ${_v53.bokehTheme.colors.white};
  }
`,
    _v954 = _v33.keyframes`
  from {
    transform: translateY(${(0, _v51.rem)(50)});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,
    _v955 = _v33.keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(${(0, _v51.rem)(50)});
    opacity: 0;
  }
`,
    _v956 = (0, _v33.default)(_v820).withConfig({
      displayName: "Layout__CustomInfoPanel",
      componentId: "sc-e02544f9-2"
    })`
  position: fixed !important;
  top: ${(0, _v51.rem)(90)};
  opacity: 0;
  animation: ${_v955} 0.5s ease-out;
  visibility: hidden;
  &.showUserInfoPanel {
    opacity: 1;
    z-index: 2;
    visibility: visible;
    animation: ${_v954} 0.5s ease-in;
  }
  &.scrolledToBottom {
    position: absolute !important;
    top: auto;
    bottom: ${(0, _v51.rem)(20)};
  }
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    width: ${(0, _v51.rem)(320)};
  }
  ${_v61.media.hd`
    width: ${(0, _v51.rem)(424)};
  `};
  ${_v61.media.xhd`
    width: ${(0, _v51.rem)(566)};
  `}
`,
    _v957 = _v33.css`
  padding: 0 ${(0, _v51.rem)(16)};
  ${_v61.media.sm`
    padding: 0 ${(0, _v51.rem)(30)};
  `};
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    padding: 0;
  }
`,
    _v958 = _v33.default.div.withConfig({
      displayName: "Layout__HeaderWrapper",
      componentId: "sc-e02544f9-3"
    })`
  height: ${(0, _v51.rem)(138)};
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    height: ${(0, _v51.rem)(194)};
  }
  ${_v61.media.hd`
    height: ${(0, _v51.rem)(258)};
  `};
  ${_v61.media.xhd`
    height: ${(0, _v51.rem)(344)};
  `}
`,
    _v959 = _v33.default.div.withConfig({
      displayName: "Layout__LeftPanelWrapper",
      componentId: "sc-e02544f9-4"
    })`
  ${_v957}
  margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(100)};
  ${_v61.media.sm`
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(65)};
  `}
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    flex: 0 0 auto;
    width: ${(0, _v51.rem)(320)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(30) : (0, _v51.rem)(-50)};
    margin-left: ${(0, _v51.rem)(40)};
  }
  ${_v61.media.hd`
    width: ${(0, _v51.rem)(424)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(25) : (0, _v51.rem)(-70)};
    margin-left: ${(0, _v51.rem)(60)};
  `};
  ${_v61.media.xhd`
    width: ${(0, _v51.rem)(566)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 ? (0, _v51.rem)(30) : (0, _v51.rem)(-154)};
    margin-left: ${(0, _v51.rem)(70)};
  `};
`,
    _v960 = _v33.default.div.withConfig({
      displayName: "Layout__RightPanelWrapper",
      componentId: "sc-e02544f9-5"
    })`
  ${_v957}
  @media (min-width: ${_v53.bokehTheme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: calc(100% - ${(0, _v51.rem)(360)});
    padding: ${(0, _v51.rem)(16)} ${(0, _v51.rem)(16)} ${(0, _v51.rem)(29)} ${(0, _v51.rem)(16)};
    margin-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(15)};
    /* Avoid the row's stretch leaving a gap below the rounded video box. */
    ${({
      hugContent: _v0
    }) => _v0 && _v33.css`
        align-self: flex-start;
      `}
  }
  ${_v61.media.hd`
    width: calc(100% - ${(0, _v51.rem)(484)});
    padding: ${(0, _v51.rem)(16)} ${(0, _v51.rem)(16)} ${(0, _v51.rem)(29)} ${(0, _v51.rem)(16)};
    margin-top: 0;
    padding-top: ${({
      noHeader: _v0
    }) => _v0 && (0, _v51.rem)(25)};
  `};
  ${_v61.media.xhd`
    width: calc(100% - ${(0, _v51.rem)(636)});
    padding: ${(0, _v51.rem)(16)} ${(0, _v51.rem)(16)} ${(0, _v51.rem)(29)} ${(0, _v51.rem)(16)};
  `};
`;
  var _v961 = _v0.i(0);
  let _v962 = {
    facebook: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M12 2C6.477 2 2 6.477 2 12c0 4.69 3.229 8.624 7.584 9.705v-6.65H7.522V12h2.062v-1.317c0-3.404 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a12.858 12.858 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236v1.08h3.266l-.561 3.057h-2.705v6.87C18.163 21.328 22 17.113 22 12c0-5.523-4.477-10-10-10Z",
        fill: "currentColor"
      })
    }),
    reddit: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm4.176 3.953c-.41 0-.76.233-.924.584l-2.42-.515a.293.293 0 0 0-.2.036.286.286 0 0 0-.117.164l-.737 3.485c-1.555.047-2.947.503-3.953 1.24a1.477 1.477 0 0 0-1.006-.41c-.807 0-1.462.656-1.462 1.463 0 .596.351 1.1.866 1.333-.024.14-.035.292-.035.444 0 2.246 2.608 4.059 5.835 4.059 3.229 0 5.837-1.813 5.837-4.059 0-.152-.011-.292-.035-.432.48-.234.842-.749.842-1.345 0-.807-.655-1.463-1.462-1.463-.398 0-.748.153-1.006.41-.994-.713-2.374-1.181-3.894-1.24l.666-3.123 2.164.456a1.042 1.042 0 0 0 2.082-.046c0-.573-.468-1.04-1.041-1.04Zm-2.059 9.45a.275.275 0 0 1 .386 0 .3.3 0 0 1-.024.386c-.713.713-2.07.76-2.467.76-.398 0-1.767-.058-2.468-.76a.276.276 0 0 1 0-.386.275.275 0 0 1 .386 0c.444.445 1.403.609 2.093.609s1.638-.164 2.094-.609ZM9.708 12c.573 0 1.04.467 1.041 1.04 0 .573-.468 1.041-1.041 1.041a1.043 1.043 0 0 1-1.041-1.041c0-.573.468-1.04 1.041-1.04Zm4.585 0c.573 0 1.04.467 1.041 1.04 0 .573-.468 1.04-1.041 1.041a1.043 1.043 0 0 1-1.041-1.041c0-.573.468-1.04 1.041-1.04Z",
        fill: "currentColor"
      })
    }),
    tumblr: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M14 22c-3 0-5.25-1.542-5.25-5.25v-5.917H6V7.625C9 6.833 10.25 4.25 10.417 2h3.125v5.083h3.625v3.75h-3.625V16c0 1.542.791 2.083 2.041 2.083h1.75V22H14Z",
        fill: "currentColor"
      })
    }),
    twitter: _v0.i(0).XNegative,
    instagram: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v14.jsx)("path", {
          d: "M12.002 3.801c2.672 0 2.989.012 4.04.059.977.043 1.504.207 1.856.344.465.18.8.398 1.148.746.352.351.567.684.747 1.148.136.352.3.883.343 1.856.047 1.055.059 1.372.059 4.04 0 2.672-.012 2.989-.059 4.04-.043.977-.207 1.504-.343 1.856-.18.465-.399.8-.747 1.148a3.076 3.076 0 0 1-1.148.747c-.352.137-.883.3-1.856.343-1.055.047-1.372.06-4.04.06-2.672 0-2.989-.013-4.04-.06-.977-.042-1.504-.206-1.856-.343-.465-.18-.8-.399-1.148-.747a3.076 3.076 0 0 1-.747-1.148c-.136-.352-.3-.883-.343-1.856-.047-1.055-.06-1.371-.06-4.04.001-2.672.013-2.989.06-4.04.043-.976.207-1.504.343-1.856.18-.464.399-.8.747-1.148a3.076 3.076 0 0 1 1.148-.746c.352-.137.883-.301 1.856-.344 1.051-.047 1.368-.059 4.04-.059Zm0-1.801c-2.715 0-3.055.012-4.122.059-1.063.046-1.793.218-2.426.465A4.882 4.882 0 0 0 3.68 3.68a4.9 4.9 0 0 0-1.156 1.77c-.247.637-.419 1.363-.465 2.426C2.012 8.946 2 9.286 2 12.002c0 2.715.012 3.055.059 4.122.046 1.063.218 1.793.465 2.426.257.66.597 1.22 1.156 1.774a4.89 4.89 0 0 0 1.77 1.152c.637.247 1.363.419 2.426.465 1.067.047 1.407.059 4.122.059s3.055-.012 4.122-.059c1.063-.046 1.793-.218 2.426-.464a4.89 4.89 0 0 0 1.77-1.153 4.888 4.888 0 0 0 1.153-1.77c.246-.637.418-1.363.465-2.426.046-1.067.058-1.407.058-4.122 0-2.716-.012-3.055-.058-4.122-.047-1.063-.22-1.793-.465-2.426a4.684 4.684 0 0 0-1.145-1.778 4.889 4.889 0 0 0-1.77-1.153c-.637-.246-1.363-.418-2.426-.464-1.07-.051-1.41-.063-4.126-.063Z"
        }), (0, _v14.jsx)("path", {
          d: "M12.002 6.864a5.139 5.139 0 0 0-5.138 5.138 5.139 5.139 0 0 0 5.138 5.138 5.14 5.14 0 0 0 5.138-5.138 5.139 5.139 0 0 0-5.138-5.138Zm0 8.47a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.667ZM18.542 6.661a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
        })]
      })
    }),
    linkedin: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M20.52 2H3.477C2.66 2 2 2.645 2 3.441v17.114C2 21.352 2.66 22 3.477 22H20.52c.816 0 1.48-.648 1.48-1.441V3.44C22 2.645 21.336 2 20.52 2ZM7.934 19.043h-2.97V9.496h2.97v9.547ZM6.449 8.195a1.72 1.72 0 1 1-.006-3.439 1.72 1.72 0 0 1 .006 3.44Zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H9.797V9.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238Z",
        fill: "currentColor"
      })
    }),
    behance: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M20.07 6.35H15v1.41h5.09l-.02-1.41ZM19 16.05a2.229 2.229 0 0 1-1.3.37 2.229 2.229 0 0 1-1.7-.54 2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2 5.081 5.081 0 0 0-.8-1.73 4.17 4.17 0 0 0-1.42-1.21 4.37 4.37 0 0 0-2-.45 4.88 4.88 0 0 0-1.9.37 4.51 4.51 0 0 0-1.47 1 4.401 4.401 0 0 0-.95 1.52 5.4 5.4 0 0 0-.33 1.91 5.52 5.52 0 0 0 .32 1.94 4.46 4.46 0 0 0 .88 1.53c.406.438.905.78 1.46 1a5.2 5.2 0 0 0 1.94.34 4.77 4.77 0 0 0 2.64-.7 4.21 4.21 0 0 0 1.63-2.35h-2.21a1.54 1.54 0 0 1-.62.76Zm-3.43-4.12a1.87 1.87 0 0 1 1-1.14 2.28 2.28 0 0 1 1-.2 1.73 1.73 0 0 1 1.36.49c.34.416.558.918.63 1.45h-4.15c.016-.203.053-.404.11-.6h.05Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1 2.72 2.72 0 0 0 .43-1.58 3.28 3.28 0 0 0-.29-1.48 2.4 2.4 0 0 0-.82-1 3.24 3.24 0 0 0-1.27-.52 7.54 7.54 0 0 0-1.64-.16H2v12.58h6.1c.557 0 1.111-.07 1.65-.21.51-.132.995-.352 1.43-.65a3.129 3.129 0 0 0 1-1.14 3.41 3.41 0 0 0 .37-1.65 3.47 3.47 0 0 0-.57-2 3 3 0 0 0-1.75-1.19h.05ZM4.77 7.86h2.59c.238 0 .475.02.71.06.216.032.423.107.61.22.18.102.326.255.42.44.116.222.171.47.16.72a1.36 1.36 0 0 1-.47 1.15 2 2 0 0 1-1.22.35h-2.8V7.86Zm4.84 7.44a1.28 1.28 0 0 1-.45.5c-.2.124-.42.212-.65.26a3.326 3.326 0 0 1-.78.08h-3v-3.45h3a2.4 2.4 0 0 1 1.45.41 1.65 1.65 0 0 1 .54 1.39 1.77 1.77 0 0 1-.11.81Z",
        fill: "currentColor"
      })
    }),
    pinterest: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M12 2C6.477 2 2 6.477 2 12c0 4.238 2.637 7.855 6.355 9.313-.085-.793-.168-2.004.036-2.868l1.171-4.968s-.3-.598-.3-1.485c0-1.39.804-2.43 1.808-2.43.852 0 1.266.641 1.266 1.41 0 .86-.547 2.141-.828 3.329-.235.996.5 1.808 1.48 1.808 1.778 0 3.145-1.875 3.145-4.578 0-2.394-1.719-4.07-4.176-4.07-2.844 0-4.516 2.133-4.516 4.34 0 .86.332 1.781.747 2.281a.299.299 0 0 1 .07.285c-.074.317-.246.996-.278 1.133-.043.184-.144.223-.335.133-1.25-.582-2.032-2.406-2.032-3.875 0-3.156 2.293-6.051 6.606-6.051 3.469 0 6.164 2.473 6.164 5.777 0 3.446-2.172 6.22-5.188 6.22-1.011 0-1.965-.528-2.293-1.15 0 0-.5 1.91-.62 2.38-.227.867-.837 1.957-1.243 2.62.938.29 1.93.446 2.961.446 5.523 0 10-4.477 10-10S17.523 2 12 2Z",
        fill: "currentColor"
      })
    }),
    vimeo: _v961.VimeoNegative,
    dribbble: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.276 25.276 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.814 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0 1 12 3.475Zm-3.633.803a53.9 53.9 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.521 8.521 0 0 1-2.19-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.66-6.084 2.68-.423 5.023.271 5.315.369a8.468 8.468 0 0 1-3.655 5.715Z",
        fill: "currentColor"
      })
    }),
    tiktok: _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M15.56 2h-3.37v13.623c0 1.623-1.296 2.957-2.91 2.957-1.613 0-2.91-1.334-2.91-2.957 0-1.594 1.268-2.898 2.824-2.956v-3.42C5.766 9.303 3 12.115 3 15.622 3 19.16 5.823 22 9.309 22s6.309-2.87 6.309-6.377V8.638a7.805 7.805 0 0 0 4.465 1.507v-3.42C17.548 6.638 15.56 4.55 15.56 2Z",
        fill: "currentColor"
      })
    }),
    link: _v725.Link
  };
  function _v963({
    type: _v0,
    ..._v1
  }) {
    let _v2 = _v962[_v0] || _v962.link;
    return (0, _v14.jsx)(_v2, {
      ..._v1
    });
  }
  let _v964 = _v33.default.div.withConfig({
    displayName: "CommonStyles__ErrorMsg",
    componentId: "sc-da7c250d-0"
  })`
  font-weight: 400;
  font-size: ${(0, _v51.rem)(12)};
  line-height: ${(0, _v51.rem)(16)};
  margin-top: ${(0, _v51.rem)(2)};
  margin-left: ${(0, _v51.rem)(7)};
  color: ${_v53.bokehTheme.colors.red["500"]};
`;
  function _v965({
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
    return (0, _v14.jsx)(_v804, {
      editable: _v0,
      onClick: _v2,
      icon: (0, _v14.jsx)(_v963, {
        type: _v1.type,
        boxSize: "xs"
      }),
      children: (0, _v14.jsx)(_v654.Box, {
        color: "text-primary",
        textDecoration: "none",
        fontSize: "body-md",
        lineHeight: (0, _v51.rem)(20),
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
  function _v966({
    link: _v0,
    loading: _v1,
    onSubmit: _v2
  }) {
    let {
        userId: _v3
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfileEditFieldClicked: _v4
      } = (0, _v30.useProfileTracking)(),
      [_v5, _v6] = (0, _v22.useState)(""),
      [_v7, _v8] = (0, _v22.useState)(!1),
      _v9 = () => {
        _v4({
          userProfilePageUserId: String(_v3),
          userProfileEditField: "add_link"
        }), _v8(!0);
      },
      _v10 = (0, _v22.useCallback)(_v0 => {
        if (_v6(""), _v0?.link === _v0) _v8(!1);else if (_v0) {
          let {
            validatedUrl: _v0,
            error: _v1
          } = (_v0 => {
            if (_v0) {
              let _v0 = _v0.trim();
              return (_v0.match(/^https?:\/\//) || (_v0 = `https://${_v0}`), _v788.REGEX_URL.test(_v0)) ? _v0.length > _v788.MAX_LINK_LENGTH ? {
                validatedUrl: _v0,
                error: _v801.default.LinkTooLong
              } : {
                validatedUrl: _v0,
                error: ""
              } : {
                validatedUrl: _v0,
                error: _v801.default.EnterValidUrl
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
    return (0, _v14.jsx)(_v654.Box, {
      _hover: {
        outline: "none"
      },
      tabIndex: 0,
      onKeyDown: _v0 => _v790(_v0, () => {
        _v7 || _v1 || _v9();
      }),
      children: _v7 ? (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v804, {
          icon: _v0 ? (0, _v14.jsx)(_v963, {
            type: _v0.type,
            boxSize: "xs"
          }) : (0, _v14.jsx)(_v725.Link, {
            boxSize: "xs"
          }),
          children: (0, _v14.jsx)(_v654.Box, {
            position: "relative",
            width: "100%",
            children: (0, _v14.jsx)(_v932, {
              onSubmit: _v10,
              value: _v0?.link || "",
              disabled: _v1,
              errorMsg: _v5,
              placeholder: _v801.default.EnterUrl,
              onChange: () => _v6("")
            })
          })
        }), !!_v5 && (0, _v14.jsx)(_v964, {
          children: _v5
        })]
      }) : _v0 ? (0, _v14.jsxs)(_v656.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v14.jsx)(_v965, {
          editMode: !0,
          link: _v0,
          onClick: () => _v1 ? void 0 : _v9()
        }), (0, _v14.jsx)(_v806, {
          onClick: () => _v1 ? void 0 : _v9()
        })]
      }) : _v1 ? null : (0, _v14.jsx)(_v805, {
        buttonText: _v801.default.AddLink,
        onClick: _v9
      })
    });
  }
  function _v967({
    links: _v0,
    children: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      _v4 = (0, _v22.useRef)(!1),
      _v5 = (0, _v22.useCallback)(() => {
        _v4.current = !0, _v3(!1);
      }, []);
    return (0, _v22.useEffect)(() => {
      _v4.current || _v3(_v0.length > _v788.MIN_NO_OF_LINKS_TO_SHOW);
    }, [_v0]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(_v2 ? _v0.slice(0, _v788.MIN_NO_OF_LINKS_TO_SHOW) : _v0).map((_v0, _v1) => _v1(_v0, _v1)), _v2 && (0, _v14.jsx)(_v654.Box, {
        fontSize: "body-md",
        cursor: "pointer",
        margin: "0.625rem",
        textDecoration: "underline",
        tabIndex: 0,
        onClick: _v5,
        onKeyDown: _v0 => _v790(_v0, _v5),
        children: _v801.default.ViewAll
      })]
    });
  }
  function _v968({
    links: _v0
  }) {
    let {
        updateLink: _v1,
        loading: _v2
      } = _v930(),
      _v3 = (0, _v22.useCallback)((_v0, _v1, _v2) => _v1(_v0, _v789(_v1), _v2), [_v1]);
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v967, {
        links: _v0,
        children: (_v0, _v1) => (0, _v14.jsx)(_v966, {
          link: _v0,
          loading: _v2,
          onSubmit: _v0 => _v3(_v1, _v0.uri, _v0)
        }, _v0.uri)
      }), (0, _v14.jsx)(_v966, {
        loading: _v2,
        onSubmit: _v0 => _v0 ? _v3(_v0.length, void 0, _v0) : Promise.resolve()
      }, "add_link")]
    });
  }
  function _v969({
    links: _v0
  }) {
    let {
        editMode: _v1,
        userId: _v2
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfilePageWebsiteLinkClicked: _v3
      } = (0, _v30.useProfileTracking)();
    return (0, _v14.jsx)(_v656.Flex, {
      direction: "column",
      display: {
        base: "none",
        md: "flex"
      },
      gap: "2px",
      children: _v1 ? (0, _v14.jsx)(_v968, {
        links: _v0
      }) : _v0?.length ? (0, _v14.jsx)(_v967, {
        links: _v0,
        children: _v0 => (0, _v14.jsx)(_v965, {
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
  var _v970 = _v0.i(0);
  function _v971({
    value: _v0
  }) {
    let {
      editMode: _v1
    } = (0, _v22.useContext)(_v784.default);
    return _v1 || _v0?.formattedAddress ? (0, _v14.jsx)(_v654.Box, {
      mt: 3,
      children: _v1 ? (0, _v14.jsx)(_v973, {
        value: _v0
      }) : (0, _v14.jsx)(_v972, {
        location: _v0,
        editMode: _v1
      })
    }) : null;
  }
  let _v972 = ({
      location: _v0,
      onClick: _v1,
      editMode: _v2
    }) => (0, _v14.jsx)(_v14.Fragment, {
      children: _v0?.formattedAddress && (0, _v14.jsx)(_v804, {
        editable: _v2,
        onClick: _v1,
        icon: (0, _v14.jsx)(_v970.CommentPin, {
          boxSize: "xs"
        }),
        children: (0, _v14.jsx)(_v654.Box, {
          as: "span",
          fontSize: (0, _v51.rem)(14),
          letterSpacing: (0, _v51.rem)(.16),
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          children: _v0.formattedAddress
        })
      })
    }),
    _v973 = ({
      value: _v0
    }) => {
      let _v1 = (0, _v22.useContext)(_v32.ViewerContext),
        {
          userId: _v2
        } = (0, _v22.useContext)(_v784.default),
        {
          trackUserProfileEditFieldClicked: _v3
        } = (0, _v30.useProfileTracking)(),
        _v4 = (0, _v22.useRef)(null),
        _v5 = (0, _v22.useRef)(null),
        [_v6, _v7] = (0, _v22.useState)(_v0),
        [_v8, _v9] = (0, _v22.useState)(!1),
        {
          loading: _v10,
          onLocationUpdate: _v11
        } = _v930(),
        _v12 = () => {
          _v3({
            userProfilePageUserId: String(_v2),
            userProfileEditField: "add_location"
          }), _v9(!0);
        },
        {
          width: _v13
        } = (0, _v60.useWindowSize)(),
        _v14 = (0, _v22.useCallback)(_v0 => {
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
        _v15 = (0, _v22.useCallback)(_v0 => {
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
      return (0, _v482.default)(_v8 && !_v10 ? _v5 : null, () => {
        _v15(_v6);
      }, null, [_v6?.formattedAddress, _v8, _v15, _v5, _v10]), (0, _v22.useEffect)(() => {
        _v4.current?.focus();
      }, [_v8]), (0, _v22.useEffect)(() => {
        _v7(_v0);
      }, [_v0]), (0, _v22.useEffect)(() => {
        _v9(!1);
      }, [_v13]), (0, _v14.jsx)(_v654.Box, {
        ref: _v5,
        tabIndex: 0,
        onKeyDown: (_v0, _v1) => {
          _v788.KeyCodes.ENTER !== _v0.keyCode || _v8 || _v10 || _v12(), _v8 && !_v10 && (_v788.KeyCodes.ESC === _v0.keyCode ? _v15(_v0) : _v788.KeyCodes.TAB === _v0.keyCode && _v15(_v6), _v1 && _v1(_v0));
        },
        pointerEvents: _v10 ? "none" : void 0,
        sx: _v10 ? {
          "& button": {
            display: "none"
          }
        } : void 0,
        children: _v8 ? (0, _v14.jsx)(_v480.default, {
          googleApiKey: _v1?.googleMapApiKey || "",
          children: (0, _v14.jsx)(_v804, {
            icon: (0, _v14.jsx)(_v970.CommentPin, {
              boxSize: "xs"
            }),
            children: (0, _v14.jsx)(_v654.Box, {
              width: "100%",
              sx: {
                "p:empty": {
                  display: "none"
                }
              },
              children: (0, _v14.jsx)(_v481.default, {
                value: _v6,
                ref: _v4,
                onChange: _v0 => {
                  _v7(_v0), _v0 && _v15(_v0);
                },
                useBokeh: !0
              })
            })
          })
        }) : _v6?.formattedAddress ? (0, _v14.jsxs)(_v656.Flex, {
          alignItems: "center",
          gap: "xs",
          children: [(0, _v14.jsx)(_v972, {
            location: _v6,
            onClick: _v12,
            editMode: !0
          }), (0, _v14.jsx)(_v806, {
            onClick: _v12
          })]
        }) : (0, _v14.jsx)(_v805, {
          buttonText: _v801.default.AddLocation,
          onClick: _v12
        })
      });
    };
  function _v974({
    showAddVideoCta: _v0,
    editMode: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3,
    updatePublicVideosCount: _v4
  }) {
    let [_v5, _v6] = (0, _v22.useState)(!1),
      {
        trackUserProfileAddVideoClicked: _v7
      } = (0, _v30.useProfileTracking)();
    _v827(_v5 ? _v0 => _v791(_v0, () => _v6(!1)) : void 0, [_v5]);
    let {
        addVideosToSection: _v8
      } = _v825("", void 0, void 0, !1),
      {
        data: _v9
      } = (0, _v22.useContext)(_v782),
      _v10 = (0, _v22.useMemo)(() => _v795(_v9), [_v9]),
      _v11 = (0, _v22.useCallback)(_v0 => {
        let _v1 = _v0.map(_v0 => _v0.uri);
        return _v8(_v10[0].uri, 0, _v1, _v4).then(() => {
          _v6(!1);
        });
      }, [_v8, _v10, _v4]);
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v842, {
        icon: (0, _v14.jsx)(_v839.VideosStack, {
          boxSize: "lg"
        }),
        header: (0, _v14.jsx)(_v24.Text, {
          as: "h1",
          variant: "heading-md",
          children: _v1 ? _v801.default.ShowcaseYourWork : _v801.default.NoVideos
        }),
        subheader: _v1 && (0, _v14.jsx)(_v24.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v801.default.AddBestPublicVideos
        }),
        cta: _v1 && _v0 && (0, _v14.jsx)(_v655.Button, {
          mt: "md",
          size: "md",
          variant: "secondary",
          leftIcon: (0, _v14.jsx)(_v824.PlusSquare, {}),
          onClick: () => {
            _v7(), _v6(!0);
          },
          children: _v801.default.AddVideos
        })
      }), (0, _v14.jsxs)(_v651.Modal, {
        isOpen: _v5,
        onClose: () => _v6(!1),
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
          width: "90vw",
          maxWidth: (0, _v51.rem)(662),
          height: "85vh",
          maxHeight: (0, _v51.rem)(752),
          padding: 0,
          overflow: "hidden",
          children: (0, _v14.jsx)(_v863, {
            shouldAutoAddVideos: _v2,
            toggleAutoAddVideos: _v3,
            onSubmit: _v11,
            onDismiss: () => _v6(!1)
          })
        })]
      })]
    });
  }
  function _v975(_v0) {
    return _v0.sizes.sort((_v0, _v1) => _v0.width > _v1.width ? 1 : _v0.width < _v1.width ? -1 : 0);
  }
  function _v976(_v0, _v1 = .5625) {
    let _v2 = _v0.pictures.sizes[0],
      _v3 = `_${_v2.width}x${_v2.height}`,
      _v4 = _v975(_v0.pictures).filter(_v0 => _v0.width > 600);
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
  let _v977 = (0, _v22.forwardRef)(({
    zoomRatio: _v0,
    image: _v1,
    imageCropCircleDiameter: _v2,
    windowWidth: _v3
  }, _v4) => {
    let _v5 = (0, _v22.useRef)(null),
      _v6 = (0, _v22.useRef)(null),
      _v7 = (0, _v22.useRef)(null),
      [_v8, _v9] = (0, _v22.useState)(!0),
      _v10 = (0, _v22.useRef)(null),
      [_v11, _v12] = (0, _v22.useState)({
        top: 0,
        left: 0
      }),
      [{
        pos: _v13
      }, _v14] = (0, _v125.useSpring)(() => ({
        from: {
          pos: [0, 0]
        }
      })),
      [_v15, _v16] = (0, _v22.useState)(!1),
      _v17 = (0, _v22.useCallback)(_v0 => {
        if (null !== _v0) {
          let {
            offsetWidth: _v0,
            offsetHeight: _v1
          } = _v0;
          _v14({
            pos: [-(_v0 * _v1.naturalWidth - _v0) / 2, -(_v0 * _v1.naturalHeight - _v1) / 2],
            immediate: !0
          }), _v12({
            left: (_v0 - _v2) / 2,
            top: (_v1 - _v2) / 2
          });
        }
      }, [_v3, _v1, _v2]);
    (0, _v22.useImperativeHandle)(_v4, () => ({
      calculateCropSize() {
        let _v0 = _v7.current,
          _v1 = _v5.current;
        if (_v0 && _v1) {
          let {
              top: _v0,
              left: _v1
            } = _v0.getBoundingClientRect(),
            {
              top: _v2,
              left: _v3
            } = _v1.getBoundingClientRect(),
            _v4 = Math.max(Math.round((_v1 - _v3) / _v0), 0),
            _v5 = Math.max(Math.round((_v0 - _v2) / _v0), 0),
            _v6 = _v2 / _v0,
            _v7 = Math.min(Math.round(_v4 + _v6), _v1.naturalWidth),
            _v8 = Math.min(Math.round(_v5 + _v6), _v1.naturalHeight);
          return {
            xMin: _v4,
            yMin: _v5,
            xMax: _v7,
            yMax: _v8
          };
        }
      }
    }));
    let _v18 = _v0 => {
        let [_v1, _v2] = _v0,
          {
            offsetWidth: _v3,
            offsetHeight: _v4
          } = _v5.current || {
            offsetWidth: 0,
            offsetHeight: 0
          },
          _v5 = _v11.left + _v2 - _v3,
          _v6 = _v11.top + _v2 - _v4;
        return _v1 > _v11.left ? _v1 = _v11.left : _v1 < _v5 && (_v1 = _v5), _v2 > _v11.top ? _v2 = _v11.top : _v2 < _v6 && (_v2 = _v6), [_v1, _v2];
      },
      _v19 = (0, _v248.useDrag)(({
        down: _v0,
        active: _v1,
        movement: _v2,
        memo: _v3 = _v13.get()
      }) => {
        let _v4 = (0, _v248.addV)(_v2, _v3);
        return _v16(_v0), _v14({
          pos: _v18(_v4),
          immediate: _v1
        }), _v3;
      });
    (0, _v22.useEffect)(() => {
      let {
          naturalWidth: _v0,
          naturalHeight: _v1
        } = _v1,
        _v2 = _v0 * _v0,
        _v3 = _v1 * _v0,
        [_v4, _v5] = _v13.get();
      if (_v2 >= _v2 && _v3 >= _v2 && _v5.current && _v6.current) {
        let _v0 = (_v5.current.width - _v2) / 2 + _v4,
          _v1 = (_v5.current.height - _v3) / 2 + _v5;
        _v5.current.height = _v6.current.height = _v3, _v5.current.width = _v6.current.width = _v2, _v8 ? _v9(!1) : _v14({
          pos: _v18([_v0, _v1]),
          immediate: !0
        });
      }
    }, [_v0, _v3]);
    let _v20 = (_v0, _v1 = {
      top: 0,
      left: 0
    }) => {
      let _v2 = _v124.animated.div;
      return (0, _v14.jsx)(_v2, {
        ..._v19(),
        ref: _v10,
        style: {
          cursor: _v15 ? "grabbing" : "grab",
          transform: _v13.to((_v0, _v1) => `translate3d(${_v0 - _v1.left}px, ${_v1 - _v1.top}px, 0px)`)
        },
        children: (0, _v14.jsx)("img", {
          src: _v1.src,
          ref: _v0,
          alt: _v1.name,
          draggable: !1,
          onDragStart: _v0 => {
            _v0.preventDefault();
          }
        })
      });
    };
    return (0, _v14.jsxs)(_v654.Box, {
      ref: _v17,
      bg: "blackAlpha.700",
      overflow: "hidden",
      position: "relative",
      h: {
        base: (0, _v658.rem)(255),
        md: (0, _v658.rem)(284)
      },
      children: [(0, _v14.jsx)(_v654.Box, {
        ref: _v7,
        position: "absolute",
        h: (0, _v658.rem)(_v2),
        w: (0, _v658.rem)(_v2),
        borderRadius: "50%",
        overflow: "hidden",
        style: {
          transform: `translate3d(${_v11.left}px, ${_v11.top}px, 0px)`
        },
        children: _v20(_v6, _v11)
      }), (0, _v14.jsx)(_v654.Box, {
        opacity: .5,
        position: "relative",
        userSelect: "none",
        children: _v20(_v5)
      })]
    });
  });
  var _v978 = _v0.i(0),
    _v979 = _v0.i(0),
    _v980 = _v0.i(0);
  let _v981 = {
    as: "button",
    type: "button",
    bg: "transparent",
    border: "none",
    p: 0,
    lineHeight: 0,
    cursor: "pointer",
    _hover: {
      bg: "transparent"
    },
    _active: {
      bg: "transparent"
    },
    _focus: {
      boxShadow: "none"
    }
  };
  function _v982({
    value: _v0,
    onChange: _v1
  }) {
    let _v2 = _v0 => _v1(Math.max(0, Math.min(100, _v0 + _v0)));
    return (0, _v14.jsxs)(_v656.Flex, {
      align: "center",
      gap: 3,
      px: 6,
      py: 4,
      children: [(0, _v14.jsx)(_v654.Box, {
        ..._v981,
        "aria-label": "Zoom out",
        onClick: () => _v2(-1),
        children: (0, _v14.jsx)(_v980.Minus, {
          boxSize: (0, _v658.rem)(20)
        })
      }), (0, _v14.jsxs)(_v978.Slider, {
        "aria-label": "zoom",
        value: _v0,
        min: 0,
        max: 100,
        step: 1,
        size: "md",
        onChange: _v1,
        flex: "1",
        children: [(0, _v14.jsx)(_v979.SliderTrack, {
          children: (0, _v14.jsx)(_v979.SliderFilledTrack, {})
        }), (0, _v14.jsx)(_v979.SliderThumb, {})]
      }), (0, _v14.jsx)(_v654.Box, {
        ..._v981,
        "aria-label": "Zoom in",
        onClick: () => _v2(1),
        children: (0, _v14.jsx)(_v417.Plus, {
          boxSize: (0, _v658.rem)(20)
        })
      })]
    });
  }
  let _v983 = (_v0, _v1) => _v1 ? 100 * _v0 / Math.min(_v1.naturalHeight, _v1.naturalWidth) : 0,
    _v984 = (0, _v22.forwardRef)(({
      onDismiss: _v0,
      image: _v1,
      onSubmit: _v2
    }, _v3) => {
      let {
          width: _v4
        } = (0, _v60.useWindowSize)(),
        _v5 = (0, _v22.useMemo)(() => _v4 > 480 ? _v788.IMAGE_CROP_CIRCLE_DIAMETER : _v788.IMAGE_CROP_CIRCLE_DIAMETER_MOBILE, [_v4]),
        _v6 = (0, _v22.useRef)(_v983(_v5, _v1)),
        [_v7, _v8] = (0, _v22.useState)(50 + _v6.current),
        [_v9, _v10] = (0, _v22.useState)(!1);
      return (0, _v22.useEffect)(() => {
        _v6.current = _v983(_v5, _v1), _v8(50 + _v6.current);
      }, [_v1, _v5]), (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v831.ModalHeader, {
          pb: 5,
          children: _v801.default.CropThumbnail
        }), (0, _v14.jsx)(_v886.ModalCloseButton, {
          "aria-label": _v801.default.Dismiss,
          onClick: _v0
        }), (0, _v14.jsx)(_v829.ModalBody, {
          px: 0,
          py: 0,
          children: _v1 ? (0, _v14.jsxs)(_v654.Box, {
            opacity: _v9 ? .6 : 1,
            pointerEvents: _v9 ? "none" : "auto",
            children: [(0, _v14.jsx)(_v977, {
              ref: _v3,
              image: _v1,
              zoomRatio: _v7 / 100,
              imageCropCircleDiameter: _v5,
              windowWidth: _v4
            }), (0, _v14.jsx)(_v982, {
              value: _v7 - _v6.current,
              onChange: _v0 => _v8(_v0 + _v6.current)
            })]
          }) : (0, _v14.jsx)(_v656.Flex, {
            align: "center",
            justify: "center",
            h: {
              base: (0, _v658.rem)(366),
              md: (0, _v658.rem)(284)
            },
            children: (0, _v14.jsx)(_v34.Spinner, {
              size: "md"
            })
          })
        }), (0, _v14.jsx)(_v830.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v14.jsxs)(_v828.HStack, {
            spacing: "sm",
            children: [(0, _v14.jsx)(_v655.Button, {
              variant: "secondary",
              onClick: _v0,
              children: _v801.default.Cancel
            }), (0, _v14.jsx)(_v655.Button, {
              variant: "primary",
              onClick: () => {
                _v10(!0), _v2();
              },
              isLoading: _v9,
              isDisabled: !_v1 || _v9,
              children: _v801.default.Done
            })]
          })
        })]
      });
    }),
    _v985 = {
      0: "pixelXDimension",
      0: "pixelYDimension"
    },
    _v986 = {
      0: "ExifIFDPointer",
      274: "orientation"
    };
  function _v987(_v0, _v1, _v2, _v3, _v4) {
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
          for (_v6 = 0, _v4 = _v8 > 2 ? _v9 : _v1 + 8, _v5 = []; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint16(_v4 + 2 * _v6, !_v3);
          return _v5;
        case 4:
          if (1 === _v8) return _v0.getUint32(_v1 + 8, !_v3);
          for (_v6 = 0, _v5 = []; _v6 < _v8; _v6++) _v5[_v6] = _v0.getUint32(_v9 + 4 * _v6, !_v3);
          return _v5;
      }
    }(_v0, _v5, _v1, _v4));
    return _v9;
  }
  function _v988({
    onChange: _v0,
    children: _v1,
    className: _v2
  }) {
    let _v3 = (0, _v22.useRef)(null),
      _v4 = (0, _v22.useRef)(null),
      [_v5, _v6] = (0, _v22.useState)(!1),
      [_v7, _v8] = (0, _v22.useState)(),
      [_v9, _v10] = (0, _v22.useState)(null),
      _v11 = "/me/pictures/",
      _v12 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      [{
        post: _v13
      }, {
        data: _v14
      }] = (0, _v191.useMutation)(_v11),
      [{
        patch: _v15
      }, {
        data: _v16
      }] = (0, _v191.useMutation)(_v11 + _v9);
    return (0, _v22.useEffect)(() => {
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
            "success" === _v0.Status.toLowerCase() && _v10(_v789(_v0.Path));
          });
        }
      })(_v14?.link);
    }, [_v14]), (0, _v22.useEffect)(() => {
      _v16 && (_v0(_v16), _v8(void 0), _v6(!1), _v12());
    }, [_v16]), (0, _v22.useEffect)(() => {
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
    }, [_v9]), (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsxs)(_v654.Box, {
        cursor: "pointer",
        onClick: () => {
          _v3.current?.click();
        },
        className: _v2,
        children: [_v1, (0, _v14.jsx)("input", {
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
                          if ((_v3 = _v987(_v0, _v6, _v6 + _v7, _v986, _v2)).ExifIFDPointer) for (_v4 in _v5 = _v987(_v0, _v6, _v6 + _v3.ExifIFDPointer, _v985, _v2)) _v3[_v4] = _v5[_v4];
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
      }), _v5 && (0, _v14.jsxs)(_v651.Modal, {
        isOpen: _v5,
        onClose: () => _v6(!1),
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
          w: "90vw",
          maxW: (0, _v658.rem)(506),
          maxH: (0, _v658.rem)(516),
          children: (0, _v14.jsx)(_v984, {
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
  function _v989({
    editMode: _v0,
    picture: _v1,
    name: _v2
  }) {
    let _v3 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        userId: _v4
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfileEditFieldClicked: _v5
      } = (0, _v30.useProfileTracking)(),
      {
        updateProfilePicture: _v6
      } = _v930(),
      _v7 = (0, _v22.useMemo)(() => _v1.sizes[3].link, [_v1.sizes]),
      _v8 = (0, _v22.useMemo)(() => {
        let _v0, _v1;
        return 0 === (_v1 = (_v0 = _v975(_v1)).filter(_v0 => _v0.width > 250)).length && (_v1 = _v0.filter(_v0 => _v0.width > 100)), _v1.map((_v0, _v1) => `${_v0.link} ${_v1 + 2}x`).join(", ");
      }, [_v1]),
      _v9 = "default" === _v1.type;
    return (0, _v14.jsx)(_v654.Box, {
      position: "relative",
      mt: {
        base: `-${(0, _v51.rem)(35)}`,
        md: `-${(0, _v51.rem)(20)}`,
        lg: 0
      },
      children: (0, _v14.jsx)(_v656.Flex, {
        h: (0, _v51.rem)(128),
        w: (0, _v51.rem)(128),
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
        children: _v0 ? (0, _v14.jsxs)(_v988, {
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
          children: [(0, _v14.jsx)(_v114.Avatar, {
            alt: _v2,
            src: _v7,
            srcSet: _v8,
            size: "3xl",
            nameProps: {
              name: _v2
            }
          }), (0, _v14.jsx)(_v654.Box, {
            className: "content",
            h: "100%",
            left: 0,
            position: "absolute",
            transition: "bottom 0.2s ease",
            w: "100%",
            color: "gray.50",
            fontSize: (0, _v51.rem)(14),
            lineHeight: (0, _v51.rem)(16),
            textAlign: "center",
            bg: "blackAlpha.500",
            pt: (0, _v51.rem)(6),
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
            children: _v801.default.UploadPicture
          })]
        }) : (0, _v14.jsx)(_v114.Avatar, {
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
  let _v990 = ({
      className: _v0
    }) => (0, _v14.jsx)(_v813.Badge, {
      as: "a",
      variant: "default",
      href: "/experts",
      target: "_blank",
      className: _v0,
      onClick: _v0 => _v0.stopPropagation(),
      bg: _v53.bokehTheme.colors.gray["300"],
      color: _v53.bokehTheme.colors.gray["50"],
      textDecoration: "none",
      children: "EXPERT"
    }),
    _v991 = {
      as: "h1",
      fontSize: (0, _v51.rem)(24),
      letterSpacing: (0, _v51.rem)(-.96),
      color: "text-primary",
      display: "inline",
      mr: 2
    },
    _v992 = {
      minHeight: (0, _v51.rem)(38),
      direction: "column",
      justifyContent: "center",
      wordBreak: "break-word",
      border: `${(0, _v51.rem)(1)} solid transparent`,
      borderRadius: "md",
      px: "xs"
    };
  function _v993(_v0) {
    let {
        name: _v1,
        canEditPersonalInfo: _v2,
        isExpert: _v3
      } = _v0,
      {
        editMode: _v4
      } = (0, _v22.useContext)(_v784.default);
    return (0, _v14.jsx)(_v654.Box, {
      mt: "md",
      children: _v4 && _v2 ? (0, _v14.jsx)(_v994, {
        ..._v0
      }) : (0, _v14.jsx)(_v656.Flex, {
        ..._v992,
        children: (0, _v14.jsxs)("span", {
          children: [(0, _v14.jsx)(_v657.Header, {
            ..._v991,
            children: _v1
          }), _v3 && (0, _v14.jsx)(_v995, {})]
        })
      })
    });
  }
  function _v994({
    name: _v0,
    onNameSubmit: _v1,
    isExpert: _v2
  }) {
    let [_v3, _v4] = (0, _v22.useState)(!1),
      [_v5, _v6] = (0, _v22.useState)("");
    return (0, _v14.jsx)(_v654.Box, {
      tabIndex: 0,
      _hover: {
        outline: "none"
      },
      onKeyDown: _v0 => _v790(_v0, () => {
        _v3 || _v4(!0);
      }, !1),
      children: (0, _v14.jsx)(_v654.Box, {
        padding: {
          base: `${(0, _v51.rem)(5.5)} 0`,
          lg: 0
        },
        children: _v3 ? (0, _v14.jsxs)(_v656.Flex, {
          ..._v992,
          position: "relative",
          sx: {
            input: {
              fontSize: (0, _v51.rem)(24),
              paddingLeft: (0, _v51.rem)(10),
              paddingRight: (0, _v51.rem)(30),
              height: (0, _v51.rem)(36)
            }
          },
          children: [(0, _v14.jsx)(_v932, {
            value: _v0,
            onSubmit: _v0 => {
              _v6("");
              let _v1 = _v0.trim();
              _v1 ? _v1.length && _v1.length <= _v788.PROFILE_NAME_MAX_LENGTH ? (_v0 !== _v1 && _v1({
                name: _v1
              }), _v4(!1)) : _v1.length > _v788.PROFILE_NAME_MAX_LENGTH && _v6(_v801.default.TooLongNameError) : _v6(_v801.default.NameIsRequired);
            },
            errorMsg: _v5,
            onChange: () => _v6("")
          }), !!_v5 && (0, _v14.jsx)(_v964, {
            children: _v5
          })]
        }) : (0, _v14.jsx)(_v656.Flex, {
          ..._v992,
          onClick: () => _v4(!0),
          cursor: "text",
          transition: "all 120ms ease-in-out 0s",
          sx: _v802,
          children: (0, _v14.jsxs)("span", {
            children: [(0, _v14.jsx)(_v657.Header, {
              ..._v991,
              children: _v0
            }), _v2 && (0, _v14.jsx)(_v995, {}), (0, _v14.jsx)(_v654.Box, {
              display: "inline",
              sx: {
                div: {
                  transform: `translateY(-${(0, _v51.rem)(4)})`
                }
              },
              children: (0, _v14.jsx)(_v806, {
                inlineMargin: !0,
                onClick: () => _v4(!0)
              })
            })]
          })
        })
      })
    });
  }
  let _v995 = (0, _v33.default)(_v990).withConfig({
    displayName: "ProfileName__StyledExpertsBadge",
    componentId: "sc-ee2bb5ed-0"
  })`
  transform: translateY(-${(0, _v51.rem)(4)});
  border-radius: ${(0, _v51.rem)(2)};
  font-size: ${(0, _v51.rem)(9)};
  width: fit-content;
  display: inline-block;
  a {
    font-weight: 700;
    padding: ${(0, _v51.rem)(2)} ${(0, _v51.rem)(4)};
  }
`;
  var _v996 = _v0.i(0);
  function _v997(_v0) {
    let {
        gender: _v1,
        pronounsList: _v2
      } = _v0,
      _v3 = (0, _v22.useMemo)(() => _v2.find(_v0 => _v0.value === _v1) || _v2[0], [_v1, _v2]),
      {
        editMode: _v4
      } = (0, _v22.useContext)(_v784.default);
    return _v4 ? (0, _v14.jsx)(_v654.Box, {
      height: (0, _v51.rem)(20),
      p: 0,
      mt: "2px",
      children: (0, _v14.jsx)(_v999, {
        ..._v0
      })
    }) : _v3.hideValue ? null : (0, _v14.jsx)(_v654.Box, {
      height: (0, _v51.rem)(20),
      p: 0,
      mt: "2px",
      px: (0, _v51.rem)(7),
      children: (0, _v14.jsx)(_v24.Text, {
        as: "p",
        color: "text-primary",
        m: 0,
        variant: "body-sm",
        lineHeight: (0, _v51.rem)(20),
        children: _v3.label
      })
    });
  }
  let _v998 = {
    '[data-part="trigger"]': {
      outline: "none",
      height: (0, _v51.rem)(24),
      px: (0, _v51.rem)(7),
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
  function _v999({
    gender: _v0,
    pronounsList: _v1,
    onPronounUpdate: _v2
  }) {
    let _v3 = (0, _v22.useMemo)(() => _v1.map(_v0 => ({
      label: _v0.label,
      value: _v0.value
    })), [_v1]);
    return (0, _v14.jsx)(_v654.Box, {
      sx: _v998,
      children: (0, _v14.jsx)(_v996.Select, {
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
  var _v1000 = _v0.i(0);
  function _v1001({
    onClick: _v0,
    loading: _v1 = !1,
    translationKey: _v2
  }) {
    return (0, _v14.jsx)(_v656.Flex, {
      justifyContent: "center",
      alignItems: "center",
      pt: (0, _v51.rem)(12.5),
      children: (0, _v14.jsx)(_v655.Button, {
        rightIcon: (0, _v14.jsx)(_v314.ArrowDown, {}),
        size: "sm",
        borderRadius: "full",
        boxShadow: `0 ${(0, _v51.rem)(2)} ${(0, _v51.rem)(8)} rgba(0, 0, 0, 0.15)`,
        onClick: _v0,
        isLoading: _v1,
        isDisabled: _v1,
        children: _v2 ? _v801.default[_v2] : _v801.default.LoadMore
      })
    });
  }
  let _v1002 = _v0 => _v0.replace("?r=pad", ""),
    _v1003 = _v0 => _v0.videos?.data || [],
    _v1004 = (_v0, _v1) => _v0.clipUri.localeCompare(_v1.clipUri),
    _v1005 = (_v0, _v1) => {
      let _v2 = _v0.sectionClip?.clip?.name ?? "",
        _v3 = _v1.sectionClip?.clip?.name ?? "";
      return _v2.localeCompare(_v3, void 0, {
        sensitivity: "base"
      });
    },
    _v1006 = (_v0, _v1) => {
      let _v2 = _v0.sectionClip?.clip?.createdTime ?? "",
        _v3 = _v1.sectionClip?.clip?.createdTime ?? "";
      return _v2.localeCompare(_v3);
    },
    _v1007 = (_v0, _v1, _v2) => {
      switch (_v2) {
        case "addedDesc":
          return -_v1006(_v0, _v1) || _v1004(_v0, _v1);
        case "addedAsc":
          return _v1006(_v0, _v1) || _v1004(_v0, _v1);
        case "titleAsc":
          return _v1005(_v0, _v1) || _v1004(_v0, _v1);
        case "titleDesc":
          return -_v1005(_v0, _v1) || _v1004(_v0, _v1);
      }
    },
    _v1008 = (_v0, _v1) => {
      for (let _v0 = 1; _v0 < _v0.length; _v0++) if (_v1007(_v0[_v0 - 1], _v0[_v0], _v1) > 0) return !1;
      return !0;
    },
    _v1009 = ["addedDesc", "addedAsc", "titleAsc", "titleDesc"],
    _v1010 = (_v0, _v1) => {
      var _v2;
      if ("custom" === _v1 || 1 !== _v0.length) return _v0;
      let [_v3] = _v0,
        _v4 = (_v2 = _v3.items, "custom" === _v1 || _v2.length < 2 || _v1008(_v2, _v1) ? _v2 : [..._v2].sort((_v0, _v1) => _v1007(_v0, _v1, _v1)));
      return _v4 === _v3.items ? _v0 : [{
        ..._v3,
        items: _v4
      }];
    },
    _v1011 = {
      perPage: _v788.MAX_VIDEOS_PER_PAGE,
      revalidateAll: !1,
      revalidateOnFocus: !1
    },
    _v1012 = (_v0, _v1) => {
      let {
        top: _v2,
        height: _v3
      } = _v0.currentTarget.getBoundingClientRect();
      return _v0.clientY > _v2 + _v3 / 2 ? _v1 + 1 : _v1;
    };
  function _v1013({
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
      _v14 = (0, _v22.useMemo)(() => 0 === _v2, [_v2]),
      _v15 = (0, _v22.useMemo)(() => _v2 === _v3 - 1, [_v2, _v3]),
      _v16 = (0, _v22.useMemo)(() => _v6?.sectionUri === _v1 && _v6.itemIndex === _v2, [_v6, _v2, _v1]),
      _v17 = (0, _v22.useMemo)(() => _v13 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v2, [_v7, _v13, _v2, _v1]),
      _v18 = (0, _v22.useMemo)(() => {
        if (!_v13) return !1;
        let _v0 = _v7?.sectionUri === _v1 && _v7.itemIndex === _v3;
        return _v7?.sectionUri === _v1 && _v7.itemIndex === _v2 + 1 && !(_v0 && _v2 === _v3 - 1);
      }, [_v7, _v13, _v2, _v3, _v1]),
      _v19 = (0, _v22.useMemo)(() => _v13 && _v14 && _v7?.sectionUri === _v1 && 0 === _v7.itemIndex, [_v7, _v13, _v14, _v1]),
      _v20 = (0, _v22.useMemo)(() => _v13 && _v15 && _v7?.sectionUri === _v1 && _v7.itemIndex === _v3, [_v7, _v13, _v15, _v3, _v1]),
      _v21 = (0, _v22.useCallback)(() => _v9({
        sectionUri: _v1,
        itemIndex: _v2
      }), [_v2, _v9, _v1]),
      _v22 = (0, _v22.useCallback)(_v0 => {
        _v8?.(_v0), _v0.preventDefault(), _v6 && _v10({
          sectionUri: _v1,
          itemIndex: _v1012(_v0, _v2)
        });
      }, [_v6, _v2, _v8, _v10, _v1]),
      _v23 = (0, _v22.useCallback)(_v0 => {
        _v0.preventDefault(), _v11({
          sectionUri: _v1,
          itemIndex: _v1012(_v0, _v2)
        }), _v12(_v0);
      }, [_v2, _v11, _v12, _v1]);
    return (0, _v14.jsxs)(_v656.Flex, {
      as: "li",
      draggable: !_v5,
      alignItems: "center",
      gap: (0, _v658.rem)(14),
      padding: (0, _v658.rem)(10),
      borderTopWidth: _v19 ? (0, _v658.rem)(2) : 0,
      borderTopStyle: "solid",
      borderTopColor: _v19 ? "text-primary" : "transparent",
      borderBottomWidth: _v18 || _v20 ? (0, _v658.rem)(2) : _v4 ? (0, _v658.rem)(1) : 0,
      borderBottomStyle: "solid",
      borderBottomColor: _v18 || _v20 ? "text-primary" : "stroke",
      bg: _v17 ? "fill-component-hover" : "transparent",
      opacity: _v16 ? .45 : 1,
      cursor: "grab",
      onDragStart: _v21,
      onDragOver: _v22,
      onDrop: _v23,
      onDragEnd: _v12,
      children: [(0, _v14.jsx)(_v656.Flex, {
        as: "span",
        className: "drag-handle",
        children: (0, _v14.jsx)(_v660.DragV, {
          boxSize: (0, _v658.rem)(18),
          color: "text-primary"
        })
      }), (0, _v14.jsx)(_v654.Box, {
        w: (0, _v658.rem)(98),
        children: (0, _v14.jsx)(_v843.ContentRow.Thumbnail, {
          alt: _v0.display.videoName,
          src: _v0.display.thumbnail,
          badgeText: _v0.display.duration,
          badgeSize: "xs",
          minWidth: (0, _v658.rem)(98)
        })
      }), (0, _v14.jsxs)(_v654.Box, {
        minWidth: 0,
        children: [(0, _v14.jsx)(_v24.Text, {
          as: "div",
          variant: "body-md",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          marginBottom: (0, _v658.rem)(1),
          children: _v0.display.videoName
        }), (0, _v14.jsx)(_v24.Text, {
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
  function _v1014({
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
          _v3 = (0, _v22.useMemo)(() => {
            let _v0, _v1;
            return _v0 = _v0.items.some(_v0 => !_v0.sectionClip), _v1 = _v0.items.length < _v0.section.videos.total, _v0 || _v1;
          }, [_v0]),
          {
            data: _v4,
            isValidating: _v5,
            setSize: _v6
          } = _v825(_v2, _v0.section.videos.data, _v0.section.videos.total, _v3, _v1011),
          _v7 = (0, _v22.useRef)(!1),
          _v8 = (0, _v22.useMemo)(() => _v795(_v4), [_v4]),
          _v9 = (0, _v22.useMemo)(() => !!_v796(_v4), [_v4]),
          _v10 = (0, _v22.useCallback)(_v0 => {
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
        (0, _v22.useEffect)(() => {
          _v10(_v8);
        }, [_v10, _v8]);
        let _v11 = (0, _v22.useCallback)(() => {
          _v3 && _v9 && !_v5 && !_v7.current && _v6 && (_v7.current = !0, Promise.resolve(_v6(_v0 => (_v0 || 0) + 1)).catch(() => {}).finally(() => {
            _v7.current = !1;
          }));
        }, [_v9, _v5, _v6, _v3]);
        return (0, _v22.useEffect)(() => {
          _v3 && _v9 && _v11();
        }, [_v9, _v11, _v8.length, _v3]), {
          isFetchingVideosInSection: _v3 && (_v5 || _v9)
        };
      }({
        group: _v0,
        setSectionGroups: _v9
      }),
      _v20 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v14(_v0);
      }, [_v19, _v14]),
      _v21 = (0, _v22.useCallback)(_v0 => {
        _v0.preventDefault(), _v19 || _v15();
      }, [_v19, _v15]),
      _v22 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v12(_v0);
      }, [_v19, _v12]),
      _v23 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v13(_v0);
      }, [_v19, _v13]),
      _v24 = (0, _v22.useCallback)(_v0 => {
        _v19 || _v11(_v0);
      }, [_v19, _v11]);
    if ((0, _v22.useEffect)(() => {
      _v10(_v17.uri, _v19);
    }, [_v19, _v10, _v17.uri]), (0, _v22.useEffect)(() => () => {
      _v10(_v17.uri, !1);
    }, [_v10, _v17.uri]), !_v18.some(_v0 => !!_v0.sectionClip)) return null;
    let _v25 = _v17.title?.trim() || `${_v16} ${_v1 + 1}`;
    return (0, _v14.jsxs)(_v654.Box, {
      as: "li",
      listStyleType: "none",
      position: "relative",
      borderRadius: _v5 ? "lg" : 0,
      bg: _v5 ? "fill-surface" : "transparent",
      overflow: _v5 ? "hidden" : "visible",
      marginBottom: _v5 && _v1 < _v2 - 1 ? (0, _v658.rem)(10) : 0,
      children: [_v5 ? (0, _v14.jsx)(_v24.Text, {
        as: "p",
        variant: "body-md",
        margin: 0,
        px: "md",
        py: (0, _v658.rem)(10),
        bg: "fill-component-hover",
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: _v25
      }) : null, (0, _v14.jsx)(_v654.Box, {
        pointerEvents: _v19 ? "none" : "auto",
        children: _v18.map((_v0, _v1) => {
          if (!_v0.sectionClip) return null;
          let _v2 = _v3 + _v1 === _v4 - 1,
            _v3 = _v5 ? _v1 < _v18.length - 1 : !_v2;
          return (0, _v14.jsx)(_v1013, {
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
      }), _v19 ? (0, _v14.jsx)(_v654.Box, {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 2,
        bg: "blackAlpha.500",
        children: (0, _v14.jsx)(_v656.Flex, {
          position: "sticky",
          top: 0,
          height: `min(100%, ${(0, _v658.rem)(440)}, 55vh)`,
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v14.jsx)(_v34.Spinner, {
            size: "md"
          })
        })
      }) : null]
    });
  }
  var _v1015 = _v0.i(0),
    _v1016 = _v0.i(0),
    _v1017 = _v0.i(0),
    _v1018 = _v0.i(0),
    _v1019 = _v0.i(0),
    _v1020 = _v0.i(0);
  function _v1021({
    value: _v0,
    onChange: _v1,
    isDisabled: _v2,
    tooltipLabel: _v3
  }) {
    let _v4 = "custom" === _v0 ? _v801.default.Custom : _v860[_v0].text;
    return _v2 ? (0, _v14.jsx)(_v823.Tooltip, {
      label: _v3,
      placement: "top",
      textAlign: "center",
      shouldWrapChildren: !0,
      children: (0, _v14.jsx)(_v655.Button, {
        variant: "tertiary",
        rightIcon: (0, _v14.jsx)(_v1020.SortSmall, {}),
        isDisabled: !0,
        "aria-label": _v801.default.SortBy,
        children: _v4
      })
    }) : (0, _v14.jsxs)(_v1015.Menu, {
      isLazy: !0,
      children: [(0, _v14.jsx)(_v1016.MenuButton, {
        as: _v655.Button,
        variant: "tertiary",
        rightIcon: (0, _v14.jsx)(_v1020.SortSmall, {}),
        "aria-label": _v801.default.SortBy,
        children: _v4
      }), (0, _v14.jsx)(_v1019.MenuList, {
        minWidth: (0, _v658.rem)(200),
        children: (0, _v14.jsx)(_v1017.MenuGroup, {
          title: _v801.default.SortBy,
          as: _v24.Text,
          variant: "heading-xs",
          borderTopRadius: "menuList",
          children: Object.keys(_v860).map(_v0 => (0, _v14.jsx)(_v1018.MenuItemOption, {
            isChecked: _v0 === _v0,
            onClick: () => _v1(_v0),
            children: _v860[_v0].text
          }, _v0))
        })
      })]
    });
  }
  function _v1022({
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
      } = (0, _v513.useSWRConfig)(),
      _v8 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      {
        mutate: _v9
      } = (0, _v22.useContext)(_v782),
      _v10 = (0, _v785.default)(),
      _v11 = (0, _v785.default)(),
      {
        trackUserProfileReorderSaved: _v12,
        trackUserProfileVideoReordered: _v13
      } = (0, _v30.useProfileTracking)(),
      _v14 = (0, _v22.useMemo)(() => _v0.map(_v0 => {
        let _v1 = new Map(_v1003(_v0).map(_v0 => [_v0.clip.uri, _v0])),
          _v2 = (_v0.clipUris?.length ? _v0.clipUris : _v1003(_v0).map(_v0 => _v0.clip.uri)).map(_v0 => ({
            clipUri: _v0,
            sectionUri: _v0.uri,
            sectionClip: _v1.get(_v0)
          }));
        return {
          section: _v0,
          items: _v2
        };
      }), [_v0]),
      [_v15, _v16] = (0, _v22.useState)(_v14),
      [_v17, _v18] = (0, _v22.useState)({}),
      [_v19, _v20] = (0, _v22.useState)(!1),
      [_v21, _v22] = (0, _v22.useState)("custom"),
      _v23 = (0, _v22.useRef)(!1),
      _v24 = (0, _v22.useRef)(!1);
    (0, _v22.useEffect)(() => {
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
    let _v25 = (0, _v22.useMemo)(() => _v15.map(_v0 => ({
        ..._v0,
        items: _v0.items.map(_v0 => {
          let _v1, _v2, _v3;
          return {
            ..._v0,
            display: (_v1 = _v0.sectionClip?.clip, _v2 = _v1?.name || _v801.default.Video, _v3 = _v1?.pictures?.sizes?.length ? ((_v0, _v1 = !1) => {
              if (_v0.length <= 0) return "";
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = _v0[_v0],
                  _v1 = !_v1 || _v0.height > _v0.width;
                if (_v0.width >= 160 && _v1) return _v1002(_v0.link);
              }
              return _v1002(_v0[_v0.length - 1].link);
            })(_v1.pictures.sizes) : "", {
              videoName: _v2,
              thumbnail: _v3,
              duration: _v818(_v1?.duration || 0),
              uploadedOn: _v1?.createdTime ? `${_v801.default.Uploaded} ${_v819(_v1.createdTime, "en", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}` : _v801.default.Uploaded
            })
          };
        })
      })), [_v15]),
      _v26 = (0, _v22.useMemo)(() => {
        let _v0 = _v15.some(({
          section: _v0
        }) => !!_v0.title && _v0.title.trim().length > 0);
        return _v15.length > 1 || _v0;
      }, [_v15]),
      _v27 = (0, _v22.useMemo)(() => _v15.reduce((_v0, _v1) => _v0 + _v1.items.length, 0), [_v15]),
      _v28 = (0, _v22.useMemo)(() => _v15.length > 0 && _v15.every(_v0 => _v0.items.length > 0 && _v0.items.every(_v0 => !!_v0.sectionClip)), [_v15]),
      _v29 = !_v1 && 1 === _v15.length;
    (0, _v22.useEffect)(() => {
      if (_v24.current || !_v28 || !_v29 || "custom" !== _v21) return;
      let _v0 = (_v0 => {
        if (_v0.length < 2 || _v0.some(_v0 => !_v0.sectionClip)) return "custom";
        for (let _v0 of _v1009) if (_v1008(_v0, _v0)) return _v0;
        return "custom";
      })(_v15[0].items);
      _v24.current = !0, "custom" !== _v0 && _v22(_v0);
    }, [_v28, _v29, _v15, _v21]), (0, _v22.useEffect)(() => {
      "custom" === _v21 || !_v28 || _v29 && _v16(_v0 => _v1010(_v0, _v21));
    }, [_v28, _v29, _v15, _v21]);
    let _v30 = (0, _v22.useMemo)(() => {
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
        let _v2 = (0, _v22.useRef)(null),
          _v3 = (0, _v22.useRef)(null),
          _v4 = (0, _v22.useRef)(null),
          _v5 = (0, _v22.useRef)(0),
          [_v6, _v7] = (0, _v22.useState)(null),
          [_v8, _v9] = (0, _v22.useState)(null),
          _v10 = (0, _v22.useCallback)(_v0 => {
            (_v8?.sectionUri !== _v0.sectionUri || _v8.itemIndex !== _v0.itemIndex) && _v9(_v0);
          }, [_v8]),
          _v11 = (0, _v22.useCallback)(() => {
            null !== _v3.current && (cancelAnimationFrame(_v3.current), _v3.current = null), _v4.current = null, _v5.current = 0;
          }, []),
          _v12 = (0, _v22.useCallback)(() => {
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
          _v13 = (0, _v22.useCallback)(_v0 => {
            _v4.current = _v0.clientY, _v5.current = performance.now(), _v12();
          }, [_v12]),
          _v14 = (0, _v22.useCallback)(_v0 => {
            _v7(_v0), _v10(_v0);
          }, [_v10]),
          _v15 = (0, _v22.useCallback)(() => {
            _v7(null), _v9(null), _v11();
          }, [_v11]);
        (0, _v22.useEffect)(() => {
          !_v6 && _v8 && _v9(null);
        }, [_v6, _v8]), (0, _v22.useEffect)(() => _v11, [_v11]);
        let _v16 = (0, _v22.useCallback)(_v0 => {
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
        onUserMutate: (0, _v22.useCallback)(() => {
          _v22("custom");
        }, [])
      }),
      _v39 = (0, _v22.useCallback)((..._v0) => (_v13(), _v35(..._v0)), [_v35, _v13]),
      _v40 = (0, _v22.useCallback)(_v0 => {
        _v22(_v0), _v16(_v0 => _v1010(_v0, _v0));
      }, []),
      {
        onListScrollRequestNextSections: _v41
      } = function ({
        hasNextSections: _v0,
        loadingNextSections: _v1,
        onLoadNextSections: _v2
      }) {
        let _v3 = (0, _v22.useRef)(!1);
        (0, _v22.useEffect)(() => {
          _v1 || (_v3.current = !1);
        }, [_v1]);
        let _v4 = (0, _v22.useCallback)(() => {
          _v3.current || !_v0 || _v1 || (_v3.current = !0, _v2());
        }, [_v0, _v1, _v2]);
        return {
          onListScrollRequestNextSections: (0, _v22.useCallback)(_v0 => {
            let _v1 = _v0.currentTarget;
            _v1.scrollTop + _v1.clientHeight >= _v1.scrollHeight - 120 && _v4();
          }, [_v4])
        };
      }({
        hasNextSections: _v2,
        loadingNextSections: _v3,
        onLoadNextSections: _v4
      }),
      _v42 = (0, _v22.useCallback)(_v0 => {
        _v41(_v0);
      }, [_v41]),
      _v43 = (0, _v22.useCallback)((_v0, _v1) => {
        _v18(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []);
    (0, _v22.useEffect)(() => {
      let _v0 = new Set(_v15.map(_v0 => _v0.section.uri));
      _v18(_v0 => {
        let _v1 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v0.has(_v1) && (_v0[_v1] = _v2), _v0), {});
        return Object.keys(_v0).some(_v0 => !(_v0 in _v1)) ? _v1 : _v0;
      });
    }, [_v15]);
    let _v44 = (0, _v22.useMemo)(() => Object.values(_v17).some(Boolean), [_v17]),
      _v45 = (0, _v22.useMemo)(() => {
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
      _v46 = (0, _v22.useMemo)(() => _v44 || _v3 || _v19 || 0 === _v27, [_v44, _v3, _v19, _v27]),
      _v47 = (0, _v22.useCallback)(_v0 => _v794(_v6, _v7, _v0, {
        purge: !0
      }), [_v6, _v7]),
      _v48 = (0, _v22.useCallback)(async () => {
        if (_v46) return;
        _v12();
        let _v0 = 1 === _v15.length && !_v788.DEFAULT_PROFILE_URI_REGEX.test(_v15[0].section.uri);
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
              _v2 = _v789(_v1),
              _v3 = _v0.items.map(_v0 => _v0.clipUri);
            await _v11(`me/profile_sections/${_v2}`, void 0, _v788.HTTPMethods.PATCH, (0, _v47.decamelizeDeep)({
              clipUris: _v3
            })), _v0 = [_v1];
          } else {
            let _v0 = await _v10("me/profile_sections/videos/batch", void 0, _v788.HTTPMethods.PATCH, (0, _v47.decamelizeDeep)({
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
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v831.ModalHeader, {
        paddingBottom: "xs",
        px: (0, _v658.rem)(28),
        children: (0, _v14.jsxs)(_v656.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v14.jsx)(_v657.Header, {
            as: "h1",
            size: "md",
            children: _v801.default.ReorderContent
          }), (0, _v14.jsx)(_v1021, {
            value: _v21,
            onChange: _v40,
            isDisabled: _v1,
            tooltipLabel: _v801.default.ReorderingNotAvailableWithSections
          })]
        })
      }), (0, _v14.jsx)(_v829.ModalBody, {
        px: (0, _v658.rem)(28),
        children: (0, _v14.jsxs)(_v654.Box, {
          as: "ul",
          ref: _v33,
          margin: 0,
          padding: (0, _v658.rem)(12),
          listStyleType: "none",
          maxHeight: `min(${(0, _v658.rem)(440)}, 55vh)`,
          overflowY: "auto",
          borderRadius: "lg",
          bg: "fill-component",
          onScroll: _v42,
          children: [_v25.map((_v0, _v1) => (0, _v14.jsx)(_v1014, {
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
            untitledSectionLabel: _v801.default.UntitledSection
          }, _v0.section.uri)), _v3 ? (0, _v14.jsx)(_v656.Flex, {
            as: "li",
            alignItems: "center",
            justifyContent: "center",
            listStyleType: "none",
            paddingY: (0, _v658.rem)(12),
            children: (0, _v14.jsx)(_v34.Spinner, {
              size: "md"
            })
          }) : null]
        })
      }), (0, _v14.jsx)(_v830.ModalFooter, {
        paddingTop: 0,
        px: (0, _v658.rem)(28),
        children: (0, _v14.jsxs)(_v828.HStack, {
          spacing: "sm",
          children: [(0, _v14.jsx)(_v655.Button, {
            variant: "secondary",
            onClick: _v5,
            isDisabled: _v19,
            children: _v801.default.Cancel
          }), (0, _v14.jsx)(_v655.Button, {
            variant: "primary",
            onClick: _v48,
            isDisabled: _v46 || _v19,
            children: _v801.default.SaveNewOrder
          })]
        })
      })]
    });
  }
  function _v1023({
    sections: _v0,
    sectionsActive: _v1,
    isShowing: _v2,
    hasNextSections: _v3,
    loadingNextSections: _v4,
    onLoadNextSections: _v5,
    onDismiss: _v6
  }) {
    return _v0.length ? (0, _v14.jsxs)(_v651.Modal, {
      isOpen: _v2,
      onClose: _v6,
      size: "lg",
      autoFocus: !1,
      children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
        maxW: (0, _v658.rem)(620),
        children: (0, _v14.jsx)(_v1022, {
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
  let _v1024 = (0, _v22.forwardRef)(function ({
    onCreate: _v0,
    onCancel: _v1
  }, _v2) {
    let [_v3, _v4] = (0, _v22.useState)(""),
      [_v5, _v6] = (0, _v22.useState)(!1),
      _v7 = (0, _v22.useRef)(null),
      {
        trackUserProfileSectionNameConfirmed: _v8
      } = (0, _v30.useProfileTracking)(),
      _v9 = (0, _v22.useMemo)(() => _v3.trim(), [_v3]),
      _v10 = _v9.length > 0 && !_v5,
      _v11 = (0, _v22.useCallback)(async () => {
        !_v9 || _v5 || ((_v8({
          userProfileSectionNameNew: _v9
        }), _v6(!0), await _v0(_v9)) ? _v1() : _v6(!1));
      }, [_v5, _v1, _v0, _v8, _v9]);
    return (0, _v22.useImperativeHandle)(_v2, () => ({
      submitOrFocus: async () => {
        !_v9 || _v5 ? _v7.current?.focus() : await _v11();
      }
    }), [_v5, _v11, _v9]), (0, _v14.jsxs)(_v654.Box, {
      as: "section",
      mx: "12px",
      mt: "8px",
      mb: "8px",
      children: [(0, _v14.jsx)(_v895.FormLabel, {
        htmlFor: "profile-v2-section-creator-input",
        mb: "xs",
        children: (0, _v14.jsx)(_v24.Text, {
          size: "sm",
          color: "text-secondary",
          children: _v801.default.SectionName
        })
      }), (0, _v14.jsxs)(_v656.Flex, {
        gap: "sm",
        align: "center",
        children: [(0, _v14.jsx)(_v896.Input, {
          ref: _v7,
          id: "profile-v2-section-creator-input",
          value: _v3,
          onChange: _v0 => _v4(_v0.target.value),
          onKeyDown: _v0 => {
            "Enter" === _v0.key && _v10 ? (_v0.preventDefault(), _v11()) : "Escape" !== _v0.key || _v5 || (_v0.preventDefault(), _v1());
          },
          maxLength: _v788.SECTION_NAME_MAX_LENGTH,
          placeholder: _v801.default.EnterSectionName,
          flex: "1",
          autoFocus: !0,
          disabled: _v5
        }), (0, _v14.jsxs)(_v877.ButtonGroup, {
          spacing: "sm",
          children: [(0, _v14.jsx)(_v655.Button, {
            variant: "primary",
            size: "md",
            isDisabled: !_v10,
            isLoading: _v5,
            onClick: _v11,
            children: _v801.default.Create
          }), (0, _v14.jsx)(_v655.Button, {
            variant: "secondary",
            size: "md",
            onClick: _v1,
            isDisabled: _v5,
            children: _v801.default.Cancel
          })]
        })]
      })]
    });
  });
  function _v1025({
    sectionIndex: _v0,
    sectionUri: _v1,
    shouldAutoAddVideos: _v2,
    toggleAutoAddVideos: _v3,
    onAddVideos: _v4,
    onDropClip: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(!1),
      [_v8, _v9] = (0, _v22.useState)(!1),
      {
        data: _v10
      } = (0, _v22.useContext)(_v782),
      _v11 = (0, _v22.useMemo)(() => _v795(_v10).length > 0, [_v10]),
      {
        trackUserProfileAddVideoClicked: _v12
      } = (0, _v30.useProfileTracking)();
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v654.Box, {
        as: "section",
        mt: "12px",
        mb: "8px",
        mx: "12px",
        height: (0, _v658.rem)(201),
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
        children: (0, _v14.jsxs)(_v656.Flex, {
          direction: "column",
          align: "center",
          justify: "center",
          height: "100%",
          px: "20px",
          children: [(0, _v14.jsx)(_v24.Text, {
            color: "text-secondary",
            textAlign: "center",
            children: _v801.default.SectionIsEmpty
          }), (0, _v14.jsx)(_v24.Text, {
            color: "text-secondary",
            textAlign: "center",
            children: _v801.default.DragDropVideosHint
          }), (0, _v14.jsx)(_v655.Button, {
            variant: "secondary",
            size: "sm",
            mt: (0, _v658.rem)(20),
            leftIcon: (0, _v14.jsx)(_v824.PlusSquare, {}),
            onClick: () => {
              _v12(), _v9(!0);
            },
            isDisabled: !_v11,
            children: _v801.default.AddVideos
          })]
        })
      }), (0, _v14.jsx)(_v864, {
        isOpen: _v8,
        onClose: () => _v9(!1),
        onSubmit: _v4,
        shouldAutoAddVideos: _v2,
        toggleAutoAddVideos: _v3
      })]
    });
  }
  function _v1026({
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
    return !_v2 || _v3 || 0 !== _v4 ? null : (0, _v14.jsx)(_v1025, {
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
  var _v1027 = _v0.i(0),
    _v1028 = _v0.i(0),
    _v1029 = _v0.i(0),
    _v1030 = _v0.i(0);
  let _v1031 = {
    color: "text-primary"
  };
  function _v1032({
    label: _v0,
    icon: _v1,
    isDisabled: _v2 = !1,
    onClick: _v3
  }) {
    return (0, _v14.jsx)(_v656.Flex, {
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
  function _v1033({
    title: _v0,
    disableUpwardMovement: _v1,
    disableDownwardMovement: _v2,
    onSubmit: _v3,
    moveSection: _v4,
    removeSection: _v5
  }) {
    let [_v6, _v7] = (0, _v22.useState)(_v0),
      [_v8, _v9] = (0, _v22.useState)(!1),
      _v10 = (0, _v22.useCallback)(_v0 => {
        let _v1 = _v0.trim();
        _v1 ? _v1.length <= _v788.SECTION_NAME_MAX_LENGTH && _v0 !== _v1 && (_v9(!0), _v7(_v1), _v3(_v1).then(() => _v9(!1)).catch(() => _v9(!1))) : (_v9(!0), _v5().then(() => _v9(!1)).catch(() => _v9(!1)));
      }, [_v3, _v5, _v0]),
      _v11 = (0, _v22.useMemo)(() => _v2 || _v8, [_v2, _v8]),
      _v12 = (0, _v22.useMemo)(() => _v1 || _v8, [_v1, _v8]),
      _v13 = (0, _v22.useCallback)(() => {
        _v8 || (_v9(!0), _v826(_v788.BPEvent.CLICK_TO_REMOVE_SECTION, 1), _v5().then(() => _v9(!1)).catch(() => _v9(!1)));
      }, [_v8, _v5]),
      _v14 = (0, _v22.useCallback)((_v0, _v1) => {
        !_v0 && _v4 && (_v826(_v788.BPEvent.CLICK_TO_ORDER_SECTION, 1, {
          value: 1 === _v1 ? "down" : "up"
        }), _v4(_v1));
      }, [_v4]);
    return (0, _v22.useEffect)(() => {
      _v7(_v0);
    }, [_v0]), (0, _v14.jsxs)(_v656.Flex, {
      as: "section",
      align: "center",
      gap: "md",
      mx: "12px",
      mt: "12px",
      mb: "4px",
      h: "md",
      children: [(0, _v14.jsxs)(_v1027.Editable, {
        flex: "1",
        variant: "heading-sm",
        value: _v6,
        onChange: _v7,
        onSubmit: _v10,
        onCancel: () => _v7(_v0),
        placeholder: _v801.default.EnterSectionName,
        startWithEditView: !_v0,
        isPreviewFocusable: !_v8,
        submitOnBlur: !0,
        children: [(0, _v14.jsx)(_v1029.EditablePreview, {
          ..._v1031,
          width: "100%",
          cursor: "pointer"
        }), (0, _v14.jsx)(_v1028.EditableInput, {
          ..._v1031,
          maxLength: _v788.SECTION_NAME_MAX_LENGTH,
          h: "md",
          px: "md",
          borderRadius: "md"
        })]
      }), (0, _v14.jsxs)(_v656.Flex, {
        gap: "md",
        align: "center",
        children: [(0, _v14.jsxs)(_v656.Flex, {
          align: "center",
          children: [(0, _v14.jsx)(_v823.Tooltip, {
            label: _v801.default.MoveUp,
            isDisabled: _v12,
            shouldWrapChildren: !0,
            children: (0, _v14.jsx)(_v1032, {
              label: _v801.default.MoveUp,
              icon: (0, _v14.jsx)(_v669.ChevronUpSmall, {
                boxSize: (0, _v658.rem)(20)
              }),
              isDisabled: _v12,
              onClick: () => _v14(_v12, -1)
            })
          }), (0, _v14.jsx)(_v823.Tooltip, {
            label: _v801.default.MoveDown,
            isDisabled: _v11,
            shouldWrapChildren: !0,
            children: (0, _v14.jsx)(_v1032, {
              label: _v801.default.MoveDown,
              icon: (0, _v14.jsx)(_v638.ChevronDownSmall, {
                boxSize: (0, _v658.rem)(20)
              }),
              isDisabled: _v11,
              onClick: () => _v14(_v11, 1)
            })
          })]
        }), (0, _v14.jsx)(_v823.Tooltip, {
          label: _v801.default.Remove,
          shouldWrapChildren: !0,
          children: (0, _v14.jsx)(_v1032, {
            label: _v801.default.Remove,
            icon: (0, _v14.jsx)(_v1030.TrashBin, {
              boxSize: (0, _v658.rem)(20)
            }),
            isDisabled: _v8,
            onClick: _v13
          })
        })]
      })]
    });
  }
  function _v1034(_v0) {
    let {
      editMode: _v1
    } = (0, _v22.useContext)(_v784.default);
    return _v1 ? (0, _v14.jsx)(_v1033, {
      ..._v0
    }) : (0, _v14.jsx)(_v656.Flex, {
      as: "section",
      align: "center",
      mx: "12px",
      mb: "12px",
      pt: "12px",
      pb: "xs",
      children: (0, _v14.jsx)(_v24.Text, {
        ..._v1031,
        variant: "heading-xs",
        children: _v0.title
      })
    });
  }
  var _v1035 = _v0.i(0);
  let _v1036 = _v0 => (0, _v14.jsx)(_v707.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v14.jsx)("path", {
      d: "M21.71 2.29a.999.999 0 0 0-1.42 0l-5.79 5.8V6.5a1 1 0 1 0-2 0v4c.002.13.029.26.08.38a1 1 0 0 0 .54.54c.12.051.25.078.38.08h4a1 1 0 1 0 0-2h-1.59l5.8-5.79a.998.998 0 0 0 0-1.42ZM10.88 12.58a1.001 1.001 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l5.79-5.8v1.59a1 1 0 1 0 2 0v-4a.998.998 0 0 0-.08-.38 1 1 0 0 0-.54-.54Z",
      fill: "currentColor"
    })
  });
  var _v1037 = _v0.i(0),
    _v1038 = _v0.i(0);
  let _v1039 = (0, _v22.forwardRef)((_v0, _v1) => (0, _v14.jsx)("svg", {
    viewBox: "0 0 14 22",
    ref: _v1,
    ..._v0,
    children: (0, _v14.jsxs)("g", {
      transform: "translate(1 1)",
      fill: _v53.bokehTheme.colors.white,
      stroke: _v53.bokehTheme.colors.gray["800"],
      fillRule: "evenodd",
      strokeOpacity: "0.3",
      children: [(0, _v14.jsx)("circle", {
        cx: "10",
        cy: "2",
        r: "2.5"
      }), (0, _v14.jsx)("circle", {
        cx: "10",
        cy: "10",
        r: "2.5"
      }), (0, _v14.jsx)("circle", {
        cx: "10",
        cy: "18",
        r: "2.5"
      }), (0, _v14.jsx)("circle", {
        cx: "2",
        cy: "2",
        r: "2.5"
      }), (0, _v14.jsx)("circle", {
        cx: "2",
        cy: "18",
        r: "2.5"
      }), (0, _v14.jsx)("circle", {
        cx: "2",
        cy: "10",
        r: "2.5"
      })]
    })
  }));
  function _v1040({
    title: _v0,
    buttonText: _v1,
    loading: _v2 = !1,
    onSubmit: _v3,
    onDismiss: _v4
  }) {
    return (0, _v14.jsxs)(_v14.Fragment, {
      children: [(0, _v14.jsx)(_v886.ModalCloseButton, {}), (0, _v14.jsx)(_v831.ModalHeader, {
        children: _v0
      }), (0, _v14.jsx)(_v830.ModalFooter, {
        children: (0, _v14.jsxs)(_v828.HStack, {
          spacing: "sm",
          children: [(0, _v14.jsx)(_v655.Button, {
            variant: "secondary",
            onClick: _v4,
            children: _v801.default.Cancel
          }), (0, _v14.jsx)(_v655.Button, {
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
  let _v1041 = {
      width: 118,
      height: 159
    },
    _v1042 = {
      width: 88,
      height: 119
    };
  function _v1043({
    badgeType: _v0,
    isExpanded: _v1,
    ..._v2
  }) {
    let _v3 = (0, _v22.useMemo)(() => {
        let _v0 = null;
        return /^staffpick/.test(_v0) ? (_v0 === _v788.StaffPicks.BEST_OF_THE_MONTH ? _v0 = {
          icon: "https://f.vimeocdn.com/p/images/badges/13x.svg",
          alt: "Vimeo Staff Pick: Best of the Month Badge"
        } : _v0 === _v788.StaffPicks.PREMIERE ? _v0 = {
          icon: "https://f.vimeocdn.com/p/images/badges/15x.svg",
          alt: "Vimeo Staff Pick: Premiere Badge"
        } : _v0 === _v788.StaffPicks.BEST_OF_THE_YEAR && (_v0 = {
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
      _v4 = _v1 ? _v1041 : _v1042;
    return _v3.normal ? (0, _v14.jsx)(_v1044, {
      ..._v2,
      children: _v3.iconData ? (0, _v14.jsx)("img", {
        src: _v3.iconData.icon,
        width: _v4.width,
        height: _v4.height,
        alt: _v3.iconData.alt
      }) : (0, _v14.jsx)(_v1045, {
        $size: _v1 ? 100 : 75,
        src: "https://f.vimeocdn.com/p/images/badges/1.svg",
        alt: "Vimeo Staff Pick Badge"
      })
    }) : null;
  }
  let _v1044 = _v33.default.article.withConfig({
      displayName: "StaffpickBadge__StaffPickContainer",
      componentId: "sc-3cea7d11-0"
    })`
  position: absolute;
  transition: all 230ms ease-in-out;
  top: ${(0, _v51.rem)(-16)};
  left: ${(0, _v51.rem)(-8)};
`,
    _v1045 = _v33.default.img.withConfig({
      displayName: "StaffpickBadge__NormalStaffPickImg",
      componentId: "sc-3cea7d11-1"
    })`
  margin: ${(0, _v51.rem)(10)} ${(0, _v51.rem)(10)} 0 ${(0, _v51.rem)(10)};
  width: ${({
      $size: _v0
    }) => (0, _v51.rem)(_v0)};
  height: ${({
      $size: _v0
    }) => (0, _v51.rem)(_v0)};
`,
    _v1046 = {
      maxWidth: "none"
    };
  function _v1047({
    video: _v0,
    className: _v1,
    style: _v2,
    setExpanded: _v3,
    removeVideo: _v4,
    newlyAdded: _v5,
    loading: _v6,
    videoIndex: _v7,
    aspectRatio: _v8,
    viewType: _v9
  }) {
    let {
        settings: _v10
      } = (0, _v20.useOrionSettings)(),
      [_v11, _v12] = (0, _v22.useState)(!1),
      _v13 = "2" === _v0.columnWidth,
      [_v14, _v15] = (0, _v22.useState)(!1),
      {
        editMode: _v16,
        userId: _v17
      } = (0, _v22.useContext)(_v784.default),
      {
        trackUserProfilePageThumbnailClicked: _v18,
        trackUserProfileVideoThumbnailResized: _v19
      } = (0, _v30.useProfileTracking)(),
      _v20 = (0, _v22.useMemo)(() => _v789(_v0.clip.uri), [_v0.clip.uri]);
    _v827(_v11 ? _v0 => _v791(_v0, () => _v12(!1)) : void 0, [_v11]);
    let _v21 = (0, _v22.useMemo)(() => {
        if ("masonry" === _v9) {
          let {
            width: _v0,
            height: _v1
          } = _v0.clip;
          return _v976(_v0.clip, _v1 / _v0);
        }
        return _v976(_v0.clip);
      }, [_v0.clip, _v9]),
      _v22 = (0, _v22.useMemo)(() => _v21[0], [_v21]),
      _v23 = (0, _v22.useMemo)(() => _v21.length > 1 ? _v21.slice(1).map((_v0, _v1) => `${_v0} ${_v1 + 2}x`).join(", ") : "", [_v21]),
      _v24 = (0, _v22.useMemo)(() => _v789(_v0.clip.user.uri) === _v17, [_v17, _v0.clip.user.uri]),
      _v25 = (0, _v22.useMemo)(() => {
        let _v0 = _v0.clip.live && _v0.clip.live?.status !== _v788.LIVE_STATUS.DONE ? _v0.clip.live?.recurringEvent?.link : _v0.clip.link;
        return _v16 && _v24 && !_v920 ? `/manage/${_v20}/general` : _v0;
      }, [_v24, _v20, _v16, _v0]),
      _v26 = (0, _v22.useCallback)(() => {
        _v19({
          userProfileResizeAction: _v13 ? "shrink" : "expand"
        }), _v15(!0), _v3 && _v3(!_v13).then(() => _v15(!1)).catch(() => _v15(!1));
      }, [_v13, _v3, _v19]),
      _v27 = (0, _v22.useMemo)(() => _v0.clip.live?.status === _v788.LIVE_STATUS.STREAMING, [_v0.clip.live?.status]),
      _v28 = (0, _v22.useMemo)(() => {
        let _v0 = "live" === _v0.clip.type,
          _v1 = _v0.clip.live?.status === _v788.LIVE_STATUS.DONE,
          _v2 = _v0.clip.duration > 0;
        return _v0 && (!_v1 && !_v2 || _v27);
      }, [_v0.clip.type, _v0.clip.live, _v0.clip.duration, _v27]),
      _v29 = (0, _v22.useMemo)(() => !!_v28 && (!!_v27 || !!_v0.clip.live?.scheduledStartTime && new Date(_v0.clip.live.scheduledStartTime) < new Date()), [_v28, _v27, _v0.clip.live]),
      _v30 = (0, _v22.useMemo)(() => _v28 ? _v29 ? _v801.default.Live : _v801.default.Upcoming : _v818(_v0.clip.duration), [_v28, _v29, _v0.clip.duration]),
      _v31 = _v28 && _v29 ? "mature" : void 0,
      _v32 = !!_v10.enable_profile_hover_video_preview && !_v920 && !!_v0.clip.configUrl && !_v28;
    (0, _v22.useEffect)(() => {
      _v6 || _v12(!1);
    }, [_v6]);
    let _v33 = (0, _v22.useMemo)(() => {
      if (_v0.clip.badge?.type) return "vod" === _v0.clip.badge.type ? (0, _v14.jsx)("img", {
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
      }) : (0, _v14.jsx)(_v1043, {
        badgeType: _v0.clip.badge.type,
        isExpanded: _v13
      });
    }, [_v0.clip.badge, _v0.clip.name, _v13]);
    return (0, _v14.jsxs)(_v654.Box, {
      position: "relative",
      className: _v1,
      style: _v2,
      children: [_v5 && (0, _v14.jsx)(_v654.Box, {
        position: "absolute",
        inset: "0",
        bg: "vimeoBlue.100",
        opacity: .5,
        borderRadius: "xs",
        zIndex: 1
      }), (0, _v14.jsxs)(_v654.Box, {
        position: "relative",
        children: [(0, _v14.jsx)(_v1038.VideoCard, {
          title: _v0.clip.name,
          subtitle: _v24 ? _v819(_v0.clip.createdTime) : `${_v819(_v0.clip.createdTime)} \xb7 ${_v0.clip.user.name}`,
          titleStyles: _v1046,
          href: _v25,
          thumbnailSrc: _v22,
          thumbnailSrcSet: _v23,
          avatarSrc: "",
          showAvatar: !1,
          tagText: _v30,
          tagTextVariant: _v31,
          clipId: _v20,
          configUrl: _v0.clip.configUrl,
          quality: "540p",
          objectFit: "contain",
          aspectRatio: _v8,
          hasPlayOnHover: _v32,
          shouldUseNextLink: !1,
          pageName: "profile",
          onClick: () => {
            _v18({
              userProfilePageUserId: String(_v17),
              clipId: String(_v20),
              userProfilePageThumbnailPosition: _v7 + 1,
              userProfilePageThumbnailSection: "masonry" === _v9 ? "masonry" : "grid"
            });
          },
          hoverActions: _v16 && !_v920 ? (0, _v14.jsxs)(_v656.Flex, {
            position: "absolute",
            top: 3,
            left: 3,
            gap: "sm",
            zIndex: "docked",
            onClick: _v0 => {
              _v0.stopPropagation(), _v0.preventDefault();
            },
            children: [_v3 && !_v6 && (0, _v14.jsx)(_v1037.ContentCard.HoverAction, {
              children: (0, _v14.jsx)(_v823.Tooltip, {
                label: _v13 ? _v801.default.Shrink : _v801.default.Expand,
                isDisabled: _v0.loading || _v14,
                children: (0, _v14.jsx)(_v798.IconButton, {
                  "aria-label": _v13 ? _v801.default.Shrink : _v801.default.Expand,
                  icon: _v13 ? (0, _v14.jsx)(_v1036, {}) : (0, _v14.jsx)(_v1035.ExpandAlt, {}),
                  variant: "blur",
                  size: "sm",
                  onClick: _v26,
                  isLoading: _v0.loading || _v14,
                  isDisabled: _v0.loading || _v14
                })
              })
            }), _v4 && (0, _v14.jsx)(_v1037.ContentCard.HoverAction, {
              children: (0, _v14.jsx)(_v823.Tooltip, {
                label: _v801.default.Remove,
                children: (0, _v14.jsx)(_v798.IconButton, {
                  "aria-label": _v801.default.Remove,
                  icon: (0, _v14.jsx)(_v1030.TrashBin, {}),
                  variant: "blur",
                  size: "sm",
                  onClick: () => _v12(!0),
                  isLoading: _v6,
                  isDisabled: _v6
                })
              })
            })]
          }) : void 0,
          topLeftDecoration: _v33
        }), _v16 && !_v920 && !_v6 && (0, _v14.jsx)(_v654.Box, {
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
          children: (0, _v14.jsx)(_v1039, {
            height: 20,
            width: 12
          })
        })]
      }), _v16 && _v4 && (0, _v14.jsxs)(_v651.Modal, {
        onClose: () => _v12(!1),
        isOpen: _v11,
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v652.ModalContent, {
          width: "662px",
          maxWidth: "90vw",
          children: (0, _v14.jsx)(_v1040, {
            title: _v801.default.RemoveVideo,
            buttonText: _v801.default.Remove,
            loading: _v6,
            onSubmit: _v4,
            onDismiss: () => _v12(!1)
          })
        })]
      })]
    });
  }
  function _v1048() {
    return (0, _v14.jsx)(_v654.Box, {
      padding: "0.5rem",
      borderWidth: ".125rem",
      borderColor: "transparent",
      children: (0, _v14.jsx)(_v852.Skeleton, {
        aspectRatio: "16 / 9",
        height: "auto"
      })
    });
  }
  function _v1049({
    count: _v0,
    viewType: _v1
  }) {
    return (0, _v14.jsx)(_v654.Box, {
      as: "section",
      display: "grid",
      gridTemplateColumns: {
        base: "1fr",
        md: `repeat(${"grid" === _v1 ? 3 : 2}, 1fr)`
      },
      children: Array(_v0).fill(null).map((_v0, _v1) => (0, _v14.jsx)(_v1048, {}, _v1))
    });
  }
  function _v1050({
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
    toggleAutoAddVideos: _v11
  }) {
    let {
        editMode: _v12
      } = (0, _v22.useContext)(_v784.default),
      [_v13, _v14] = (0, _v22.useState)(null),
      [_v15, _v16] = (0, _v22.useState)(!1),
      {
        addVideosToSection: _v17,
        data: _v18,
        error: _v19,
        isValidating: _v20,
        moveSection: _v21,
        onDrop: _v22,
        removeSection: _v23,
        removeVideoFromSection: _v24,
        setSize: _v25,
        toggleVideoData: _v26,
        updateSectionTitle: _v27,
        videoLoading: _v28
      } = _v825(_v0.uri, _v0.videos.data, _v0.videos.total),
      _v29 = (0, _v22.useMemo)(() => _v18 ? _v795(_v18) : [], [_v18]),
      _v30 = (0, _v22.useMemo)(() => _v29.length > 0 && _v796(_v18), [_v18, _v29]),
      _v31 = (0, _v22.useRef)(!1);
    _v18?.[0] && (_v31.current = !0);
    let _v32 = !_v31.current,
      _v33 = (0, _v22.useMemo)(() => _v18 ? !_v18[0] && _v20 && !_v19 : !_v19, [_v18, _v19, _v20]),
      _v34 = (0, _v22.useMemo)(() => _v12 && !_v20 && !_v28, [_v12, _v20, _v28]),
      _v35 = (0, _v313.default)(_v0 => {
        (0, _v318.default)(_v7, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v6({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300),
      _v36 = (0, _v22.useCallback)(() => {
        _v16(!0), _v25(_v18 ? _v18.length + 1 : 1).catch(() => void 0);
      }, [_v25, _v18]);
    return (0, _v22.useEffect)(() => {
      _v9(_v0.uri, !!_v30);
    }, [_v30, _v0.uri, _v9]), (0, _v22.useEffect)(() => {
      _v20 || _v16(!1);
    }, [_v20]), (0, _v22.useEffect)(() => () => _v9(_v0.uri, !1), [_v0.uri, _v9]), (0, _v14.jsxs)(_v1051, {
      children: [null !== _v0.title || 0 === _v29.length ? (0, _v14.jsx)(_v1034, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v27(_v0.uri, _v0),
        moveSection: _v0 => _v21(_v1, _v0),
        removeSection: () => _v23(_v1)
      }) : null, (0, _v14.jsx)(_v1026, {
        section: _v0,
        index: _v1,
        editMode: _v12,
        loading: _v33,
        sectionClipsLength: _v29.length,
        shouldAutoAddVideos: _v10,
        toggleAutoAddVideos: _v11,
        addVideosToSection: _v17,
        onDrop: _v22,
        updatePublicVideosCount: _v8
      }), (0, _v14.jsxs)(_v1052, {
        children: [_v29.map((_v0, _v1) => {
          let _v2 = null != _v0 && "2" === _v0.columnWidth;
          return (0, _v14.jsx)(_v1053, {
            isExpanded: _v2,
            isDraggedOver: _v7?.sectionIndex === _v1 && _v7?.videoIndex === _v1,
            draggable: _v34,
            dragStarted: null != _v7,
            isBeingDragged: _v13 === _v1,
            onDragStart: _v0 => {
              _v34 && (_v14(_v1), _v4(_v0, {
                video: _v0,
                videoIndex: _v1,
                sectionIndex: _v1,
                sectionUri: _v0.uri
              }));
            },
            onDragOver: _v0 => {
              _v34 && (_v0.preventDefault(), (null != _v7 || _v13 !== _v1) && _v35(_v1));
            },
            onDrop: _v0 => {
              if (_v34) {
                _v0.preventDefault();
                let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                _v0.sectionIndex === _v1 && (_v6(null), _v5(), _v14(null)), _v22(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                });
              }
            },
            onDragEnd: _v0 => {
              _v0.preventDefault(), _v14(null), _v5(), _v12 && _v7 && _v6(null);
            },
            children: (0, _v14.jsx)(_v1047, {
              video: _v0,
              videoIndex: _v1,
              viewType: "grid",
              removeVideo: () => _v24(_v0.uri, _v0.clip.uri, _v8),
              setExpanded: _v0 => _v26(_v0, _v0 ? "2" : "1"),
              loading: _v28 || _v20
            })
          }, _v0.clip.uri);
        }), _v32 && !_v19 ? (0, _v14.jsx)(_v1049, {
          count: 6,
          viewType: "grid"
        }) : _v15 ? (0, _v14.jsx)(_v1049, {
          count: 2,
          viewType: "grid"
        }) : null, _v30 && !_v15 ? (0, _v14.jsx)(_v1001, {
          onClick: _v36
        }) : null]
      })]
    });
  }
  let _v1051 = _v33.default.section.withConfig({
      displayName: "SectionGrid__SectionWrapper",
      componentId: "sc-3b7461e1-0"
    })`
  margin-bottom: ${(0, _v51.rem)(8)};
`,
    _v1052 = _v33.default.section.withConfig({
      displayName: "SectionGrid__Grid",
      componentId: "sc-3b7461e1-1"
    })`
  width: 100%;
  position: relative;
`,
    _v1053 = _v33.default.article.withConfig({
      displayName: "SectionGrid__GridItem",
      componentId: "sc-3b7461e1-2"
    })`
  transition:
    width 0.5s ease-in,
    transform 250ms linear;
  position: relative;
  vertical-align: top;

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v33.css`
          & > * {
            opacity: 0;
          }
          border-radius: ${(0, _v51.rem)(8)};
          background-color: var(--vimeo-colors-fill-skeleton);
          [data-theme='dark'] & {
            background-color: var(--vimeo-colors-popover);
          }
        ` : _v1 ? _v33.css`
            transform: translateX(${(0, _v51.rem)(10)});
            &:before {
              content: '';
              height: 100%;
              width: ${(0, _v51.rem)(4)};
              left: -${(0, _v51.rem)(14)};
              position: absolute;
              background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v33.css`
      user-select: none;
    `}

  ${({
      isExpanded: _v0
    }) => _v0 && _v33.css`
      width: 100%;
    `}
  ${_v61.media.sm`
    display: inline-block;
    width: ${({
      isExpanded: _v0
    }) => _v0 ? "100%" : "33.333%"};
  `}
`;
  function _v1054({
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
    toggleAutoAddVideos: _v11
  }) {
    let {
        editMode: _v12
      } = (0, _v22.useContext)(_v784.default),
      [_v13, _v14] = (0, _v22.useState)(null),
      [_v15, _v16] = (0, _v22.useState)(!1),
      [_v17, _v18] = (0, _v22.useState)(!1),
      {
        addVideosToSection: _v19,
        data: _v20,
        error: _v21,
        isValidating: _v22,
        moveSection: _v23,
        onDrop: _v24,
        removeSection: _v25,
        removeVideoFromSection: _v26,
        setSize: _v27,
        toggleVideoData: _v28,
        updateSectionTitle: _v29,
        videoLoading: _v30
      } = _v825(_v0.uri, _v0.videos.data, _v0.videos.total),
      {
        width: _v31
      } = (0, _v60.useWindowSize)(),
      _v32 = (0, _v22.useRef)(null),
      [_v33, _v34] = (0, _v22.useState)(0);
    (0, _v22.useLayoutEffect)(() => {
      let _v0 = _v32.current;
      if (!_v0 || (_v34(_v0.getBoundingClientRect().width), "u" < typeof ResizeObserver)) return;
      let _v1 = new ResizeObserver(_v0 => {
        let _v1 = _v0[0]?.contentRect.width;
        "number" == typeof _v1 && _v34(_v1);
      });
      return _v1.observe(_v0), () => _v1.disconnect();
    }, []);
    let _v35 = (0, _v22.useMemo)(() => _v20 ? _v795(_v20) : [], [_v20]),
      _v36 = _v35.map(_v0 => {
        let {
          videoWidth: _v1,
          updatedHeight: _v2
        } = ((_v0, _v1, _v2) => {
          let _v3 = _v1 >= _v61.BreakPoints.sm && "2" !== _v0.columnWidth ? _v2 / 2 : _v2,
            {
              width: _v4,
              height: _v5
            } = _v0.clip;
          return {
            videoWidth: _v3,
            updatedHeight: (_v3 - 20) / _v4 * _v5
          };
        })(_v0, _v31, _v33);
        return {
          videoWidth: _v1,
          updatedHeight: _v2 += 68
        };
      }),
      {
        height: _v37,
        bounds: _v38
      } = ((_v0, _v1, _v2) => {
        let _v3 = [];
        if (_v2 >= _v61.BreakPoints.sm) {
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
      })(_v35, _v36, _v31),
      _v39 = (0, _v22.useMemo)(() => _v35.length > 0 && _v796(_v20), [_v20, _v35]),
      _v40 = (0, _v22.useMemo)(() => _v12 && !_v22 && !_v30, [_v12, _v22, _v30]),
      _v41 = (0, _v22.useMemo)(() => null === _v0.title && _v35.length > 0, [_v0.title, _v35.length]),
      _v42 = (0, _v22.useRef)(!1);
    _v20?.[0] && (_v42.current = !0);
    let _v43 = !_v42.current,
      _v44 = (0, _v22.useMemo)(() => _v20 ? !_v20[0] && _v22 && !_v21 : !_v21, [_v20, _v21, _v22]),
      _v45 = (0, _v22.useCallback)(() => {
        _v16(!0), _v27?.(_v20 ? _v20.length + 1 : 0).catch(() => void 0);
      }, [_v27, _v20]),
      _v46 = (0, _v313.default)(_v0 => {
        (0, _v318.default)(_v5, {
          sectionIndex: _v1,
          videoIndex: _v0
        }) || _v7({
          sectionIndex: _v1,
          videoIndex: _v0
        });
      }, 300);
    return (0, _v22.useEffect)(() => {
      _v9(_v0.uri, !!_v39);
    }, [_v39, _v0.uri, _v9]), (0, _v22.useEffect)(() => () => _v9(_v0.uri, !1), [_v0.uri, _v9]), (0, _v22.useEffect)(() => {
      !_v17 && _v35.length > 0 && setTimeout(() => _v18(!0), 100);
    }, [_v17, _v35]), (0, _v22.useEffect)(() => {
      _v22 || _v16(!1);
    }, [_v22]), (0, _v14.jsxs)(_v1055, {
      hasNext: !!_v39,
      children: [_v41 ? null : (0, _v14.jsx)(_v1034, {
        title: _v0.title || "",
        disableDownwardMovement: _v2 || !1,
        disableUpwardMovement: _v3 || !1,
        onSubmit: _v0 => _v29(_v0.uri, _v0),
        moveSection: _v0 => _v23(_v1, _v0),
        removeSection: () => _v25(_v1)
      }), (0, _v14.jsx)(_v1026, {
        section: _v0,
        index: _v1,
        editMode: _v12,
        loading: _v44,
        sectionClipsLength: _v35.length,
        shouldAutoAddVideos: _v10,
        toggleAutoAddVideos: _v11,
        addVideosToSection: _v19,
        onDrop: _v24,
        updatePublicVideosCount: _v8
      }), (0, _v14.jsx)(_v1056, {
        ref: _v32,
        clipsRendered: _v17,
        height: _v37,
        children: _v35.map((_v0, _v1) => {
          let _v2 = _v38[_v1],
            {
              videoWidth: _v3
            } = _v36[_v1],
            {
              width: _v4,
              height: _v5
            } = _v0.clip,
            _v6 = `${_v4} / ${_v5}`;
          return (0, _v14.jsx)(_v1057, {
            isFirst: _v2.isFirst,
            videoWidth: _v3,
            top: _v2.top,
            draggable: _v40,
            dragStarted: null != _v5,
            isDraggedOver: _v5?.sectionIndex === _v1 && _v5?.videoIndex === _v1,
            isBeingDragged: _v13 === _v1,
            clipsRendered: _v17,
            onDragStart: _v0 => {
              _v40 && (_v14(_v1), _v4(_v0, {
                video: _v0,
                videoIndex: _v1,
                sectionIndex: _v1,
                sectionUri: _v0.uri
              }));
            },
            onDragOver: _v0 => {
              _v40 && (_v0.preventDefault(), (null != _v5 || _v13 !== _v1) && _v46(_v1));
            },
            onDrop: _v0 => {
              if (_v40) {
                _v0.preventDefault();
                let _v0 = JSON.parse(_v0.dataTransfer.getData("Text"));
                _v0.sectionIndex === _v1 && (_v7(null), _v6(), _v14(null)), _v24(_v0, {
                  video: _v0,
                  videoIndex: _v1,
                  sectionIndex: _v1,
                  sectionUri: _v0.uri
                });
              }
            },
            onDragEnd: _v0 => {
              _v0.preventDefault(), _v14(null), _v6(), _v12 && _v5 && _v7(null);
            },
            children: (0, _v14.jsx)(_v1047, {
              video: _v0,
              videoIndex: _v1,
              aspectRatio: _v6,
              viewType: "masonry",
              removeVideo: () => _v26(_v0.uri, _v0.clip.uri, _v8),
              setExpanded: _v0 => _v28(_v0, _v0 ? "2" : "1"),
              className: "masonary-video-card",
              loading: _v30 || _v22
            })
          }, _v0.clip.uri);
        })
      }), _v43 && !_v21 ? (0, _v14.jsx)(_v1049, {
        count: 6
      }) : _v15 ? (0, _v14.jsx)(_v1049, {
        count: 2
      }) : null, _v39 && !_v15 ? (0, _v14.jsx)(_v1058, {
        children: (0, _v14.jsx)(_v1001, {
          onClick: _v45
        })
      }) : null]
    });
  }
  let _v1055 = _v33.default.section.withConfig({
      displayName: "SectionMasonry__MasonryGrid",
      componentId: "sc-ff0ba067-0"
    })`
  display: block;
  width: 100%;
  margin-bottom: ${(0, _v51.rem)(8)};

  ${({
      hasNext: _v0
    }) => _v0 && _v33.css`
      padding-bottom: ${(0, _v51.rem)(16)};
    `}
`,
    _v1056 = _v33.default.article.withConfig({
      displayName: "SectionMasonry__MasonryItemContainer",
      componentId: "sc-ff0ba067-1"
    })`
  position: relative;
  ${({
      height: _v0
    }) => _v33.css`
    height: ${(0, _v51.rem)(_v0)};
    max-height: ${(0, _v51.rem)(_v0)};
  `}
  ${({
      clipsRendered: _v0
    }) => _v0 && _v33.css`
      transition: all 0.5s ease-in;
    `}
`,
    _v1057 = _v33.default.section.withConfig({
      displayName: "SectionMasonry__MasonryCard",
      componentId: "sc-ff0ba067-2"
    })`
  position: absolute;
  top: ${({
      top: _v0
    }) => (0, _v51.rem)(_v0)};
  width: ${({
      videoWidth: _v0
    }) => (0, _v51.rem)(_v0)};

  ${({
      isFirst: _v0
    }) => _v0 ? _v33.css`
          left: 0;
        ` : _v33.css`
          right: 0;
        `}

  ${({
      isBeingDragged: _v0,
      isDraggedOver: _v1
    }) => _v0 ? _v33.css`
          .masonary-video-card > * {
            opacity: 0;
          }
          .masonary-video-card {
            border-radius: ${(0, _v51.rem)(8)};
            background-color: var(--vimeo-colors-fill-skeleton);
          }
          [data-theme='dark'] & .masonary-video-card {
            background-color: var(--vimeo-colors-popover);
          }
        ` : _v1 ? _v33.css`
            transform: translateX(${(0, _v51.rem)(10)});
            .masonary-video-card:before {
              content: '';
              height: 100%;
              width: ${(0, _v51.rem)(4)};
              left: -${(0, _v51.rem)(14)};
              position: absolute;
              background-color: ${(0, _v51.rgba)(_v53.bokehTheme.colors.blue["500"], .75)};
            }
          ` : null}

  ${({
      dragStarted: _v0
    }) => _v0 && _v33.css`
      user-select: none;
    `}

  ${({
      clipsRendered: _v0
    }) => _v0 && _v33.css`
      transition:
        width 0.5s ease-in,
        top 0.5s ease-in;
    `}
`,
    _v1058 = _v33.default.article.withConfig({
      displayName: "SectionMasonry__LoadMoreContainer",
      componentId: "sc-ff0ba067-3"
    })`
  margin-top: -${(0, _v51.rem)(16)};
`,
    _v1059 = _v0 => (0, _v14.jsx)(_v707.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v14.jsx)("path", {
        d: "M10 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H5v-6h4v6ZM20 3h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 8h-4V5h4v6Zm1 4h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm-1 4h-4v-2h4v2ZM10 3H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9 7H5V5h4v2Z",
        fill: "currentColor"
      })
    });
  function _v1060({
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
      } = (0, _v20.useOrionSettings)(),
      _v8 = !!_v7.show_profile_reorder_modal,
      _v9 = !!_v5 || !_v2,
      [_v10, _v11] = (0, _v22.useState)(!1),
      [_v12, _v13] = (0, _v22.useState)(!1),
      {
        trackUserProfileLayoutChanged: _v14,
        trackUserProfileReorderContentClicked: _v15,
        trackUserProfilePreviewClicked: _v16
      } = (0, _v30.useProfileTracking)(),
      _v17 = _v0 === _v788.ViewType.MASONRY ? {
        content: _v801.default.Grid,
        switchTo: _v788.ViewType.GRID,
        icon: (0, _v14.jsx)(_v706.GridView, {
          boxSize: 24
        })
      } : {
        content: _v801.default.Masonry,
        switchTo: _v788.ViewType.MASONRY,
        icon: (0, _v14.jsx)(_v1059, {
          boxSize: 24
        })
      };
    return (0, _v22.useEffect)(() => {
      let _v0 = (0, _v313.default)(() => {
        let _v0,
          _v1 = (_v0 = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop, document.body.scrollHeight <= _v0 + (window ? window.innerHeight : 0) + _v3);
        _v10 !== _v1 && _v11(_v1);
      }, 50);
      return document.addEventListener("scroll", _v0), () => {
        document.removeEventListener("scroll", _v0);
      };
    }, [_v10]), (0, _v22.useEffect)(() => {
      _v13(!1);
    }, [_v0]), (0, _v14.jsxs)(_v656.Flex, {
      position: _v10 ? "absolute" : "fixed",
      bottom: (0, _v658.rem)(24),
      right: (0, _v658.rem)(24),
      zIndex: 3,
      bg: "fill-surface",
      borderRadius: _v8 ? (0, _v658.rem)(18) : "md",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
      padding: "md",
      gap: "sm",
      alignItems: "center",
      justifyContent: "center",
      h: (0, _v658.rem)(64),
      w: _v8 ? (0, _v658.rem)(168) : (0, _v658.rem)(112),
      children: [(0, _v14.jsx)(_v823.Tooltip, {
        label: _v17.content,
        placement: "top",
        isDisabled: _v4,
        children: (0, _v14.jsx)(_v798.IconButton, {
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
      }), _v8 && (0, _v14.jsx)(_v823.Tooltip, {
        label: _v801.default.Reorder,
        placement: "top",
        isDisabled: _v9,
        children: (0, _v14.jsx)(_v798.IconButton, {
          icon: (0, _v14.jsx)(_v708, {
            boxSize: 24
          }),
          "aria-label": _v801.default.Reorder,
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
      }), (0, _v14.jsx)(_v823.Tooltip, {
        label: _v801.default.Preview,
        placement: "top",
        children: (0, _v14.jsx)(_v798.IconButton, {
          as: _v704.default,
          href: `${window.location.pathname}?mode=preview`,
          target: "_blank",
          rel: "noopener noreferrer",
          icon: (0, _v14.jsx)(_v705.Eye, {
            boxSize: 24
          }),
          "aria-label": _v801.default.Preview,
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
  function _v1061({
    viewType: _v0,
    toggleViewType: _v1,
    footerHeight: _v2,
    updatePublicVideosCount: _v3,
    publicVideosCount: _v4,
    shouldAutoAddVideos: _v5,
    toggleAutoAddVideos: _v6
  }) {
    let {
        editMode: _v7
      } = (0, _v22.useContext)(_v784.default),
      {
        data: _v8,
        setSize: _v9,
        error: _v10,
        isValidating: _v11
      } = (0, _v22.useContext)(_v782),
      {
        isCreating: _v12,
        stop: _v13,
        registerCreator: _v14
      } = _v928(),
      {
        createSection: _v15
      } = _v825("", void 0, void 0, !1),
      _v16 = (0, _v22.useRef)(null),
      _v17 = (0, _v22.useRef)(null),
      _v18 = (0, _v22.useRef)(null),
      _v19 = (0, _v22.useRef)(!1),
      _v20 = (0, _v22.useRef)(!1),
      [_v21, _v22] = (0, _v22.useState)(null),
      [_v23, _v24] = (0, _v22.useState)(!1),
      [_v25, _v26] = (0, _v22.useState)(!1),
      [_v27, _v28] = (0, _v22.useState)({}),
      _v29 = (0, _v22.useMemo)(() => _v795(_v8), [_v8]),
      _v30 = (0, _v22.useMemo)(() => _v29.some(_v0 => _v0.videos.total > 0), [_v29]),
      _v31 = (0, _v22.useMemo)(() => _v29.length > 1 || 1 === _v29.length && null != _v29[0].title, [_v29]),
      _v32 = (0, _v22.useMemo)(() => _v796(_v8), [_v8]),
      _v33 = !_v8 && !_v10,
      _v34 = (0, _v22.useCallback)((_v0, _v1) => {
        null == _v18.current && (_v18.current = function (_v0, _v1 = "div") {
          let _v2 = document.getElementById(_v0);
          if (null == _v2) {
            let _v0 = document.createElement(_v1);
            return _v0.id = _v0, document.body.appendChild(_v0), document.getElementById(_v0);
          }
          return _v2;
        }((0, _v1000.v4)()));
        let _v2 = _v18.current,
          _v3 = _v0.currentTarget;
        if (_v2 && _v3) {
          let {
              height: _v0,
              width: _v1
            } = _v3.getBoundingClientRect(),
            _v2 = _v3.cloneNode(!0);
          _v2.querySelectorAll("video").forEach(_v0 => _v0.remove()), _v2.querySelectorAll("*").forEach(_v0 => {
            _v0.style.setProperty("opacity", "1", "important");
          }), _v2.style.height = (0, _v51.rem)(_v0), _v2.style.width = (0, _v51.rem)(_v1), _v2.style.margin = (0, _v51.rem)(0), _v2.appendChild(_v2), _v2.style.position = "absolute", _v2.style.top = "100%", _v2.style.left = "100%", _v2.style.height = (0, _v51.rem)(_v0), _v2.style.width = (0, _v51.rem)(_v1);
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
      _v35 = (0, _v22.useCallback)(() => {
        _v18.current && (_v18.current.innerHTML = "", _v18.current.style.height = "auto", _v18.current.style.width = "auto");
      }, []),
      _v36 = (0, _v22.useCallback)((_v0, _v1) => {
        _v28(_v0 => _v0[_v0] === _v1 ? _v0 : {
          ..._v0,
          [_v0]: _v1
        });
      }, []),
      _v37 = (_v0, _v1) => ({
        section: _v0,
        index: _v1,
        draggedOver: _v21,
        removeDragPortal: _v35,
        updatePublicVideosCount: _v3,
        setSectionHasNext: _v36,
        disableDown: _v1 >= _v29.length - 1,
        disableUp: 0 === _v1,
        onDragStart: _v34,
        setDragOver: _v0 => _v22(_v0),
        shouldAutoAddVideos: _v5,
        toggleAutoAddVideos: _v6
      }),
      _v38 = (0, _v22.useCallback)(() => {
        _v19.current = !1, _v20.current = !1, _v24(!1);
      }, []),
      _v39 = (0, _v22.useCallback)(() => {
        _v32 && !_v19.current && _v9 && (_v19.current = !0, _v20.current = !1, _v24(!0), _v9(_v0 => (_v0 || 0) + 1).catch(() => {
          _v38();
        }));
      }, [_v32, _v38, _v9]);
    (0, _v22.useEffect)(() => {
      if (_v19.current) {
        if (_v11) {
          _v20.current = !0;
          return;
        }
        _v20.current && _v38();
      }
    }, [_v11, _v38]), (0, _v22.useEffect)(() => {
      _v32 || !_v19.current || _v11 || _v38();
    }, [_v32, _v11, _v38]), (0, _v22.useEffect)(() => {
      if (_v17.current) {
        let _v0,
          {
            offsetTop: _v1
          } = _v17.current;
        (document.documentElement?.scrollTop ?? 0) > _v1 && (_v0 = {
          behavior: navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ? "auto" : "smooth",
          inline: "start",
          block: "start"
        }, _v17 && _v17 instanceof HTMLElement ? _v17.scrollIntoView(_v0) : _v17 && _v17.current && _v17.current.scrollIntoView(_v0));
      }
    }, [_v17, _v0]), (0, _v22.useEffect)(() => {
      _v28(_v0 => {
        let _v1 = new Set(_v29.map(_v0 => _v0.uri)),
          _v2 = !1,
          _v3 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v1.has(_v1) ? _v0[_v1] = _v2 : _v2 = !0, _v0), {});
        return _v2 ? _v3 : _v0;
      });
    }, [_v29]);
    let _v40 = (0, _v22.useMemo)(() => _v32 || _v23, [_v32, _v23]),
      _v41 = (0, _v22.useCallback)(async _v0 => _v15({
        title: _v0
      }), [_v15]);
    return (0, _v22.useEffect)(() => {
      if (_v12) return _v14({
        submitOrFocus: async () => {
          await _v16.current?.submitOrFocus();
        }
      }), () => _v14(null);
    }, [_v12, _v14]), _v29.length > 0 ? (0, _v14.jsxs)("section", {
      ref: _v17,
      children: [_v7 && (0, _v14.jsx)(_v1060, {
        viewType: _v0,
        toggleViewType: _v1,
        onReorderClick: () => _v26(!0),
        footerHeight: _v2,
        disableToggleView: 0 === _v4,
        disableReorder: !_v30,
        reorderActive: _v25
      }), _v25 ? (0, _v14.jsx)(_v1023, {
        sections: _v29,
        sectionsActive: _v31,
        isShowing: _v25,
        hasNextSections: !!_v32,
        loadingNextSections: _v23,
        onLoadNextSections: _v39,
        onDismiss: () => _v26(!1)
      }) : null, _v7 && _v12 ? (0, _v14.jsx)(_v1024, {
        ref: _v16,
        onCreate: _v41,
        onCancel: _v13
      }) : null, _v29.map((_v0, _v1) => _v0 === _v788.ViewType.GRID ? (0, _v14.jsx)(_v1050, {
        ..._v37(_v0, _v1)
      }, `GRID_${_v0.uri}`) : (0, _v14.jsx)(_v1054, {
        ..._v37(_v0, _v1)
      }, `MASONARY_${_v0.uri}`)), _v40 ? (0, _v14.jsx)(_v1001, {
        onClick: _v39,
        loading: _v23,
        translationKey: "LoadMoreSections"
      }) : null]
    }) : _v33 || _v11 ? (0, _v14.jsx)(_v1049, {
      count: 6,
      viewType: _v0
    }) : null;
  }
  var _v1062 = _v0.i(0),
    _v1063 = _v0.i(0),
    _v1064 = _v0.i(0),
    _v1065 = _v0.i(0),
    _v1066 = _v0.i(0),
    _v1067 = _v0.i(0);
  function _v1068({
    profileLink: _v0,
    profileName: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useState)(!1),
      {
        facebookAppId: _v4
      } = (0, _v22.useContext)(_v32.ViewerContext),
      {
        userId: _v5
      } = (0, _v22.useContext)(_v784.default),
      _v6 = (0, _v22.useContext)(_v783.NotificationDispatchContext),
      {
        trackUserProfilePageShareButtonClicked: _v7,
        trackUserProfileShareActionClicked: _v8
      } = (0, _v30.useProfileTracking)(),
      {
        onCopy: _v9
      } = (0, _v1063.useClipboard)(`${_v0}?fl=pp&fe=sh`),
      _v10 = (0, _v27.translate)({
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
            singular: "Profil von {NAME} auf {VIMEO_MENTION} anzeigen"
          },
          "fr-FR": {
            singular: "Voir le profil de {NAME} sur {VIMEO_MENTION}"
          },
          "ja-JP": {
            singular: "{NAME}さんのプロフィールを{VIMEO_MENTION}で表示"
          },
          "ko-KR": {
            singular: "{VIMEO_MENTION}에서 {NAME}의 프로필을 확인하세요"
          },
          "pt-BR": {
            singular: "Ver o perfil de {NAME} no {VIMEO_MENTION}"
          },
          "zh-CN": {
            singular: "查看 {NAME} 的 {VIMEO_MENTION} 个人资料"
          }
        }
      }),
      _v11 = _v0 => {
        _v826(_v788.BPEvent.CLICK_PROFILE_SHARE_SOCIAL_PLATFORM, 1, {
          profile_id: _v5,
          platform: _v0
        }), _v8({
          userProfilePageUserId: String(_v5),
          userProfileShareAction: _v0
        });
      },
      _v12 = [{
        icon: (0, _v14.jsx)(_v1065.Facebook, {}),
        name: "Facebook",
        href: `https://www.facebook.com/dialog/share?app_id=${_v4}&display=popup&href=${encodeURI(`${_v0}?ref=fb-share&fl=pp&fe=fb`)}`,
        onClick: () => _v11(_v788.SOCIAL_PLATFORM.FACEBOOK)
      }, {
        icon: (0, _v14.jsx)(_v1067.X, {}),
        name: "X",
        href: `https://x.com/intent/post?url=${encodeURI(`${_v0}?ref=tw-share&fl=pp&fe=tw`)}&text=${encodeURIComponent(_v10)}`,
        onClick: () => _v11(_v788.SOCIAL_PLATFORM.TWITTER)
      }, {
        icon: (0, _v14.jsx)(_v1066.Linkedin, {}),
        name: "LinkedIn",
        href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(_v0)}&title=${encodeURI(_v1)}&fl=pp&fe=li`,
        onClick: () => _v11(_v788.SOCIAL_PLATFORM.LINKEDIN)
      }];
    return (0, _v14.jsxs)(_v654.Box, {
      mt: {
        base: (0, _v51.rem)(10),
        lg: 0
      },
      children: [(0, _v14.jsx)(_v823.Tooltip, {
        label: _v801.default.Share,
        children: (0, _v14.jsx)(_v798.IconButton, {
          variant: "tertiary",
          size: "sm",
          icon: (0, _v14.jsx)(_v1064.Export, {}),
          "aria-label": _v801.default.Share,
          onClick: () => {
            _v826(_v788.BPEvent.CLICK_TO_SHARE_PROFILE, 1, {
              profile_id: _v5
            }), _v7({
              userProfilePageUserId: String(_v5)
            }), _v3(!0);
          }
        })
      }), (0, _v14.jsxs)(_v651.Modal, {
        isOpen: _v2,
        onClose: () => _v3(!1),
        size: "sm",
        children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsxs)(_v652.ModalContent, {
          children: [(0, _v14.jsx)(_v831.ModalHeader, {
            children: _v801.default.ShareProfile
          }), (0, _v14.jsx)(_v886.ModalCloseButton, {}), (0, _v14.jsxs)(_v829.ModalBody, {
            pb: "lg",
            children: [(0, _v14.jsx)(_v1062.VStack, {
              align: "stretch",
              spacing: "xs",
              mb: "lg",
              children: _v12.map(_v0 => (0, _v14.jsx)(_v655.Button, {
                variant: "tertiary",
                size: "md",
                leftIcon: _v0.icon,
                justifyContent: "flex-start",
                onClick: () => {
                  _v0.onClick(), window.open(_v0.href, _v801.default.Share, "width=500,height=500");
                },
                children: _v0.name
              }, _v0.name))
            }), (0, _v14.jsx)(_v24.Text, {
              variant: "heading-xs",
              color: "text-primary",
              mb: "xs",
              children: _v801.default.PageLink
            }), (0, _v14.jsx)(_v655.Button, {
              variant: "tertiary",
              size: "md",
              rightIcon: (0, _v14.jsx)(_v725.Link, {}),
              justifyContent: "space-between",
              width: "100%",
              onClick: () => {
                _v9(), _v11(_v788.SOCIAL_PLATFORM.CUSTOM_LINK), _v6({
                  content: _v801.default.LinkCopiedToClipboard,
                  status: "neutral"
                });
              },
              children: (0, _v14.jsx)(_v24.Text, {
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
  function _v1069({
    userName: _v0,
    pictures: _v1,
    actionButtons: _v2,
    isShowing: _v3,
    isExpert: _v4
  }) {
    return (0, _v14.jsxs)(_v656.Flex, {
      position: "fixed",
      top: (0, _v658.rem)(64),
      zIndex: 3,
      w: "100%",
      h: (0, _v658.rem)(70),
      maxW: "100%",
      bg: "fill-surface",
      boxShadow: "md",
      px: (0, _v658.rem)(10),
      py: (0, _v658.rem)(10),
      justifyContent: "space-between",
      visibility: _v3 ? "visible" : "hidden",
      opacity: +!!_v3,
      transition: "all 230ms linear",
      display: {
        base: "flex",
        lg: "none"
      },
      children: [(0, _v14.jsxs)(_v656.Flex, {
        maxW: `calc(100% - ${(0, _v658.rem)(90)})`,
        children: [(0, _v14.jsx)(_v114.Avatar, {
          alt: _v0,
          size: "auto",
          src: _v1.sizes[1].link,
          nameProps: {
            name: _v0
          },
          sx: {
            width: (0, _v658.rem)(50),
            height: (0, _v658.rem)(50)
          }
        }), (0, _v14.jsx)(_v24.Text, {
          as: "span",
          color: "text-primary",
          fontSize: (0, _v658.rem)(20),
          fontWeight: "bold",
          letterSpacing: (0, _v658.rem)(-.5),
          lineHeight: (0, _v658.rem)(32),
          m: (0, _v658.rem)(10),
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          children: _v0
        }), _v4 && (0, _v14.jsx)(_v654.Box, {
          alignSelf: "center",
          mr: (0, _v658.rem)(4),
          transform: `translateY(${(0, _v658.rem)(2)})`,
          sx: {
            a: {
              fontSize: (0, _v658.rem)(9),
              borderRadius: (0, _v658.rem)(2),
              fontWeight: 700
            }
          },
          children: (0, _v14.jsx)(_v990, {})
        })]
      }), null != _v2 ? (0, _v14.jsx)(_v656.Flex, {
        mt: (0, _v658.rem)(5),
        maxW: `calc(100% - ${(0, _v658.rem)(90)})`,
        children: _v2
      }) : null]
    });
  }
  function _v1070({
    totalVideos: _v0,
    videosListUrl: _v1
  }) {
    if (!(_v0 > 0 && _v0 < 0)) return null;
    let _v2 = (0, _v27.translate)({
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
    return _v1 ? (0, _v14.jsx)(_v655.Button, {
      as: "a",
      href: _v1,
      variant: "secondary",
      size: "sm",
      ml: "12px",
      fontFamily: "body",
      children: _v2
    }) : (0, _v14.jsx)(_v655.Button, {
      variant: "secondary",
      size: "sm",
      isDisabled: !0,
      ml: "12px",
      fontFamily: "body",
      children: _v2
    });
  }
  var _v1071 = ((_v10 = {}).TOTAL_VIDEOS = "TOTAL_VIDEOS", _v10);
  let _v1072 = {};
  function _v1073({
    children: _v0,
    total: _v1
  }) {
    let [_v2, _v3] = (0, _v22.useReducer)((_v0, _v1) => "TOTAL_VIDEOS" === _v1.type ? {
      ..._v0,
      totalVideos: _v1.payload
    } : _v0, _v1072);
    return (0, _v22.useEffect)(() => {
      _v3({
        type: _v1071.TOTAL_VIDEOS,
        payload: _v1
      });
    }, [_v3, _v1]), (0, _v14.jsx)(_v14.Fragment, {
      children: _v0({
        state: _v2,
        dispatch: _v3
      })
    });
  }
  let _v1074 = [{
      label: _v801.default.HideFromProfile,
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
    _v1075 = (0, _v22.lazy)(() => _v0.A(0)),
    _v1076 = (0, _v22.lazy)(() => _v0.A(0));
  function _v1077({
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
            videos: _v16,
            vimeoExperts: _v17
          },
          publicVideos: {
            total: _v18
          }
        },
        name: _v19,
        pictures: _v20,
        profileDiscovery: _v21,
        profilePreferences: {
          layout: _v22,
          profileType: _v23,
          shouldAutoAddVideos: _v24,
          showAddVideoTip: _v25,
          showProfileTypeTip: _v26,
          showJoinVimeoExpertsModal: _v27
        },
        totalCollectionCount: _v28,
        uri: _v29,
        verified: _v30,
        websites: _v31
      } = _v0,
      {
        onUserUpdate: _v32,
        onPreferenceUpdate: _v33,
        fetchPublicVideosCount: _v34
      } = _v930(),
      [_v35, _v36] = (0, _v22.useState)(!1);
    (0, _v22.useEffect)(() => {
      _v36(_v1 && "creative_professional" == _v23 && _v27 && _v17?.isEnrolled === !1);
    }, [_v1, _v23, _v27, _v17]), (0, _v22.useEffect)(() => {
      let _v0 = document?.referrer || "";
      _v826(_v788.BPEvent.VISIT_PROFILE_PAGE, 2, {
        referrer: _v0,
        profile_id: _v789(_v29),
        profile_plan: _v12?.type ?? "",
        can_work_remotely: !1,
        available_for_hire: !1
      });
    }, []);
    let [_v37, _v38] = (0, _v22.useState)(!1),
      [_v39, _v40] = (0, _v22.useState)(_v26),
      [_v41, _v42] = (0, _v22.useState)(!1),
      _v43 = _v789(_v29),
      _v44 = _v10 ? `${_v10.replace(/\/$/, "")}/videos` : void 0,
      _v45 = (0, _v60.useWindowSize)(),
      _v46 = (0, _v22.useMemo)(() => _v45.width >= 16 * parseFloat(_v53.bokehTheme.breakpoints.lg), [_v45.width]),
      {
        locale: _v47,
        recaptchaSiteKey: _v48,
        user: _v49,
        xsrft: _v50,
        isFromCopyrightRestrictedRegion: _v51
      } = (0, _v22.useContext)(_v32.ViewerContext),
      _v52 = (0, _v22.useRef)(null),
      _v53 = document?.referrer || "",
      _v54 = (0, _v22.useCallback)(_v0 => {
        _v38(!0), _v40(!1), _v33({
          profilePreferences: {
            showProfileTypeTip: !1
          }
        }, !1);
        let _v1 = new FormData(),
          _v2 = [(0, _v47.decamelizeDeep)({
            questionKey: "segment",
            answerKey: _v0
          })];
        _v1.append("answers", JSON.stringify(_v2)), _v1.append("token", _v50), fetch("/survey/profile_onboarding", {
          method: "POST",
          body: _v1
        });
      }, [_v33, _v50]),
      _v55 = _v1 || _v51 ? null : (0, _v14.jsx)(_v947, {
        xsrft: _v50,
        isOwner: _v43 === _v49?.id,
        profileId: _v43
      });
    (0, _v22.useEffect)(() => {
      _v40(_v26);
    }, [_v26]);
    let _v56 = _v43 === _v49?.id;
    return (0, _v14.jsx)(_v58.PlayerContextProvider, {
      type: _v59.PlayerType.BarebonePlayer,
      assetUrls: _v3,
      children: (0, _v14.jsxs)(_v946, {
        profileId: _v43,
        children: [_v56 && !_v21 && (0, _v14.jsx)(_v23.AlertRoot, {
          background: "status-info-secondary",
          borderRadius: "0",
          position: "sticky",
          top: (0, _v51.rem)(64),
          zIndex: 99,
          justifyContent: "center",
          children: (0, _v14.jsx)(_v797.AlertDescription, {
            children: (0, _v14.jsx)(_v24.Text, {
              variant: "body-sm",
              children: _v801.default.HiddenProfileNotice
            })
          })
        }), (0, _v14.jsx)(_v951, {
          isDesktopView: _v46,
          footerRef: _v52,
          referrerUrl: _v53,
          isOwner: _v56,
          hugVideoPanelHeight: !!_v18,
          stickyTopNav: _v0 => (0, _v14.jsx)(_v1069, {
            userName: _v0.name,
            pictures: _v20,
            actionButtons: _v55,
            isShowing: _v0 && !_v1,
            isExpert: _v0.isExpert
          }),
          header: _v1 ? (0, _v14.jsx)(_v922, {
            profile: _v0
          }) : !!_v5?.length && (0, _v14.jsx)(_v922, {
            profile: _v0
          }),
          infoPanel: (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsxs)(_v656.Flex, {
              justifyContent: "space-between",
              alignItems: "flex-start",
              children: [(0, _v14.jsx)(_v989, {
                editMode: _v1,
                name: _v19,
                picture: _v20
              }), (0, _v14.jsx)(_v1068, {
                profileLink: _v10,
                profileName: _v19
              })]
            }), (0, _v14.jsx)(_v993, {
              name: _v19,
              onNameSubmit: _v32,
              canEditPersonalInfo: _v4,
              isExpert: _v0.isExpert
            }), "en" === _v47 && (0, _v14.jsx)(_v997, {
              gender: _v9,
              pronounsList: _v1074,
              onPronounUpdate: _v32
            }), (0, _v14.jsxs)(_v656.Flex, {
              direction: "column",
              gap: "2px",
              children: [(0, _v14.jsx)(_v971, {
                value: _v11
              }), (0, _v14.jsx)(_v807, {
                onUpdate: _v32,
                value: _v6,
                isDesktopView: _v46
              }), (0, _v14.jsx)(_v936, {
                editMode: _v1,
                emails: _v7?.emails || []
              }), _v30 && (0, _v14.jsx)(_v969, {
                links: _v31
              }), _v46 && _v55 ? (0, _v14.jsx)(_v1078, {
                children: _v55
              }) : null]
            }), !_v46 && _v55 ? (0, _v14.jsx)(_v1078, {
              children: _v55
            }) : null]
          }),
          aboutPanel: (0, _v14.jsxs)(_v14.Fragment, {
            children: [(0, _v14.jsx)(_v876, {
              userId: _v43
            }), (0, _v14.jsx)(_v821, {
              userLink: _v10,
              totalShowcases: _v13.total,
              totalFollowers: _v14.total,
              totalFollowing: _v15.total,
              totalCollections: _v28,
              membership: _v12,
              createdTime: _v8 || "",
              userId: _v43,
              disableCollections: _v51
            })]
          }),
          videoPanel: (0, _v14.jsx)(_v1073, {
            total: _v18,
            children: ({
              state: _v0
            }) => (0, _v14.jsx)(_v654.Box, {
              bg: "fill-surface",
              borderRadius: "lg",
              py: "md",
              px: "6px",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              children: _v18 ? (0, _v14.jsxs)(_v927, {
                children: [(0, _v14.jsxs)(_v656.Flex, {
                  justify: "space-between",
                  align: "center",
                  mb: "12px",
                  children: [(0, _v14.jsx)(_v1070, {
                    totalVideos: _v0.totalVideos ?? 0,
                    videosListUrl: _v44
                  }), _v1 ? (0, _v14.jsxs)(_v656.Flex, {
                    gap: "sm",
                    align: "center",
                    children: [(0, _v14.jsx)(_v865, {
                      shouldAutoAddVideos: _v24,
                      toggleAutoAddVideos: _v0 => _v33({
                        profilePreferences: {
                          shouldAutoAddVideos: _v0
                        }
                      }),
                      showAutoAddVideosNotification: () => _v42(!0),
                      updatePublicVideosCount: _v34
                    }), (0, _v14.jsx)(_v929, {})]
                  }) : null]
                }), (0, _v14.jsx)(_v1061, {
                  viewType: _v22,
                  toggleViewType: _v0 => _v33({
                    profilePreferences: {
                      layout: _v0
                    }
                  }),
                  footerHeight: _v52.current?.offsetHeight || 0,
                  publicVideosCount: _v18,
                  updatePublicVideosCount: _v34,
                  shouldAutoAddVideos: _v24,
                  toggleAutoAddVideos: _v0 => _v33({
                    profilePreferences: {
                      shouldAutoAddVideos: _v0
                    }
                  })
                })]
              }) : (0, _v14.jsx)(_v974, {
                showAddVideoCta: 0 !== _v16.total,
                editMode: _v1,
                shouldAutoAddVideos: _v24,
                toggleAutoAddVideos: _v0 => _v33({
                  profilePreferences: {
                    shouldAutoAddVideos: _v0
                  }
                }),
                updatePublicVideosCount: _v34
              })
            })
          })
        }), _v1 && (0, _v14.jsxs)(_v22.Suspense, {
          fallback: (0, _v14.jsx)(_v14.Fragment, {}),
          children: [_v39 || _v37 ? (0, _v14.jsx)(_v1076, {
            onDismiss: () => {
              _v37 ? _v38(!1) : _v40(!1), _v33({
                profilePreferences: {
                  showProfileTypeTip: !1
                }
              }, !1);
            },
            selected: _v23,
            onProfileTypeSubmit: _v54,
            playerAssetUrls: _v3
          }) : null, !(_v39 || _v37) && _v25 && _v41 ? (0, _v14.jsx)(_v1075, {
            onClose: () => {
              _v42(!1), _v33({
                profilePreferences: {
                  showAddVideoTip: !1
                }
              }, !1);
            },
            onAutoAddVideos: _v0 => {
              _v33({
                profilePreferences: {
                  shouldAutoAddVideos: _v0,
                  showAddVideoTip: !1
                }
              }, !1);
            }
          }) : null]
        }), (0, _v14.jsxs)(_v651.Modal, {
          isOpen: _v35,
          onClose: () => {
            _v33({
              profilePreferences: {
                showJoinVimeoExpertsModal: !1
              }
            }, !1), _v36(!1);
          },
          children: [(0, _v14.jsx)(_v653.ModalOverlay, {}), (0, _v14.jsx)(_v1080, {
            children: (0, _v14.jsxs)(_v1079, {
              children: [(0, _v14.jsx)(_v52.CloseX, {
                position: "absolute",
                top: (0, _v51.rem)(18),
                right: (0, _v51.rem)(18),
                boxSize: (0, _v51.rem)(20),
                cursor: "pointer",
                color: "white",
                _hover: {
                  boxSize: (0, _v51.rem)(22),
                  top: (0, _v51.rem)(17),
                  right: (0, _v51.rem)(17)
                },
                onClick: () => {
                  _v33({
                    profilePreferences: {
                      showJoinVimeoExpertsModal: !1
                    }
                  }, !1), _v36(!1);
                }
              }), (0, _v14.jsx)(_v1084, {
                src: "https://i.vimeocdn.com/custom_asset/3286"
              }), (0, _v14.jsxs)(_v1081, {
                children: [(0, _v14.jsx)(_v1082, {
                  children: _v801.default.JoinExpertsInfoModalTitle
                }), (0, _v14.jsx)(_v1083, {
                  children: _v801.default.JoinExpertsInfoModalContent
                }), (0, _v14.jsx)(_v655.Button, {
                  as: "a",
                  href: "/experts/dashboard",
                  size: "lg",
                  children: _v801.default.JoinExperts
                })]
              })]
            })
          })]
        }), (0, _v14.jsx)("div", {
          ref: _v52,
          children: _v2
        })]
      })
    });
  }
  function _v1078({
    children: _v0
  }) {
    return (0, _v14.jsx)(_v656.Flex, {
      w: "100%",
      mt: {
        base: (0, _v51.rem)(16),
        lg: (0, _v51.rem)(10)
      },
      children: _v0
    });
  }
  let _v1079 = _v33.default.div.withConfig({
      displayName: "App__ModalStyled",
      componentId: "sc-36044454-0"
    })`
  padding: ${(0, _v51.rem)(0)};
  border-radius: ${(0, _v51.rem)(16)};
  background: linear-gradient(107.96deg, #1b4070 14.43%, #2b103c 96.02%);
  max-width: ${(0, _v51.rem)(390)};
`,
    _v1080 = (0, _v33.default)(_v652.ModalContent).withConfig({
      displayName: "App__ExpertsModalContent",
      componentId: "sc-36044454-1"
    })`
  &&& {
    padding: 0;
    overflow: hidden;
    border-radius: ${(0, _v51.rem)(16)};
    background: transparent;
    @media (min-width: ${_v61.BreakPoints.xmd}px) {
      position: fixed;
      bottom: ${(0, _v51.rem)(40)};
      right: ${(0, _v51.rem)(32)};
      margin: 0;
    }
  }
`,
    _v1081 = _v33.default.div.withConfig({
      displayName: "App__Content",
      componentId: "sc-36044454-2"
    })`
  padding: ${(0, _v51.rem)(24)};
`,
    _v1082 = _v33.default.div.withConfig({
      displayName: "App__CustomHeader",
      componentId: "sc-36044454-3"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-style: normal;
  font-weight: bold;
  font-size: ${(0, _v51.rem)(28)};
  line-height: ${(0, _v51.rem)(33)};
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(16)};
`,
    _v1083 = _v33.default.div.withConfig({
      displayName: "App__CustomParagraph",
      componentId: "sc-36044454-4"
    })`
  color: ${_v53.bokehTheme.colors.white};
  font-style: normal;
  font-weight: normal;
  font-size: ${(0, _v51.rem)(16)};
  line-height: ${(0, _v51.rem)(24)};
  text-align: center;
  margin-bottom: ${(0, _v51.rem)(40)};
`,
    _v1084 = _v33.default.img.withConfig({
      displayName: "App__CustomImage",
      componentId: "sc-36044454-5"
    })`
  border-radius: ${(0, _v51.rem)(4)};
  width: 100%;
`;
  var _v1085 = _v0.i(0);
  function _v1086({
    userId: _v0
  }) {
    let _v1 = (0, _v434.useViewer)();
    return (0, _v14.jsx)(_v656.Flex, {
      id: "profile-private-page",
      height: "70vh",
      alignItems: "center",
      textAlign: "center",
      children: (0, _v14.jsxs)(_v654.Box, {
        margin: "0 auto",
        paddingX: "200",
        children: [(0, _v14.jsx)(_v768.VimeoV, {
          width: "45px",
          height: "40px",
          mb: "lg"
        }), (0, _v14.jsx)(_v657.Header, {
          size: "xl",
          children: (0, _v27.translate)({
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
        }), _v1.user && (0, _v14.jsx)(_v656.Flex, {
          justify: "center",
          ml: "-1rem",
          mt: "lg",
          children: (0, _v14.jsx)(_v1085.default, {
            forPrivatePage: !0,
            isDesktopView: !1,
            buttonLabel: (0, _v27.translate)({
              singular: "Report this person",
              dictionary: {
                es: {
                  singular: "Denunciar a esta persona"
                },
                "de-DE": {
                  singular: "Diese Person melden"
                },
                "fr-FR": {
                  singular: "Signaler cette personne"
                },
                "ja-JP": {
                  singular: "このメンバーを通報する"
                },
                "ko-KR": {
                  singular: "사용자 신고하기"
                },
                "pt-BR": {
                  singular: "Denunciar esta pessoa"
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
  function _v1087({
    playerAssetUrls: _v0,
    userId: _v1,
    isMod: _v2
  }) {
    let _v3,
      _v4,
      _v5,
      _v6 = (0, _v22.useContext)(_v32.ViewerContext),
      {
        capabilities: _v7
      } = (0, _v25.useCapability)(["canEditPersonalInfo"]),
      _v8 = (0, _v21.useRouter)(),
      [_v9, _v10] = (0, _v22.useState)(!1),
      {
        trackUserProfilePageDisplayed: _v11
      } = (0, _v30.useProfileTracking)(),
      _v12 = _v6?.user?.id.toString() === _v1 || _v6?.user?.link.endsWith(_v1) || !1,
      _v13 = _v7?.canEditPersonalInfo ?? !1;
    (0, _v22.useEffect)(() => {
      let _v0 = location.search.includes("preview");
      _v12 && !_v0 && _v10(!0), !_v12 && _v0 && _v8.replace(location.pathname);
    }, [_v12]);
    let {
        data: _v14,
        error: _v15,
        mutate: _v16,
        isValidating: _v17
      } = (_v3 = (0, _v785.default)(), _v4 = (0, _v22.useCallback)(_v0 => _v3(_v0, {
        fields: _v786,
        fetch_user_profile: "1"
      }), [_v3]), (0, _v44.default)(`users/${_v1}`, _v4)),
      _v18 = (_v5 = (0, _v785.default)(), (0, _v46.default)(_v0 => {
        let _v1 = {
            ..._v788.SECTION_VARIABLES,
            page: _v0 + 1
          },
          _v2 = (0, _v787.buildQueryString)((0, _v47.decamelizeDeep)(_v1));
        return `users/${_v1}/profile_sections${_v2}`;
      }, _v5)),
      _v19 = !_v14 && !_v15;
    if ((0, _v29.usePicoEffect)(() => {
      if (!_v14 || !_v6) return !1;
      let _v0 = /^\d+$/.test(_v1) ? "default_url" : "custom_url";
      _v11({
        userProfilePageUserId: _v789(_v14.uri).toString(),
        referrerPage: (0, _v28.deriveReferrerPage)(),
        userProfilePageType: _v0,
        userProfilePageViewerAuthStatus: (0, _v28.deriveViewerAuthStatus)(_v6)
      });
    }, [_v14, _v1, _v6], {
      once: !0
    }), !_v6 || _v19) return (0, _v14.jsx)(_v779, {});
    if (_v15 && 404 === _v15.status) throw new _v26.ResourceNotFoundError(_v15);
    return _v15 || !_v14 ? null : (0, _v14.jsx)(_v781.Provider, {
      value: {
        data: _v14,
        error: _v15,
        mutate: _v16,
        isValidating: _v17
      },
      children: (0, _v14.jsx)(_v782.Provider, {
        value: _v18,
        children: (0, _v14.jsxs)(_v784.default.Provider, {
          value: {
            idOrUserName: _v1,
            editMode: _v9,
            userId: _v789(_v14.uri)
          },
          children: [_v2 && (0, _v14.jsx)(_v23.Alert, {
            status: "error",
            size: "md",
            borderRadius: "0",
            children: (0, _v14.jsxs)(_v24.Text, {
              variant: "body-xl",
              children: [(0, _v14.jsx)("strong", {
                children: (0, _v27.translate)({
                  singular: "This profile is private: ",
                  dictionary: {
                    es: {
                      singular: "Este perfil es privado: "
                    },
                    "de-DE": {
                      singular: "Dieses Profil ist privat: "
                    },
                    "fr-FR": {
                      singular: "Ce profil est privé : "
                    },
                    "ja-JP": {
                      singular: "このプロフィールは非公開です： "
                    },
                    "ko-KR": {
                      singular: "이 프로필은 비공개 상태입니다. "
                    },
                    "pt-BR": {
                      singular: "Este perfil é privado: "
                    },
                    "zh-CN": {
                      singular: "此个人资料是私密的： "
                    }
                  }
                })
              }), (0, _v27.translate)({
                singular: "Only staff and the profile's owner can see this page",
                dictionary: {
                  es: {
                    singular: "solo el personal y el propietario del perfil pueden ver esta página"
                  },
                  "de-DE": {
                    singular: "Nur Mitarbeitende und Profilinhaber können diese Seite sehen"
                  },
                  "fr-FR": {
                    singular: "Seul le personnel et le propriétaire du profil peuvent voir cette page."
                  },
                  "ja-JP": {
                    singular: "このページを見ることができるのは、スタッフとプロフィールの所有者だけです。"
                  },
                  "ko-KR": {
                    singular: "직원과 프로필 소유자만 이 페이지를 볼 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "somente a equipe e o proprietário do perfil podem visualizar esta página"
                  },
                  "zh-CN": {
                    singular: "仅员工和资料所有者可查看此页面"
                  }
                }
              })]
            })
          }), (0, _v14.jsx)(_v1077, {
            profile: _v14,
            editMode: _v9,
            playerAssetUrls: _v0,
            canEditPersonalInfo: _v13,
            Footer: (0, _v14.jsx)(_v31.default, {
              ..._v6
            })
          })]
        })
      })
    });
  }
  let _v1088 = ({
    playerAssetUrls: _v0,
    userId: _v1,
    isPrivate: _v2,
    isMod: _v3
  }) => {
    let _v4 = (0, _v434.useViewer)(),
      {
        settings: _v5
      } = (0, _v20.useOrionSettings)();
    return _v4 ? _v2 && !_v3 ? _v5.profile_redesign ? (0, _v14.jsx)(_v15.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v14.jsx)(_v783.default, {
        children: (0, _v14.jsx)(_v1086, {
          userId: _v1
        })
      })
    }) : (0, _v14.jsx)(_v15.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v14.jsxs)(_v39.default, {
        children: [(0, _v14.jsx)(_v770, {
          userId: _v1
        }), (0, _v14.jsx)(_v40, {})]
      })
    }) : _v5.profile_redesign ? (0, _v14.jsx)(_v15.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v14.jsx)(_v783.default, {
        children: (0, _v14.jsx)(_v1087, {
          playerAssetUrls: _v0,
          userId: _v1,
          isMod: _v3
        })
      })
    }) : (0, _v14.jsx)(_v15.SWRConfig, {
      value: {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      },
      children: (0, _v14.jsxs)(_v39.default, {
        children: [(0, _v14.jsx)(_v778, {
          playerAssetUrls: _v0,
          userId: _v1,
          isMod: _v3
        }), (0, _v14.jsx)(_v40, {})]
      })
    }) : null;
  };
  function _v1089({
    children: _v0
  }) {
    let {
        settings: _v1
      } = (0, _v20.useOrionSettings)(),
      _v2 = !!_v1.profile_redesign,
      _v3 = (0, _v14.jsxs)(_v14.Fragment, {
        children: [(0, _v14.jsx)(_v18.DefaultNavigation, {
          hasThemeSupport: _v2
        }), _v0]
      });
    return _v2 ? _v3 : (0, _v14.jsx)(_v777, {
      children: _v3
    });
  }
  _v1088.getLayout = function (_v0) {
    return (0, _v14.jsx)(_v1089, {
      children: _v0
    });
  }, (0, _v17.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = (_v1 = _v0.query.userId.match(/^user([0-9]{1,50})$/)) ? Number(_v1[1]) : null,
      _v3 = _v0.query.userId;
    if ("auth" === _v3) return {
      notFound: !0
    };
    let _v4 = null;
    try {
      _v4 = await (0, _v19.getUser)({
        where: {
          userId: _v2 ?? _v3
        },
        select: ["profileDiscovery", "isOwner", "link", "metadata.connections.viewProfile.disabled", "metadata.connections.viewProfile.modOverride"],
        baseUrl: _v0.baseUrl,
        headers: _v0.headers
      });
    } catch (_v0) {
      return {
        notFound: !0
      };
    }
    let _v5 = {
        isPrivate: !!_v4.metadata?.connections?.viewProfile?.disabled,
        isMod: !!_v4.metadata?.connections?.viewProfile?.modOverride,
        userId: _v2 ?? _v3,
        hasThemeSupport: !0,
        layoutOptions: {
          headerFixed: !0
        },
        metadata: {
          className: "ProfileMetadata",
          routeRule: "/profile/[userId]",
          args: {
            url: _v3
          }
        }
      },
      _v6 = _v4.link.split("/").pop();
    return null !== _v2 && `user${_v2}` !== _v6 ? {
      redirect: {
        destination: `/${_v6}`,
        permanent: !0
      }
    } : (_v5.isPrivate && !_v5.isMod && (_v0.res.statusCode = 410, (0, _v16.setCacheHeaders)(_v0.req, _v0.res, {
      ttl: 0
    })), {
      props: _v5
    });
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v1088], 0);
}