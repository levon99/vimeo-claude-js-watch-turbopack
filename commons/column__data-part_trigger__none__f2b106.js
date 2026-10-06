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
  function _v34({
    brandKits: _v0,
    handleSelect: _v1,
    selectedBrandKit: _v2
  }) {
    let _v3 = (0, _v2.useMemo)(() => [_v0?.[0]?.value || ""], [_v0]);
    return (0, _v2.useEffect)(() => {
      _v2 && "" !== _v2 || _v1(_v3[0]);
    }, [_v3, _v1, _v2]), (0, _v1.jsx)(_v9.Flex, {
      direction: "column",
      sx: {
        '& [data-part="trigger"]': {
          outline: "none",
          paddingLeft: "0",
          border: "none",
          "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none"
          },
          "&:hover": {
            outline: "none"
          }
        },
        ' & [data-part="value-text"]': {
          paddingRight: "5px"
        },
        ' & [data-part="content"]': {
          width: "initial"
        }
      },
      children: 1 === _v0.length ? (0, _v1.jsx)(_v17.Text, {
        variant: "heading-xs",
        maxWidth: "140px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        children: _v0[0].label
      }) : (0, _v1.jsx)(_v33.Select, {
        onValueChange: _v0 => {
          _v1(_v0.value[0]);
        },
        size: "sm",
        items: _v0,
        variant: "outlined",
        style: {
          maxWidth: "140px"
        },
        value: _v2 ? [_v2] : [],
        children: _v0 => (0, _v1.jsx)(_v33.SelectItem, {
          display: "flex",
          children: (0, _v1.jsx)(_v33.SelectItemText, {
            style: {
              gridColumn: "2"
            },
            children: _v0.label
          })
        }, _v0.value)
      })
    });
  }
  let _v35 = "brand_kit_modal";
  _v0.s(["LogoPickerBrandKit", 0, function ({
    LogoPickerControlComponent: _v0,
    popoverPlacement: _v1 = "top-end",
    initialLogo: _v2,
    onLogoSelect: _v3,
    isPickerOpen: _v4,
    triggerRef: _v5,
    popoverRef: _v6,
    onClose: _v7,
    logoPickerStyle: _v8,
    position: _v9 = "relative",
    productName: _v10 = "general",
    visualMatchingEnabled: _v11 = !1
  }) {
    let _v12 = (0, _v2.useRef)(null),
      _v13 = _v5 || _v12,
      _v14 = (0, _v2.useRef)(null),
      _v15 = _v6 || _v14,
      [_v16, _v17] = (0, _v2.useState)(""),
      [_v18, _v19] = (0, _v2.useState)(_v2 || {}),
      [_v20, _v21] = (0, _v2.useState)(!1),
      [_v22, _v23] = (0, _v2.useState)(!1),
      [_v24, _v25] = (0, _v2.useState)([]),
      [_v26, _v27] = (0, _v2.useState)(!1),
      _v28 = (0, _v2.useContext)(_v31.ViewerContext),
      {
        isWorkspace: _v29
      } = (0, _v28.useIsWorkspace)(),
      _v30 = _v29 ? _v29.BRANDKITS_WORKSPACE_URL : _v29.BRANDKITS_TEAM_URL,
      _v31 = (0, _v14.useToast)(),
      _v32 = void 0 !== _v4 ? _v4 : _v26,
      _v33 = _v28?.teamUser?.ownerId || _v28?.user?.id,
      _v34 = _v29 ? "workspace" : "team",
      _v35 = Number(_v33 || 0),
      {
        sendCreateBrandKitItemEvent: _v36,
        sendAddBrandKitItemEvent: _v37
      } = (0, _v26.useBrandKitsEvents)();
    (0, _v19.useOutsideClick)({
      enabled: _v32,
      ref: _v15,
      handler: _v0 => {
        _v13?.current?.contains(_v0.target) || _v15?.current?.contains(_v0.target) || (_v27(!1), _v7?.());
      }
    });
    let {
        capabilities: {
          hasManageBranding: _v38,
          hasApplyBranding: _v39
        }
      } = (0, _v23.useCapability)(["hasManageBranding", "hasApplyBranding"], _v33),
      {
        data: _v40,
        mutate: _v41,
        isLoading: _v42
      } = (0, _v24.useGetUserBrandkits)(() => _v33 ? {
        where: {
          userId: _v33
        },
        select: ["name", "uri", "logos", "isOrganization", "isLocked"]
      } : null),
      _v43 = (0, _v2.useMemo)(() => _v40?.data?.map(_v0 => ({
        value: _v0.uri?.split("/").at(-1) || "",
        label: _v0.name
      })) || [], [_v40]),
      _v44 = (0, _v2.useMemo)(() => _v40?.data?.find(_v0 => _v0.uri.split("/").at(-1) === _v16), [_v40, _v16]),
      _v45 = (0, _v2.useMemo)(() => _v44?.logos.map(_v0 => ({
        url: _v0.picture.baseLink,
        name: _v0.name,
        uri: _v0.uri
      })), [_v44]),
      _v46 = (0, _v2.useMemo)(() => _v40?.data.find(_v0 => _v0.logos.some(_v0 => _v0.uri === _v2?.uri || _v0.picture.baseLink === _v2?.url))?.uri.split("/").at(-1), [_v40, _v2]);
    (0, _v2.useEffect)(() => {
      _v45 && _v25(_v45);
    }, [_v45]), (0, _v2.useEffect)(() => {
      _v32 && _v41();
    }, [_v32, _v41]), (0, _v2.useEffect)(() => {
      _v32 && (_v46 && _v17(_v46), void 0 === _v4 && _v27(!0));
    }, [_v32, _v46, _v4]);
    let _v47 = (0, _v2.useCallback)(async () => {
      try {
        if (_v2?.url) {
          _v23(!0);
          let _v0 = await (0, _v30.getVisualMatchingBrandkitLogo)(_v2?.url, _v40?.data);
          if (_v0) {
            _v17(_v0.brandkitId), _v19(_v0.matchingLogo), _v23(!1);
            return;
          }
        }
      } catch (_v0) {
        console.error("Visual matching failed, falling back to original logic:", _v0);
      }
      _v23(!1), _v17(_v46 || _v43[0]?.value || "");
    }, [_v2?.url, _v40?.data, _v46, _v43, _v23]);
    (0, _v2.useEffect)(() => {
      _v43.length > 0 && !_v16 && !_v46 && _v11 && _v47();
    }, [_v43, _v16, _v46, _v47, _v11]);
    let _v48 = (0, _v2.useMemo)(() => {
        if (_v44?.isOrganization) return Number(_v44.uri?.split("/").at(2));
      }, [_v44]),
      {
        uploadLogoToBrandKit: _v49
      } = (0, _v27.useBrandLogoUpload)(_v48),
      _v50 = (0, _v2.useCallback)(_v0 => {
        let {
          target: {
            files: _v1
          }
        } = _v0;
        if (_v1 && _v1.length > 0 && _v16) {
          let _v0 = _v1[0];
          _v21(!0), _v49({
            file: _v0,
            brandKitId: _v16
          }).then(_v0 => {
            _v0 && (_v25(_v0 => [{
              name: _v0.name,
              url: _v0.picture.baseLink,
              uri: _v0.uri
            }, ..._v0]), _v44 && _v36({
              itemId: _v0.uri.split("/").pop() || "",
              brandName: _v44.name,
              brandId: _v16,
              ownershipEntity: _v34,
              ownershipEntityId: _v35,
              modalName: null,
              itemType: "logo",
              location: _v35,
              product: _v10
            })), _v21(!1), _v0.target && (_v0.target.value = "");
          }).catch(_v0 => {
            _v31({
              title: _v0.message,
              variant: "warning"
            }), console.error("Error uploading logo:", _v0), _v21(!1), _v0.target && (_v0.target.value = "");
          });
        }
      }, [_v16, _v49, _v31, _v44, _v36, _v34, _v35, _v10]),
      _v51 = _v24?.length === 0 || !_v24,
      _v52 = (0, _v2.useMemo)(() => _v0 ? (0, _v1.jsx)(_v0, {}) : (0, _v1.jsx)(_v2.Fragment, {}), [_v0]);
    return (0, _v1.jsx)(_v3.Box, {
      sx: _v8,
      position: _v9,
      children: (0, _v1.jsxs)(_v4.Popover, {
        placement: _v1,
        isOpen: _v32,
        onClose: () => {
          void 0 === _v4 && _v27(!1), _v7?.();
        },
        children: [(0, _v1.jsx)(_v5.PopoverTrigger, {
          children: (0, _v1.jsx)(_v3.Box, {
            "data-testid": "toggle-custom-logo",
            ref: _v13,
            children: _v52
          })
        }), (0, _v1.jsx)(_v7.Portal, {
          children: _v42 || _v22 ? (0, _v1.jsx)(_v3.Box, {
            position: "absolute",
            zIndex: "100000",
            children: (0, _v1.jsx)(_v8.PopoverContent, {
              width: (0, _v12.rem)(270),
              height: "340px",
              gap: "sm",
              padding: "md",
              zIndex: "100000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v18.Spinner, {
                size: "md"
              })
            })
          }) : _v43.length > 0 ? (0, _v1.jsx)(_v3.Box, {
            position: "fixed",
            zIndex: "100000",
            ref: _v15,
            children: (0, _v1.jsxs)(_v8.PopoverContent, {
              position: "relative",
              width: (0, _v12.rem)(270),
              gap: "sm",
              maxHeight: "340px",
              padding: "0",
              zIndex: "100000",
              "data-testid": "logo-picker-brand-kit-popover-content",
              children: [(0, _v1.jsxs)(_v11.PopoverHeader, {
                display: "flex",
                justifyContent: "space-between",
                textStyle: "heading-sm",
                paddingX: "md",
                paddingTop: "sm",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v34, {
                  handleSelect: _v0 => {
                    _v17(_v0);
                  },
                  brandKits: _v43,
                  selectedBrandKit: _v16
                }), _v38 && (0, _v1.jsx)(_v6.Button, {
                  className: "edit-button",
                  size: "xs",
                  variant: "secondary",
                  paddingX: "sm",
                  leftIcon: (0, _v1.jsx)(_v21.PopOut, {}),
                  isDisabled: "" === _v16,
                  onClick: () => {
                    window.open(_v30, "_blank");
                  },
                  children: (0, _v25.translate)({
                    singular: "Edit",
                    dictionary: {
                      es: {
                        singular: "Editar"
                      },
                      "de-DE": {
                        singular: "Bearbeiten"
                      },
                      "fr-FR": {
                        singular: "Modifier"
                      },
                      "ja-JP": {
                        singular: "編集"
                      },
                      "ko-KR": {
                        singular: "편집"
                      },
                      "pt-BR": {
                        singular: "Editar"
                      },
                      "zh-CN": {
                        singular: "编辑"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v10.PopoverBody, {
                overflowY: "auto",
                children: _v51 && !_v38 ? (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  paddingLeft: "md",
                  paddingBottom: "md",
                  children: (0, _v25.translate)({
                    singular: "Ask your admin to add logos to reuse across all your videos",
                    dictionary: {
                      es: {
                        singular: "Pídale a su administrador que agregue logotipos para reutilizarlos en todos sus videos."
                      },
                      "de-DE": {
                        singular: "Bitten Sie Ihren Administrator, Logos hinzuzufügen, die Sie in allen Ihren Videos wiederverwenden können."
                      },
                      "fr-FR": {
                        singular: "Demandez à votre administrateur d'ajouter des logos que vous pourrez réutiliser dans toutes vos vidéos"
                      },
                      "ja-JP": {
                        singular: "すべての動画で再利用できるように管理者にロゴの追加を依頼してください"
                      },
                      "ko-KR": {
                        singular: "관리자에게 모든 동영상에 재사용할 로고 추가 요청"
                      },
                      "pt-BR": {
                        singular: "Peça ao seu administrador para adicionar logotipos para reutilizar em todos os seus vídeos"
                      },
                      "zh-CN": {
                        singular: "请联系您的管理员添加可在所有视频中重复使用的徽标"
                      }
                    }
                  })
                }) : (0, _v1.jsxs)(_v9.Flex, {
                  flexWrap: "wrap",
                  gap: "md",
                  paddingLeft: "md",
                  paddingBottom: "md",
                  children: [_v20 && (0, _v1.jsx)(_v32.LogoCard, {
                    url: "",
                    name: "",
                    isSelected: !1,
                    isLoading: !0
                  }), _v24?.map(_v0 => (0, _v1.jsx)(_v3.Box, {
                    cursor: _v39 ? "pointer" : "not-allowed",
                    onClick: () => {
                      _v39 && (_v19({
                        uri: _v0.uri,
                        url: _v0.url
                      }), _v3?.({
                        logoUri: _v0.uri,
                        logoUrl: _v0.url
                      }), _v44 && _v37({
                        itemId: _v0.uri.split("/").pop() || "",
                        brandName: _v44.name,
                        brandId: _v16,
                        ownershipEntity: _v34,
                        ownershipEntityId: _v35,
                        modalName: null,
                        itemType: "logo",
                        location: _v35,
                        product: _v10
                      }));
                    },
                    children: (0, _v1.jsx)(_v32.LogoCard, {
                      url: _v0.url,
                      name: _v0.name,
                      isSelected: _v0.uri === _v18.uri || _v0.url === _v18.url,
                      isLoading: !1
                    })
                  }, _v0.uri)), _v38 && !(_v44?.isOrganization && _v44?.isLocked) && (0, _v1.jsx)(_v13.FileInput, {
                    variant: "secondary",
                    label: (0, _v1.jsx)(_v20.Plus, {}),
                    onChange: _v0 => {
                      _v50(_v0);
                    },
                    accept: ".jpg, .png, .jpeg, .webp",
                    sx: {
                      padding: "0",
                      height: "70px",
                      width: "110px",
                      alignItems: "center",
                      justifyContent: "center"
                    }
                  })]
                })
              })]
            })
          }) : (0, _v1.jsx)(_v3.Box, {
            position: "fixed",
            zIndex: "100000",
            ref: _v15,
            children: (0, _v1.jsxs)(_v8.PopoverContent, {
              width: (0, _v12.rem)(270),
              gap: "sm",
              padding: "0",
              zIndex: "100000",
              children: [(0, _v1.jsxs)(_v11.PopoverHeader, {
                display: "flex",
                justifyContent: "space-between",
                textStyle: "heading-sm",
                paddingX: "md",
                paddingTop: "sm",
                alignItems: "center",
                zIndex: "100000",
                children: [(0, _v1.jsx)(_v17.Text, {
                  variant: "heading-xs",
                  children: "Brand kit"
                }), _v38 && (0, _v1.jsx)(_v15.Tooltip, {
                  label: "Create kit",
                  placement: "top",
                  mt: "sm",
                  children: (0, _v1.jsx)(_v16.IconButton, {
                    "aria-label": "Create kit",
                    variant: "secondary",
                    icon: (0, _v1.jsx)(_v22.PlusSmall, {}),
                    size: "xs",
                    onClick: () => {
                      window.open(_v30, "_blank");
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v10.PopoverBody, {
                paddingX: "md",
                paddingBottom: "md",
                children: (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  children: (0, _v25.translate)({
                    singular: "Create a shared logo library to reuse across all your videos",
                    dictionary: {
                      es: {
                        singular: "Cree una biblioteca de logotipos compartida para reutilizarla en todos sus videos."
                      },
                      "de-DE": {
                        singular: "Erstellen Sie eine gemeinsame Logo-Bibliothek, die Sie in allen Ihren Videos verwenden können."
                      },
                      "fr-FR": {
                        singular: "Créez une bibliothèque de logos partagée que vous pourrez réutiliser dans toutes vos vidéos"
                      },
                      "ja-JP": {
                        singular: "すべての動画で再利用するための共有ロゴライブラリを作成"
                      },
                      "ko-KR": {
                        singular: "모든 동영상에서 재사용할 공유 로고 라이브러리 생성"
                      },
                      "pt-BR": {
                        singular: "Crie uma biblioteca de logotipos compartilhada para reutilizar em todos os seus vídeos"
                      },
                      "zh-CN": {
                        singular: "创建一个共享徽标库，以在所有视频中重复使用"
                      }
                    }
                  })
                })
              })]
            })
          })
        })]
      })
    });
  }], 0);
}