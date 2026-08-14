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
    _v9 = _v0.i(0);
  _v0.s(["InspectorHandle", 0, ({
    inspectorLeft: _v0
  }) => {
    let _v1 = (0, _v7.useAppSelector)(_v0 => _v0.inspector.initialInspectorWidth),
      _v2 = (0, _v7.useAppDispatch)(),
      _v3 = (0, _v7.useAppSelector)(_v6.currentInspectorSelector),
      [_v4, _v5] = (0, _v3.useState)(!1),
      _v6 = (0, _v3.useCallback)(_v0 => {
        if (!_v0) return;
        let _v1 = (0, _v2.default)(_v0 - _v0 - 24, _v1, 600);
        _v2((0, _v6.setInspectorWidthAction)(_v1));
      }, [_v2, _v1, _v0]),
      _v7 = (0, _v4.useThrottledCallback)(_v0 => {
        _v4 && (_v0.preventDefault(), _v6(_v0.clientX));
      }, [_v6, _v4], 16);
    return (0, _v3.useLayoutEffect)(() => (document.addEventListener("mousemove", _v7, !0), () => {
      document.removeEventListener("mousemove", _v7, !0);
    }), [_v7]), (0, _v3.useLayoutEffect)(() => {
      let _v0 = () => _v5(!1);
      return document.addEventListener("mouseup", _v0, !0), () => {
        document.removeEventListener("mouseup", _v0, !0);
      };
    }, []), (0, _v1.jsx)(_v9.default, {
      position: _v8.DragEdgeDirection.RIGHT,
      isVisible: !!_v3,
      isDragging: _v4,
      onMouseDown: _v0 => {
        _v0.preventDefault(), _v5(!0);
      },
      dataTestId: _v5.testIds.inspectorResizeHandle
    });
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  _v0.s(["default", 0, ({
    fonts: _v0,
    title: _v1,
    onItemClick: _v2
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v11.Header, {
      size: "2xs",
      mb: 75,
      width: "100%",
      children: _v1
    }), (0, _v1.jsx)(_v13.Menu, {
      isOpen: !0,
      children: _v0.map(_v0 => (0, _v1.jsx)(_v10.Box, {
        role: "group",
        display: "flex",
        children: (0, _v1.jsxs)(_v14.MenuItem, {
          "data-testid": `${_v0.displayName}-font`,
          fontFamily: (0, _v18.getFontFamily)(_v0.name),
          onClick: () => _v2(_v0),
          backgroundColor: "transparent",
          padding: "4px 16px 4px 16px",
          children: [(0, _v1.jsx)(_v10.Box, {
            flexGrow: 1,
            children: _v0.displayName
          }), (0, _v1.jsx)(_v15.Tooltip, {
            label: (0, _v17.translate)({
              singular: "Add to brand fonts",
              dictionary: {
                es: {
                  singular: "Agregar a las fuentes de la marca"
                },
                "de-DE": {
                  singular: "Zu den Markenschriftarten hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter aux polices de la marque"
                },
                "ja-JP": {
                  singular: "ブランドフォントに追加"
                },
                "ko-KR": {
                  singular: "브랜드 폰트에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar às fontes da marca"
                },
                "zh-CN": {
                  singular: "添加到品牌字体"
                }
              }
            }),
            children: (0, _v1.jsx)(_v12.IconButton, {
              "data-testid": _v5.testIds.addToBrandFontsButton,
              flexShrink: 1,
              opacity: 0,
              _groupHover: {
                opacity: 1
              },
              icon: (0, _v1.jsx)(_v16.PlusCircle, {}),
              "aria-label": "add-brand-font",
              variant: "tertiary",
              size: "sm",
              _hover: {
                background: "transparent"
              }
            })
          })]
        }, _v0.id)
      }, _v0.id))
    })]
  })], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  _v0.s(["useFonts", 0, (_v0 = "") => {
    let [_v1] = (0, _v24.useUploadAndCreateFontMutation)(),
      {
        loadingBrandFontsFromLibrary: _v2,
        loadingBrandFontsFromFile: _v3
      } = (0, _v7.useAppSelector)(_v0 => _v0.loading),
      _v4 = (0, _v7.useAppSelector)(_v25.fontsSelector),
      {
        alertFontAlreadyExist: _v5,
        alertMaximumFontLimit: _v6,
        alertUploadFontFailed: _v7
      } = (0, _v20.useAlerts)(),
      _v8 = _v0.toLowerCase(),
      _v9 = (0, _v3.useMemo)(() => _v4 ? Object.values(_v4) : [], [_v4]),
      _v10 = (0, _v3.useMemo)(() => {
        let _v0 = _v9.filter(_v0 => _v0.isBrandAsset),
          _v1 = (0, _v18.mapLoadingFontsToFontObjects)(_v2);
        return (0, _v19.default)([..._v0, ..._v1], "family");
      }, [_v9, _v2]),
      _v11 = (0, _v3.useMemo)(() => (0, _v19.default)(_v9.filter(_v0 => !_v0.isBrandAsset), "family"), [_v9]),
      _v12 = (0, _v3.useMemo)(() => _v8.length > 0 ? (0, _v19.default)(_v9.filter(_v0 => _v0.family.toLowerCase().includes(_v8)), "family") : [], [_v9, _v8]),
      _v13 = (0, _v3.useCallback)(async _v0 => {
        let _v1 = _v23.MAX_NUM_FONTS - _v10.length,
          _v2 = [..._v0].splice(0, _v1),
          _v3 = [..._v0].splice(_v1),
          _v4 = [],
          _v5 = [],
          _v6 = async _v0 => {
            try {
              await _v1({
                file: _v0,
                isInternal: !1,
                kitId: _v21.DEFAULT_BRANDKIT_ID
              }).unwrap(), _v4.push(_v0);
            } catch (_v0) {
              let _v1 = _v0?.data?.errcode || "UNKNOWN_ERROR";
              if (_v5.push({
                file: _v0,
                errorCode: _v1
              }), "9002" !== _v1) {
                let _v0 = _v3.shift();
                _v0 && (await _v6(_v0));
              }
            }
          },
          _v7 = _v2.map(_v6);
        await Promise.allSettled(_v7);
        let _v8 = "";
        _v5.forEach(({
          errorCode: _v0
        }) => {
          "9002" !== _v8 && (_v8 = _v0);
        }), _v8 === _v22.FONT_ALREADY_EXIST.toString() ? _v5() : _v8 === _v22.MAXIMUM_FONT_LIMIT.toString() || _v3.length > 0 ? _v6() : _v5.length > 0 && _v7({
          onPrimaryClick: () => {
            _v13(_v5.map(({
              file: _v0
            }) => _v0));
          }
        });
      }, [_v10.length, _v1, _v5, _v6, _v7]),
      _v14 = (0, _v3.useCallback)(async _v0 => {
        try {
          await _v1({
            file: new File([], _v0.name),
            isInternal: !0,
            kitId: _v21.DEFAULT_BRANDKIT_ID
          }).unwrap();
        } catch (_v0) {
          let _v1 = _v0?.data?.errcode;
          _v1 === _v22.FONT_ALREADY_EXIST.toString() ? _v5() : _v1 === _v22.MAXIMUM_FONT_LIMIT.toString() ? _v6() : _v7({
            onPrimaryClick: () => _v14(_v0)
          });
        }
      }, [_v1, _v5, _v6, _v7]);
    return {
      brandFonts: _v10,
      libraryFonts: _v11,
      searchFonts: _v12,
      uploadBrandFonts: _v13,
      addLibraryFontToBrand: _v14,
      loadingBrandFonts: _v3
    };
  }], 0), _v0.s(["EmptyInspectorView", 0, {
    UPLOADS: "uploads",
    VIMEO_VIDEOS: "vimeo_videos",
    VIMEO_VIDEOS_PRIVATE: "vimeo_videos_private",
    TEAM_TEMPLATES: "teamTemplates",
    SHOPIFY_STORE: "shopify_store",
    SEARCH: "search",
    BRAND: "brand",
    FONTS: "fonts",
    INTRO: "intro",
    OUTRO: "outro",
    TRANSCRIPT: "transcript",
    TEAM_OVERLAY_TEMPLATES: "teamOverlayTemplates",
    LIBRARY_OVERLAY_TEMPLATES: "libraryOverlayTemplates",
    LOGOS: "logos"
  }], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  _v0.s(["RebrandFileInput", 0, ({
    onChange: _v0,
    onBeforeChange: _v1,
    accept: _v2,
    multiple: _v3 = !0,
    dataTestid: _v4,
    tooltip: _v5,
    isDisabled: _v6,
    isTextButton: _v7 = !1
  }) => {
    let _v8 = (0, _v3.useRef)(null),
      _v9 = () => {
        _v1 ? _v1(() => _v8.current?.click()) : _v8.current?.click();
      },
      _v10 = async _v0 => {
        await _v0(_v0), _v8.current && (_v8.current.value = "");
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v15.Tooltip, {
        label: _v5,
        isDisabled: !_v5,
        children: _v7 ? (0, _v1.jsx)(_v26.Button, {
          variant: "primary",
          leftIcon: (0, _v1.jsx)(_v28.Plus, {}),
          "data-testid": _v4,
          onClick: _v9,
          margin: "16px 0",
          size: "sm",
          children: (0, _v17.translate)({
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
          })
        }) : (0, _v1.jsx)(_v12.IconButton, {
          "data-testid": _v4,
          onClick: _v9,
          size: "sm",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v28.Plus, {}),
          "aria-label": _v4,
          isDisabled: _v6
        })
      }), (0, _v1.jsx)("div", {
        style: {
          display: "none"
        },
        children: (0, _v1.jsx)(_v27.FileInput, {
          ref: _v8,
          accept: _v2,
          onChange: _v10,
          multiple: _v3
        })
      })]
    });
  }], 0);
  var _v29 = _v0.i(0);
  _v0.s(["default", 0, _v0 => (0, _v1.jsx)(_v29.Search, {
    type: "text",
    _groupFocusWithin: {
      borderColor: "transparent"
    },
    ..._v0
  })], 0);
}