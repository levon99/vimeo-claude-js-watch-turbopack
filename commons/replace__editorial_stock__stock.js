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
    _v33 = _v0.i(0);
  let _v34 = ({
    keywords: _v0,
    searchType: _v1,
    searchStockType: _v2,
    sortEditorialType: _v3,
    isHotspotMode: _v4
  }) => {
    let _v5 = (0, _v2.useContext)(_v9.FlowHooksContext),
      _v6 = (0, _v21.useAppSelector)(_v20.videoSessionIdSelector),
      _v7 = (0, _v21.useAppSelector)(_v20.storyboardIdSelector),
      {
        trackEditorMediaAdded: _v8
      } = (0, _v6.useEditorTracking)(),
      _v9 = (0, _v21.useAppDispatch)(),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(1),
      _v12 = (0, _v2.useRef)(!0),
      [_v13, _v14] = (0, _v2.useState)(!1),
      {
        isReplacing: _v15
      } = (0, _v16.useReplaceElement)(),
      {
        uploadMedia: _v16
      } = (0, _v17.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v17
      } = (0, _v14.useMediaElement)(),
      {
        createOrReplaceHotspotFromMedia: _v18
      } = (0, _v11.useHotspot)(),
      {
        handleMediaItemClickOrDrag: _v19
      } = (0, _v15.useMediaItemClick)(),
      {
        hasStockUpsell: _v20
      } = (0, _v2.useContext)(_v10.PermissionsContext),
      [_v21, _v22] = (0, _v19.useLazyFetchStockMediaQuery)(),
      {
        data: _v23,
        isLoading: _v24,
        isFetching: _v25,
        error: _v26
      } = _v22,
      _v27 = (0, _v2.useCallback)((_v0, _v1) => {
        if (_v20 && _v5) return (0, _v28.sendTrackStockTrigger)(), _v5.onSelectGetty({
          vsid: _v6,
          tier: _v8.STOCK
        }), Promise.resolve(void 0);
        let {
          time: _v2
        } = _v1 || {};
        return (0, _v27.sendTrackAddMedia)({
          mediaSelectionAction: _v15 ? "replace" : "add",
          mediaSource: _v2 === _v25.MediaStockType.EDITORIAL ? "editorial_stock" : "stock",
          mediaType: _v0.type
        }), _v8({
          editorSessionId: _v7,
          editorMediaSource: _v2 === _v25.MediaStockType.EDITORIAL ? "editorial_stock" : "stock",
          editorMediaType: _v0.type
        }), _v4 ? _v18(_v0, _v1, {
          ..._v7.NO_ACTION_PRESET
        }) : _v17({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2
        });
      }, [_v20, _v5, _v15, _v2, _v4, _v18, _v17, _v6, _v7, _v8]),
      _v28 = (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        element: _v1
      }) => {
        (0, _v33.trackUploadStart)(_v0, _v6);
        let {
          status: _v2
        } = await _v16({
          origin: _v26.UploadMediaOrigin.GETTY,
          mediaItem: _v0,
          isReplacing: _v15,
          elementSourceHash: _v1.sourceHash,
          isEditorial: _v2 === _v25.MediaStockType.EDITORIAL
        });
        (0, _v33.trackUploadFinish)(_v0, _v2, _v6);
      }, [_v15, _v2, _v16, _v6]),
      _v29 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v23?.items[_v0];
        return (0, _v1.jsx)(_v29.Box, {
          id: _v3.id,
          gridStyleType: _v24.GridStyleType.LANDSCAPE,
          alignToCenter: !0,
          videoUrl: _v3.previewUrl,
          imageUrl: _v3.thumbnailUrl,
          duration: _v3.duration,
          width: _v1,
          isActive: !1,
          draggableData: {
            id: _v3.id,
            data: _v3,
            type: _v22.DnDItemType.GRID_ELEMENT_MEDIA,
            createElement: _v0 => _v19({
              mediaItem: _v3,
              draggableData: _v0,
              createElement: _v27,
              handleElementAdded: _v28
            }),
            onElementAdded: ({
              element: _v0
            }) => {
              _v28({
                mediaItem: _v3,
                element: _v0
              });
            }
          },
          onExpand: _v2,
          expandedItemData: {
            id: _v3.id,
            title: _v3.title,
            date: _v3.date,
            type: _v18.ExpandType.MEDIA,
            videoUrl: _v3.previewUrl,
            imageUrl: _v3.thumbnailUrl,
            height: _v3.height,
            width: _v3.width,
            orientation: _v3.orientation,
            caption: _v3.caption
          },
          onClick: () => _v19({
            mediaItem: _v3,
            createElement: _v27,
            handleElementAdded: _v28
          }),
          isShowPlusButton: !0,
          testid: "media-item"
        }, _v3.id);
      }, [_v27, _v23?.items, _v28, _v19]);
    (0, _v12.useDebouncedEffect)(() => {
      !async function () {
        _v14(!0), await _v9(_v19.mediaApi.util.upsertQueryData("fetchStockMedia", {
          page: 1,
          keywords: _v0,
          searchType: _v1,
          searchStockType: _v2,
          sortEditorialType: _v3
        }, {
          items: [],
          hasNext: !1,
          status: ""
        })), _v11.current = 1, _v12.current = !0, _v10?.current?.scrollToIndex(0), _v21({
          page: _v11.current,
          keywords: _v0,
          searchType: _v1,
          searchStockType: _v2,
          sortEditorialType: _v3
        });
      }();
    }, [_v0, _v1, _v2, _v3, _v21, _v9]), (0, _v2.useEffect)(() => {
      _v23?.items && (_v23.hasNext && _v11.current++, _v12.current = _v23.hasNext);
    }, [_v23?.items, _v23?.hasNext]), (0, _v13.default)(() => {
      _v20 && (0, _v28.sendTrackStockImpression)();
    });
    let _v30 = async () => {
        _v26 || _v25 || !_v12.current || (await _v21({
          page: _v11.current,
          keywords: _v0,
          searchType: _v1,
          searchStockType: _v2,
          sortEditorialType: _v3
        }));
      },
      _v31 = _v23?.items || [];
    return _v24 || _v25 || !_v13 || _v31 && 0 !== _v31.length ? (0, _v1.jsx)(_v30.Grid, {
      ref: _v10,
      itemRenderer: _v29,
      styleType: _v24.GridStyleType.LANDSCAPE,
      items: _v31,
      loadMoreItems: _v30,
      isLoading: _v24 || _v25
    }) : (0, _v1.jsx)(_v31.InspectorPaddedRow, {
      padLeft: !1,
      children: (0, _v1.jsx)(_v32.default, {
        type: _v23.EmptyInspectorView.SEARCH,
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
      })
    });
  };
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v21.useAppSelector)(_v35.isEditingInteractiveOverlaySelector),
      _v1 = !_v0,
      [_v2, _v3] = (0, _v2.useState)({
        keywords: "",
        searchType: _v1 ? _v36.MediaType.VIDEO : _v36.MediaType.IMAGE,
        searchStockType: _v25.MediaStockType.CREATIVE,
        sortEditorialType: _v37.SortEditorialType.NEWEST
      }),
      _v4 = (0, _v21.useAppSelector)(_v20.videoSessionIdSelector),
      [_v5, {
        data: _v6,
        isLoading: _v7
      }] = (0, _v19.useLazyFetchStockMediaCategoriesQuery)(),
      [_v8] = (0, _v19.useLazyFetchStockMediaQuery)(),
      _v9 = (0, _v2.useCallback)(_v0 => {
        _v8({
          page: 1,
          searchType: _v1 ? _v36.MediaType.VIDEO : _v36.MediaType.IMAGE,
          searchStockType: _v25.MediaStockType.CREATIVE,
          sortEditorialType: _v37.SortEditorialType.NEWEST,
          keywords: _v0
        }, !0);
      }, [_v8, _v1]);
    (0, _v2.useEffect)(() => {
      _v4 && _v5(void 0, !0);
    }, [_v5, _v4]);
    let _v10 = (0, _v2.useCallback)((_v0, _v1) => {
        if (!_v6?.categories) return (0, _v1.jsx)(_v1.Fragment, {});
        let _v2 = _v6.categories[_v0];
        return (0, _v1.jsx)(_v29.Box, {
          id: _v2.localName,
          imageUrl: _v2.thumbUrl,
          title: _v2.localName,
          gridStyleType: _v24.GridStyleType.LANDSCAPE,
          width: _v1,
          onHover: () => _v9(_v2.localName),
          onClick: _v0 => {
            _v3(_v0 => ({
              ..._v0,
              keywords: _v0
            }));
          },
          testid: "media-category"
        }, _v2.name);
      }, [_v6?.categories, _v9]),
      _v11 = "" !== _v2.keywords || _v2.searchStockType === _v25.MediaStockType.EDITORIAL;
    return (0, _v1.jsxs)(_v3.Flex, {
      h: "100%",
      direction: "column",
      children: [(0, _v1.jsx)(_v4.default, {
        keywords: _v2.keywords,
        searchType: _v2.searchType,
        searchStockType: _v2.searchStockType,
        sortEditorialType: _v2.sortEditorialType,
        onSearch: _v0 => {
          _v3(_v0 => ({
            ..._v0,
            keywords: _v0
          }));
        },
        onSearchStockTypeSelect: _v0 => {
          _v3(_v0 => ({
            ..._v0,
            searchStockType: _v0
          }));
        },
        onSortEditorialTypeSelect: _v0 => {
          _v3(_v0 => ({
            ..._v0,
            sortEditorialType: _v0
          }));
        },
        ...(!_v0 && {
          onSearchTypeSelect: _v0 => {
            _v3(_v0 => ({
              ..._v0,
              searchType: _v0
            }));
          }
        })
      }), (0, _v1.jsxs)(_v38.MediaGridContainer, {
        padRight: !1,
        children: [_v11 && (0, _v1.jsx)(_v34, {
          keywords: _v2.keywords || "",
          searchType: _v2.searchType,
          searchStockType: _v2.searchStockType,
          sortEditorialType: _v2.sortEditorialType,
          isHotspotMode: _v0
        }), !_v11 && (0, _v1.jsx)(_v30.Grid, {
          itemRenderer: _v10,
          styleType: _v24.GridStyleType.LANDSCAPE,
          items: _v6?.categories || [],
          isLoading: _v7
        })]
      })]
    });
  }], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = {
      ALL: "all",
      VIDEO: "video",
      IMAGE: "image"
    },
    _v43 = {
      ALL: "all",
      LANDSCAPE: "landscape",
      SQUARE: "square",
      PORTRAIT: "portrait"
    },
    _v44 = {
      orientation: "ratio",
      mediaType: "type"
    };
  _v0.s(["MediaUploadFilterName", 0, _v44, "MediaUploadsOrientation", 0, _v43, "MediaUploadsType", 0, _v42], 0);
  var _v45 = _v0.i(0);
  let _v46 = (0, _v40.default)(_v31.InspectorPaddedRow).withConfig({
    displayName: "MediaUploadsFilters__FiltersRow",
    componentId: "sc-6aae4be0-0"
  })`
  display: grid;
  margin-top: 0;
  gap: 8px;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
`;
  _v0.s(["default", 0, ({
    onChange: _v0,
    shouldShowTypeFilter: _v1
  }) => {
    let _v2 = (0, _v2.useCallback)(({
        filter: _v0,
        value: _v1
      }) => {
        _v0(_v0, _v1), (0, _v45.sendTrackChangeMediaFilter)({
          copy: _v44[_v0],
          mediaTab: _v24.MediaInspectorTabType.UPLOADS,
          selectionName: _v1
        });
      }, [_v0]),
      _v3 = {
        flexGrow: 1,
        ...(!_v1 && {
          width: "50%",
          minWidth: "120px"
        })
      };
    return (0, _v1.jsxs)(_v46, {
      children: [(0, _v1.jsx)(_v41.Select, {
        placeholder: (0, _v5.translate)({
          singular: "Ratio",
          dictionary: {
            es: {
              singular: "Proporción"
            },
            "de-DE": {
              singular: "Verhältnis"
            },
            "fr-FR": {
              singular: "Rapport"
            },
            "ja-JP": {
              singular: "比率"
            },
            "ko-KR": {
              singular: "비율"
            },
            "pt-BR": {
              singular: "Proporção"
            },
            "zh-CN": {
              singular: "比率"
            }
          }
        }),
        style: _v3,
        onValueChange: _v0 => _v2({
          filter: "orientation",
          value: _v0.value[0]
        }),
        items: Object.values(_v43).map(_v0 => ({
          value: _v0,
          label: (0, _v39.default)(_v0)
        })),
        size: "sm"
      }), _v1 && (0, _v1.jsx)(_v41.Select, {
        placeholder: (0, _v5.translate)({
          singular: "Type",
          dictionary: {
            es: {
              singular: "Tipo"
            },
            "de-DE": {
              singular: "Typ"
            },
            "ja-JP": {
              singular: "タイプ"
            },
            "ko-KR": {
              singular: "유형"
            },
            "pt-BR": {
              singular: "Tipo"
            },
            "zh-CN": {
              singular: "类型"
            }
          }
        }),
        onValueChange: _v0 => _v2({
          filter: "mediaType",
          value: _v0.value[0]
        }),
        items: Object.values(_v42).map(_v0 => ({
          value: _v0,
          label: (0, _v39.default)(_v0)
        })),
        size: "sm"
      })]
    });
  }], 0), _v0.s(["MediaUploadsFiltersType", 0, {
    ORIENTATION: "orientation",
    MEDIA_TYPE: "mediaType"
  }], 0);
}