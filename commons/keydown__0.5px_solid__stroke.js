{
  "use strict";

  _v0.s(["default", () => _v14], 0);
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
    _v13 = _v0.i(0);
  let _v14 = () => {
    let {
        data: _v0
      } = (0, _v8.useFetchBusinessDataQuery)(),
      [_v1] = (0, _v8.useUpdateColorsBusinessDataMutation)(),
      _v2 = (0, _v9.createBrandColorPalette)(_v0),
      [_v3, _v4] = (0, _v2.useState)(_v2),
      _v5 = (0, _v2.useRef)(null);
    (0, _v2.useEffect)(() => {
      _v0 && _v4((0, _v9.createBrandColorPalette)(_v0));
    }, [_v0]);
    let _v6 = (0, _v2.useCallback)(() => _v1(_v3), [_v3, _v1]);
    (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
        _v0.key === _v7.KEYBOARD_KEYS.ENTER && setTimeout(() => _v6(), 0);
      };
      return document.addEventListener("keydown", _v0), () => {
        document.removeEventListener("keydown", _v0);
      };
    }, [_v6]);
    let _v7 = (0, _v2.useMemo)(() => ({
      value: _v0
    }) => (0, _v1.jsx)(_v3.Box, {
      border: "0.5px solid",
      borderColor: "stroke",
      borderRadius: "50%",
      backgroundColor: _v0,
      width: "20px",
      height: "20px"
    }), []);
    return (0, _v1.jsxs)(_v10.Inspector, {
      children: [(0, _v1.jsx)(_v12.InspectorHeader, {
        title: (0, _v4.translate)({
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
        }),
        hasBackButton: !0
      }), (0, _v1.jsx)(_v11.InspectorBody, {
        children: (0, _v1.jsx)(_v13.InspectorPaddedRow, {
          children: (0, _v1.jsxs)(_v6.ColorsContainer, {
            ref: _v5,
            children: [(0, _v1.jsx)(_v5.BrandColorInput, {
              label: (0, _v4.translate)({
                singular: "Primary color",
                dictionary: {
                  es: {
                    singular: "Color primario"
                  },
                  "de-DE": {
                    singular: "Primärfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur principale"
                  },
                  "ja-JP": {
                    singular: "プライマリーカラー"
                  },
                  "ko-KR": {
                    singular: "기본 색상"
                  },
                  "pt-BR": {
                    singular: "Cor principal"
                  },
                  "zh-CN": {
                    singular: "主色"
                  }
                }
              }),
              value: _v3.primary,
              onChange: _v0 => _v4(_v0 => ({
                ..._v0,
                primary: _v0
              })),
              onChangeEnd: _v6,
              children: (0, _v1.jsx)(_v7, {
                value: _v3.primary,
                tip: (0, _v4.translate)({
                  singular: "Mainly in use as scene background and large graphics",
                  dictionary: {
                    es: {
                      singular: "Se utilizan principalmente como fondo de escenas y gráficos de gran tamaño"
                    },
                    "de-DE": {
                      singular: "Hauptsächlich als Hintergrund für Szenen und große Grafiken verwendet"
                    },
                    "fr-FR": {
                      singular: "Principalement utilisée comme arrière-plan de scène et pour les images de grande taille"
                    },
                    "ja-JP": {
                      singular: "主にシーンの背景や大きなグラフィックに使用"
                    },
                    "ko-KR": {
                      singular: "주로 장면 배경 및 대형 그래픽으로 사용"
                    },
                    "pt-BR": {
                      singular: "Principalmente usada como fundo de cena e gráficos grandes"
                    },
                    "zh-CN": {
                      singular: "主要用作场景背景和大型图形"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v5.BrandColorInput, {
              label: (0, _v4.translate)({
                singular: "Secondary color",
                dictionary: {
                  es: {
                    singular: "Color secundario"
                  },
                  "de-DE": {
                    singular: "Sekundärfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur secondaire"
                  },
                  "ja-JP": {
                    singular: "セカンダリーカラー"
                  },
                  "ko-KR": {
                    singular: "보조 색상"
                  },
                  "pt-BR": {
                    singular: "Cor secundária"
                  },
                  "zh-CN": {
                    singular: "辅助颜色"
                  }
                }
              }),
              value: _v3.secondary,
              onChange: _v0 => _v4(_v0 => ({
                ..._v0,
                secondary: _v0
              })),
              onChangeEnd: _v6,
              children: (0, _v1.jsx)(_v7, {
                value: _v3.secondary,
                tip: (0, _v4.translate)({
                  singular: "Mainly in use as media and text backgrounds",
                  dictionary: {
                    es: {
                      singular: "Se utiliza principalmente como fondos de textos y archivos"
                    },
                    "de-DE": {
                      singular: "Hauptsächlich als Hintergrund für Medien und Text verwendet"
                    },
                    "fr-FR": {
                      singular: "Principalement utilisée comme arrière-plan pour les médias et le texte"
                    },
                    "ja-JP": {
                      singular: "主にメディアとテキストの背景として使用"
                    },
                    "ko-KR": {
                      singular: "주로 미디어 및 텍스트 배경으로 사용"
                    },
                    "pt-BR": {
                      singular: "Principalmente usada como fundos de mídia e de texto"
                    },
                    "zh-CN": {
                      singular: "主要用作媒体和文本背景"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v5.BrandColorInput, {
              label: (0, _v4.translate)({
                singular: "Text color",
                dictionary: {
                  es: {
                    singular: "Color del texto"
                  },
                  "de-DE": {
                    singular: "Textfarbe"
                  },
                  "fr-FR": {
                    singular: "Couleur du texte"
                  },
                  "ja-JP": {
                    singular: "テキストの色"
                  },
                  "ko-KR": {
                    singular: "텍스트 색상"
                  },
                  "pt-BR": {
                    singular: "Cor do texto"
                  },
                  "zh-CN": {
                    singular: "文字颜色"
                  }
                }
              }),
              value: _v3.default,
              onChange: _v0 => _v4(_v0 => ({
                ..._v0,
                default: _v0
              })),
              onChangeEnd: _v6,
              children: (0, _v1.jsx)(_v7, {
                value: _v3.default
              })
            })]
          })
        })
      })]
    });
  };
  _v0.s(["default", () => _v50], 0);
  var _v15 = _v0.i(0),
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
    _v32 = _v0.i(0);
  let _v33 = _v32.default.div.withConfig({
      displayName: "Fonts.style__FontContainer",
      componentId: "sc-875889ed-0"
    })`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: ${({
      paddingLeft: _v0
    }) => _v0}px;
`,
    _v34 = (0, _v32.default)(_v33).withConfig({
      displayName: "Fonts.style__LoadingContent",
      componentId: "sc-875889ed-1"
    })`
  justify-content: space-between;
  padding-right: ${({
      paddingRight: _v0
    }) => _v0 ?? 12}px;
  font-size: 14px;
`,
    _v35 = _v32.default.span.withConfig({
      displayName: "Fonts.style__LoadingText",
      componentId: "sc-875889ed-2"
    })`
  opacity: 0.5;
`;
  _v0.s(["FontContainer", 0, _v33, "LoadingContent", 0, _v34, "LoadingText", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = _v32.default.div.withConfig({
      displayName: "BrandFontGroup.style__FontGroupTitleContainer",
      componentId: "sc-528aca80-0"
    })`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  z-index: 0;
  cursor: pointer;
`,
    _v45 = _v32.default.div.withConfig({
      displayName: "BrandFontGroup.style__FontIcon",
      componentId: "sc-528aca80-1"
    })`
  width: 24px;
  height: 24px;
  margin: 12px;
  path {
    fill: ${({
      theme: _v0
    }) => _v0.content.color};
  }
`,
    _v46 = _v32.default.div.withConfig({
      displayName: "BrandFontGroup.style__FontGroupContainer",
      componentId: "sc-528aca80-2"
    })`
  border-radius: 8px;
  border: 1px solid ${_v43.core.color.stroke};
`;
  var _v47 = _v0.i(0);
  let _v48 = ({
    isOpen: _v0,
    onGroupSelect: _v1,
    fonts: _v2,
    onFontDelete: _v3
  }) => {
    let {
        hasCreateBrandEdit: _v4
      } = (0, _v2.useContext)(_v21.PermissionsContext),
      _v5 = (0, _v2.useMemo)(() => ({
        tip: _v0,
        onClick: _v1,
        icon: _v2
      }) => (0, _v1.jsx)(_v38.Tooltip, {
        label: _v0,
        children: (0, _v1.jsx)(_v36.IconButton, {
          "aria-label": "delete-font-family",
          size: "xs",
          variant: "tertiary",
          icon: _v2,
          "data-testid": "delete-font-family",
          onClick: _v0 => {
            _v0.stopPropagation(), _v1();
          },
          display: "none",
          marginLeft: "auto",
          mr: 8,
          sx: {
            ".fontContainer:hover &": {
              display: "flex"
            }
          }
        })
      }), []),
      _v6 = (0, _v2.useMemo)(() => ({
        fontFamily: _v0,
        content: _v1
      }) => (0, _v1.jsx)(_v37.Text, {
        variant: "body-xl",
        fontFamily: (0, _v47.getFontFamily)(_v0),
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        "data-testid": _v20.testIds.brandFontItem,
        children: _v1
      }), []),
      _v7 = (0, _v2.useMemo)(() => ({
        title: _v0,
        fontFamily: _v1,
        isOpen: _v2,
        isExpandable: _v3
      }) => (0, _v1.jsxs)(_v44, {
        onClick: _v1,
        children: [(0, _v1.jsx)(_v45, {
          children: _v3 && (_v2 ? (0, _v1.jsx)(_v41.ChevronDownSmall, {}) : (0, _v1.jsx)(_v42.ChevronRightSmall, {}))
        }), (0, _v1.jsx)(_v6, {
          fontFamily: _v1,
          content: _v0
        })]
      }), [_v6, _v1]),
      _v8 = (0, _v2.useMemo)(() => ({
        font: _v0,
        paddingLeft: _v1 = 56
      }) => (0, _v1.jsxs)(_v33, {
        className: "fontContainer",
        paddingLeft: _v1,
        children: [(0, _v1.jsx)(_v6, {
          fontFamily: _v0.name,
          content: _v0.displayName
        }), _v4 && (0, _v1.jsx)(_v5, {
          tip: _v0.isInternal ? (0, _v4.translate)({
            singular: "Remove font",
            dictionary: {
              es: {
                singular: "Eliminar fuente"
              },
              "de-DE": {
                singular: "Schriftart entfernen"
              },
              "fr-FR": {
                singular: "Supprimer la police"
              },
              "ja-JP": {
                singular: "フォントを削除する"
              },
              "ko-KR": {
                singular: "폰트 삭제"
              },
              "pt-BR": {
                singular: "Remover fonte"
              },
              "zh-CN": {
                singular: "移除字体"
              }
            }
          }) : (0, _v4.translate)({
            singular: "Delete uploaded font",
            dictionary: {
              es: {
                singular: "Eliminar fuente subida"
              },
              "de-DE": {
                singular: "Hochgeladene Schriftart löschen"
              },
              "fr-FR": {
                singular: "Supprimer la police importée"
              },
              "ja-JP": {
                singular: "アップロードしたフォントを削除"
              },
              "ko-KR": {
                singular: "업로드된 폰트 삭제"
              },
              "pt-BR": {
                singular: "Excluir fonte carregada"
              },
              "zh-CN": {
                singular: "删除上传的字体"
              }
            }
          }),
          onClick: () => _v3(_v0),
          icon: _v0.isInternal ? (0, _v1.jsx)(_v39.MinusCircle, {}) : (0, _v1.jsx)(_v40.TrashBin, {})
        })]
      }), [_v5, _v6, _v4, _v3]),
      _v9 = (0, _v2.useMemo)(() => ({
        font: _v0
      }) => (0, _v1.jsx)(_v8, {
        font: _v0,
        paddingLeft: 16
      }), [_v8]);
    return (0, _v1.jsxs)(_v46, {
      children: [_v2.length > 1 && (0, _v1.jsx)(_v7, {
        title: _v2[0].family,
        fontFamily: _v2[0].name,
        isOpen: _v0,
        isExpandable: _v2.length > 1
      }), _v0 && _v2.map(_v0 => (0, _v1.jsx)(_v8, {
        font: _v0
      }, _v0.name)), 1 === _v2.length && (0, _v1.jsx)(_v9, {
        font: _v2[0]
      })]
    });
  };
  var _v49 = _v0.i(0);
  let _v50 = () => {
    let _v0 = (0, _v28.useAppDispatch)(),
      _v1 = (0, _v28.useAppSelector)(_v0 => _v0.selection.lastSelections.font),
      {
        hasCreateBrandEdit: _v2,
        hasCreateBrandApply: _v3
      } = (0, _v2.useContext)(_v21.PermissionsContext),
      {
        alertDeleteFont: _v4
      } = (0, _v22.useAlerts)(),
      {
        notifyFontFailedDeleting: _v5
      } = (0, _v24.useNotifications)(),
      {
        brandFonts: _v6,
        loadingBrandFonts: _v7
      } = (0, _v23.useFonts)(""),
      [_v8] = (0, _v25.useDeleteFontMutation)(),
      [_v9, _v10] = (0, _v2.useState)(-1),
      _v11 = 0 === _v6.length && 0 === _v7.length,
      _v12 = (0, _v2.useMemo)(() => _v6.reduce((_v0, _v1) => {
        let _v2 = _v0.findIndex(_v0 => _v0.family === _v1.family);
        return -1 !== _v2 ? _v0[_v2].fonts.push(_v1) : _v0.push({
          family: _v1.family,
          fonts: [_v1]
        }), _v0;
      }, []), [_v6]),
      _v13 = (0, _v2.useCallback)(async _v0 => {
        try {
          _v0.isInternal ? (_v1 === _v0.name && _v0((0, _v27.setLastSelectedFont)("")), await _v8({
            assetId: _v0.id.toString(),
            kitId: _v19.DEFAULT_BRANDKIT_ID
          }).unwrap()) : _v4({
            font: _v0,
            onPrimaryClick: async () => {
              _v1 === _v0.name && _v0((0, _v27.setLastSelectedFont)("")), await _v8({
                assetId: _v0.id.toString(),
                kitId: _v19.DEFAULT_BRANDKIT_ID
              }).unwrap();
            }
          });
        } catch (_v0) {
          _v5(_v0.name);
        }
      }, [_v4, _v8, _v0, _v5, _v1]);
    return (0, _v1.jsxs)(_v10.Inspector, {
      children: [(0, _v1.jsx)(_v12.InspectorHeader, {
        title: (0, _v4.translate)({
          singular: "Brand fonts",
          dictionary: {
            es: {
              singular: "Fuentes de la marca"
            },
            "de-DE": {
              singular: "Markenschriftarten"
            },
            "fr-FR": {
              singular: "Polices de la marque"
            },
            "ja-JP": {
              singular: "ブランドフォント"
            },
            "ko-KR": {
              singular: "브랜드 폰트"
            },
            "pt-BR": {
              singular: "Fontes da marca"
            },
            "zh-CN": {
              singular: "品牌字体"
            }
          }
        }),
        hasBackButton: !0
      }), _v11 && _v3 && (0, _v1.jsx)(_v31.default, {
        type: _v29.EmptyInspectorView.FONTS,
        title: (0, _v4.translate)({
          singular: "No fonts yet",
          dictionary: {
            es: {
              singular: "Aún no hay fuentes"
            },
            "de-DE": {
              singular: "Noch keine Schriftarten"
            },
            "fr-FR": {
              singular: "Aucune police"
            },
            "ja-JP": {
              singular: "まだフォントがありません"
            },
            "ko-KR": {
              singular: "아직 폰트가 없습니다."
            },
            "pt-BR": {
              singular: "Ainda não há fontes"
            },
            "zh-CN": {
              singular: "暂无字体"
            }
          }
        }),
        text: _v2 ? (0, _v4.translate)({
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
        }) : (0, _v4.translate)({
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
        })
      }), (0, _v1.jsxs)(_v49.BrandFontGroupsContainer, {
        children: [_v7.map(({
          name: _v0
        }) => (0, _v1.jsx)(_v46, {
          children: (0, _v1.jsxs)(_v34, {
            paddingLeft: 16,
            "data-testid": _v20.testIds.uploadingFontItem,
            children: [(0, _v1.jsx)(_v35, {
              children: (0, _v4.translate)({
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
            }), (0, _v1.jsx)(_v17.Spinner, {
              size: "sm"
            })]
          })
        }, _v0)), _v12.map((_v0, _v1) => (0, _v1.jsx)(_v48, {
          isOpen: _v9 === _v1,
          fonts: _v0.fonts,
          onGroupSelect: () => {
            _v10(_v0 => _v0 === _v1 ? -1 : _v1);
          },
          onFontDelete: _v0 => _v13(_v0)
        }, _v0.family))]
      }), _v2 && (0, _v1.jsx)(_v13.InspectorPaddedRow, {
        children: _v11 ? (0, _v1.jsx)(_v16.Center, {
          children: (0, _v1.jsx)(_v15.Button, {
            variant: "primary",
            leftIcon: (0, _v1.jsx)(_v18.Plus, {}),
            "data-testid": "AddBrandFont",
            onClick: () => _v0((0, _v26.openInspectorAction)({
              inspectorType: _v30.InspectorType.ADD_BRAND_FONT
            })),
            margin: "16px 0",
            size: "xs",
            children: (0, _v4.translate)({
              singular: "Add brand font",
              dictionary: {
                es: {
                  singular: "Agregar la fuente de la marca"
                },
                "de-DE": {
                  singular: "Markenschriftart hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter une police de la marque"
                },
                "ja-JP": {
                  singular: "ブランドのフォントを追加"
                },
                "ko-KR": {
                  singular: "브랜드 폰트 추가"
                },
                "pt-BR": {
                  singular: "Adicionar fonte da marca"
                },
                "zh-CN": {
                  singular: "添加品牌字体"
                }
              }
            })
          })
        }) : (0, _v1.jsx)(_v15.Button, {
          variant: "secondary",
          leftIcon: (0, _v1.jsx)(_v18.Plus, {}),
          "data-testid": "AddBrandFont",
          onClick: () => _v0((0, _v26.openInspectorAction)({
            inspectorType: _v30.InspectorType.ADD_BRAND_FONT
          })),
          width: "100%",
          margin: "24px 0",
          height: "38px",
          children: (0, _v4.translate)({
            singular: "Add brand font",
            dictionary: {
              es: {
                singular: "Agregar la fuente de la marca"
              },
              "de-DE": {
                singular: "Markenschriftart hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter une police de la marque"
              },
              "ja-JP": {
                singular: "ブランドのフォントを追加"
              },
              "ko-KR": {
                singular: "브랜드 폰트 추가"
              },
              "pt-BR": {
                singular: "Adicionar fonte da marca"
              },
              "zh-CN": {
                singular: "添加品牌字体"
              }
            }
          })
        })
      })]
    });
  };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = ({
    title: _v0,
    testId: _v1,
    children: _v2,
    leftIcon: _v3,
    onClick: _v4
  }) => (0, _v1.jsx)(_v15.Button, {
    variant: "tertiary",
    width: "100%",
    size: "lg",
    padding: "18px 8px",
    height: "60px",
    onClick: _v4,
    children: (0, _v1.jsxs)(_v54.Flex, {
      "data-testid": _v1,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      children: [_v3, (0, _v1.jsx)(_v37.Text, {
        variant: "heading-xs",
        as: "div",
        width: 50,
        flex: 1,
        textAlign: "start",
        children: _v0
      }), _v2]
    })
  });
  _v0.s(["BrandKitSection", 0, _v55], 0), _v0.s(["default", 0, () => {
    let _v0 = (0, _v28.useAppDispatch)(),
      _v1 = (0, _v28.useAppSelector)(_v53.storyboardIdSelector),
      {
        trackEditorBrandKitItemOpened: _v2
      } = (0, _v52.useEditorTracking)();
    return (0, _v1.jsx)(_v55, {
      testId: _v20.testIds.brandColorsSection,
      title: (0, _v4.translate)({
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
      }),
      leftIcon: (0, _v1.jsx)(_v51.Palette, {}),
      onClick: () => {
        _v0((0, _v26.openInspectorAction)({
          inspectorType: _v30.InspectorType.BRAND_COLORS
        })), _v2({
          editorSessionId: _v1,
          editorBrandKitSection: "colors"
        });
      },
      children: (0, _v1.jsx)(_v42.ChevronRightSmall, {
        boxSize: "xs"
      })
    });
  }], 0);
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  _v0.s(["default", 0, () => {
    let _v0 = (0, _v28.useAppDispatch)(),
      _v1 = (0, _v28.useAppSelector)(_v53.storyboardIdSelector),
      {
        trackEditorBrandKitItemOpened: _v2
      } = (0, _v52.useEditorTracking)(),
      {
        brandFonts: _v3
      } = (0, _v23.useFonts)("");
    return (0, _v1.jsx)(_v55, {
      testId: _v20.testIds.brandFontsSection,
      title: (0, _v4.translate)({
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
      leftIcon: (0, _v1.jsx)(_v57.TextFilled, {}),
      onClick: () => {
        _v0((0, _v26.openInspectorAction)({
          inspectorType: _v30.InspectorType.BRAND_FONTS
        })), _v2({
          editorSessionId: _v1,
          editorBrandKitSection: "fonts"
        });
      },
      children: _v3.length > 0 ? (0, _v1.jsx)(_v42.ChevronRightSmall, {
        boxSize: "xs"
      }) : (0, _v1.jsx)(_v56.PlusSmall, {
        onClick: _v0 => {
          _v0.stopPropagation(), _v0((0, _v26.openInspectorAction)({
            inspectorType: _v30.InspectorType.ADD_BRAND_FONT
          }));
        }
      })
    });
  }], 0);
}