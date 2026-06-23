{
  "use strict";

  _v0.s(["default", () => _v38], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
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
    _v18 = _v0.i(0);
  let _v19 = () => {
    let _v0 = (0, _v2.useContext)(_v14.FlowHooksContext),
      _v1 = (0, _v2.useContext)(_v15.LabeledCapabilitiesContext),
      {
        hasCreateBrandApply: _v2 = !1
      } = (0, _v2.useContext)(_v16.PermissionsContext),
      _v3 = (0, _v18.useAppSelector)(_v17.videoSessionIdSelector);
    if (!_v0 || !_v1 || !_v1.canBrandVideo) return {
      showUpsell: () => null,
      shouldShowUpsell: !1
    };
    let _v4 = _v1.canBrandVideo,
      _v5 = _v4.allowed && _v2,
      _v6 = _v4.tier;
    return {
      showUpsell: _v0 => {
        if (_v5) return;
        let {
          feature: _v1,
          pageLocation: _v2,
          upsellName: _v3,
          trackingFeature: _v4
        } = _v0;
        _v0.onOpenBrand({
          feature: _v1,
          vsid: _v3,
          tier: _v6.name,
          pageLocation: _v2,
          upsellTrigger: _v13.BRAND_FEATURES.BRAND_INSPECTOR,
          upsellName: _v3,
          trackingParams: _v4 ? {
            upsell: "editor_brand",
            integration: "none",
            feature: _v4,
            bpEventVersion: 41
          } : void 0
        });
      },
      shouldShowUpsell: !_v5
    };
  };
  _v0.s(["useBrandUpsell", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = _v28.default.div.withConfig({
      displayName: "ColorPaletteBox.style__ColorPaletteContainer",
      componentId: "sc-abbdd17e-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,
    _v30 = _v28.default.div.withConfig({
      displayName: "ColorPaletteBox.style__ColorRow",
      componentId: "sc-abbdd17e-1"
    })`
  width: 100%;
  height: 100%;
  background-color: ${({
      color: _v0
    }) => `${_v0}`};
`,
    _v31 = _v0 => {
      let {
        colorPalette: _v1
      } = _v0;
      return (0, _v1.jsxs)(_v29, {
        children: [(0, _v1.jsx)(_v30, {
          color: _v1.primary
        }), (0, _v1.jsx)(_v30, {
          color: _v1.secondary
        }), (0, _v1.jsx)(_v30, {
          color: _v1.default
        })]
      });
    };
  var _v32 = _v0.i(0);
  let _v33 = () => (0, _v1.jsx)(_v32.Box, {
    display: "inline-block",
    alignSelf: "center",
    backgroundColor: "stroke",
    width: "100%",
    height: "1px"
  });
  _v0.s(["default", 0, _v33], 0);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = () => {
    let _v0 = (0, _v3.useDispatch)(),
      _v1 = (0, _v18.useAppSelector)(_v17.brandColorsSelector),
      _v2 = (0, _v18.useAppSelector)(_v23.shouldShowTestAssetsSelector),
      {
        showUpsell: _v3,
        shouldShowUpsell: _v4
      } = _v19(),
      {
        data: _v5
      } = (0, _v21.useFetchAssetsQuery)({
        isTest: _v2,
        select: ["color_palettes"]
      }),
      {
        data: _v6
      } = (0, _v22.useFetchBusinessDataQuery)(),
      _v7 = (0, _v27.createBrandColorPalette)(_v6),
      _v8 = (0, _v2.useCallback)((_v0, _v1) => {
        if (_v5?.colorPalettes) {
          let _v0 = _v5.colorPalettes[_v0],
            _v1 = `palette-${_v0.primary}-${_v0.secondary}-${_v0.default}`;
          return (0, _v1.jsx)(_v36.Box, {
            id: _v1,
            gridStyleType: _v25.GridStyleType.SQUARE,
            width: _v1,
            isActive: (0, _v27.compareColorPalettes)(_v0, _v1),
            onClick: () => {
              _v0((0, _v17.setBrandingColorsAction)({
                colorPalette: _v0
              }));
            },
            testid: `${(0, _v27.compareColorPalettes)(_v0, _v1) ? "selected-" : ""}color-palette`,
            overlay: (0, _v1.jsx)(_v31, {
              colorPalette: _v0
            })
          }, _v1);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v5, _v1, _v0]);
    return (0, _v20.default)(() => {
      _v4 && (0, _v26.sendTrackBrandColorsImpression)();
    }), (0, _v1.jsxs)(_v34.Inspector, {
      children: [(0, _v1.jsx)(_v35.InspectorHeader, {
        title: (0, _v10.translate)({
          singular: "Colors",
          dictionary: {
            es: {
              singular: "Colores"
            },
            "de-DE": {
              singular: "Farben"
            },
            "fr-FR": {
              singular: "Couleurs"
            },
            "ja-JP": {
              singular: "色"
            },
            "ko-KR": {
              singular: "색상"
            },
            "pt-BR": {
              singular: "Cores"
            },
            "zh-CN": {
              singular: "颜色"
            }
          }
        })
      }), (0, _v1.jsxs)(_v11.ColorPaletteContainer, {
        padRight: !1,
        children: [(0, _v1.jsxs)(_v11.BrandColorPaletteSection, {
          children: [(0, _v1.jsxs)(_v11.BrandColorSectionHeader, {
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-xs",
              children: (0, _v10.translate)({
                singular: "Brand colors",
                dictionary: {
                  es: {
                    singular: "Colores de la marca"
                  },
                  "de-DE": {
                    singular: "Markenfarben"
                  },
                  "fr-FR": {
                    singular: "Couleurs de la marque"
                  },
                  "ja-JP": {
                    singular: "ブランドカラー"
                  },
                  "ko-KR": {
                    singular: "브랜드 색상"
                  },
                  "pt-BR": {
                    singular: "Cores da marca"
                  },
                  "zh-CN": {
                    singular: "品牌颜色"
                  }
                }
              })
            }), _v4 ? (0, _v1.jsx)(_v4.Button, {
              size: "xs",
              variant: "upsell",
              onClick: () => {
                (0, _v26.sendTrackBrandColorsTrigger)(), _v3({
                  pageLocation: "drawer",
                  feature: "color_palette",
                  upsellName: "brand_colors",
                  trackingFeature: "color_palette"
                });
              },
              "data-testid": _v12.testIds.upgradeButton,
              children: (0, _v10.translate)({
                singular: "Upgrade",
                dictionary: {
                  es: {
                    singular: "Actualizar"
                  },
                  "de-DE": {
                    singular: "Upgraden"
                  },
                  "fr-FR": {
                    singular: "Mettre à niveau"
                  },
                  "ja-JP": {
                    singular: "アップグレード"
                  },
                  "ko-KR": {
                    singular: "업그레이드"
                  },
                  "zh-CN": {
                    singular: "升级"
                  }
                }
              })
            }) : (0, _v1.jsx)(_v7.Tooltip, {
              label: (0, _v10.translate)({
                singular: "Edit brand colors",
                dictionary: {
                  es: {
                    singular: "Editar colores de la marca"
                  },
                  "de-DE": {
                    singular: "Markenfarben bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier les couleurs de la marque"
                  },
                  "ja-JP": {
                    singular: "ブランドカラーを編集"
                  },
                  "ko-KR": {
                    singular: "브랜드 색상 수정"
                  },
                  "pt-BR": {
                    singular: "Editar cores da marca"
                  },
                  "zh-CN": {
                    singular: "编辑品牌颜色"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v5.IconButton, {
                size: "sm",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v8.EditPencil, {}),
                "data-testid": _v12.testIds.editBrandColorPaletteButton,
                onClick: () => _v0((0, _v24.openInspectorAction)({
                  inspectorType: _v25.InspectorType.BRAND_COLORS
                })),
                "aria-label": _v12.testIds.editBrandColorPaletteButton
              })
            })]
          }), (0, _v1.jsx)(_v11.BrandColorPaletteBox, {
            onClick: () => !_v4 && _v0((0, _v17.setBrandingColorsAction)({
              colorPalette: _v7
            })),
            children: (0, _v1.jsx)(_v11.BrandColorPaletteBoxContent, {
              isActive: (0, _v27.compareColorPalettes)(_v7, _v1),
              "data-id": `palette-${_v7.primary}-${_v7.secondary}-${_v7.default}`,
              "data-testid": `${(0, _v27.compareColorPalettes)(_v7, _v1) ? "selected-" : ""}${_v12.testIds.brandColorPalette}`,
              children: (0, _v1.jsx)(_v11.BrandColorPaletteBoxOverlay, {
                children: _v4 ? (0, _v1.jsx)(_v4.Button, {
                  variant: "secondary",
                  onClick: () => _v3({
                    pageLocation: "drawer",
                    feature: "color_palette",
                    upsellName: "brand_colors"
                  }),
                  "data-testid": _v12.testIds.addBrandColorsButton,
                  "aria-label": _v12.testIds.addBrandColorsButton,
                  height: "100%",
                  width: "100%",
                  children: (0, _v1.jsx)(_v9.Plus, {})
                }) : (0, _v1.jsx)(_v31, {
                  colorPalette: _v7
                })
              })
            })
          }), (0, _v1.jsx)(_v33, {})]
        }), (0, _v1.jsx)(_v37.Grid, {
          itemRenderer: _v8,
          styleType: _v25.GridStyleType.SQUARE,
          items: _v5?.colorPalettes || [],
          isLoading: !1
        })]
      })]
    });
  };
  _v0.s(["default", () => _v74], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = _v28.default.div.withConfig({
    displayName: "FontsInspector.style__Separator",
    componentId: "sc-c0cb72e2-0"
  })`
  margin: ${({
    margin: _v0
  }) => _v0};
  border-top: 1px solid ${_v40.core.color.stroke};
`;
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  let _v52 = _v28.default.div.withConfig({
      displayName: "FontsMenuSection.style__SectionHeader",
      componentId: "sc-bebce254-0"
    })`
  display: flex;
`,
    _v53 = (0, _v28.default)(_v51.Checkmark).withConfig({
      displayName: "FontsMenuSection.style__CheckmarkIcon",
      componentId: "sc-bebce254-1"
    })`
  margin: 0 8px !important;

  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = "32px",
    _v57 = ({
      fonts: _v0,
      title: _v1,
      selectedFontName: _v2,
      onItemClick: _v3,
      icon: _v4,
      language: _v5,
      groupByFamily: _v6 = !1,
      loadingBrandFonts: _v7
    }) => {
      let _v8 = (0, _v2.useMemo)(() => _v0.filter(_v0 => (0, _v54.isFontSupportsLanguage)(_v0, _v5)), [_v0, _v5]),
        _v9 = (0, _v2.useMemo)(() => _v0.filter(_v0 => !(0, _v54.isFontSupportsLanguage)(_v0, _v5)), [_v0, _v5]),
        _v10 = (0, _v2.useMemo)(() => ({
          font: _v0,
          disabled: _v1
        }) => {
          let _v2 = _v2 === _v0.name;
          return (0, _v1.jsxs)(_v49.MenuItem, {
            onClick: () => _v3(_v0),
            "data-testid": `${_v0.displayName}-font`,
            fontFamily: (0, _v54.getFontFamily)(_v0.name),
            isDisabled: _v1,
            sx: {
              flex: 1,
              backgroundColor: "transparent",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingRight: 0,
              height: _v56,
              padding: "8px",
              lineHeight: "20px",
              justifyContent: "space-between"
            },
            children: [(0, _v1.jsx)(_v6.Text, {
              fontFamily: _v0?.name ? (0, _v54.getFontFamily)(_v0.name) : "",
              variant: "body-md",
              overflow: "hidden",
              textOverflow: "ellipsis",
              children: _v0.displayName
            }), _v2 && (0, _v1.jsx)(_v53, {
              "data-testid": "fonts-checkmark",
              width: "18px",
              height: "18px",
              style: {
                flexShrink: 0
              },
              mr: "0 !important"
            })]
          }, _v0.id);
        }, [_v3, _v2]),
        _v11 = (0, _v2.useMemo)(() => ({
          fonts: _v0,
          disabled: _v1
        }) => (0, _v1.jsx)(_v1.Fragment, {
          children: _v0.map(_v0 => (0, _v1.jsx)(_v10, {
            font: _v0,
            disabled: _v1
          }, _v0.name))
        }), [_v10]),
        _v12 = (0, _v2.useMemo)(() => ({
          fontFamily: _v0,
          disabled: _v1
        }) => {
          let {
            family: _v2,
            fonts: _v3
          } = _v0;
          return (0, _v1.jsx)(_v42.Accordion, {
            allowToggle: !0,
            children: (0, _v1.jsxs)(_v45.AccordionItem, {
              isDisabled: _v1,
              children: [(0, _v1.jsxs)(_v43.AccordionButton, {
                backgroundColor: "transparent",
                height: _v56,
                _hover: {
                  bg: "input-stroke"
                },
                paddingLeft: "sm",
                paddingRight: "sm",
                _expanded: {
                  background: "fill-component"
                },
                children: [(0, _v1.jsx)(_v32.Box, {
                  as: "span",
                  flex: "1",
                  textAlign: "left",
                  children: _v2
                }), (0, _v1.jsx)(_v44.AccordionIcon, {})]
              }), (0, _v1.jsx)(_v46.AccordionPanel, {
                paddingBottom: "sm",
                backgroundColor: "transparent",
                children: (0, _v1.jsx)(_v11, {
                  fonts: _v3
                })
              })]
            })
          });
        }, [_v11]),
        _v13 = (0, _v2.useMemo)(() => ({
          fonts: _v0,
          disabled: _v1
        }) => {
          let _v2 = (0, _v54.groupFontsByFamily)(_v0);
          return (0, _v1.jsxs)(_v48.Menu, {
            children: [_v6 && _v2.map(_v0 => _v0.fonts.length > 1 ? (0, _v1.jsx)(_v12, {
              fontFamily: _v0,
              disabled: _v1
            }, _v0.family) : 1 === _v0.fonts.length ? (0, _v1.jsx)(_v10, {
              font: _v0.fonts[0],
              disabled: _v1
            }, _v0.family) : void 0), !_v6 && _v11({
              fonts: _v0,
              disabled: _v1
            })]
          });
        }, [_v6, _v11, _v12, _v10]),
        _v14 = (0, _v2.useMemo)(() => () => (0, _v1.jsx)(_v13, {
          fonts: _v8
        }), [_v13, _v8]),
        _v15 = (0, _v2.useMemo)(() => () => (0, _v1.jsx)(_v13, {
          fonts: _v9,
          disabled: !0
        }), [_v13, _v9]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v52, {
          children: [(0, _v1.jsx)(_v47.Header, {
            "data-testid": "fonts-menu-section-header",
            width: "100%",
            color: "text-tertiary",
            sx: {
              lineHeight: _v56
            },
            mb: 0,
            fontWeight: 500,
            size: "xs",
            children: _v1
          }), _v4]
        }), (0, _v1.jsx)(_v14, {}), (0, _v1.jsx)(_v15, {}), _v7 && _v7.map(({
          name: _v0
        }) => (0, _v1.jsxs)(_v55.LoadingContent, {
          paddingLeft: 34,
          paddingRight: 8,
          "data-testid": _v12.testIds.uploadingFontItem,
          children: [(0, _v1.jsx)(_v55.LoadingText, {
            children: (0, _v10.translate)({
              singular: "Uploading...",
              dictionary: {
                es: {
                  singular: "Subiendo..."
                },
                "de-DE": {
                  singular: "Hochladevorgang läuft ..."
                },
                "fr-FR": {
                  singular: "Transfert..."
                },
                "ja-JP": {
                  singular: "アップロード中..."
                },
                "ko-KR": {
                  singular: "업로드 중..."
                },
                "pt-BR": {
                  singular: "Carregando..."
                },
                "zh-CN": {
                  singular: "正在上传..."
                }
              }
            })
          }), (0, _v1.jsx)(_v50.Spinner, {
            size: "sm"
          })]
        }, _v0))]
      });
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = ({
    handleClick: _v0
  }) => {
    let {
        alertFontUploadTerms: _v1
      } = (0, _v69.useAlerts)(),
      _v2 = (0, _v2.useRef)(null);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.Tooltip, {
        label: (0, _v10.translate)({
          singular: "Upload font",
          dictionary: {
            es: {
              singular: "Subir fuente"
            },
            "de-DE": {
              singular: "Schriftart hochladen"
            },
            "fr-FR": {
              singular: "Importer la police"
            },
            "ja-JP": {
              singular: "フォントをアップロード"
            },
            "ko-KR": {
              singular: "폰트 업로드"
            },
            "pt-BR": {
              singular: "Carregar fonte"
            },
            "zh-CN": {
              singular: "上传字体"
            }
          }
        }),
        children: (0, _v1.jsx)(_v5.IconButton, {
          "aria-label": (0, _v10.translate)({
            singular: "Upload font",
            dictionary: {
              es: {
                singular: "Subir fuente"
              },
              "de-DE": {
                singular: "Schriftart hochladen"
              },
              "fr-FR": {
                singular: "Importer la police"
              },
              "ja-JP": {
                singular: "フォントをアップロード"
              },
              "ko-KR": {
                singular: "폰트 업로드"
              },
              "pt-BR": {
                singular: "Carregar fonte"
              },
              "zh-CN": {
                singular: "上传字体"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v67.PlusSmall, {}),
          size: "sm",
          variant: "tertiary",
          onClick: () => {
            _v1({
              onPrimaryClick: () => _v2.current?.click()
            });
          },
          "data-testid": _v12.testIds.uploadFontsButton
        })
      }), (0, _v1.jsx)("input", {
        type: "file",
        onChange: _v0 => {
          let {
            files: _v1
          } = _v0?.target;
          if (!_v1 || 0 === _v1.length) throw Error(_v68.SOMETHING_WENT_WRONG);
          _v0([..._v1]);
        },
        accept: ".ttf,.otf",
        ref: _v2,
        multiple: !0,
        hidden: !0
      })]
    });
  };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      _v1 = (0, _v18.useAppSelector)(_v61.selectedElementsSelector),
      {
        hasCreateBrandEdit: _v2,
        hasCreateBrandApply: _v3
      } = (0, _v2.useContext)(_v16.PermissionsContext),
      {
        createPartial: _v4
      } = (0, _v59.useTextElement)(),
      _v5 = (0, _v18.useAppSelector)(_v60.languagesSelector),
      _v6 = (0, _v18.useAppSelector)(_v62.usedInProjectFontsSelector),
      [_v7, _v8] = (0, _v2.useState)(""),
      {
        brandFonts: _v9,
        libraryFonts: _v10,
        searchFonts: _v11,
        uploadBrandFonts: _v12,
        loadingBrandFonts: _v13
      } = (0, _v58.useFonts)(_v7),
      _v14 = _v1[0]?.type === _v39.CompositionElementType.POLL,
      _v15 = _v1[0]?.type === _v39.CompositionElementType.BUTTON,
      _v16 = _v1[0]?.id,
      _v17 = (0, _v2.useMemo)(() => {
        let _v0 = [];
        for (let _v0 of _v1) (0, _v64.isTextElement)(_v0) && _v0.push(_v0);
        return _v0;
      }, [_v1]),
      _v18 = _v17.map(({
        text: _v0
      }) => _v0.join("")),
      _v19 = (0, _v2.useMemo)(() => _v5 ? (0, _v65.detectLanguage)(_v18, _v5) : "", [_v5, _v18]),
      _v20 = (0, _v2.useCallback)(_v0 => {
        _v17.forEach(_v0 => {
          let {
            rect: _v1
          } = _v4({
            textElement: _v0,
            font: _v0.name
          });
          _v0((0, _v17.updateElementAction)({
            ceId: _v0.id,
            element: {
              font: _v0.name,
              rect: _v1
            }
          }));
        });
      }, [_v0, _v17, _v4]),
      _v21 = (0, _v2.useCallback)(_v0 => {
        (_v0((0, _v61.setLastSelectedFont)(_v0.name)), _v14 && _v16) ? _v0((0, _v17.updatePollFontThunkAction)(_v0.name, _v16)) : _v15 && _v16 ? _v0((0, _v17.updateElementAction)({
          ceId: _v16,
          element: {
            font: _v0.name
          }
        })) : _v20(_v0);
      }, [_v0, _v16, _v15, _v14, _v20]),
      _v22 = 1 === _v17.length ? _v17[0].font : "",
      _v23 = (0, _v2.useMemo)(() => (0, _v1.jsx)(_v7.Tooltip, {
        label: (0, _v10.translate)({
          singular: "Edit brand fonts",
          dictionary: {
            es: {
              singular: "Editar fuentes de la marca"
            },
            "de-DE": {
              singular: "Markenschriftarten bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier les polices de la marque"
            },
            "ja-JP": {
              singular: "ブランドのフォントを編集"
            },
            "ko-KR": {
              singular: "브랜드 폰트 수정"
            },
            "pt-BR": {
              singular: "Editar fontes da marca"
            },
            "zh-CN": {
              singular: "编辑品牌字体"
            }
          }
        }),
        children: (0, _v1.jsx)(_v5.IconButton, {
          icon: (0, _v1.jsx)(_v8.EditPencil, {}),
          size: "xs",
          variant: "tertiary",
          "data-testid": "edit-brand-font",
          "aria-label": "edit-brand-font",
          onClick: () => _v0((0, _v24.openInspectorAction)({
            inspectorType: _v25.InspectorType.BRAND_FONTS
          }))
        })
      }), [_v0]);
    return (0, _v1.jsxs)(_v34.Inspector, {
      children: [(0, _v1.jsx)(_v35.InspectorHeader, {
        title: (0, _v10.translate)({
          singular: "Fonts",
          dictionary: {
            es: {
              singular: "Fuentes"
            },
            "de-DE": {
              singular: "Schriftarten"
            },
            "fr-FR": {
              singular: "Polices"
            },
            "ja-JP": {
              singular: "フォント"
            },
            "ko-KR": {
              singular: "폰트"
            },
            "pt-BR": {
              singular: "Fontes"
            },
            "zh-CN": {
              singular: "字体"
            }
          }
        }),
        quickActions: (0, _v1.jsx)(_v1.Fragment, {
          children: _v2 && (0, _v1.jsx)(_v70, {
            handleClick: _v0 => _v12(_v0)
          })
        })
      }), (0, _v1.jsx)(_v71.InspectorPaddedRow, {
        children: (0, _v1.jsx)(_v66.default, {
          placeholder: (0, _v10.translate)({
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
          value: _v7,
          onChange: _v0 => _v8(_v0.target.value),
          "data-testid": "fonts-search"
        })
      }), (0, _v1.jsxs)(_v73.default, {
        marginTop: !0,
        children: [_v7 && 0 === _v11.length && (0, _v1.jsx)(_v72.default, {
          type: _v63.EmptyInspectorView.SEARCH,
          title: (0, _v10.translate)({
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
          text: (0, _v10.translate)({
            singular: "Try using different keywords.",
            dictionary: {
              es: {
                singular: "Intenta usar otras palabras clave."
              },
              "de-DE": {
                singular: "Versuche es mit anderen Schlüsselwörtern."
              },
              "fr-FR": {
                singular: "Essayez en utilisant d'autres mots-clés."
              },
              "ja-JP": {
                singular: "別のキーワードでお試しください。"
              },
              "ko-KR": {
                singular: "다른 키워드로 시도해보세요."
              },
              "pt-BR": {
                singular: "Tente usar palavras-chave diferentes."
              },
              "zh-CN": {
                singular: "尝试使用不同的关键词。"
              }
            }
          })
        }), _v7 && _v11.length > 0 && (0, _v1.jsx)(_v57, {
          fonts: _v11,
          title: (0, _v10.translate)({
            singular: "All Results",
            dictionary: {
              es: {
                singular: "Todos los resultados"
              },
              "de-DE": {
                singular: "Alle Ergebnisse"
              },
              "fr-FR": {
                singular: "Tous les résultats"
              },
              "ja-JP": {
                singular: "すべての検索結果"
              },
              "ko-KR": {
                singular: "모든 결과"
              },
              "pt-BR": {
                singular: "Todos os resultados"
              },
              "zh-CN": {
                singular: "所有结果"
              }
            }
          }),
          selectedFontName: _v22,
          onItemClick: _v21,
          language: _v19,
          groupByFamily: !0
        }), _v6.length > 0 && !_v7 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v57, {
            fonts: _v6,
            title: (0, _v10.translate)({
              singular: "Used in project",
              dictionary: {
                es: {
                  singular: "Utilizado en el proyecto"
                },
                "de-DE": {
                  singular: "Im Projekt verwendet"
                },
                "fr-FR": {
                  singular: "Utilisé dans le projet"
                },
                "ja-JP": {
                  singular: "プロジェクトで使用"
                },
                "ko-KR": {
                  singular: "프로젝트에서 사용됨"
                },
                "pt-BR": {
                  singular: "Usado no projeto"
                },
                "zh-CN": {
                  singular: "在项目中使用"
                }
              }
            }),
            selectedFontName: _v22,
            onItemClick: _v21,
            language: _v19,
            groupByFamily: !0
          }), (0, _v1.jsx)(_v41, {
            margin: "8px 0 16px 0"
          })]
        }), _v3 && !_v7 && _v9.length > 0 && (0, _v1.jsx)(_v57, {
          fonts: _v9,
          groupByFamily: !0,
          title: "Brand Fonts",
          selectedFontName: _v22,
          onItemClick: _v21,
          icon: _v2 && _v23,
          language: _v19,
          loadingBrandFonts: _v13
        }), _v3 && !_v7 && 0 === _v9.length && (0, _v1.jsx)(_v72.default, {
          type: _v63.EmptyInspectorView.FONTS,
          title: (0, _v10.translate)({
            singular: "No brand fonts yet",
            dictionary: {
              es: {
                singular: "No hay fuentes de la marca todavía"
              },
              "de-DE": {
                singular: "Noch keine Markenschriftarten"
              },
              "fr-FR": {
                singular: "Aucune police de marque"
              },
              "ja-JP": {
                singular: "ブランドフォントがありません"
              },
              "ko-KR": {
                singular: "아직 브랜드 폰트가 없습니다."
              },
              "pt-BR": {
                singular: "Ainda não há fontes da marca"
              },
              "zh-CN": {
                singular: "尚无品牌字体"
              }
            }
          }),
          text: _v2 ? (0, _v10.translate)({
            singular: "Choose from the font library or upload your own fonts.",
            dictionary: {
              es: {
                singular: "Elige en la biblioteca de fuentes o sube tus propias fuentes."
              },
              "de-DE": {
                singular: "Wähle Schriftarten aus der Schriftartenbibliothek aus oder lade eigene Schriftarten hoch."
              },
              "fr-FR": {
                singular: "Parcourez la bibliothèque de polices ou mettez en ligne vos propres polices."
              },
              "ja-JP": {
                singular: "フォントライブラリから選択するか、独自のフォントをアップロードしてください。"
              },
              "ko-KR": {
                singular: "폰트 라이브러리에서 선택하거나 내 폰트를 업로드하세요."
              },
              "pt-BR": {
                singular: "Escolha na biblioteca ou carregue suas próprias fontes."
              },
              "zh-CN": {
                singular: "从字体库中选择或上传您自己的字体。"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Your admin hasn't set any brand fonts yet",
            dictionary: {
              es: {
                singular: "Tu administrador aún no ha configurado ninguna fuente de marca"
              },
              "de-DE": {
                singular: "Dein Administrator hat noch keine Markenschriftarten festgelegt"
              },
              "fr-FR": {
                singular: "Votre administrateur n'a pas encore défini de police de marque"
              },
              "ja-JP": {
                singular: "管理者はまだブランドフォントを設定していません"
              },
              "ko-KR": {
                singular: "관리자가 아직 브랜드 폰트를 설정하지 않았습니다."
              },
              "pt-BR": {
                singular: "Seu administrador ainda não definiu nenhuma fonte de marca"
              },
              "zh-CN": {
                singular: "您的管理员尚未设置任何品牌字体"
              }
            }
          }),
          isMinMargin: !0
        }), _v3 && !_v7 && _v10.length > 0 && (0, _v1.jsx)(_v41, {
          margin: 0 === _v9.length ? "16px 0" : "8px 0 16px 0"
        }), !_v7 && _v10.length > 0 && (0, _v1.jsx)(_v57, {
          fonts: _v10,
          title: "Font Library",
          selectedFontName: _v22,
          onItemClick: _v21,
          language: _v19,
          groupByFamily: !0
        })]
      })]
    });
  };
  _v0.s(["default", () => _v103], 0);
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = () => {
    let {
      getCompositionTimingByCurrentTime: _v0
    } = (0, _v81.useDragonfly)();
    return {
      create: (0, _v2.useCallback)((_v0, _v1) => ({
        id: (0, _v85.randomString)(5),
        type: _v39.CompositionElementType.SOLID,
        rect: _v80.DEFAULT_RECT,
        compositionTiming: _v1 || _v0(0, _v80.DEFAULT_SOLID_ELEMENT_DURATION),
        fill: _v0 || _v80.DEFAULT_SOLID_ELEMENT_COLOR,
        selectable: !0
      }), [_v0])
    };
  };
  _v0.s(["useSolidElement", 0, _v86], 0);
  let _v87 = {
    EDITOR: "editor",
    INTERACTIVE: "interactive",
    OVERLAY_ELEMENTS: "overlay_elements"
  };
  _v0.s(["GraphicsTag", 0, _v87], 0);
  let {
    useFetchGraphicsCategoriesQuery: _v88,
    useLazyFetchGraphicsCategoriesQuery: _v89,
    useLazyFetchGraphicsQuery: _v90
  } = _v0.i(0).graphicsApi;
  _v0.s(["useFetchGraphicsCategoriesQuery", 0, _v88, "useLazyFetchGraphicsCategoriesQuery", 0, _v89, "useLazyFetchGraphicsQuery", 0, _v90], 0);
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = (0, _v28.default)(_v94.Select).withConfig({
    displayName: "SelectMaxHeight.style__MaxHeightSelect",
    componentId: "sc-a773bf39-0"
  })`
  [role='listbox'] {
    max-height: ${({
    maxHeight: _v0
  }) => _v0 || (window.innerHeight < 800 ? 250 : 400)}px;
    overflow-y: scroll;

    ${_v95.ScrollerCSS}
  }
`;
  _v0.s(["MaxHeightSelect", 0, _v96], 0);
  var _v97 = _v0.i(0);
  function _v98({
    id: _v0,
    selectedCategory: _v1,
    categories: _v2,
    setSelectedCategory: _v3
  }) {
    let _v4 = (0, _v97.getTranslations)(),
      _v5 = (0, _v2.useMemo)(() => ({
        id: "_all",
        name: _v4.allCategories
      }), [_v4.allCategories]),
      _v6 = (0, _v2.useMemo)(() => {
        let _v0 = {};
        for (let _v0 of [_v5, ..._v2]) _v0[_v0.name] = _v0;
        return _v0[_v5.name] = _v5, _v0;
      }, [_v2, _v5]),
      _v7 = _v1 ? _v1.name : _v4.allCategories;
    return (0, _v1.jsxs)(_v71.SubSelectionContainer, {
      children: [_v1 ? (0, _v1.jsx)(_v7.Tooltip, {
        label: _v4.backToAllCategories,
        children: (0, _v1.jsx)(_v5.IconButton, {
          "aria-label": "category-back-button",
          variant: "tertiary",
          onClick: () => _v3(null),
          icon: (0, _v1.jsx)(_v93.ChevronLeftSmall, {}),
          "data-testid": `${_v0}-category-back-button`,
          size: "sm"
        })
      }) : null, (0, _v1.jsx)(_v96, {
        onValueChange: _v0 => (_v0 => {
          let _v1 = _v6[_v0];
          if (_v1.name === _v4.allCategories) return _v3(null);
          _v3(_v1);
        })(_v0.value[0]),
        style: {
          flexGrow: 1
        },
        placeholder: _v7,
        value: [],
        "data-testid": `${_v0}-filter-button`,
        items: Object.values(_v6).map(_v0 => ({
          value: _v0.name,
          label: _v0.name
        })),
        size: "sm"
      })]
    });
  }
  var _v99 = _v0.i(0);
  let _v100 = ({
    testIdPrefix: _v0,
    onImageSelect: _v1,
    isLoading: _v2 = !1,
    fitImageToBox: _v3 = !1,
    items: _v4 = []
  }) => {
    let {
        defaultColors: _v5
      } = (0, _v78.default)(),
      _v6 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = _v4[_v0];
        return _v2 ? (0, _v1.jsx)(_v36.Box, {
          id: _v2.name,
          gridStyleType: _v25.GridStyleType.SQUARE,
          imageUrl: _v2.lowPath,
          blurBackground: !1,
          width: _v1,
          isActive: !1,
          isShowPlusButton: !0,
          style: {
            padding: "8px",
            ...(_v3 ? {
              objectFit: "contain"
            } : {}),
            ...(_v2.isEditable && _v5.graphics.thumbCSSFilter && {
              filter: _v5.graphics.thumbCSSFilter
            })
          },
          testid: `${_v0}-item`,
          onClick: () => _v1(_v2),
          draggableData: {
            id: _v2.id,
            data: _v2,
            type: _v99.DnDItemType.GRID_ELEMENT_GRAPHIC,
            createElement: _v0 => _v1(_v2, _v0)
          },
          isCrossOrigin: !0
        }, _v2.id) : (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v4, _v3, _v5.graphics.thumbCSSFilter, _v0, _v1]);
    return (0, _v1.jsx)(_v37.Grid, {
      itemRenderer: _v6,
      styleType: _v25.GridStyleType.SQUARE,
      items: _v4,
      isLoading: _v2
    });
  };
  _v0.s(["ImageLibraryItemsView", 0, _v100], 0);
  let _v101 = (0, _v28.default)(_v71.InspectorPaddedRow).withConfig({
    displayName: "GraphicLibrary__ImageLibraryContainer",
    componentId: "sc-f8d75bba-0"
  })`
  height: 100%;
  width: 100%;
`;
  function _v102({
    testIdPrefix: _v0 = "graphics-library",
    categoryData: _v1,
    onCategorySelect: _v2,
    categories: _v3,
    tag: _v4,
    preferCacheValue: _v5,
    onImageSelect: _v6,
    isItemsLoading: _v7 = !1,
    fitImageToBox: _v8 = !1
  }) {
    let [_v9, _v10] = (0, _v2.useState)(null),
      _v11 = (0, _v2.useRef)(1),
      {
        defaultColors: _v12,
        hasPaintableGraphics: _v13
      } = (0, _v78.default)(),
      _v14 = 0 === _v3.length,
      _v15 = (0, _v2.useCallback)(_v0 => {
        _v11.current = 1, _v10(_v0), null !== _v0 && (_v2({
          page: _v11.current,
          categoryId: _v0.id,
          tag: _v4
        }, _v5), (({
          category: _v0,
          numberOfElements: _v1
        }) => {
          _v92.default.send({
            eventName: "vimeo.graphics_category_selection",
            version: 1,
            contexts: {
              ..._v92.default.buildActionContext("click"),
              ..._v92.default.buildEditorContext({
                via: null,
                editorFeature: "graphics"
              }),
              ..._v92.default.buildProductAnalyticsContext({
                feature: "graphics",
                location: "drawer",
                copy: null
              }),
              ..._v92.default.buildWebContext(),
              ..._v92.default.buildTeamContext()
            },
            additionalFields: {
              action_state: null,
              selection_format: null,
              selection_id: null,
              selection_name: _v0,
              action_cta: null,
              number_of_elements: _v1 ?? null,
              third_party_integration: _v92.default.getThirdPartyIntegration()
            }
          });
        })({
          category: _v0.name,
          numberOfElements: _v1?.items.length
        }));
      }, [_v1, _v2, _v5, _v11, _v4]),
      _v16 = (0, _v2.useCallback)((_v0, _v1) => {
        if (_v3) {
          let _v0 = _v3[_v0];
          return (0, _v1.jsx)(_v36.Box, {
            id: _v0.name,
            gridStyleType: _v25.GridStyleType.SQUARE,
            imageUrl: _v0.thumbnailUrl,
            blurBackground: !1,
            title: _v0.name,
            width: _v1,
            isActive: !1,
            onClick: () => {
              _v15(_v0);
            },
            style: {
              padding: "8px",
              ...(_v8 ? {
                objectFit: "contain"
              } : {}),
              ...(_v13(_v0.name) && _v12.graphics.thumbCSSFilter && {
                filter: _v12.graphics.thumbCSSFilter
              })
            },
            testid: `${_v0}-category`,
            isCrossOrigin: !0
          }, _v0.id);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }, [_v3, _v8, _v13, _v12.graphics.thumbCSSFilter, _v0, _v15]);
    (0, _v2.useEffect)(() => {
      _v9?.id && _v1 && _v1.hasNextPage && (_v2({
        page: _v11.current + 1,
        categoryId: _v9.id,
        tag: _v4
      }), _v11.current++);
    }, [_v9?.id, _v1?.hasNextPage, _v11, _v2, _v1, _v4]);
    let _v17 = (0, _v2.useCallback)((_v0, _v1) => ((({
      categoryName: _v0,
      categoryId: _v1,
      actionState: _v2,
      graphicsName: _v3
    }) => {
      _v92.default.send({
        eventName: "vimeo.graphic_element_selection",
        version: 1,
        contexts: {
          ..._v92.default.buildActionContext("click"),
          ..._v92.default.buildEditorContext({
            via: null,
            editorFeature: "graphics"
          }),
          ..._v92.default.buildProductAnalyticsContext({
            feature: "graphics",
            location: "drawer",
            copy: _v0
          }),
          ..._v92.default.buildWebContext(),
          ..._v92.default.buildTeamContext()
        },
        additionalFields: {
          action_state: _v2,
          selection_format: null,
          selection_id: _v1,
          selection_name: _v3,
          action_cta: null,
          number_of_elements: 1,
          third_party_integration: _v92.default.getThirdPartyIntegration()
        }
      });
    })({
      categoryName: _v9?.name ?? "",
      categoryId: _v9?.id ?? "",
      actionState: _v0.isEditable ? "dynamic" : "static",
      graphicsName: _v0.name
    }), _v6(_v0, _v1, _v9?.name)), [_v6, _v9?.id, _v9?.name]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v98, {
        id: _v0,
        categories: _v3,
        setSelectedCategory: _v15,
        selectedCategory: _v9
      }), (0, _v1.jsx)(_v101, {
        padRight: !1,
        children: _v9 ? (0, _v1.jsx)(_v100, {
          testIdPrefix: _v0,
          items: _v1?.items,
          onImageSelect: _v17,
          isLoading: _v7,
          fitImageToBox: _v8
        }) : (0, _v1.jsx)(_v37.Grid, {
          itemRenderer: _v16,
          styleType: _v25.GridStyleType.SQUARE,
          items: _v3,
          isLoading: _v14
        })
      })]
    });
  }
  _v0.s(["GraphicLibrary", 0, _v102], 0);
  let _v103 = () => {
    let _v0 = (0, _v18.useAppSelector)(_v17.brandSecondaryColorSelector),
      _v1 = (0, _v18.useAppSelector)(_v17.storyboardIdSelector),
      {
        trackEditorGraphicAdded: _v2,
        trackEditorGraphicSolidBackgroundAdded: _v3
      } = (0, _v75.useEditorTracking)(),
      {
        create: _v4
      } = _v86(),
      {
        addElement: _v5
      } = (0, _v76.useAddElement)(),
      {
        addGraphic: _v6
      } = (() => {
        let _v0 = (0, _v18.useAppDispatch)(),
          _v1 = (0, _v18.useAppSelector)(_v17.orientationSelector),
          _v2 = (0, _v18.useAppSelector)(_v61.selectedElementsSelector),
          {
            addElement: _v3
          } = (0, _v76.useAddElement)(),
          {
            getCompositionTimingByCurrentTime: _v4
          } = (0, _v81.useDragonfly)(),
          {
            isReplacing: _v5,
            replaceElement: _v6
          } = (0, _v79.useReplaceElement)(),
          {
            defaultColors: _v7
          } = (0, _v78.default)(),
          _v8 = (0, _v2.useCallback)(({
            mediaPath: _v0,
            isEditable: _v1,
            primaryColor: _v2,
            secondaryColor: _v3,
            sourceHash: _v4,
            time: _v5,
            position: _v6
          }) => {
            let {
                rectWidth: _v7,
                rectHeight: _v8
              } = (0, _v82.getGraphicRectSize)(_v1),
              _v9 = (0, _v84.recenterRect)(_v80.DEFAULT_RECT, _v7, _v8);
            return _v6 && (_v9.x = _v6.left, _v9.y = _v6.top), {
              type: _v39.CompositionElementType.GRAPHIC_IMAGE,
              id: `graphic_${(0, _v83.createUuidV4)()}`,
              zindex: void 0,
              compositionTiming: _v5 ? {
                start: _v5,
                end: _v5 + _v80.DEFAULT_GRAPHIC_ELEMENT_DURATION
              } : _v4(0, _v80.DEFAULT_GRAPHIC_ELEMENT_DURATION),
              rect: _v9,
              sourceFootageRect: _v80.DEFAULT_RECT,
              sourceHash: _v4,
              mediaPath: _v0,
              flip: {
                horizontal: !1,
                vertical: !1
              },
              rotate: 0,
              bgAlpha: 100,
              style: "none",
              width: _v80.DEFAULT_GRAPHIC_SIZE,
              height: _v80.DEFAULT_GRAPHIC_SIZE,
              bgColor: _v77.bokehTheme.colors.white,
              isEditable: _v1,
              ...(_v2 && {
                primaryColor: _v2
              }),
              ...(_v3 && {
                secondaryColor: _v3
              }),
              selectable: !0
            };
          }, [_v4, _v1]),
          _v9 = (0, _v2.useCallback)((_v0, _v1) => {
            let {
                time: _v2,
                coordinates: _v3
              } = _v1 || {},
              _v4 = _v0.primaryColor && _v0.isEditable ? _v7.graphics.primary : _v0.primaryColor,
              _v5 = _v0.secondaryColor && _v0.isEditable ? _v7.graphics.secondary : _v0.secondaryColor,
              _v6 = _v8({
                mediaPath: _v0.path,
                isEditable: _v0.isEditable,
                sourceHash: _v0.id,
                primaryColor: _v4,
                secondaryColor: _v5,
                time: _v2,
                position: _v3
              });
            if (_v5) {
              let _v0 = _v2[0],
                {
                  rectHeight: _v1,
                  rectWidth: _v2
                } = (0, _v82.getGraphicRectSize)(_v1);
              _v6.rect = (0, _v84.calculateContainedRect)({
                rect: _v0.rect,
                newHeight: _v1,
                newWidth: _v2
              }), _v0((0, _v17.addSourceAction)((0, _v82.createGraphicLibrarySource)(_v0))), _v6({
                selectedElement: _v0,
                newElement: _v6
              });
            } else _v1 || (_v0((0, _v17.addSourceAction)((0, _v82.createGraphicLibrarySource)(_v0))), _v3(_v6));
            return _v6;
          }, [_v7.graphics.primary, _v7.graphics.secondary, _v8, _v0, _v5, _v2, _v1, _v6, _v3]);
        return {
          create: _v8,
          createGraphicLibrarySource: _v82.createGraphicLibrarySource,
          addGraphic: _v9
        };
      })(),
      {
        data: _v7
      } = _v88({
        tag: _v87.EDITOR
      }),
      [_v8, {
        data: _v9,
        isFetching: _v10
      }] = _v90(),
      _v11 = (0, _v2.useMemo)(() => (_v7 && Object.values(_v7)) ?? [], [_v7]),
      _v12 = (0, _v2.useCallback)(() => {
        (0, _v91.sendTrackAddSolidBackgroundElement)({
          selectionId: _v0
        }), _v5(_v4(_v0)), _v3({
          editorSessionId: _v1
        });
      }, [_v5, _v4, _v0, _v3, _v1]),
      _v13 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        _v6(_v0, _v1), _v2({
          editorSessionId: _v1,
          editorGraphicCategory: _v2 ?? ""
        });
      }, [_v6, _v1, _v2]);
    return (0, _v1.jsxs)(_v34.Inspector, {
      children: [(0, _v1.jsx)(_v35.InspectorHeader, {
        title: (0, _v10.translate)({
          singular: "Graphics",
          dictionary: {
            es: {
              singular: "Gráficos"
            },
            "de-DE": {
              singular: "Grafiken"
            },
            "fr-FR": {
              singular: "Graphiques"
            },
            "ja-JP": {
              singular: "グラフィック"
            },
            "ko-KR": {
              singular: "그래픽"
            },
            "pt-BR": {
              singular: "Gráficos"
            },
            "zh-CN": {
              singular: "图形"
            }
          }
        })
      }), (0, _v1.jsx)(_v71.InspectorPaddedRow, {
        padRight: !0,
        children: (0, _v1.jsx)(_v4.Button, {
          leftIcon: (0, _v1.jsx)(_v9.Plus, {}),
          variant: "primary",
          onClick: _v12,
          "data-testid": "add-solid-button",
          width: "100%",
          size: "sm",
          children: (0, _v10.translate)({
            singular: "Add solid background",
            dictionary: {
              es: {
                singular: "Agregar fondo sólido"
              },
              "de-DE": {
                singular: "Einfarbigen Hintergrund hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter un arrière-plan uni"
              },
              "ja-JP": {
                singular: "無地の背景を追加"
              },
              "ko-KR": {
                singular: "단색 배경 추가"
              },
              "pt-BR": {
                singular: "Adicionar um fundo sólido"
              },
              "zh-CN": {
                singular: "添加纯色背景"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v102, {
        testIdPrefix: "graphics",
        categories: _v11,
        onImageSelect: _v13,
        categoryData: _v10 ? void 0 : _v9,
        onCategorySelect: _v8,
        preferCacheValue: !0,
        tag: _v87.EDITOR,
        isItemsLoading: _v10
      })]
    });
  };
  _v0.s(["default", () => _v125], 0);
  var _v104 = _v0.i(0);
  let _v105 = _v28.default.div.withConfig({
    displayName: "IntroOutroInspector.style__LoadingContent",
    componentId: "sc-7856a20a-0"
  })`
  position: relative;
  width: 100%;
  height: 100%;
`;
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0);
  let _v119 = "vimeo.media_upload_step";
  function _v120({
    sourceAssetId: _v0,
    sourceSize: _v1,
    sourceDuration: _v2,
    sourceFormat: _v3,
    via: _v4,
    sourceType: _v5,
    uploadStep: _v6,
    uploadStatus: _v7,
    errorCode: _v8
  }) {
    let _v9 = {
      eventName: _v119,
      contexts: {
        ..._v92.default.buildEditorContext({
          element: _v5,
          editorFeature: _v119,
          via: _v4
        }),
        ..._v92.default.buildActionContext("client_process"),
        ..._v92.default.buildWebContext(),
        ..._v92.default.buildTeamContext()
      },
      version: 1,
      additionalFields: {
        source_asset_id: _v0,
        source_format: _v3,
        media_type: _v5,
        upload_step: _v6,
        upload_status: _v7,
        error_code: _v8?.toString() ?? null,
        source_size: _v1 ?? null,
        source_duration: _v2 ?? null,
        third_party_integration: _v92.default.getThirdPartyIntegration()
      }
    };
    _v92.default.send(_v9);
  }
  let _v121 = _v0 => {
      let _v1 = _v0.split("."),
        _v2 = _v1[_v1.length - 1];
      if (!_v2) throw Error(_v68.FILE_NAME_MISSING_EXTENSION);
      return _v2;
    },
    _v122 = (_v0, _v1) => {
      (({
        sourceAssetId: _v0,
        sourceSize: _v1,
        sourceDuration: _v2,
        sourceTitle: _v3,
        sourceType: _v4,
        sourceFormat: _v5,
        vsid: _v6,
        via: _v7
      }) => {
        _v120({
          sourceAssetId: _v0,
          sourceSize: _v1,
          sourceTitle: _v3,
          sourceDuration: _v2,
          sourceType: _v4,
          sourceFormat: _v5,
          vsid: _v6,
          via: _v7,
          uploadStep: "start",
          uploadStatus: "success"
        });
      })({
        sourceAssetId: _v0.id,
        sourceSize: _v0.fileSize,
        sourceDuration: _v0.duration,
        sourceTitle: _v0.title,
        sourceType: _v0.type,
        sourceFormat: _v121(_v0.fileName),
        vsid: _v1,
        via: _v118.VIA.MEDIA_SIDE_PANEL
      });
    },
    _v123 = (_v0, _v1, _v2) => {
      _v1 === _v115.UploadMediaStatus.SUCCESS && (({
        sourceAssetId: _v0,
        sourceSize: _v1,
        sourceDuration: _v2,
        sourceTitle: _v3,
        sourceType: _v4,
        sourceFormat: _v5,
        vsid: _v6,
        via: _v7
      }) => {
        _v120({
          sourceAssetId: _v0,
          sourceSize: _v1,
          sourceTitle: _v3,
          sourceDuration: _v2,
          sourceType: _v4,
          sourceFormat: _v5,
          vsid: _v6,
          via: _v7,
          uploadStep: "finish",
          uploadStatus: "success"
        });
      })({
        sourceAssetId: _v0.id,
        sourceSize: _v0.fileSize,
        sourceDuration: _v0.duration,
        sourceTitle: _v0.title,
        sourceType: _v0.type,
        sourceFormat: _v121(_v0.fileName),
        vsid: _v2,
        via: _v118.VIA.MEDIA_SIDE_PANEL
      });
    };
  _v0.s(["trackUploadFinish", 0, _v123, "trackUploadStart", 0, _v122], 0);
  let _v124 = (0, _v28.default)(_v71.InspectorPaddedRow).withConfig({
    displayName: "MediaInspector.style__MediaGridContainer",
    componentId: "sc-d6a6ba7b-0"
  })`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`;
  _v0.s(["MediaGridContainer", 0, _v124], 0);
  let _v125 = () => {
    let _v0 = (0, _v18.useAppSelector)(_v17.durationSelector),
      _v1 = (0, _v18.useAppSelector)(_v17.videoSessionIdSelector),
      _v2 = (0, _v18.useAppSelector)(_v24.currentInspectorSelector),
      _v3 = (0, _v18.useAppSelector)(_v112.uploadsSelector),
      {
        deleteIntroOutroMedia: _v4,
        uploadMedia: _v5
      } = (0, _v110.useUploadQueue)(),
      {
        data: _v6,
        refetch: _v7,
        isFetching: _v8
      } = (0, _v111.useFetchIntroOutroQuery)(),
      {
        uploadIntroOutro: _v9
      } = (0, _v108.useIntroOutroElement)(),
      {
        alertCannotDeleteIntoOutroMedia: _v10,
        alertDeleteIntroOutro: _v11
      } = (0, _v69.useAlerts)(),
      {
        hasCreateBrandEdit: _v12
      } = (0, _v2.useContext)(_v16.PermissionsContext),
      {
        createOrReplaceMediaElement: _v13
      } = (0, _v109.useMediaElement)(),
      {
        isReplacing: _v14
      } = (0, _v79.useReplaceElement)(),
      {
        seek: _v15
      } = (0, _v81.useDragonfly)(),
      [_v16, _v17] = (0, _v2.useState)(""),
      _v18 = (0, _v2.useRef)(null),
      _v19 = _v2 === _v25.InspectorType.BRAND_INTRO,
      _v20 = _v19 ? _v113.IntroOutroContext.INTRO : _v113.IntroOutroContext.OUTRO,
      _v21 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v6?.[_v20.toLocaleLowerCase()].filter(_v0 => "DONE" === _v0.jobStatus).length,
          _v2 = _v3.filter(_v0 => _v0.origin === _v115.UploadMediaOrigin.BRAND && _v0.context === _v20.toUpperCase()).length,
          _v3 = _v0.target.files;
        _v3 && _v9(_v3, _v20, _v1 + _v2);
      }, [_v6, _v20, _v9, _v3]),
      _v22 = (0, _v2.useMemo)(() => {
        let _v0 = _v6?.[_v20.toLocaleLowerCase()].filter(_v0 => "DONE" === _v0.jobStatus);
        return [..._v3.filter(_v0 => _v0.origin === _v115.UploadMediaOrigin.BRAND && _v0.context === _v20.toUpperCase() && !_v0?.find(_v0 => _v0.id === _v0?.id)).map(_v0 => {
          if (_v0.type !== _v114.MediaType.VIDEO || !_v0.source) return {
            ..._v0.media,
            id: _v0.id
          };
          {
            let {
              previewUrl: _v0,
              duration: _v1
            } = _v0.source;
            return {
              ..._v0.media,
              id: _v0.id,
              previewUrl: _v0,
              duration: _v1
            };
          }
        }), ...(_v0 || [])];
      }, [_v6, _v20, _v3]),
      _v23 = (0, _v2.useMemo)(() => _v22?.length >= _v106.MAX_NUM_INTRO_OUTRO, [_v22?.length]),
      _v24 = (0, _v2.useCallback)(async _v0 => {
        (0, _v91.sendTrackAddMedia)({
          mediaSelectionAction: "add",
          mediaSource: "intro_outro",
          mediaType: _v0.type
        });
        let _v1 = await _v13({
          mediaItem: _v0,
          isAddToStoryboard: !_v14,
          ...(!_v14 && {
            introOutroType: _v20
          })
        });
        if (_v14 || _v15(_v20 === _v113.IntroOutroContext.INTRO ? 0 : _v0), _v1) {
          _v122(_v0, _v1);
          let {
            status: _v0
          } = await _v5({
            origin: _v115.UploadMediaOrigin.BRAND,
            mediaItem: _v0,
            isReplacing: _v14,
            elementSourceHash: _v1.sourceHash
          });
          _v123(_v0, _v0, _v1);
        }
      }, [_v13, _v14, _v15, _v20, _v5, _v0, _v1]),
      _v25 = (0, _v2.useCallback)(async _v0 => {
        _v11({
          type: _v20,
          onPrimaryClick: async () => {
            try {
              _v17(_v0.id), await _v4(_v0.id), _v7();
            } catch (_v0) {
              _v10();
            }
          }
        });
      }, [_v10, _v11, _v4, _v7, _v20]),
      _v26 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v22[_v0],
          _v4 = _v3.find(_v0 => _v0?.media.id === _v3.id),
          _v5 = _v16 === _v3.id || !!_v4 && _v4.status.status !== _v115.UploadMediaStatus.SUCCESS;
        return (0, _v1.jsx)(_v36.Box, {
          id: _v3.id,
          gridStyleType: _v25.GridStyleType.LANDSCAPE,
          alignToCenter: !0,
          videoUrl: _v3.previewUrl,
          imageUrl: _v3.thumbnailUrl,
          duration: _v3.duration,
          width: _v1,
          isActive: !1,
          testid: `${_v20.toLowerCase()}-media-item`,
          onExpand: _v2,
          onClick: () => _v24(_v3),
          ...(_v12 && {
            onDelete: () => _v25(_v3)
          }),
          ...(_v5 && {
            overlay: (0, _v1.jsx)(_v117.Loader, {})
          }),
          deleteTooltip: _v19 ? (0, _v10.translate)({
            singular: "Delete intro",
            dictionary: {
              es: {
                singular: "Eliminar introducción"
              },
              "de-DE": {
                singular: "Intro löschen"
              },
              "fr-FR": {
                singular: "Supprimer l'intro"
              },
              "ja-JP": {
                singular: "イントロを削除"
              },
              "ko-KR": {
                singular: "인트로 삭제"
              },
              "pt-BR": {
                singular: "Excluir introdução"
              },
              "zh-CN": {
                singular: "删除片头"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Delete outro",
            dictionary: {
              es: {
                singular: "Eliminar cierre"
              },
              "de-DE": {
                singular: "Outro löschen"
              },
              "fr-FR": {
                singular: "Supprimer l'outro"
              },
              "ja-JP": {
                singular: "アウトロを削除"
              },
              "ko-KR": {
                singular: "아웃트로 삭제"
              },
              "pt-BR": {
                singular: "Apagar pós-vídeo"
              },
              "zh-CN": {
                singular: "删除片尾"
              }
            }
          }),
          isShowPlusButton: !0
        }, _v3.id);
      }, [_v22, _v3, _v16, _v20, _v12, _v19, _v24, _v25]),
      _v27 = (0, _v2.useMemo)(() => () => {
        let _v0 = _v23 ? _v19 ? (0, _v10.translate)({
          singular: "You've reached the number of 10 intros.\n Delete some to upload new ones.",
          dictionary: {
            es: {
              singular: "Ha alcanzado el número de 10 introducciones.\n Elimine algunas para subir otras."
            },
            "de-DE": {
              singular: "Du hast das Limit von 10 Intros erreicht.\n Lösche einige, um neue hochzuladen."
            },
            "fr-FR": {
              singular: "Vous avez atteint le nombre de 10 intros.\n Veuillez en supprimer pour en ajouter d'autres."
            },
            "ja-JP": {
              singular: "イントロ数が10個に達しました。 \nさらにアップロードするには、既存のものを削除してください。"
            },
            "ko-KR": {
              singular: "인트로가 10개에 도달했습니다.\n 새 항목을 업로드하려면 일부를 삭제하세요."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de 10 introduções.\n Exclua alguns arquivos para carregar mais."
            },
            "zh-CN": {
              singular: "您已达到 10 个片头的上限。\n请删除一些再上传新的。"
            }
          }
        }) : (0, _v10.translate)({
          singular: "You've reached the number of 10 outrous.\n Delete some to upload new ones.",
          dictionary: {
            es: {
              singular: "Ha alcanzado el número de 10 cierres.\n Elimine algunos para subir otros."
            },
            "de-DE": {
              singular: "Du hast das Limit von 10 Outros erreicht.\n Lösche einige, um neue hochzuladen."
            },
            "fr-FR": {
              singular: "Vous avez atteint le nombre de 10 outros.\n Veuillez en supprimer pour en ajouter d'autres."
            },
            "ja-JP": {
              singular: "アウトロ数が10個に達しました。 \nさらにアップロードするには、既存のものを削除してください。"
            },
            "ko-KR": {
              singular: "아우트로가 10개에 도달했습니다.\n 새 항목을 업로드하려면 일부를 삭제하세요."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de 10 telas pós-vídeo.\n Exclua alguns arquivos para carregar mais."
            },
            "zh-CN": {
              singular: "您已达到 10 个片尾的上限。\n删除一些以上传新的。"
            }
          }
        }) : _v19 ? (0, _v10.translate)({
          singular: "Upload files up to 60 sec in MP4, MOV, WMV, AVI or FLV format to use as an intro.",
          dictionary: {
            es: {
              singular: "Suba archivos de hasta 60 segundos en formato MP4, MOV, WMV, AVI o FLV para utilizarlos como introducción."
            },
            "de-DE": {
              singular: "Lade Dateien mit einer Dauer von bis zu 60 Sekunden im MP4-, MOV-, WMV-, AVI- oder FLV-Format hoch, um sie als Intro zu verwenden."
            },
            "fr-FR": {
              singular: "Chargez des fichiers d'une durée maximale de 60 secondes au format MP4, MOV, WMV, AVI ou FLV pour les utiliser en guise d'intro."
            },
            "ja-JP": {
              singular: "MP4、MOV、WMV、AVI、FLV形式で、最長60秒のファイルをイントロとしてアップロードできます。"
            },
            "ko-KR": {
              singular: "MP4, MOV, WMV, AVI 또는 FLV 형식으로 최대 60초 길이의 파일을 업로드하여 인트로로 사용하세요."
            },
            "pt-BR": {
              singular: "Carregar arquivos de até 60 segundos nos formatos MP4, MOV, WMV, AVI ou FLV para usar como introdução"
            },
            "zh-CN": {
              singular: "上传最长 60 秒的 MP4、MOV、WMV、AVI 或 FLV 格式的文件作为片头。"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Upload files up to 60 sec in MP4, MOV, WMV, AVI or FLV format to use as an outro.",
          dictionary: {
            es: {
              singular: "Suba archivos de hasta 60 segundos en formato MP4, MOV, WMV, AVI o FLV para utilizarlos como pantalla de cierre."
            },
            "de-DE": {
              singular: "Lade Dateien mit einer Dauer von bis zu 60 Sekunden im MP4-, MOV-, WMV-, AVI- oder FLV-Format hoch, um sie als Outro zu verwenden."
            },
            "fr-FR": {
              singular: "Mettez en ligne des fichiers d'une durée maximale de 60 secondes au format MP4, MOV, WMV, AVI ou FLV pour les utiliser en guise d'outro."
            },
            "ja-JP": {
              singular: "MP4、MOV、WMV、AVI、FLV形式で、最長60秒のファイルをアウトロとしてアップロードできます。"
            },
            "ko-KR": {
              singular: "MP4, MOV, WMV, AVI 또는 FLV 형식으로 최대 60초 길이의 파일을 업로드하여 아웃트로로 사용하세요."
            },
            "pt-BR": {
              singular: "Carregue arquivos de até 60 segundos nos formatos MP4, MOV, WMV, AVI ou FLV para usar como pós-vídeo."
            },
            "zh-CN": {
              singular: "上传最长 60 秒的 MP4、MOV、WMV、AVI 或 FLV 格式的文件作为片尾。"
            }
          }
        });
        return (0, _v1.jsx)(_v116.RebrandFileInput, {
          onChange: _v21,
          accept: _v107.ALLOWED_INTRO_OUTRO_MEDIA.join(),
          multiple: !0,
          dataTestid: "intro-outro-upload-button",
          tooltip: _v0,
          isDisabled: _v23
        });
      }, [_v21, _v19, _v23]);
    return (0, _v1.jsxs)(_v34.Inspector, {
      children: [(0, _v1.jsx)(_v35.InspectorHeader, {
        title: _v19 ? (0, _v10.translate)({
          singular: "Intros",
          dictionary: {
            es: {
              singular: "Introducciones"
            },
            "ja-JP": {
              singular: "イントロ"
            },
            "ko-KR": {
              singular: "인트로"
            },
            "pt-BR": {
              singular: "Introduções"
            },
            "zh-CN": {
              singular: "片头"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Outros",
          dictionary: {
            es: {
              singular: "Cierres"
            },
            "ja-JP": {
              singular: "アウトロ"
            },
            "ko-KR": {
              singular: "아우트로"
            },
            "pt-BR": {
              singular: "Telas Pós-Vídeo"
            },
            "zh-CN": {
              singular: "片尾"
            }
          }
        }),
        quickActions: _v12 && (0, _v1.jsx)(_v27, {}),
        hasBackButton: !0
      }), _v22 && _v22?.length > 0 && (0, _v1.jsx)(_v124, {
        padRight: !1,
        children: (0, _v1.jsx)(_v37.Grid, {
          ref: _v18,
          itemRenderer: _v26,
          styleType: _v25.GridStyleType.LANDSCAPE,
          items: _v22 || [],
          isLoading: !1
        })
      }), !_v8 && _v22 && _v22?.length === 0 && (_v12 ? (0, _v1.jsxs)(_v71.InspectorPaddedRow, {
        padRight: !0,
        children: [(0, _v1.jsx)(_v72.default, {
          type: _v19 ? _v63.EmptyInspectorView.INTRO : _v63.EmptyInspectorView.OUTRO,
          title: _v19 ? (0, _v10.translate)({
            singular: "Add an intro for your team",
            dictionary: {
              es: {
                singular: "Agregue una introducción para su equipo"
              },
              "de-DE": {
                singular: "Ein Intro für dein Team hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter une intro pour votre équipe"
              },
              "ja-JP": {
                singular: "チーム用のイントロを追加する"
              },
              "ko-KR": {
                singular: "팀 인트로 추가"
              },
              "pt-BR": {
                singular: "Adicionar uma introdução para a equipe"
              },
              "zh-CN": {
                singular: "为您的团队添加片头"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Add an outro for your team",
            dictionary: {
              es: {
                singular: "Agregue un cierre para su equipo"
              },
              "de-DE": {
                singular: "Ein Outro für dein Team hinzufügen"
              },
              "fr-FR": {
                singular: "Ajoutez une outro pour votre équipe"
              },
              "ja-JP": {
                singular: "チーム用のアウトロを追加する"
              },
              "ko-KR": {
                singular: "팀 아우트로 추가"
              },
              "pt-BR": {
                singular: "Adicionar uma tela de pós-vídeo para a equipe"
              },
              "zh-CN": {
                singular: "为您的团队添加片尾"
              }
            }
          }),
          text: _v19 ? (0, _v10.translate)({
            singular: "Upload media that your team can use as an intro",
            dictionary: {
              es: {
                singular: "Suba archivos que su equipo pueda utilizar como introducción"
              },
              "de-DE": {
                singular: "Lade Medien hoch, die dein Team als Intro verwenden kann"
              },
              "fr-FR": {
                singular: "Chargez des médias que votre équipe pourra utiliser en guise d'intro"
              },
              "ja-JP": {
                singular: "チームがイントロとして使用できるメディアをアップロードする"
              },
              "ko-KR": {
                singular: "팀에서 인트로로 사용할 수 있는 미디어를 업로드합니다."
              },
              "pt-BR": {
                singular: "Fazer uploads de mídia que a equipe possa usar como introdução"
              },
              "zh-CN": {
                singular: "上传团队可用作片头的媒体"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Upload media that your team can use as an outro",
            dictionary: {
              es: {
                singular: "Suba contenido multimedia que su equipo pueda usar como cierre."
              },
              "de-DE": {
                singular: "Laden Sie Medien hoch, die Ihr Team als Outro verwenden kann"
              },
              "fr-FR": {
                singular: "Chargez des médias que votre équipe pourra utiliser en guise d'outro"
              },
              "ja-JP": {
                singular: "チームがアウトロとして使用できるメディアをアップロードする"
              },
              "ko-KR": {
                singular: "팀이 아우트로로 사용할 수 있는 미디어를 업로드하세요."
              },
              "pt-BR": {
                singular: "Carregue mídia para sua equipe usar como encerramento"
              },
              "zh-CN": {
                singular: "上传团队可用作片尾的媒体"
              }
            }
          })
        }), (0, _v1.jsx)(_v104.Center, {
          children: (0, _v1.jsx)(_v116.RebrandFileInput, {
            onChange: _v21,
            accept: _v107.ALLOWED_INTRO_OUTRO_MEDIA.join(),
            multiple: !0,
            dataTestid: "intro-outro-upload-button-empty",
            isTextButton: !0
          })
        })]
      }) : (0, _v1.jsx)(_v72.default, {
        type: _v19 ? _v63.EmptyInspectorView.INTRO : _v63.EmptyInspectorView.OUTRO,
        title: _v19 ? (0, _v10.translate)({
          singular: "No intros yet",
          dictionary: {
            es: {
              singular: "Aún no hay introducciones"
            },
            "de-DE": {
              singular: "Noch keine Intros"
            },
            "fr-FR": {
              singular: "Pas encore d'introduction"
            },
            "ja-JP": {
              singular: "イントロはまだありません"
            },
            "ko-KR": {
              singular: "아직 인트로가 없음"
            },
            "pt-BR": {
              singular: "Ainda não há introduções"
            },
            "zh-CN": {
              singular: "尚无片头"
            }
          }
        }) : (0, _v10.translate)({
          singular: "No outros yet",
          dictionary: {
            es: {
              singular: "Aún no hay cierres"
            },
            "de-DE": {
              singular: "Noch keine Outros"
            },
            "fr-FR": {
              singular: "Pas encore d'outros"
            },
            "ja-JP": {
              singular: "アウトロはまだありません"
            },
            "ko-KR": {
              singular: "아직 아우트로 없음"
            },
            "pt-BR": {
              singular: "Ainda não há tela pós-vídeo (outro)"
            },
            "zh-CN": {
              singular: "尚无片尾"
            }
          }
        }),
        text: _v19 ? (0, _v10.translate)({
          singular: "Your Admin hasn’t uploaded any media for your team to use as an intro.",
          dictionary: {
            es: {
              singular: "Su administrador no ha subido ningún archivo para que su equipo lo pueda utilizar como introducción."
            },
            "de-DE": {
              singular: "Ihr Admin hat keine Medien für Ihr Team hochgeladen, die als Intro verwendet werden können."
            },
            "fr-FR": {
              singular: "Votre administrateur n'a pas importé de média pouvant servir d'introduction à votre équipe."
            },
            "ja-JP": {
              singular: "管理者は、チームがイントロとして使用するメディアをアップロードしていません。"
            },
            "ko-KR": {
              singular: "관리자가 팀이 인트로로 사용할 수 있는 미디어를 업로드하지 않았습니다."
            },
            "pt-BR": {
              singular: "Seu administrador não carregou nenhuma mídia para a equipe usar como introdução."
            },
            "zh-CN": {
              singular: "您的管理员尚未上传任何媒体供您的团队用作片头。"
            }
          }
        }) : (0, _v10.translate)({
          singular: "Your Admin hasn’t uploaded any media for your team to use as an outro.",
          dictionary: {
            es: {
              singular: "Su administrador no ha subido ningún archivo para que su equipo lo pueda utilizar como cierre."
            },
            "de-DE": {
              singular: "Ihr Admin hat keine Medien für Ihr Team hochgeladen, die als Outro verwendet werden können."
            },
            "fr-FR": {
              singular: "Votre administrateur n'a pas importé de média pouvant servir d'outro à votre équipe."
            },
            "ja-JP": {
              singular: "管理者は、チームがアウトロとして使用するメディアをアップロードしていません。"
            },
            "ko-KR": {
              singular: "관리자가 팀이 아우트로로 사용할 수 있는 미디어를 업로드하지 않았습니다."
            },
            "pt-BR": {
              singular: "Seu administrador não carregou nenhuma mídia para a equipe usar como tela de pós-vídeo (outro)."
            },
            "zh-CN": {
              singular: "您的管理员尚未上传任何媒体供您的团队用作片尾。"
            }
          }
        })
      })), _v8 && _v22 && 0 === _v22.length && (0, _v1.jsx)(_v105, {
        children: (0, _v1.jsx)(_v117.Loader, {})
      })]
    });
  };
  _v0.s(["default", () => _v137], 0);
  var _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = {
      width: "100%",
      height: "100%",
      padding: "6px",
      backgroundColor: "transparent"
    },
    _v133 = ({
      path: _v0
    }) => {
      let _v1 = (0, _v2.useRef)(null),
        _v2 = (0, _v2.useRef)(null),
        _v3 = (0, _v2.useCallback)(() => {
          _v2.current?.goToAndStop(0);
        }, []);
      return (0, _v2.useEffect)(() => {
        try {
          _v2.current = _v131.default.loadAnimation({
            container: _v1.current,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: _v0
          }), _v2.current.addEventListener("DOMLoaded", _v3);
        } catch (_v0) {
          console.error("Error loading Lottie Thumbnail", _v0);
        }
        return () => {
          _v2.current?.destroy && (_v2.current?.removeEventListener("DOMLoaded", _v3), _v2.current?.destroy());
        };
      }, [_v3, _v0]), (0, _v1.jsx)(_v104.Center, {
        sx: _v132,
        ref: _v1,
        onMouseEnter: () => {
          _v2.current?.goToAndPlay(0);
        },
        onMouseLeave: () => {
          _v2.current?.goToAndStop(0);
        }
      });
    };
  _v0.s(["default", 0, _v133], 0);
  var _v134 = _v0.i(0);
  let _v135 = "preview",
    _v136 = Object.values(_v130.AnimationType).map(_v0 => `${_v135}${(0, _v85.capitalizeFirstLetter)(_v0)}`),
    _v137 = () => {
      let _v0 = (0, _v18.useAppDispatch)(),
        _v1 = (0, _v18.useAppSelector)(_v61.firstSelectedElementSelector),
        _v2 = (0, _v18.useAppSelector)(_v23.shouldShowTestAssetsSelector),
        _v3 = (0, _v18.useAppSelector)(_v17.storyboardIdSelector),
        {
          trackEditorClipAnimationChanged: _v4
        } = (0, _v75.useEditorTracking)(),
        {
          data: _v5
        } = (0, _v21.useFetchAssetsQuery)({
          isTest: _v2,
          select: ["animations", "fonts"]
        }),
        {
          play: _v6,
          pause: _v7,
          seek: _v8
        } = (0, _v81.useDragonfly)(),
        {
          colorMode: _v9
        } = (0, _v129.useColorMode)(),
        _v10 = (0, _v2.useRef)(0),
        _v11 = (0, _v2.useRef)(0),
        _v12 = (0, _v2.useMemo)(() => _v5?.animations ? _v5?.animations.filter(_v0 => _v136.includes(_v0.name)).sort((_v0, _v1) => _v1.order - _v0.order) : [], [_v5]),
        _v13 = (0, _v2.useCallback)(_v0 => {
          if (!_v1) return;
          let _v1 = (0, _v64.isGraphicElement)(_v1) ? "style" : "animationName",
            _v2 = (0, _v126.default)(_v0.substring(_v135.length));
          _v0((0, _v17.updateElementAction)({
            ceId: _v1.id,
            element: {
              [_v1]: _v2
            }
          })), (0, _v91.trackSelectAnimation)({
            type: (0, _v64.isGraphicElement)(_v1) ? "graphics" : "media",
            animationId: _v2,
            animationName: _v2
          });
          let _v3 = (0, _v64.isGraphicElement)(_v1) ? _v1.style : (0, _v64.isMediaElement)(_v1) ? _v1.animationName || _v130.AnimationType.NONE : void 0;
          void 0 !== _v3 && _v2 !== _v3 && _v4({
            editorSessionId: _v3,
            animationName: _v2
          }), _v2 !== _v130.AnimationType.NONE && (clearTimeout(_v10.current), clearTimeout(_v11.current), _v7(), _v8(_v1.compositionTiming.start), _v10.current = setTimeout(() => {
            _v6(), _v11.current = setTimeout(() => {
              _v7();
            }, Math.min(0, (_v1.compositionTiming.end - _v1.compositionTiming.start) * 0) - 100);
          }, 100));
        }, [_v1, _v0, _v7, _v6, _v8, _v3, _v4]),
        _v14 = (_v0, _v1) => {
          let _v2;
          (0, _v64.isGraphicElement)(_v1) && (_v2 = _v1.style), (0, _v64.isMediaElement)(_v1) && (_v2 = _v1.animationName || _v130.AnimationType.NONE);
          let _v3 = _v12[_v0],
            _v4 = _v1 && (0, _v126.default)(_v3.name.substring(_v135.length)) === _v2;
          return (0, _v1.jsx)(_v36.Box, {
            id: _v3.name,
            gridStyleType: _v25.GridStyleType.LANDSCAPE,
            isActive: _v4,
            width: _v1,
            onClick: () => _v13(_v3.name),
            overlay: (0, _v1.jsx)(_v133, {
              path: _v3.libs[0].url
            }, _v3.name),
            testid: `${_v4 ? "selected-" : ""}media-animation`
          }, _v3.name);
        };
      return (0, _v1.jsxs)(_v34.Inspector, {
        children: [(0, _v1.jsx)(_v35.InspectorHeader, {
          title: (0, _v10.translate)({
            singular: "Animation",
            dictionary: {
              es: {
                singular: "Animación"
              },
              "ja-JP": {
                singular: "アニメーション"
              },
              "ko-KR": {
                singular: "애니메이션"
              },
              "pt-BR": {
                singular: "Animação"
              },
              "zh-CN": {
                singular: "动画"
              }
            }
          })
        }), (0, _v1.jsx)(_v134.InspectorBody, {
          children: (0, _v1.jsx)(_v127.Flex, {
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            children: (0, _v1.jsx)(_v73.default, {
              children: (0, _v1.jsx)(_v138, {
                width: "100%",
                height: "100%",
                padding: "2px",
                $_css: "dark" === _v9 ? "white" : "black",
                $_css2: "dark" === _v9 ? "white" : "black",
                $_css3: "dark" === _v9 ? "white" : "black",
                children: _v12.map((_v0, _v1) => _v1 % 2 == 0 && (0, _v1.jsx)(_v128.SimpleGrid, {
                  columns: 2,
                  spacing: "8px",
                  marginBottom: "8px",
                  children: (0, _v1.jsxs)(_v2.Fragment, {
                    children: [_v14(_v1, 100), _v12[_v1 + 1] && _v14(_v1 + 1, 100)]
                  })
                }, _v1))
              })
            })
          })
        })]
      });
    };
  var _v138 = (0, _v28.default)(_v32.Box).withConfig({
      displayName: "MediaAnimationsInspector___StyledBokehBox",
      componentId: "sc-2ebf96ce-0"
    })`
                [clip-path^='url(#__lottie'] {
                  & path {
                    fill: ${_v0 => _v0.$_css};
                    stroke: ${_v0 => _v0.$_css2};
                  }

                  & rect {
                    fill: ${_v0 => _v0.$_css3};
                    stroke: transparent;
                  }

                  & rect[fill='#ffffff'] {
                    fill: transparent;
                  }
                }

                .noColorChange rect {
                  fill: inherit !important;
                  stroke: inherit !important;
                }
              `,
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  let _v149 = _v0 => (0, _v1.jsx)(_v148.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm14-1a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 17.586V12a1 1 0 0 1 1-1ZM3 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
      fill: "currentColor"
    })
  });
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  let _v152 = (0, _v28.default)(_v71.InspectorPaddedRow).withConfig({
      displayName: "MediaLibraryFilters.style__FiltersRow",
      componentId: "sc-e1bd3e1d-0"
    })`
  display: flex;
  position: relative;
  gap: 8px;
  margin-bottom: 8px;
  margin-top: 0;
  align-items: center;
`,
    _v153 = _v28.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__Navigation",
      componentId: "sc-e1bd3e1d-1"
    })`
  display: flex;
  align-items: center;
`,
    _v154 = _v28.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__SearchContainer",
      componentId: "sc-e1bd3e1d-2"
    })`
  display: flex;
  align-items: center;
  width: 100%;
`,
    _v155 = _v28.default.div.withConfig({
      displayName: "MediaLibraryFilters.style__SearchButtonContainer",
      componentId: "sc-e1bd3e1d-3"
    })`
  display: flex;
  flex: 0;
  justify-content: end;
  position: relative;
  left: 1px;
`;
  var _v156 = _v0.i(0);
  let _v157 = {
    LIBRARY: "Shared library",
    TEAM_LIBRARY: "Team library",
    MY_LIBRARY: "My library"
  };
  _v0.s(["MediaLibraryItemsType", 0, _v157], 0);
  let _v158 = {
    ASCENDING: "asc",
    DESCENDING: "desc"
  };
  _v0.s(["MediaLibraryDirectionMethod", 0, _v158], 0);
  let _v159 = {
    ADDED: "date",
    MODIFIED: "last_user_action_event_date",
    DEFAULT: "default",
    ALPHABETICAL: "alphabetical"
  };
  _v159.MODIFIED, _v159.ADDED, _v159.DEFAULT, _v159.ALPHABETICAL, _v0.s(["MediaLibrarySortingMethod", 0, _v159], 0);
  let _v160 = "Last modified",
    _v161 = "First modified",
    _v162 = "Last added",
    _v163 = "First added",
    _v164 = "Title, A to Z",
    _v165 = "Title, Z to A",
    _v166 = "Relevance",
    _v167 = {
      [_v160]: {
        sort: _v159.MODIFIED,
        direction: _v158.DESCENDING
      },
      [_v161]: {
        sort: _v159.MODIFIED,
        direction: _v158.ASCENDING
      },
      [_v162]: {
        sort: _v159.ADDED,
        direction: _v158.DESCENDING
      },
      [_v163]: {
        sort: _v159.ADDED,
        direction: _v158.ASCENDING
      },
      [_v164]: {
        sort: _v159.ALPHABETICAL,
        direction: _v158.ASCENDING
      },
      [_v165]: {
        sort: _v159.ALPHABETICAL,
        direction: _v158.DESCENDING
      },
      [_v166]: {
        sort: _v159.DEFAULT,
        direction: _v158.ASCENDING
      }
    },
    _v168 = {
      [`${_v159.MODIFIED}_${_v158.DESCENDING}`]: _v160,
      [`${_v159.MODIFIED}_${_v158.ASCENDING}`]: _v161,
      [`${_v159.ADDED}_${_v158.DESCENDING}`]: _v162,
      [`${_v159.ADDED}_${_v158.ASCENDING}`]: _v163,
      [`${_v159.ALPHABETICAL}_${_v158.ASCENDING}`]: _v164,
      [`${_v159.ALPHABETICAL}_${_v158.DESCENDING}`]: _v165,
      [`${_v159.DEFAULT}_${_v158.ASCENDING}`]: _v166
    },
    _v169 = (0, _v28.default)(_v94.SelectItem).withConfig({
      displayName: "SelectItemWithIcon.style__SelectItemWithIcon",
      componentId: "sc-b67a5eb7-0"
    })`
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;

    path {
      fill: currentColor;
  }
`,
    _v170 = {
      [_v157.LIBRARY]: (0, _v1.jsx)(_v151.VideosStack, {
        width: "18px",
        height: "18px"
      }),
      [_v157.TEAM_LIBRARY]: (0, _v1.jsx)(_v150.TeamLibrary, {
        width: "18px",
        height: "18px"
      }),
      [_v157.MY_LIBRARY]: (0, _v1.jsx)(_v146.MyLibrary, {
        width: "18px",
        height: "18px"
      })
    };
  _v0.s(["default", 0, ({
    onChange: _v0,
    selectedItemType: _v1,
    selectedDirection: _v2,
    selectedSort: _v3,
    keywords: _v4,
    selectedFolder: _v5,
    parentFolders: _v6,
    navigateBack: _v7,
    hasContentSpaceEnabled: _v8
  }) => {
    let [_v9, _v10] = (0, _v2.useState)(!1),
      _v11 = _v8 ? _v157.TEAM_LIBRARY : _v157.LIBRARY,
      _v12 = _v157.MY_LIBRARY,
      _v13 = (0, _v2.useCallback)(_v0 => {
        let {
          sort: _v1,
          direction: _v2
        } = _v167[_v0];
        _v0("sort", _v1), _v0("direction", _v2);
      }, [_v0]),
      _v14 = (0, _v2.useMemo)(() => ({
        value: _v0,
        children: _v1
      }) => (0, _v1.jsxs)(_v49.MenuItem, {
        onClick: () => _v13(_v0),
        justifyContent: "space-between",
        children: [_v1, _v168[`${_v3}_${_v2}`] === _v0 && (0, _v1.jsx)(_v51.Checkmark, {})]
      }), [_v13, _v2, _v3]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v152, {
        children: [!_v9 && (0, _v1.jsx)(_v1.Fragment, {
          children: _v5 ? (0, _v1.jsxs)(_v153, {
            children: [_v6.length > 1 ? (0, _v1.jsxs)(_v48.Menu, {
              children: [(0, _v1.jsx)(_v140.MenuButton, {
                children: (0, _v1.jsx)(_v5.IconButton, {
                  variant: "tertiary",
                  icon: (0, _v1.jsx)(_v93.ChevronLeftSmall, {}),
                  "data-testid": "media-library-back-button",
                  mr: 8,
                  "aria-label": "media-library-back-button"
                })
              }), (0, _v1.jsx)(_v141.MenuList, {
                children: _v6.map((_v0, _v1) => {
                  var _v2;
                  return (0, _v1.jsx)(_v49.MenuItem, {
                    style: {
                      padding: "9px 12px"
                    },
                    onClick: () => _v7(_v0.id),
                    icon: (_v2 = !!_v0.isPrivate, _v1 === _v6.length - 1 ? _v170[_v1] : _v2 ? (0, _v1.jsx)(_v145.Lock, {
                      width: "18px",
                      height: "18px"
                    }) : (0, _v1.jsx)(_v144.Folder, {
                      width: "18px",
                      height: "18px"
                    })),
                    children: _v0.title
                  }, _v0.id);
                })
              })]
            }) : (0, _v1.jsx)(_v5.IconButton, {
              variant: "tertiary",
              onClick: () => _v7(),
              icon: (0, _v1.jsx)(_v93.ChevronLeftSmall, {}),
              "data-testid": "media-library-back-button",
              "aria-label": "media-library-back-button"
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "heading-xs",
              children: _v5?.title
            })]
          }) : _v156.default.privateToMeFolderUri ? (0, _v1.jsx)(_v94.Select, {
            style: {
              minWidth: "185px",
              flex: 1
            },
            onValueChange: _v0 => _v0("itemsType", _v0.value[0]),
            placeholder: _v11,
            items: [_v11, _v12].map(_v0 => ({
              value: _v0,
              label: (0, _v139.default)(_v0)
            })),
            "data-testid": "media-inspector-select-filter",
            size: "sm",
            children: _v0 => (0, _v1.jsxs)(_v169, {
              children: [_v170[_v0.value], " ", (0, _v139.default)(_v0.value)]
            })
          }) : (0, _v1.jsxs)(_v153, {
            children: [(0, _v1.jsx)(_v5.IconButton, {
              variant: "tertiary",
              icon: _v170[_v11],
              "data-testid": "media-library-back-button",
              "aria-label": "media-library-back-button"
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "heading-xs",
              children: (0, _v139.default)(_v11)
            })]
          })
        }), _v9 ? (0, _v1.jsxs)(_v154, {
          children: [(0, _v1.jsx)(_v5.IconButton, {
            "data-testid": "media-library-search-button",
            variant: "tertiary",
            onClick: () => {
              _v10(!1), _v0("keywords", "");
            },
            mr: 8,
            icon: (0, _v1.jsx)(_v93.ChevronLeftSmall, {}),
            "aria-label": "media-library-search-button"
          }), (0, _v1.jsx)(_v143.Search, {
            placeholder: `${(0, _v10.translate)({
              singular: "Search in",
              dictionary: {
                es: {
                  singular: "Buscar en"
                },
                "de-DE": {
                  singular: "Suchen in"
                },
                "fr-FR": {
                  singular: "Rechercher dans"
                },
                "ja-JP": {
                  singular: "検索対象："
                },
                "ko-KR": {
                  singular: "검색 위치"
                },
                "pt-BR": {
                  singular: "Pesquisar em"
                },
                "zh-CN": {
                  singular: "搜索范围"
                }
              }
            })} ${_v5?.title || _v1}`,
            style: {
              width: "100%"
            },
            variant: "minimal",
            size: "sm",
            value: _v4,
            onChange: _v0 => _v0("keywords", _v0.target.value),
            "data-testid": "media-library-search-filter",
            autoFocus: !0
          })]
        }) : (0, _v1.jsx)(_v155, {
          children: (0, _v1.jsx)(_v5.IconButton, {
            "data-testid": "media-library-search-button",
            variant: "tertiary",
            onClick: () => _v10(!0),
            icon: (0, _v1.jsx)(_v147.SearchMagnifier, {}),
            "aria-label": "media-library-search-button"
          })
        }), (0, _v1.jsxs)(_v48.Menu, {
          children: [(0, _v1.jsx)(_v140.MenuButton, {
            as: _v5.IconButton,
            icon: (0, _v1.jsx)(_v149, {}),
            "data-testid": "media-library-sort-button",
            "aria-label": "media-library-sort-button",
            variant: "tertiary"
          }), (0, _v1.jsx)(_v142.Portal, {
            children: (0, _v1.jsxs)(_v141.MenuList, {
              width: "157px",
              children: [(0, _v1.jsx)(_v14, {
                value: _v160,
                children: (0, _v10.translate)({
                  singular: "Last modified",
                  dictionary: {
                    es: {
                      singular: "Última modificación"
                    },
                    "de-DE": {
                      singular: "Zuletzt geändert"
                    },
                    "fr-FR": {
                      singular: "Modifiées en dernier"
                    },
                    "ja-JP": {
                      singular: "最終変更日"
                    },
                    "ko-KR": {
                      singular: "마지막 수정"
                    },
                    "pt-BR": {
                      singular: "Modificado por último"
                    },
                    "zh-CN": {
                      singular: "最后修改"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v161,
                children: (0, _v10.translate)({
                  singular: "First modified",
                  dictionary: {
                    es: {
                      singular: "Primera modificación"
                    },
                    "de-DE": {
                      singular: "Erstmals geändert"
                    },
                    "fr-FR": {
                      singular: "Modifiées en premier"
                    },
                    "ja-JP": {
                      singular: "初回変更日"
                    },
                    "ko-KR": {
                      singular: "최초 수정"
                    },
                    "pt-BR": {
                      singular: "Modificado primeiro"
                    },
                    "zh-CN": {
                      singular: "首次修改"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v162,
                children: (0, _v10.translate)({
                  singular: "Last added",
                  dictionary: {
                    es: {
                      singular: "Último agregado"
                    },
                    "de-DE": {
                      singular: "Zuletzt hinzugefügt"
                    },
                    "fr-FR": {
                      singular: "Ajoutées en dernier"
                    },
                    "ja-JP": {
                      singular: "最終追加日"
                    },
                    "ko-KR": {
                      singular: "마지막 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionado por último"
                    },
                    "zh-CN": {
                      singular: "最后添加"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v163,
                children: (0, _v10.translate)({
                  singular: "First added",
                  dictionary: {
                    es: {
                      singular: "Primer agregado"
                    },
                    "de-DE": {
                      singular: "Erstmals hinzugefügt"
                    },
                    "fr-FR": {
                      singular: "Ajoutées en premier"
                    },
                    "ja-JP": {
                      singular: "初回追加日"
                    },
                    "ko-KR": {
                      singular: "최초 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionado primeiro"
                    },
                    "zh-CN": {
                      singular: "首次添加"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v164,
                children: (0, _v10.translate)({
                  singular: "Title, A to Z",
                  dictionary: {
                    es: {
                      singular: "Título, de A a Z"
                    },
                    "de-DE": {
                      singular: "Titel, A bis Z"
                    },
                    "fr-FR": {
                      singular: "Titre, de A à Z"
                    },
                    "ja-JP": {
                      singular: "タイトル、A〜Z"
                    },
                    "ko-KR": {
                      singular: "제목 (오름차순)"
                    },
                    "pt-BR": {
                      singular: "Título, A a Z"
                    },
                    "zh-CN": {
                      singular: "标题，A 到 Z"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v165,
                children: (0, _v10.translate)({
                  singular: "Title, Z to A",
                  dictionary: {
                    es: {
                      singular: "Título, de Z a A"
                    },
                    "de-DE": {
                      singular: "Titel, Z bis A"
                    },
                    "fr-FR": {
                      singular: "Titre, de Z à A"
                    },
                    "ja-JP": {
                      singular: "タイトル、Z〜A"
                    },
                    "ko-KR": {
                      singular: "제목 (내림차순)"
                    },
                    "pt-BR": {
                      singular: "Título, Z a A"
                    },
                    "zh-CN": {
                      singular: "标题，Z 到 A"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14, {
                value: _v166,
                children: (0, _v10.translate)({
                  singular: "Relevance",
                  dictionary: {
                    es: {
                      singular: "Relevancia"
                    },
                    "de-DE": {
                      singular: "Relevanz"
                    },
                    "fr-FR": {
                      singular: "Pertinence"
                    },
                    "ja-JP": {
                      singular: "関連性"
                    },
                    "ko-KR": {
                      singular: "관련도"
                    },
                    "pt-BR": {
                      singular: "Relevância"
                    },
                    "zh-CN": {
                      singular: "相关性"
                    }
                  }
                })
              })]
            })
          })]
        })]
      })
    });
  }], 0), _v0.s(["libraryItemsQueryParams", 0, ["video.duration", "video.name", "video.link", "video.files.link", "video.pictures", "video.uri", "video.privacy.view", "video.uploader.pictures", "video.download.link", "video.user.uri", "video.height", "video.width", "folder.metadata.connections.items.total", "folder.metadata.connections.items.uri", "folder.metadata.connections.parentFolder.uri", "folder.name", "folder.uri", "folder.privacy.view", "folder.isPrivateToUser", "folder.settings.color"]], 0), _v0.s(["MEDIA_LIBRARY_ITEMS_PER_PAGE", 0, 60, "MediaLibraryFilterName", 0, {
    itemsType: "library folder",
    sort: "sort by",
    direction: "direction",
    keywords: "keywords"
  }], 0);
}