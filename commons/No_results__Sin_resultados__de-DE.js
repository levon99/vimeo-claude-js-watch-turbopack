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
    _v12 = _v0.i(0);
  let _v13 = (_v0, _v1) => _v0 && _v1 ? Math.ceil(_v0 / _v1) : 1;
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["default", 0, ({
    renderItem: _v0,
    selectedFolderId: _v1,
    sort: _v2,
    direction: _v3,
    keywords: _v4
  }) => {
    let [_v5, _v6] = (0, _v4.useGetUserProjectItemsLazy)(),
      [_v7, _v8] = (0, _v3.useGetUserItemsLazy)(),
      _v9 = (0, _v2.useRef)(1),
      _v10 = (0, _v2.useRef)([]),
      _v11 = _v10.default.privateToMeFolderUri.match(/\/([^\/]+)\/?$/)?.[1],
      _v12 = _v8.loading || _v6.loading,
      _v13 = (0, _v2.useMemo)(() => ({
        select: _v6.libraryItemsQueryParams,
        query: {
          sort: _v2,
          direction: _v3,
          perPage: _v8.MEDIA_LIBRARY_ITEMS_PER_PAGE,
          noPadding: !0,
          excludePrivateToMe: !0
        },
        ..._v7.VIMEO_API_HEADERS
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
          userId: _v10.default.teamOwnerId,
          projectId: parseInt(_v1 || _v11)
        },
        ..._v13
      }));
    }, [_v13, _v11, _v1]), (0, _v9.useDebouncedEffect)(() => {
      _v4 && _v7({
        where: {
          userId: _v10.default.teamOwnerId
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
        _v3 = _v13(_v1?.total || 0, _v8.MEDIA_LIBRARY_ITEMS_PER_PAGE);
      !_v11 || _v4 || _v0 || _v9.current >= _v3 || (!_v2 && _v9.current++, _v5({
        where: {
          userId: _v10.default.teamOwnerId,
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
      children: _v12 || _v14 && 0 !== _v14.length ? (0, _v1.jsx)(_v14.Grid, {
        itemRenderer: (_v0, _v1, _v2) => _v0(_v1, _v14[_v0], _v2),
        styleType: _v12.GridStyleType.LANDSCAPE,
        items: _v14,
        isLoading: _v12,
        loadMoreItems: _v15
      }) : (0, _v1.jsx)(_v15.InspectorPaddedRow, {
        padLeft: !1,
        padRight: !0,
        children: _v4 ? (0, _v1.jsx)(_v16.default, {
          type: _v11.EmptyInspectorView.SEARCH,
          title: (0, _v5.translate)({
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
          text: (0, _v5.translate)({
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
        }) : (0, _v1.jsx)(_v16.default, {
          type: _v11.EmptyInspectorView.VIMEO_VIDEOS_PRIVATE,
          title: (0, _v5.translate)({
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
          text: (0, _v5.translate)({
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
  }], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["default", 0, ({
    renderItem: _v0,
    selectedFolderId: _v1,
    sort: _v2,
    direction: _v3,
    keywords: _v4
  }) => {
    let [_v5, _v6] = (0, _v4.useGetUserProjectItemsLazy)(),
      [_v7, _v8] = (0, _v17.useGetUserFoldersRootLazy)(),
      [_v9, _v10] = (0, _v3.useGetUserItemsLazy)(),
      _v11 = (0, _v19.useAppSelector)(_v18.isEditingInteractiveOverlaySelector),
      _v12 = (0, _v2.useRef)(1),
      _v13 = (0, _v2.useRef)([]),
      _v14 = _v6.loading || _v8.loading || _v10.loading,
      _v15 = (0, _v2.useMemo)(() => ({
        select: _v6.libraryItemsQueryParams,
        query: {
          sort: _v2,
          direction: _v3,
          perPage: _v8.MEDIA_LIBRARY_ITEMS_PER_PAGE,
          noPadding: !0,
          ...(_v11 && {
            filter: "video"
          })
        },
        ..._v7.VIMEO_API_HEADERS
      }), [_v2, _v3, _v11]),
      _v16 = (0, _v2.useMemo)(() => {
        let _v0 = _v8.data;
        _v1 && (_v0 = _v6.data), _v4 && (_v0 = _v10.data);
        let _v1 = _v0 && !_v14 ? [_v0].filter(_v0 => !!_v0).flatMap(_v0 => _v0?.data).filter(_v0 => _v0?.folder !== null && _v0?.folder?.uri !== _v10.default.privateToMeFolderUri) : [];
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
          userId: _v10.default.teamOwnerId,
          projectId: parseInt(_v1)
        },
        ..._v15
      }) : _v7({
        where: {
          userId: _v10.default.teamOwnerId
        },
        ..._v15
      });
    }, [_v15, _v1]), (0, _v9.useDebouncedEffect)(() => {
      _v4 && _v9({
        where: {
          userId: _v10.default.teamOwnerId
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
        _v3 = _v13(_v1?.total || 0, _v8.MEDIA_LIBRARY_ITEMS_PER_PAGE);
      if (_v4 || _v0 || _v12.current >= _v3) return;
      !_v2 && _v12.current++;
      let _v4 = {
        ..._v15.query,
        page: _v12.current
      };
      _v1 ? _v5({
        where: {
          userId: _v10.default.teamOwnerId,
          projectId: parseInt(_v1)
        },
        ..._v15,
        query: _v4
      }) : _v7({
        where: {
          userId: _v10.default.teamOwnerId
        },
        ..._v15,
        query: _v4
      });
    }, [_v4, _v1, _v15, _v8, _v6]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v14 || _v16.length ? (0, _v1.jsx)(_v14.Grid, {
        itemRenderer: (_v0, _v1, _v2) => _v0(_v1, _v16[_v0], _v2),
        styleType: _v12.GridStyleType.LANDSCAPE,
        items: _v16,
        isLoading: _v14,
        loadMoreItems: _v17
      }) : (0, _v1.jsx)(_v15.InspectorPaddedRow, {
        padLeft: !1,
        children: _v4 ? (0, _v1.jsx)(_v16.default, {
          type: _v11.EmptyInspectorView.SEARCH,
          title: (0, _v5.translate)({
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
          text: (0, _v5.translate)({
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
        }) : (0, _v1.jsx)(_v16.default, {
          type: _v11.EmptyInspectorView.VIMEO_VIDEOS,
          title: (0, _v5.translate)({
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
          text: (0, _v5.translate)({
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
  }], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["useMediaItemClick", 0, () => {
    let {
        addElement: _v0
      } = (0, _v20.useAddElement)(),
      {
        isReplacing: _v1
      } = (0, _v21.useReplaceElement)();
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
  }], 0);
}