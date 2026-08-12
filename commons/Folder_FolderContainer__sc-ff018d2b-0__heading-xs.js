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
    _v29 = _v0.i(0);
  let _v30 = _v27.default.div.withConfig({
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
    }) => _v0 || _v29.bokehTheme.colors.gray["300"]};
`,
    _v31 = ({
      title: _v0,
      color: _v1
    }) => (0, _v1.jsx)(_v30, {
      folderColor: _v1,
      children: (0, _v1.jsx)(_v28.Text, {
        variant: "heading-xs",
        color: _v29.bokehTheme.colors.white,
        children: _v0
      })
    });
  var _v32 = _v0.i(0),
    _v33 = (0, _v2.forwardRef)(function (_v0, _v1) {
      return _v2.default.createElement("svg", (0, _v32.c)({
        viewBox: "0 0 20 18",
        ref: _v1
      }, _v0), _v2.default.createElement("path", {
        d: "M18 18H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8l1.33 3H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zM2 2v14h16V5h-8L8.7 2z",
        fill: "#1a2e3b"
      }));
    });
  let _v34 = (0, _v27.default)(_v33).withConfig({
    displayName: "FolderIcon",
    componentId: "sc-e761af13-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  var _v35 = _v0.i(0);
  let _v36 = (0, _v27.default)(_v35.Lock).withConfig({
    displayName: "LockIcon",
    componentId: "sc-f50a552-0"
  })`
  path {
    fill: ${({
    theme: _v0
  }) => _v0.formats.basic};
  }
`;
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v17.useAppSelector)(_v16.videoSessionIdSelector),
      _v1 = (0, _v17.useAppSelector)(_v16.storyboardIdSelector),
      _v2 = (0, _v17.useAppSelector)(_v16.durationSelector),
      {
        trackEditorMediaAdded: _v3
      } = (0, _v5.useEditorTracking)(),
      [_v4, _v5] = (0, _v2.useState)(null),
      [_v6, _v7] = (0, _v2.useState)([]),
      {
        contentSpaceEnabled: _v8
      } = (0, _v3.useContentSpaceEnabled)(_v15.default.teamOwnerId),
      _v9 = _v8 ? _v21.MediaLibraryItemsType.TEAM_LIBRARY : _v21.MediaLibraryItemsType.LIBRARY,
      _v10 = _v21.MediaLibraryItemsType.MY_LIBRARY,
      [_v11, _v12] = (0, _v2.useState)({
        itemsType: _v9,
        direction: _v20.MediaLibraryDirectionMethod.DESCENDING,
        sort: _v22.MediaLibrarySortingMethod.MODIFIED
      }),
      {
        uploadMedia: _v13
      } = (0, _v13.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v14
      } = (0, _v10.useMediaElement)(),
      {
        handleMediaItemClickOrDrag: _v15
      } = (0, _v11.useMediaItemClick)(),
      {
        isReplacing: _v16
      } = (0, _v12.useReplaceElement)(),
      _v17 = (_v0, _v1) => {
        _v12(_v0 => ({
          ..._v0,
          ...{
            [_v0]: _v1
          }
        })), _v0 !== _v9.MediaLibraryFilterName.keywords && (0, _v25.sendTrackChangeMediaFilter)({
          mediaTab: _v19.MediaInspectorTabType.LIBRARY,
          copy: _v9.MediaLibraryFilterName[_v0],
          selectionName: _v1 ?? ""
        });
      },
      _v18 = (0, _v2.useCallback)(_v0 => {
        _v11.keywords && _v17("keywords", ""), _v0 && (_v5({
          id: _v0.uri.match(/\/([^\/]+)\/?$/)?.[1] || "",
          title: _v0.name
        }), _v4 ? _v7(_v0 => [{
          id: _v4.id || "",
          title: _v4?.title || "",
          isPrivate: _v4?.isPrivate
        }, ..._v0]) : _v7([{
          id: "",
          title: _v11.itemsType,
          isPrivate: _v11.itemsType === _v10
        }]));
      }, [_v11.keywords, _v11.itemsType, _v4, _v10]),
      _v19 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
          time: _v2
        } = _v1 || {};
        return (0, _v24.sendTrackAddMedia)({
          mediaSelectionAction: _v16 ? "replace" : "add",
          mediaSource: "library",
          mediaType: _v0.type
        }), _v3({
          editorSessionId: _v1,
          editorMediaSource: "library",
          editorMediaType: _v0.type
        }), _v14({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2 ?? _v2
        });
      }, [_v14, _v16, _v1, _v2, _v3]),
      _v20 = (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        element: _v1
      }) => {
        (0, _v38.trackUploadStart)(_v0, _v0);
        let {
          status: _v2
        } = await _v13({
          origin: _v23.UploadMediaOrigin.VIMEO,
          mediaItem: _v0,
          isReplacing: _v16,
          elementSourceHash: _v1.sourceHash
        });
        (0, _v38.trackUploadFinish)(_v0, _v2, _v0);
      }, [_v16, _v13, _v0]),
      _v21 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        if (_v1?.folder) {
          let _v0 = _v1.folder.metadata?.connections?.items?.total;
          return (0, _v1.jsx)(_v37.Box, {
            id: _v1.folder?.settings?.folderUri || "",
            gridStyleType: _v19.GridStyleType.LANDSCAPE,
            width: _v0,
            isActive: !1,
            testid: "library-folder-item",
            onClick: () => _v1.folder && _v18(_v1.folder),
            overlay: (0, _v1.jsx)(_v31, {
              title: _v1.folder.name,
              color: _v1.folder?.settings?.color
            }),
            title: _v1.folder.name,
            icon: _v1.folder.isPrivateToUser ? (0, _v1.jsx)(_v36, {}) : (0, _v1.jsx)(_v34, {}),
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
          let _v0 = (0, _v26.convertVimeoVideo)(_v1.video);
          return (0, _v1.jsx)(_v37.Box, {
            id: _v0.id,
            gridStyleType: _v19.GridStyleType.LANDSCAPE,
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
              type: _v18.DnDItemType.GRID_ELEMENT_MEDIA,
              createElement: _v0 => _v15({
                mediaItem: _v0,
                draggableData: _v0,
                createElement: _v19,
                handleElementAdded: _v20
              }),
              onElementAdded: ({
                element: _v0
              }) => {
                _v20({
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
              type: _v14.ExpandType.MEDIA,
              videoUrl: _v0.previewUrl,
              imageUrl: _v0.thumbnailUrl,
              height: _v0.height,
              width: _v0.width,
              orientation: _v0.orientation
            },
            onClick: () => _v15({
              mediaItem: _v0,
              createElement: _v19,
              handleElementAdded: _v20
            }),
            isShowPlusButton: !0
          }, _v0.id);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v18, _v15, _v19, _v20]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.default, {
        onChange: _v17,
        selectedItemType: _v11.itemsType,
        keywords: _v11.keywords,
        selectedDirection: _v11.direction,
        selectedSort: _v11.sort,
        selectedFolder: _v4,
        parentFolders: _v6,
        navigateBack: _v0 => {
          if (_v0) {
            let _v0 = _v6.slice(),
              _v1 = _v0.findIndex(_v0 => _v0.id === _v0),
              _v2 = _v0[_v1];
            _v7(_v0.splice(_v1 + 1)), _v2 && _v5({
              id: _v2?.id || "",
              title: _v2?.title || ""
            });
          } else _v5(null);
        },
        hasContentSpaceEnabled: _v8
      }), (0, _v1.jsx)(_v39.MediaGridContainer, {
        padRight: !1,
        children: _v11.itemsType === _v9 ? (0, _v1.jsx)(_v8.default, {
          renderItem: _v21,
          selectedFolderId: _v4?.id,
          sort: _v11.sort,
          direction: _v11.direction,
          keywords: _v11.keywords
        }) : (0, _v1.jsx)(_v7.default, {
          renderItem: _v21,
          selectedFolderId: _v4?.id,
          sort: _v11.sort,
          direction: _v11.direction,
          keywords: _v11.keywords
        })
      })]
    });
  }], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  async function _v43({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      shop: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v41.measureLatency)("getUserEcommerceShopifyShopProducts", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops/${_v3}/products?${(0, _v42.searchQueryString)(_v4)}&fields=${_v1.map(_v42.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v42.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v42.deepCamelCase)(_v1);
    });
  }
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48() {
    let {
        mutate: _v0
      } = (0, _v45.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v47.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops/${_v0.where.shop}/products${(0, _v46.serializeQuery)(_v0)}`, _v43({
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
  }
  async function _v49({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v41.measureLatency)("getUserEcommerceShopifyShops", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops?${(0, _v42.searchQueryString)(_v3)}&fields=${_v1.map(_v42.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v42.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v42.deepCamelCase)(_v1);
    });
  }
  "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v47.useGctlConfig)();
    return (0, _v44.default)(_v2 ? `/users/${_v2.where.userId}/ecommerce/shopify/shops/${_v2.where.shop}/products${(0, _v46.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v43({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ecommerce/shopify/shops/:shop/products",
    method: "GET"
  }), "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(_v48, {
    endpoint: "/users/:userId/ecommerce/shopify/shops/:shop/products",
    method: "GET"
  });
  var _v50 = _v0.i(0);
  function _v51() {
    let {
        mutate: _v0
      } = (0, _v45.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v47.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops${(0, _v46.serializeQuery)(_v0)}`, _v49({
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
  }
  "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v47.useGctlConfig)();
    return (0, _v44.default)(_v2 ? `/users/${_v2.where.userId}/ecommerce/shopify/shops${(0, _v46.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v49({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ecommerce/shopify/shops",
    method: "GET"
  }), "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(_v51, {
    endpoint: "/users/:userId/ecommerce/shopify/shops",
    method: "GET"
  }), "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v47.useGctlConfig)();
    return (0, _v50.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/ecommerce/shopify/shops?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v49({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ecommerce/shopify/shops",
    method: "GET"
  });
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = (0, _v27.default)(_v53.SelectItem).withConfig({
      displayName: "ShopifyMediaFilters__EllipsisSelectOption",
      componentId: "sc-c9d11231-0"
    })`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,
    _v59 = ({
      isItemsView: _v0,
      keywords: _v1,
      shops: _v2,
      products: _v3,
      setSelectedProduct: _v4,
      handleSelectShop: _v5,
      handleSelectProduct: _v6,
      handleSearch: _v7
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v57.InspectorPaddedRow, {
        padRight: !0,
        children: (0, _v1.jsx)(_v53.Select, {
          placeholder: _v2[0].name,
          onValueChange: _v0 => _v5(_v0.value[0]),
          items: _v2.map(_v0 => ({
            value: _v0.id,
            label: _v0.name
          }))
        })
      }), (0, _v1.jsx)(_v57.SubSelectionContainer, {
        style: {
          marginTop: 8
        },
        children: _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v54.Tooltip, {
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
            children: (0, _v1.jsx)(_v52.IconButton, {
              variant: "tertiary",
              onClick: () => _v4(null),
              icon: (0, _v1.jsx)(_v55.ChevronLeftSmall, {}),
              "data-testid": "shopify-products-back-button",
              "aria-label": "shopify-products-back-button"
            })
          }), (0, _v1.jsx)(_v53.Select, {
            placeholder: _v3[0].id,
            style: {
              flexGrow: 1
            },
            onValueChange: _v0 => _v6(_v0.value[0]),
            items: _v3.map(_v0 => ({
              value: _v0.id,
              label: _v0.name
            })),
            children: _v0 => (0, _v1.jsx)(_v58, {
              children: _v0.label
            })
          })]
        }) : (0, _v1.jsx)(_v56.default, {
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
  async function _v60({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      shop: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v41.measureLatency)("getUserEcommerceShopifyShopProductsMedia", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ecommerce/shopify/shops/${_v3}/products/media?${(0, _v42.searchQueryString)(_v4)}&fields=${_v1.map(_v42.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v42.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v42.deepCamelCase)(_v1);
    });
  }
  function _v61() {
    let {
        mutate: _v0
      } = (0, _v45.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v47.useGctlConfig)(),
      [_v5, _v6] = (0, _v46.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ecommerce/shopify/shops/${_v0.where.shop}/products/media${(0, _v46.serializeQuery)(_v0)}`, _v60({
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
  }
  "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v47.useGctlConfig)();
    return (0, _v44.default)(_v2 ? `/users/${_v2.where.userId}/ecommerce/shopify/shops/${_v2.where.shop}/products/media${(0, _v46.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v60({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ecommerce/shopify/shops/:shop/products/media",
    method: "GET"
  }), "true" === _v40.default.env.STORYBOOK && (0, _v46.assignMswData)(_v61, {
    endpoint: "/users/:userId/ecommerce/shopify/shops/:shop/products/media",
    method: "GET"
  });
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = ({
    shopDomain: _v0,
    productId: _v1
  }) => {
    let _v2 = (0, _v17.useAppSelector)(_v16.videoSessionIdSelector),
      [_v3, _v4] = _v61(),
      {
        isReplacing: _v5
      } = (0, _v12.useReplaceElement)(),
      {
        uploadMedia: _v6
      } = (0, _v13.useUploadQueue)(),
      {
        createOrReplaceMediaElement: _v7
      } = (0, _v10.useMediaElement)(),
      {
        handleMediaItemClickOrDrag: _v8
      } = (0, _v11.useMediaItemClick)(),
      _v9 = (0, _v2.useRef)(null),
      _v10 = (0, _v2.useMemo)(() => ({
        select: ["data"],
        query: {
          perPage: 100,
          productId: _v1
        },
        where: {
          userId: _v15.default.teamOwnerId,
          shop: _v0
        },
        ..._v62.VIMEO_API_HEADERS
      }), [_v1, _v0]),
      _v11 = (0, _v2.useMemo)(() => {
        if (_v4.data) {
          let _v0;
          return (_v0 = _v4.data.data.product.media.edges.filter(_v0 => "IMAGE" === _v0.node.mediacontenttype)) ? _v0.map(_v0 => ({
            thumbnailUrl: _v0.node.preview.image.originalsrc,
            id: _v0.node.id,
            type: _v63.MediaType.IMAGE
          })) : [];
        }
        return [];
      }, [_v4]),
      _v12 = (0, _v2.useCallback)((_v0, _v1) => {
        let {
          time: _v2
        } = _v1 || {};
        return (0, _v24.sendTrackAddMedia)({
          mediaSelectionAction: _v5 ? "replace" : "add",
          mediaSource: "shopify",
          mediaType: _v0.type
        }), _v7({
          mediaItem: _v0,
          isAddToStoryboard: !1,
          time: _v2
        });
      }, [_v7, _v5]),
      _v13 = (0, _v2.useCallback)(async ({
        mediaItem: _v0,
        element: _v1
      }) => {
        (0, _v38.trackUploadStart)(_v0, _v2);
        let {
          status: _v2
        } = await _v6({
          origin: _v23.UploadMediaOrigin.SHOPIFY,
          mediaItem: _v0,
          isReplacing: _v5,
          elementSourceHash: _v1.sourceHash
        });
        (0, _v38.trackUploadFinish)(_v0, _v2, _v2);
      }, [_v5, _v6, _v2]),
      _v14 = (0, _v2.useCallback)((_v0, _v1) => {
        if (!_v11) return (0, _v1.jsx)(_v1.Fragment, {});
        let _v2 = _v11[_v0],
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
            uplOrigin: _v23.UploadMediaOrigin.SHOPIFY
          };
        return (0, _v1.jsx)(_v37.Box, {
          id: _v2.id,
          imageUrl: _v2.thumbnailUrl,
          gridStyleType: _v19.GridStyleType.SQUARE,
          alignToCenter: !0,
          width: _v1,
          onClick: () => {
            _v8({
              mediaItem: _v3,
              createElement: _v12,
              handleElementAdded: _v13
            });
          },
          isShowPlusButton: !0,
          testid: "shopify-item-media"
        }, _v2.id);
      }, [_v12, _v13, _v8, _v11]);
    return (0, _v2.useEffect)(() => {
      _v3(_v10);
    }, [_v3, _v10]), (0, _v1.jsx)(_v64.Grid, {
      ref: _v9,
      itemRenderer: _v14,
      styleType: _v19.GridStyleType.SQUARE,
      items: _v11 || [],
      isLoading: !_v11.length
    });
  };
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let [_v0, _v1] = (0, _v2.useState)(),
      [_v2, _v3] = (0, _v2.useState)(),
      [_v4, _v5] = (0, _v2.useState)(!0),
      [_v6, _v7] = (0, _v2.useState)(""),
      [_v8, _v9] = _v51(),
      [_v10, _v11] = _v48(),
      _v12 = (0, _v2.useRef)(null),
      _v13 = {
        select: ["shop"],
        query: {
          perPage: 100
        },
        where: {
          userId: _v15.default.teamOwnerId
        },
        ..._v62.VIMEO_API_HEADERS
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
            userId: _v15.default.teamOwnerId,
            shop: _v0
          },
          ..._v62.VIMEO_API_HEADERS
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
        return (0, _v1.jsx)(_v37.Box, {
          id: _v2.id,
          imageUrl: _v2.thumbnailUrl,
          title: _v2.name,
          gridStyleType: _v19.GridStyleType.LANDSCAPE,
          width: _v1,
          onClick: () => _v3(_v2),
          testid: "shopify-item",
          overlay: (0, _v1.jsx)(_v31, {
            title: _v2.name
          }),
          icon: (0, _v1.jsx)(_v33, {}),
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
    if ((0, _v67.default)(() => {
      _v8(_v13);
    }), (0, _v66.useDebouncedEffect)(() => {
      _v14.length && _v10(_v15);
    }, [_v10, _v15, _v14, _v0]), !_v14.length) return (0, _v1.jsx)(_v69.VirtuosoFooter, {});
    let _v20 = !!_v2,
      _v21 = !!_v6 && !_v16.length,
      _v22 = _v4 ? [] : _v16 || [];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v59, {
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
      }), (0, _v1.jsx)(_v39.MediaGridContainer, {
        padRight: _v21,
        children: _v20 ? (0, _v1.jsx)(_v65, {
          productId: _v2.id,
          shopDomain: _v0?.domain || _v14[0].domain
        }) : _v21 ? (0, _v1.jsx)(_v70.default, {
          type: _v68.EmptyInspectorView.SEARCH,
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
        }) : (0, _v1.jsx)(_v64.Grid, {
          ref: _v12,
          itemRenderer: _v17,
          styleType: _v19.GridStyleType.LANDSCAPE,
          items: _v22,
          isLoading: _v4
        })
      })]
    });
  }], 0);
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  let _v75 = (0, _v27.default)(_v57.InspectorPaddedRow).withConfig({
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
    _v76 = _v27.default.span.withConfig({
      displayName: "StockMediaFilters.style__EditorialInfoContainer",
      componentId: "sc-1d0cd6ab-1"
    })`
  width: 24px;
  display: flex;
  align-items: center;
`,
    _v77 = (0, _v27.default)(_v74.CircleInfo).withConfig({
      displayName: "StockMediaFilters.style__StyledCircleInfo",
      componentId: "sc-1d0cd6ab-2"
    })`
  margin-left: 8px;
  margin-top: 2px;

  path {
    fill: currentColor;
  }
`,
    _v78 = {
      CREATIVE: "creative",
      EDITORIAL: "editorial"
    };
  _v0.s(["MediaStockType", 0, _v78], 0);
  let _v79 = {
    NEWEST: "newest",
    BEST_MATCH: "best_match"
  };
  _v0.s(["SortEditorialType", 0, _v79], 0);
  let _v80 = (0, _v27.default)(_v53.Select).withConfig({
    displayName: "SelectBorderless.style__SelectBorderless",
    componentId: "sc-bd7950cb-0"
  })`
  button {
    border: none;
  }
`;
  _v0.s(["SelectBorderless", 0, _v80], 0);
  let _v81 = {
    [_v78.EDITORIAL]: (0, _v1.jsx)(_v54.Tooltip, {
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
      children: (0, _v1.jsx)(_v76, {
        children: (0, _v1.jsx)(_v77, {
          fill: "currentColor"
        })
      })
    }, "tooltip-editorial"),
    [_v78.CREATIVE]: null
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
        [_v79.NEWEST]: (0, _v4.translate)({
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
        [_v79.BEST_MATCH]: (0, _v4.translate)({
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
      } = (0, _v73.useGetMePreferences)({
        select: ["editorial_media"]
      }),
      _v10 = _v9 && _v9.editorialMedia,
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v6(_v0), (0, _v25.sendTrackChangeStockMediaFilter)({
          selectedValue: _v0,
          mediaFilter: _v1
        });
      }, [_v6, _v1]),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v7(_v0), (0, _v25.sendTrackSortEditorialMedia)({
          mediaFilter: _v1,
          stockMediaFilter: _v2,
          selectedSort: _v0
        });
      }, [_v7, _v2, _v1]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        _v5 && (_v5(_v0), (0, _v25.sendTrackChangeMediaFilter)({
          copy: "media type",
          mediaTab: _v19.MediaInspectorTabType.STOCK,
          selectionName: _v0
        }));
      }, [_v5]),
      _v14 = _v2 === _v78.EDITORIAL && "" != _v0,
      _v15 = Object.values(_v63.MediaType).map(_v0 => ({
        label: (0, _v71.default)(_v0),
        value: _v0
      })),
      _v16 = (0, _v71.default)(_v1),
      _v17 = Object.values(_v78).map(_v0 => ({
        label: (0, _v71.default)(_v0),
        value: _v0
      })),
      _v18 = (0, _v71.default)(_v2);
    return (0, _v1.jsxs)(_v75, {
      isMultipleRows: _v10 || void 0 === _v5,
      children: [(0, _v1.jsx)(_v56.default, {
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
        "data-testid": "media-inspector-search-filter",
        onFocus: () => (0, _v25.sendTrackSearchFocused)({
          mediaFilter: _v1,
          stockMediaFilter: _v2
        })
      }), (0, _v1.jsxs)(_v72.Grid, {
        gap: 8,
        templateColumns: _v10 ? "repeat(2, 1fr)" : "1fr",
        children: [_v5 && (0, _v1.jsx)(_v53.Select, {
          placeholder: _v16,
          "data-testid": "media-inspector-select-filter",
          onValueChange: _v0 => _v13(_v0.value[0]),
          items: _v15,
          size: "sm"
        }), _v10 && (0, _v1.jsx)(_v53.Select, {
          placeholder: _v18,
          "data-testid": "media-inspector-select-media-stock-type-filter",
          onValueChange: _v0 => _v11(_v0.value[0]),
          items: _v17,
          size: "sm",
          children: _v0 => (0, _v1.jsxs)(_v53.SelectItem, {
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: [(0, _v1.jsx)("span", {
              style: {
                flex: 1
              },
              children: _v0.label
            }), " ", _v81[_v0.value]]
          })
        })]
      }), _v14 && (0, _v1.jsx)(_v80, {
        placeholder: _v8[_v3],
        style: {
          width: "160px"
        },
        "data-testid": "media-inspector-select-sort-editorial-type-filter",
        onValueChange: _v0 => _v12(_v0.value[0]),
        items: Object.values(_v79).map(_v0 => ({
          value: _v0,
          label: _v8[_v0]
        })),
        size: "sm"
      })]
    });
  }], 0);
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = _v0 => ({
      landscape: {
        ..._v0
      },
      portrait: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.PORTRAIT),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.PORTRAIT, !0)
      },
      square: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.SQUARE),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.PORTRAIT, !0)
      },
      [_v84.Orientation.OR_4_5]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_4_5),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_4_5, !0)
      },
      [_v84.Orientation.OR_4_3]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_4_3),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_4_3, !0)
      },
      [_v84.Orientation.OR_2_3]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_2_3),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_2_3, !0)
      },
      [_v84.Orientation.OR_3_4]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_3_4),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_3_4, !0)
      },
      [_v84.Orientation.OR_16_10]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_16_10),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_16_10, !0)
      },
      [_v84.Orientation.OR_2_1]: {
        ..._v0,
        fontSize: (0, _v85.changeButtonFontSizeByOrientation)(_v0.fontSize, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_2_1),
        rect: (0, _v85.changeRectByOrientation)(_v0.rect, _v84.Orientation.LANDSCAPE, _v84.Orientation.OR_2_1, !0)
      }
    }),
    _v87 = {
      isEditable: !1,
      isEligible: !0,
      isWhite: !1,
      height: 100,
      width: 100
    };
  _v0.s(["createButtonPreset", 0, _v86, "createGraphicItemFromButtonPreset", 0, ({
    id: _v0,
    name: _v1,
    imageUrl: _v2
  }) => ({
    ..._v87,
    lowPath: _v2,
    path: _v2,
    svgPath: _v2,
    isWhite: !0,
    name: _v1 ?? "",
    id: _v0
  })], 0);
  let _v88 = {
      interactiveHotspot: {
        pauseOnClick: !1,
        action: {
          type: _v83.HotspotActionType.NONE
        },
        hover: {
          zoom: 1,
          bgAlpha: 100
        }
      }
    },
    _v89 = {
      fontSize: 72,
      dropShadow: _v82.DropShadow.NONE,
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
      ..._v88
    },
    _v90 = {
      bgAlpha: 0
    },
    _v91 = {
      borderRadius: 0
    },
    _v92 = {
      borderRadius: 30
    },
    _v93 = {
      borderRadius: 0
    },
    _v94 = [{
      id: "rect-filled",
      name: "Filled rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/8a832ff90b11bbf1dc2292fcce9e2479",
      preset: _v86({
        ..._v89,
        textColor: "#000000",
        ..._v93
      })
    }, {
      id: "rect-rounded-filled",
      imageUrl: "https://i.vimeocdn.com/custom_asset/94bd360051bcfcb37adae3149ad53a0f",
      name: "Filled rounded rectangle",
      preset: _v86({
        ..._v89,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        ..._v92
      })
    }, {
      id: "circle-filled",
      name: "Filled circle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/05f5e59372dbff468ce0e351e9fe6db5",
      preset: _v86({
        ..._v89,
        backgroundColor: "#ffffff",
        textColor: "#000000",
        ..._v91
      })
    }, {
      id: "rect",
      name: "Rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/de10f54def2362df3f43a82cadef012f",
      preset: _v86({
        ..._v89,
        ..._v90,
        textColor: "#ffffff",
        ..._v93
      })
    }, {
      id: "rect-rounded",
      name: "Rounded rectangle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/bd6c5f8f54153ff4779e6e59832a3236",
      preset: _v86({
        ..._v89,
        ..._v90,
        textColor: "#ffffff",
        ..._v92
      })
    }, {
      id: "circle",
      name: "Circle",
      imageUrl: "https://i.vimeocdn.com/custom_asset/3da951f391443cf46ceab731c7191207",
      preset: _v86({
        ..._v89,
        ..._v90,
        textColor: "#ffffff",
        ..._v91
      })
    }];
  _v0.s(["BUTTON_HOTSPOT_SHAPES_PRESETS", 0, _v94, "NO_ACTION_PRESET", 0, _v88], 0);
}