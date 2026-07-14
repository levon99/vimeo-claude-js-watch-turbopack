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
    _v9 = _v0.i(0);
  let _v10 = _v0 => (0, _v1.jsx)(_v9.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 4a2 2 0 0 1 2-2h9a5 5 0 0 1 5 5v9a2 2 0 0 1-2 2V7a3 3 0 0 0-3-3H6Zm-4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8Zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6Z"
      }), (0, _v1.jsx)("path", {
        d: "M8 11.752c0-.583.605-.944 1.08-.645l3.569 2.243c.468.294.468 1.006 0 1.3L9.08 16.892c-.476.3-1.081-.06-1.081-.643v-4.497Z"
      })]
    })
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = ({
    icon: _v0,
    label: _v1,
    meta: _v2,
    trailing: _v3,
    centered: _v4 = !1
  }) => (0, _v1.jsxs)(_v4.Flex, {
    align: "center",
    gap: "3",
    minW: 0,
    h: "100%",
    ...(_v4 ? {
      justify: "center"
    } : {
      flex: "1 0 0"
    }),
    children: [(0, _v1.jsx)(_v4.Flex, {
      align: "center",
      flexShrink: 0,
      p: "2",
      borderRadius: "sm",
      bgColor: "fill-component-hover",
      children: (0, _v1.jsx)(_v3.Box, {
        display: "inline-flex",
        fontSize: "1.5rem",
        children: _v0
      })
    }), (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      justify: "center",
      minW: 0,
      ...(_v4 ? {} : {
        flex: "1 0 0"
      }),
      children: [(0, _v1.jsx)(_v12.Header, {
        size: "xs",
        color: "text-primary",
        whiteSpace: "nowrap",
        children: _v1
      }), (0, _v1.jsx)(_v13.Paragraph, {
        size: "sm",
        color: "text-secondary",
        children: _v2
      })]
    }), _v3]
  });
  _v0.s(["LibraryPanelItem", 0, _v14], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
    folders: _v0,
    videos: _v1
  }) => `${_v0} ${1 === _v0 ? "folder" : "folders"} • ${_v1} ${1 === _v1 ? "video" : "videos"}`;
  function _v18(_v0, _v1) {
    let _v2 = (0, _v15.useGetUserFoldersPrivateToMe)(() => _v1 && _v0 ? {
        select: ["metadata.connections.folders.total", "metadata.connections.videos.total"],
        where: {
          ownerId: _v0
        }
      } : null),
      _v3 = (0, _v16.useGetUserFoldersRoot)(() => _v1 && _v0 ? {
        select: ["type"],
        where: {
          userId: _v0
        },
        query: {
          filter: "folder",
          excludePersonalTeamFolder: !0,
          perPage: 1
        }
      } : null),
      _v4 = (0, _v16.useGetUserFoldersRoot)(() => _v1 && _v0 ? {
        select: ["type"],
        where: {
          userId: _v0
        },
        query: {
          filter: "video",
          excludePersonalTeamFolder: !0,
          perPage: 1
        }
      } : null),
      _v5 = _v2?.data?.metadata?.connections?.folders?.total,
      _v6 = _v2?.data?.metadata?.connections?.videos?.total,
      _v7 = _v3?.data?.total,
      _v8 = _v4?.data?.total,
      _v9 = {
        folders: _v5 ?? 0,
        videos: _v6 ?? 0
      },
      _v10 = {
        folders: _v7 ?? 0,
        videos: _v8 ?? 0
      };
    return {
      myLibrary: _v9,
      teamLibrary: _v10,
      combined: {
        folders: _v9.folders + _v10.folders,
        videos: _v9.videos + _v10.videos
      },
      isReady: void 0 !== _v5 && void 0 !== _v6 && void 0 !== _v7 && void 0 !== _v8
    };
  }
  _v0.s(["formatMeta", 0, _v17, "useLibraryMergeCounts", 0, _v18], 0), _v0.s(["LibraryMergeVisualization", 0, ({
    userId: _v0,
    enabled: _v1
  }) => {
    let _v2 = _v18(_v0, _v1);
    return (0, _v1.jsxs)(_v5.VStack, {
      align: "center",
      w: "100%",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "none",
        h: "68px",
        w: "100%",
        borderRadius: "md",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v4.Flex, {
          align: "center",
          flex: "1 0 0",
          minW: 0,
          h: "100%",
          px: "4",
          py: "md",
          bgColor: "fill-component",
          children: (0, _v1.jsx)(_v14, {
            icon: (0, _v1.jsx)(_v7.MyLibrary, {}),
            label: (0, _v11.translate)({
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
            }),
            meta: _v2.isReady ? _v17(_v2.myLibrary) : ""
          })
        }), (0, _v1.jsx)(_v4.Flex, {
          align: "center",
          flex: "1 0 0",
          minW: 0,
          h: "100%",
          px: "4",
          py: "md",
          bgColor: "fill-component-secondary",
          children: (0, _v1.jsx)(_v14, {
            icon: (0, _v1.jsx)(_v8.TeamLibrary, {}),
            label: (0, _v11.translate)({
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
            }),
            meta: _v2.isReady ? _v17(_v2.teamLibrary) : ""
          })
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        display: "inline-flex",
        color: "text-secondary",
        fontSize: "1rem",
        children: (0, _v1.jsx)(_v6.ArrowDown, {
          fill: "whiteAlpha.600"
        })
      }), (0, _v1.jsxs)(_v4.Flex, {
        position: "relative",
        align: "center",
        justify: "center",
        h: "68px",
        w: "280px",
        px: "md",
        py: "md",
        borderRadius: "md",
        bgColor: "vimeoBlueAlpha.300",
        children: [(0, _v1.jsx)(_v14, {
          centered: !0,
          icon: (0, _v1.jsx)(_v10, {}),
          label: (0, _v11.translate)({
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
          meta: _v2.isReady ? _v17(_v2.combined) : ""
        }), (0, _v1.jsx)(_v3.Box, {
          position: "absolute",
          top: "sm",
          right: "sm",
          children: (0, _v1.jsx)(_v2.Badge, {
            variant: "new",
            size: "sm",
            bgColor: "input-fill",
            borderColor: "input-fill",
            color: "text-primary",
            children: (0, _v11.translate)({
              singular: "New",
              dictionary: {
                es: {
                  singular: "Nuevo"
                },
                "de-DE": {
                  singular: "Neu"
                },
                "fr-FR": {
                  singular: "Nouveau"
                },
                "ja-JP": {
                  singular: "新規作成"
                },
                "ko-KR": {
                  singular: "신규"
                },
                "pt-BR": {
                  singular: "Novo"
                },
                "zh-CN": {
                  singular: "新"
                }
              }
            })
          })
        })]
      })]
    });
  }], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = () => () => void 0,
    _v27 = "lbom",
    _v28 = "lnom";
  _v0.s(["useLibraryMergeAnnouncement", 0, function () {
    let {
        settings: _v0
      } = (0, _v23.useOrionSettings)(),
      _v1 = (0, _v25.useViewer)(),
      _v2 = _v1?.user?.id,
      _v3 = _v1?.user?.teamUserPermissionLevel,
      _v4 = void 0 !== _v2 && (null == _v3 || _v3 === _v24.TeamUserPermissionLevel.Owner),
      {
        capabilities: _v5
      } = (0, _v21.useCapability)(["hasContentSpaceEnabled", "hasContentSpaceEnabledTeamGated"], _v2),
      _v6 = !!_v5?.hasContentSpaceEnabled && !_v5?.hasContentSpaceEnabledTeamGated,
      {
        data: _v7,
        mutate: _v8
      } = (0, _v22.useGetUserPreferences)(() => _v2 ? {
        where: {
          userId: _v2
        },
        select: [_v27, _v28]
      } : null),
      [_v9] = (0, _v22.usePatchUserPreferences)(),
      [_v10, _v11] = (0, _v19.useState)({
        becoming: !1,
        now: !1
      }),
      _v12 = (0, _v19.useSyncExternalStore)(_v26, () => !0, () => !1),
      _v13 = void 0 !== _v7,
      _v14 = !!_v7?.[_v27] || _v10.becoming,
      _v15 = !!_v7?.[_v28] || _v10.now,
      _v16 = (_v0 => {
        if (!_v0) return "";
        let _v1 = new Date(/^\d{8}$/.test(_v0) ? `${_v0.slice(0, 4)}-${_v0.slice(4, 6)}-${_v0.slice(6, 8)}` : _v0);
        return Number.isNaN(_v1.getTime()) ? "" : _v1.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC"
        });
      })(_v0.pre_libraries_merge_date),
      _v17 = null;
    _v12 && _v13 && _v4 && _v6 && (_v0.enable_content_space_team_gate && !_v15 ? _v17 = "now" : _v16 && !_v14 && (_v17 = "becoming"));
    let _v18 = (0, _v19.useRef)(!1);
    (0, _v19.useEffect)(() => {
      let _v0 = window.pendo;
      try {
        _v17 ? "function" == typeof _v0?.stopGuides && (_v0.stopGuides(), _v18.current = !0) : _v18.current && ("function" == typeof _v0?.startGuides && _v0.startGuides(), _v18.current = !1);
      } catch {}
    }, [_v17]);
    let _v19 = (0, _v19.useCallback)(_v0 => {
      if (_v11(_v0 => ({
        ..._v0,
        [_v0]: !0
      })), !_v2) return Promise.resolve();
      let _v1 = "now" === _v0 ? _v28 : _v27;
      return _v9({
        where: {
          userId: _v2
        },
        select: [_v1],
        variables: {
          [_v1]: 1
        }
      }).then(() => {
        _v8();
      });
    }, [_v2, _v9, _v8]);
    return {
      active: _v17,
      mergeDate: _v16,
      dismiss: _v19
    };
  }, "useSuppressNowOneAnnouncement", 0, function () {
    let [_v0] = (0, _v22.usePatchUserPreferences)(),
      {
        mutate: _v1
      } = (0, _v20.useSWRConfig)();
    return (0, _v19.useCallback)(async _v0 => {
      void 0 !== _v0 && (await _v0({
        where: {
          userId: _v0
        },
        select: [_v28],
        variables: {
          [_v28]: 1
        }
      }), await _v1(_v0 => "string" == typeof _v0 && _v0.startsWith(`/users/${_v0}/preferences`)));
    }, [_v0, _v1]);
  }], 0);
}