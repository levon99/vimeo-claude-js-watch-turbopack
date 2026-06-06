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
    _v20 = _v0.i(0);
  let _v21 = ({
    onClick: _v0,
    imageSrc: _v1,
    borderTopRadius: _v2 = "md",
    borderRadius: _v3
  }) => {
    let [_v4, _v5] = (0, _v2.useState)(!0);
    return (0, _v1.jsxs)(_v16.Center, {
      position: "absolute",
      inset: "0",
      width: "100%",
      background: "fill-component",
      borderTopRadius: _v2,
      borderRadius: _v3,
      children: [_v1 ? (0, _v1.jsx)(_v18.Image, {
        hidden: _v4,
        onClick: _v0,
        src: _v1,
        alt: _v17.BRANDKIT_LOGO,
        padding: "lg",
        maxWidth: "100%",
        maxHeight: "100%",
        onLoad: () => {
          _v5(!1);
        },
        onError: () => {
          _v5(!1);
        }
      }) : (0, _v1.jsx)(_v19.LogoBrand, {
        boxSize: "2xl",
        opacity: "40%",
        role: "img",
        "aria-label": _v17.BRANDKIT_LOGO
      }), _v1 && _v4 && (0, _v1.jsx)(_v20.default, {
        type: "card"
      })]
    });
  };
  _v0.s(["BrandkitLogo", 0, _v21], 0);
  let _v22 = ({
      isOpen: _v0,
      onSave: _v1,
      handleClose: _v2,
      isLoading: _v3,
      name: _v4 = "",
      backgroundColor: _v5,
      backgroundImage: _v6 = "",
      title: _v7,
      subTitle: _v8
    }) => {
      let [_v9, _v10] = (0, _v2.useState)(_v4),
        _v11 = _v4 ? _v17.CONFIRM_BUTTON_TEXT : _v17.CREATE_BUTTON_TEXT,
        _v12 = async _v0 => {
          if (_v0 && _v0 !== _v4) {
            let _v0 = _v5.default.sanitize(_v0);
            if (_v0 && _v0 !== _v4) return await _v1(_v0), _v2();
            _v10(_v4);
          }
        };
      return (0, _v1.jsxs)(_v7.Modal, {
        isOpen: _v0,
        onClose: _v2,
        size: "md",
        children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
          borderRadius: "md",
          pb: "md",
          children: [(0, _v1.jsx)(_v10.ModalHeader, {
            fontSize: "header-lg",
            py: "md",
            px: "lg",
            mb: "0",
            children: _v7 || (_v4 ? _v17.EDIT_BRANDKIT_NAME : _v17.NEW_BRANDKIT_NAME)
          }), (0, _v1.jsx)(_v12.ModalBody, {
            gap: "md",
            px: "lg",
            py: "sm",
            height: "408px",
            children: (0, _v1.jsxs)(_v15.FormControl, {
              display: "flex",
              flexDirection: "column",
              gap: "xs",
              children: [(_v6 || _v5) && (0, _v1.jsx)(_v16.Center, {
                backgroundColor: _v5 || "fill-component",
                height: "146px",
                borderRadius: "md",
                position: "relative",
                children: _v6 && (0, _v1.jsx)(_v21, {
                  imageSrc: _v6,
                  borderRadius: "md"
                })
              }), (0, _v1.jsxs)(_v15.FormControl, {
                children: [(0, _v1.jsx)(_v14.FormLabel, {
                  fontWeight: "medium",
                  children: _v8 || _v17.BRANDKIT_NAME_LABEL
                }), (0, _v1.jsx)(_v13.Input, {
                  defaultValue: _v4,
                  value: _v9,
                  marginTop: "xs",
                  size: "lg",
                  maxLength: _v17.MAX_BRANDKIT_NAME_LENGTH,
                  onChange: _v0 => _v10(_v0.target.value),
                  autoFocus: !0,
                  onKeyDown: async _v0 => {
                    _v0.key === _v17.ENTER_KEY && (await _v12(_v9));
                  }
                }), (0, _v1.jsxs)(_v15.FormHelperText, {
                  fontSize: "body-md",
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "xs",
                  color: _v9.length >= _v17.CHARACTER_COUNT_WARNING_THRESHOLD ? "status-caution-primary" : "text-tertiary",
                  children: [_v9.length || 0, "/", _v17.MAX_BRANDKIT_NAME_LENGTH, " ", _v17.CHARACTERS]
                })]
              })]
            })
          }), (0, _v1.jsxs)(_v11.ModalFooter, {
            gap: "md",
            children: [(0, _v1.jsx)(_v6.Button, {
              size: "md",
              variant: "tertiary",
              onClick: _v2,
              children: _v17.CANCEL_BUTTON_TEXT
            }), (0, _v1.jsx)(_v6.Button, {
              size: "md",
              variant: "primary",
              isDisabled: !_v9 || _v9 === _v4,
              isLoading: _v3,
              onClick: async () => {
                await _v12(_v9);
              },
              children: _v11
            })]
          })]
        })]
      });
    },
    _v23 = (0, _v2.createContext)(void 0),
    _v24 = () => {
      let _v0 = (0, _v2.useContext)(_v23);
      if (void 0 === _v0) throw Error("useBrandkitsContext must be used within a BrandkitsProvider");
      return _v0;
    };
  _v0.s(["BrandkitsProvider", 0, ({
    children: _v0,
    allowManage: _v1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(null),
      [_v4, _v5] = (0, _v2.useState)(null),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(!0),
      [_v10, _v11] = (0, _v2.useState)(null),
      [_v12, _v13] = (0, _v2.useState)(null);
    (0, _v2.useEffect)(() => {
      if (_v10?.code?.toString()?.startsWith("5")) throw new _v3.ResourceNotFoundError();
    }, [_v10]);
    let _v14 = (0, _v2.useCallback)(_v0 => {
        _v5(null), _v3(_v0);
      }, []),
      _v15 = (0, _v2.useCallback)(_v0 => {
        _v3(null), _v5(_v0);
      }, []),
      _v16 = (0, _v2.useCallback)(() => {
        _v3(null), _v5(null);
      }, []);
    return (0, _v1.jsxs)(_v23.Provider, {
      value: {
        allowManage: _v1,
        isProcessing: _v6,
        setIsProcessing: _v7,
        isLoading: _v8,
        setIsLoading: _v9,
        showEditModal: _v14,
        showDeleteModal: _v15,
        closeModals: _v16,
        setTopic: _v13,
        topic: _v12,
        error: _v10,
        setError: _v11
      },
      children: [_v0, _v2 && (0, _v1.jsx)(_v22, {
        name: _v2.name,
        backgroundImage: _v2.backgroundImage || "",
        backgroundColor: _v2.backgroundColor || void 0,
        title: _v2.title,
        subTitle: _v2.subTitle,
        isLoading: _v6 || (_v2.isLoading ?? !1),
        onSave: async _v0 => {
          await _v2.onSave(_v0);
        },
        handleClose: _v16,
        isOpen: !0
      }), _v4 && (0, _v1.jsx)(_v4.BrandkitDeleteDialog, {
        deleteMessage: _v4.deleteMessage,
        item: _v4.item,
        isProcessing: _v6 || (_v4.isLoading ?? !1),
        onDelete: async () => {
          await _v4.onDelete();
        },
        onCancel: _v16,
        isOpen: !0
      })]
    });
  }, "useBrandkitsContext", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => {
    if (_v0) return _v0.split("/").pop() || void 0;
  };
  async function _v28(_v0, _v1) {
    try {
      var _v2;
      let _v0,
        _v1 = await fetch(_v0?.picture?.baseLink);
      if (!_v1.ok) throw Error(`Failed to fetch logo: ${_v1.statusText}`);
      let _v2 = await _v1.blob(),
        _v3 = window.URL.createObjectURL(_v2),
        _v4 = (_v2 = _v2.type, (_v0 = {
          "image/jpeg": "jpg",
          "image/png": "png",
          "image/webp": "webp",
          "image/svg+xml": "svg"
        })[_v2] || console.warn(`Unknown MIME type: ${_v2}`), _v0[_v2] || "bin"),
        _v5 = `${_v1}.${_v4}`;
      return Object.assign(document.createElement("a"), {
        href: _v3,
        download: _v5
      }).click(), window.URL.revokeObjectURL(_v3), _v5;
    } catch (_v0) {
      throw console.error("Error downloading logo:", _v0), _v0;
    }
  }
  let _v29 = _v0 => {
      let _v1 = window.location.pathname;
      return _v0 || _v1.includes(_v26.OWNERSHIP_ENTITY.ORGANIZATION) ? _v26.BRANDKITS_ORGANIZATION_URL : _v1.includes(_v26.OWNERSHIP_ENTITY.WORKSPACE) ? _v26.BRANDKITS_WORKSPACE_URL : _v26.BRANDKITS_TEAM_URL;
    },
    _v30 = _v0 => {
      if (!_v0) return;
      let _v1 = _v0.match(/\/users\/(\d+)/);
      return _v1 ? parseInt(_v1[1], 10) : void 0;
    },
    _v31 = (_v0, _v1) => {
      let _v2 = _v29(_v1);
      return `${_v2}${_v0 || ""}`;
    };
  _v0.s(["downloadLogo", 0, _v28, "getBrandKitOwnershipEntity", 0, () => {
    let _v0 = window.location.pathname;
    return _v0.includes(_v26.OWNERSHIP_ENTITY.WORKSPACE) ? _v26.OWNERSHIP_ENTITY.WORKSPACE : _v0.includes(_v26.OWNERSHIP_ENTITY.ORGANIZATION) ? _v26.OWNERSHIP_ENTITY.ORGANIZATION : _v26.OWNERSHIP_ENTITY.TEAM;
  }, "getBrandkitUrl", 0, _v31, "getBrandkitsUrl", 0, _v29, "getIdFromUri", 0, _v27, "getUserIdFromUri", 0, _v30, "navigateToBrandkit", 0, (_v0, _v1) => {
    _v0.push(_v31(_v1 || "", !1));
  }], 0), _v0.s(["default", 0, () => {
    let _v0 = (0, _v25.useToast)(),
      {
        closeModals: _v1,
        setIsLoading: _v2,
        setIsProcessing: _v3,
        setTopic: _v4,
        setError: _v5
      } = _v24();
    async function _v6(_v0, _v1) {
      if (_v1) {
        let _v0 = _v30(_v1),
          _v1 = _v27(_v1);
        if (!_v1) throw Error("Invalid URI: Unable to extract ID");
        return await _v0({
          id: _v1,
          userId: _v0
        });
      }
      return await _v0({});
    }
    async function _v7(_v0, _v1, _v2, _v3, _v4) {
      if (console.error(`executeAsync Error code: ${_v1}, message: ${_v2}`), _v0 && _v5({
        code: _v1,
        message: _v2
      }), _v3 && _v0({
        title: _v3,
        status: "warning",
        isClosable: !1
      }), _v4) try {
        await _v4();
      } catch (_v0) {
        console.error("Error fallback action failed:", _v0);
      }
    }
    return {
      executeAsync: async function _v0({
        uri: _v1,
        action: _v2,
        postAction: _v3,
        successMessage: _v4,
        errorMessage: _v5,
        isMainLoading: _v6 = !1,
        isOptimistic: _v7 = !0,
        topic: _v8,
        errorFallbackAction: _v9
      }) {
        var _v10, _v11, _v12, _v13, _v14;
        try {
          _v7 ? _v1() : (_v6 ? _v2(!0) : _v3(!0), _v4(_v8 || null));
          let _v0 = await _v6(_v2, _v1);
          return _v10 = _v0, (_v11 = _v4) && _v0({
            title: _v11(_v10),
            status: "info",
            isClosable: !1
          }), _v0;
        } catch (_v0) {
          _v7(_v6, _v0?.res?.status || _v0?.code, _v0.message, _v0?.code ? _v0?.message : _v5, _v9);
        } finally {
          _v12 = _v7, _v13 = _v6 ? _v2 : _v3, _v14 = _v3, _v12 || (_v1(), _v13?.(!1)), _v14?.();
        }
      }
    };
  }], 0);
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  _v0.s(["BrandkitMenuList", 0, ({
    onRename: _v0,
    onDownload: _v1,
    onDelete: _v2,
    onChangeThumbnail: _v3
  }) => {
    let {
        isProcessing: _v4
      } = _v24(),
      _v5 = [{
        label: _v17.CHANGE_THUMBNAIL,
        icon: (0, _v1.jsx)(_v19.LogoBrand, {}),
        onClick: _v3,
        divider: !1
      }, {
        label: _v17.RENAME,
        icon: (0, _v1.jsx)(_v35.EditPencil, {}),
        onClick: _v0,
        divider: !0
      }, {
        label: _v17.DOWNLOAD,
        icon: (0, _v1.jsx)(_v37.DownloadImport, {}),
        onClick: _v1,
        divider: !0
      }, {
        label: _v17.DELETE,
        icon: (0, _v1.jsx)(_v36.TrashBin, {}),
        onClick: _v2,
        divider: !1
      }].filter(_v0 => _v0.onClick);
    return (0, _v1.jsx)(_v33.MenuList, {
      children: _v5.map((_v0, _v1) => (0, _v1.jsxs)(_v2.default.Fragment, {
        children: [(0, _v1.jsx)(_v32.MenuItem, {
          width: "222px",
          padding: "sm",
          isDisabled: _v4,
          icon: _v0.icon,
          onClick: _v0 => {
            _v0.stopPropagation(), _v0.preventDefault(), _v0.onClick?.(_v0);
          },
          children: _v0.label
        }), _v1 < _v5.length - 1 && _v0.divider && (0, _v1.jsx)(_v34.MenuDivider, {})]
      }, _v0.label))
    });
  }], 0);
}