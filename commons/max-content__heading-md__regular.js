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
  let _v26 = ({
    isColorPickerOpen: _v0,
    onColorChange: _v1,
    onCancel: _v2,
    onSave: _v3,
    children: _v4
  }) => {
    let {
        isProcessing: _v5
      } = (0, _v9.useBrandkitsContext)(),
      [_v6, _v7] = (0, _v3.useState)(0),
      _v8 = _v0 => {
        _v0(), _v7(Date.now());
      };
    function _v9() {
      return (0, _v1.jsxs)(_v17.ColorPickerContent, {
        style: {
          height: "max-content",
          maxHeight: "100%"
        },
        children: [(0, _v1.jsx)(_v5.Flex, {
          children: (0, _v1.jsx)(_v21.Header, {
            variant: "heading-md",
            fontWeight: "regular",
            color: "text.primary",
            size: "xl",
            children: _v8.ADD_COLOR_TEXT
          })
        }), (0, _v1.jsx)(_v17.ColorPickerArea, {}), (0, _v1.jsx)(_v5.Flex, {
          width: "100%",
          align: "center",
          height: "sm",
          children: (0, _v1.jsxs)(_v17.ColorPickerChannelSlider, {
            channel: "hue",
            children: [(0, _v1.jsx)(_v17.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v17.ColorPickerChannelSliderThumb, {})]
          })
        }), (0, _v1.jsxs)(_v5.Flex, {
          gap: "md",
          align: "center",
          children: [(0, _v1.jsx)(_v17.ColorPickerChannelInput, {
            channel: "hex"
          }), (0, _v1.jsx)(_v17.ColorPickerEyeDropperTrigger, {})]
        }), (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "flex-end",
          children: [(0, _v1.jsx)(_v20.Button, {
            size: "md",
            variant: "tertiary",
            onClick: () => _v8(_v2),
            children: _v8.CANCEL_BUTTON_TEXT
          }), (0, _v1.jsx)(_v20.Button, {
            isDisabled: _v5,
            onClick: () => _v8(_v3),
            size: "md",
            variant: "primary",
            children: _v8.SAVE_BUTTON_TEXT
          })]
        })]
      });
    }
    return (0, _v1.jsxs)(_v17.ColorPickerRoot, {
      defaultValue: (0, _v23.parseColor)(_v8.DEFAULT_COLOR),
      onValueChange: _v0 => {
        _v1((0, _v22.toHex)(_v0.valueAsString));
      },
      children: [(0, _v1.jsx)(_v18.ColorPickerControl, {
        style: {
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "100%"
        },
        children: (0, _v1.jsx)(_v17.ColorPickerTrigger, {
          style: {
            width: "100%",
            height: "100%",
            zIndex: 0,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: _v4
        })
      }), _v0 && (0, _v1.jsx)(_v19.Portal, {
        children: (0, _v1.jsxs)("div", {
          style: {
            width: "100%",
            height: "400px",
            position: "fixed",
            top: "0",
            left: "0"
          },
          children: [(0, _v1.jsx)(_v25.Hide, {
            below: "md",
            children: (0, _v1.jsx)(_v17.ColorPickerPositioner, {
              children: _v9()
            })
          }), (0, _v1.jsx)(_v24.Show, {
            below: "md",
            children: (0, _v1.jsx)(_v17.ColorPickerPositioner, {
              style: {
                transform: "initial",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: _v9()
            })
          })]
        })
      })]
    }, `color-picker-root-${_v6}`);
  };
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = "Edit",
    _v35 = "Create",
    _v36 = "logos",
    _v37 = "colors",
    _v38 = {
      [_v37]: {
        title: "Colors",
        successfullyRenamed: _v8.COLOR_SUCCESSFULLY_RENAMED,
        successfullyDeleted: _v8.COLOR_SUCCESSFULLY_DELETED,
        failedToRename: _v8.FAILED_TO_RENAME_COLOR,
        failedToDelete: _v8.FAILED_TO_DELETE_COLOR,
        CardComponent: ({
          mode: _v0,
          onDelete: _v1,
          onAdd: _v2,
          onRename: _v3,
          color: _v4,
          title: _v5,
          isLocked: _v6
        }) => {
          let {
              name: _v7
            } = _v4 || {
              name: _v5 || ""
            },
            [_v8, _v9] = (0, _v3.useState)(_v8.DEFAULT_COLOR),
            [_v10, _v11] = (0, _v3.useState)(!1),
            {
              executeAsync: _v12
            } = (0, _v10.default)(),
            {
              isProcessing: _v13,
              topic: _v14,
              allowManage: _v15
            } = (0, _v9.useBrandkitsContext)(),
            _v16 = (0, _v3.useCallback)(_v0 => {
              _v9(_v0);
            }, []),
            _v17 = (0, _v3.useCallback)(() => {
              _v11(!1);
            }, []),
            _v18 = (0, _v3.useCallback)(async () => {
              await _v12({
                isOptimistic: !1,
                action: async () => (_v11(!1), await _v2?.(_v8)),
                errorMessage: _v8.FAILED_TO_ADD_COLOR,
                postAction: () => {
                  _v9(_v8.DEFAULT_COLOR);
                },
                topic: "color"
              });
            }, [_v8, _v12, _v2]);
          return (0, _v1.jsxs)(_v16.ContentCard, {
            href: _v8.EMPTY_LINK,
            ariaLabel: _v7,
            height: "min-content",
            isHoverDisabled: _v0 === _v35,
            children: [(0, _v1.jsxs)(_v16.ContentCard.Body, {
              children: [_v0 === _v35 && _v15 && !_v6 && (0, _v1.jsx)(_v26, {
                isColorPickerOpen: _v10,
                setIsColorPickerOpen: _v11,
                onCancel: _v17,
                onSave: _v18,
                onColorChange: _v16,
                children: (0, _v1.jsx)(_v5.Flex, {
                  children: _v13 && "color" === _v14 ? (0, _v1.jsx)(_v27.default, {
                    type: "card"
                  }) : (0, _v1.jsx)(_v11.IconButton, {
                    icon: (0, _v1.jsx)(_v15.PlusFilled, {}),
                    onClick: () => {
                      _v11(!0);
                    },
                    variant: "secondary",
                    "aria-label": _v8.EMPTY_ARIA_LABEL,
                    style: {
                      width: "100%",
                      height: "100%"
                    }
                  })
                })
              }), _v0 === _v34 && (0, _v1.jsx)(_v16.ContentCard.DefaultThumbnail, {
                background: _v4?.hex
              })]
            }), _v0 === _v34 && _v15 && !_v6 && (0, _v1.jsx)(_v16.ContentCard.Footer, {
              actions: (0, _v1.jsx)(_v4.Box, {
                onClick: _v0 => {
                  _v0.preventDefault(), _v0.stopPropagation();
                },
                onKeyDown: _v0 => _v0.stopPropagation(),
                alignContent: "center",
                children: (0, _v1.jsxs)(_v12.Menu, {
                  children: [(0, _v1.jsx)(_v13.MenuButton, {
                    as: _v11.IconButton,
                    size: "md",
                    variant: "tertiary",
                    icon: (0, _v1.jsx)(_v14.EllipsisV, {}),
                    "aria-label": _v8.EMPTY_ARIA_LABEL,
                    "data-testid": "brandkit-menu-button"
                  }), (0, _v1.jsx)(_v28.BrandkitMenuList, {
                    onDelete: _v1,
                    onRename: _v3
                  })]
                })
              }),
              title: _v4?.name || "",
              subtitle: _v4?.hex || "",
              titleStyles: {
                width: "100%",
                height: "100%",
                zIndex: 1,
                display: "flex",
                alignItems: "center"
              }
            })]
          });
        },
        collectionKey: _v37,
        itemName: "color",
        renameItem: _v8.RENAME_COLOR,
        subTitle: _v8.COLOR_NAME,
        deleteMessage: _v8.BRANDKITS_COLOR_DELETE_MESSAGE
      },
      [_v36]: {
        title: "Logos",
        successfullyRenamed: _v8.LOGO_SUCCESSFULLY_RENAMED,
        successfullyDeleted: _v8.LOGO_SUCCESSFULLY_DELETED,
        failedToRename: _v8.FAILED_TO_RENAME_LOGO,
        failedToDelete: _v8.FAILED_TO_DELETE_LOGO,
        CardComponent: ({
          logo: _v0,
          mode: _v1,
          onAdd: _v2,
          onDelete: _v3,
          onRename: _v4,
          onDownload: _v5,
          title: _v6,
          isLocked: _v7
        }) => {
          let {
              executeAsync: _v8
            } = (0, _v10.default)(),
            {
              isProcessing: _v9,
              topic: _v10,
              allowManage: _v11
            } = (0, _v9.useBrandkitsContext)(),
            _v12 = (0, _v3.useRef)(null),
            _v13 = (0, _v3.useCallback)(async _v0 => {
              _v0.preventDefault();
              let _v1 = _v0.target.files?.[0];
              _v1 && (await _v8({
                isOptimistic: !1,
                action: async () => await _v2?.(_v1),
                successMessage: _v0 => `${_v8.LOGO_SUCCESSFULLY_ADDED}: ${_v0?.name}`,
                errorMessage: _v8.LOGO_UPLOAD_FAILED,
                topic: "logo"
              }));
            }, [_v8, _v2]),
            _v14 = (0, _v3.useCallback)(() => {
              _v0 && _v6 && (_v8({
                action: async () => await (0, _v32.downloadLogo)(_v0, _v6),
                successMessage: _v0 => `${_v8.LOGO_DOWNLOAD_SUCCESS}: ${_v0}`,
                errorMessage: _v8.LOGO_DOWNLOAD_FAILED
              }), _v5?.(_v0.uri));
            }, [_v8, _v0, _v6]);
          return (0, _v1.jsxs)(_v16.ContentCard, {
            href: _v8.EMPTY_LINK,
            onClick: _v0 => {
              _v1 === _v35 && _v11 && (_v0.preventDefault(), _v0.stopPropagation(), _v12.current?.click());
            },
            ariaLabel: "Brandkit Logo Card",
            height: "min-content",
            isHoverDisabled: _v1 === _v35,
            children: [(0, _v1.jsx)(_v16.ContentCard.Body, {
              children: _v1 === _v35 && _v11 && !_v7 ? _v9 && "logo" === _v10 ? (0, _v1.jsx)(_v29.Center, {
                height: "100%",
                children: (0, _v1.jsx)(_v27.default, {
                  type: "card"
                })
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v11.IconButton, {
                  icon: (0, _v1.jsx)(_v15.PlusFilled, {}),
                  variant: "secondary",
                  "aria-label": "",
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }), (0, _v1.jsx)(_v30.FileInput, {
                  ref: _v12,
                  onClick: _v0 => {
                    _v0.stopPropagation();
                  },
                  variant: "minimal",
                  label: _v8.EMPTY_ARIA_LABEL,
                  tabIndex: -1,
                  sx: {
                    height: "0px",
                    width: "0px"
                  },
                  onChange: _v13,
                  isDisabled: _v9,
                  accept: _v31.ALLOWED_FILE_TYPES?.map(_v0 => `.${_v0}`).join(", ")
                })]
              }) : (0, _v1.jsx)(_v33.BrandkitLogo, {
                borderRadius: "md",
                imageSrc: _v0?.picture?.baseLink || ""
              })
            }), _v1 === _v34 && _v11 && !_v7 && (0, _v1.jsx)(_v16.ContentCard.Footer, {
              titleRowStyles: {
                height: "100%"
              },
              actions: (0, _v1.jsx)(_v4.Box, {
                onClick: _v0 => {
                  _v0.preventDefault(), _v0.stopPropagation();
                },
                onKeyDown: _v0 => _v0.stopPropagation(),
                alignContent: "center",
                children: (0, _v1.jsxs)(_v12.Menu, {
                  children: [(0, _v1.jsx)(_v13.MenuButton, {
                    as: _v11.IconButton,
                    size: "md",
                    variant: "tertiary",
                    icon: (0, _v1.jsx)(_v14.EllipsisV, {}),
                    "aria-label": _v8.EMPTY_ARIA_LABEL
                  }), _v1 === _v34 && (0, _v1.jsx)(_v28.BrandkitMenuList, {
                    onDelete: _v3,
                    onRename: _v4,
                    onDownload: _v14
                  })]
                })
              }),
              title: _v0?.name || "",
              titleStyles: {
                width: "100%",
                height: "100%",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                wordBreak: "break-word"
              }
            })]
          });
        },
        collectionKey: _v36,
        itemName: "logo",
        renameItem: _v8.RENAME_LOGO,
        subTitle: _v8.LOGO_NAME,
        deleteMessage: _v8.BRANDKITS_LOGO_DELETE_MESSAGE
      }
    };
  var _v39 = _v0.i(0);
  let _v40 = ({
    onAdd: _v0,
    onRename: _v1,
    onDelete: _v2,
    onDownload: _v3,
    collection: _v4 = [],
    collectionKey: _v5,
    patchApi: _v6,
    deleteApi: _v7,
    isLocked: _v8
  }) => {
    let _v9 = _v38[_v5],
      {
        title: _v10,
        CardComponent: _v11,
        itemName: _v12,
        renameItem: _v13,
        subTitle: _v14
      } = _v9,
      {
        showDeleteModal: _v15,
        showEditModal: _v16,
        isProcessing: _v17
      } = (0, _v9.useBrandkitsContext)(),
      _v18 = (0, _v3.useCallback)(_v0 => {
        _v15({
          item: _v0,
          deleteMessage: _v9.deleteMessage,
          onDelete: async () => await _v2?.({
            selectedItem: _v0,
            collectionKey: _v5,
            deleteApi: _v7
          }),
          isLoading: _v17
        });
      }, [_v12, _v17, _v15, _v2, _v5, _v7]),
      _v19 = (0, _v3.useCallback)(_v0 => {
        _v16({
          title: _v13,
          subTitle: _v14,
          name: _v0.name,
          backgroundImage: _v0?.backgroundImage,
          backgroundColor: _v0?.backgroundColor,
          isLoading: _v17,
          onSave: async _v0 => await _v1?.({
            selectedItem: _v0,
            newName: _v0,
            collectionKey: _v5,
            patchApi: _v6
          })
        });
      }, [_v13, _v17, _v16, _v1, _v5, _v6, _v14]);
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      backgroundColor: "surface",
      gap: "lg",
      padding: "lg",
      borderRadius: "md",
      marginBottom: "lg",
      children: [(0, _v1.jsx)(_v5.Flex, {
        direction: "row",
        gap: "lg",
        children: (0, _v1.jsx)(_v21.Header, {
          size: "md",
          children: _v10
        })
      }), (0, _v1.jsx)(_v39.ContentGrid, {
        children: (0, _v1.jsxs)(_v39.ContentGrid.Body, {
          children: [!_v8 && (0, _v1.jsx)(_v11, {
            mode: _v35,
            onAdd: _v0,
            isLocked: !1
          }), _v4.filter(_v0 => _v0.isVisible).map(_v0 => (0, _v1.jsx)(_v11, {
            title: _v0?.name,
            mode: _v34,
            onDelete: () => _v18(_v0),
            onRename: () => _v19(_v0),
            isLocked: _v8,
            ...(_v3 && {
              onDownload: _v0 => _v3(_v0)
            }),
            [_v12]: _v0
          }, _v0.uri))]
        })
      })]
    });
  };
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = ({
    brandkit: _v0,
    onRename: _v1,
    onDelete: _v2,
    isLoading: _v3
  }) => {
    let _v4 = (0, _v2.useRouter)(),
      {
        allowManage: _v5
      } = (0, _v9.useBrandkitsContext)(),
      _v6 = (0, _v32.getBrandkitsUrl)(),
      _v7 = _v5 && !_v0?.isLocked ? _v8.MANAGE_ACCESS : _v8.VIEW_ACCESS,
      [_v8, _v9] = (0, _v3.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v8 && (0, _v1.jsx)(_v27.default, {
        type: "page"
      }), !_v3 && (0, _v1.jsxs)(_v41.Breadcrumb, {
        children: [(0, _v1.jsx)(_v41.BreadcrumbItem, {
          maxW: "9rem",
          children: (0, _v1.jsx)(_v42.BreadcrumbLink, {
            href: _v6,
            onClick: async _v0 => {
              _v0.preventDefault(), _v9(!0);
              try {
                await _v4.push(_v6);
              } catch (_v0) {
                console.error("Navigation failed:", _v0), _v9(!1);
              }
            },
            children: _v8.BRANDKITS_PAGE_NAME
          })
        }), (0, _v1.jsx)(_v41.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v42.BreadcrumbLink, {
            children: _v0?.name
          })
        })]
      }), (0, _v1.jsxs)(_v5.Flex, {
        marginTop: (0, _v43.rem)(24),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        children: [(0, _v1.jsx)(_v4.Box, {
          style: {
            minWidth: _v8.HEADER_MIN_WIDTH_VALUE,
            minHeight: _v8.HEADER_MIN_HEIGHT_VALUE
          },
          children: (0, _v1.jsx)(_v21.Header, {
            size: "lg",
            children: _v0?.name
          })
        }), !_v3 && _v5 && !_v0?.isLocked && (0, _v1.jsxs)(_v12.Menu, {
          children: [(0, _v1.jsx)(_v44.Tooltip, {
            label: "Brand kit actions",
            placement: "top",
            children: (0, _v1.jsx)(_v13.MenuButton, {
              as: _v11.IconButton,
              size: "lg",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v14.EllipsisV, {}),
              "aria-label": _v8.EMPTY_ARIA_LABEL
            })
          }), (0, _v1.jsx)(_v28.BrandkitMenuList, {
            onRename: _v0 => _v1(_v0.currentTarget.value),
            onDelete: _v2
          })]
        })]
      }), (0, _v1.jsx)(_v5.Flex, {
        marginBottom: (0, _v43.rem)(24),
        children: !_v3 && (0, _v1.jsx)(_v45.Text, {
          variant: "body-xl",
          size: "md",
          color: "text-secondary",
          children: _v7
        })
      })]
    });
  };
  function _v47({
    userId: _v0,
    brandkitId: _v1
  }) {
    let _v2,
      _v3 = (0, _v2.useRouter)(),
      [_v4, _v5] = (0, _v3.useState)({
        name: "",
        isLocked: !1
      }),
      {
        renameStateItem: _v6,
        deleteStateItem: _v7,
        addStateItem: _v8,
        restoreStateItem: _v9,
        renameStateBrandkit: _v10
      } = (_v2 = (_v0, _v1, _v2) => {
        let _v3;
        return _v5(_v0 => {
          let _v1 = _v0[_v0].map(_v0 => {
            if (_v0.uri === _v1.uri) {
              let _v0 = _v2(_v0);
              return _v3 = _v0, _v0;
            }
            return _v0;
          });
          return {
            ..._v0,
            [_v0]: _v1
          };
        }), _v3;
      }, {
        renameStateItem: (_v0, _v1, _v2) => _v2(_v2, _v0, _v0 => ({
          ..._v0,
          name: _v1
        })),
        deleteStateItem: (_v0, _v1) => {
          _v2(_v1, _v0, _v0 => ({
            ..._v0,
            isVisible: !1
          }));
        },
        addStateItem: (_v0, _v1) => {
          _v5(_v0 => ({
            ..._v0,
            [_v1]: [_v0, ..._v0[_v1]]
          }));
        },
        restoreStateItem: (_v0, _v1) => {
          _v2(_v1, _v0, _v0 => ({
            ..._v0,
            isVisible: !0
          }));
        },
        renameStateBrandkit: _v0 => {
          _v5(_v0 => ({
            ..._v0,
            name: _v0
          }));
        }
      }),
      _v11 = (0, _v7.useBrandkitsApi)({
        userId: _v0,
        brandkitId: _v1
      }),
      {
        showEditModal: _v12,
        showDeleteModal: _v13,
        isLoading: _v14,
        isProcessing: _v15
      } = (0, _v9.useBrandkitsContext)(),
      {
        sendCreateBrandKitItemEvent: _v16,
        sendUpdateBrandKitItemEvent: _v17,
        sendDeleteBrandKitItemEvent: _v18,
        sendDownloadLogoItemEvent: _v19
      } = (0, _v6.useBrandKitsEvents)(),
      {
        executeAsync: _v20
      } = (0, _v10.default)();
    (0, _v3.useEffect)(() => {
      _v1 && _v20({
        action: async () => {
          _v5(await _v11.getUserBrandkitApi());
        },
        isMainLoading: !0,
        isOptimistic: !1
      });
    }, []);
    let _v21 = (0, _v3.useCallback)(async _v0 => {
        let _v1 = (0, _v32.getIdFromUri)(_v4?.uri || "");
        if (!_v1) throw Error("Invalid brandkit URI");
        let _v2 = await _v11.uploadBrandkitLogoApi({
          file: _v0,
          brandKitId: _v1
        });
        return _v2 && _v8(_v2, _v36), _v16({
          itemId: (0, _v32.getIdFromUri)(_v2?.uri) || "",
          brandName: _v4.name,
          brandId: _v1,
          itemType: "logo",
          ownershipEntity: (0, _v32.getBrandKitOwnershipEntity)(),
          ownershipEntityId: _v0,
          product: "general"
        }), _v2;
      }, [_v11, _v4, _v8, _v16, _v0]),
      _v22 = (0, _v3.useCallback)(async _v0 => {
        let _v1 = await _v11.postUserBrandkitColorsApi({
          selectedColor: _v0,
          name: `Color ${_v4?.colors?.length + 1 || 1}`
        });
        return _v1 && _v8(_v1, _v37), _v16({
          itemId: (0, _v32.getIdFromUri)(_v1?.uri) || "",
          brandName: _v4.name,
          brandId: (0, _v32.getIdFromUri)(_v4?.uri) || "",
          itemType: "color",
          ownershipEntity: (0, _v32.getBrandKitOwnershipEntity)(),
          ownershipEntityId: _v0,
          product: "general"
        }), _v1;
      }, [_v11, _v8, _v0, _v4, _v16]),
      _v23 = (0, _v3.useCallback)(async ({
        selectedItem: _v0,
        collectionKey: _v1,
        deleteApi: _v2
      }) => {
        let {
          successfullyDeleted: _v3,
          failedToDelete: _v4,
          itemName: _v5
        } = _v38[_v1];
        await _v20({
          uri: _v0?.uri,
          action: async ({
            id: _v0
          }) => (_v7(_v0, _v1), await _v2(_v0), _v0),
          successMessage: () => `${_v3} "${_v0.name}"`,
          errorMessage: _v4,
          errorFallbackAction: async () => {
            _v9(_v0, _v1);
          }
        }), _v18({
          itemId: (0, _v32.getIdFromUri)(_v0?.uri) || "",
          itemType: _v5,
          brandName: _v4.name,
          brandId: (0, _v32.getIdFromUri)(_v4?.uri) || "",
          ownershipEntity: (0, _v32.getBrandKitOwnershipEntity)(),
          ownershipEntityId: _v0
        });
      }, [_v20, _v7, _v9, _v0, _v4, _v18]),
      _v24 = (0, _v3.useCallback)(async ({
        newName: _v0,
        selectedItem: _v1,
        collectionKey: _v2,
        patchApi: _v3
      }) => {
        let {
          successfullyRenamed: _v4,
          failedToRename: _v5,
          itemName: _v6
        } = _v38[_v2];
        await _v20({
          uri: _v1?.uri,
          action: async ({
            id: _v0
          }) => {
            let _v1 = _v6(_v1, _v0, _v2);
            return await _v3(_v0, _v0), _v1;
          },
          successMessage: _v0 => _v4?.(_v0?.name || ""),
          errorMessage: _v5,
          errorFallbackAction: async () => {
            _v6(_v1, _v1.name, _v2);
          }
        }), _v17({
          itemId: (0, _v32.getIdFromUri)(_v1?.uri) || "",
          itemType: _v6,
          brandName: _v4.name,
          brandId: (0, _v32.getIdFromUri)(_v4?.uri) || "",
          ownershipEntity: (0, _v32.getBrandKitOwnershipEntity)(),
          ownershipEntityId: _v0
        });
      }, [_v20, _v6, _v0, _v4, _v17]),
      _v25 = (0, _v3.useCallback)(async _v0 => {
        await _v20({
          uri: _v4.uri,
          action: async () => (_v10(_v0), await _v11.patchUserBrandkitApi({
            brandkitName: _v0
          }), _v0),
          successMessage: _v0 => _v8.BRANDKIT_UPDATED_SUCCESSFULLY?.(_v0),
          errorMessage: _v8.FAILED_TO_UPDATE_BRANDKIT,
          topic: "brandkit",
          errorFallbackAction: async () => {
            _v10(_v4.name);
          }
        });
      }, [_v11, _v20, _v4.name, _v10]),
      _v26 = (0, _v3.useCallback)(() => {
        _v12({
          backgroundImage: _v4?.previewLogoUrl || "",
          name: _v4?.name,
          title: _v8.EDIT_BRANDKIT_TITLE,
          subTitle: _v8.BRANDKIT_NAME_LABEL,
          onSave: _v25
        });
      }, [_v4, _v25, _v12]),
      _v27 = (0, _v3.useCallback)(async _v0 => {
        await _v20({
          uri: _v0.uri,
          action: async ({
            id: _v0,
            userId: _v1
          }) => (await _v11.deleteUserBrandkitApi({
            kitUuid: _v0,
            userId: _v1
          }), (0, _v32.navigateToBrandkit)(_v3), _v0),
          successMessage: () => `${_v8.BRANDKIT_DELETED_SUCCESSFULLY} "${_v0.name}"`,
          errorMessage: _v8.FAILED_TO_DELETE_BRANDKIT,
          isOptimistic: !1
        });
      }, [_v11, _v20, _v3]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        _v13({
          item: _v0,
          deleteMessage: _v8.BRANDKITS_DELETE_MESSAGE,
          onDelete: () => _v27(_v0),
          isLoading: _v15
        });
      }, [_v13, _v27, _v15]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v19({
          itemId: (0, _v32.getIdFromUri)(_v0) || "",
          brandName: _v4.name,
          brandId: (0, _v32.getIdFromUri)(_v4?.uri) || "",
          ownershipEntity: (0, _v32.getBrandKitOwnershipEntity)(),
          ownershipEntityId: _v0
        });
      }, [_v4, _v0, _v19]);
    return (0, _v1.jsxs)(_v4.Box, {
      minHeight: "35rem",
      children: [(0, _v1.jsx)(_v46, {
        isLoading: _v14,
        brandkit: _v4,
        onRename: _v26,
        onDelete: () => _v28(_v4)
      }), _v14 ? (0, _v1.jsx)(_v27.default, {
        type: "page"
      }) : (0, _v1.jsxs)(_v5.Flex, {
        alignContent: "center",
        direction: "column",
        justifyContent: "center",
        children: [(0, _v1.jsx)(_v40, {
          collection: _v4?.logos?.map(_v0 => ({
            ..._v0,
            backgroundImage: _v0?.picture?.baseLink || "",
            isVisible: !1 !== _v0.isVisible
          })),
          collectionKey: _v36,
          patchApi: async (_v0, _v1) => await _v11.patchUserBrandkitLogoApi({
            logoId: _v0,
            name: _v1
          }),
          deleteApi: async _v0 => (await _v11.deleteUserBrandkitLogoApi({
            logoId: _v0
          }), _v0),
          onAdd: _v21,
          onDelete: _v23,
          onRename: _v24,
          onDownload: _v29,
          isLocked: _v4.isLocked
        }), (0, _v1.jsx)(_v40, {
          collection: _v4?.colors?.map(_v0 => ({
            ..._v0,
            backgroundColor: _v0.hex,
            isVisible: !1 !== _v0.isVisible
          })),
          collectionKey: _v37,
          patchApi: async (_v0, _v1) => await _v11.patchUserBrandkitColorApi({
            colorId: _v0,
            name: _v1
          }),
          deleteApi: async _v0 => (await _v11.deleteUserBrandkitColorApi({
            colorId: _v0
          }), _v0),
          onAdd: _v22,
          onDelete: _v23,
          onRename: _v24,
          isLocked: _v4.isLocked
        })]
      })]
    });
  }
  _v0.s(["SingleBrandkit", 0, ({
    userId: _v0,
    brandkitId: _v1,
    allowManage: _v2
  }) => (0, _v1.jsx)(_v9.BrandkitsProvider, {
    allowManage: _v2,
    children: (0, _v1.jsx)(_v47, {
      userId: _v0,
      brandkitId: _v1
    })
  })], 0);
}