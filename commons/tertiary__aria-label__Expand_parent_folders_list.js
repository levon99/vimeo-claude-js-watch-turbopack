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
    _v23 = _v0.i(0);
  let _v24 = ({
      items: _v0
    }) => (0, _v1.jsxs)(_v19.Menu, {
      isLazy: !0,
      children: [(0, _v1.jsx)(_v20.MenuButton, {
        as: _v18.IconButton,
        size: "xs",
        variant: "tertiary",
        "aria-label": (0, _v12.translate)({
          singular: "Expand parent folders list",
          dictionary: {
            es: {
              singular: "Ampliar la lista de carpetas principales"
            },
            "de-DE": {
              singular: "Liste der übergeordneten Ordner erweitern"
            },
            "fr-FR": {
              singular: "Développer la liste des dossiers parents"
            },
            "ja-JP": {
              singular: "親フォルダーのリストを展開する"
            },
            "ko-KR": {
              singular: "상위 폴더 목록 확장"
            },
            "pt-BR": {
              singular: "Expandir a lista de pastas principais"
            },
            "zh-CN": {
              singular: "展开父文件夹列表"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v23.EllipsisH, {})
      }), (0, _v1.jsx)(_v22.MenuList, {
        children: (0, _v1.jsx)(_v25, {
          items: _v0
        })
      })]
    }),
    _v25 = ({
      items: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.map(({
        name: _v0,
        link: _v1
      }) => _v1 ? (0, _v1.jsx)(_v21.MenuItem, {
        children: (0, _v1.jsx)(_v17.default, {
          href: _v1,
          children: _v0
        })
      }, _v1) : (0, _v1.jsx)(_v21.MenuItem, {
        isDisabled: !0,
        children: _v0
      }, _v0))
    });
  var _v26 = _v0.i(0);
  let _v27 = ({
      name: _v0,
      link: _v1
    }) => _v1 ? (0, _v1.jsx)(_v26.Header, {
      size: "xs",
      color: "text-secondary",
      cursor: "pointer",
      fontWeight: 500,
      children: (0, _v1.jsx)(_v17.default, {
        href: _v1,
        children: _v0
      })
    }) : (0, _v1.jsx)(_v26.Header, {
      size: "xs",
      fontWeight: 500,
      children: _v0
    }),
    _v28 = ({
      pathItems: _v0
    }) => {
      let _v1 = _v0[0],
        _v2 = _v0.slice(1, _v0.length - 1);
      return (0, _v1.jsxs)(_v15.HStack, {
        gap: "0",
        flexWrap: "nowrap",
        children: [(0, _v1.jsx)(_v27, {
          name: _v1.name,
          link: _v0.length > 1 ? _v1.link : null
        }), _v0.length > 1 && (0, _v1.jsx)(_v16.ChevronRightSmall, {}), _v0.length > 3 && (0, _v1.jsx)(_v24, {
          items: _v2
        }), 3 === _v0.length && (0, _v1.jsx)(_v27, {
          name: _v0[1].name,
          link: _v0[1].link
        }), _v0.length > 2 && (0, _v1.jsx)(_v16.ChevronRightSmall, {}), _v0.length > 1 && (0, _v1.jsx)(_v27, {
          name: _v0[_v0.length - 1].name
        })]
      });
    };
  var _v29 = _v0.i(0);
  let _v30 = ({
    folderLink: _v0
  }) => (0, _v1.jsx)(_v29.EmptyStateBase, {
    buttonText: (0, _v12.translate)({
      singular: "Manage",
      dictionary: {
        es: {
          singular: "Administrar"
        },
        "de-DE": {
          singular: "Verwalten"
        },
        "fr-FR": {
          singular: "Gérer"
        },
        "ja-JP": {
          singular: "管理"
        },
        "ko-KR": {
          singular: "관리"
        },
        "pt-BR": {
          singular: "Gerenciar"
        },
        "zh-CN": {
          singular: "管理"
        }
      }
    }),
    description: (0, _v12.translate)({
      singular: "Add videos to this folder",
      dictionary: {
        es: {
          singular: "Agregar videos a esta carpeta"
        },
        "de-DE": {
          singular: "Videos zu diesem Ordner hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter des vidéos à ce dossier"
        },
        "ja-JP": {
          singular: "このフォルダーに動画を追加する"
        },
        "ko-KR": {
          singular: "이 폴더에 동영상 추가"
        },
        "pt-BR": {
          singular: "Adicionar vídeos a esta pasta"
        },
        "zh-CN": {
          singular: "将视频添加到此文件夹"
        }
      }
    })
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["FolderPermissionsList", 0, function ({
    teamUserId: _v0,
    ownerId: _v1,
    folderId: _v2,
    excludePersonalTeamFolder: _v3 = !0,
    emptyState: _v4
  }) {
    let _v5 = (0, _v7.useViewer)(),
      {
        capabilities: _v6
      } = (0, _v3.useCapability)(["coldStorageClips"], null != _v1 ? `/users/${_v1}` : null),
      {
        hasColdStorage: _v7
      } = (0, _v8.useUserHasColdStorageVideos)(),
      _v8 = _v5?.teamUser?.plainTextPermissionLevel,
      _v9 = _v1 === _v5?.user?.id || "Admin" === _v8,
      _v10 = !!_v6.coldStorageClips && _v9 || _v7 && _v9,
      {
        data: _v11
      } = (0, _v4.useGetUserProject)(() => _v1 && _v2 ? {
        where: {
          userId: _v1,
          projectId: _v2
        },
        query: {
          inspectedTeamUserUri: `/users/${_v1}/team_users/${_v0}`
        },
        select: _v9.FOLDER_FIELDS
      } : null),
      {
        showBreadcrumb: _v12,
        buildBreadcrumbsPath: _v13
      } = (() => {
        let {
            personalTeamFolderUri: _v0
          } = (0, _v11.useContext)(_v13.TeamUserInfoState),
          {
            query: {
              folder_id: _v1
            },
            pathname: _v2
          } = (0, _v10.useRouter)(),
          _v3 = "shared-resources";
        return _v2.includes(_v9.ROUTE_SEGMENT.TEAM_LIBRARY) && (_v3 = _v9.ROUTE_SEGMENT.TEAM_LIBRARY), _v2.includes(_v9.ROUTE_SEGMENT.MY_LIBRARY) && (_v3 = _v9.ROUTE_SEGMENT.MY_LIBRARY), {
          buildBreadcrumbsPath: (_v0, _v1) => {
            if (!_v1) return [{
              name: _v9.breadcrumbNameMap[_v3] ?? (0, _v12.translate)({
                singular: "All items",
                dictionary: {
                  es: {
                    singular: "Todos los artículos"
                  },
                  "de-DE": {
                    singular: "Alle Elemente"
                  },
                  "fr-FR": {
                    singular: "Tous les éléments"
                  },
                  "ja-JP": {
                    singular: "すべてのアイテム"
                  },
                  "ko-KR": {
                    singular: "모든 항목"
                  },
                  "pt-BR": {
                    singular: "Todos os itens"
                  },
                  "zh-CN": {
                    singular: "所有项目"
                  }
                }
              }),
              link: (0, _v14.getSharedResourceLink)(_v0)
            }];
            let _v2 = [];
            for (let _v0 of _v1?.metadata.connections.ancestorPath) {
              let {
                name: _v0,
                uri: _v1
              } = _v0;
              (_v3 !== _v9.ROUTE_SEGMENT.MY_LIBRARY || _v1 !== _v0) && _v2.push({
                name: _v0 ?? "",
                link: (0, _v14.getSharedResourceLink)(_v0, _v1)
              });
            }
            let _v3 = [{
              name: _v9.breadcrumbNameMap[_v3] ?? (0, _v12.translate)({
                singular: "All items",
                dictionary: {
                  es: {
                    singular: "Todos los artículos"
                  },
                  "de-DE": {
                    singular: "Alle Elemente"
                  },
                  "fr-FR": {
                    singular: "Tous les éléments"
                  },
                  "ja-JP": {
                    singular: "すべてのアイテム"
                  },
                  "ko-KR": {
                    singular: "모든 항목"
                  },
                  "pt-BR": {
                    singular: "Todos os itens"
                  },
                  "zh-CN": {
                    singular: "所有项目"
                  }
                }
              }),
              link: (0, _v14.getSharedResourceLink)(_v0)
            }];
            return (_v3 = [..._v3, ..._v2.reverse()]).push({
              name: _v1.name,
              link: (0, _v14.getSharedResourceLink)(_v0, _v1.uri)
            }), _v3;
          },
          showBreadcrumb: _v1
        };
      })(),
      _v14 = _v12 && _v13(_v0, _v11),
      {
        data: _v15,
        error: _v16,
        size: _v17,
        setSize: _v18,
        isLoading: _v19
      } = (0, _v5.useGetUserProjectItemsInfinite)(() => _v1 && _v2 ? {
        where: {
          userId: _v1,
          projectId: _v2
        },
        select: _v9.ITEM_FIELDS,
        query: {
          perPage: _v9.ITEMS_PER_PAGE,
          excludePersonalTeamFolder: !!_v3,
          inspectedTeamUserUri: `/users/${_v1}/team_users/${_v0}`,
          liveEventType: "all",
          includeColdStorageClips: _v10
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null),
      {
        isLoadingMore: _v20,
        isDone: _v21
      } = (0, _v14.getLoadMoreStates)(_v15, _v17, _v16),
      _v22 = (0, _v14.useFlattenedResponse)(_v15)?.map((0, _v14.itemsAdapter)(_v0)) ?? [];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.Box, {
        paddingLeft: (0, _v2.rem)(8),
        children: _v12 && !!_v14 && (0, _v1.jsx)(_v28, {
          pathItems: _v14
        })
      }), (0, _v1.jsx)(_v32.StateManager, {
        items: _v22,
        isLoading: _v19,
        emptyState: _v4 ?? (0, _v1.jsx)(_v30, {
          folderLink: _v11?.manageLink || ""
        }),
        error: _v16
      }), (0, _v1.jsx)(_v31.LoadMore, {
        canLoadMore: !_v21,
        isLoadingMore: !!_v20,
        onClick: () => {
          _v18(_v17 + 1);
        }
      })]
    });
  }], 0);
}