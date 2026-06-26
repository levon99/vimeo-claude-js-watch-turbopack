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
      gap: "2",
      align: "center",
      w: "100%",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "0.5",
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
        w: "100%",
        px: "5",
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
          top: "3",
          right: "3",
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
}