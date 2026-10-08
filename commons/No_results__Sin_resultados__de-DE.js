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
    _v15 = _v0.i(0);
  let _v16 = (_v0, _v1) => _v0 && _v1 ? Math.ceil(_v0 / _v1) : 1;
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
    renderItem: _v0,
    selectedFolderId: _v1,
    sort: _v2,
    direction: _v3,
    keywords: _v4
  }) => {
    let [_v5, _v6] = (0, _v8.useGetUserProjectItemsLazy)(),
      [_v7, _v8] = (0, _v7.useGetUserItemsLazy)(),
      _v9 = (0, _v2.useRef)(1),
      _v10 = (0, _v2.useRef)([]),
      _v11 = _v13.default.privateToMeFolderUri.match(/\/([^\/]+)\/?$/)?.[1],
      _v12 = _v8.loading || _v6.loading,
      _v13 = (0, _v2.useMemo)(() => ({
        select: _v9.libraryItemsQueryParams,
        query: {
          sort: _v2,
          direction: _v3,
          perPage: _v11.MEDIA_LIBRARY_ITEMS_PER_PAGE,
          noPadding: !0,
          excludePrivateToMe: !0
        },
        ..._v10.VIMEO_API_HEADERS
      }), [_v2, _v3]),
      _v14 = (0, _v2.useMemo)(() => {
        let {
            data: _v0
          } = _v4 ? _v8 : _v6,
          _v1 = _v0 ? [_v0].filter(_v0 => !!_v0).flatMap(_v0 => _v0?.data).filter(_v0 => _v0?.folder !== null) : [];
        if (_v4) return _v1;
        if (1 === _v9.current) _v10.current = _v1;else {
          let _v0 = new Set([..._v10.current, ..._v1]);
          _v10.current = [..._v0];
        }
        return _v10.current;
      }, [_v4, _v8, _v6]);
    (0, _v2.useEffect)(() => {
      _v11 && (_v9.current = 1, _v5({
        where: {
          userId: _v13.default.teamOwnerId,
          projectId: parseInt(_v1 || _v11)
        },
        ..._v13
      }));
    }, [_v13, _v11, _v1]), (0, _v12.useDebouncedEffect)(() => {
      _v4 && _v7({
        where: {
          userId: _v13.default.teamOwnerId
        },
        ..._v13,
        query: {
          includeFolderIds: _v1,
          query: _v4
        }
      });
    }, [_v13, _v4, _v1]);
    let _v15 = (0, _v2.useCallback)(() => {
      let {
          loading: _v0,
          data: _v1,
          error: _v2
        } = _v6,
        _v3 = _v16(_v1?.total || 0, _v11.MEDIA_LIBRARY_ITEMS_PER_PAGE);
      !_v11 || _v4 || _v0 || _v9.current >= _v3 || (!_v2 && _v9.current++, _v5({
        where: {
          userId: _v13.default.teamOwnerId,
          projectId: parseInt(_v1 || _v11)
        },
        ..._v13,
        query: {
          ..._v13.query,
          page: _v9.current
        }
      }));
    }, [_v4, _v1, _v13, _v6]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v12 || _v14 && 0 !== _v14.length ? (0, _v1.jsx)(_v17.Grid, {
        itemRenderer: (_v0, _v1, _v2) => _v0(_v1, _v14[_v0], _v2),
        styleType: _v15.GridStyleType.LANDSCAPE,
        items: _v14,
        isLoading: _v12,
        loadMoreItems: _v15
      }) : (0, _v1.jsx)(_v18.InspectorPaddedRow, {
        padLeft: !1,
        padRight: !0,
        children: _v4 ? (0, _v1.jsx)(_v19.default, {
          type: _v14.EmptyInspectorView.SEARCH,
          title: (0, _v4.translate)({
            singular: "No results",
            dictionary: {
              es: {
                singular: "Sin resultados"
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Pas de résultats"
              },
              "ja-JP": {
                singular: "該当するものがありません"
              },
              "ko-KR": {
                singular: "결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado"
              },
              "zh-CN": {
                singular: "无结果"
              }
            }
          }),
          text: (0, _v4.translate)({
            singular: "Try using different keywords",
            dictionary: {
              es: {
                singular: "Intenta usar otras palabras clave."
              },
              "de-DE": {
                singular: "Versuche es mit anderen Stichwörtern"
              },
              "fr-FR": {
                singular: "Essayez en utilisant d'autres mots-clés"
              },
              "ja-JP": {
                singular: "別のキーワードでお試しください"
              },
              "ko-KR": {
                singular: "다른 키워드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Tente usar palavras-chave diferentes"
              },
              "zh-CN": {
                singular: "尝试使用不同的关键字"
              }
            }
          })
        }) : (0, _v1.jsx)(_v19.default, {
          type: _v14.EmptyInspectorView.VIMEO_VIDEOS_PRIVATE,
          title: (0, _v4.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          text: (0, _v4.translate)({
            singular: "No content has been added yet",
            dictionary: {
              es: {
                singular: "Aún no se ha agregado contenido"
              },
              "de-DE": {
                singular: "Es wurden noch keine Inhalte hinzugefügt"
              },
              "fr-FR": {
                singular: "Aucun contenu n'a été ajouté"
              },
              "ja-JP": {
                singular: "コンテンツはまだ追加されていません"
              },
              "ko-KR": {
                singular: "아직 추가된 콘텐츠가 없습니다."
              },
              "pt-BR": {
                singular: "Nenhum conteúdo foi adicionado ainda"
              },
              "zh-CN": {
                singular: "尚未添加任何内容"
              }
            }
          })
        })
      })
    });
  };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = ({
    renderItem: _v0,
    selectedFolderId: _v1,
    sort: _v2,
    direction: _v3,
    keywords: _v4
  }) => {
    let [_v5, _v6] = (0, _v8.useGetUserProjectItemsLazy)(),
      [_v7, _v8] = (0, _v21.useGetUserFoldersRootLazy)(),
      [_v9, _v10] = (0, _v7.useGetUserItemsLazy)(),
      _v11 = (0, _v23.useAppSelector)(_v22.isEditingInteractiveOverlaySelector),
      _v12 = (0, _v2.useRef)(1),
      _v13 = (0, _v2.useRef)([]),
      _v14 = _v6.loading || _v8.loading || _v10.loading,
      _v15 = (0, _v2.useMemo)(() => ({
        select: _v9.libraryItemsQueryParams,
        query: {
          sort: _v2,
          direction: _v3,
          perPage: _v11.MEDIA_LIBRARY_ITEMS_PER_PAGE,
          noPadding: !0,
          ...(_v11 && {
            filter: "video"
          })
        },
        ..._v10.VIMEO_API_HEADERS
      }), [_v2, _v3, _v11]),
      _v16 = (0, _v2.useMemo)(() => {
        let _v0 = _v8.data;
        _v1 && (_v0 = _v6.data), _v4 && (_v0 = _v10.data);
        let _v1 = _v0 && !_v14 ? [_v0].filter(_v0 => !!_v0).flatMap(_v0 => _v0?.data).filter(_v0 => _v0?.folder !== null && _v0?.folder?.uri !== _v13.default.privateToMeFolderUri) : [];
        if (_v4) return _v1;
        if (1 === _v12.current) _v13.current = _v1;else {
          let _v0 = new Set([..._v13.current, ..._v1]);
          _v13.current = [..._v0];
        }
        return _v13.current;
      }, [_v14, _v4, _v1, _v8.data, _v10.data, _v6.data]);
    (0, _v2.useEffect)(() => {
      _v12.current = 1, _v1 ? _v5({
        where: {
          userId: _v13.default.teamOwnerId,
          projectId: parseInt(_v1)
        },
        ..._v15
      }) : _v7({
        where: {
          userId: _v13.default.teamOwnerId
        },
        ..._v15
      });
    }, [_v15, _v1]), (0, _v12.useDebouncedEffect)(() => {
      _v4 && _v9({
        where: {
          userId: _v13.default.teamOwnerId
        },
        ..._v15,
        query: {
          includeFolderIds: _v1,
          includeCaptionsResults: !0,
          query: _v4,
          ..._v15.query
        }
      });
    }, [_v4, _v2, _v1, _v15]);
    let _v17 = (0, _v2.useCallback)(() => {
      let {
          loading: _v0,
          data: _v1,
          error: _v2
        } = _v1 ? _v6 : _v8,
        _v3 = _v16(_v1?.total || 0, _v11.MEDIA_LIBRARY_ITEMS_PER_PAGE);
      if (_v4 || _v0 || _v12.current >= _v3) return;
      !_v2 && _v12.current++;
      let _v4 = {
        ..._v15.query,
        page: _v12.current
      };
      _v1 ? _v5({
        where: {
          userId: _v13.default.teamOwnerId,
          projectId: parseInt(_v1)
        },
        ..._v15,
        query: _v4
      }) : _v7({
        where: {
          userId: _v13.default.teamOwnerId
        },
        ..._v15,
        query: _v4
      });
    }, [_v4, _v1, _v15, _v8, _v6]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v14 || _v16.length ? (0, _v1.jsx)(_v17.Grid, {
        itemRenderer: (_v0, _v1, _v2) => _v0(_v1, _v16[_v0], _v2),
        styleType: _v15.GridStyleType.LANDSCAPE,
        items: _v16,
        isLoading: _v14,
        loadMoreItems: _v17
      }) : (0, _v1.jsx)(_v18.InspectorPaddedRow, {
        padLeft: !1,
        children: _v4 ? (0, _v1.jsx)(_v19.default, {
          type: _v14.EmptyInspectorView.SEARCH,
          title: (0, _v4.translate)({
            singular: "No results",
            dictionary: {
              es: {
                singular: "Sin resultados"
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Pas de résultats"
              },
              "ja-JP": {
                singular: "該当するものがありません"
              },
              "ko-KR": {
                singular: "결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado"
              },
              "zh-CN": {
                singular: "无结果"
              }
            }
          }),
          text: (0, _v4.translate)({
            singular: "Try using different keywords",
            dictionary: {
              es: {
                singular: "Intenta usar otras palabras clave."
              },
              "de-DE": {
                singular: "Versuche es mit anderen Stichwörtern"
              },
              "fr-FR": {
                singular: "Essayez en utilisant d'autres mots-clés"
              },
              "ja-JP": {
                singular: "別のキーワードでお試しください"
              },
              "ko-KR": {
                singular: "다른 키워드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Tente usar palavras-chave diferentes"
              },
              "zh-CN": {
                singular: "尝试使用不同的关键字"
              }
            }
          })
        }) : (0, _v1.jsx)(_v19.default, {
          type: _v14.EmptyInspectorView.VIMEO_VIDEOS,
          title: (0, _v4.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          text: (0, _v4.translate)({
            singular: "No team content has been added yet",
            dictionary: {
              es: {
                singular: "Aún no se ha agregado ningún contenido del equipo"
              },
              "de-DE": {
                singular: "Es wurden noch keine Teaminhalte hinzugefügt"
              },
              "fr-FR": {
                singular: "Aucun contenu d'équipe n'a été ajouté"
              },
              "ja-JP": {
                singular: "チームコンテンツはまだ追加されていません"
              },
              "ko-KR": {
                singular: "아직 팀 콘텐츠가 추가되지 않았습니다."
              },
              "pt-BR": {
                singular: "Nenhum conteúdo de equipe foi adicionado ainda"
              },
              "zh-CN": {
                singular: "尚未添加团队内容"
              }
            }
          })
        })
      })
    });
  };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = () => {
    let {
        addElement: _v0
      } = (0, _v26.useAddElement)(),
      {
        isReplacing: _v1
      } = (0, _v27.useReplaceElement)();
    return {
      handleMediaItemClickOrDrag: (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        createElement: _v1,
        handleElementAdded: _v2,
        draggableData: _v3
      }) => {
        let _v4 = await _v1(_v0, _v3);
        if (_v3 && !_v1) return _v4;
        _v4 && (_v1 || _v0(_v4), _v2({
          mediaItem: _v0,
          element: _v4
        }));
      }, [_v0, _v1])
    };
  };
  _v0.s(["useMediaItemClick", 0, _v28], 0);
  var _v29 = _v0.i(0),
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
    _v40 = _v0.i(0);
  let _v41 = _v38.default.div.withConfig({
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
    }) => _v0 || _v40.bokehTheme.colors.gray["300"]};
`,
    _v42 = ({
      title: _v0,
      color: _v1
    }) => (0, _v1.jsx)(_v41, {
      folderColor: _v1,
      children: (0, _v1.jsx)(_v39.Text, {
        variant: "heading-xs",
        color: _v40.bokehTheme.colors.white,
        children: _v0
      })
    });
  var _v43 = _v0.i(0),
    _v44 = (0, _v2.forwardRef)(function (_v0, _v1) {
      return _v2.default.createElement("svg", (0, _v43.c)({
        viewBox: "0 0 20 18",
        ref: _v1
      }, _v0), _v2.default.createElement("path", {
        d: "M18 18H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8l1.33 3H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM2 2v14h16V5h-8L8.7 2z",
        fill: "#1a2e3b"
      }));
    });
  let _v45 = (0, _v38.default)(_v44).withConfig({
    displayName: "FolderIcon",
    componentId: "sc-e761af13-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  var _v46 = _v0.i(0);
  let _v47 = (0, _v38.default)(_v46.Lock).withConfig({
    displayName: "LockIcon",
    componentId: "sc-f50a552-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v23.useAppSelector)(_v31.storyboardIdSelector),
      _v1 = (0, _v23.useAppSelector)(_v31.durationSelector),
      {
        trackEditorMediaAdded: _v2
      } = (0, _v5.useEditorTracking)(),
      [_v3, _v4] = (0, _v2.useState)(null),
      [_v5, _v6] = (0, _v2.useState)([]),
      {
        contentSpaceEnabled: _v7
      } = (0, _v3.useContentSpaceEnabled)(_v13.default.teamOwnerId),
      _v8 = _v7 ? _v34.MediaLibraryItemsType.TEAM_LIBRARY : _v34.MediaLibraryItemsType.LIBRARY,
      _v9 = _v34.MediaLibraryItemsType.MY_LIBRARY,
      [_v10, _v11] = (0, _v2.useState)({
        itemsType: _v8,
        direction: _v33.MediaLibraryDirectionMethod.DESCENDING,
        sort: _v35.MediaLibrarySortingMethod.MODIFIED
      }),
      {
        uploadMedia: _v12
      } = (0, _v29.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v13
      } = (0, _v25.useMediaElement)(),
      {
        handleMediaItemClickOrDrag: _v14
      } = _v28(),
      {
        isReplacing: _v15
      } = (0, _v27.useReplaceElement)(),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v10.keywords && _v11(_v0 => ({
          ..._v0,
          keywords: ""
        })), _v0 && (_v4({
          id: _v0.uri.match(/\/([^\/]+)\/?$/)?.[1] || "",
          title: _v0.name
        }), _v3 ? _v6(_v0 => [{
          id: _v3.id || "",
          title: _v3?.title || "",
          isPrivate: _v3?.isPrivate
        }, ..._v0]) : _v6([{
          id: "",
          title: _v10.itemsType,
          isPrivate: _v10.itemsType === _v9
        }]));
      }, [_v10.keywords, _v10.itemsType, _v3, _v9]),
      _v17 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
          time: _v2
        } = _v1 || {};
        return _v2({
          editorSessionId: _v0,
          editorMediaSource: "library",
          editorMediaType: _v0.type
        }), _v13({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2 ?? _v1
        });
      }, [_v13, _v0, _v1, _v2]),
      _v18 = (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        element: _v1
      }) => {
        await _v12({
          origin: _v36.UploadMediaOrigin.VIMEO,
          mediaItem: _v0,
          isReplacing: _v15,
          elementSourceHash: _v1.sourceHash
        });
      }, [_v15, _v12]),
      _v19 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        if (_v1?.folder) {
          let _v0 = _v1.folder.metadata?.connections?.items?.total;
          return (0, _v1.jsx)(_v48.Box, {
            id: _v1.folder?.settings?.folderUri || "",
            gridStyleType: _v15.GridStyleType.LANDSCAPE,
            width: _v0,
            isActive: !1,
            testid: "library-folder-item",
            onClick: () => _v1.folder && _v16(_v1.folder),
            overlay: (0, _v1.jsx)(_v42, {
              title: _v1.folder.name,
              color: _v1.folder?.settings?.color
            }),
            title: _v1.folder.name,
            icon: _v1.folder.isPrivateToUser ? (0, _v1.jsx)(_v47, {}) : (0, _v1.jsx)(_v45, {}),
            subtitle: `${(_v0 || 0).toString()} ${(0, _v4.translate)({
              singular: "items",
              dictionary: {
                es: {
                  singular: "artículos"
                },
                "de-DE": {
                  singular: "Elemente"
                },
                "fr-FR": {
                  singular: "articles"
                },
                "ja-JP": {
                  singular: "アイテム"
                },
                "ko-KR": {
                  singular: "항목"
                },
                "pt-BR": {
                  singular: "itens"
                },
                "zh-CN": {
                  singular: "项目"
                }
              }
            })}`
          }, _v1.folder?.settings?.folderUri);
        }
        if (_v1?.video) {
          let _v0 = (0, _v37.convertVimeoVideo)(_v1.video);
          return (0, _v1.jsx)(_v48.Box, {
            id: _v0.id,
            gridStyleType: _v15.GridStyleType.LANDSCAPE,
            alignToCenter: !0,
            videoUrl: _v0.previewUrl,
            imageUrl: _v0.thumbnailUrl,
            duration: _v0.duration,
            title: _v0.title,
            width: _v0,
            isActive: !1,
            testid: "library-media-item",
            draggableData: {
              id: _v0.id,
              data: _v0,
              type: _v32.DnDItemType.GRID_ELEMENT_MEDIA,
              createElement: _v0 => _v14({
                mediaItem: _v0,
                draggableData: _v0,
                createElement: _v17,
                handleElementAdded: _v18
              }),
              onElementAdded: ({
                element: _v0
              }) => {
                _v18({
                  mediaItem: _v0,
                  element: _v0
                });
              }
            },
            onExpand: _v2,
            expandedItemData: {
              id: _v0.id,
              title: _v0.title,
              date: _v0.date,
              type: _v30.ExpandType.MEDIA,
              videoUrl: _v0.previewUrl,
              imageUrl: _v0.thumbnailUrl,
              height: _v0.height,
              width: _v0.width,
              orientation: _v0.orientation
            },
            onClick: () => _v14({
              mediaItem: _v0,
              createElement: _v17,
              handleElementAdded: _v18
            }),
            isShowPlusButton: !0
          }, _v0.id);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v16, _v14, _v17, _v18]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.default, {
        onChange: (_v0, _v1) => {
          _v11(_v0 => ({
            ..._v0,
            ...{
              [_v0]: _v1
            }
          }));
        },
        selectedItemType: _v10.itemsType,
        keywords: _v10.keywords,
        selectedDirection: _v10.direction,
        selectedSort: _v10.sort,
        selectedFolder: _v3,
        parentFolders: _v5,
        navigateBack: _v0 => {
          if (_v0) {
            let _v0 = _v5.slice(),
              _v1 = _v0.findIndex(_v0 => _v0.id === _v0),
              _v2 = _v0[_v1];
            _v6(_v0.splice(_v1 + 1)), _v2 && _v4({
              id: _v2?.id || "",
              title: _v2?.title || ""
            });
          } else _v4(null);
        },
        hasContentSpaceEnabled: _v7
      }), (0, _v1.jsx)(_v49.MediaGridContainer, {
        padRight: !1,
        children: _v10.itemsType === _v8 ? (0, _v1.jsx)(_v24, {
          renderItem: _v19,
          selectedFolderId: _v3?.id,
          sort: _v10.sort,
          direction: _v10.direction,
          keywords: _v10.keywords
        }) : (0, _v1.jsx)(_v20, {
          renderItem: _v19,
          selectedFolderId: _v3?.id,
          sort: _v10.sort,
          direction: _v10.direction,
          keywords: _v10.keywords
        })
      })]
    });
  }], 0);
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  async function _v52({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      shop: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v50.measureLatency)("getUserEcommerceShopifyShopProducts", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops/${_v3}/products?${(0, _v51.searchQueryString)(_v4)}&fields=${_v1.map(_v51.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v51.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v51.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  async function _v56({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v50.measureLatency)("getUserEcommerceShopifyShops", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops?${(0, _v51.searchQueryString)(_v3)}&fields=${_v1.map(_v51.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v51.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v51.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = (0, _v38.default)(_v58.SelectItem).withConfig({
      displayName: "ShopifyMediaFilters__EllipsisSelectOption",
      componentId: "sc-c9d11231-0"
    })`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,
    _v63 = ({
      isItemsView: _v0,
      keywords: _v1,
      shops: _v2,
      products: _v3,
      setSelectedProduct: _v4,
      handleSelectShop: _v5,
      handleSelectProduct: _v6,
      handleSearch: _v7
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v18.InspectorPaddedRow, {
        padRight: !0,
        children: (0, _v1.jsx)(_v58.Select, {
          placeholder: _v2[0].name,
          onValueChange: _v0 => _v5(_v0.value[0]),
          items: _v2.map(_v0 => ({
            value: _v0.id,
            label: _v0.name
          }))
        })
      }), (0, _v1.jsx)(_v18.SubSelectionContainer, {
        style: {
          marginTop: 8
        },
        children: _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v59.Tooltip, {
            label: (0, _v4.translate)({
              singular: "All products",
              dictionary: {
                es: {
                  singular: "Todos los productos"
                },
                "de-DE": {
                  singular: "Alle Produkte"
                },
                "fr-FR": {
                  singular: "Tous les produits"
                },
                "ja-JP": {
                  singular: "全製品"
                },
                "ko-KR": {
                  singular: "모든 제품"
                },
                "pt-BR": {
                  singular: "Todos os produtos"
                },
                "zh-CN": {
                  singular: "所有产品"
                }
              }
            }),
            children: (0, _v1.jsx)(_v57.IconButton, {
              variant: "tertiary",
              onClick: () => _v4(null),
              icon: (0, _v1.jsx)(_v60.ChevronLeftSmall, {}),
              "data-testid": "shopify-products-back-button",
              "aria-label": "shopify-products-back-button"
            })
          }), (0, _v1.jsx)(_v58.Select, {
            placeholder: _v3[0].id,
            style: {
              flexGrow: 1
            },
            onValueChange: _v0 => _v6(_v0.value[0]),
            items: _v3.map(_v0 => ({
              value: _v0.id,
              label: _v0.name
            })),
            children: _v0 => (0, _v1.jsx)(_v62, {
              children: _v0.label
            })
          })]
        }) : (0, _v1.jsx)(_v61.default, {
          placeholder: (0, _v4.translate)({
            singular: "Search products",
            dictionary: {
              es: {
                singular: "Buscar productos"
              },
              "de-DE": {
                singular: "Produkte suchen"
              },
              "fr-FR": {
                singular: "Rechercher des produits"
              },
              "ja-JP": {
                singular: "商品を検索"
              },
              "ko-KR": {
                singular: "제품 검색"
              },
              "pt-BR": {
                singular: "Pesquisar produtos"
              },
              "zh-CN": {
                singular: "搜索产品"
              }
            }
          }),
          variant: "minimal",
          size: "md",
          value: _v1,
          onChange: _v0 => _v7(_v0.target.value),
          "data-testid": "media-inspector-search-filter",
          style: {
            flexGrow: 1
          }
        })
      })]
    });
  async function _v64({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      shop: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v50.measureLatency)("getUserEcommerceShopifyShopProductsMedia", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops/${_v3}/products/media?${(0, _v51.searchQueryString)(_v4)}&fields=${_v1.map(_v51.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v51.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v51.deepCamelCase)(_v1);
    });
  }
  var _v65 = _v0.i(0);
  let _v66 = ({
    shopDomain: _v0,
    productId: _v1
  }) => {
    let [_v2, _v3] = function () {
        let {
            mutate: _v0
          } = (0, _v53.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v55.useGctlConfig)(),
          [_v5, _v6] = (0, _v54.useInternalState)();
        return [(0, _v2.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops/${_v0.where.shop}/products/media${(0, _v54.serializeQuery)(_v0)}`, _v64({
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
      }(),
      {
        isReplacing: _v4
      } = (0, _v27.useReplaceElement)(),
      {
        uploadMedia: _v5
      } = (0, _v29.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v6
      } = (0, _v25.useMediaElement)(),
      {
        handleMediaItemClickOrDrag: _v7
      } = _v28(),
      _v8 = (0, _v2.useRef)(null),
      _v9 = (0, _v2.useMemo)(() => ({
        select: ["data"],
        query: {
          perPage: 100,
          productId: _v1
        },
        where: {
          userId: _v13.default.teamOwnerId,
          shop: _v0
        },
        ..._v10.VIMEO_API_HEADERS
      }), [_v1, _v0]),
      _v10 = (0, _v2.useMemo)(() => {
        if (_v3.data) {
          let _v0;
          return (_v0 = _v3.data.data.product.media.edges.filter(_v0 => "IMAGE" === _v0.node.mediacontenttype)) ? _v0.map(_v0 => ({
            thumbnailUrl: _v0.node.preview.image.originalsrc,
            id: _v0.node.id,
            type: _v65.MediaType.IMAGE
          })) : [];
        }
        return [];
      }, [_v3]),
      _v11 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
          time: _v2
        } = _v1 || {};
        return _v6({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2
        });
      }, [_v6]),
      _v12 = (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        element: _v1
      }) => {
        await _v5({
          origin: _v36.UploadMediaOrigin.SHOPIFY,
          mediaItem: _v0,
          isReplacing: _v4,
          elementSourceHash: _v1.sourceHash
        });
      }, [_v4, _v5]),
      _v13 = (0, _v2.useCallback)((_v0, _v1) => {
        if (!_v10) return (0, _v1.jsx)(_v1.Fragment, {});
        let _v2 = _v10[_v0],
          _v3 = {
            id: _v2.id,
            thumbnailUrl: _v2.thumbnailUrl,
            previewUrl: _v2.thumbnailUrl,
            downloadUrl: _v2.thumbnailUrl,
            fileName: _v2.thumbnailUrl?.split("products/")[1]?.split("?")[0],
            title: _v2.id,
            type: _v2.type,
            date: "",
            modificationDate: "",
            uplOrigin: _v36.UploadMediaOrigin.SHOPIFY
          };
        return (0, _v1.jsx)(_v48.Box, {
          id: _v2.id,
          imageUrl: _v2.thumbnailUrl,
          gridStyleType: _v15.GridStyleType.SQUARE,
          alignToCenter: !0,
          width: _v1,
          onClick: () => {
            _v7({
              mediaItem: _v3,
              createElement: _v11,
              handleElementAdded: _v12
            });
          },
          isShowPlusButton: !0,
          testid: "shopify-item-media"
        }, _v2.id);
      }, [_v11, _v12, _v7, _v10]);
    return (0, _v2.useEffect)(() => {
      _v2(_v9);
    }, [_v2, _v9]), (0, _v1.jsx)(_v17.Grid, {
      ref: _v8,
      itemRenderer: _v13,
      styleType: _v15.GridStyleType.SQUARE,
      items: _v10 || [],
      isLoading: !_v10.length
    });
  };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let [_v0, _v1] = (0, _v2.useState)(),
      [_v2, _v3] = (0, _v2.useState)(),
      [_v4, _v5] = (0, _v2.useState)(!0),
      [_v6, _v7] = (0, _v2.useState)(""),
      [_v8, _v9] = function () {
        let {
            mutate: _v0
          } = (0, _v53.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v55.useGctlConfig)(),
          [_v5, _v6] = (0, _v54.useInternalState)();
        return [(0, _v2.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops${(0, _v54.serializeQuery)(_v0)}`, _v56({
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
      }(),
      [_v10, _v11] = function () {
        let {
            mutate: _v0
          } = (0, _v53.useSWRConfig)(),
          {
            baseUrl: _v1,
            jwt: _v2,
            xVimeoPage: _v3,
            locale: _v4
          } = (0, _v55.useGctlConfig)(),
          [_v5, _v6] = (0, _v54.useInternalState)();
        return [(0, _v2.useCallback)(async _v0 => {
          _v6({
            type: "REQUEST"
          });
          try {
            let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops/${_v0.where.shop}/products${(0, _v54.serializeQuery)(_v0)}`, _v52({
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
      }(),
      _v12 = (0, _v2.useRef)(null),
      _v13 = {
        select: ["shop"],
        query: {
          perPage: 100
        },
        where: {
          userId: _v13.default.teamOwnerId
        },
        ..._v10.VIMEO_API_HEADERS
      },
      _v14 = (0, _v2.useMemo)(() => _v9.data ? _v9.data.data.map(({
        shop: _v0
      }) => ({
        name: _v0.name ?? _v0.myshopifydomain,
        domain: _v0.myshopifydomain,
        id: _v0.id ?? ""
      })) : [], [_v9]),
      _v15 = (0, _v2.useMemo)(() => {
        let _v0 = _v0?.domain || _v14[0]?.domain || "";
        return {
          select: ["data"],
          query: {
            perPage: 100,
            template: "creation",
            query: _v6
          },
          where: {
            userId: _v13.default.teamOwnerId,
            shop: _v0
          },
          ..._v10.VIMEO_API_HEADERS
        };
      }, [_v6, _v0, _v14]),
      _v16 = (0, _v2.useMemo)(() => _v11.data ? (_v5(!1), _v11.data.data.products.edges.map(_v0 => ({
        thumbnailUrl: _v0.node.featuredimage?.originalsrc,
        name: _v0.node.title,
        id: _v0.node.id,
        mediaCount: _v0.node.mediacount
      }))) : [], [_v11.data]),
      _v17 = (0, _v2.useCallback)((_v0, _v1) => {
        if (!_v16) return (0, _v1.jsx)(_v1.Fragment, {});
        let _v2 = _v16[_v0];
        return (0, _v1.jsx)(_v48.Box, {
          id: _v2.id,
          imageUrl: _v2.thumbnailUrl,
          title: _v2.name,
          gridStyleType: _v15.GridStyleType.LANDSCAPE,
          width: _v1,
          onClick: () => _v3(_v2),
          testid: "shopify-item",
          overlay: (0, _v1.jsx)(_v42, {
            title: _v2.name
          }),
          icon: (0, _v1.jsx)(_v44, {}),
          subtitle: `${_v2.mediaCount.count.toString()} ${(0, _v4.translate)({
            singular: "items",
            dictionary: {
              es: {
                singular: "artículos"
              },
              "de-DE": {
                singular: "Elemente"
              },
              "fr-FR": {
                singular: "articles"
              },
              "ja-JP": {
                singular: "アイテム"
              },
              "ko-KR": {
                singular: "항목"
              },
              "pt-BR": {
                singular: "itens"
              },
              "zh-CN": {
                singular: "项目"
              }
            }
          })}`
        }, _v2.id);
      }, [_v16]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v0 === _v0?.id || (_v3(null), _v5(!0), _v1(_v14.find(_v0 => _v0.id === _v0)));
      }, [_v0, _v14]),
      _v19 = (0, _v2.useCallback)(_v0 => {
        _v0 === _v2?.id || _v3(_v16.find(_v0 => _v0.id === _v0));
      }, [_v16, _v2]);
    if ((0, _v67.useEffectOnce)(() => {
      _v8(_v13);
    }), (0, _v12.useDebouncedEffect)(() => {
      _v14.length && _v10(_v15);
    }, [_v10, _v15, _v14, _v0]), !_v14.length) return (0, _v1.jsx)(_v68.VirtuosoFooter, {});
    let _v20 = !!_v2,
      _v21 = !!_v6 && !_v16.length,
      _v22 = _v4 ? [] : _v16 || [];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v63, {
        isItemsView: _v20,
        keywords: _v6,
        handleSearch: _v7,
        shops: _v14,
        selectedShop: _v0,
        handleSelectShop: _v18,
        products: _v16,
        selectedProduct: _v2,
        setSelectedProduct: _v3,
        handleSelectProduct: _v19
      }), (0, _v1.jsx)(_v49.MediaGridContainer, {
        padRight: _v21,
        children: _v20 ? (0, _v1.jsx)(_v66, {
          productId: _v2.id,
          shopDomain: _v0?.domain || _v14[0].domain
        }) : _v21 ? (0, _v1.jsx)(_v19.default, {
          type: _v14.EmptyInspectorView.SEARCH,
          title: (0, _v4.translate)({
            singular: "No results",
            dictionary: {
              es: {
                singular: "Sin resultados"
              },
              "de-DE": {
                singular: "Keine Ergebnisse"
              },
              "fr-FR": {
                singular: "Pas de résultats"
              },
              "ja-JP": {
                singular: "該当するものがありません"
              },
              "ko-KR": {
                singular: "결과 없음"
              },
              "pt-BR": {
                singular: "Nenhum resultado"
              },
              "zh-CN": {
                singular: "无结果"
              }
            }
          }),
          text: (0, _v4.translate)({
            singular: "Try using different keywords",
            dictionary: {
              es: {
                singular: "Intenta usar otras palabras clave."
              },
              "de-DE": {
                singular: "Versuche es mit anderen Stichwörtern"
              },
              "fr-FR": {
                singular: "Essayez en utilisant d'autres mots-clés"
              },
              "ja-JP": {
                singular: "別のキーワードでお試しください"
              },
              "ko-KR": {
                singular: "다른 키워드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Tente usar palavras-chave diferentes"
              },
              "zh-CN": {
                singular: "尝试使用不同的关键字"
              }
            }
          })
        }) : (0, _v1.jsx)(_v17.Grid, {
          ref: _v12,
          itemRenderer: _v17,
          styleType: _v15.GridStyleType.LANDSCAPE,
          items: _v22,
          isLoading: _v4
        })
      })]
    });
  }], 0);
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = (0, _v38.default)(_v18.InspectorPaddedRow).withConfig({
      displayName: "StockMediaFilters.style__FiltersRow",
      componentId: "sc-1d0cd6ab-0"
    })`
  display: grid;
  margin-top: 0;
  gap: 8px;
  grid-template-columns: ${({
      isMultipleRows: _v0
    }) => _v0 ? "100%" : "auto 90px"};
`,
    _v74 = _v38.default.span.withConfig({
      displayName: "StockMediaFilters.style__EditorialInfoContainer",
      componentId: "sc-1d0cd6ab-1"
    })`
  width: 24px;
  display: flex;
  align-items: center;
`,
    _v75 = (0, _v38.default)(_v72.CircleInfo).withConfig({
      displayName: "StockMediaFilters.style__StyledCircleInfo",
      componentId: "sc-1d0cd6ab-2"
    })`
  margin-left: 8px;
  margin-top: 2px;

  path {
    fill: currentColor;
  }
`,
    _v76 = {
      CREATIVE: "creative",
      EDITORIAL: "editorial"
    };
  _v0.s(["MediaStockType", 0, _v76], 0);
  let _v77 = {
    NEWEST: "newest",
    BEST_MATCH: "best_match"
  };
  _v0.s(["SortEditorialType", 0, _v77], 0);
  let _v78 = (0, _v38.default)(_v58.Select).withConfig({
    displayName: "SelectBorderless.style__SelectBorderless",
    componentId: "sc-bd7950cb-0"
  })`
  button {
    border: none;
  }
`;
  _v0.s(["SelectBorderless", 0, _v78], 0);
  let _v79 = {
    [_v76.EDITORIAL]: (0, _v1.jsx)(_v59.Tooltip, {
      variant: "speech-bubble",
      placement: "right",
      label: (0, _v4.translate)({
        singular: "Images and videos used primarily for news content, showcasing real people and real events.",
        dictionary: {
          es: {
            singular: "Imágenes y videos utilizados principalmente para contenido informativo, que muestran personas y acontecimientos reales."
          },
          "de-DE": {
            singular: "Bilder und Videos, die vor allem für Nachrichteninhalte verwendet werden und echte Menschen und Ereignisse zeigen."
          },
          "fr-FR": {
            singular: "Images et vidéos utilisées principalement pour le contenu des actualités, présentant des personnes et des événements réels."
          },
          "ja-JP": {
            singular: "主にニュースコンテンツに使用される画像と動画で、実在の人物や実際の出来事を紹介します。"
          },
          "ko-KR": {
            singular: "실제 인물과 실제 사건을 보여주는 뉴스 콘텐츠에 주로 사용되는 이미지와 동영상입니다."
          },
          "pt-BR": {
            singular: "Imagens e vídeos usados principalmente para conteúdo informativo, que mostram pessoas e eventos reais."
          },
          "zh-CN": {
            singular: "图片和视频主要用于新闻内容，展示真实的人物和真实的活动。"
          }
        }
      }),
      style: {
        width: "270px"
      },
      children: (0, _v1.jsx)(_v74, {
        children: (0, _v1.jsx)(_v75, {
          fill: "currentColor"
        })
      })
    }, "tooltip-editorial"),
    [_v76.CREATIVE]: null
  };
  _v0.s(["default", 0, ({
    keywords: _v0,
    searchType: _v1,
    searchStockType: _v2,
    sortEditorialType: _v3,
    onSearch: _v4,
    onSearchTypeSelect: _v5,
    onSearchStockTypeSelect: _v6,
    onSortEditorialTypeSelect: _v7
  }) => {
    let _v8 = {
        [_v77.NEWEST]: (0, _v4.translate)({
          singular: "Recently Added",
          dictionary: {
            es: {
              singular: "Añadidos recientemente"
            },
            "de-DE": {
              singular: "Kürzlich hinzugefügt"
            },
            "fr-FR": {
              singular: "Récemment ajouté(s)"
            },
            "ja-JP": {
              singular: "最近追加されたタイトル"
            },
            "ko-KR": {
              singular: "최근에 추가된 동영상"
            },
            "pt-BR": {
              singular: "Adicionado recentemente"
            },
            "zh-CN": {
              singular: "最近添加"
            }
          }
        }),
        [_v77.BEST_MATCH]: (0, _v4.translate)({
          singular: "Best Match",
          dictionary: {
            es: {
              singular: "Mejor ajuste"
            },
            "de-DE": {
              singular: "Beste Übereinstimmung"
            },
            "fr-FR": {
              singular: "Meilleure correspondance"
            },
            "ja-JP": {
              singular: "ベストマッチ"
            },
            "ko-KR": {
              singular: "최상의 결과"
            },
            "pt-BR": {
              singular: "Melhor correspondência"
            },
            "zh-CN": {
              singular: "最佳匹配"
            }
          }
        })
      },
      {
        data: _v9
      } = (0, _v71.useGetMePreferences)({
        select: ["editorial_media"]
      }),
      _v10 = _v9 && _v9.editorialMedia,
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v6(_v0);
      }, [_v6]),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v7(_v0);
      }, [_v7]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        _v5 && _v5(_v0);
      }, [_v5]),
      _v14 = _v2 === _v76.EDITORIAL && "" != _v0,
      _v15 = Object.values(_v65.MediaType).map(_v0 => ({
        label: (0, _v69.default)(_v0),
        value: _v0
      })),
      _v16 = (0, _v69.default)(_v1),
      _v17 = Object.values(_v76).map(_v0 => ({
        label: (0, _v69.default)(_v0),
        value: _v0
      })),
      _v18 = (0, _v69.default)(_v2);
    return (0, _v1.jsxs)(_v73, {
      isMultipleRows: _v10 || void 0 === _v5,
      children: [(0, _v1.jsx)(_v61.default, {
        placeholder: (0, _v4.translate)({
          singular: "Search...",
          dictionary: {
            es: {
              singular: "Buscar…"
            },
            "de-DE": {
              singular: "Suchen ..."
            },
            "fr-FR": {
              singular: "Rechercher..."
            },
            "ja-JP": {
              singular: "検索..."
            },
            "ko-KR": {
              singular: "검색..."
            },
            "pt-BR": {
              singular: "Pesquisar..."
            },
            "zh-CN": {
              singular: "搜索..."
            }
          }
        }),
        variant: "minimal",
        size: "sm",
        value: _v0,
        onChange: _v0 => _v4(_v0.target.value),
        "data-testid": "media-inspector-search-filter"
      }), (0, _v1.jsxs)(_v70.Grid, {
        gap: 8,
        templateColumns: _v10 ? "repeat(2, 1fr)" : "1fr",
        children: [_v5 && (0, _v1.jsx)(_v58.Select, {
          placeholder: _v16,
          "data-testid": "media-inspector-select-filter",
          onValueChange: _v0 => _v13(_v0.value[0]),
          items: _v15,
          size: "sm"
        }), _v10 && (0, _v1.jsx)(_v58.Select, {
          placeholder: _v18,
          "data-testid": "media-inspector-select-media-stock-type-filter",
          onValueChange: _v0 => _v11(_v0.value[0]),
          items: _v17,
          size: "sm",
          children: _v0 => (0, _v1.jsxs)(_v58.SelectItem, {
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: [(0, _v1.jsx)("span", {
              style: {
                flex: 1
              },
              children: _v0.label
            }), " ", _v79[_v0.value]]
          })
        })]
      }), _v14 && (0, _v1.jsx)(_v78, {
        placeholder: _v8[_v3],
        style: {
          width: "160px"
        },
        "data-testid": "media-inspector-select-sort-editorial-type-filter",
        onValueChange: _v0 => _v12(_v0.value[0]),
        items: Object.values(_v77).map(_v0 => ({
          value: _v0,
          label: _v8[_v0]
        })),
        size: "sm"
      })]
    });
  }], 0);
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = _v0 => ({
      landscape: {
        ..._v0
      },
      portrait: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.PORTRAIT),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.PORTRAIT, !0)
      },
      square: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.SQUARE),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.PORTRAIT, !0)
      },
      [_v82.Orientation.OR_4_5]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_4_5),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_4_5, !0)
      },
      [_v82.Orientation.OR_4_3]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_4_3),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_4_3, !0)
      },
      [_v82.Orientation.OR_2_3]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_2_3),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_2_3, !0)
      },
      [_v82.Orientation.OR_3_4]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_3_4),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_3_4, !0)
      },
      [_v82.Orientation.OR_16_10]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_16_10),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_16_10, !0)
      },
      [_v82.Orientation.OR_2_1]: {
        ..._v0,
        fontSize: (0, _v83.changeButtonFontSizeByOrientation)(_v0.fontSize, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_2_1),
        rect: (0, _v83.changeRectByOrientation)(_v0.rect, _v82.Orientation.LANDSCAPE, _v82.Orientation.OR_2_1, !0)
      }
    }),
    _v85 = {
      isEditable: !1,
      isEligible: !0,
      isWhite: !1,
      height: 100,
      width: 100
    };
  _v0.s(["createButtonPreset", 0, _v84, "createGraphicItemFromButtonPreset", 0, ({
    id: _v0,
    name: _v1,
    imageUrl: _v2
  }) => ({
    ..._v85,
    lowPath: _v2,
    path: _v2,
    svgPath: _v2,
    isWhite: !0,
    name: _v1 ?? "",
    id: _v0
  })], 0);
  let _v86 = {
      interactiveHotspot: {
        pauseOnClick: !1,
        action: {
          type: _v81.HotspotActionType.NONE
        },
        hover: {
          zoom: 1,
          bgAlpha: 100
        }
      }
    },
    _v87 = {
      fontSize: 72,
      dropShadow: _v80.DropShadow.NONE,
      font: "Gothic",
      opacity: 100,
      backgroundColor: "#ffffff",
      textContent: "",
      borderColor: "#ffffff",
      borderWidth: 10,
      rect: {
        x: 0,
        y: 0,
        width: 340 / 0,
        height: 340 / 0
      },
      ..._v86
    },
    _v88 = {
      bgAlpha: 0
    },
    _v89 = {
      borderRadius: 0
    },
    _v90 = {
      borderRadius: 30
    },
    _v91 = {
      borderRadius: 0
    },
    _v92 = [{
      id: "rect-filled",
      name: "Filled rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/8a832ff90b11bbf1dc2292fcce9e2479",
      preset: _v84({
        ..._v87,
        textColor: "#000000",
        ..._v91
      })
    }, {
      id: "rect-rounded-filled",
      imageUrl: "https://i.vimeocdn.com/custom_asset/94bd360051bcfcb37adae3149ad53a0f",
      name: "Filled rounded rectangle",
      preset: _v84({
        ..._v87,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        ..._v90
      })
    }, {
      id: "circle-filled",
      name: "Filled circle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/05f5e59372dbff468ce0e351e9fe6db5",
      preset: _v84({
        ..._v87,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        ..._v89
      })
    }, {
      id: "rect",
      name: "Rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/de10f54def2362df3f43a82cadef012f",
      preset: _v84({
        ..._v87,
        ..._v88,
        textColor: "#ffffff",
        ..._v91
      })
    }, {
      id: "rect-rounded",
      name: "Rounded rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/bd6c5f8f54153ff4779e6e59832a3236",
      preset: _v84({
        ..._v87,
        ..._v88,
        textColor: "#ffffff",
        ..._v90
      })
    }, {
      id: "circle",
      name: "Circle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/3da951f391443cf46ceab731c7191207",
      preset: _v84({
        ..._v87,
        ..._v88,
        textColor: "#ffffff",
        ..._v89
      })
    }];
  _v0.s(["BUTTON_HOTSPOT_SHAPES_PRESETS", 0, _v92, "NO_ACTION_PRESET", 0, _v86], 0);
}