{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v2.default.div.withConfig({
    displayName: "Folder__FolderContainer",
    componentId: "sc-ff018d2b-0"
  })`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${({
    folderColor: _v0
  }) => _v0 || _v4.bokehTheme.colors.gray["300"]};
`;
  _v0.s(["default", 0, ({
    title: _v0,
    color: _v1
  }) => (0, _v1.jsx)(_v5, {
    folderColor: _v1,
    children: (0, _v1.jsx)(_v3.Text, {
      variant: "heading-xs",
      color: _v4.bokehTheme.colors.white,
      children: _v0
    })
  })], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v7.forwardRef)(function (_v0, _v1) {
      return _v7.default.createElement("svg", (0, _v6.c)({
        viewBox: "0 0 20 18",
        ref: _v1
      }, _v0), _v7.default.createElement("path", {
        d: "M18 18H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8l1.33 3H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM2 2v14h16V5h-8L8.7 2z",
        fill: "#1a2e3b"
      }));
    });
  _v0.s(["Folder", 0, _v8], 0);
  let _v9 = (0, _v2.default)(_v8).withConfig({
    displayName: "FolderIcon",
    componentId: "sc-e761af13-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  _v0.s(["default", 0, _v9], 0);
  var _v10 = _v0.i(0);
  let _v11 = (0, _v2.default)(_v10.Lock).withConfig({
    displayName: "LockIcon",
    componentId: "sc-f50a552-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  _v0.s(["default", 0, _v11], 0);
  var _v12 = _v0.i(0),
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
    _v27 = _v0.i(0);
  let _v28 = _v0 => (0, _v1.jsx)(_v27.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm14-1a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 17.586V12a1 1 0 0 1 1-1ZM3 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
      fill: "currentColor"
    })
  });
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = (0, _v2.default)(_v32.InspectorPaddedRow).withConfig({
      displayName: "MediaLibraryFilters.style__FiltersRow",
      componentId: "sc-e1bd3e1d-0"
    })`
  display: flex;
  position: relative;
  gap: 8px;
  margin-bottom: 8px;
  margin-top: 0;
  align-items: center;
`,
    _v34 = _v2.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__Navigation",
      componentId: "sc-e1bd3e1d-1"
    })`
  display: flex;
  align-items: center;
`,
    _v35 = _v2.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__SearchContainer",
      componentId: "sc-e1bd3e1d-2"
    })`
  display: flex;
  align-items: center;
  width: 100%;
`,
    _v36 = _v2.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__SearchButtonContainer",
      componentId: "sc-e1bd3e1d-3"
    })`
  display: flex;
  flex: 0;
  justify-content: end;
  position: relative;
  left: 1px;
`;
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = "Last modified",
    _v42 = "First modified",
    _v43 = "Last added",
    _v44 = "First added",
    _v45 = "Title, A to Z",
    _v46 = "Title, Z to A",
    _v47 = "Relevance",
    _v48 = {
      [_v41]: {
        sort: _v40.MediaLibrarySortingMethod.MODIFIED,
        direction: _v39.MediaLibraryDirectionMethod.DESCENDING
      },
      [_v42]: {
        sort: _v40.MediaLibrarySortingMethod.MODIFIED,
        direction: _v39.MediaLibraryDirectionMethod.ASCENDING
      },
      [_v43]: {
        sort: _v40.MediaLibrarySortingMethod.ADDED,
        direction: _v39.MediaLibraryDirectionMethod.DESCENDING
      },
      [_v44]: {
        sort: _v40.MediaLibrarySortingMethod.ADDED,
        direction: _v39.MediaLibraryDirectionMethod.ASCENDING
      },
      [_v45]: {
        sort: _v40.MediaLibrarySortingMethod.ALPHABETICAL,
        direction: _v39.MediaLibraryDirectionMethod.ASCENDING
      },
      [_v46]: {
        sort: _v40.MediaLibrarySortingMethod.ALPHABETICAL,
        direction: _v39.MediaLibraryDirectionMethod.DESCENDING
      },
      [_v47]: {
        sort: _v40.MediaLibrarySortingMethod.DEFAULT,
        direction: _v39.MediaLibraryDirectionMethod.ASCENDING
      }
    },
    _v49 = {
      [`${_v40.MediaLibrarySortingMethod.MODIFIED}_${_v39.MediaLibraryDirectionMethod.DESCENDING}`]: _v41,
      [`${_v40.MediaLibrarySortingMethod.MODIFIED}_${_v39.MediaLibraryDirectionMethod.ASCENDING}`]: _v42,
      [`${_v40.MediaLibrarySortingMethod.ADDED}_${_v39.MediaLibraryDirectionMethod.DESCENDING}`]: _v43,
      [`${_v40.MediaLibrarySortingMethod.ADDED}_${_v39.MediaLibraryDirectionMethod.ASCENDING}`]: _v44,
      [`${_v40.MediaLibrarySortingMethod.ALPHABETICAL}_${_v39.MediaLibraryDirectionMethod.ASCENDING}`]: _v45,
      [`${_v40.MediaLibrarySortingMethod.ALPHABETICAL}_${_v39.MediaLibraryDirectionMethod.DESCENDING}`]: _v46,
      [`${_v40.MediaLibrarySortingMethod.DEFAULT}_${_v39.MediaLibraryDirectionMethod.ASCENDING}`]: _v47
    },
    _v50 = (0, _v2.default)(_v20.SelectItem).withConfig({
      displayName: "SelectItemWithIcon.style__SelectItemWithIcon",
      componentId: "sc-b67a5eb7-0"
    })`
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;

    path {
      fill: currentColor;
  }
`,
    _v51 = {
      [_v38.MediaLibraryItemsType.LIBRARY]: (0, _v1.jsx)(_v30.VideosStack, {
        width: "18px",
        height: "18px"
      }),
      [_v38.MediaLibraryItemsType.TEAM_LIBRARY]: (0, _v1.jsx)(_v29.TeamLibrary, {
        width: "18px",
        height: "18px"
      }),
      [_v38.MediaLibraryItemsType.MY_LIBRARY]: (0, _v1.jsx)(_v25.MyLibrary, {
        width: "18px",
        height: "18px"
      })
    };
  _v0.s(["default", 0, ({
    onChange: _v0,
    selectedItemType: _v1,
    selectedDirection: _v2,
    selectedSort: _v3,
    keywords: _v4,
    selectedFolder: _v5,
    parentFolders: _v6,
    navigateBack: _v7,
    hasContentSpaceEnabled: _v8
  }) => {
    let [_v9, _v10] = (0, _v7.useState)(!1),
      _v11 = _v8 ? _v38.MediaLibraryItemsType.TEAM_LIBRARY : _v38.MediaLibraryItemsType.LIBRARY,
      _v12 = _v38.MediaLibraryItemsType.MY_LIBRARY,
      _v13 = (0, _v7.useCallback)(_v0 => {
        let {
          sort: _v1,
          direction: _v2
        } = _v48[_v0];
        _v0("sort", _v1), _v0("direction", _v2);
      }, [_v0]),
      _v14 = (0, _v7.useMemo)(() => ({
        value: _v0,
        children: _v1
      }) => (0, _v1.jsxs)(_v16.MenuItem, {
        onClick: () => _v13(_v0),
        justifyContent: "space-between",
        children: [_v1, _v49[`${_v3}_${_v2}`] === _v0 && (0, _v1.jsx)(_v21.Checkmark, {})]
      }), [_v13, _v2, _v3]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v33, {
        children: [!_v9 && (0, _v1.jsx)(_v1.Fragment, {
          children: _v5 ? (0, _v1.jsxs)(_v34, {
            children: [_v6.length > 1 ? (0, _v1.jsxs)(_v14.Menu, {
              children: [(0, _v1.jsx)(_v15.MenuButton, {
                children: (0, _v1.jsx)(_v13.IconButton, {
                  variant: "tertiary",
                  icon: (0, _v1.jsx)(_v22.ChevronLeftSmall, {}),
                  "data-testid": "media-library-back-button",
                  mr: 8,
                  "aria-label": "media-library-back-button"
                })
              }), (0, _v1.jsx)(_v17.MenuList, {
                children: _v6.map((_v0, _v1) => {
                  var _v2;
                  return (0, _v1.jsx)(_v16.MenuItem, {
                    style: {
                      padding: "9px 12px"
                    },
                    onClick: () => _v7(_v0.id),
                    icon: (_v2 = !!_v0.isPrivate, _v1 === _v6.length - 1 ? _v51[_v1] : _v2 ? (0, _v1.jsx)(_v24.Lock, {
                      width: "18px",
                      height: "18px"
                    }) : (0, _v1.jsx)(_v23.Folder, {
                      width: "18px",
                      height: "18px"
                    })),
                    children: _v0.title
                  }, _v0.id);
                })
              })]
            }) : (0, _v1.jsx)(_v13.IconButton, {
              variant: "tertiary",
              onClick: () => _v7(),
              icon: (0, _v1.jsx)(_v22.ChevronLeftSmall, {}),
              "data-testid": "media-library-back-button",
              "aria-label": "media-library-back-button"
            }), (0, _v1.jsx)(_v3.Text, {
              variant: "heading-xs",
              children: _v5?.title
            })]
          }) : _v37.default.privateToMeFolderUri ? (0, _v1.jsx)(_v20.Select, {
            style: {
              minWidth: "185px",
              flex: 1
            },
            onValueChange: _v0 => _v0("itemsType", _v0.value[0]),
            placeholder: _v11,
            items: [_v11, _v12].map(_v0 => ({
              value: _v0,
              label: (0, _v12.default)(_v0)
            })),
            "data-testid": "media-inspector-select-filter",
            size: "sm",
            children: _v0 => (0, _v1.jsxs)(_v50, {
              children: [_v51[_v0.value], " ", (0, _v12.default)(_v0.value)]
            })
          }) : (0, _v1.jsxs)(_v34, {
            children: [(0, _v1.jsx)(_v13.IconButton, {
              variant: "tertiary",
              icon: _v51[_v11],
              "data-testid": "media-library-back-button",
              "aria-label": "media-library-back-button"
            }), (0, _v1.jsx)(_v3.Text, {
              variant: "heading-xs",
              children: (0, _v12.default)(_v11)
            })]
          })
        }), _v9 ? (0, _v1.jsxs)(_v35, {
          children: [(0, _v1.jsx)(_v13.IconButton, {
            "data-testid": "media-library-search-button",
            variant: "tertiary",
            onClick: () => {
              _v10(!1), _v0("keywords", "");
            },
            mr: 8,
            icon: (0, _v1.jsx)(_v22.ChevronLeftSmall, {}),
            "aria-label": "media-library-search-button"
          }), (0, _v1.jsx)(_v19.Search, {
            placeholder: `${(0, _v31.translate)({
              singular: "Search in",
              dictionary: {
                es: {
                  singular: "Buscar en"
                },
                "de-DE": {
                  singular: "Suchen in"
                },
                "fr-FR": {
                  singular: "Rechercher dans"
                },
                "ja-JP": {
                  singular: "検索対象："
                },
                "ko-KR": {
                  singular: "검색 위치"
                },
                "pt-BR": {
                  singular: "Pesquisar em"
                },
                "zh-CN": {
                  singular: "搜索范围"
                }
              }
            })} ${_v5?.title || _v1}`,
            style: {
              width: "100%"
            },
            variant: "minimal",
            size: "sm",
            value: _v4,
            onChange: _v0 => _v0("keywords", _v0.target.value),
            "data-testid": "media-library-search-filter",
            autoFocus: !0
          })]
        }) : (0, _v1.jsx)(_v36, {
          children: (0, _v1.jsx)(_v13.IconButton, {
            "data-testid": "media-library-search-button",
            variant: "tertiary",
            onClick: () => _v10(!0),
            icon: (0, _v1.jsx)(_v26.SearchMagnifier, {}),
            "aria-label": "media-library-search-button"
          })
        }), (0, _v1.jsxs)(_v14.Menu, {
          children: [(0, _v1.jsx)(_v15.MenuButton, {
            as: _v13.IconButton,
            icon: (0, _v1.jsx)(_v28, {}),
            "data-testid": "media-library-sort-button",
            "aria-label": "media-library-sort-button",
            variant: "tertiary"
          }), (0, _v1.jsx)(_v18.Portal, {
            children: (0, _v1.jsxs)(_v17.MenuList, {
              width: "157px",
              children: [(0, _v1.jsx)(_v14, {
                value: _v41,
                children: (0, _v31.translate)({
                  singular: "Last modified",
                  dictionary: {
                    es: {
                      singular: "Última modificación"
                    },
                    "de-DE": {
                      singular: "Zuletzt geändert"
                    },
                    "fr-FR": {
                      singular: "Modifiées en dernier"
                    },
                    "ja-JP": {
                      singular: "最終変更日"
                    },
                    "ko-KR": {
                      singular: "마지막 수정"
                    },
                    "pt-BR": {
                      singular: "Modificado por último"
                    },
                    "zh-CN": {
                      singular: "最后修改"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v42,
                children: (0, _v31.translate)({
                  singular: "First modified",
                  dictionary: {
                    es: {
                      singular: "Primera modificación"
                    },
                    "de-DE": {
                      singular: "Erstmals geändert"
                    },
                    "fr-FR": {
                      singular: "Modifiées en premier"
                    },
                    "ja-JP": {
                      singular: "初回変更日"
                    },
                    "ko-KR": {
                      singular: "최초 수정"
                    },
                    "pt-BR": {
                      singular: "Modificado primeiro"
                    },
                    "zh-CN": {
                      singular: "首次修改"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v43,
                children: (0, _v31.translate)({
                  singular: "Last added",
                  dictionary: {
                    es: {
                      singular: "Último agregado"
                    },
                    "de-DE": {
                      singular: "Zuletzt hinzugefügt"
                    },
                    "fr-FR": {
                      singular: "Ajoutées en dernier"
                    },
                    "ja-JP": {
                      singular: "最終追加日"
                    },
                    "ko-KR": {
                      singular: "마지막 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionado por último"
                    },
                    "zh-CN": {
                      singular: "最后添加"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v44,
                children: (0, _v31.translate)({
                  singular: "First added",
                  dictionary: {
                    es: {
                      singular: "Primer agregado"
                    },
                    "de-DE": {
                      singular: "Erstmals hinzugefügt"
                    },
                    "fr-FR": {
                      singular: "Ajoutées en premier"
                    },
                    "ja-JP": {
                      singular: "初回追加日"
                    },
                    "ko-KR": {
                      singular: "최초 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionado primeiro"
                    },
                    "zh-CN": {
                      singular: "首次添加"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v45,
                children: (0, _v31.translate)({
                  singular: "Title, A to Z",
                  dictionary: {
                    es: {
                      singular: "Título, de A a Z"
                    },
                    "de-DE": {
                      singular: "Titel, A bis Z"
                    },
                    "fr-FR": {
                      singular: "Titre, de A à Z"
                    },
                    "ja-JP": {
                      singular: "タイトル、A〜Z"
                    },
                    "ko-KR": {
                      singular: "제목 (오름차순)"
                    },
                    "pt-BR": {
                      singular: "Título, A a Z"
                    },
                    "zh-CN": {
                      singular: "标题，A 到 Z"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v46,
                children: (0, _v31.translate)({
                  singular: "Title, Z to A",
                  dictionary: {
                    es: {
                      singular: "Título, de Z a A"
                    },
                    "de-DE": {
                      singular: "Titel, Z bis A"
                    },
                    "fr-FR": {
                      singular: "Titre, de Z à A"
                    },
                    "ja-JP": {
                      singular: "タイトル、Z〜A"
                    },
                    "ko-KR": {
                      singular: "제목 (내림차순)"
                    },
                    "pt-BR": {
                      singular: "Título, Z a A"
                    },
                    "zh-CN": {
                      singular: "标题，Z 到 A"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v47,
                children: (0, _v31.translate)({
                  singular: "Relevance",
                  dictionary: {
                    es: {
                      singular: "Relevancia"
                    },
                    "de-DE": {
                      singular: "Relevanz"
                    },
                    "fr-FR": {
                      singular: "Pertinence"
                    },
                    "ja-JP": {
                      singular: "関連性"
                    },
                    "ko-KR": {
                      singular: "관련도"
                    },
                    "pt-BR": {
                      singular: "Relevância"
                    },
                    "zh-CN": {
                      singular: "相关性"
                    }
                  }
                })
              })]
            })
          })]
        })]
      })
    });
  }], 0), _v0.s(["libraryItemsQueryParams", 0, ["video.duration", "video.name", "video.link", "video.files.link", "video.pictures", "video.uri", "video.privacy.view", "video.uploader.pictures", "video.download.link", "video.user.uri", "video.height", "video.width", "folder.metadata.connections.items.total", "folder.metadata.connections.items.uri", "folder.metadata.connections.parentFolder.uri", "folder.name", "folder.uri", "folder.privacy.view", "folder.isPrivateToUser", "folder.settings.color"]], 0);
}