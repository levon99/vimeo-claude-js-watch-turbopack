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
    _v24 = _v0.i(0);
  _v0.s(["ColorPickerBrandKit", 0, function ({
    children: _v0,
    onChange: _v1,
    onClose: _v2,
    color: _v3,
    colorIndex: _v4,
    position: _v5 = _v21.DEFAULT_PICKER_PLACEMENT,
    disabled: _v6 = !1,
    productName: _v7 = "general",
    useSolidAndGradientColors: _v8 = !1,
    colorType: _v9 = _v23.ColorType.CUSTOM,
    onChangeColorWithType: _v10,
    testId: _v11
  }) {
    let [_v12, _v13] = (0, _v2.useState)(!1),
      [_v14, _v15] = (0, _v2.useState)(_v23.ColorPickerMode.SWATCHES),
      [_v16, _v17] = (0, _v2.useState)(""),
      [_v18, _v19] = (0, _v2.useState)(!1),
      _v20 = (0, _v24.determineColor)(_v3, _v4, _v9),
      [_v21, _v22] = (0, _v2.useState)(_v20 || _v21.DEFAULT_BRANDING_COLOR),
      [_v23, _v24] = (0, _v2.useState)(_v9 === _v23.ColorType.CUSTOM ? _v21 : _v21.DEFAULT_BRANDING_COLOR),
      _v25 = _v2.default.Children.toArray(_v0),
      _v26 = _v25.find(_v0 => _v2.default.isValidElement(_v0) && _v0.type === _v4.ColorPickerLabel),
      _v27 = _v25.filter(_v0 => _v2.default.isValidElement(_v0) && _v0.type !== _v4.ColorPickerLabel);
    (0, _v2.useEffect)(() => {
      _v22((0, _v24.determineColor)(_v3, _v4, _v9));
    }, [_v3, _v4, _v9]);
    let _v28 = (0, _v2.useContext)(_v19.ViewerContext),
      _v29 = _v28?.teamUser?.ownerId || _v28?.user?.id,
      {
        isWorkspace: _v30
      } = (0, _v17.useIsWorkspace)(),
      _v31 = _v30 ? _v16.BRANDKITS_WORKSPACE_URL : _v16.BRANDKITS_TEAM_URL,
      _v32 = (0, _v10.useToast)(),
      {
        sendCreateBrandKitItemEvent: _v33,
        sendAddBrandKitItemEvent: _v34
      } = (0, _v18.useBrandKitsEvents)(),
      _v35 = _v30 ? "workspace" : "team",
      _v36 = Number(_v29 || 0),
      {
        data: _v37,
        mutate: _v38
      } = (0, _v13.useGetUserBrandkits)(() => _v29 ? {
        where: {
          userId: _v29
        },
        select: ["name", "uri", "colors", "isLocked", "isOrganization"]
      } : null),
      [_v39, {
        loading: _v40
      }] = (0, _v12.usePostUserBrandkitColors)(),
      _v41 = _v28?.user?.account,
      _v42 = (0, _v2.useMemo)(() => ["free", "basic", "starter", "plus"], []),
      _v43 = !_v28?.teamUser || _v28?.user?.id === _v28?.team?.ownerId,
      _v44 = (0, _v2.useMemo)(() => _v42.includes(_v41) && _v43, [_v41, _v42, _v43]),
      _v45 = _v37?.data,
      _v46 = (0, _v2.useMemo)(() => _v45?.map(_v0 => ({
        value: _v0?.uri?.split("/").pop() || "",
        label: _v0?.name
      })), [_v45]),
      _v47 = (0, _v2.useMemo)(() => _v45?.find(_v0 => _v0?.uri.split("/").pop() === _v16), [_v45, _v16]),
      [_v48, _v49] = (0, _v2.useState)(void 0),
      _v50 = (0, _v2.useMemo)(() => (0, _v24.determineColorType)(_v48, _v9, _v21, _v8, _v45), [_v48, _v9, _v21, _v8, _v45]),
      _v51 = _v47?.colors || [],
      _v52 = _v47?.isOrganization,
      _v53 = _v47?.isLocked,
      _v54 = _v47?.uri;
    (0, _v2.useEffect)(() => {
      _v46?.length || _v43 || _v8 ? _v15(_v23.ColorPickerMode.SWATCHES) : _v15(_v23.ColorPickerMode.STANDARD);
    }, [_v46, _v43]), (0, _v2.useEffect)(() => {
      _v46?.length && !_v16 && _v17(_v46[0].value);
    }, [_v46, _v16]);
    let {
        capabilities: {
          hasManageBranding: _v55
        }
      } = (0, _v11.useCapability)(["hasManageBranding"], _v29),
      _v56 = async () => {
        try {
          _v29 && (await _v39({
            where: {
              userId: _v52 && Number(_v54?.split("/").at(2)) || _v29,
              kitUuid: _v16
            },
            select: ["name"],
            variables: {
              hex: _v21,
              name: `Color ${_v51.length + 1}`
            }
          })), _v33({
            itemId: _v21,
            brandName: _v47?.name || "",
            brandId: _v16,
            ownershipEntity: _v35,
            ownershipEntityId: _v36,
            modalName: null,
            itemType: "color",
            location: _v21.BRAND_KIT_MODAL_LOCATION,
            product: _v7
          });
        } catch (_v0) {
          _v32({
            title: "Failed to add color",
            variant: "warning"
          }), console.error("Error adding color:", _v0);
        }
        _v38(), _v49(_v23.ColorType.BRAND), _v15(_v23.ColorPickerMode.SWATCHES), _v19(!1);
      },
      _v57 = (0, _v24.isHexColor)(_v21);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.ColorPickerRoot, {
        onInteractOutside: () => {
          _v15(_v23.ColorPickerMode.SWATCHES), _v19(!1);
        },
        onExitComplete: () => {
          _v15(_v23.ColorPickerMode.SWATCHES), _v57 && _v2?.(_v21);
        },
        defaultValue: _v57 ? (0, _v7.parseColor)(_v21) : void 0,
        onValueChange: _v0 => {
          if (!_v6) {
            let _v0 = (0, _v8.toHex)(_v0.valueAsString);
            _v22(_v0), _v24(_v0), _v49(_v23.ColorType.CUSTOM), _v1?.(_v0), _v10?.({
              value: _v0,
              type: _v23.ColorType.CUSTOM
            });
          }
        },
        open: !_v6 && _v18,
        positioning: {
          placement: _v5,
          strategy: "fixed"
        },
        disabled: _v6,
        style: {
          width: "100%",
          cursor: _v6 ? "not-allowed" : "pointer"
        },
        children: (0, _v1.jsxs)(_v6.Flex, {
          gap: "xs",
          alignItems: "center",
          width: "100%",
          style: {
            cursor: _v6 ? "not-allowed" : "pointer"
          },
          children: [_v26 && (0, _v1.jsx)(_v1.Fragment, {
            children: _v26
          }), (0, _v1.jsx)(_v5.ColorPickerControl, {
            style: {
              width: "100%"
            },
            children: (0, _v1.jsx)(_v4.ColorPickerTrigger, {
              onMouseDown: _v0 => {
                _v0.preventDefault();
              },
              onClick: () => {
                if (!_v6) {
                  let _v0 = (0, _v24.findBrandkitForColor)(_v21, _v45);
                  _v0 && _v17(_v0), _v19(!0);
                }
              },
              children: _v27 ? (0, _v1.jsx)(_v3.Box, {
                style: {
                  opacity: _v6 ? .6 : 1,
                  cursor: _v6 ? "not-allowed" : "pointer",
                  pointerEvents: _v6 ? "none" : "auto"
                },
                children: _v27
              }) : (0, _v1.jsx)(_v3.Box, {
                height: "sm",
                width: "sm",
                cursor: "pointer",
                borderRadius: "button",
                bgColor: _v21
              })
            })
          }), (0, _v1.jsx)(_v4.ColorPickerPositioner, {
            style: {
              boxShadow: "none",
              backdropFilter: "none"
            },
            children: (0, _v1.jsx)(_v6.Flex, {
              "data-testid": _v11,
              children: (0, _v1.jsx)(_v4.ColorPickerContent, {
                style: {
                  border: "none",
                  backgroundColor: "transparent",
                  padding: 0,
                  height: "max-content",
                  maxHeight: (0, _v9.rem)(313),
                  width: "max-content"
                },
                children: (0, _v1.jsx)(_v6.Flex, {
                  gap: "xs",
                  children: (0, _v1.jsx)(_v6.Flex, {
                    boxShadow: "var(--vimeo-shadows-md)",
                    backdropFilter: "blur(var(--vimeo-blur-md))",
                    backgroundColor: "fill-blur",
                    borderWidth: "px",
                    borderColor: "var(--vimeo-colors-stroke)",
                    padding: "3",
                    borderRadius: "sm",
                    maxWidth: (0, _v9.rem)(320),
                    children: _v14 === _v23.ColorPickerMode.SWATCHES ? (0, _v1.jsx)(_v20.BrandKitSwatches, {
                      currentColorType: _v50,
                      setCurrentColor: _v22,
                      brandCenterUrl: _v31,
                      onClickAddColor: _v0 => {
                        _v0 ? (_v15(_v23.ColorPickerMode.BRANDKIT), _v49(_v23.ColorType.BRAND)) : (_v15(_v23.ColorPickerMode.STANDARD), _v49(_v23.ColorType.CUSTOM)), _v19(!0);
                      },
                      currentCustomColor: _v23,
                      brandKits: _v46,
                      colors: _v51,
                      isOrganization: _v52,
                      isLocked: _v53,
                      handleOpenUpsellModal: () => {
                        _v13(!0);
                      },
                      canUpsell: _v44,
                      canEdit: _v55,
                      setSelectedBrandKit: _v17,
                      selectedBrandKit: _v16,
                      currentColor: _v21,
                      isTeamOwner: _v43,
                      onChangeAdditionalColors: ({
                        value: _v0,
                        type: _v1,
                        index: _v2
                      }) => {
                        _v49(_v1), _v1?.(_v0), _v10?.({
                          value: _v0,
                          type: _v1,
                          index: _v2
                        });
                      },
                      onColorClick: _v0 => {
                        _v22(_v0.hex), _v1?.(_v0.hex), _v49(_v23.ColorType.BRAND), _v10?.({
                          value: _v0.hex,
                          type: _v23.ColorType.BRAND
                        }), _v34({
                          ownershipEntity: _v35,
                          ownershipEntityId: _v36,
                          itemId: _v0.hex,
                          brandName: _v47?.name || "",
                          brandId: _v16,
                          itemType: "color",
                          location: _v21.BRAND_KIT_MODAL_LOCATION,
                          product: _v7
                        });
                      },
                      useSolidAndGradientColors: _v8
                    }) : (0, _v1.jsx)(_v22.CustomColorPicker, {
                      isAddingBrandColor: _v14 === _v23.ColorPickerMode.BRANDKIT,
                      brandKitName: _v47?.name || "",
                      onSave: _v56,
                      onCancel: () => {
                        _v15(_v23.ColorPickerMode.SWATCHES), _v19(!1);
                      },
                      isLoading: _v40
                    })
                  })
                })
              })
            })
          })]
        })
      }), _v12 && (0, _v1.jsx)(_v15.default, {
        apiUrl: _v28?.apiUrl,
        userConfig: {
          jwt: _v28?.jwt,
          userId: _v28?.user?.id
        },
        templateType: "default",
        modalConfig: {
          headerText: (0, _v14.translate)({
            singular: "Upgrade to unlock more video tools",
            dictionary: {
              es: {
                singular: "Cambie de plan para acceder a más herramientas de video"
              },
              "de-DE": {
                singular: "Upgrade zur Freischaltung weiterer Video-Tools vornehmen"
              },
              "fr-FR": {
                singular: "Mettre à niveau pour débloquer plus d'outils vidéo"
              },
              "ja-JP": {
                singular: "アップグレードして、さらに多くの動画ツールをご利用ください"
              },
              "ko-KR": {
                singular: "업그레이드하여 더 많은 동영상 도구를 이용하세요"
              },
              "pt-BR": {
                singular: "Faça upgrade para acessar mais ferramentas de vídeo"
              }
            }
          }),
          subHeaderText: ""
        },
        onClose: () => _v13(!1),
        tracking: {
          params: {
            feature: "color_picker_brand_kit"
          },
          paywallTracking: {
            paywallTrigger: "color_picker_brand_kit_upgrade_button",
            paywallLocation: "color_picker",
            paywallType: "popup",
            paywallFeature: "brand_kit"
          }
        }
      })]
    });
  }]);
}