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
    _v22 = _v0.i(0);
  let _v23 = ({
    project: _v0,
    searchResultCount: _v1
  }) => {
    let _v2 = _v1 > 0 ? (0, _v21.translate)({
      singular: "All Results ({resultCount})",
      replacements: {
        resultCount: _v1
      },
      dictionary: {
        es: {
          singular: "Todos los resultados ({resultCount})"
        },
        "de-DE": {
          singular: "Alle Ergebnisse ({resultCount})"
        },
        "fr-FR": {
          singular: "Tous les résultats ({resultCount})"
        },
        "ja-JP": {
          singular: "すべての検索結果 ({resultCount} 件)"
        },
        "ko-KR": {
          singular: "모든 검색 결과({resultCount})"
        },
        "pt-BR": {
          singular: "Todos os resultados ({resultCount})"
        },
        "zh-CN": {
          singular: "所有结果 ({resultCount})"
        }
      }
    }) : (0, _v21.translate)({
      singular: "Folders",
      dictionary: {
        es: {
          singular: "Carpetas"
        },
        "de-DE": {
          singular: "Ordner"
        },
        "fr-FR": {
          singular: "Dossiers"
        },
        "ja-JP": {
          singular: "フォルダー"
        },
        "ko-KR": {
          singular: "폴더"
        },
        "pt-BR": {
          singular: "Pastas"
        },
        "zh-CN": {
          singular: "文件夹"
        }
      }
    });
    if (_v0 && _v0?.metadata?.connections?.ancestorPath.length) {
      let {
          ancestorPath: _v0
        } = _v0?.metadata?.connections,
        _v1 = _v0.length,
        _v2 = _v0[0],
        _v3 = _v0[_v1 - 1];
      _v2 = _v1 > 2 ? `${_v3.name} > ... > ${_v2.name}` : _v1 > 1 ? `${_v3.name} > ${_v2.name}` : `${_v3.name}`;
    }
    return (0, _v1.jsx)(_v5.Flex, {
      children: (0, _v1.jsx)(_v6.Paragraph, {
        size: "sm",
        color: "text-tertiary",
        children: _v2
      })
    });
  };
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = _v0 => (0, _v1.jsx)(_v27.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M22 14.18V13a3 3 0 0 0-6 0v1.18A3 3 0 0 0 14 17v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2a3 3 0 0 0-2-2.82ZM18 13a1 1 0 0 1 2 0v1h-2v-1Zm4 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2Z"
      }), (0, _v1.jsx)("path", {
        d: "M10.224 6.055C10.021 6.006 9.794 6 9.012 6H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.82C4 8.361 4 8.942 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18H12a1 1 0 1 1 0 2H7.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4h1.356c.635 0 1.114 0 1.577.11a4 4 0 0 1 1.156.48c.406.248.745.588 1.194 1.037l.373.373h2.827c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.134.262.224.533.286.816h-.614c-.55-.614-1.348-1-2.236-1h-6.011a1 1 0 0 1-.696-.293l-.594-.594c-.553-.552-.718-.709-.897-.818a2.002 2.002 0 0 0-.578-.24Z"
      })]
    })
  });
  var _v29 = _v0.i(0);
  let _v30 = ({
    folderURI: _v0,
    isPrivateToUser: _v1,
    hasContentSpaceEnabled: _v2
  }) => _v0 ? _v1 ? _v2 ? (0, _v1.jsx)(_v25.MyLibrary, {}) : (0, _v1.jsx)(_v28, {}) : (0, _v1.jsx)(_v26.Folder, {}) : _v2 ? (0, _v1.jsx)(_v24.TeamLibrary, {}) : (0, _v1.jsx)(_v29.VideosStack, {});
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = {
      pending: !1,
      loading: !0,
      complete: !1,
      projectItems: [],
      currentPage: 1,
      totalPages: 1,
      error: void 0
    },
    _v41 = (_v0, _v1) => {
      switch (_v1.type) {
        case 0:
          return {
            ..._v0,
            projectItems: _v0.projectItems.concat(_v1.payload.projectItems),
            complete: !0,
            loading: !1,
            pending: !1
          };
        case 2:
          return {
            ..._v0,
            projectItems: _v0.projectItems.concat(_v1.payload.projectItems),
            totalPages: _v1.payload.totalPages,
            currentPage: _v1.payload.nextPage,
            pending: !1
          };
        case 1:
          return {
            ..._v0,
            error: _v1.payload.error,
            complete: !0,
            loading: !1,
            pending: !1
          };
        case 3:
          return {
            ..._v0,
            pending: !0
          };
        case 4:
          return _v40;
        default:
          return _v0;
      }
    },
    _v42 = ({
      folder: _v0,
      setSelectedFolder: _v1,
      setFocusedFolder: _v2,
      selectedFolder: _v3,
      addNewFolder: _v4,
      multiSelect: _v5,
      selectedFolderList: _v6 = [],
      onChangeList: _v7,
      isParentSelected: _v8 = !1,
      autoSelectParent: _v9,
      isSubFolder: _v10 = !1
    }) => {
      let {
          contentSpaceEnabled: _v11
        } = (0, _v16.useContentSpaceEnabled)(_v0?.uri),
        _v12 = _v11 ? (0, _v21.translate)({
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
        }) : (0, _v21.translate)({
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
        _v13 = (_v0?.metadata?.connections?.folders?.total || 0) > 0,
        _v14 = _v5 ? _v6.some(_v0 => _v0?.uri === _v0?.uri) : _v3?.uri === _v0?.uri,
        _v15 = _v3 && _v3.metadata?.connections?.ancestorPath?.some(_v0 => _v0?.uri === _v0?.uri) || !1,
        [_v16, _v17] = (0, _v2.useState)(_v15),
        _v18 = (0, _v2.useMemo)(() => [], []);
      _v4?.metadata?.connections?.ancestorPath?.find(_v0 => _v0.uri === _v0?.uri) && (_v13 = !0, _v18 = [_v4]);
      let {
        projectItems: _v19
      } = (_v0 => {
        let _v1 = "function" == typeof _v0 ? _v0() : _v0,
          {
            baseUrl: _v2,
            xVimeoPage: _v3,
            jwt: _v4,
            locale: _v5
          } = (0, _v38.useGctlConfig)(),
          _v6 = (0, _v39.usePrevious)(_v1?.where.userId),
          [_v7, _v8] = (0, _v2.useReducer)(_v41, _v40),
          _v9 = (0, _v2.useRef)(void 0);
        return (0, _v2.useEffect)(() => {
          _v6 !== _v1?.where.userId && (_v9.current && (_v9.current.abort(), _v9.current = void 0), _v8({
            type: 4
          }));
        }, [_v6, _v1?.where.userId]), (0, _v2.useEffect)(() => {
          let _v0 = async () => {
            let _v0 = [];
            window.AbortController && (_v9.current = new AbortController());
            for (let _v0 = _v7.currentPage; _v0 <= _v7.currentPage + 3 && !(_v0 > _v7.totalPages); _v0++) if (_v1) {
              let _v0 = (0, _v37.getUserProjectItems)({
                ..._v1,
                baseUrl: _v2,
                query: {
                  ..._v1.query,
                  page: _v0,
                  perPage: 100
                },
                headers: {
                  ..._v1.headers,
                  "Content-Type": "application/json",
                  Authorization: _v4 ? `jwt ${_v4}` : "",
                  "Vimeo-Page": `${_v3}`,
                  "Accept-Language": _v5 ?? "en"
                },
                signal: _v9.current?.signal
              });
              _v0.push(_v0);
            }
            try {
              let _v0, _v1, _v2, _v3;
              _v8({
                type: 3
              });
              let _v4 = (await Promise.all(_v0)).reduce((_v0, _v1) => ({
                  totalPages: Math.ceil(_v1.total / 100),
                  projectItems: _v0.projectItems.concat(_v1.data),
                  lastPage: _v1.page > _v0.lastPage ? _v1.page : _v0.lastPage
                }), {
                  totalPages: 1,
                  projectItems: [],
                  lastPage: 1
                }),
                _v5 = _v4.lastPage === _v4.totalPages ? (_v0 = _v4.projectItems, {
                  type: 0,
                  payload: {
                    projectItems: _v0
                  }
                }) : (_v1 = _v4.projectItems, _v2 = _v4.lastPage + 1, _v3 = _v4.totalPages, {
                  type: 2,
                  payload: {
                    projectItems: _v1,
                    nextPage: _v2,
                    totalPages: _v3
                  }
                });
              _v8(_v5);
            } catch (_v0) {
              if ("AbortError" === _v0.name) return;
              _v8({
                type: 1,
                payload: {
                  error: _v0 instanceof Error ? _v0 : Error("Something went wrong.")
                }
              });
            }
          };
          _v7.complete || _v7.pending || _v0();
        }, [_v1, _v1?.query, _v1?.select, _v7.complete, _v7.currentPage, _v7.pending, _v7.totalPages, _v2, _v3, _v4, _v5]), _v7;
      })(() => {
        if (!_v13 || !_v0) return null;
        let _v0 = _v0.uri.split("/");
        return {
          where: {
            userId: parseInt(_v0[2]),
            projectId: parseInt(_v0[4])
          },
          query: {
            filter: "folder",
            sort: "alphabetical"
          },
          select: ["folder.isPrivateToUser", "folder.metadata.connections.folders.total", "folder.metadata.connections.ancestorPath", "folder.privacy", "folder.name", "folder.uri"]
        };
      });
      _v19 && (_v18 = [..._v18, ..._v19.map(_v0 => _v0.folder)]), (0, _v2.useEffect)(() => {
        if (!_v14 || !_v7 || !_v0) return;
        let _v0 = _v6.map(_v0 => _v0.uri);
        _v0.metadata?.connections?.ancestorPath?.some(_v0 => _v0.includes(_v0.uri)) && setTimeout(() => _v7([{
          folder: _v0,
          remove: !0
        }]), 500);
      }, [_v0, _v14, _v7, _v6, _v18]), (0, _v2.useEffect)(() => {
        if (!_v9 || !_v0 || !_v7 || !_v13 || _v18.length < 1) return;
        let _v0 = _v6.map(_v0 => _v0.uri);
        if (_v18.reduce((_v0, _v1) => _v0.includes(_v1.uri) ? _v0 + 1 : _v0, 0) === _v18.length) {
          let _v0 = [];
          _v14 || (_v0 = [{
            folder: _v0,
            add: !0
          }]), _v18.forEach(_v0 => _v0 = [..._v0, {
            folder: _v0,
            remove: !0
          }]), setTimeout(() => _v7([..._v0]), 500);
        }
      }, [_v9, _v0, _v13, _v14, _v7, _v6, _v18]);
      let _v20 = _v13 ? 4 : 28;
      return (0, _v1.jsxs)(_v3.Box, {
        "data-testid": "folder-item-container",
        marginLeft: (0, _v11.rem)(7 * !!_v10 + _v20),
        marginRight: _v10 ? void 0 : "sm",
        children: [(0, _v1.jsx)(_v4.Button, {
          borderRadius: "sm",
          variant: "tertiary",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "md",
          paddingLeft: "0",
          onMouseEnter: () => _v2(_v0),
          onMouseLeave: () => _v2(null),
          onClick: () => _v5 && _v8 ? null : void (_v5 && _v7 && _v0 ? _v7([{
            folder: _v0,
            add: !_v14,
            remove: !!_v14
          }]) : _v1 && _v1(_v0)),
          children: (0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v5.Flex, {
              marginRight: "sm",
              alignItems: "center",
              onClick: _v13 ? _v0 => {
                _v0.stopPropagation(), _v17(!_v16);
              } : void 0,
              children: _v13 && (_v16 ? (0, _v1.jsx)(_v15.ChevronDownSmall, {}) : (0, _v1.jsx)(_v36.ChevronRightSmall, {}))
            }), _v5 && (0, _v1.jsx)(_v35.Checkbox, {
              margin: (0, _v11.rem)(12),
              pointerEvents: "none",
              isChecked: _v8 || _v14,
              isDisabled: _v8,
              id: _v0?.uri
            }), (0, _v1.jsx)(_v3.Box, {
              marginRight: "sm",
              children: (0, _v1.jsx)(_v30, {
                folderURI: _v0?.uri,
                isPrivateToUser: _v0?.isPrivateToUser,
                hasContentSpaceEnabled: _v11
              })
            }), (0, _v1.jsx)(_v6.Paragraph, {
              size: "md",
              children: _v0?.name ?? _v12
            })]
          })
        }), _v16 && (0, _v1.jsx)(_v1.Fragment, {
          children: _v18.map(_v0 => (0, _v1.jsx)(_v42, {
            folder: _v0,
            setSelectedFolder: _v1,
            setFocusedFolder: _v2,
            selectedFolder: _v3,
            addNewFolder: _v4,
            multiSelect: _v5,
            selectedFolderList: _v6,
            onChangeList: _v7,
            isParentSelected: !!_v5 && !!_v8 || _v14,
            isSubFolder: !0
          }, _v0.uri))
        })]
      });
    },
    _v43 = ({
      loading: _v0,
      folders: _v1 = [],
      setSelectedFolder: _v2,
      setFocusedFolder: _v3,
      handleLoadMore: _v4,
      selectedFolder: _v5,
      canSelectRoot: _v6,
      addNewFolder: _v7,
      multiSelect: _v8,
      selectedFolderList: _v9,
      onChangeList: _v10,
      autoSelectParent: _v11
    }) => {
      let [_v12] = (0, _v34.useScrollWatch)(_v1, () => null, () => null, () => _v4());
      return (0, _v1.jsx)(_v5.Flex, {
        ref: _v12,
        height: `calc(100% - ${(0, _v11.rem)(60)})`,
        minHeight: (0, _v11.rem)(185),
        width: "100%",
        minWidth: (0, _v11.rem)(350),
        overflowY: "auto",
        gap: "xs",
        flexDirection: "column",
        "data-testid": "folder-select-container",
        paddingY: "sm",
        children: _v0 ? (0, _v1.jsx)(_v45, {}) : _v1.length || _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v6 && (0, _v1.jsx)(_v42, {
            folder: null,
            setSelectedFolder: _v2,
            setFocusedFolder: _v3,
            selectedFolder: _v5
          }, "root"), _v1.map(_v0 => (0, _v1.jsx)(_v42, {
            folder: _v0,
            setSelectedFolder: _v2,
            setFocusedFolder: _v3,
            selectedFolder: _v5,
            addNewFolder: _v7,
            multiSelect: _v8,
            selectedFolderList: _v9,
            onChangeList: _v10,
            autoSelectParent: _v11
          }, _v0.uri))]
        }) : (0, _v1.jsx)(_v44, {})
      });
    },
    _v44 = () => (0, _v1.jsxs)(_v31.Center, {
      flexDirection: "column",
      height: "100%",
      children: [(0, _v1.jsx)(_v33.SearchMagnifier, {
        boxSize: "lg",
        color: "text-secondary"
      }), (0, _v1.jsx)(_v6.Paragraph, {
        size: "sm",
        children: (0, _v21.translate)({
          singular: "Sorry, no results found.",
          dictionary: {
            es: {
              singular: "Lo sentimos, no se encontraron resultados."
            },
            "de-DE": {
              singular: "Leider keine Ergebnisse gefunden."
            },
            "fr-FR": {
              singular: "Désolés, aucun résultat."
            },
            "ja-JP": {
              singular: "申し訳ありません。検索結果がありません。"
            },
            "ko-KR": {
              singular: "죄송합니다, 검색 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Desculpe, mas não encontramos nenhum resultado."
            },
            "zh-CN": {
              singular: "抱歉，未找到结果。"
            }
          }
        })
      })]
    }),
    _v45 = () => (0, _v1.jsx)(_v31.Center, {
      height: "100%",
      children: (0, _v1.jsx)(_v32.Spinner, {
        size: "lg"
      })
    });
  var _v46 = _v0.i(0);
  let _v47 = ({
    selectedFolder: _v0,
    placeholderText: _v1
  }) => {
    let {
        contentSpaceEnabled: _v2
      } = (0, _v16.useContentSpaceEnabled)(_v0?.uri),
      _v3 = _v2 ? (0, _v21.translate)({
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
      }) : (0, _v21.translate)({
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
      });
    return _v0 ? (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v5.Flex, {
        marginRight: "sm",
        alignItems: "center",
        children: (0, _v1.jsx)(_v30, {
          folderURI: _v0?.uri,
          isPrivateToUser: _v0.isPrivateToUser,
          hasContentSpaceEnabled: _v2
        })
      }), (0, _v1.jsx)(_v6.Paragraph, {
        size: "md",
        textOverflow: "ellipsis",
        overflow: "hidden",
        title: _v0.name,
        children: _v0.name
      })]
    }) : _v1 || _v3;
  };
  _v0.s(["FolderSelect", 0, ({
    attach: _v0 = "top",
    onChange: _v1,
    selectedFolderURI: _v2,
    selectedFolder: _v3,
    userId: _v4,
    placeholderText: _v5,
    permissionAction: _v6 = "folder.view",
    addNewFolder: _v7,
    canSelectRoot: _v8,
    isLoading: _v9 = !1,
    disabled: _v10 = !1,
    multiSelect: _v11 = !1,
    selectedFolderList: _v12 = [],
    onChangeList: _v13,
    autoSelectParent: _v14 = !1,
    onLoadingChange: _v15,
    dropdownWidth: _v16,
    isSettingsPage: _v17
  }) => {
    let _v18 = (0, _v17.useIsBokeh)(),
      _v19 = (0, _v2.useRef)(null),
      [_v20, _v21] = (0, _v2.useState)(),
      _v22 = (0, _v22.useDebouncedValue)(_v20, 400),
      [_v23, _v24] = (0, _v2.useState)(null),
      {
        colorMode: _v25
      } = (0, _v13.useColorMode)(),
      {
        data: _v26
      } = (0, _v19.useGetUserProject)(() => {
        if (!_v4 || _v3 || !_v2) return null;
        let _v0 = (0, _v46.getProjectId)({
          uri: _v2
        });
        return _v0 ? {
          where: {
            userId: _v4,
            projectId: _v0
          },
          select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "privacy", "name", "uri"]
        } : null;
      }),
      _v27 = _v3 ?? _v26 ?? null,
      {
        data: _v28,
        isValidating: _v29,
        size: _v30,
        setSize: _v31
      } = (0, _v20.useGetUserProjectsInfinite)(() => _v22 ? null : {
        query: {
          perPage: 20,
          topLevelOnly: !0,
          permissionAction: _v6
        },
        select: ["isPrivateToUser", "metadata.connections.ancestorPath", "metadata.connections.folders.total", "metadata.connections.folders.uri", "privacy", "name", "uri"],
        where: {
          userId: _v4
        }
      }, {
        revalidateOnFocus: !1
      }),
      {
        data: _v32,
        isValidating: _v33,
        size: _v34,
        setSize: _v35
      } = (0, _v18.useGetUserItemsInfinite)(() => _v22 ? {
        query: {
          filter: "folder",
          perPage: 20,
          query: _v22,
          queryFields: "title"
        },
        select: ["folder.isPrivateToUser", "folder.metadata.connections.ancestorPath", "folder.metadata.connections.folders.total", "folder.metadata.interactions.uploadVideo.uri", "folder.privacy", "folder.name", "folder.uri"],
        where: {
          userId: _v4
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v36 = (0, _v2.useMemo)(() => [], []),
      _v37 = 0;
    _v32 && (_v37 = (_v36 = _v32.flatMap(_v0 => _v0.data).map(_v0 => _v0.folder).filter(_v0 => _v0 && _v0?.metadata?.interactions.uploadVideo)).length), _v28 && (_v36 = _v28.flatMap(_v0 => _v0.data).filter(_v0 => null !== _v0)), _v36 = (0, _v2.useMemo)(() => _v7 && _v7?.metadata?.connections?.ancestorPath.length === 0 ? [_v7, ..._v36] : _v36, [_v36, _v7]);
    let _v38 = _v33 && !_v36.length,
      _v39 = (0, _v1.jsxs)(_v3.Box, {
        height: _v11 ? "100%" : (0, _v11.rem)(320),
        padding: "sm",
        children: [(0, _v1.jsx)(_v3.Box, {
          marginBottom: "sm",
          children: (0, _v1.jsx)(_v12.Search, {
            onChange: _v0 => _v21(_v0.currentTarget.value),
            placeholder: (0, _v21.translate)({
              singular: "Search Folders",
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
            variant: "minimal",
            "data-lpignore": "true",
            value: _v20
          })
        }), (0, _v1.jsx)(_v23, {
          project: _v23 || _v27,
          searchResultCount: _v37
        }), (0, _v1.jsx)(_v43, {
          loading: _v38,
          folders: _v36,
          setSelectedFolder: _v1,
          setFocusedFolder: _v24,
          handleLoadMore: () => {
            _v22 && _v32?.[0]?.paging.next ? _v33 || _v35(_v34 + 1) : _v29 || _v31(_v30 + 1);
          },
          selectedFolder: _v27,
          canSelectRoot: _v8,
          addNewFolder: _v7,
          multiSelect: _v11,
          selectedFolderList: _v12,
          onChangeList: _v13,
          autoSelectParent: _v14
        })]
      }),
      _v40 = _v29 && 1 === _v30 || _v9;
    return ((0, _v2.useEffect)(() => {
      _v15 && _v15(_v40);
    }, [_v15, _v40]), _v11) ? (0, _v1.jsx)(_v1.Fragment, {
      children: _v39
    }) : (0, _v1.jsxs)(_v7.Popover, {
      placement: _v0,
      onOpen: () => {
        window.setTimeout(() => {
          _v19?.current?.focus();
        }, 50);
      },
      children: [(0, _v1.jsx)(_v10.PopoverTrigger, {
        children: _v18 ? (0, _v1.jsx)(_v4.Button, {
          fontWeight: "normal",
          minWidth: (0, _v11.rem)(210),
          isLoading: _v40,
          isDisabled: _v40 || _v10,
          rightIcon: _v40 ? void 0 : (0, _v1.jsx)(_v14.ChevronDown, {
            boxSize: _v17 ? "auto" : "14px !important"
          }),
          variant: _v17 && "dark" === _v25 ? "secondary" : "tertiary",
          "data-id": "select_location_dropdown_box",
          width: (0, _v11.rem)(_v16 || 210),
          outline: "1px solid",
          outlineOffset: _v17 ? "-1px" : "0",
          border: "none",
          outlineColor: "input-stroke !important",
          borderRadius: "md",
          justifyContent: _v40 ? "center" : "space-between",
          paddingRight: "md",
          backgroundColor: _v17 && "dark" === _v25 ? "none" : "surface !important",
          transition: "all 120ms ease-in-out 0s",
          _hover: {
            outlineColor: "input-stroke-hover !important"
          },
          _focus: {
            outline: "2px solid",
            outlineColor: ["rgba(249, 250, 251, 1) !important", "rgba(14, 18, 22, 0.9) !important"]
          },
          children: (0, _v1.jsx)(_v47, {
            selectedFolder: _v27,
            placeholderText: _v5
          })
        }) : (0, _v1.jsx)(_v4.Button, {
          fontWeight: "normal",
          minWidth: (0, _v11.rem)(210),
          isLoading: _v40,
          isDisabled: _v40 || _v10,
          rightIcon: _v40 ? void 0 : (0, _v1.jsx)(_v15.ChevronDownSmall, {}),
          variant: "tertiary",
          "data-id": "select_location_dropdown_box",
          width: (0, _v11.rem)(_v16 || 210),
          borderColor: "fill-component !important",
          borderRadius: "xs",
          justifyContent: _v40 ? "center" : "space-between",
          paddingRight: "sm",
          children: (0, _v1.jsx)(_v47, {
            selectedFolder: _v27,
            placeholderText: _v5
          })
        })
      }), (0, _v1.jsx)(_v9.PopoverContent, {
        ref: _v19,
        children: (0, _v1.jsx)(_v8.PopoverBody, {
          children: _v39
        })
      })]
    });
  }], 0);
}