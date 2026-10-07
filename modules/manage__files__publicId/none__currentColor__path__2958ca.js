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
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = _v0 => (0, _v1.jsx)(_v44.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 8.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-5.172a3 3 0 0 1-2.12-.879l-.83-.828a1 1 0 0 0-.706-.293H5Zm-3 1a3 3 0 0 1 3-3h2.172a3 3 0 0 1 2.12.879l.83.828a1 1 0 0 0 .706.293H16a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8Z"
      }), (0, _v1.jsx)("path", {
        d: "M4.17 5.5A3.001 3.001 0 0 1 7 3.5h2.172a3 3 0 0 1 2.12.879l.83.828a1 1 0 0 0 .706.293H19a3 3 0 0 1 3 3v6a3.001 3.001 0 0 1-2 2.83V8.5a1 1 0 0 0-1-1h-6.172a3 3 0 0 1-2.12-.879l-.83-.828a1 1 0 0 0-.706-.293H4.17ZM8.714 13.265c0-.975.8-1.765 1.786-1.765s1.786.79 1.786 1.765c0 .673-.382 1.258-.943 1.556A2.474 2.474 0 0 1 13 17.147c0 .195-.16.353-.357.353H8.357A.355.355 0 0 1 8 17.147c0-1.072.69-1.984 1.657-2.326a1.762 1.762 0 0 1-.943-1.556Z"
      })]
    })
  });
  var _v46 = _v0.i(0);
  function _v47(_v0) {
    return !!_v0 && "root" !== _v0 && !!_v0?.metadata;
  }
  function _v48(_v0) {
    return !!_v0 && ("root" === _v0 || !_v0?.isPrivateToUser);
  }
  function _v49(_v0) {
    return _v0[0]?.type === "folder";
  }
  function _v50(_v0, _v1 = 16) {
    return _v0.length > _v1 ? `${_v0.slice(0, _v1)}…` : _v0;
  }
  function _v51(_v0, _v1) {
    let {
        destination: _v2
      } = _v0,
      _v3 = _v2 && "root" !== _v2 ? _v2.uri : void 0;
    return `${_v3 ?? _v0.label}-${_v1}`;
  }
  function _v52(_v0) {
    return _v0 && "root" !== _v0 ? _v47(_v0) ? [...(_v0.metadata.connections.ancestorPath ?? [])] : _v0.breadcrumbAncestorPath ? [..._v0.breadcrumbAncestorPath] : [] : [];
  }
  function _v53(_v0, _v1) {
    let _v2 = _v1?.metadata?.connections?.ancestorPath || [];
    return !!_v2.length && _v2.some(_v0 => _v0.uri === _v0.uri);
  }
  let _v54 = ({
      condensedCrumbs: _v0,
      crumbs: _v1,
      isMeasuring: _v2 = !1,
      rootCrumb: _v3,
      setSelectedDestination: _v4,
      truncateLastCrumb: _v5 = !1
    }) => (0, _v1.jsxs)(_v35.Breadcrumb, {
      separator: (0, _v1.jsx)(_v42.ChevronRightSmall, {}),
      w: _v2 ? "max-content" : void 0,
      children: [_v3 && (0, _v1.jsx)(_v35.BreadcrumbItem, {
        minH: (0, _v41.rem)(26),
        children: (0, _v1.jsx)(_v36.BreadcrumbLink, {
          "aria-label": _v3.isLocationsCrumb ? _v3.label : void 0,
          color: _v1.length > 1 ? "text-secondary" : "text-primary",
          cursor: _v4 ? "pointer" : void 0,
          onClick: _v4 ? () => _v4(_v3.destination) : void 0,
          children: _v3.isLocationsCrumb ? (0, _v1.jsx)(_v45, {
            boxSize: "1.25rem"
          }) : _v3.label
        })
      }), _v1.slice(1).map((_v0, _v1) => {
        if (_v0[0] === _v0) return (0, _v1.jsx)(_v35.BreadcrumbItem, {
          children: (0, _v1.jsxs)(_v37.Menu, {
            children: [(0, _v1.jsx)(_v38.MenuButton, {
              as: _v11.IconButton,
              "aria-label": "more",
              icon: (0, _v1.jsx)(_v43.EllipsisH, {}),
              size: "xs",
              variant: "tertiary"
            }), _v4 && (0, _v1.jsx)(_v39.MenuList, {
              children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v40.MenuItem, {
                onClick: () => _v4(_v0.destination),
                children: _v0.label
              }, _v51(_v0, _v1)))
            })]
          })
        }, "condensed-crumbs");
        if (_v0.includes(_v0)) return null;
        let _v2 = _v0 === _v1[_v1.length - 1],
          _v3 = !_v2 && _v5 && _v2 ? _v50(_v0.label) : _v0.label;
        return (0, _v1.jsx)(_v35.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v36.BreadcrumbLink, {
            color: "text-primary",
            cursor: _v4 ? "pointer" : void 0,
            onClick: _v4 ? () => _v4(_v0.destination) : void 0,
            children: _v3
          })
        }, _v51(_v0, _v1));
      })]
    }),
    _v55 = ({
      selectedDestination: _v0,
      setSelectedDestination: _v1,
      showLibrarySelect: _v2,
      hasContentSpaceEnabled: _v3,
      isUnifiedLibrary: _v4 = !1
    }) => {
      let _v5 = _v48(_v0),
        _v6 = void 0 !== _v0 && "root" !== _v0 ? _v0 : void 0,
        _v7 = void 0 !== _v6,
        _v8 = _v3 ? (0, _v31.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v31.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        {
          data: _v9
        } = (0, _v46.useGetUserFoldersPrivateToMe)(() => {
          if (!_v4) return null;
          let _v0 = parseInt(("root" !== _v0 ? _v0?.uri ?? "" : "").split("/")[2], 10);
          return _v0 ? {
            where: {
              userId: _v0,
              ownerId: _v0
            },
            select: ["uri"]
          } : null;
        }),
        _v10 = _v4 ? _v9?.uri : void 0,
        _v11 = [];
      _v2 && _v3 && _v11.push({
        destination: void 0,
        isLocationsCrumb: !0,
        label: (0, _v31.translate)({
          singular: "Locations",
          dictionary: {
            es: {
              singular: "Ubicaciones"
            },
            "de-DE": {
              singular: "Standorte"
            },
            "fr-FR": {
              singular: "Bureaux"
            },
            "ja-JP": {
              singular: "所在地"
            },
            "ko-KR": {
              singular: "위치"
            },
            "pt-BR": {
              singular: "Locais"
            }
          }
        })
      }), _v5 && _v11.push({
        destination: "root",
        label: _v8
      });
      let _v12 = _v52(_v0).slice().reverse().filter(_v0 => _v0.canUpload);
      void 0 !== _v6 && _v12.length && _v12.forEach((_v0, _v1) => {
        let _v2 = _v10 === _v0.uri,
          _v3 = _v2 ? "root" : {
            ..._v0,
            isPrivateToUser: !!_v6.isPrivateToUser,
            breadcrumbAncestorPath: _v12.slice(0, _v1).reverse()
          };
        _v11.push({
          destination: _v3,
          label: _v2 ? _v8 : _v0.name
        });
      }), void 0 !== _v6 && _v11.push({
        destination: _v6,
        label: _v6.name
      });
      let _v13 = _v11[0],
        _v14 = _v11.map(_v0 => _v0.label).join(),
        _v15 = _v11.length > 1 ? [0, _v11.length - 1] : [0];
      _v11.length > 2 && _v15.push(1);
      for (let _v0 = _v11.length - 2; _v0 > 1; _v0 -= 1) _v15.push(_v0);
      let _v16 = _v15.map((_v0, _v1) => {
          let _v2 = new Set(_v15.slice(0, _v1 + 1)),
            _v3 = _v11.filter((_v0, _v1) => _v2.has(_v1));
          return {
            condensedCrumbs: _v11.filter((_v0, _v1) => !_v2.has(_v1)),
            visibleCrumbs: _v3
          };
        }),
        [_v17, _v18] = (0, _v3.useState)(0),
        [_v19, _v20] = (0, _v3.useState)(!1),
        _v21 = (0, _v3.useRef)(null),
        _v22 = (0, _v3.useRef)([]),
        _v23 = _v16[_v17] ?? _v16[0];
      return (0, _v3.useLayoutEffect)(() => {
        let _v0 = _v22.current,
          _v1 = () => {
            let _v0 = 0,
              _v1 = _v21.current?.clientWidth ?? 0;
            _v0.forEach((_v0, _v1) => {
              let _v2 = _v0?.firstElementChild;
              _v2 && _v2.getBoundingClientRect().width <= _v1 && (_v0 = _v1);
            });
            let _v2 = +(_v11.length > 1),
              _v3 = _v0[_v2]?.firstElementChild,
              _v4 = _v7 && null != _v3 && _v3.getBoundingClientRect().width > _v1;
            _v18(_v4 ? _v2 : _v0), _v20(_v4);
          };
        _v1();
        let _v2 = new ResizeObserver(_v1);
        return _v21.current && _v2.observe(_v21.current), () => _v2.disconnect();
      }, [_v14, _v11.length, _v7]), (0, _v1.jsxs)(_v6.Box, {
        ref: _v21,
        maxW: "full",
        minW: "0",
        position: "relative",
        w: "full",
        children: [_v16.map((_v0, _v1) => (0, _v1.jsx)(_v6.Box, {
          ref: _v0 => {
            _v22.current[_v1] = _v0;
          },
          "aria-hidden": "true",
          overflow: "hidden",
          position: "absolute",
          visibility: "hidden",
          w: "full",
          children: (0, _v1.jsx)(_v54, {
            condensedCrumbs: _v0.condensedCrumbs,
            crumbs: _v11,
            isMeasuring: !0,
            rootCrumb: _v13
          })
        }, _v0.visibleCrumbs.map((_v0, _v1) => _v51(_v0, _v1)).join("|"))), (0, _v1.jsx)(_v54, {
          condensedCrumbs: _v23.condensedCrumbs,
          crumbs: _v11,
          rootCrumb: _v13,
          setSelectedDestination: _v1,
          truncateLastCrumb: _v19
        })]
      });
    };
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = ({
      condensedCrumbs: _v0,
      crumbs: _v1,
      isMeasuring: _v2 = !1,
      rootCrumb: _v3,
      setSelectedDestination: _v4,
      setShowAllWorkspaces: _v5,
      truncateLastCrumb: _v6 = !1
    }) => (0, _v1.jsxs)(_v35.Breadcrumb, {
      separator: (0, _v1.jsx)(_v42.ChevronRightSmall, {}),
      w: _v2 ? "max-content" : void 0,
      children: [_v3 && (0, _v1.jsx)(_v35.BreadcrumbItem, {
        minH: (0, _v41.rem)(26),
        children: (0, _v1.jsx)(_v36.BreadcrumbLink, {
          color: _v1.length > 1 ? "text-secondary" : "text-primary",
          cursor: _v4 ? "pointer" : void 0,
          onClick: _v4 ? () => {
            _v3.isWorkspacesCrumb && _v5?.(!0), _v4(_v3.destination);
          } : void 0,
          children: _v3.isWorkspacesCrumb ? (0, _v1.jsx)(_v22.Tooltip, {
            label: (0, _v31.translate)({
              singular: "All workspaces",
              dictionary: {
                es: {
                  singular: "Todos los espacios de trabajo"
                },
                "de-DE": {
                  singular: "Alle Workspaces"
                },
                "fr-FR": {
                  singular: "Tous les espaces de travail"
                },
                "ja-JP": {
                  singular: "すべてのワークスペース"
                },
                "ko-KR": {
                  singular: "모든 워크스페이스"
                },
                "pt-BR": {
                  singular: "Todos os espaços de trabalho"
                },
                "zh-CN": {
                  singular: "所有工作区"
                }
              }
            }),
            placement: "top",
            isDisabled: _v0.length < 1,
            children: (0, _v1.jsxs)(_v8.Flex, {
              alignItems: "center",
              gap: "1",
              children: [(0, _v1.jsx)(_v57._2Layers, {
                boxSize: "2xs"
              }), _v0.length < 1 && (0, _v1.jsx)(_v56.Text, {
                variant: "heading-xs",
                fontWeight: "medium",
                children: _v3.label
              })]
            })
          }) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v3.label
          })
        })
      }), _v1.slice(1).map((_v0, _v1) => {
        if (_v0[0] === _v0) return (0, _v1.jsx)(_v35.BreadcrumbItem, {
          minH: (0, _v41.rem)(26),
          children: (0, _v1.jsxs)(_v37.Menu, {
            children: [(0, _v1.jsx)(_v38.MenuButton, {
              as: _v11.IconButton,
              "aria-label": "more",
              icon: (0, _v1.jsx)(_v43.EllipsisH, {}),
              size: "xs",
              variant: "tertiary"
            }), _v4 && (0, _v1.jsx)(_v39.MenuList, {
              children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v40.MenuItem, {
                onClick: () => _v4(_v0.destination),
                children: _v0.label
              }, _v51(_v0, _v1)))
            })]
          })
        }, "condensed-crumbs");
        if (_v0.includes(_v0)) return null;
        let _v2 = _v0 === _v1[_v1.length - 1],
          _v3 = !_v2 && _v6 && _v2 ? _v50(_v0.label) : _v0.label;
        return (0, _v1.jsx)(_v35.BreadcrumbItem, {
          minH: (0, _v41.rem)(26),
          children: (0, _v1.jsx)(_v36.BreadcrumbLink, {
            color: "text-primary",
            cursor: _v4 ? "pointer" : void 0,
            onClick: _v4 ? () => _v4(_v0.destination) : void 0,
            children: _v3
          })
        }, _v51(_v0, _v1));
      })]
    }),
    _v59 = ({
      selectedDestination: _v0,
      setSelectedDestination: _v1,
      setShowAllWorkspaces: _v2,
      showAllWorkspaces: _v3,
      showLibrarySelect: _v4,
      hasContentSpaceEnabled: _v5,
      workspaceUuid: _v6,
      isUnifiedLibrary: _v7 = !1
    }) => {
      let {
          data: _v8
        } = (0, _v30.useGetWorkspace)(() => _v6 ? {
          where: {
            workspaceUuid: _v6
          },
          select: ["displayName"]
        } : null),
        _v9 = _v48(_v0),
        _v10 = void 0 !== _v0 && "root" !== _v0 ? _v0 : void 0,
        _v11 = void 0 !== _v10,
        _v12 = _v5 ? (0, _v31.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v31.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        {
          data: _v13
        } = (0, _v46.useGetUserFoldersPrivateToMe)(() => {
          if (!_v7) return null;
          let _v0 = parseInt(("root" !== _v0 ? _v0?.uri ?? "" : "").split("/")[2], 10);
          return _v0 ? {
            where: {
              userId: _v0,
              ownerId: _v0
            },
            select: ["uri"]
          } : null;
        }),
        _v14 = _v7 ? _v13?.uri : void 0,
        _v15 = [];
      _v15.push({
        destination: void 0,
        label: (0, _v31.translate)({
          singular: "All workspaces",
          dictionary: {
            es: {
              singular: "Todos los espacios de trabajo"
            },
            "de-DE": {
              singular: "Alle Workspaces"
            },
            "fr-FR": {
              singular: "Tous les espaces de travail"
            },
            "ja-JP": {
              singular: "すべてのワークスペース"
            },
            "ko-KR": {
              singular: "모든 워크스페이스"
            },
            "pt-BR": {
              singular: "Todos os espaços de trabalho"
            },
            "zh-CN": {
              singular: "所有工作区"
            }
          }
        }),
        isWorkspacesCrumb: !0
      }), _v3 || null == _v8 || _v15.push({
        destination: _v4 ? void 0 : "root",
        label: _v8.displayName
      }), _v9 && !_v3 && _v4 && _v15.push({
        destination: "root",
        label: _v12
      });
      let _v16 = _v52(_v0).slice().reverse().filter(_v0 => _v0.canUpload);
      void 0 !== _v10 && _v16.length && _v16.forEach((_v0, _v1) => {
        let _v2 = _v14 === _v0.uri,
          _v3 = _v2 ? "root" : {
            ..._v0,
            isPrivateToUser: !!_v10.isPrivateToUser,
            breadcrumbAncestorPath: _v16.slice(0, _v1).reverse()
          };
        _v15.push({
          destination: _v3,
          label: _v2 ? _v12 : _v0.name
        });
      }), void 0 !== _v10 && _v15.push({
        destination: _v10,
        label: _v10.name
      });
      let _v17 = _v15[0],
        _v18 = _v15.map(_v0 => _v0.label).join(),
        _v19 = _v15.length > 1 ? [0, _v15.length - 1] : [0];
      _v15.length > 2 && _v19.push(1);
      for (let _v0 = _v15.length - 2; _v0 > 1; _v0 -= 1) _v19.push(_v0);
      let _v20 = _v19.map((_v0, _v1) => {
          let _v2 = new Set(_v19.slice(0, _v1 + 1)),
            _v3 = _v15.filter((_v0, _v1) => _v2.has(_v1));
          return {
            condensedCrumbs: _v15.filter((_v0, _v1) => !_v2.has(_v1)),
            visibleCrumbs: _v3
          };
        }),
        [_v21, _v22] = (0, _v3.useState)(0),
        [_v23, _v24] = (0, _v3.useState)(!1),
        _v25 = (0, _v3.useRef)(null),
        _v26 = (0, _v3.useRef)([]),
        _v27 = _v20[_v21] ?? _v20[0];
      return (0, _v3.useLayoutEffect)(() => {
        let _v0 = _v26.current,
          _v1 = () => {
            let _v0 = 0,
              _v1 = _v25.current?.clientWidth ?? 0;
            _v0.forEach((_v0, _v1) => {
              let _v2 = _v0?.firstElementChild;
              _v2 && _v2.getBoundingClientRect().width <= _v1 && (_v0 = _v1);
            });
            let _v2 = +(_v15.length > 1),
              _v3 = _v0[_v2]?.firstElementChild,
              _v4 = _v11 && null != _v3 && _v3.getBoundingClientRect().width > _v1;
            _v22(_v4 ? _v2 : _v0), _v24(_v4);
          };
        _v1();
        let _v2 = new ResizeObserver(_v1);
        return _v25.current && _v2.observe(_v25.current), () => _v2.disconnect();
      }, [_v18, _v15.length, _v11]), (0, _v1.jsxs)(_v6.Box, {
        ref: _v25,
        maxW: "full",
        minW: "0",
        position: "relative",
        w: "full",
        children: [_v20.map((_v0, _v1) => (0, _v1.jsx)(_v6.Box, {
          ref: _v0 => {
            _v26.current[_v1] = _v0;
          },
          "aria-hidden": "true",
          overflow: "hidden",
          position: "absolute",
          visibility: "hidden",
          w: "full",
          children: (0, _v1.jsx)(_v58, {
            condensedCrumbs: _v0.condensedCrumbs,
            crumbs: _v15,
            isMeasuring: !0,
            rootCrumb: _v17
          })
        }, _v0.visibleCrumbs.map((_v0, _v1) => _v51(_v0, _v1)).join("|"))), (0, _v1.jsx)(_v58, {
          condensedCrumbs: _v27.condensedCrumbs,
          crumbs: _v15,
          rootCrumb: _v17,
          setSelectedDestination: _v1,
          setShowAllWorkspaces: _v2,
          truncateLastCrumb: _v23
        })]
      });
    };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = ["isPrivateToUser", "metadata.connections.ancestorPath.canUpload", "metadata.connections.ancestorPath.name", "metadata.connections.ancestorPath.uri", "metadata.connections.folders.total", "metadata.connections.parentFolder.uri", "metadata.interactions.addSubfolder.canAddSubfolders", "metadata.interactions.edit.uri", "name", "settings.embedPresetId", "settings.isEmbedPresetInheritanceEnabled", "privacy.view", "uri"],
    _v64 = ["folder.isPrivateToUser", "folder.metadata.connections.ancestorPath.canUpload", "folder.metadata.connections.ancestorPath.name", "folder.metadata.connections.ancestorPath.uri", "folder.metadata.connections.folders.total", "folder.metadata.connections.parentFolder.uri", "folder.metadata.interactions.addSubfolder.canAddSubfolders", "folder.metadata.interactions.edit.uri", "folder.name", "folder.settings.embedPresetId", "folder.settings.isEmbedPresetInheritanceEnabled", "folder.privacy.view", "folder.uri"],
    _v65 = ["displayName", "teamOwnerId", "uri", "icon.sizes.link"],
    _v66 = "https://vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/39402337432721-How-to-transfer-videos-between-Workspaces",
    _v67 = () => {
      let _v0 = (0, _v34.useViewer)(),
        _v1 = _v0?.user?.id;
      return _v0?.teamUser?.ownerId ?? _v1;
    },
    _v68 = ({
      selectedDestination: _v0,
      setIsCreatingFolder: _v1,
      setSelectedDestination: _v2,
      workspaceId: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useState)(""),
        [_v6, {
          data: _v7,
          loading: _v8
        }] = (0, _v62.usePostUserProjects)(),
        _v9 = _v67();
      return (0, _v3.useEffect)(() => {
        _v7 && (_v2(_v7), _v1(!1));
      }, [_v7, _v1, _v2]), (0, _v1.jsx)("form", {
        onSubmit: _v0 => {
          _v0.preventDefault(), (({
            name: _v0
          }) => {
            _v9 && _v6({
              where: {
                userId: _v3 ?? _v9
              },
              variables: {
                name: _v0,
                parentFolderUri: "root" === _v0 ? void 0 : _v0?.uri
              },
              select: _v63
            });
          })({
            name: _v4
          });
        },
        children: (0, _v1.jsxs)(_v20.InputGroup, {
          children: [(0, _v1.jsx)(_v19.Input, {
            autoFocus: !0,
            isDisabled: _v8,
            maxLength: 32,
            onChange: _v0 => _v5(_v0.target.value),
            placeholder: (0, _v31.translate)({
              singular: "Folder name",
              dictionary: {
                es: {
                  singular: "Nombre de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnername"
                },
                "fr-FR": {
                  singular: "Nom du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー名"
                },
                "ko-KR": {
                  singular: "폴더 이름"
                },
                "pt-BR": {
                  singular: "Nome da pasta"
                },
                "zh-CN": {
                  singular: "文件夹名称"
                }
              }
            }),
            value: _v4
          }), (0, _v1.jsx)(_v21.InputRightElement, {
            children: (0, _v1.jsxs)(_v10.HStack, {
              position: "absolute",
              right: "0.5rem",
              spacing: "0.25rem",
              children: [(0, _v1.jsx)(_v11.IconButton, {
                "aria-label": (0, _v31.translate)({
                  singular: "Confirm",
                  dictionary: {
                    es: {
                      singular: "Confirmar"
                    },
                    "de-DE": {
                      singular: "Bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer"
                    },
                    "ja-JP": {
                      singular: "確定"
                    },
                    "ko-KR": {
                      singular: "확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar"
                    },
                    "zh-CN": {
                      singular: "确认"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v60.Checkmark, {}),
                isDisabled: !_v4,
                isLoading: _v8,
                size: "xs",
                type: "submit",
                variant: "primary"
              }), (0, _v1.jsx)(_v11.IconButton, {
                "aria-label": (0, _v31.translate)({
                  singular: "Cancel",
                  dictionary: {
                    es: {
                      singular: "Cancelar"
                    },
                    "de-DE": {
                      singular: "Abbrechen"
                    },
                    "fr-FR": {
                      singular: "Annuler"
                    },
                    "ja-JP": {
                      singular: "キャンセル"
                    },
                    "ko-KR": {
                      singular: "취소"
                    },
                    "pt-BR": {
                      singular: "Cancelar"
                    },
                    "zh-CN": {
                      singular: "取消"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v61.CloseXSmall, {}),
                isDisabled: _v8,
                onClick: () => _v1(!1),
                size: "xs",
                variant: "secondary"
              })]
            })
          })]
        })
      });
    };
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = ({
      copy: _v0,
      cta: _v1,
      icon: _v2,
      subcopy: _v3
    }) => (0, _v1.jsxs)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      color: "text-secondary",
      height: "100%",
      children: [_v2, (0, _v1.jsx)(_v56.Text, {
        variant: "heading-md",
        fontWeight: "500",
        children: _v0
      }), !!_v3 && (0, _v1.jsx)(_v56.Text, {
        variant: "body-md",
        fontWeight: "400",
        children: _v3
      }), _v1]
    }),
    _v75 = ({
      canCreateFolder: _v0,
      isCreatingFolder: _v1,
      onCreateFolder: _v2,
      setIsCreateFolderButtonVisible: _v3
    }) => ((0, _v3.useEffect)(() => {
      _v3(!1);
    }, [_v3]), (0, _v1.jsx)(_v74, {
      copy: (0, _v31.translate)({
        singular: "No folders yet",
        dictionary: {
          es: {
            singular: "No hay ningún folder aún"
          },
          "de-DE": {
            singular: "Noch keine Ordner vorhanden"
          },
          "fr-FR": {
            singular: "Aucun dossier pour l'instant"
          },
          "ja-JP": {
            singular: "フォルダーがありません。"
          },
          "ko-KR": {
            singular: "아직 폴더가 없습니다"
          },
          "pt-BR": {
            singular: "Você não tem nenhuma pasta"
          }
        }
      }),
      cta: _v0 && (0, _v1.jsx)(_v7.Button, {
        isDisabled: _v1,
        onClick: _v2,
        variant: "secondary",
        children: (0, _v31.translate)({
          singular: "Create folder",
          dictionary: {
            es: {
              singular: "Crear carpeta"
            },
            "de-DE": {
              singular: "Ordner erstellen"
            },
            "fr-FR": {
              singular: "Créer un dossier"
            },
            "ja-JP": {
              singular: "フォルダーを作成"
            },
            "ko-KR": {
              singular: "폴더 만들기"
            },
            "pt-BR": {
              singular: "Criar Pasta"
            },
            "zh-CN": {
              singular: "创建文件夹"
            }
          }
        })
      }),
      icon: (0, _v1.jsx)(_v73.FolderOpen, {
        boxSize: "2rem"
      })
    }));
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  let _v79 = ({
    children: _v0,
    onClick: _v1,
    paddingY: _v2 = "0.75rem"
  }) => (0, _v1.jsx)(_v8.Flex, {
    as: "li",
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
    height: "2.75rem",
    gap: "1rem",
    onClick: _v1,
    padding: `${_v2} 0.75rem`,
    role: "button",
    tabIndex: 0,
    _hover: {
      backgroundColor: "fill-component-hover"
    },
    _focusVisible: {
      backgroundColor: "fill-component",
      borderColor: "check-radio-stroke",
      outline: "none"
    },
    children: _v0
  });
  _v79.Label = ({
    children: _v0
  }) => (0, _v1.jsx)(_v6.Box, {
    flex: "1 1",
    children: (0, _v1.jsx)(_v56.Text, {
      variant: "heading-xs",
      children: _v0
    })
  });
  let _v80 = ({
      emptyState: _v0,
      folders: _v1,
      isDone: _v2,
      isLoading: _v3,
      onClickFolder: _v4,
      onLoadMore: _v5
    }) => _v3 || _v1 && 0 !== _v1.length ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v8.Flex, {
        as: "ul",
        flexDirection: "column",
        children: _v1?.map(_v0 => (0, _v1.jsxs)(_v79, {
          onClick: () => _v4(_v0),
          children: [(0, _v1.jsx)(_v77.Folder, {
            boxSize: "1.25rem"
          }), (0, _v1.jsx)(_v79.Label, {
            children: _v0.name
          }), !!_v0.metadata?.connections?.folders?.total && (0, _v1.jsx)(_v42.ChevronRightSmall, {})]
        }, _v0.uri))
      }), _v3 && (0, _v1.jsx)(_v8.Flex, {
        justifyContent: "center",
        marginTop: "1rem",
        children: (0, _v1.jsx)(_v76.Spinner, {
          size: "sm"
        })
      }), !_v2 && (0, _v1.jsx)(_v78.InfiniteLoadingZone, {
        isLoading: _v3,
        onLoadMore: _v5
      })]
    }) : _v0,
    _v81 = ({
      canCreateFolder: _v0,
      folderUri: _v1,
      isCreatingFolder: _v2,
      items: _v3,
      onCreateFolder: _v4,
      setSelectDestination: _v5,
      selectedDestination: _v6,
      setIsCreateFolderButtonVisible: _v7,
      workspaceId: _v8
    }) => {
      let _v9 = _v49(_v3),
        {
          data: _v10
        } = (0, _v69.useGetUserProject)(() => {
          if (!_v1) return null;
          let {
            userId: _v0,
            folderId: _v1
          } = (0, _v72.getIdsFromFolderUri)(_v1);
          return !_v0 || !_v1 || _v47(_v6) ? null : {
            select: _v63,
            where: {
              projectId: _v1,
              userId: _v8 ?? _v0
            }
          };
        }),
        {
          data: _v11,
          setSize: _v12,
          size: _v13
        } = (0, _v70.useGetUserProjectItemsInfinite)(() => {
          if (!_v1) return null;
          let {
            userId: _v0,
            folderId: _v1
          } = (0, _v72.getIdsFromFolderUri)(_v1);
          return _v0 && _v1 ? {
            query: {
              filter: "folder",
              perPage: 20,
              sort: "alphabetical"
            },
            select: _v64,
            where: {
              projectId: _v1,
              userId: _v8 ?? _v0
            }
          } : null;
        });
      (0, _v3.useEffect)(() => {
        _v10?.uri === _v1 && _v5(_v10);
      }, [_v10, _v1, _v5]);
      let _v14 = _v11?.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => !!_v0 && (_v9 ? !!_v0?.metadata?.interactions?.addSubfolder?.canAddSubfolders : !!_v0?.metadata?.interactions?.edit)),
        {
          isDone: _v15,
          isLoadingInitialData: _v16,
          isLoadingMore: _v17
        } = (0, _v71.getInfiniteRequestLoadingState)({
          data: _v11,
          itemsPerPage: 20,
          size: _v13
        });
      return (0, _v1.jsx)(_v80, {
        emptyState: (0, _v1.jsx)(_v75, {
          canCreateFolder: _v0,
          isCreatingFolder: _v2,
          onCreateFolder: _v4,
          setIsCreateFolderButtonVisible: _v7
        }),
        folders: _v14,
        isDone: _v15,
        isLoading: _v16 || _v17,
        onClickFolder: _v0 => _v5(_v0),
        onLoadMore: () => _v12(_v13 + 1)
      });
    };
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = ({
    onSelectDestination: _v0,
    workspaceId: _v1
  }) => {
    let _v2 = (0, _v34.useViewer)(),
      _v3 = _v2?.user?.id,
      _v4 = _v2?.teamUser?.ownerId ?? _v3,
      {
        contentSpaceEnabled: _v5
      } = (0, _v27.useContentSpaceEnabled)(_v4),
      _v6 = _v5 ? (0, _v31.translate)({
        singular: "Team library",
        dictionary: {
          es: {
            singular: "Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Teambibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque de l'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリ"
          },
          "ko-KR": {
            singular: "팀 라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "团队视频库"
          }
        }
      }) : (0, _v31.translate)({
        singular: "Library",
        dictionary: {
          es: {
            singular: "Biblioteca"
          },
          "de-DE": {
            singular: "Bibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque"
          },
          "ja-JP": {
            singular: "ライブラリ"
          },
          "ko-KR": {
            singular: "라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca"
          },
          "zh-CN": {
            singular: "视频库"
          }
        }
      }),
      {
        data: _v7
      } = (0, _v46.useGetUserFoldersPrivateToMe)(() => _v3 && _v4 && _v5 ? {
        where: {
          userId: _v1 ?? _v4,
          ownerId: _v1 ?? _v4
        },
        select: _v63
      } : null);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [!!_v7 && (0, _v1.jsxs)(_v79, {
        onClick: () => _v0(_v7),
        children: [_v5 ? (0, _v1.jsx)(_v85.MyLibrary, {
          boxSize: "1.25rem"
        }) : (0, _v1.jsx)(_v82.PersonUser, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v79.Label, {
          children: (0, _v31.translate)({
            singular: "My library",
            dictionary: {
              es: {
                singular: "Mi biblioteca"
              },
              "de-DE": {
                singular: "Meine Bibliothek"
              },
              "fr-FR": {
                singular: "Ma bibliothèque"
              },
              "ja-JP": {
                singular: "マイ ライブラリ"
              },
              "ko-KR": {
                singular: "내 라이브러리"
              },
              "pt-BR": {
                singular: "Minha Biblioteca"
              },
              "zh-CN": {
                singular: "我的视频库"
              }
            }
          })
        }), (0, _v1.jsx)(_v42.ChevronRightSmall, {})]
      }), (0, _v1.jsxs)(_v79, {
        onClick: () => _v0("root"),
        children: [_v5 ? (0, _v1.jsx)(_v84.TeamLibrary, {
          boxSize: "1.25rem"
        }) : (0, _v1.jsx)(_v83.VideosStack, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v79.Label, {
          children: _v6
        }), (0, _v1.jsx)(_v42.ChevronRightSmall, {})]
      })]
    });
  };
  var _v87 = _v0.i(0);
  let _v88 = () => (0, _v1.jsx)(_v74, {
    copy: (0, _v31.translate)({
      singular: "No matching results",
      dictionary: {
        es: {
          singular: "No hay resultados coincidentes"
        },
        "de-DE": {
          singular: "Keine übereinstimmenden Ergebnisse"
        },
        "fr-FR": {
          singular: "Aucun résultat correspondant"
        },
        "ja-JP": {
          singular: "一致する結果がありません"
        },
        "ko-KR": {
          singular: "일치하는 결과가 없습니다."
        },
        "pt-BR": {
          singular: "Nenhum resultado correspondente"
        },
        "zh-CN": {
          singular: "无匹配结果"
        }
      }
    }),
    icon: (0, _v1.jsx)(_v26.SearchMagnifier, {
      boxSize: "2rem"
    }),
    subcopy: (0, _v31.translate)({
      singular: "Try another search",
      dictionary: {
        es: {
          singular: "Pruebe con otra búsqueda"
        },
        "de-DE": {
          singular: "Versuchen Sie eine andere Suche"
        },
        "fr-FR": {
          singular: "Essayez une autre recherche"
        },
        "ja-JP": {
          singular: "別の検索をお試しください"
        },
        "ko-KR": {
          singular: "다르게 검색해 보세요"
        },
        "pt-BR": {
          singular: "Tente outra pesquisa"
        },
        "zh-CN": {
          singular: "尝试其他搜索"
        }
      }
    })
  });
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = ({
    items: _v0,
    location: _v1,
    onClickFolder: _v2,
    searchQuery: _v3,
    showPrivateFolders: _v4,
    workspaceId: _v5
  }) => {
    let _v6 = (0, _v90.usePageName)(),
      _v7 = (0, _v33.useAnalyticsEvent)(),
      _v8 = _v49(_v0),
      _v9 = _v67(),
      {
        contentSpaceEnabled: _v10,
        notTeamGatedContentSpaceEnabled: _v11,
        loading: _v12
      } = (0, _v27.useContentSpaceEnabled)(_v5 ?? _v9),
      _v13 = !_v12 && _v11 && !_v10,
      {
        data: _v14,
        setSize: _v15,
        size: _v16
      } = (0, _v87.useGetUserItemsInfinite)(() => _v9 ? {
        query: {
          excludePrivateToMe: !_v4,
          filter: "folder",
          perPage: 20,
          query: _v3,
          queryFields: "title"
        },
        select: _v64,
        where: {
          userId: _v5 ?? _v9
        }
      } : null),
      _v17 = _v14?.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => !!_v0 && (!_v13 || !_v0.isPrivateToUser || !!_v0.metadata?.connections?.ancestorPath?.length) && (_v8 ? !!_v0?.metadata?.interactions?.addSubfolder?.canAddSubfolders : !!_v0?.metadata?.interactions?.edit)),
      {
        isDone: _v18,
        isLoadingInitialData: _v19,
        isLoadingMore: _v20
      } = (0, _v71.getInfiniteRequestLoadingState)({
        data: _v14,
        itemsPerPage: 20,
        size: _v16
      });
    return (0, _v3.useEffect)(() => {
      if (!_v14 || !_v14?.length || _v14.length > 1) return;
      let [_v0] = _v14;
      _v49(_v0) ? _v7((0, _v89.searchInMoveFolderModal)({
        location: _v1,
        result_count: _v0?.total ?? null,
        is_private_folder: _v0[0].parentFolder?.isPrivateToUser ?? !1
      })) : _v7((0, _v89.searchInMoveModal)({
        result_count: _v0?.total ?? null,
        product: "Video Library",
        location: "move_video_modal",
        page: _v6.toUpperCase(),
        video_type: null
      }));
    }, [_v14, _v7, _v0, _v1, _v6]), (0, _v1.jsx)(_v80, {
      emptyState: (0, _v1.jsx)(_v88, {}),
      folders: _v17,
      isDone: _v18,
      isLoading: _v19 || _v20 || _v12,
      onClickFolder: _v2,
      onLoadMore: () => _v15(_v16 + 1)
    });
  };
  var _v92 = _v0.i(0);
  let _v93 = ({
    canCreateFolder: _v0,
    items: _v1,
    isCreatingFolder: _v2,
    onClickFolder: _v3,
    onCreateFolder: _v4,
    setIsCreateFolderButtonVisible: _v5,
    workspaceId: _v6
  }) => {
    let _v7 = _v67(),
      _v8 = _v6 ?? _v7,
      {
        listingParams: _v9,
        loading: _v10
      } = (0, _v92.usePrivateToMeFolderListingParams)(_v8),
      _v11 = _v49(_v1),
      {
        data: _v12,
        setSize: _v13,
        size: _v14
      } = (0, _v62.useGetUserProjectsInfinite)(() => {
        if (!_v8 || _v10) return null;
        let _v0 = {};
        return _v11 ? (_v0.destinationsFor = _v1[0].uri, _v0.permissionAction = "folder.add_subfolders") : _v0.permissionAction = "folder.move_video", {
          query: {
            ..._v0,
            ..._v9,
            perPage: 20,
            topLevelOnly: !0
          },
          select: _v63,
          where: {
            userId: _v8
          }
        };
      }),
      _v15 = _v12?.flatMap(_v0 => _v0.data).filter(_v0 => !!_v0).filter(_v0 => !(_v9.flattenPrivateToMe && _v0?.isPrivateToUser && !_v0?.metadata?.connections?.ancestorPath?.length)),
      {
        isDone: _v16,
        isLoadingInitialData: _v17,
        isLoadingMore: _v18
      } = (0, _v71.getInfiniteRequestLoadingState)({
        data: _v12,
        itemsPerPage: 20,
        size: _v14
      });
    return (0, _v1.jsx)(_v80, {
      emptyState: (0, _v1.jsx)(_v75, {
        canCreateFolder: _v0,
        isCreatingFolder: _v2,
        onCreateFolder: _v4,
        setIsCreateFolderButtonVisible: _v5
      }),
      folders: _v15,
      isDone: _v16,
      isLoading: _v17 || _v18 || _v10,
      onClickFolder: _v3,
      onLoadMore: () => _v13(_v14 + 1)
    });
  };
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = ({
      currentWorkspaceUuid: _v0,
      onSelectDestination: _v1,
      setSelectedWorkspace: _v2,
      setShowAllWorkspaces: _v3,
      showPrivateFolders: _v4,
      workspaces: _v5
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: !!_v5 && _v5.map(_v0 => {
        let _v1 = _v0.uri.split("/")[2];
        return (0, _v1.jsxs)(_v79, {
          onClick: () => {
            _v1(_v4 ? void 0 : "root"), _v2({
              id: _v0.teamOwnerId,
              name: _v0.displayName,
              uuid: _v1
            }), _v3(!1);
          },
          paddingY: "2rem",
          children: [(0, _v1.jsx)(_v95.WorkspaceLogo, {
            fallbackAvatarSize: "md",
            label: _v0.displayName,
            logoUrl: _v0.icon?.sizes?.[0]?.link,
            boxSize: "md"
          }), (0, _v1.jsx)(_v79.Label, {
            children: _v0.displayName
          }), _v0 === _v1 && (0, _v1.jsx)(_v94.Badge, {
            size: "sm",
            variant: "default",
            marginRight: "2",
            children: (0, _v31.translate)({
              singular: "Current",
              dictionary: {
                es: {
                  singular: "Actual"
                },
                "de-DE": {
                  singular: "Aktuell"
                },
                "fr-FR": {
                  singular: "En cours"
                },
                "ja-JP": {
                  singular: "現在"
                },
                "ko-KR": {
                  singular: "최근"
                },
                "pt-BR": {
                  singular: "Atual"
                },
                "zh-CN": {
                  singular: "当前"
                }
              }
            })
          }), (0, _v1.jsx)(_v42.ChevronRightSmall, {})]
        }, _v0.uri);
      })
    }),
    _v97 = ({
      canCreateFolder: _v0,
      currentWorkspaceUuid: _v1,
      isCreatingFolder: _v2,
      items: _v3,
      location: _v4,
      onCreateFolder: _v5,
      onSelectDestination: _v6,
      searchQuery: _v7,
      selectedDestination: _v8,
      selectedWorkspace: _v9,
      showAllWorkspaces: _v10 = !1,
      showPrivateFolders: _v11,
      setIsCreateFolderButtonVisible: _v12,
      setSelectedWorkspace: _v13,
      setShowAllWorkspaces: _v14,
      workspaces: _v15
    }) => _v7 ? (0, _v1.jsx)(_v91, {
      items: _v3,
      location: _v4,
      onClickFolder: _v0 => _v6(_v0),
      searchQuery: _v7,
      showPrivateFolders: _v11,
      workspaceId: _v9.id
    }) : "root" === _v8 ? (0, _v1.jsx)(_v93, {
      canCreateFolder: _v0,
      isCreatingFolder: _v2,
      items: _v3,
      onCreateFolder: _v5,
      onClickFolder: _v0 => _v6(_v0),
      setIsCreateFolderButtonVisible: _v12,
      workspaceId: _v9.id
    }) : _v8?.uri ? (0, _v1.jsx)(_v81, {
      canCreateFolder: _v0,
      folderUri: _v8.uri,
      isCreatingFolder: _v2,
      items: _v3,
      onCreateFolder: _v5,
      setSelectDestination: _v6,
      selectedDestination: _v8,
      setIsCreateFolderButtonVisible: _v12,
      workspaceId: _v9.id
    }) : _v10 && _v15 ? (0, _v1.jsx)(_v96, {
      currentWorkspaceUuid: _v1,
      onSelectDestination: _v6,
      setSelectedWorkspace: _v13,
      setShowAllWorkspaces: _v14,
      showPrivateFolders: _v11,
      workspaces: _v15
    }) : (0, _v1.jsx)(_v86, {
      onSelectDestination: _v6,
      workspaceId: _v9.id
    });
  var _v98 = _v0.i(0);
  let _v99 = ({
    destinationWorkspaceName: _v0,
    items: _v1,
    isLoading: _v2,
    onMoveConfirmation: _v3,
    setIsActive: _v4,
    sourceWorkspaceName: _v5
  }) => (0, _v1.jsxs)(_v15.ModalContent, {
    children: [(0, _v1.jsx)(_v17.ModalHeader, {
      px: "md",
      paddingTop: "lg",
      paddingBottom: "md",
      children: (0, _v1.jsx)(_v9.Header, {
        size: "md",
        children: (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          children: [(0, _v1.jsx)(_v11.IconButton, {
            "aria-label": "arrow left icon button",
            icon: (0, _v1.jsx)(_v98.ArrowLeft, {}),
            size: "md",
            variant: "tertiary",
            onClick: () => _v4(!1)
          }), _v1.length > 1 ? (0, _v31.translate)({
            singular: "Move {NUM} items to {DESTINATION_WORKSPACE_NAME}",
            replacements: {
              NUM: _v1.length,
              DESTINATION_WORKSPACE_NAME: _v0
            },
            dictionary: {
              es: {
                singular: "Mover {NUM} elementos a {DESTINATION_WORKSPACE_NAME}"
              },
              "de-DE": {
                singular: "{NUM} Elemente nach {DESTINATION_WORKSPACE_NAME} verschieben"
              },
              "fr-FR": {
                singular: "Déplacer {NUM} éléments vers {DESTINATION_WORKSPACE_NAME}"
              },
              "ja-JP": {
                singular: "{NUM}件のアイテムを{DESTINATION_WORKSPACE_NAME}に移動"
              },
              "ko-KR": {
                singular: "{NUM}개 항목을 {DESTINATION_WORKSPACE_NAME}(으)로 이동"
              },
              "pt-BR": {
                singular: "Mover {NUM} itens para {DESTINATION_WORKSPACE_NAME}"
              },
              "zh-CN": {
                singular: "将 {NUM} 个项目移动到 {DESTINATION_WORKSPACE_NAME}"
              }
            }
          }) : (0, _v31.translate)({
            singular: "Move “{ITEM_NAME}” to {DESTINATION_WORKSPACE_NAME}",
            replacements: {
              ITEM_NAME: _v1[0].name,
              DESTINATION_WORKSPACE_NAME: _v0
            },
            dictionary: {
              es: {
                singular: "Mueva “{ITEM_NAME}” a {DESTINATION_WORKSPACE_NAME}"
              },
              "de-DE": {
                singular: "Verschieben Sie „{ITEM_NAME}“ zu {DESTINATION_WORKSPACE_NAME}"
              },
              "fr-FR": {
                singular: "Déplacez « {ITEM_NAME} » vers {DESTINATION_WORKSPACE_NAME}"
              },
              "ja-JP": {
                singular: "「{ITEM_NAME}」を{DESTINATION_WORKSPACE_NAME}に移動"
              },
              "ko-KR": {
                singular: "“{ITEM_NAME}”을(를) {DESTINATION_WORKSPACE_NAME}(으)로 이동"
              },
              "pt-BR": {
                singular: "Mova “{ITEM_NAME}” para {DESTINATION_WORKSPACE_NAME}"
              },
              "zh-CN": {
                singular: "将“{ITEM_NAME}”移至{DESTINATION_WORKSPACE_NAME}"
              }
            }
          })]
        })
      })
    }), (0, _v1.jsx)(_v14.ModalBody, {
      overflow: "auto",
      py: "0",
      children: (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        gap: "md",
        children: [(0, _v1.jsx)(_v56.Text, {
          variant: "body-md",
          children: (0, _v31.translate)({
            singular: "Moving content from {SOURCE_WORKSPACE_NAME} to {DESTINATION_WORKSPACE_NAME} will result in changes that cannot be reversed.",
            replacements: {
              SOURCE_WORKSPACE_NAME: _v5,
              DESTINATION_WORKSPACE_NAME: _v0
            },
            dictionary: {
              es: {
                singular: "Mover contenido de {SOURCE_WORKSPACE_NAME} a {DESTINATION_WORKSPACE_NAME} provocará cambios que no se pueden revertir."
              },
              "de-DE": {
                singular: "Das Verschieben von Inhalten von {SOURCE_WORKSPACE_NAME} nach {DESTINATION_WORKSPACE_NAME} wird zu Änderungen führen, die nicht rückgängig gemacht werden können."
              },
              "fr-FR": {
                singular: "Le déplacement du contenu de {SOURCE_WORKSPACE_NAME} vers {DESTINATION_WORKSPACE_NAME} entraînera des modifications irréversibles."
              },
              "ja-JP": {
                singular: "コンテンツを{SOURCE_WORKSPACE_NAME}から{DESTINATION_WORKSPACE_NAME}に移動すると、元に戻せない変更が発生します。"
              },
              "ko-KR": {
                singular: "{SOURCE_WORKSPACE_NAME}에서 {DESTINATION_WORKSPACE_NAME}(으)로 콘텐츠를 이동하면 되돌릴 수 없는 변경 사항이 발생합니다."
              },
              "pt-BR": {
                singular: "Mover o conteúdo de {SOURCE_WORKSPACE_NAME} para {DESTINATION_WORKSPACE_NAME} resultará em alterações que não podem ser desfeitas."
              },
              "zh-CN": {
                singular: "将内容从 {SOURCE_WORKSPACE_NAME} 移动到 {DESTINATION_WORKSPACE_NAME} 会导致无法逆转的更改。"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Box, {
          px: "lg",
          children: (0, _v1.jsxs)("ul", {
            style: {
              listStyleType: "disc"
            },
            children: [(0, _v1.jsx)(_v56.Text, {
              variant: "heading-xs",
              children: (0, _v1.jsx)("li", {
                children: (0, _v31.translate)({
                  singular: "Analytics will be permanently reset",
                  dictionary: {
                    es: {
                      singular: "Los análisis se restablecerán permanentemente"
                    },
                    "de-DE": {
                      singular: "Analytics wird dauerhaft zurückgesetzt"
                    },
                    "fr-FR": {
                      singular: "Les statistiques seront réinitialisées de manière permanente"
                    },
                    "ja-JP": {
                      singular: "分析は完全にリセットされます"
                    },
                    "ko-KR": {
                      singular: "분석이 영구적으로 초기화됩니다"
                    },
                    "pt-BR": {
                      singular: "As análises serão redefinidas permanentemente"
                    },
                    "zh-CN": {
                      singular: "分析数据将被永久重置"
                    }
                  }
                })
              })
            }), (0, _v1.jsxs)(_v56.Text, {
              variant: "body-md",
              children: [(0, _v1.jsx)("li", {
                children: (0, _v31.translate)({
                  singular: "Members of {SOURCE_WORKSPACE_NAME} will no longer have access to moved content",
                  replacements: {
                    SOURCE_WORKSPACE_NAME: _v5
                  },
                  dictionary: {
                    es: {
                      singular: "Los miembros de {SOURCE_WORKSPACE_NAME} ya no tendrán acceso al contenido que se movió"
                    },
                    "de-DE": {
                      singular: "Mitglieder von {SOURCE_WORKSPACE_NAME} werden keinen Zugriff mehr auf verschobene Inhalte haben"
                    },
                    "fr-FR": {
                      singular: "Les membres de {SOURCE_WORKSPACE_NAME} n'auront plus accès au contenu qui a été déplacé."
                    },
                    "ja-JP": {
                      singular: "{SOURCE_WORKSPACE_NAME}のメンバーは、移動されたコンテンツにアクセスできなくなります"
                    },
                    "ko-KR": {
                      singular: "{SOURCE_WORKSPACE_NAME} 멤버는 더 이상 이동된 콘텐츠에 액세스할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Os membros de {SOURCE_WORKSPACE_NAME} não terão mais acesso ao conteúdo movido"
                    },
                    "zh-CN": {
                      singular: "{SOURCE_WORKSPACE_NAME} 的成员将不再能够访问已移动的内容"
                    }
                  }
                })
              }), (0, _v1.jsx)("li", {
                children: (0, _v31.translate)({
                  singular: "{DESTINATION_WORKSPACE_NAME} defaults or restrictions may override existing settings",
                  replacements: {
                    DESTINATION_WORKSPACE_NAME: _v0
                  },
                  dictionary: {
                    es: {
                      singular: "Los valores predeterminados o restricciones de {DESTINATION_WORKSPACE_NAME} pueden anular la configuración existente"
                    },
                    "de-DE": {
                      singular: "Standardwerte oder Einschränkungen von {DESTINATION_WORKSPACE_NAME} können bestehende Einstellungen überschreiben"
                    },
                    "fr-FR": {
                      singular: "{DESTINATION_WORKSPACE_NAME} les paramètres par défaut ou les restrictions peuvent remplacer les paramètres existants"
                    },
                    "ja-JP": {
                      singular: "{DESTINATION_WORKSPACE_NAME}のデフォルトまたは制限により既存の設定が上書きされる可能性があります"
                    },
                    "ko-KR": {
                      singular: "{DESTINATION_WORKSPACE_NAME} 기본값 또는 제한 사항이 기존 설정을 재정의할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "{DESTINATION_WORKSPACE_NAME} padrões ou restrições podem substituir as configurações existentes"
                    },
                    "zh-CN": {
                      singular: "{DESTINATION_WORKSPACE_NAME} 默认值或限制可能会覆盖现有设置"
                    }
                  }
                })
              }), (0, _v1.jsx)("li", {
                children: (0, _v31.translate)({
                  singular: "Videos will be removed from any showcases, events, channels, or group",
                  dictionary: {
                    es: {
                      singular: "Los videos se eliminarán de cualquier presentación, evento, canal o grupo."
                    },
                    "de-DE": {
                      singular: "Videos werden aus allen Präsentationen, Veranstaltungen, Kanälen oder Gruppen entfernt"
                    },
                    "fr-FR": {
                      singular: "Les vidéos seront supprimées de l'ensemble des présentations, des événements, des chaînes ou des groupes"
                    },
                    "ja-JP": {
                      singular: "動画はショーケース、イベント、チャンネル、またはグループから削除されます"
                    },
                    "ko-KR": {
                      singular: "모든 쇼케이스, 이벤트, 채널 또는 그룹에서 동영상이 삭제됩니다."
                    },
                    "pt-BR": {
                      singular: "Os vídeos serão removidos de todas as vitrines, eventos, canais ou grupos"
                    },
                    "zh-CN": {
                      singular: "视频将从所有展示、活动、频道或群组中删除"
                    }
                  }
                })
              }), (0, _v1.jsx)("li", {
                children: (0, _v31.translate)({
                  singular: "Review links will break",
                  dictionary: {
                    es: {
                      singular: "Los vínculos de revisión se romperán"
                    },
                    "de-DE": {
                      singular: "Bewertungslinks werden unterbrochen"
                    },
                    "fr-FR": {
                      singular: "Les liens vers les commentaires ne fonctionneront plus"
                    },
                    "ja-JP": {
                      singular: "レビューのリンクが破損します"
                    },
                    "ko-KR": {
                      singular: "리뷰 링크가 끊어집니다."
                    },
                    "pt-BR": {
                      singular: "Os links de revisão serão quebrados"
                    },
                    "zh-CN": {
                      singular: "评论链接将失效"
                    }
                  }
                })
              })]
            })]
          })
        }), (0, _v1.jsx)(_v12.Link, {
          href: _v66,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "inline-primary",
          fontSize: "body-md",
          children: (0, _v31.translate)({
            singular: "Learn more about potential impact",
            dictionary: {
              es: {
                singular: "Obtenga más información sobre el impacto potencial"
              },
              "de-DE": {
                singular: "Erfahren Sie mehr über die möglichen Auswirkungen"
              },
              "fr-FR": {
                singular: "En savoir plus sur l'impact potentiel"
              },
              "ja-JP": {
                singular: "潜在的な影響についての詳細"
              },
              "ko-KR": {
                singular: "잠재적 영향에 대해 자세히 알아보세요."
              },
              "pt-BR": {
                singular: "Saiba mais sobre o impacto potencial"
              },
              "zh-CN": {
                singular: "了解有关潜在影响的更多信息"
              }
            }
          })
        })]
      })
    }), (0, _v1.jsx)(_v16.ModalFooter, {
      children: (0, _v1.jsxs)(_v10.HStack, {
        spacing: "0.5rem",
        justifySelf: "flex-end",
        children: [(0, _v1.jsx)(_v7.Button, {
          onClick: () => _v4(!1),
          variant: "tertiary",
          children: (0, _v31.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v7.Button, {
          onClick: _v3,
          isLoading: _v2,
          variant: "destructive",
          children: (0, _v31.translate)({
            singular: "Move anyway",
            dictionary: {
              es: {
                singular: "Mover de todas formas"
              },
              "de-DE": {
                singular: "Trotzdem verschieben"
              },
              "fr-FR": {
                singular: "Déplacer quand même"
              },
              "ja-JP": {
                singular: "このまま移動"
              },
              "ko-KR": {
                singular: "계속 이동"
              },
              "pt-BR": {
                singular: "Mover assim mesmo"
              },
              "zh-CN": {
                singular: "继续移动"
              }
            }
          })
        })]
      })
    })]
  });
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = ({
    activeFolderURI: _v0,
    feature: _v1,
    initialDestination: _v2,
    isActive: _v3,
    items: _v4,
    location: _v5,
    onMoveFailure: _v6,
    onMoveSuccess: _v7,
    setIsActive: _v8,
    teamOwnerId: _v9
  }) => {
    let _v10,
      _v11 = (0, _v2.useRouter)(),
      _v12 = (0, _v33.useAnalyticsEvent)(),
      _v13 = (0, _v90.usePageName)().toUpperCase(),
      _v14 = (0, _v23.useToast)(),
      _v15 = (_v10 = (0, _v3.useMemo)(() => _v4.some(_v0 => _v0.parentFolder?.isPrivateToUser), [_v4]), (0, _v3.useMemo)(() => !!_v10 && !_v4.some(_v0 => !_v0.parentFolder?.isPrivateToUser), [_v4, _v10]) ? "private" : _v10 ? "mixed" : "team"),
      [_v16, _v17] = (0, _v3.useState)(!1),
      [_v18, _v19] = (() => {
        let _v0 = (0, _v3.useRef)(null),
          [_v1, _v2] = (0, _v3.useState)(""),
          [_v3, _v4] = (0, _v3.useState)(""),
          _v5 = (0, _v3.useCallback)((_v0, _v1 = !0) => {
            (_v2(_v0), _v1) ? (_v0.current && (clearTimeout(_v0.current), _v0.current = null), _v0.current = setTimeout(() => {
              _v0.current && (clearTimeout(_v0.current), _v0.current = null), _v4(_v0);
            }, 300)) : _v4(_v0);
          }, []);
        return (0, _v3.useEffect)(() => () => {
          _v0.current && clearTimeout(_v0.current);
        }, []), [{
          raw: _v1,
          debounced: _v3
        }, _v5];
      })(),
      [_v20, _v21] = (0, _v3.useState)(!1),
      [_v22, _v23] = (0, _v3.useState)(!1),
      [_v24, _v25] = (0, _v3.useState)(!1),
      _v26 = (0, _v34.useViewer)(),
      _v27 = _v26?.user?.id,
      _v28 = _v27 === _v9,
      {
        capabilities: _v29
      } = (0, _v28.useCapability)(["canCreateRootFolders", "hasEnterprise"], _v9),
      {
        contentSpaceEnabled: _v30,
        notTeamGatedContentSpaceEnabled: _v31,
        loading: _v32
      } = (0, _v27.useContentSpaceEnabled)(_v9),
      _v33 = !_v32 && _v31 && !_v30,
      [_v34, {
        called: _v35,
        error: _v36,
        loading: _v37
      }] = (0, _v100.useMoveItem)(),
      _v38 = "private" === _v15 || _v28,
      _v39 = _v2 ?? (_v38 ? void 0 : "root"),
      [_v40, _v41] = (0, _v3.useState)(_v39),
      _v42 = _v29.hasEnterprise,
      _v43 = _v0 => {
        _v17(!1), _v19("", !1), _v41(_v0);
      },
      {
        workspaceUuid: _v44,
        organizationUuid: _v45
      } = (() => {
        let {
          data: _v0,
          ..._v1
        } = (0, _v101.useGetMePreferences)({
          select: [_v102.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID, _v102.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
        }, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        });
        return {
          organizationUuid: _v0?.[_v102.USER_PREFERENCE_ID.PREF_ORGANIZATION_UUID],
          workspaceUuid: _v0?.[_v102.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          ..._v1
        };
      })(),
      {
        data: _v46
      } = (0, _v30.useGetWorkspace)(() => _v44 ? {
        select: ["displayName", "uri"],
        where: {
          workspaceUuid: _v44
        }
      } : null),
      {
        data: _v47
      } = (0, _v29.useGetUserWorkspaces)(() => _v27 && _v45 ? {
        where: {
          userId: _v27
        },
        select: _v65,
        query: {
          orgUuid: _v45,
          permission: "manage"
        }
      } : null),
      [_v48, _v49] = (0, _v3.useState)({
        id: void 0,
        name: void 0,
        uuid: void 0
      });
    (0, _v3.useEffect)(() => {
      _v44 && !_v48.uuid && _v49({
        id: void 0,
        name: void 0,
        uuid: _v44
      });
    }, [_v44, _v48]);
    let _v50 = !!_v47?.data.some(_v0 => _v0.uri === _v46?.uri),
      _v51 = !!_v47?.data.length && _v50,
      _v52 = _v51 && !!_v44 && _v48.uuid !== _v44,
      _v53 = function ({
        isTeamOwner: _v0 = !1,
        activeFolderURI: _v1,
        canCreateRootFolders: _v2,
        isMovingBetweenWorkspaces: _v3 = !1,
        items: _v4,
        moveContentPrivacy: _v5,
        selectedDestination: _v6
      }) {
        return !!_v6 && ("root" === _v6 ? function ({
          canCreateRootFolders: _v0,
          isMovingBetweenWorkspaces: _v1 = !1,
          items: _v2
        }) {
          return !!_v0 && (!!_v2[0]?.parentFolder || !!_v1);
        }({
          canCreateRootFolders: _v2,
          isMovingBetweenWorkspaces: _v3,
          items: _v4
        }) : function ({
          isTeamOwner: _v0 = !1,
          activeFolderURI: _v1,
          items: _v2,
          moveContentPrivacy: _v3,
          selectedDestination: _v4
        }) {
          return !!_v47(_v4) && _v1 !== _v4.uri && (_v4?.isPrivateToUser && "private" !== _v3 ? _v0 : _v49(_v2) ? !(_v4.uri === _v2[0]?.parentFolder?.uri || _v53(_v2[0], _v4)) && !!_v4?.metadata?.interactions?.addSubfolder?.canAddSubfolders : !!_v4?.metadata?.interactions?.edit);
        }({
          isTeamOwner: _v0,
          activeFolderURI: _v1,
          items: _v4,
          moveContentPrivacy: _v5,
          selectedDestination: _v6
        }));
      }({
        isTeamOwner: _v28,
        activeFolderURI: _v0,
        canCreateRootFolders: !!_v29.canCreateRootFolders,
        isMovingBetweenWorkspaces: _v52,
        items: _v4,
        moveContentPrivacy: _v15,
        selectedDestination: _v40
      }),
      _v54 = (({
        activeFolderURI: _v0,
        items: _v1,
        selectedDestination: _v2
      }) => {
        let _v3 = _v67(),
          {
            capabilities: _v4
          } = (0, _v28.useCapability)(["canCreateRootFolders"], _v3);
        return !!_v2 && ("root" === _v2 ? _v4.canCreateRootFolders : !(_v49(_v1) && (_v0 === _v2.uri || _v53(_v1[0], _v2))) && !!_v2.metadata?.interactions?.addSubfolder?.canAddSubfolders);
      })({
        activeFolderURI: _v0,
        items: _v4,
        selectedDestination: _v40
      }),
      [_v55, _v56] = (0, _v3.useState)(!0),
      _v57 = void 0 !== _v40 && "root" !== _v40 && !!_v40?.settings?.embedPresetId && !!_v40?.settings?.isEmbedPresetInheritanceEnabled,
      _v58 = () => {
        _v49(_v4) ? _v12((0, _v89.genericClick)({
          copy: "Cancel",
          feature: _v1,
          location: _v5,
          name: "cancel_move_folder",
          page: _v13,
          target: null,
          target_path: null,
          type: "general"
        })) : _v12((0, _v89.genericClick)({
          copy: null,
          feature: _v1,
          location: _v5 === _v89.AnalyticsLocations.SVV_FILE_ACTIONS_MENU ? _v5 : "move_video_modal",
          name: "cancel_add_video_to_folder",
          page: _v13,
          target: null,
          target_path: null,
          type: "general"
        })), _v8(!1);
      },
      _v59 = () => {
        if (!_v53) return;
        if (_v52 && !_v24) return void _v25(!0);
        let _v0 = _v4.map(({
            uri: _v0
          }) => ({
            uri: _v0
          })),
          _v1 = _v51 && !!_v44 && _v48.uuid !== _v44;
        if (_v49(_v4)) {
          let _v0 = _v4[0],
            _v1 = _v0?.uri.split("/").pop();
          _v12((0, _v89.confirmMoveFolder)({
            name: "confirm_move_folder",
            copy: "Move",
            feature: _v1,
            page: _v13,
            location: _v5,
            folder_id: _v1 ? parseInt(_v1, 10) : null,
            is_my_videos: (!!_v30 && _v0.parentFolder?.isPrivateToUser) ?? !1,
            is_subfolder: !!_v0.parentFolder?.uri,
            target_object_location_type: _v0.parentFolder?.isPrivateToUser ? "private folder" : "team folder"
          }));
        }
        if ("root" === _v40) if (_v1) return void _v34({
          ownerId: _v48.uuid,
          moveToWorkspace: !0,
          targetItems: _v0
        });else return void _v34({
          ownerId: _v9,
          folderId: parseInt(_v4[0].parentFolder?.uri.split("/").pop()),
          moveToRoot: !0,
          targetItems: _v0
        });
        {
          let [,, _v0,, _v1] = _v40?.uri.split("/");
          _v1 ? _v34({
            ownerId: _v48.uuid,
            folderId: parseInt(_v1, 10),
            moveToWorkspace: !0,
            targetItems: _v0
          }) : _v34({
            ownerId: parseInt(_v0, 10),
            folderId: parseInt(_v1, 10),
            targetItems: _v0
          });
          let _v2 = {
            location: _v5 === _v89.AnalyticsLocations.SVV_FILE_ACTIONS_MENU ? _v5 : "move_video_modal",
            method: "move modal",
            path: window.location.pathname,
            folder_id: _v1 ? parseInt(_v1, 10) : null,
            folder_share_status: _v40?.privacy?.view === "anybody" ? "shared" : "not_shared",
            is_private_to_me: !!_v40?.isPrivateToUser,
            is_subfolder: !!_v40?.metadata?.connections?.parentFolder,
            parent_folder_id: _v40?.metadata?.connections?.parentFolder?.uri?.split("/").pop() ?? null
          };
          if (1 === _v4.length && !_v49(_v4)) {
            let _v0 = _v4[0],
              _v1 = _v0?.uri.split("/").pop(),
              _v2 = "video" === _v0.type,
              _v3 = "live_event" === _v0.type,
              _v4 = "";
            _v0.parentFolder && (_v4 = "folder", _v0.parentFolder.isPrivateToUser && (_v4 = _v30 ? "my_videos" : "private_to_me")), _v12((0, _v89.addVideoToFolder)({
              ..._v2,
              product: "Workflow",
              origin_folder_id: _v0.parentFolder?.uri.split("/").pop() ?? null,
              origin_type: _v4,
              clip_id: _v2 ? parseInt(_v1, 10) : null,
              live_event_id: _v3 ? _v1 : null,
              content_type: _v2 ? "video" : _v3 ? "live" : "file",
              is_my_videos: !!_v30 && !!_v40?.isPrivateToUser
            }));
          }
          if (_v4.length > 1 && !_v49(_v4)) {
            let _v0 = 0,
              _v1 = 0,
              _v2 = 0;
            _v4.forEach(_v0 => {
              "video" === _v0.type ? _v1++ : "live_event" === _v0.type && _v2++, _v0++;
            }), _v12((0, _v89.addItemsToFolder)({
              ..._v2,
              page: _v13,
              num_items: _v0,
              num_videos: _v1,
              num_live_events: _v2,
              num_folders: 0,
              destination: "folder"
            }));
          }
        }
      };
    return (0, _v3.useEffect)(() => {
      _v35 && !_v37 && (_v36 ? _v6 ? _v6({
        selectedDestination: _v40,
        items: _v4
      }) : _v14({
        title: _v36,
        variant: "warning",
        icon: (0, _v1.jsx)(_v24.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }),
        isClosable: !1
      }) : (_v7?.({
        selectedDestination: _v40,
        items: _v4,
        destinationWorkspaceId: _v48.id ?? null,
        destinationWorkspaceName: _v48.name ?? null
      }), _v8(!1)));
    }, [_v35, _v36, _v4, _v37, _v6, _v7, _v40, _v48, _v8]), (0, _v3.useEffect)(() => {
      if (_v35 && !_v37 && _v49(_v4) && _v11.pathname === _v102.Path.MVV && !_v36) {
        let _v0 = _v11.asPath.split("/"),
          _v1 = parseInt(_v0[2]),
          _v2 = _v0[4].split("?")[0],
          _v3 = _v4[0].uri.split("/").pop();
        _v1 !== _v48.id && _v2 === _v3 && _v11.push(_v102.Path.TeamLibrary);
      }
    }, [_v35, _v36, _v4, _v37, _v11, _v48]), (0, _v3.useEffect)(() => {
      _v18.debounced && (_v17(!1), _v41(void 0));
    }, [_v18.debounced]), (0, _v3.useEffect)(() => {
      _v56(!0);
    }, [_v40]), (0, _v1.jsxs)(_v13.Modal, {
      autoFocus: !1,
      isOpen: _v3,
      onClose: _v58,
      children: [(0, _v1.jsx)(_v18.ModalOverlay, {}), _v24 ? (0, _v1.jsx)(_v99, {
        destinationWorkspaceName: _v48.name ?? "",
        items: _v4,
        isLoading: _v37,
        onMoveConfirmation: _v59,
        setIsActive: _v25,
        sourceWorkspaceName: _v46?.displayName ?? ""
      }) : (0, _v1.jsxs)(_v15.ModalContent, {
        maxW: "32.5rem",
        minW: "0",
        children: [(0, _v1.jsx)(_v6.Box, {
          as: "span",
          whiteSpace: "nowrap",
          flexGrow: 1,
          position: "relative",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v17.ModalHeader, {
            paddingBottom: "4",
            children: (0, _v1.jsx)(_v9.Header, {
              size: "md",
              children: _v4.length > 1 ? (0, _v31.translate)({
                singular: "Move {NUM} items",
                replacements: {
                  NUM: _v4.length
                },
                dictionary: {
                  es: {
                    singular: "Mover {NUM} elementos"
                  },
                  "de-DE": {
                    singular: "{NUM} Elemente verschieben"
                  },
                  "fr-FR": {
                    singular: "Déplacer {NUM} éléments"
                  },
                  "ja-JP": {
                    singular: "{NUM} 件のアイテムを移動"
                  },
                  "ko-KR": {
                    singular: "{NUM}개 항목 이동"
                  },
                  "pt-BR": {
                    singular: "Mover {NUM} itens"
                  },
                  "zh-CN": {
                    singular: "移动 {NUM} 个项目"
                  }
                }
              }) : (0, _v1.jsxs)(_v8.Flex, {
                children: [(0, _v1.jsxs)(_v6.Box, {
                  children: [(0, _v31.translate)({
                    singular: "Move",
                    dictionary: {
                      es: {
                        singular: "Trasladar"
                      },
                      "de-DE": {
                        singular: "Verschieben"
                      },
                      "fr-FR": {
                        singular: "Déplacer"
                      },
                      "ja-JP": {
                        singular: "移動"
                      },
                      "ko-KR": {
                        singular: "이동"
                      },
                      "pt-BR": {
                        singular: "Mover"
                      },
                      "zh-CN": {
                        singular: "移动"
                      }
                    }
                  }), " “"]
                }), (0, _v1.jsx)(_v32.OverflowToolTip, {
                  labelToolTip: _v4[0].name,
                  children: (0, _v1.jsx)(_v6.Box, {
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    children: _v4[0].name
                  })
                }), (0, _v1.jsx)(_v6.Box, {
                  children: "”"
                })]
              })
            })
          })
        }), (0, _v1.jsxs)(_v14.ModalBody, {
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          gap: "1rem",
          minW: "0",
          overflowX: "hidden",
          overflowY: "auto",
          children: [(0, _v1.jsxs)(_v8.Flex, {
            direction: "column",
            gap: "3",
            children: [_v52 && !_v22 && (0, _v1.jsx)(_v4.Alert, {
              flexShrink: "0",
              status: "warning",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                children: (0, _v31.translate)({
                  singular: "Moving content to another workspace will reset analytics and may impact settings. {ARTICLE_LINK}Learn more{/ARTICLE_LINK}",
                  replacements: {
                    ARTICLE_LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
                      href: _v66,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      variant: "inline-primary",
                      fontSize: "inherit",
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Mover contenido a otro espacio de trabajo restablecerá los análisis y podría afectar la configuración. {ARTICLE_LINK}Más información{/ARTICLE_LINK}."
                    },
                    "de-DE": {
                      singular: "Das Verschieben von Inhalten in einen anderen Workspace wird die Analytics zurücksetzen und kann die Einstellungen beeinflussen. {ARTICLE_LINK}Mehr erfahren{/ARTICLE_LINK}"
                    },
                    "fr-FR": {
                      singular: "Déplacer du contenu vers un autre espace de travail réinitialisera les statistiques et pourrait affecter les paramètres. {ARTICLE_LINK}En savoir plus{/ARTICLE_LINK}"
                    },
                    "ja-JP": {
                      singular: "コンテンツを他のワークスペースに移動すると、分析はリセットされ、設定に影響を与える可能性があります。{ARTICLE_LINK}詳細はこちら{/ARTICLE_LINK}"
                    },
                    "ko-KR": {
                      singular: "콘텐츠를 다른 워크스페이스로 이동하면 분석이 초기화되고 설정에 영향을 미칠 수 있습니다. {ARTICLE_LINK}자세히 보기{/ARTICLE_LINK}"
                    },
                    "pt-BR": {
                      singular: "Transferir o conteúdo para outro espaço de trabalho redefinirá as análises e poderá afetar as configurações. {ARTICLE_LINK}Saiba mais{/ARTICLE_LINK}"
                    },
                    "zh-CN": {
                      singular: "将内容移动到另一个工作区将重置分析，并可能影响设置。{ARTICLE_LINK}了解更多{/ARTICLE_LINK}"
                    }
                  }
                })
              })
            }), !_v28 || _v20 || _v33 ? !_v33 && "team" !== _v15 && _v48(_v40) && (0, _v1.jsx)(_v4.Alert, {
              onClose: () => _v21(!0),
              flexShrink: "0",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                children: (0, _v31.translate)({
                  singular: "Moving content to the Team Library will make it accessible to team members. You won't be able to move it back to {PRIVATE_SPACE}.",
                  replacements: {
                    PRIVATE_SPACE: (0, _v31.translate)({
                      singular: "My library",
                      dictionary: {
                        es: {
                          singular: "Mi biblioteca"
                        },
                        "de-DE": {
                          singular: "Meine Bibliothek"
                        },
                        "fr-FR": {
                          singular: "Ma bibliothèque"
                        },
                        "ja-JP": {
                          singular: "マイ ライブラリ"
                        },
                        "ko-KR": {
                          singular: "내 라이브러리"
                        },
                        "pt-BR": {
                          singular: "Minha Biblioteca"
                        },
                        "zh-CN": {
                          singular: "我的视频库"
                        }
                      }
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Al trasladar el contenido a la biblioteca del equipo, los miembros del equipo tendrán acceso a este. No podrá volver a moverlo a {PRIVATE_SPACE}."
                    },
                    "de-DE": {
                      singular: "Durch das Verschieben von Inhalten in die Teambibliothek werden diese für Teammitglieder zugänglich. Sie können sie nicht mehr zurück nach {PRIVATE_SPACE} verschieben."
                    },
                    "fr-FR": {
                      singular: "En déplaçant le contenu vers la bibliothèque d'équipe, vous le rendrez accessible aux collaborateurs. Vous ne pourrez pas le déplacer à nouveau vers {PRIVATE_SPACE}."
                    },
                    "ja-JP": {
                      singular: "コンテンツをチームライブラリに移動すると、チームメンバーがそのコンテンツにアクセスできるようになります。コンテンツを{PRIVATE_SPACE}に戻すことはできません。"
                    },
                    "ko-KR": {
                      singular: "콘텐츠를 팀 라이브러리로 옮기면 팀원이 액세스할 수 있습니다. {PRIVATE_SPACE}(으)로 다시 이동할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Mover o conteúdo para a Biblioteca da Equipe o tornará acessível aos integrantes da equipe. Você não poderá movê-lo de volta para {PRIVATE_SPACE}."
                    },
                    "zh-CN": {
                      singular: "将内容移至团队视频库，以便团队成员访问。您无法将其移回{PRIVATE_SPACE}。"
                    }
                  }
                })
              })
            }) : "team" === _v15 && void 0 !== _v40 && !_v48(_v40) && (0, _v1.jsx)(_v4.Alert, {
              onClose: () => _v21(!0),
              flexShrink: "0",
              children: (0, _v1.jsx)(_v5.AlertDescription, {
                children: _v42 ? (0, _v31.translate)({
                  singular: "If this folder is shared or featured, moving it to My library will remove member access. Shared videos will remain accessible.",
                  dictionary: {
                    es: {
                      singular: "Si es una carpeta compartida o destacada, moverla a Mi biblioteca eliminará el acceso de los miembros. Los videos compartidos seguirán siendo accesibles."
                    },
                    "de-DE": {
                      singular: "Wenn dieser Ordner freigegeben oder mit Funktionen versehen ist, wird durch das Verschieben in „Meine Bibliothek“ der Mitgliederzugriff entfernt. Freigegebene Videos bleiben zugänglich."
                    },
                    "fr-FR": {
                      singular: "Si ce dossier est partagé ou mis à la une, le fait de le déplacer dans Ma bibliothèque supprimera l'accès des membres. Les vidéos partagées resteront accessibles."
                    },
                    "ja-JP": {
                      singular: "このフォルダーが共有または注目作品に設定されている場合、マイライブラリに移動するとメンバーのアクセス権が削除されます。共有動画には引き続きアクセスできます。"
                    },
                    "ko-KR": {
                      singular: "이 폴더가 공유되거나 추천되는 경우, 이를 내 라이브러리로 이동하면 회원의 접근 권한이 제거됩니다. 공유된 동영상에는 계속 액세스할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Se a pasta estiver compartilhada ou em destaque, movê-la para Minha Biblioteca removerá o acesso dos integrantes. No entanto, os vídeos compartilhados permanecerão acessíveis."
                    },
                    "zh-CN": {
                      singular: "如果这是共享文件夹或精选文件夹，将其移动到“我的视频库”将移除成员访问权限。共享的视频仍可访问。"
                    }
                  }
                }) : (0, _v31.translate)({
                  singular: "If this folder is shared, moving it to My library will remove member access. Shared videos will remain accessible",
                  dictionary: {
                    es: {
                      singular: "Si es una carpeta compartida, moverla a Mi biblioteca eliminará el acceso de los miembros. Los videos compartidos seguirán siendo accesibles"
                    },
                    "de-DE": {
                      singular: "Wenn dieser Ordner freigegeben ist, wird durch das Verschieben in „Meine Bibliothek“ der Mitgliederzugriff entfernt. Freigegebene Videos bleiben zugänglich"
                    },
                    "fr-FR": {
                      singular: "Si ce dossier est partagé, le fait de le déplacer dans Ma bibliothèque supprimera l'accès des membres. Les vidéos partagées resteront accessibles."
                    },
                    "ja-JP": {
                      singular: "このフォルダーが共有されている場合、マイライブラリに移動するとメンバーのアクセス権が削除されます。共有動画には引き続きアクセスできます。"
                    },
                    "ko-KR": {
                      singular: "이 폴더가 공유된 경우, 내 라이브러리로 이동하면 회원의 접근 권한이 제거됩니다. 공유된 동영상에는 계속 액세스할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Se a pasta estiver compartilhada, movê-la para Minha Biblioteca removerá o acesso dos integrantes. No entanto, os vídeos compartilhados permanecerão acessíveis"
                    },
                    "zh-CN": {
                      singular: "如果这是共享文件夹，将其移动到“我的视频库”将移除成员访问权限。共享的视频仍可访问"
                    }
                  }
                })
              })
            })]
          }), _v57 && (0, _v1.jsx)(_v4.Alert, {
            overflow: "visible",
            children: (0, _v1.jsx)(_v5.AlertDescription, {
              children: (0, _v31.translate)({
                singular: "This folder has a default embed preset applied that will apply to the folder being moved",
                dictionary: {
                  es: {
                    singular: "Esta carpeta tiene aplicada una configuración predeterminada de inserción que se aplicará a la carpeta que se está moviendo"
                  },
                  "de-DE": {
                    singular: "Dieser Ordner hat eine Standardeinstellung für die Einbettung, die auf den zu verschiebenden Ordner angewendet wird."
                  },
                  "fr-FR": {
                    singular: "Ce dossier possède un préréglage intégré par défaut qui s'appliquera au dossier déplacé."
                  },
                  "ja-JP": {
                    singular: "このフォルダーには、移動するフォルダーに適用されるデフォルトの埋め込みプリセットが適用されています"
                  },
                  "ko-KR": {
                    singular: "이 폴더에는 이동되는 폴더에 적용되는 기본 임베드 사전 설정이 적용되었습니다."
                  },
                  "pt-BR": {
                    singular: "Esta pasta tem uma predefinição de incorporação padrão aplicada que será aplicada à pasta que está sendo movida"
                  },
                  "zh-CN": {
                    singular: "此文件夹已应用默认嵌入预设，该预设将适用于正在移动的文件夹"
                  }
                }
              })
            })
          }), (!!_v40 || !!_v18.raw) && (0, _v1.jsxs)(_v20.InputGroup, {
            children: [(0, _v1.jsx)(_v21.InputLeftElement, {
              pointerEvents: "none",
              children: (0, _v1.jsx)(_v26.SearchMagnifier, {
                boxSize: "1.25rem"
              })
            }), (0, _v1.jsx)(_v19.Input, {
              placeholder: (0, _v31.translate)({
                singular: "Search folders",
                dictionary: {
                  es: {
                    singular: "Buscar en carpetas"
                  },
                  "de-DE": {
                    singular: "Ordner durchsuchen"
                  },
                  "fr-FR": {
                    singular: "Recherche dans les dossiers"
                  },
                  "ja-JP": {
                    singular: "検索フォルダー"
                  },
                  "ko-KR": {
                    singular: "폴더 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar Pastas"
                  },
                  "zh-CN": {
                    singular: "搜索文件夹"
                  }
                }
              }),
              onChange: _v0 => {
                _v19(_v0.target.value), _v0.target.value || _v41(_v39);
              },
              value: _v18.raw
            })]
          }), (0, _v1.jsx)(_v6.Box, {
            minW: "0",
            px: "0.75rem",
            w: "full",
            children: _v51 ? (0, _v1.jsx)(_v1.Fragment, {
              children: !_v18.raw && (0, _v1.jsx)(_v59, {
                selectedDestination: _v40,
                setSelectedDestination: _v43,
                setShowAllWorkspaces: _v23,
                showAllWorkspaces: _v22,
                showLibrarySelect: _v38,
                hasContentSpaceEnabled: !!_v30,
                isUnifiedLibrary: _v33,
                workspaceUuid: _v48.uuid
              })
            }) : (0, _v1.jsx)(_v1.Fragment, {
              children: !!_v40 && (0, _v1.jsx)(_v55, {
                selectedDestination: _v40,
                setSelectedDestination: _v43,
                showLibrarySelect: _v38,
                hasContentSpaceEnabled: !!_v30,
                isUnifiedLibrary: _v33
              })
            })
          }), _v16 && (0, _v1.jsx)(_v68, {
            selectedDestination: _v40,
            setSelectedDestination: _v43,
            setIsCreatingFolder: _v17,
            workspaceId: _v48.id
          }), (0, _v1.jsx)(_v6.Box, {
            h: "18.75rem",
            children: (0, _v1.jsx)(_v97, {
              canCreateFolder: !!_v54,
              currentWorkspaceUuid: _v44 ?? "",
              items: _v4,
              isCreatingFolder: _v16,
              location: _v5,
              onCreateFolder: () => _v17(!0),
              onSelectDestination: _v43,
              searchQuery: _v18.debounced,
              selectedDestination: _v40,
              selectedWorkspace: _v48,
              setIsCreateFolderButtonVisible: _v56,
              setSelectedWorkspace: _v49,
              setShowAllWorkspaces: _v23,
              showAllWorkspaces: _v22,
              showPrivateFolders: _v38,
              workspaces: _v47?.data
            })
          })]
        }), (0, _v1.jsx)(_v16.ModalFooter, {
          children: (0, _v1.jsxs)(_v8.Flex, {
            flexGrow: "1",
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v6.Box, {
              children: _v55 && _v54 && !_v16 && (0, _v1.jsx)(_v22.Tooltip, {
                label: (0, _v31.translate)({
                  singular: "Create folder",
                  dictionary: {
                    es: {
                      singular: "Crear carpeta"
                    },
                    "de-DE": {
                      singular: "Ordner erstellen"
                    },
                    "fr-FR": {
                      singular: "Créer un dossier"
                    },
                    "ja-JP": {
                      singular: "フォルダーを作成"
                    },
                    "ko-KR": {
                      singular: "폴더 만들기"
                    },
                    "pt-BR": {
                      singular: "Criar Pasta"
                    },
                    "zh-CN": {
                      singular: "创建文件夹"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v11.IconButton, {
                  "aria-label": (0, _v31.translate)({
                    singular: "Create folder",
                    dictionary: {
                      es: {
                        singular: "Crear carpeta"
                      },
                      "de-DE": {
                        singular: "Ordner erstellen"
                      },
                      "fr-FR": {
                        singular: "Créer un dossier"
                      },
                      "ja-JP": {
                        singular: "フォルダーを作成"
                      },
                      "ko-KR": {
                        singular: "폴더 만들기"
                      },
                      "pt-BR": {
                        singular: "Criar Pasta"
                      },
                      "zh-CN": {
                        singular: "创建文件夹"
                      }
                    }
                  }),
                  icon: (0, _v1.jsx)(_v25.FolderPlus, {}),
                  onClick: () => _v17(!0),
                  variant: "tertiary"
                })
              })
            }), (0, _v1.jsxs)(_v10.HStack, {
              spacing: "0.5rem",
              justifySelf: "flex-end",
              children: [(0, _v1.jsx)(_v7.Button, {
                onClick: _v58,
                variant: "tertiary",
                children: (0, _v31.translate)({
                  singular: "Cancel",
                  dictionary: {
                    es: {
                      singular: "Cancelar"
                    },
                    "de-DE": {
                      singular: "Abbrechen"
                    },
                    "fr-FR": {
                      singular: "Annuler"
                    },
                    "ja-JP": {
                      singular: "キャンセル"
                    },
                    "ko-KR": {
                      singular: "취소"
                    },
                    "pt-BR": {
                      singular: "Cancelar"
                    },
                    "zh-CN": {
                      singular: "取消"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.Button, {
                isDisabled: !_v53,
                isLoading: _v37,
                onClick: _v59,
                variant: "primary",
                children: (0, _v31.translate)({
                  singular: "Move",
                  dictionary: {
                    es: {
                      singular: "Trasladar"
                    },
                    "de-DE": {
                      singular: "Verschieben"
                    },
                    "fr-FR": {
                      singular: "Déplacer"
                    },
                    "ja-JP": {
                      singular: "移動"
                    },
                    "ko-KR": {
                      singular: "이동"
                    },
                    "pt-BR": {
                      singular: "Mover"
                    },
                    "zh-CN": {
                      singular: "移动"
                    }
                  }
                })
              })]
            })]
          })
        })]
      })]
    });
  };
  _v0.s(["MoveModal", 0, _v0 => (0, _v1.jsx)(_v103, {
    ..._v0
  })], 0);
}