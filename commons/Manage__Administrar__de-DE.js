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
    _v16 = _v0.i(0);
  let _v17 = ({
    folderLink: _v0
  }) => (0, _v1.jsx)(_v16.EmptyStateBase, {
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
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["FolderPermissionsList", 0, function ({
    teamUserId: _v0,
    ownerId: _v1,
    folderId: _v2,
    excludePersonalTeamFolder: _v3 = !0,
    emptyState: _v4,
    breadcrumbName: _v5
  }) {
    let _v6 = (0, _v8.useViewer)(),
      {
        capabilities: _v7
      } = (0, _v4.useCapability)(["coldStorageClips"], null != _v1 ? `/users/${_v1}` : null),
      {
        hasColdStorage: _v8
      } = (0, _v9.useUserHasColdStorageVideos)(),
      _v9 = _v6?.teamUser?.plainTextPermissionLevel,
      _v10 = _v1 === _v6?.user?.id || "Admin" === _v9,
      _v11 = !!_v7.coldStorageClips && _v10 || _v8 && _v10,
      {
        data: _v12
      } = (0, _v5.useGetUserProject)(() => _v1 && _v2 ? {
        where: {
          userId: _v1,
          projectId: _v2
        },
        query: {
          inspectedTeamUserUri: `/users/${_v1}/team_users/${_v0}`
        },
        select: _v10.FOLDER_FIELDS
      } : null),
      [_v13, _v14] = (0, _v2.useState)(""),
      {
        showBreadcrumb: _v15,
        buildBreadcrumbsPath: _v16
      } = (() => {
        let {
            personalTeamFolderUri: _v0
          } = (0, _v2.useContext)(_v13.TeamUserInfoState),
          {
            query: {
              folder_id: _v1
            },
            pathname: _v2
          } = (0, _v11.useRouter)(),
          _v3 = "shared-resources";
        return _v2.includes(_v10.ROUTE_SEGMENT.TEAM_LIBRARY) && (_v3 = _v10.ROUTE_SEGMENT.TEAM_LIBRARY), _v2.includes(_v10.ROUTE_SEGMENT.MY_LIBRARY) && (_v3 = _v10.ROUTE_SEGMENT.MY_LIBRARY), {
          buildBreadcrumbsPath: (_v0, _v1) => {
            if (!_v1) return [{
              name: _v10.breadcrumbNameMap[_v3] ?? (0, _v12.translate)({
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
              (_v3 !== _v10.ROUTE_SEGMENT.MY_LIBRARY || _v1 !== _v0) && _v2.push({
                name: _v0 ?? "",
                link: (0, _v14.getSharedResourceLink)(_v0, _v1)
              });
            }
            let _v3 = [{
              name: _v10.breadcrumbNameMap[_v3] ?? (0, _v12.translate)({
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
      _v17 = _v15 && _v16(_v0, _v12),
      {
        data: _v18,
        error: _v19,
        size: _v20,
        setSize: _v21,
        isLoading: _v22
      } = (0, _v6.useGetUserProjectItemsInfinite)(() => _v1 && _v2 ? {
        where: {
          userId: _v1,
          projectId: _v2
        },
        select: _v10.ITEM_FIELDS,
        query: {
          perPage: _v10.ITEMS_PER_PAGE,
          excludePersonalTeamFolder: !!_v3,
          inspectedTeamUserUri: `/users/${_v1}/team_users/${_v0}`,
          liveEventType: "all",
          includeColdStorageClips: _v11
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null),
      {
        isLoadingMore: _v23,
        isDone: _v24
      } = (0, _v14.getLoadMoreStates)(_v18, _v20, _v19),
      _v25 = (0, _v14.useFlattenedResponse)(_v18)?.map((0, _v14.itemsAdapter)(_v0)) ?? [],
      _v26 = _v13 ? _v25.filter(_v0 => _v0.name.toLowerCase().includes(_v13.toLowerCase())) : _v25;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v18.FolderSearch, {
        searchTerm: _v13,
        onSearch: _v14
      }), (0, _v1.jsx)(_v7.Box, {
        paddingLeft: (0, _v3.rem)(8),
        children: !!(_v15 ?? _v5) && (0, _v1.jsx)(_v15.Breadcrumbs, {
          pathItems: Array.isArray(_v17) ? _v17 : [{
            name: _v5 ?? ""
          }]
        })
      }), (0, _v1.jsx)(_v20.StateManager, {
        items: _v26,
        isLoading: _v22,
        emptyState: _v4 ?? (0, _v1.jsx)(_v17, {
          folderLink: _v12?.manageLink ?? ""
        }),
        error: _v19
      }), (0, _v1.jsx)(_v19.LoadMore, {
        canLoadMore: !_v24,
        isLoadingMore: !!_v23,
        onClick: () => {
          _v21(_v20 + 1);
        }
      })]
    });
  }], 0);
}