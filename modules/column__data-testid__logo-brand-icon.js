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
    _v17 = _v0.i(0);
  let _v18 = ({
    onAdd: _v0
  }) => {
    let {
      allowManage: _v1
    } = (0, _v13.useBrandkitsContext)();
    return (0, _v1.jsxs)(_v7.Center, {
      flexDirection: "column",
      gap: "md",
      children: [(0, _v1.jsx)(_v17.LogoBrand, {
        boxSize: "xl",
        "data-testid": "logo-brand-icon"
      }), (0, _v1.jsx)(_v16.Text, {
        variant: "body-xl",
        color: "text-primary",
        fontSize: "heading-xl",
        fontWeight: "medium",
        textAlign: "center",
        children: _v12.BRANDKITS_EMPTY_STATE_FIRST_LINE
      }), (0, _v1.jsx)(_v16.Text, {
        variant: "body-xl",
        color: "text-secondary",
        fontSize: "body-lg",
        fontWeight: "regular",
        textAlign: "center",
        children: _v12.BRANDKITS_EMPTY_STATE_SECOND_LINE
      }), _v1 && (0, _v1.jsx)(_v6.Button, {
        variant: "primary",
        size: "md",
        onClick: _v0,
        "aria-label": _v12.NEW_BRANDKIT_BUTTON_TEXT,
        children: _v12.NEW_BRANDKIT_BUTTON_TEXT
      })]
    });
  };
  var _v19 = _v0.i(0),
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
    _v33 = _v0.i(0),
    _v33 = _v33;
  function _v34({
    logos: _v0 = [],
    onLogoSelect: _v1,
    initialLogoUri: _v2,
    placement: _v3 = "right-start",
    onClose: _v4
  }) {
    let [_v5, _v6] = (0, _v3.useState)(_v2 || ""),
      [_v7, _v8] = (0, _v3.useState)(!0);
    return (0, _v1.jsx)(_v8.Box, {
      position: "relative",
      children: (0, _v1.jsx)(_v28.Popover, {
        placement: _v3,
        isOpen: _v7,
        onOpen: () => _v8(!0),
        onClose: () => {
          _v8(!1), _v4?.();
        },
        preventOverflow: !0,
        flip: !0,
        matchWidth: !0,
        arrowPadding: 8,
        strategy: "absolute",
        direction: "ltr",
        children: (0, _v1.jsxs)(_v29.PopoverContent, {
          width: (0, _v32.rem)(270),
          gap: "sm",
          maxHeight: "340px",
          padding: "0",
          children: [(0, _v1.jsx)(_v31.PopoverHeader, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "md",
            children: (0, _v1.jsx)(_v16.Text, {
              variant: "heading-xs",
              children: _v12.SELECT_THUMBNAIL
            })
          }), (0, _v1.jsx)(_v30.PopoverBody, {
            overflowY: "auto",
            children: (0, _v1.jsx)(_v4.Flex, {
              flexWrap: "wrap",
              gap: "md",
              paddingLeft: "md",
              paddingBottom: "md",
              children: _v0.map(_v0 => (0, _v1.jsx)(_v8.Box, {
                cursor: "pointer",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v0.preventDefault(), _v6(_v0.uri), _v1?.(_v0.uri, _v0.url);
                },
                children: (0, _v1.jsx)(_v33.LogoCard, {
                  url: _v0.url,
                  name: _v0.name,
                  isSelected: _v0.uri === _v5,
                  isLoading: !1
                })
              }, _v0.uri))
            })
          })]
        })
      })
    });
  }
  var _v35 = _v0.i(0);
  let _v36 = ({
    brandkit: _v0,
    onDelete: _v1,
    onRename: _v2,
    onChangeThumbnail: _v3
  }) => {
    let _v4 = (0, _v2.useRouter)(),
      {
        allowManage: _v5
      } = (0, _v13.useBrandkitsContext)(),
      [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      _v10 = _v0?.colors?.slice(0, _v12.MAX_COLORS_IN_BRANDKIT) || [],
      _v11 = (0, _v15.getIdFromUri)(_v0?.uri),
      _v12 = _v11 && !(_v0.isOrganization && _v0.isLocked) ? (0, _v15.getBrandkitUrl)(_v11, _v0.isOrganization) : _v12.EMPTY_LINK,
      _v13 = _v0?.logos?.map(_v0 => ({
        url: _v0.picture.baseLink,
        name: _v0.name,
        uri: _v0.uri
      })) || [],
      _v14 = async _v0 => {
        if (_v12 !== _v12.EMPTY_LINK) {
          _v0.preventDefault(), _v9(!0);
          try {
            await _v4.push(_v12);
          } catch (_v0) {
            console.error("Navigation failed:", _v0), _v9(!1);
          }
        }
      };
    return (0, _v1.jsxs)(_v25.ContentCard, {
      onClick: _v14,
      href: _v12,
      ariaLabel: _v12.BRANDKIT_CENTER_CARD,
      width: "100%",
      height: "100%",
      children: [(0, _v1.jsx)(_v25.ContentCard.Body, {
        children: (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          height: "100%",
          children: [(0, _v1.jsxs)(_v8.Box, {
            height: `calc(100% - ${_v12.COLOR_PALLETE_HEIGHT})`,
            position: "relative",
            children: [(0, _v1.jsx)(_v27.BrandkitLogo, {
              imageSrc: _v0?.previewLogoUrl || ""
            }), _v8 && (0, _v1.jsx)(_v26.default, {
              type: "page"
            })]
          }), (0, _v1.jsx)(_v4.Flex, {
            height: _v12.COLOR_PALLETE_HEIGHT,
            borderBottomRadius: "md",
            alignItems: "center",
            backgroundColor: "fill-component",
            flex: 1,
            children: (0, _v1.jsx)(_v4.Flex, {
              align: "stretch",
              height: "100%",
              flex: 1,
              borderRadius: "md",
              children: _v10.map((_v0, _v1) => (0, _v1.jsx)(_v4.Flex, {
                flex: 1,
                backgroundColor: _v0?.hex,
                borderBottomLeftRadius: 0 === _v1 ? "md" : "0",
                borderBottomRightRadius: _v1 === (_v10.length ?? 0) - 1 ? "md" : "0"
              }, _v1))
            })
          }), _v6 && (0, _v1.jsx)(_v34, {
            logos: _v13,
            initialLogoUri: _v0?.logos?.find(_v0 => _v0.picture?.baseLink === _v0?.previewLogoUrl)?.uri || "",
            onLogoSelect: (_v0, _v1) => {
              let _v2 = _v11 || (0, _v15.getIdFromUri)(_v0?.uri);
              _v2 && _v3?.(_v2, _v0, _v1), _v7(!1);
            },
            isOpenButton: !1,
            onClose: () => _v7(!1)
          })]
        })
      }), (0, _v1.jsx)(_v25.ContentCard.Footer, {
        titleRowStyles: {
          height: "100%"
        },
        actions: (0, _v1.jsxs)(_v8.Box, {
          ...(_v5 && {
            onClick: _v0 => {
              _v0.preventDefault(), _v0.stopPropagation();
            },
            onKeyDown: _v0 => _v0.stopPropagation(),
            alignContent: "center"
          }),
          children: [_v0.isLocked && (0, _v1.jsx)(_v22.Tooltip, {
            label: _v12.LOCKED_BY_ADMIN,
            placement: "top",
            children: (0, _v1.jsx)(_v19.IconButton, {
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v24.Lock, {}),
              disabled: !0,
              "aria-label": "lock"
            })
          }), _v5 && !_v0.isLocked && (0, _v1.jsxs)(_v20.Menu, {
            children: [(0, _v1.jsx)(_v22.Tooltip, {
              label: _v12.BRANDKIT_LOCKED_TOOLTIP,
              placement: "top",
              children: (0, _v1.jsx)(_v21.MenuButton, {
                as: _v19.IconButton,
                size: "md",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v23.EllipsisV, {}),
                "aria-label": _v12.EMPTY_ARIA_LABEL
              })
            }), (0, _v1.jsx)(_v35.BrandkitMenuList, {
              onDelete: _v1,
              onRename: _v0 => _v2?.(_v0.currentTarget.value, _v0?.uri),
              onChangeThumbnail: _v0.logos.length > 1 ? () => {
                _v7(!0);
              } : void 0
            })]
          })]
        }),
        title: _v0?.name || "",
        titleStyles: {
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          alignItems: "center"
        }
      })]
    });
  };
  function _v37({
    userId: _v0
  }) {
    let _v1 = (0, _v2.useRouter)(),
      [_v2, _v3] = (0, _v3.useState)([]),
      {
        executeAsync: _v4
      } = (0, _v14.default)(),
      {
        getUserBrandkitsApi: _v5,
        postUserBrandkitsApi: _v6,
        deleteUserBrandkitApi: _v7,
        patchUserBrandkitApi: _v8,
        patchUserBrandkitLogoApi: _v9
      } = (0, _v11.useBrandkitsApi)({
        userId: _v0
      }),
      {
        sendCreateBrandKitItemEvent: _v10,
        sendUpdateBrandKitItemEvent: _v11,
        sendDeleteBrandKitItemEvent: _v12
      } = (0, _v9.useBrandKitsEvents)(),
      {
        showDeleteModal: _v13,
        showEditModal: _v14,
        isProcessing: _v15,
        isLoading: _v16,
        allowManage: _v17
      } = (0, _v13.useBrandkitsContext)(),
      _v18 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v18.current || (_v18.current = !0, _v4({
        action: async () => {
          _v3((await _v5()).data);
        },
        isMainLoading: !0,
        errorMessage: _v12.FAILED_TO_FETCH_BRANDKITS,
        isOptimistic: !1
      }));
    }, []);
    let _v19 = _v0 => !1 !== _v0.isVisible,
      _v20 = (0, _v3.useMemo)(() => _v2.some(_v19), [_v2]),
      _v21 = (0, _v3.useCallback)((_v0, _v1) => {
        _v3(_v0 => _v0.map(_v0 => (0, _v15.getIdFromUri)(_v0.uri) === _v0 ? {
          ..._v0,
          ..._v1
        } : _v0));
      }, []),
      _v22 = (0, _v3.useCallback)(async _v0 => {
        _v0?.uri && (await _v4({
          uri: _v0.uri,
          action: async ({
            userId: _v0,
            id: _v1
          }) => (_v21(_v1, {
            isVisible: !1
          }), await _v7({
            userId: _v0,
            kitUuid: _v1
          }), _v12({
            itemId: _v1,
            itemType: "brand",
            brandName: _v0.name,
            brandId: _v1,
            ownershipEntity: (0, _v15.getBrandKitOwnershipEntity)(),
            ownershipEntityId: _v0
          }), _v0),
          successMessage: () => `${_v12.BRANDKIT_DELETED_SUCCESSFULLY} "${_v0.name}"`,
          errorMessage: _v12.FAILED_TO_DELETE_BRANDKIT,
          errorFallbackAction: async () => {
            let _v0 = (0, _v15.getIdFromUri)(_v0.uri);
            _v0 && _v21(_v0, {
              isVisible: !0
            });
          }
        }));
      }, [_v7, _v4, _v12, _v21]),
      _v23 = (0, _v3.useCallback)(async _v0 => {
        await _v4({
          action: async () => {
            let _v0 = await _v6({
                brandkitName: _v0
              }),
              _v1 = (0, _v15.getIdFromUri)(_v0?.uri) || "";
            return _v1 && (0, _v15.navigateToBrandkit)(_v1, _v1), _v10({
              itemId: _v1,
              brandName: _v0.name,
              brandId: _v1,
              modalName: "brand_kit_creation",
              itemType: "brand",
              ownershipEntity: (0, _v15.getBrandKitOwnershipEntity)(),
              ownershipEntityId: _v0,
              product: "general"
            }), _v0;
          },
          successMessage: _v0 => `${_v12.BRANDKIT_CREATED_SUCCESSFULLY} "${_v0.name}"`,
          errorMessage: _v12.FAILED_TO_CREATE_BRANDKIT,
          isOptimistic: !1
        });
      }, [_v6, _v4, _v1, _v10, _v0]),
      _v24 = (0, _v3.useCallback)(async (_v0, _v1) => {
        _v1 && _v0 && (await _v4({
          uri: _v0.uri,
          action: async ({
            userId: _v0,
            id: _v1
          }) => {
            _v21(_v1, {
              name: _v1
            });
            let _v2 = await _v8({
              userId: _v0,
              kitUuid: _v1,
              brandkitName: _v1
            });
            return _v11({
              itemId: _v1,
              brandName: _v2.name,
              brandId: _v1,
              ownershipEntity: (0, _v15.getBrandKitOwnershipEntity)(),
              ownershipEntityId: _v0,
              itemType: "brand"
            }), _v2.name;
          },
          successMessage: _v0 => _v12.BRANDKIT_UPDATED_SUCCESSFULLY?.(_v0),
          errorMessage: _v12.FAILED_TO_UPDATE_BRANDKIT,
          errorFallbackAction: async () => {
            let _v0 = (0, _v15.getIdFromUri)(_v0.uri);
            _v0 && _v21(_v0, {
              name: _v0.name
            });
          }
        }));
      }, [_v4, _v21, _v8, _v11]),
      _v25 = (0, _v3.useCallback)(_v0 => {
        _v13({
          item: _v0,
          deleteMessage: _v12.BRANDKITS_DELETE_MESSAGE,
          onDelete: () => _v22(_v0),
          isLoading: _v15
        });
      }, [_v13, _v22, _v15]),
      _v26 = (0, _v3.useCallback)(_v0 => {
        _v14({
          name: _v0.name,
          backgroundImage: _v0.previewLogoUrl || "",
          title: _v12.EDIT_BRANDKIT_TITLE,
          subTitle: _v12.BRANDKIT_NAME_LABEL,
          isLoading: _v15,
          onSave: _v0 => _v24(_v0, _v0)
        });
      }, [_v14, _v15, _v24]),
      _v27 = (0, _v3.useCallback)(() => {
        _v14({
          name: "",
          title: _v12.NEW_BRANDKIT_NAME,
          subTitle: _v12.BRANDKIT_NAME_LABEL,
          isLoading: _v15,
          onSave: _v23
        });
      }, [_v14, _v23, _v15]),
      _v28 = (0, _v3.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = (0, _v15.getIdFromUri)(_v1),
          _v4 = _v2.find(_v0 => (0, _v15.getIdFromUri)(_v0.uri) === _v0);
        _v3 && _v4 && (await _v4({
          uri: _v4.uri,
          action: async ({
            userId: _v0,
            id: _v1
          }) => (_v21(_v0, {
            previewLogoUrl: _v2
          }), (await _v9({
            logoId: _v3,
            name: _v4.name,
            isDefault: !0,
            kitUuid: _v1,
            userId: _v0
          })).name),
          successMessage: () => _v12.THUMBNAIL_UPDATED_SUCCESSFULLY,
          errorMessage: _v12.FAILED_TO_UPDATE_THUMBNAIL,
          errorFallbackAction: async () => {
            _v21(_v0, {
              previewLogoUrl: _v4.previewLogoUrl
            });
          }
        }));
      }, [_v2, _v21, _v9, _v4]);
    return (0, _v1.jsxs)(_v8.Box, {
      gap: "md",
      minHeight: "35rem",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        justifyContent: "space-between",
        marginBottom: "md",
        wrap: "nowrap",
        alignItems: "center",
        height: "auto",
        overflow: "initial",
        gap: "1rem",
        children: [(0, _v1.jsx)(_v5.Header, {
          size: "lg",
          style: {
            whiteSpace: "nowrap"
          },
          children: _v12.BRANDKITS_PAGE_NAME
        }), !_v16 && _v20 && _v17 && (0, _v1.jsx)(_v6.Button, {
          minWidth: "7rem",
          variant: "secondary",
          marginLeft: "auto",
          size: "lg",
          onClick: _v27,
          "aria-label": _v12.NEW_BRANDKIT_BUTTON_TEXT,
          style: {
            whiteSpace: "normal",
            wordBreak: "break-word",
            textAlign: "center",
            flexShrink: 1
          },
          children: _v12.NEW_BRANDKIT_BUTTON_TEXT
        })]
      }), _v16 ? (0, _v1.jsx)(_v26.default, {
        type: "page"
      }) : _v20 ? (0, _v1.jsx)(_v10.ContentGrid, {
        children: (0, _v1.jsx)(_v10.ContentGrid.Body, {
          children: _v2.filter(_v19).map(_v0 => (0, _v1.jsx)(_v7.Center, {
            children: (0, _v1.jsx)(_v36, {
              brandkit: _v0,
              onDelete: () => _v25(_v0),
              onRename: () => _v26(_v0),
              onChangeThumbnail: (_v0, _v1, _v2) => {
                _v28(_v0, _v1, _v2);
              }
            })
          }, _v0.uri))
        })
      }) : (0, _v1.jsx)(_v8.Box, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        children: (0, _v1.jsx)(_v18, {
          onAdd: _v27
        })
      })]
    });
  }
  _v0.s(["BrandCenter", 0, ({
    userId: _v0,
    allowManage: _v1
  }) => (0, _v1.jsx)(_v13.BrandkitsProvider, {
    allowManage: _v1,
    children: (0, _v1.jsx)(_v37, {
      userId: _v0
    })
  })], 0);
}