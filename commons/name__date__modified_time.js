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
    _v25 = _v0.i(0);
  let _v26 = {
    alphabetical: "name",
    date: "date",
    last_user_action_event_date: "modified_time"
  };
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = () => (0, _v1.jsx)(_v29.NoVideosContainer, {
    children: (0, _v1.jsx)(_v28.Spinner, {})
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = () => (0, _v1.jsxs)(_v29.NoVideosContainer, {
    children: [(0, _v1.jsx)(_v31.Text, {
      variant: "heading-xs",
      children: (0, _v32.translate)({
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
      })
    }), (0, _v1.jsx)(_v31.Text, {
      variant: "body-md",
      color: "text-secondary",
      children: (0, _v32.translate)({
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
    })]
  });
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = () => (0, _v1.jsx)(_v38.Flex, {
      "aria-busy": !0,
      "aria-live": "polite",
      direction: "column",
      w: "100%",
      gap: "sm",
      children: (0, _v1.jsx)(_v1.Fragment, {
        children: [,,,].fill(null).map((_v0, _v1) => (0, _v1.jsxs)(_v41.ContentRow, {
          listGridColumns: `${(0, _v35.rem)(16)} ${(0, _v35.rem)(72)} 1fr 1fr`,
          sx: _v42.responsiveRowSx,
          role: "group",
          disableHover: !0,
          tabIndex: -1,
          children: [(0, _v1.jsx)(_v41.ContentRow.Column, {
            children: (0, _v1.jsx)(_v37.Checkbox, {
              isDisabled: !0
            })
          }), (0, _v1.jsx)(_v41.ContentRow.Column, {
            children: (0, _v1.jsx)(_v39.Skeleton, {
              h: (0, _v35.rem)(39),
              ..._v43.thumbnailStyles
            })
          }), (0, _v1.jsx)(_v41.ContentRow.Column, {
            overflow: "auto",
            justifyColumn: "auto",
            children: (0, _v1.jsx)(_v38.Flex, {
              w: "100%",
              gap: "3",
              children: (0, _v1.jsxs)(_v38.Flex, {
                direction: "column",
                overflow: "hidden",
                gap: "xs",
                children: [(0, _v1.jsx)(_v39.Skeleton, {
                  variant: "text",
                  width: (0, _v35.rem)(128)
                }), (0, _v1.jsxs)(_v38.Flex, {
                  align: "center",
                  gap: "xs",
                  children: [(0, _v1.jsx)(_v39.Skeleton, {
                    borderRadius: "50%",
                    boxSize: (0, _v35.rem)(12),
                    flexShrink: 0
                  }), (0, _v1.jsx)(_v39.Skeleton, {
                    variant: "text",
                    width: (0, _v35.rem)(96)
                  })]
                })]
              })
            })
          }), (0, _v1.jsx)(_v41.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v38.Flex, {
              ml: "md",
              children: (0, _v1.jsx)(_v39.Skeleton, {
                variant: "text",
                w: (0, _v35.rem)(64),
                alignItems: "flex-end"
              })
            })
          }), (0, _v1.jsx)(_v41.ContentRow.Column, {
            hideAtWidth: _v40.bokehTheme.breakpoints.md,
            children: (0, _v1.jsx)(_v38.Flex, {
              mr: "xl",
              children: (0, _v1.jsx)(_v39.Skeleton, {
                variant: "text",
                w: (0, _v35.rem)(80),
                alignItems: "flex-end"
              })
            })
          })]
        }, `loading-state-skeleton-card-list-${_v1}`))
      })
    }),
    _v45 = ({
      isLoading: _v0,
      onLoadMore: _v1
    }) => {
      let _v2 = (0, _v8.useRef)(null),
        _v3 = (0, _v36.useOnScreen)(_v2),
        _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.layout);
      return ((0, _v8.useEffect)(() => {
        _v3 && !_v0 && _v1();
      }, [_v0, _v3, _v1]), _v4 === _v10.LAYOUT.LIST) ? (0, _v1.jsx)(_v34.Box, {
        h: (0, _v35.rem)(90),
        ref: _v2,
        children: (0, _v1.jsx)(_v44, {})
      }) : (0, _v1.jsx)(_v34.Box, {
        h: (0, _v35.rem)(90),
        pt: (0, _v35.rem)(1),
        ref: _v2
      });
    },
    _v46 = _v0 => {
      let {
        isLoadingMore: _v1,
        canLoadMore: _v2 = !1,
        onActivate: _v3
      } = _v0;
      return _v2 ? (0, _v1.jsx)(_v45, {
        isLoading: _v1,
        onLoadMore: _v3
      }) : null;
    },
    _v47 = _v0 => ({
      folder: _v0,
      isSelectable: !1,
      isSelected: !1
    });
  var _v48 = _v0.i(0);
  let _v49 = [..._v48.ROOT_ITEMS_FIELDS.filter(_v0 => !_v0.startsWith("liveEvent.")), "video.canMoveToProject", "video.parentProject.uri", "video.parentProject.isPrivateToUser"],
    _v50 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.destinationFolder),
        _v1 = (0, _v9.useStore)(_v0 => _v0.itemListStore.navigationStack),
        _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
        _v3 = _v1?.length === 2 && _v1?.[1] === _v24.TEAM_LIBRARY,
        _v4 = _v2.trim().length > 0,
        _v5 = (() => {
          let _v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceOwnerId),
            _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
            _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.sortValues),
            _v3 = (0, _v9.useStore)(_v0 => _v0.itemListStore.navigationStack),
            _v4 = _v3[_v3.length - 1],
            _v5 = (0, _v25.getFolderId)(_v4),
            _v6 = 2 === _v3.length && _v3[1] === _v24.TEAM_LIBRARY,
            _v7 = _v1.trim().length > 0,
            _v8 = _v2?.sortBy,
            {
              listingParams: _v9,
              loading: _v10
            } = (0, _v14.usePrivateToMeFolderListingParams)(_v0),
            _v11 = !_v7 && _v6 && !!_v0 && !_v10,
            _v12 = !_v7 && !_v6 && !!_v0 && null !== _v5,
            {
              data: _v13,
              error: _v14,
              size: _v15,
              setSize: _v16
            } = (0, _v22.useGetUserProjectsInfinite)(() => _v11 ? {
              where: {
                userId: _v0
              },
              select: _v20.LEVEL_FOLDER_FIELDS,
              query: {
                ..._v9,
                perPage: 100,
                topLevelOnly: !0,
                sort: _v8 ? _v26[_v8] : void 0,
                direction: _v2?.sortDirection
              }
            } : null, {
              revalidateOnFocus: !1,
              revalidateFirstPage: !1
            }),
            {
              data: _v17,
              error: _v18,
              size: _v19,
              setSize: _v20
            } = (0, _v21.useGetUserProjectItemsInfinite)(() => _v12 ? {
              where: {
                userId: _v0,
                projectId: _v5
              },
              select: _v20.LEVEL_SUBFOLDER_FIELDS,
              query: {
                filter: "folder",
                perPage: 100,
                sort: _v8,
                direction: _v2?.sortDirection
              }
            } : null, {
              revalidateOnFocus: !1,
              revalidateFirstPage: !1
            }),
            _v21 = (0, _v23.getInfiniteRequestLoadingState)({
              data: _v13,
              size: _v15,
              itemsPerPage: 100
            }),
            _v22 = (0, _v23.getInfiniteRequestLoadingState)({
              data: _v17,
              size: _v19,
              itemsPerPage: 100
            });
          (0, _v8.useEffect)(() => {
            _v11 && void 0 !== _v13 && !_v21.isDone && !0 !== _v21.isLoadingMore && _v16(_v15 + 1);
          }, [_v11, _v13, _v21.isDone, _v21.isLoadingMore, _v15, _v16]), (0, _v8.useEffect)(() => {
            _v12 && void 0 !== _v17 && !_v22.isDone && !0 !== _v22.isLoadingMore && _v20(_v19 + 1);
          }, [_v12, _v17, _v22.isDone, _v22.isLoadingMore, _v19, _v20]);
          let _v23 = (0, _v8.useMemo)(() => _v6 ? _v13?.flatMap(_v0 => _v0?.data ?? []) : _v17?.flatMap(_v0 => _v0?.data ?? []).map(_v0 => _v0.folder).filter(_v0 => void 0 !== _v0), [_v6, _v13, _v17]);
          return {
            error: _v6 ? _v14 : _v18,
            folders: _v23,
            isLoading: _v11 ? _v21.isLoadingInitialData : !!_v12 && _v22.isLoadingInitialData
          };
        })(),
        _v6 = (0, _v19.useFetchItems)({
          fields: _v49,
          filter: "video",
          matchLibraryRoot: !0
        }),
        _v7 = (0, _v17.useFetchFolderItems)({
          fields: _v49,
          filter: "video"
        }),
        _v8 = (0, _v18.useFetchFolderSearchItems)({
          fields: _v49,
          filter: "folder,video"
        }),
        _v9 = _v4 ? _v8 : _v3 ? _v6 : _v7,
        {
          canLoadMore: _v10,
          isLoading: _v11,
          shouldShowEmptyState: _v12
        } = (({
          data: _v0,
          destinationFolder: _v1,
          folders: _v2,
          size: _v3
        }) => {
          let _v4 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.setItemListData),
            _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs),
            _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setSelectableURIList),
            _v7 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setPrivateItemURIs),
            _v8 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setVideoItems),
            _v9 = (0, _v8.useMemo)(() => _v0?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data), [_v0]),
            _v10 = (0, _v8.useMemo)(() => (_v2 ?? []).filter(_v0 => _v0.uri !== _v1?.uri).map(_v47), [_v2, _v1]),
            _v11 = (0, _v8.useMemo)(() => void 0 === _v9 ? _v10 : [..._v10, ..._v9.map(_v0 => ((_v0, _v1, _v2) => _v0.folder ? _v0.folder.uri === _v1?.uri ? null : {
              ..._v0,
              isSelectable: !1,
              isSelected: !1
            } : _v1 && _v0.video?.parentProject?.uri === _v1.uri ? null : _v0.video ? !_v0.video.canMoveToProject || _v0.video.isColdStorage ? null : {
              ..._v0,
              isSelectable: !0,
              isSelected: _v2.has(_v0.video.uri)
            } : null)(_v0, _v1, _v5)).filter(_v0 => null !== _v0)], [_v9, _v10, _v1, _v5]),
            _v12 = void 0 !== _v9 || void 0 !== _v2,
            _v13 = (0, _v8.useMemo)(() => _v11.filter(_v0 => _v0.isSelectable).map(_v0 => _v0.video?.uri).filter(_v0 => void 0 !== _v0), [_v11]),
            _v14 = (0, _v8.useMemo)(() => new Set(_v11.flatMap(_v0 => {
              let _v1 = _v0.video?.uri,
                _v2 = _v0.video?.parentProject?.isPrivateToUser === !0;
              return void 0 !== _v1 && _v2 ? [_v1] : [];
            })), [_v11]),
            _v15 = (0, _v8.useMemo)(() => _v11.flatMap(_v0 => _v0.video ? [{
              ..._v0.video,
              isSelected: _v0.isSelected
            }] : []), [_v11]);
          (0, _v8.useEffect)(() => {
            if (!_v12) {
              _v4([]), _v6(new Set()), _v8([]);
              return;
            }
            _v4(_v11), _v6(new Set(_v13)), _v8(_v15), _v7(new Set([..._v9.useStore.getState().commonStore.privateItemURIs, ..._v14]));
          }, [_v11, _v12, _v14, _v13, _v4, _v7, _v6, _v8, _v15]);
          let {
              isDone: _v16,
              isLoadingInitialData: _v17,
              isLoadingMore: _v18
            } = (0, _v23.getInfiniteRequestLoadingState)({
              data: _v0,
              size: _v3,
              itemsPerPage: _v24.ITEMS_PER_PAGE
            }),
            _v19 = _v17 || !!_v18,
            _v20 = _v12 && 0 === _v11.length && _v16 && !_v19;
          return {
            canLoadMore: !_v16,
            isLoading: _v19,
            shouldShowEmptyState: _v20
          };
        })({
          data: _v9.data,
          destinationFolder: _v0,
          folders: _v4 ? void 0 : _v5.folders,
          size: _v9.size
        });
      return _v9.error || _v5.error ? (0, _v1.jsx)(_v27.LoadErrorState, {}) : _v9.isLoading || !_v4 && _v5.isLoading ? (0, _v1.jsx)(_v30, {}) : _v12 ? _v4 ? (0, _v1.jsx)(_v33, {}) : (0, _v1.jsx)(_v15.EmptyState, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.ItemListRoot, {
          isLoading: _v11
        }), (0, _v1.jsx)(_v46, {
          canLoadMore: _v10,
          isLoadingMore: _v11,
          onActivate: () => {
            _v9.setSize(_v9.size + 1);
          }
        })]
      });
    };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = ({
    children: _v0,
    onClick: _v1
  }) => {
    let _v2 = (0, _v55.useColorModeValue)("#1A365D0F", "#BEE3F814"),
      _v3 = (0, _v55.useColorModeValue)("#1A365D3D", "#BEE3F83D");
    return (0, _v1.jsx)(_v38.Flex, {
      as: "li",
      alignItems: "center",
      border: "1px solid transparent",
      borderRadius: "0.5rem",
      height: "2.75rem",
      gap: "1rem",
      onClick: _v1,
      padding: "0.75rem",
      role: "button",
      tabIndex: 0,
      onKeyDown: _v0 => {
        _v0?.key === "Enter" && _v1?.();
      },
      _hover: {
        backgroundColor: _v2
      },
      _focusVisible: {
        backgroundColor: "fill-component",
        borderColor: _v3,
        outline: "none"
      },
      children: _v0
    });
  };
  _v56.Label = ({
    children: _v0
  }) => (0, _v1.jsx)(_v34.Box, {
    flex: "1 1",
    children: (0, _v1.jsx)(_v31.Text, {
      variant: "heading-xs",
      children: _v0
    })
  });
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ({
    showLiveEvents: _v0 = !0
  }) => {
    let {
        data: _v1,
        capabilities: _v2,
        contentSpaceEnabled: _v3
      } = (0, _v58.useFetchPrivateFolders)(),
      _v4 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.pushNavigation),
      _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.destinationFolder),
      _v6 = (0, _v57.canBrowseTeamLibrary)({
        destinationFolder: _v5
      }),
      _v7 = _v3 ? (0, _v32.translate)({
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
      }) : (0, _v32.translate)({
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
      _v8 = (0, _v8.useCallback)(() => {
        _v1 && _v4(_v1);
      }, [_v1, _v4]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [!!_v1 && (0, _v1.jsxs)(_v56, {
        onClick: _v8,
        children: [(0, _v1.jsx)(_v51.MyLibrary, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v56.Label, {
          children: (0, _v32.translate)({
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
        }), (0, _v1.jsx)(_v52.ChevronRightSmall, {})]
      }), _v6 && (0, _v1.jsxs)(_v56, {
        onClick: () => _v4("team_library"),
        children: [(0, _v1.jsx)(_v53.TeamLibrary, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v56.Label, {
          children: _v7
        }), (0, _v1.jsx)(_v52.ChevronRightSmall, {})]
      }), _v0 && _v2?.hasVideoLibraryLiveEvents && (0, _v1.jsxs)(_v56, {
        onClick: () => _v4(_v24.LIVE_EVENTS),
        children: [(0, _v1.jsx)(_v54.CameraOn, {
          boxSize: "1.25rem"
        }), (0, _v1.jsx)(_v56.Label, {
          children: (0, _v32.translate)({
            singular: "Live events",
            dictionary: {
              es: {
                singular: "Eventos en vivo"
              },
              "de-DE": {
                singular: "Live-Events"
              },
              "fr-FR": {
                singular: "Évènements en direct"
              },
              "ja-JP": {
                singular: "ライブイベント"
              },
              "ko-KR": {
                singular: "라이브 이벤트"
              },
              "pt-BR": {
                singular: "Eventos ao vivo"
              },
              "zh-CN": {
                singular: "直播活动"
              }
            }
          })
        }), (0, _v1.jsx)(_v52.ChevronRightSmall, {})]
      })]
    });
  };
  var _v60 = _v0.i(0);
  let _v61 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.videoLimitErrorVisibility),
        _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setVideoLimitErrorVisibility);
      return (0, _v1.jsx)(_v60.ErrorAlert, {
        setVisibility: _v1,
        text: (0, _v32.translate)({
          singular: "Add up to 100 videos at a time",
          dictionary: {
            es: {
              singular: "Agregue hasta 100 videos a la vez"
            },
            "de-DE": {
              singular: "Fügen Sie bis zu 100 Videos auf einmal hinzu"
            },
            "fr-FR": {
              singular: "Ajoutez jusqu'à 100 vidéos à la fois."
            },
            "ja-JP": {
              singular: "一度に最大100本の動画を追加"
            },
            "ko-KR": {
              singular: "한 번에 최대 100개의 동영상을 추가하세요."
            },
            "pt-BR": {
              singular: "Adicione até 100 vídeos de cada vez"
            },
            "zh-CN": {
              singular: "一次最多可以添加 100 个视频"
            }
          }
        }),
        visibility: _v0
      });
    },
    _v62 = {
      additionalConfig: {
        layoutLSKey: `${_v24.VL_LAYOUT_LOCAL_STORAGE_KEY}_avtf`
      },
      components: {
        Footer: _v11.Footer,
        Header: _v12.Header,
        PatchErrorAlert: _v13.PatchErrorAlert,
        VideoLimitErrorAlert: _v61,
        VideoList: () => {
          let _v0 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.setShowFolderView),
            _v1 = (0, _v9.useStore)(_v0 => _v0.itemListStore.isAtRoot),
            _v2 = (0, _v9.useStore)(_v0 => 1 === _v0.itemListStore.navigationStack.length),
            _v3 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.pushNavigation),
            _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.destinationFolder),
            _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceOwnerId),
            _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
            {
              data: _v7,
              error: _v8
            } = (0, _v58.useFetchPrivateFolders)(),
            {
              listingParams: _v9,
              loading: _v10
            } = (0, _v14.usePrivateToMeFolderListingParams)(_v5),
            _v11 = _v9.excludePrivateToMeFolder,
            _v12 = _v5 > 0,
            _v13 = (0, _v57.canBrowseTeamLibrary)({
              destinationFolder: _v4
            });
          return ((0, _v8.useEffect)(() => (_v0(!0), () => _v0(!1)), [_v0]), (0, _v8.useEffect)(() => {
            !_v13 && _v7 && _v2 && _v3(_v7);
          }, [_v2, _v13, _v7, _v3]), (0, _v8.useEffect)(() => {
            _v12 && !_v11 && !_v10 && _v13 && _v2 && _v3(_v24.TEAM_LIBRARY);
          }, [_v12, _v11, _v10, _v13, _v2, _v3]), !_v12 || _v10) ? (0, _v1.jsx)(_v30, {}) : _v1 && !_v13 ? _v8 ? (0, _v1.jsx)(_v27.LoadErrorState, {}) : (0, _v1.jsx)(_v30, {}) : _v1 && _v11 && !_v6.trim() ? (0, _v1.jsx)(_v59, {
            showLiveEvents: !1
          }) : _v1 && !_v6.trim() ? (0, _v1.jsx)(_v30, {}) : (0, _v1.jsx)(_v50, {});
        }
      }
    };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = ({
      icon: _v0,
      heading: _v1,
      description: _v2,
      buttonText: _v3,
      buttonHref: _v4
    }) => (0, _v1.jsxs)(_v29.NoVideosContainer, {
      gap: "3",
      children: [(0, _v1.jsxs)(_v38.Flex, {
        direction: "column",
        align: "center",
        justify: "center",
        gap: "xs",
        children: [_v0, (0, _v1.jsx)(_v31.Text, {
          variant: "heading-xs",
          children: _v1
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2
        })]
      }), (0, _v1.jsx)(_v72.Button, {
        as: "a",
        variant: "secondary",
        size: "sm",
        href: _v4,
        target: "_blank",
        rel: "noopener noreferrer",
        rightIcon: (0, _v1.jsx)(_v73.PopOut, {}),
        children: _v3
      })]
    }),
    _v75 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.itemListStore.navigationStack);
      return _v0?.[_v0.length - 1] === _v24.LIVE_EVENTS ? (0, _v1.jsx)(_v74, {
        icon: (0, _v1.jsx)(_v54.CameraOn, {
          boxSize: "xs"
        }),
        heading: (0, _v32.translate)({
          singular: "No events yet",
          dictionary: {
            es: {
              singular: "Aún no hay eventos"
            },
            "de-DE": {
              singular: "Noch keine Events"
            },
            "fr-FR": {
              singular: "Aucun événement pour l'instant"
            },
            "ja-JP": {
              singular: "まだイベントはありません"
            },
            "ko-KR": {
              singular: "아직 이벤트가 없습니다."
            },
            "pt-BR": {
              singular: "Ainda não há eventos"
            },
            "zh-CN": {
              singular: "暂无活动"
            }
          }
        }),
        description: (0, _v32.translate)({
          singular: "Create a new event to add to this showcase",
          dictionary: {
            es: {
              singular: "Cree un nuevo evento para agregar a esta presentación."
            },
            "de-DE": {
              singular: "Erstellen Sie ein neues Event, um es dieser Präsentation hinzuzufügen"
            },
            "fr-FR": {
              singular: "Créez un nouvel événement à ajouter à cette présentation"
            },
            "ja-JP": {
              singular: "このショーケースに追加するイベントを新規作成してください"
            },
            "ko-KR": {
              singular: "이 쇼케이스에 추가할 새 이벤트를 만드세요."
            },
            "pt-BR": {
              singular: "Crie um evento novo para adicionar a esta vitrine"
            },
            "zh-CN": {
              singular: "创建一个新活动以添加到此展示"
            }
          }
        }),
        buttonText: (0, _v32.translate)({
          singular: "New event",
          dictionary: {
            es: {
              singular: "Evento nuevo"
            },
            "de-DE": {
              singular: "Neues Event"
            },
            "fr-FR": {
              singular: "Nouvel événement"
            },
            "ja-JP": {
              singular: "新しいイベント"
            },
            "ko-KR": {
              singular: "새 이벤트"
            },
            "pt-BR": {
              singular: "Novo evento"
            },
            "zh-CN": {
              singular: "新活动"
            }
          }
        }),
        buttonHref: "/library/events"
      }) : (0, _v1.jsx)(_v74, {
        icon: (0, _v1.jsx)(_v71.Upload, {
          boxSize: "xs"
        }),
        heading: (0, _v32.translate)({
          singular: "Upload a video to select it here",
          dictionary: {
            es: {
              singular: "Suba un video para seleccionarlo aquí"
            },
            "de-DE": {
              singular: "Laden Sie ein Video hoch, um es hier auszuwählen"
            },
            "fr-FR": {
              singular: "Mettez en ligne une vidéo pour la sélectionner ici"
            },
            "ja-JP": {
              singular: "ここで選択するために動画をアップロード"
            },
            "ko-KR": {
              singular: "선택하려면 먼저 여기에 동영상을 업로드하세요."
            },
            "pt-BR": {
              singular: "Carregue um vídeo para selecioná-lo aqui"
            },
            "zh-CN": {
              singular: "上传一个视频以在此处选择"
            }
          }
        }),
        description: (0, _v32.translate)({
          singular: "Come back when you're done and refresh this page",
          dictionary: {
            es: {
              singular: "Regrese cuando haya terminado y actualice esta página."
            },
            "de-DE": {
              singular: "Kommen Sie zurück, wenn Sie fertig sind, und aktualisieren Sie diese Seite."
            },
            "fr-FR": {
              singular: "Revenez lorsque vous aurez terminé et actualisez cette page"
            },
            "ja-JP": {
              singular: "完了したらこの画面に戻り、ページを再度読み込んでください。"
            },
            "ko-KR": {
              singular: "작업이 완료되면 돌아와서 이 페이지를 새로 고침하세요."
            },
            "pt-BR": {
              singular: "Volte quando terminar e atualize esta página"
            },
            "zh-CN": {
              singular: "完成后请返回并刷新此页面"
            }
          }
        }),
        buttonText: (0, _v32.translate)({
          singular: "Upload",
          dictionary: {
            es: {
              singular: "Subir"
            },
            "de-DE": {
              singular: "Hochladen"
            },
            "fr-FR": {
              singular: "Importer"
            },
            "ja-JP": {
              singular: "アップロード"
            },
            "ko-KR": {
              singular: "업로드"
            },
            "pt-BR": {
              singular: "Carregar"
            },
            "zh-CN": {
              singular: "上传"
            }
          }
        }),
        buttonHref: "/upload"
      });
    };
  var _v76 = _v0.i(0);
  let _v77 = () => (0, _v1.jsx)(_v29.NoVideosContainer, {
    gap: "3",
    children: (0, _v1.jsxs)(_v38.Flex, {
      direction: "column",
      align: "center",
      justify: "center",
      gap: "xs",
      children: [(0, _v1.jsx)(_v76.CircleCheck, {
        boxSize: "xs"
      }), (0, _v1.jsx)(_v31.Text, {
        variant: "heading-xs",
        children: (0, _v32.translate)({
          singular: "All items have been added",
          dictionary: {
            es: {
              singular: "Se agregaron todos los elementos"
            },
            "de-DE": {
              singular: "Alle Artikel wurden hinzugefügt"
            },
            "fr-FR": {
              singular: "Tous les éléments ont été ajoutés"
            },
            "ja-JP": {
              singular: "すべてのアイテムが追加されました"
            },
            "ko-KR": {
              singular: "모든 항목이 추가되었습니다."
            },
            "pt-BR": {
              singular: "Todos os itens foram adicionados"
            },
            "zh-CN": {
              singular: "所有项目均已添加"
            }
          }
        })
      }), (0, _v1.jsx)(_v31.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v32.translate)({
          singular: "Check another location or {A}upload a video{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v31.Text, {
              as: "a",
              variant: "body-md",
              cursor: "pointer",
              textDecoration: "underline",
              onClick: () => window.open("/upload", "_blank"),
              children: _v0
            }, "upload-link")
          },
          dictionary: {
            es: {
              singular: "Verifique otra ubicación o {A}suba un video{/A}"
            },
            "de-DE": {
              singular: "Sehen Sie an einer anderen Stelle nach oder {A}laden Sie ein Video hoch{/A}."
            },
            "fr-FR": {
              singular: "Vérifiez un autre emplacement ou {A}mettez en ligne une vidéo{/A}"
            },
            "ja-JP": {
              singular: "別の場所を確認するか{A}動画をアップロード{/A}してください"
            },
            "ko-KR": {
              singular: "다른 위치를 확인하거나 {A}동영상을 업로드{/A}하세요."
            },
            "pt-BR": {
              singular: "Verifique outro local ou {A}carregue um vídeo{/A}"
            },
            "zh-CN": {
              singular: "检查其他位置或{A}上传视频{/A}"
            }
          }
        })
      })]
    })
  });
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4 = (0, _v9.useStore)(_v0 => _v0.itemListStore.navigationStack),
        _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
        _v6 = (0, _v9.useStore)(_v0 => _v0.itemListStore.isLiveEventView),
        _v7 = _v4?.length == 2 && _v4?.[1] === _v24.TEAM_LIBRARY,
        _v8 = !!_v5.trim(),
        {
          data: _v9,
          isLoading: _v10,
          error: _v11,
          size: _v12,
          setSize: _v13
        } = (0, _v19.useFetchItems)(),
        {
          data: _v14,
          error: _v15,
          isLoading: _v16,
          size: _v17,
          setSize: _v18
        } = (0, _v17.useFetchFolderItems)(),
        {
          data: _v19,
          isLoading: _v20,
          error: _v21,
          size: _v22,
          setSize: _v23
        } = (0, _v18.useFetchFolderSearchItems)(),
        {
          data: _v24,
          isLoading: _v25,
          error: _v26,
          size: _v27,
          setSize: _v28
        } = (() => {
          let _v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceOwnerId),
            _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.sortValues),
            _v2 = (0, _v9.useStore)(_v0 => _v0.itemListStore.isLiveEventView),
            _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
            {
              data: _v4,
              error: _v5,
              isLoading: _v6,
              setSize: _v7,
              size: _v8,
              mutate: _v9
            } = (0, _v79.useGetUserLiveEventsInfinite)(() => _v0 && _v2 && !_v3 ? {
              select: _v48.LIVE_EVENT_FIELDS,
              where: {
                userId: _v0
              },
              headers: {
                Accept: `application/vnd.vimeo.*+json;version=${_v24.LIVE_EVENT_API_VERSION}`
              },
              query: {
                perPage: _v48.ITEMS_PER_PAGE,
                sort: _v1?.sortBy,
                direction: _v1?.sortDirection,
                filter: "not_in_folder",
                type: "recurring",
                recurring_event_type: "all"
              }
            } : null, {
              revalidateAll: !0,
              revalidateFirstPage: !0
            });
          return {
            data: (0, _v8.useMemo)(() => {
              if (_v4) return _v4.map(_v0 => {
                if (!_v0 || !_v0.data) return _v0;
                let _v1 = _v0.data.map(_v0 => ({
                  type: "live_event",
                  liveEvent: _v0
                }));
                return {
                  ..._v0,
                  data: _v1
                };
              });
            }, [_v4]),
            error: _v5,
            isLoading: _v6,
            mutate: _v9,
            setSize: _v7,
            size: _v8
          };
        })(),
        _v29 = 0;
      _v6 ? (_v0 = _v24, _v1 = _v25, _v2 = _v26, _v29 = _v27, _v3 = _v28) : (_v0 = _v7 ? _v9 : _v14, _v1 = _v7 ? _v10 : _v16, _v2 = _v7 ? _v11 : _v15, _v29 = _v7 ? _v12 : _v17, _v3 = _v7 ? _v13 : _v18), _v8 && (_v0 = _v19, _v1 = _v20, _v2 = _v21, _v29 = _v22, _v3 = _v23);
      let {
        canLoadMore: _v30,
        isLoading: _v31,
        shouldShowEmptyState: _v32,
        shouldShowAllItemsAddedState: _v33
      } = (({
        data: _v0,
        size: _v1
      }) => {
        let _v2 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.setItemListData),
          _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs),
          _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setSelectableURIList),
          _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.showVideoFilter),
          _v6 = (0, _v9.useStore)(_v0 => _v0.itemListStore.itemListData),
          _v7 = (0, _v8.useMemo)(() => _v0?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
            let _v1 = (0, _v78.camelizeString)(_v0.type);
            return _v0[_v1]?.uri;
          })), [_v0]),
          _v8 = (0, _v8.useCallback)((_v0, _v1) => _v0 || !_v5(_v1), [_v5]);
        (0, _v8.useEffect)(() => {
          if (!_v7) return;
          let _v0 = new Set();
          _v2(_v7.map(_v0 => {
            let _v1 = _v0.video?.uri || _v0.liveEvent?.uri || _v0.folder?.uri;
            if (!_v1 || _v0?.liveEvent?.hasRegistration || _v0?.liveEvent && !_v0?.liveEvent?.metadata?.connections?.preLiveVideo?.uri && !_v0?.liveEvent?.metadata?.connections?.liveVideo?.uri) return null;
            if (_v0?.liveEvent) {
              var _v2;
              let _v0;
              _v1 = (_v0 = (_v2 = _v0?.liveEvent?.metadata?.connections?.preLiveVideo?.uri || _v0?.liveEvent?.metadata?.connections?.liveVideo?.uri || "").match(/\/videos\/(\d+)/)) && _v0[1] ? `/videos/${_v0[1]}` : _v2;
            }
            let _v3 = !!_v0?.video?.disabledProperties?.embed?.minTierForCapability;
            if ((_v0?.video || _v0?.liveEvent) && _v8(_v3, _v1)) return;
            (_v0.video?.uri || _v0.liveEvent?.uri) && _v0.add(_v1);
            let _v4 = _v3.has(_v1);
            return {
              ..._v0,
              liveEventVideoUri: _v1,
              isSelectable: !1,
              isSelected: _v4
            };
          }).filter(Boolean)), _v4(_v0);
        }, [_v7, _v2, _v3, _v4]);
        let {
            isDone: _v9,
            isLoadingInitialData: _v10,
            isLoadingMore: _v11
          } = (0, _v23.getInfiniteRequestLoadingState)({
            data: _v0,
            size: _v1,
            itemsPerPage: 20
          }),
          _v12 = _v10 || !!_v11,
          _v13 = _v7?.length === 0 && _v9 && !_v12,
          _v14 = !!(_v7 && _v7?.length > 0 && _v6?.length === 0 && _v9 && !_v12);
        return {
          canLoadMore: !_v9,
          isLoading: _v12,
          shouldShowEmptyState: _v13,
          shouldShowAllItemsAddedState: _v14
        };
      })({
        data: _v0,
        size: _v29
      });
      if (_v2) return (0, _v1.jsx)(_v27.LoadErrorState, {});
      if (_v1) return (0, _v1.jsx)(_v30, {});
      if (_v32) if (_v5) return (0, _v1.jsx)(_v33, {});else return (0, _v1.jsx)(_v75, {});
      if (_v33) if (_v5) return (0, _v1.jsx)(_v33, {});else return (0, _v1.jsx)(_v77, {});
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.ItemListRoot, {
          isLoading: _v31
        }), (0, _v1.jsx)(_v46, {
          canLoadMore: _v30,
          isLoadingMore: _v31,
          onActivate: () => _v3(_v29 + 1)
        })]
      });
    },
    _v81 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.itemListStore.isAtRoot),
        _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery);
      return _v0 && !_v1.trim() ? (0, _v1.jsx)(_v59, {}) : (0, _v1.jsx)(_v80, {});
    },
    _v82 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.itemListStore.actions.setShowFolderView);
      return (0, _v8.useEffect)(() => (_v0(!0), () => _v0(!1)), [_v0]), (0, _v1.jsx)(_v81, {});
    },
    _v83 = {
      additionalConfig: {
        layoutLSKey: `${_v24.VL_LAYOUT_LOCAL_STORAGE_KEY}_avtsm`
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2
        }) => {
          let {
              handleModalClose: _v3
            } = (0, _v64.useCloseModal)(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v4
                }
              }
            } = (0, _v65.useResponsiveDesign)(),
            {
              addVideoToShowcase: _v5,
              isButtonDisabled: _v6,
              patchResponse: {
                loading: _v7
              }
            } = (({
              onSuccess: _v0
            }) => {
              let {
                  handleModalClose: _v1
                } = (0, _v64.useCloseModal)(),
                _v2 = (0, _v66.useToast)(),
                {
                  actions: {
                    setPatchErrorVisibility: _v3,
                    setPatchFailureReason: _v4
                  },
                  resourceId: _v5,
                  selectedItemURIs: _v6,
                  patchErrorVisibility: _v7
                } = (0, _v9.useStore)(_v0 => _v0.commonStore),
                [_v8, _v9] = (0, _v67.usePatchAlbumVideos)(),
                {
                  data: _v10,
                  error: _v11,
                  loading: _v12
                } = _v9,
                _v13 = (0, _v8.useRef)(null),
                _v14 = Array.from(_v6).map(_v0 => ({
                  video: {
                    uri: _v0
                  }
                }));
              return (0, _v8.useEffect)(() => {
                if (_v12 || _v11 || !_v10 || _v13.current === _v10) !_v12 && _v11 && void 0 === _v7 && _v3(!0);else {
                  _v13.current = _v10;
                  let _v0 = (0, _v68.extractFailedAdds)(_v10),
                    _v1 = new Set(_v0.flatMap(({
                      uri: _v0
                    }) => void 0 !== _v0 ? [_v0] : [])),
                    _v2 = Array.from(_v6).filter(_v0 => !_v1.has(_v0)).length,
                    _v3 = _v0.filter(({
                      reason: _v0
                    }) => _v0 !== _v68.DUPLICATE_CLIP_REASON);
                  if (_v3.length > 0) {
                    _v4(_v3[0].reason), _v3(!0), _v2 > 0 && _v0?.(void 0, _v2);
                    return;
                  }
                  if (_v0.length > 0) {
                    _v2({
                      isClosable: !1,
                      title: (0, _v32.translate)({
                        singular: "Some of the selected videos are already in this showcase.",
                        dictionary: {
                          es: {
                            singular: "Algunos de los videos seleccionados ya están en este showcase."
                          },
                          "de-DE": {
                            singular: "Einige der ausgewählten Videos sind bereits in diesem Showcase."
                          },
                          "fr-FR": {
                            singular: "Certaines vidéos sélectionnées sont déjà dans cette showcase."
                          },
                          "ja-JP": {
                            singular: "選択した動画の一部は既にこのショーケースにあります。"
                          },
                          "ko-KR": {
                            singular: "선택한 동영상 중 일부는 이미 이 쇼케이스에 있습니다."
                          },
                          "pt-BR": {
                            singular: "Alguns dos vídeos selecionados já estão nesta showcase."
                          },
                          "zh-CN": {
                            singular: "部分所选视频已存在于此展示中。"
                          }
                        }
                      })
                    }), _v1();
                    return;
                  }
                  _v0?.(void 0, _v6.size), _v1(), _v2({
                    isClosable: !1,
                    title: (0, _v32.translate)({
                      singular: "{count} video added",
                      plural: "{count} videos added",
                      count: _v6.size ?? 0,
                      replacements: {
                        count: _v6.size ?? 0
                      },
                      dictionary: {
                        es: {
                          singular: "Se ha agregado {count} video",
                          plural: "Se han agregado {count} videos"
                        },
                        "de-DE": {
                          singular: "{count} Video hinzugefügt",
                          plural: "{count} Videos hinzugefügt"
                        },
                        "fr-FR": {
                          singular: "{count} vidéo ajoutée",
                          plural: "{count} vidéos ajoutées"
                        },
                        "ja-JP": {
                          singular: "{count}件の動画が追加されました",
                          plural: "{count}件の動画が追加されました"
                        },
                        "ko-KR": {
                          singular: "{count}개의 동영상이 추가되었습니다.",
                          plural: "{count}개의 동영상이 추가되었습니다."
                        },
                        "pt-BR": {
                          singular: "{count} vídeo adicionado",
                          plural: "{count} vídeos adicionados"
                        },
                        "zh-CN": {
                          singular: "已添加 {count} 个视频",
                          plural: "已添加 {count} 个视频"
                        }
                      }
                    })
                  });
                }
              }, [_v10, _v11, _v1, _v12, _v0, _v7, _v6, _v6.size, _v3, _v4, _v2]), {
                addVideoToShowcase: () => {
                  !1 === _v7 && (_v3(), _v4()), _v13.current = null, _v8({
                    headers: {
                      Accept: `application/vnd.vimeo.*+json;version=${_v24.VIDEOS_API_VERSION}`
                    },
                    where: {
                      albumId: _v5
                    },
                    select: ["uri"],
                    variables: {
                      set: _v14
                    }
                  });
                },
                isButtonDisabled: () => !_v6.size || _v6.size > _v24.SELECTION_LIMIT,
                patchResponse: _v9
              };
            })({
              onSuccess: _v2
            });
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v63.FooterButton, {
              ref: _v0,
              _focus: _v1(),
              onClick: () => {
                _v3();
              },
              ..._v4,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v63.FooterButton, {
              isLoading: _v7,
              onClick: _v5,
              variant: "primary",
              isDisabled: _v6(),
              children: (0, _v32.translate)({
                singular: "Add to showcase",
                dictionary: {
                  es: {
                    singular: "Agregar a presentación"
                  },
                  "de-DE": {
                    singular: "Zu Präsentation hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter à la présentation"
                  },
                  "ja-JP": {
                    singular: "ショーケースに追加"
                  },
                  "ko-KR": {
                    singular: "쇼케이스에 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar à vitrine"
                  },
                  "zh-CN": {
                    singular: "添加到橱窗"
                  }
                }
              })
            })]
          });
        },
        Header: _v69.Header,
        PatchErrorAlert: () => (0, _v1.jsx)(_v70.PatchErrorAlert, {
          text: (0, _v32.translate)({
            singular: "Couldn’t add to showcase. Try refreshing the page.",
            dictionary: {
              es: {
                singular: "Error al agregar a la presentación. Intente actualizando la página."
              },
              "de-DE": {
                singular: "Konnte nicht zur Präsentation hinzugefügt werden. Versuchen Sie, die Seite zu aktualisieren."
              },
              "fr-FR": {
                singular: "Impossible d'ajouter à la présentation. Essayez d'actualiser la page."
              },
              "ja-JP": {
                singular: "ショーケースに追加できませんでした。ページを更新してみてください。"
              },
              "ko-KR": {
                singular: "쇼케이스에 추가할 수 없습니다. 페이지를 새로 고침해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível adicionar à vitrine. Tente atualizar a página."
              },
              "zh-CN": {
                singular: "无法添加到展示栏。请尝试刷新页面。"
              }
            }
          })
        }),
        VideoLimitErrorAlert: _v61,
        VideoList: _v82
      }
    };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  async function _v87({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      albumId: _v4,
      videoId: _v5
    },
    ..._v6
  }) {
    return (0, _v85.measureLatency)("postUserAlbumVideoSetAlbumThumbnail", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/albums/${_v4}/videos/${_v5}/set_album_thumbnail?fields=${_v1.map(_v86.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "POST",
        body: JSON.stringify((0, _v86.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v86.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v86.deepCamelCase)(_v1);
    });
  }
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = () => {
      let _v0,
        _v1,
        _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.featuredContentSortValues),
        _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.videoItems),
        _v4 = _v2?.sortKey ? _v24.featuredContentSortOptions[_v2.sortKey] : void 0,
        {
          handleSortChange: _v5
        } = (_v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.additionalProps?.showcaseSort), _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setFeaturedContentSort), (0, _v8.useEffect)(() => {
          let _v0 = _v0 ?? _v10.FeaturedContentSortOption.MANUAL,
            {
              sortDirection: _v1,
              sortBy: _v2
            } = _v24.featuredContentSortOptions[_v0];
          _v1(_v0, _v2, _v1);
        }, []), {
          handleSortChange: (_v0, _v1, _v2) => {
            _v1(_v0, _v1, _v2);
          }
        });
      return (0, _v1.jsx)(_v91.SortSelect, {
        sortOptions: _v24.featuredContentSortOptions,
        selectedOptionText: _v4?.text || _v24.featuredContentSortOptions[_v10.FeaturedContentSortOption.MANUAL]?.text,
        isDisabled: !_v3.length,
        onSortChange: _v5,
        currentSortKey: _v2?.sortKey,
        placement: "bottom-start"
      });
    },
    _v93 = () => (0, _v1.jsxs)(_v38.Flex, {
      justify: "space-between",
      children: [(0, _v1.jsx)(_v92, {}), (0, _v1.jsx)(_v90.LayoutToggle, {})]
    });
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = ({
      isLoading: _v0,
      videoListData: _v1
    }) => {
      let _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs);
      return (0, _v1.jsxs)(_v34.Box, {
        w: "100%",
        display: "grid",
        gap: "3",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        sx: _v42.responsiveGridSx,
        children: [_v1?.map(_v0 => (0, _v1.jsx)(_v96.VideoListGrid, {
          video: _v0,
          isSelected: _v2.has(_v0.uri)
        }, _v0.uri)), _v0 && (0, _v1.jsx)(_v95.LoadingStateGrid, {})]
      });
    },
    _v98 = ({
      isLoading: _v0,
      videoListData: _v1
    }) => (0, _v1.jsx)(_v97, {
      isLoading: _v0,
      videoListData: _v1
    });
  var _v99 = _v0.i(0);
  let _v100 = ({
    videoListData: _v0,
    getTimestamp: _v1
  }) => {
    let _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0?.map(_v0 => (0, _v1.jsx)(_v99.VideoListRow, {
        video: _v0,
        isSelected: _v2.has(_v0.uri),
        timestamp: _v1?.(_v0)
      }, _v0.uri))
    });
  };
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = ({
      videoListData: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        _v4 = (_v1 = (0, _v101.useViewer)(), _v2 = _v1?.locale, _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.featuredContentSortValues), (0, _v8.useCallback)(_v0 => {
          let _v1 = _v3?.sortBy === _v10.FeaturedContentSortOption.MODIFIED ? _v0?.modifiedTime : _v0.createdTime;
          return (0, _v102.formatDateTime)(_v1, _v2);
        }, [_v3, _v2]));
      return (0, _v1.jsx)(_v100, {
        videoListData: _v0,
        getTimestamp: _v4
      });
    },
    _v104 = ({
      videoListData: _v0,
      setSize: _v1,
      size: _v2,
      isDone: _v3,
      isLoadingInitialData: _v4,
      isLoadingMore: _v5
    }) => {
      let _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.layout),
        _v7 = _v4 || !!_v5;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 === _v10.LAYOUT.LIST ? (0, _v1.jsx)(_v103, {
          videoListData: _v0
        }) : (0, _v1.jsx)(_v98, {
          isLoading: _v7,
          videoListData: _v0
        }), (0, _v1.jsx)(_v46, {
          canLoadMore: !_v3,
          isLoadingMore: _v7,
          onActivate: () => _v1(_v2 + 1)
        })]
      });
    };
  var _v105 = _v0.i(0);
  let _v106 = ["configUrl", "createdTime", "modifiedTime", "description", "duration", "manageLink", "link", "live.archivedTime", "live.recurringEvent.album", "live.recurringEvent.link", "live.recurringEvent.preferredStreamMethod", "live.recurringEvent.metadata.connections.liveVideo.status", "live.recurringEvent.status", "live.recurringEvent.eventType", "live.recurringEvent.nextOccurrenceTime", "live.status", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.uri", "pictures.defaultPicture", "privacy.download", "privacy.embed", "privacy.view", "privacy.originalView", "resourceKey", "type", "uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri", "metadata.interactions.album"],
    _v107 = {
      additionalConfig: {
        layoutLSKey: `${_v24.VL_LAYOUT_LOCAL_STORAGE_KEY}_ssfcm`,
        singleSelect: !0
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2,
          onCancel: _v3
        }) => {
          let {
              handleModalClose: _v4
            } = (0, _v64.useCloseModal)(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v5
                }
              }
            } = (0, _v65.useResponsiveDesign)(),
            {
              isLoading: _v6,
              saveVideoThumbnail: _v7,
              isButtonDisabled: _v8
            } = (({
              onSuccess: _v0
            }) => {
              let {
                  handleModalClose: _v1
                } = (0, _v64.useCloseModal)(),
                _v2 = (0, _v66.useToast)(),
                _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.patchErrorVisibility),
                _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs),
                _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.videoItems),
                _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceId),
                _v7 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceOwnerId),
                _v8 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setPatchErrorVisibility),
                [_v9, {
                  data: _v10,
                  loading: _v11,
                  error: _v12
                }] = function () {
                  let {
                      mutate: _v0
                    } = (0, _v88.useSWRConfig)(),
                    {
                      baseUrl: _v1,
                      jwt: _v2,
                      xVimeoPage: _v3,
                      locale: _v4
                    } = (0, _v89.useGctlConfig)(),
                    [_v5, _v6] = (0, _v84.useInternalState)();
                  return [(0, _v8.useCallback)(async _v0 => {
                    _v6({
                      type: "REQUEST"
                    });
                    try {
                      let _v0 = await _v0(`/users/${_v0.where.userId}/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/set_album_thumbnail${(0, _v84.serializeQuery)(_v0)}`, _v87({
                        ..._v0,
                        baseUrl: _v1,
                        headers: {
                          ..._v0.headers,
                          "Content-Type": "application/json",
                          Authorization: _v2 ? `jwt ${_v2}` : "",
                          "Vimeo-Page": `${_v3}`,
                          "Accept-Language": _v4 ?? "en"
                        }
                      }), !1);
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
                _v13 = (0, _v8.useMemo)(() => [..._v4][0], [_v4]),
                _v14 = (0, _v8.useMemo)(() => _v5.find(_v0 => _v0.uri === _v13), [_v5, _v13]),
                _v15 = (0, _v8.useMemo)(() => ({
                  videoId: Number(_v14?.uri?.split("/").pop()),
                  userId: Number(_v14?.user?.uri.split("/").pop())
                }), [_v14]);
              return (0, _v8.useEffect)(function () {
                try {
                  if (!_v11 && _v12) throw Error("Error saving thumbnail");
                  if (!_v11 && _v10) if (_v10?.pictures?.[0]) _v0?.(_v13), _v1(), _v2({
                    title: (0, _v32.translate)({
                      singular: "Changes saved",
                      dictionary: {
                        es: {
                          singular: "Guardamos los cambios"
                        },
                        "de-DE": {
                          singular: "Änderungen wurden gespeichert"
                        },
                        "fr-FR": {
                          singular: "Changements sauvegardés"
                        },
                        "ja-JP": {
                          singular: "変更内容が保存されました"
                        },
                        "ko-KR": {
                          singular: "변경 사항 저장 완료"
                        },
                        "pt-BR": {
                          singular: "Alterações salvas"
                        },
                        "zh-CN": {
                          singular: "已保存更改"
                        }
                      }
                    }),
                    status: "success"
                  });else throw Error("Error saving thumbnail");
                } catch (_v0) {
                  void 0 === _v3 && _v8(!0);
                }
              }, [_v11, _v10, _v12]), {
                saveVideoThumbnail: () => {
                  !1 === _v3 && _v8(), _v9({
                    where: {
                      albumId: _v6,
                      videoId: _v15?.videoId,
                      userId: _v7 ?? _v15?.userId
                    },
                    select: ["pictures"],
                    headers: {
                      Accept: `application/vnd.vimeo.*+json;version=${_v24.VIDEOS_API_VERSION}`
                    }
                  });
                },
                isLoading: _v11,
                isButtonDisabled: () => !_v14
              };
            })({
              onSuccess: _v2
            });
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v63.FooterButton, {
              ref: _v0,
              _focus: _v1(),
              onClick: () => {
                _v4(), _v3?.();
              },
              ..._v5,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v63.FooterButton, {
              onClick: _v7,
              variant: "primary",
              isLoading: _v6,
              isDisabled: _v8(),
              children: (0, _v32.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
            singular: "Select a video",
            dictionary: {
              es: {
                singular: "Seleccionar un video"
              },
              "de-DE": {
                singular: "Video auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner une vidéo"
              },
              "ja-JP": {
                singular: "動画を選択"
              },
              "ko-KR": {
                singular: "동영상 선택"
              },
              "pt-BR": {
                singular: "Selecione um vídeo"
              },
              "zh-CN": {
                singular: "选择视频"
              }
            }
          }), (0, _v1.jsx)(_v94.Search, {}), (0, _v1.jsx)(_v93, {})]
        }),
        PatchErrorAlert: () => (0, _v1.jsx)(_v70.PatchErrorAlert, {
          text: (0, _v32.translate)({
            singular: "Couldn’t save changes. Try reloading the page.",
            dictionary: {
              es: {
                singular: "No se pudieron guardar los cambios. Intente volver a cargar la página."
              },
              "de-DE": {
                singular: "Änderungen konnten nicht gespeichert werden. Versuchen Sie, die Seite neu zu laden."
              },
              "fr-FR": {
                singular: "Impossible d'enregistrer les modifications. Essayez d'actualiser la page."
              },
              "ja-JP": {
                singular: "変更を保存できませんでした。ページを再読み込みしてください。"
              },
              "ko-KR": {
                singular: "변경 사항을 저장하지 못했습니다. 페이지를 다시 로드해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível salvar as alterações. Tente recarregar a página."
              },
              "zh-CN": {
                singular: "无法保存更改。请尝试重新加载页面。"
              }
            }
          })
        }),
        VideoList: () => {
          let {
            isInitialLoadingFailed: _v0,
            videoListData: _v1,
            isLoading: _v2,
            setSize: _v3,
            size: _v4,
            isLoadingInitialData: _v5,
            isLoadingMore: _v6,
            isVideoItemsEmpty: _v7,
            isDone: _v8,
            query: _v9
          } = (() => {
            let _v0 = (0, _v9.useStore)(_v0 => _v0.commonStore.resourceId),
              _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.videoItems),
              _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.searchQuery),
              _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.featuredContentSortValues),
              _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.additionalProps),
              _v5 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setLoadMoreErrorVisibility),
              _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setVideoItems),
              _v7 = (0, _v105.useDebouncedValue)(_v2, 500),
              {
                data: _v8,
                size: _v9,
                isLoading: _v10,
                error: _v11,
                setSize: _v12
              } = (0, _v67.useGetAlbumVideosInfinite)(() => ({
                select: _v106,
                where: {
                  albumId: _v0
                },
                query: {
                  perPage: _v24.ITEMS_PER_PAGE,
                  query: _v7.trim() ? _v7 : void 0,
                  sort: _v3?.sortBy,
                  direction: _v3?.sortDirection
                },
                headers: {
                  Accept: `application/vnd.vimeo.*+json;version=${_v24.VIDEOS_API_VERSION}`
                }
              }), {
                revalidateOnFocus: !1,
                errorRetryCount: 0
              }),
              {
                isLoadingInitialData: _v13,
                isLoadingMore: _v14,
                isDone: _v15
              } = (0, _v8.useMemo)(() => (0, _v23.getInfiniteRequestLoadingState)({
                data: _v8,
                size: _v9,
                itemsPerPage: _v24.ITEMS_PER_PAGE
              }), [_v8, _v9]);
            return (0, _v8.useEffect)(function () {
              try {
                if (_v11 && 1 !== _v9 || _v5(!1), !_v10 && _v11) throw Error("Error fetching data");
                if (!_v10 && _v8) {
                  let _v0 = _v8.flatMap(_v0 => _v0.data);
                  if (_v0) {
                    let _v0 = _v4?.hideUpcoming === !0 ? _v0.filter(_v0 => !(_v0?.live && !_v0.live.archivedTime && _v0.live.recurringEvent?.album?.id === _v0)) : _v0;
                    _v6(_v0);
                  } else throw Error("Data is empty");
                }
              } catch (_v0) {
                _v9 > 1 && _v5(!0);
              }
            }, [_v8, _v10, _v11]), {
              isInitialLoadingFailed: () => !!_v11 && 1 === _v9,
              videoListData: _v1,
              size: _v9,
              isLoading: _v10,
              setSize: _v12,
              isLoadingInitialData: _v13,
              isLoadingMore: _v14,
              isVideoItemsEmpty: () => 0 === _v1.length,
              query: _v7,
              isDone: _v15
            };
          })();
          return _v2 ? (0, _v1.jsx)(_v30, {}) : _v0() ? (0, _v1.jsx)(_v27.LoadErrorState, {}) : _v7() && _v8 && _v9 ? (0, _v1.jsx)(_v33, {}) : (0, _v1.jsx)(_v104, {
            size: _v4,
            videoListData: _v1,
            setSize: _v3,
            isLoadingInitialData: _v5,
            isLoadingMore: _v6,
            isDone: _v8
          });
        }
      }
    };
  var _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = () => {
      let _v0 = (0, _v9.useStore)(_v0 => _v0.itemListStore.showFolderView),
        {
          sortOptions: _v1,
          selectedOptionText: _v2,
          isDisabled: _v3,
          handleSortChange: _v4,
          sortValues: _v5
        } = (0, _v109.useSortSelect)();
      return (0, _v1.jsxs)(_v38.Flex, {
        direction: "column",
        gap: "sm",
        children: [_v0 && (0, _v1.jsx)(_v108.Breadcrumbs, {}), (0, _v1.jsx)(_v38.Flex, {
          justify: "end",
          children: (0, _v1.jsxs)(_v38.Flex, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v91.SortSelect, {
              sortOptions: _v1,
              selectedOptionText: _v2,
              isDisabled: _v3,
              onSortChange: _v4,
              currentSortKey: _v5?.sortKey
            }), (0, _v1.jsx)(_v90.LayoutToggle, {})]
          })
        })]
      });
    },
    _v111 = {
      additionalConfig: {
        layoutLSKey: `${_v24.VL_LAYOUT_LOCAL_STORAGE_KEY}_vft`,
        singleSelect: !0,
        defaultLayout: _v10.LAYOUT.GRID
      },
      components: {
        Footer: ({
          cancelButtonRef: _v0,
          getFooterFocusStyles: _v1,
          onSuccess: _v2
        }) => {
          let {
              handleModalClose: _v3,
              resetStores: _v4
            } = (0, _v64.useCloseModal)(),
            {
              responsiveDesign: {
                footer: {
                  closeButtonProps: _v5
                }
              }
            } = (0, _v65.useResponsiveDesign)(),
            _v6 = (0, _v9.useStore)(_v0 => _v0.commonStore.selectedItemURIs),
            _v7 = 1 !== _v6.size;
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v63.FooterButton, {
              ref: _v0,
              _focus: _v1(),
              onClick: _v3,
              ..._v5,
              children: (0, _v32.translate)({
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
            }), (0, _v1.jsx)(_v63.FooterButton, {
              variant: "primary",
              isDisabled: _v7,
              onClick: () => {
                let _v0 = [..._v6][0];
                _v4(), _v2?.(_v0);
              },
              children: (0, _v32.translate)({
                singular: "Select",
                dictionary: {
                  es: {
                    singular: "Seleccionar"
                  },
                  "de-DE": {
                    singular: "Auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner"
                  },
                  "ja-JP": {
                    singular: "選択"
                  },
                  "ko-KR": {
                    singular: "선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar"
                  },
                  "zh-CN": {
                    singular: "选择"
                  }
                }
              })
            })]
          });
        },
        Header: () => (0, _v1.jsxs)(_v38.Flex, {
          direction: "column",
          gap: "md",
          children: [(0, _v32.translate)({
            singular: "Select a video",
            dictionary: {
              es: {
                singular: "Seleccionar un video"
              },
              "de-DE": {
                singular: "Video auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner une vidéo"
              },
              "ja-JP": {
                singular: "動画を選択"
              },
              "ko-KR": {
                singular: "동영상 선택"
              },
              "pt-BR": {
                singular: "Selecione um vídeo"
              },
              "zh-CN": {
                singular: "选择视频"
              }
            }
          }), (0, _v1.jsx)(_v94.Search, {}), (0, _v1.jsx)(_v110, {})]
        }),
        PatchErrorAlert: () => null,
        VideoList: _v82
      }
    },
    _v112 = {
      [_v10.VideoListModalType.ADD_VIDEO_TO_FOLDER]: _v62,
      [_v10.VideoListModalType.ADD_VIDEO_TO_SHOWCASE]: _v83,
      [_v10.VideoListModalType.SET_SHOWCASE_FEATURED_CONTENT]: _v107,
      [_v10.VideoListModalType.VIDEO_FILE_TRANSFER]: _v111
    };
  _v0.s(["VideoListModal", 0, ({
    closeVideoModal: _v0,
    destinationFolder: _v1,
    resourceId: _v2,
    resourceOwnerId: _v3,
    showVideoFilter: _v4,
    type: _v5,
    selectedVideo: _v6,
    additionalProps: _v7,
    ..._v8
  }) => {
    (0, _v7.useInitializeModalData)({
      closeVideoModal: _v0,
      destinationFolder: _v1,
      resourceId: _v2,
      resourceOwnerId: _v3,
      showVideoFilter: _v4,
      selectedVideo: _v6,
      additionalProps: _v7
    });
    let {
      isModalConfigReady: _v9
    } = (({
      type: _v0
    }) => {
      let _v1 = _v112[_v0],
        {
          modalConfig: _v2,
          actions: {
            setModalConfig: _v3
          }
        } = (0, _v9.useStore)(_v0 => _v0.commonStore);
      return (0, _v8.useEffect)(() => {
        _v3(_v1);
      }, [_v1, _v3]), {
        isModalConfigReady: () => Object.keys(_v2).length > 0
      };
    })({
      type: _v5
    });
    return _v9() ? (0, _v1.jsx)(_v3.PlayerContextProvider, {
      assetUrls: (0, _v2.getPlayerAssetUrls)(),
      type: _v4.PlayerType.BarebonePlayer,
      children: (0, _v1.jsx)(_v6.StorageLimitPaywallProvider, {
        children: (0, _v1.jsx)(_v5.Modal, {
          ..._v8
        })
      })
    }) : null;
  }], 0);
}