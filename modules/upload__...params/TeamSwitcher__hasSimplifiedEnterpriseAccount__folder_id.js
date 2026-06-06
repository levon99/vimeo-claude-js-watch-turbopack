{
  "use strict";

  var _v1,
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
  _v0.s(["TeamSwitcher", 0, ({
    selectTeam: _v0,
    selectFolder: _v1,
    selectedTeamId: _v2,
    selectedFolder: _v3,
    isLoading: _v4,
    teams: _v5,
    disabled: _v6,
    onTeamsDropdownShown: _v7
  }) => {
    let _v8 = (0, _v9.useIsBokeh)(),
      _v9 = (0, _v3.useContext)(_v19.ViewerContext),
      _v10 = _v5.find(_v0 => _v0.id === _v2),
      _v11 = (0, _v3.useRef)(null),
      _v12 = _v10 ? _v10.id : _v9?.user?.id,
      {
        capabilities: {
          hasSimplifiedEnterpriseAccount: _v13
        },
        loading: _v14
      } = (0, _v8.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      _v15 = !_v14 && !_v13,
      _v16 = _v2 !== _v11.current,
      _v17 = new URLSearchParams(window.location.search).get("folder_id"),
      {
        data: _v18,
        isValidating: _v19
      } = (0, _v12.useGetUserProject)(() => _v12 && _v17 ? {
        where: {
          userId: _v12,
          projectId: parseInt(_v17)
        },
        select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "metadata.interactions.uploadVideo.uri", "privacy", "user", "name", "uri"]
      } : null),
      {
        data: _v20
      } = (0, _v13.useGetUserTeam)(() => _v12 ? {
        where: {
          userId: _v12
        },
        select: ["pictures.sizes"],
        query: {
          sizes: "40"
        }
      } : null),
      _v21 = _v20?.pictures?.sizes?.[0]?.link,
      {
        data: _v22,
        isValidating: _v23,
        error: _v24
      } = (0, _v11.useGetUserFoldersDefault)(() => _v12 ? {
        where: {
          userId: _v12
        },
        select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "privacy", "name", "uri"]
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      _v25 = !!(_v18 && _v18.metadata?.interactions.uploadVideo?.uri);
    return (0, _v3.useEffect)(() => {
      _v18 && _v18.user?.uri === `/users/${_v2}` && _v25 && _v1(_v18);
    }, [_v18, _v2, _v25, _v1]), (0, _v3.useEffect)(() => {
      !_v23 && (_v22 || _v24) && _v16 && (_v24 && 410 === _v24.status && _v1(null), _v22 && _v1(_v22), _v11.current = _v2);
    }, [_v2, _v1, _v22, _v23, _v24, _v16]), (0, _v2.jsxs)(_v5.Flex, {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "md",
      position: "relative",
      left: "0",
      right: "0",
      flexDirection: ["column", "row"],
      gap: "md",
      className: "notranslate",
      children: [_v15 && _v10 && (_v8 ? (0, _v2.jsx)(_v16.TeamListDropdownBokeh, {
        items: _v5,
        selectedId: _v10.id,
        selectItem: _v0,
        onOpenChange: ({
          open: _v0
        }) => _v0 && _v7?.(_v10)
      }) : (0, _v2.jsx)(_v15.TeamListDropdown, {
        disabled: _v6,
        isLoading: _v4,
        icon: _v21 ? (0, _v2.jsx)(_v4.Box, {
          maxWidth: (0, _v7.rem)(42),
          maxHeight: (0, _v7.rem)(30),
          children: (0, _v2.jsx)("img", {
            width: "100%",
            height: "100%",
            src: _v21,
            alt: "team-logo"
          })
        }) : _v10 ? (0, _v2.jsx)(_v4.Box, {
          maxWidth: (0, _v7.rem)(42),
          maxHeight: (0, _v7.rem)(30),
          children: (0, _v2.jsx)(_v17.TeamLogo, {
            label: _v10.title
          })
        }) : null,
        items: _v5,
        selectedId: _v10.id,
        selectItem: _v0,
        onDropdownShown: () => _v7?.(_v10)
      })), (0, _v2.jsxs)(_v5.Flex, {
        alignItems: "center",
        flexDirection: ["column", "row"],
        gap: "md",
        children: [!!(_v5.length && _v15 && _v10) && (0, _v2.jsx)(_v6.Paragraph, {
          size: "lg",
          children: `${(0, _v14.translate)({
            singular: "to",
            dictionary: {
              es: {
                singular: "a"
              },
              "de-DE": {
                singular: "An"
              },
              "fr-FR": {
                singular: "À"
              },
              "ja-JP": {
                singular: "送信先"
              },
              "ko-KR": {
                singular: "대상"
              },
              "pt-BR": {
                singular: "Para"
              },
              "zh-CN": {
                singular: "至"
              }
            }
          })}`
        }), (0, _v2.jsx)(_v10.FolderSelect, {
          disabled: _v6,
          userId: _v12 || 0,
          isLoading: _v23 && _v19,
          selectedFolder: _v3,
          selectedFolderURI: _v3?.uri ?? null,
          permissionAction: "folder.upload_video",
          canSelectRoot: _v9?.user?.id === _v2 || _v10?.role === _v18.TeamUserPermissionLevel.Admin,
          onChange: _v1
        })]
      })]
    });
  }], 0), (_v1 = {}).OWNER = "owner", _v1.ADMIN = "admin", _v1.UPLOADER = "uploader", _v1.CONTRIBUTOR = "contributor", _v1.VIEWER = "viewer", _v0.s(["ALL_TEAM_ROLES", 0, ["owner", "admin", "uploader", "contributor", "viewer"]], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23({
    animateSparkleExit: _v0 = !0,
    hasArrowBackground: _v1 = !0
  }) {
    return (0, _v2.jsxs)(_v30, {
      xmlns: "http://www.w3.org/2000/svg",
      width: "200",
      viewBox: "0 0 1080 1080",
      children: [(0, _v2.jsx)(_v27, {}), (0, _v2.jsx)(_v26, {
        transition: {
          delay: .1
        },
        initial: {
          translateX: 158,
          translateY: 550,
          scale: 0
        },
        animateExit: _v0
      }), (0, _v2.jsx)(_v26, {
        transition: {
          delay: .25
        },
        initial: {
          translateX: 809,
          translateY: 480,
          scale: 0
        },
        animateExit: _v0
      }), (0, _v2.jsx)(_v26, {
        transition: {
          delay: .4
        },
        explodeDelay: .8,
        initial: {
          translateX: 739,
          translateY: 387,
          scale: 0
        },
        animateExit: _v0
      }), (0, _v2.jsx)(_v29, {
        hasArrowBackground: _v1
      })]
    });
  }
  function _v24() {
    return (0, _v2.jsx)(_v34, {
      x1: "50",
      y1: "15",
      x2: "50",
      y2: "85"
    });
  }
  function _v25() {
    return (0, _v2.jsx)(_v34, {
      x1: "85",
      y1: "50",
      x2: "15",
      y2: "50"
    });
  }
  function _v26({
    animateExit: _v0,
    explodeDelay: _v1 = .65,
    ..._v2
  }) {
    return (0, _v2.jsxs)(_v20.motion.g, {
      animate: {
        scale: 1
      },
      ..._v2,
      children: [(0, _v2.jsx)(_v24, {}), (0, _v2.jsx)(_v25, {}), _v0 && (0, _v2.jsx)(_v31, {
        animate: {
          scale: [0, 10]
        },
        transition: {
          delay: _v1,
          duration: .25
        },
        x: "45",
        y: "45"
      })]
    });
  }
  function _v27() {
    return (0, _v2.jsx)(_v33, {
      d: "M667.2,514.8c2.1-8,3.4-16.4,3.4-25c0-53.4-43.3-96.6-96.6-96.6c-37.1,0-69.1,21.1-85.3,51.8 c-8.2-4.9-17.6-7.8-27.8-7.8c-30.3,0-54.9,24.6-54.9,54.9c0,8,1.8,15.5,4.8,22.3c-30.5,3.1-54.2,28.8-54.2,60.1 c0,33.4,27,60.4,60.4,60.4h241.6c33.4,0,60.4-27.1,60.4-60.4C718.9,543.9,696.4,519,667.2,514.8z"
    });
  }
  let _v28 = {
    visible: {
      transform: "translate(540px, 450px) scale(1)"
    },
    active: {
      transform: "translate(540px, 415px) scale(1)"
    },
    animate: {
      transform: "translate(540px, 330px) scale(0.7)",
      transition: {
        delay: 1.2
      }
    }
  };
  function _v29({
    hasArrowBackground: _v0
  }) {
    return (0, _v2.jsxs)(_v20.motion.g, {
      initial: ["visible", "active"],
      animate: "animate",
      variants: _v28,
      children: [(0, _v2.jsx)(_v36, {
        transition: {
          delay: .1
        },
        initial: {
          y1: 270
        },
        animate: {
          y1: 130
        },
        y2: "270",
        hasArrowBackground: _v0
      }), (0, _v2.jsx)(_v34, {
        transition: {
          delay: .1
        },
        initial: {
          y1: 270
        },
        animate: {
          y1: 140,
          y2: 250
        },
        y2: "270"
      }), (0, _v2.jsx)(_v20.motion.g, {
        transform: "translate(-537, -420)",
        children: (0, _v2.jsx)(_v35, {
          transition: {
            delay: .4
          },
          initial: {
            points: "537,548 537,548 537,548"
          },
          animate: {
            points: "481,605 537,548 594,605"
          }
        })
      })]
    });
  }
  let _v30 = _v22.default.svg.withConfig({
      displayName: "AnimatedUploadIcon__SVG",
      componentId: "sc-3f2a9c4-0"
    })`
  transform: scale(1.5) translateY(${(0, _v21.rem)(5)});
`,
    _v31 = (0, _v22.default)(_v20.motion.rect).withConfig({
      displayName: "AnimatedUploadIcon__Rect",
      componentId: "sc-3f2a9c4-1"
    })`
  fill: var(--vimeo-colors-background);
  height: ${(0, _v21.rem)(10)};
  width: ${(0, _v21.rem)(10)};
  display: inline-block;
  transform-origin: center;
`,
    _v32 = _v22.css`
  fill: none !important;
  stroke: ${({
      theme: _v0
    }) => _v0.content.color};
  stroke-width: ${(0, _v21.rem)(20)};
`,
    _v33 = (0, _v22.default)(_v20.motion.path).withConfig({
      displayName: "AnimatedUploadIcon__Path",
      componentId: "sc-3f2a9c4-2"
    })`
  ${_v32}
`,
    _v34 = (0, _v22.default)(_v20.motion.line).withConfig({
      displayName: "AnimatedUploadIcon__Line",
      componentId: "sc-3f2a9c4-3"
    })`
  ${_v32}
`,
    _v35 = (0, _v22.default)(_v20.motion.polyline).withConfig({
      displayName: "AnimatedUploadIcon__PolyLine",
      componentId: "sc-3f2a9c4-4"
    })`
  ${_v32}
`,
    _v36 = (0, _v22.default)(_v20.motion.line).withConfig({
      displayName: "AnimatedUploadIcon__BackgroundLine",
      componentId: "sc-3f2a9c4-5"
    })`
  fill: none;
  stroke: ${({
      theme: _v0,
      hasArrowBackground: _v1
    }) => _v1 && _v0.content.background};
  stroke-width: ${(0, _v21.rem)(40)};
`;
  _v0.s(["AnimatedUploadIcon", 0, function ({
    animate: _v0 = !0,
    ..._v1
  }) {
    let [_v2, _v3] = (0, _v3.useState)(0);
    return (0, _v3.useEffect)(() => {
      if (!_v0) return;
      let _v0 = setInterval(() => {
        _v3(_v0 => ++_v0);
      }, 0);
      return () => clearInterval(_v0);
    }, [_v0]), (0, _v2.jsx)(_v23, {
      ..._v1
    }, `animated-upload-icon-${_v2}`);
  }], 0);
}