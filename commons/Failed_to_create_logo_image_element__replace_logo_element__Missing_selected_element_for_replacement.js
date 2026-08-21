{
  "use strict";

  _v0.s(["default", () => _v40], 0);
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
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = () => {
    let _v0 = (0, _v33.useAppDispatch)(),
      [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(!1),
      _v5 = (0, _v33.useAppSelector)(_v31.firstSelectedElementSelector),
      _v6 = (0, _v33.useAppSelector)(_v32.durationSelector),
      _v7 = (0, _v33.useAppSelector)(_v32.storyboardIdSelector),
      {
        trackEditorBrandKitItemUploaded: _v8
      } = (0, _v11.useEditorTracking)(),
      _v9 = (0, _v2.useContext)(_v15.ViewerContext),
      {
        hasManageBranding: _v10,
        hasApplyBranding: _v11
      } = (0, _v2.useContext)(_v23.PermissionsContext),
      _v12 = (0, _v2.useRef)(null),
      {
        data: _v13,
        isFetching: _v14,
        refetch: _v15
      } = (0, _v29.useGetBrandKitsLogosQuery)(),
      [_v16] = (0, _v29.useDeleteBrandkitLogoMutation)(),
      [_v17] = (0, _v29.useUploadBrandkitLogoMutation)(),
      [_v18] = (0, _v29.useCreateBrandKitMutation)(),
      {
        isReplacing: _v19,
        replaceElement: _v20
      } = (0, _v27.useReplaceElement)(),
      {
        createLogoImageElementAndSource: _v21
      } = (0, _v26.useBrandKits)(),
      {
        addElement: _v22
      } = (0, _v24.useAddElement)(),
      {
        isWorkspace: _v23
      } = (0, _v13.useIsWorkspace)(),
      {
        alertCannotUploadLogo: _v24,
        alertCannotAddLogo: _v25,
        alertCannotDeleteLogo: _v26,
        alertCannotCreateBrandKit: _v27
      } = (0, _v25.useAlerts)(),
      _v28 = _v9?.teamUser?.ownerId || _v9?.user?.id,
      _v29 = _v23 ? _v12.BRANDKITS_WORKSPACE_URL : _v12.BRANDKITS_TEAM_URL,
      _v30 = (0, _v2.useMemo)(() => _v13?.map(_v0 => ({
        value: _v0.id,
        label: _v0.label
      })) || [], [_v13]),
      _v31 = (0, _v33.useAppSelector)((0, _v30.inspectorDataSelector)(_v34.InspectorType.BRAND_LOGOS)),
      _v32 = _v31.selectedBrandKit || _v30[0]?.value,
      _v33 = (0, _v2.useMemo)(() => _v31.deletedLogoUris || [], [_v31.deletedLogoUris]),
      _v34 = (0, _v2.useCallback)(_v0 => _v13?.find(({
        uri: _v0
      }) => _v0.split("/").at(-1) === _v0), [_v13]),
      _v35 = (0, _v2.useCallback)(_v0 => {
        _v0((0, _v30.updateInspectorDataAction)({
          inspectorType: _v34.InspectorType.BRAND_LOGOS,
          data: {
            selectedBrandKit: _v0,
            deletedLogoUris: _v33
          }
        }));
      }, [_v0, _v33]),
      _v36 = (0, _v2.useMemo)(() => {
        let _v0 = _v32 ? _v34(_v32) : null;
        return _v0 || (_v35(_v30[0]?.value), _v34(_v30[0]?.value));
      }, [_v30, _v34, _v35, _v32]),
      _v37 = !(_v36?.isOrganization && _v36?.isLocked) && _v10,
      _v38 = (0, _v2.useCallback)(() => {
        _v0((0, _v30.updateInspectorDataAction)({
          inspectorType: _v34.InspectorType.BRAND_LOGOS,
          data: {
            selectedBrandKit: _v31.selectedBrandKit,
            deletedLogoUris: []
          }
        }));
      }, [_v0, _v31.selectedBrandKit]),
      _v39 = (0, _v2.useMemo)(() => _v36?.logos.filter(_v0 => !_v33.includes(_v0.uri)) || [], [_v36, _v33]),
      _v40 = (0, _v2.useCallback)(async _v0 => {
        try {
          let _v0 = await _v21(_v0, !1, _v6 || _v21.DEFAULT_IMAGE_ELEMENT_DURATION);
          if (!_v0) throw Error("Failed to create logo image element");
          let {
            element: _v1
          } = _v0;
          if (_v19) {
            if (!_v5) throw _v28.LogService.sendLog(_v22.MISSING_SELECTED_ELEMENT, _v35.LogComponent.EDITOR_ERROR, {
              flow: "replace_logo_element"
            }), Error("Missing selected element for replacement");
            _v1.rect = (0, _v36.calculateContainedRect)({
              rect: _v5.rect,
              newHeight: _v1.rect.height,
              newWidth: _v1.rect.width
            }), _v20({
              selectedElement: _v5,
              newElement: _v1
            });
          } else _v22(_v1);
        } catch (_v0) {
          _v25();
        }
      }, [_v21, _v6, _v19, _v5, _v20, _v22, _v25]),
      _v41 = (0, _v2.useCallback)(async _v0 => {
        if (_v28 && _v32) try {
          let _v0 = [..._v33, _v0.uri];
          _v0((0, _v30.updateInspectorDataAction)({
            inspectorType: _v34.InspectorType.BRAND_LOGOS,
            data: {
              selectedBrandKit: _v32,
              deletedLogoUris: _v0
            }
          })), await _v16({
            logoId: _v0.uri.split("/").at(-1) || "",
            kitId: _v32,
            organizationId: _v36?.uri?.split("/").at(2)
          }).unwrap();
        } catch (_v0) {
          let _v1 = _v33.filter(_v0 => _v0 !== _v0.uri);
          _v0((0, _v30.updateInspectorDataAction)({
            inspectorType: _v34.InspectorType.BRAND_LOGOS,
            data: {
              selectedBrandKit: _v32,
              deletedLogoUris: _v1
            }
          })), _v26();
        }
      }, [_v28, _v32, _v16, _v26, _v33, _v0, _v36?.uri]),
      _v42 = (0, _v2.useCallback)(async _v0 => {
        if (_v28) try {
          _v4(!0), await _v18({
            brandKitName: _v0
          }).unwrap(), await _v15();
        } catch (_v0) {
          _v27();
        } finally {
          _v4(!1), _v2(!1);
        }
      }, [_v28, _v18, _v15, _v27]),
      _v43 = (0, _v2.useCallback)(() => {
        _v2(!0);
      }, []),
      _v44 = (0, _v2.useCallback)(() => {
        _v2(!1);
      }, []),
      _v45 = (0, _v2.useCallback)(async _v0 => {
        let {
          target: {
            files: _v1
          }
        } = _v0;
        if (_v1 && _v1.length > 0 && _v32 && _v36) {
          let _v0 = _v1[0];
          try {
            await _v17({
              file: _v0,
              brandKitId: _v32,
              organizationId: _v36.uri?.split("/").at(2)
            }).unwrap(), _v8({
              editorSessionId: _v7,
              editorBrandKitItemType: "logos"
            }), _v38(), _v0.target && (_v0.target.value = "");
          } catch (_v0) {
            _v24(), _v0.target && (_v0.target.value = "");
          }
        }
      }, [_v24, _v32, _v17, _v38, _v36, _v8, _v7]);
    return (0, _v1.jsxs)(_v37.Inspector, {
      children: [(0, _v1.jsx)(_v39.InspectorHeader, {
        quickActions: _v37 && _v30.length > 0 && (0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v6.Tooltip, {
            label: (0, _v10.translate)({
              singular: "Upload logo",
              dictionary: {
                es: {
                  singular: "Subir un logotipo"
                },
                "de-DE": {
                  singular: "Logo hochladen"
                },
                "fr-FR": {
                  singular: "Mettre en ligne un logo"
                },
                "ja-JP": {
                  singular: "ロゴをアップロード"
                },
                "ko-KR": {
                  singular: "로고 업로드"
                },
                "pt-BR": {
                  singular: "Carregar logo"
                },
                "zh-CN": {
                  singular: "上传徽标"
                }
              }
            }),
            children: (0, _v1.jsx)(_v3.Box, {
              children: (0, _v1.jsx)(_v5.FileInput, {
                variant: "tertiary",
                label: (0, _v1.jsx)(_v9.Plus, {}),
                size: "sm",
                onChange: _v45,
                accept: _v14.ALLOWED_FILE_TYPES?.map(_v0 => `.${_v0}`).join(", ")
              })
            })
          })
        }),
        title: (0, _v10.translate)({
          singular: "Logos",
          dictionary: {
            es: {
              singular: "Logotipos"
            },
            "ja-JP": {
              singular: "logo"
            },
            "ko-KR": {
              singular: "로고"
            },
            "zh-CN": {
              singular: "徽标"
            }
          }
        }),
        hasBackButton: !0
      }), (0, _v1.jsx)(_v38.InspectorBody, {
        children: _v14 ? (0, _v1.jsx)(_v8.Center, {
          padding: "md",
          children: (0, _v1.jsx)(_v4.Spinner, {
            size: "md"
          })
        }) : _v30.length > 0 ? (0, _v1.jsxs)(_v7.Flex, {
          padding: "md",
          height: "100%",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v16.default, {
            selectedBrandKit: _v32,
            brandKits: _v30,
            onBrandKitChange: _v35,
            canEditBrandKit: !!_v37,
            brandkitsUrl: _v29
          }), _v39?.length > 0 ? (0, _v1.jsx)(_v19.default, {
            logos: _v39,
            onLogoClick: _v40,
            onDeleteLogo: _v41,
            canEditBrandKit: !!_v37,
            hasApplyBranding: !!_v11,
            gridRef: _v12
          }) : (0, _v1.jsx)(_v18.default, {
            canEditBrandKit: !!_v37,
            onFileUpload: _v45
          })]
        }) : (0, _v1.jsx)(_v20.default, {
          onCreateNewBrandKit: _v43,
          canEditBrandKit: !!_v37
        })
      }), _v1 && (0, _v1.jsx)(_v17.CreateBrandKitModal, {
        isOpen: _v1,
        onSave: _v42,
        handleClose: _v44,
        isLoading: _v3
      })]
    });
  };
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = (0, _v41.default)(_v44.InspectorPaddedRow).withConfig({
      displayName: "ColorPaletteInspector.style__ColorPaletteContainer",
      componentId: "sc-4bc44c98-0"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,
    _v46 = _v41.default.div.withConfig({
      displayName: "ColorPaletteInspector.style__BrandColorPaletteSection",
      componentId: "sc-4bc44c98-1"
    })`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
`,
    _v47 = _v41.default.div.withConfig({
      displayName: "ColorPaletteInspector.style__BrandColorSectionHeader",
      componentId: "sc-4bc44c98-2"
    })`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,
    _v48 = _v41.default.div.withConfig({
      displayName: "ColorPaletteInspector.style__BrandColorPaletteBox",
      componentId: "sc-4bc44c98-3"
    })`
  width: 32.3333%;
  position: relative;
  border-radius: ${8}px;
  cursor: pointer;
  margin: 8px 0 16px 0;
`,
    _v49 = _v41.default.div.withConfig({
      displayName: "ColorPaletteInspector.style__BrandColorPaletteBoxContent",
      componentId: "sc-4bc44c98-4"
    })`
  position: relative;
  width: 100%;
  background: ${({
      theme: _v0
    }) => _v0.formats.secondary};
  border-radius: 8px;
  padding-top: ${100}%;
  height: 0;

  &:after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${8}px;
    border: 1px solid ${_v43.core.color.stroke};
    pointer-events: none;
  }

  ${({
      isActive: _v0
    }) => {
      let _v1 = _v41.css`
      &:after {
        border: ${({
        theme: _v0
      }) => `1px solid ${_v0.item.bg}`};
      }
      &:before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        width: 100%;
        height: 100%;
        top: -3px;
        left: -3px;
        border-radius: ${11}px;
        border: ${3}px solid
          ${_v0 ? _v42.bokehTheme.colors.blue["500"] : _v42.bokehTheme.colors.blue["300"]};
        pointer-events: none;
      }
    `;
      return _v41.css`
      &:hover {
        ${_v1}
      }
      ${_v0 && _v1}
    `;
    }}
`,
    _v50 = _v41.default.div.withConfig({
      displayName: "ColorPaletteInspector.style__BrandColorPaletteBoxOverlay",
      componentId: "sc-4bc44c98-5"
    })`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: ${8}px;
  overflow: hidden;
`;
  _v0.s(["BrandColorPaletteBox", 0, _v48, "BrandColorPaletteBoxContent", 0, _v49, "BrandColorPaletteBoxOverlay", 0, _v50, "BrandColorPaletteSection", 0, _v46, "BrandColorSectionHeader", 0, _v47, "ColorPaletteContainer", 0, _v45], 0), _v0.s(["BRAND_FEATURES", 0, {
    LOGO: "logo",
    COLOR: "color",
    FONT: "font",
    BUSINESS_CARD: "businessCard",
    BRAND_BUTTON: "brand_button",
    BRAND_INSPECTOR: "brand_inspector"
  }], 0);
}