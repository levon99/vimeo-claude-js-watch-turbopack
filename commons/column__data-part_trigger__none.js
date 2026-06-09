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
  function _v18({
    items: _v0,
    handleSelect: _v1,
    selectedItem: _v2,
    maxWidth: _v3
  }) {
    let _v4 = (0, _v15.useMemo)(() => [_v0?.[0]?.value || ""], [_v0]);
    return (0, _v15.useEffect)(() => {
      _v2 && "" !== _v2 || _v1(_v4[0]);
    }, [_v4, _v1, _v2]), (0, _v1.jsx)(_v6.Flex, {
      direction: "column",
      sx: {
        '& [data-part="trigger"]': {
          outline: "none",
          paddingLeft: "0",
          border: "none",
          width: "initial",
          maxWidth: _v3 ?? "140px",
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
          paddingRight: "5px",
          fontWeight: "bold"
        },
        ' & [data-part="content"]': {
          width: "initial"
        }
      },
      children: 1 === _v0.length ? (0, _v1.jsx)(_v7.Text, {
        variant: "heading-xs",
        maxWidth: _v3 ?? "140px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        children: _v0[0].label
      }) : (0, _v1.jsx)(_v17.Select, {
        onValueChange: _v0 => {
          _v1(_v0.value[0]);
        },
        size: "sm",
        items: _v0,
        variant: "outlined",
        style: {
          maxWidth: _v3 ?? "140px"
        },
        value: _v2 ? [_v2] : [],
        children: _v0 => (0, _v1.jsx)(_v17.SelectItem, {
          display: "flex",
          children: (0, _v1.jsx)(_v17.SelectItemText, {
            style: {
              gridColumn: "2"
            },
            children: _v0.label
          })
        }, _v0.value)
      })
    });
  }
  var _v19 = _v0.i(0);
  function _v20({
    onChangeAdditionalColors: _v0,
    setCurrentColor: _v1,
    currentColor: _v2,
    currentColorType: _v3
  }) {
    let [_v4, _v5] = _v15.default.useState(_v3 === _v19.ColorType.SOLID || _v3 === _v19.ColorType.GRADIENT ? _v3 : _v19.ColorType.SOLID),
      _v6 = _v0 => _v3 === _v19.ColorType.SOLID && _v2.toLowerCase() === _v0.toLowerCase(),
      _v7 = (0, _v15.useMemo)(() => _v16.ADDITIONAL_COLORS_LIST.find(_v0 => _v0.type === _v4), [_v4]);
    return (0, _v1.jsxs)(_v6.Flex, {
      flexDir: "column",
      gap: "xs",
      children: [(0, _v1.jsx)(_v18, {
        handleSelect: _v0 => {
          _v5(_v0);
        },
        items: _v16.ADDITIONAL_COLORS_LIST.map(_v0 => ({
          label: _v0.name,
          value: _v0.type
        })),
        selectedItem: _v4
      }), _v7 && _v7.colors.length > 0 ? _v7.type === _v19.ColorType.GRADIENT ? (0, _v1.jsx)(_v6.Flex, {
        gap: "sm",
        flexWrap: "wrap",
        children: _v7.colors.map((_v0, _v1) => {
          let _v2;
          return (0, _v1.jsx)(_v10.Tooltip, {
            label: _v0.colorName,
            children: (0, _v1.jsx)(_v9.IconButton, {
              size: "xs",
              width: (0, _v2.rem)(22),
              variant: "tertiary",
              isActive: (_v2 = _v0.colorValue, _v3 === _v19.ColorType.GRADIENT && _v2.toLowerCase() === _v2.toLowerCase()),
              _active: {
                outlineColor: "focus-alt",
                outlineWidth: "2px",
                outlineOffset: "2px"
              },
              _hover: {
                background: _v0.colorValue,
                outlineColor: "input-stroke-hover",
                outlineWidth: "2px",
                outlineOffset: "2px"
              },
              borderWidth: "1px",
              borderColor: "check-radio-stroke",
              borderRadius: "round !important",
              background: `${_v0.colorValue} !important`,
              sx: {
                backgroundOrigin: "border-box !important",
                height: `${(0, _v2.rem)(22)}!important`
              },
              onClick: () => {
                _v0?.({
                  value: _v0.colorValue,
                  type: _v19.ColorType.GRADIENT,
                  index: _v1
                }), _v1(_v0.colorValue);
              },
              "aria-label": _v0.colorName,
              marginLeft: "xs",
              marginBottom: "xs"
            })
          }, `${_v0.colorName}-${_v0.colorValue}`);
        })
      }) : (0, _v1.jsx)(_v4.ColorPickerSwatchGroup, {
        style: {
          flexWrap: "wrap",
          gap: "sm"
        },
        children: _v7.colors.map((_v0, _v1) => (0, _v1.jsx)(_v10.Tooltip, {
          label: _v0.colorName,
          children: (0, _v1.jsx)(_v11.Box, {
            paddingLeft: "xs",
            paddingBottom: "xs",
            children: (0, _v1.jsx)(_v4.ColorPickerSwatchTrigger, {
              value: _v0.colorValue,
              "data-active": _v6(_v0.colorValue) ? "true" : void 0,
              "data-state": _v6(_v0.colorValue) ? "checked" : "unchecked",
              onClick: () => {
                _v0?.({
                  value: _v0.colorValue,
                  type: _v19.ColorType.SOLID,
                  index: _v1
                }), _v1(_v0.colorValue);
              },
              children: (0, _v1.jsx)(_v4.ColorPickerSwatch, {
                style: {
                  width: (0, _v2.rem)(22),
                  height: (0, _v2.rem)(22)
                },
                value: _v0.colorValue
              })
            })
          })
        }, `${_v0.colorName}-${_v0.colorValue}`))
      }) : (0, _v1.jsx)(_v7.Text, {
        variant: "body-sm",
        children: (0, _v14.translate)({
          singular: "No colors available in this list",
          dictionary: {
            es: {
              singular: "No hay colores disponibles en esta lista"
            },
            "de-DE": {
              singular: "Keine Farben in dieser Liste verfügbar"
            },
            "fr-FR": {
              singular: "Aucune couleur n'est disponible dans cette liste"
            },
            "ja-JP": {
              singular: "このリストには利用可能な色がありません"
            },
            "ko-KR": {
              singular: "이 목록에는 사용할 수 있는 색상이 없습니다."
            },
            "pt-BR": {
              singular: "Não há cores disponíveis nesta lista"
            },
            "zh-CN": {
              singular: "此列表中没有可用的颜色"
            }
          }
        })
      })]
    });
  }
  var _v21 = _v0.i(0);
  function _v22({
    onClick: _v0,
    currentColor: _v1 = _v16.DEFAULT_BRANDING_COLOR,
    isSelected: _v2
  }) {
    return (0, _v1.jsx)(_v10.Tooltip, {
      label: (0, _v14.translate)({
        singular: "Choose custom color",
        dictionary: {
          es: {
            singular: "Elija un color personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Farbe auswählen"
          },
          "fr-FR": {
            singular: "Choisir une couleur personnalisée"
          },
          "ja-JP": {
            singular: "カスタムカラーを選択"
          },
          "ko-KR": {
            singular: "커스텀 색상 선택"
          },
          "pt-BR": {
            singular: "Escolher cor customizada"
          },
          "zh-CN": {
            singular: "选择自定义颜色"
          }
        }
      }),
      placement: "top",
      children: (0, _v1.jsx)(_v11.Box, {
        children: (0, _v1.jsx)(_v21.Center, {
          borderRadius: "round",
          width: (0, _v2.rem)(25),
          height: (0, _v2.rem)(25),
          background: _v2 ? "transparent" : "linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",
          onClick: _v0,
          cursor: "pointer",
          sx: {
            "&:hover": {
              background: "transparent",
              borderWidth: "2px",
              borderColor: "input-stroke-hover"
            },
            ...(_v2 && {
              borderColor: "focus-alt",
              borderWidth: "2px"
            })
          },
          children: (0, _v1.jsx)(_v21.Center, {
            width: (0, _v2.rem)(21),
            height: (0, _v2.rem)(21),
            borderRadius: "round",
            background: _v2 ? "transparent" : "fill-blur",
            sx: {
              "&:hover": {
                background: "transparent"
              }
            },
            children: (0, _v1.jsx)(_v21.Center, {
              width: (0, _v2.rem)(17),
              height: (0, _v2.rem)(17),
              borderRadius: "round",
              background: _v1
            })
          })
        })
      })
    });
  }
  _v0.s(["BrandKitSwatches", 0, function ({
    brandCenterUrl: _v0,
    onClickAddColor: _v1,
    brandKits: _v2,
    colors: _v3,
    isOrganization: _v4,
    isLocked: _v5,
    handleOpenUpsellModal: _v6,
    canUpsell: _v7,
    canEdit: _v8,
    selectedBrandKit: _v9,
    setSelectedBrandKit: _v10,
    currentColor: _v11,
    isTeamOwner: _v12,
    onChangeAdditionalColors: _v13,
    onColorClick: _v14,
    setCurrentColor: _v15,
    currentColorType: _v16,
    currentCustomColor: _v17,
    useSolidAndGradientColors: _v18
  }) {
    let _v19 = _v0 => _v16 === _v19.ColorType.BRAND && _v11.toLowerCase() === _v0.toLowerCase();
    return (0, _v1.jsxs)(_v6.Flex, {
      direction: "column",
      gap: "sm",
      width: "208px",
      children: [_v2?.length ? (0, _v1.jsxs)(_v6.Flex, {
        gap: "xs",
        flexDir: "column",
        maxHeight: (0, _v2.rem)(200),
        overflowY: "auto",
        overflowX: "hidden",
        marginBottom: "sm",
        sx: {
          "::-webkit-scrollbar": {
            width: (0, _v2.rem)(6),
            backgroundColor: "transparent"
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: (0, _v2.rem)(50),
            background: "fill-component",
            filter: "opacity(30%)"
          }
        },
        children: [(0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v18, {
            handleSelect: _v0 => {
              _v10(_v0);
            },
            items: _v2,
            selectedItem: _v9
          }), _v8 && (0, _v1.jsx)(_v8.Button, {
            className: "edit-button",
            size: "xs",
            variant: "secondary",
            paddingX: "sm",
            leftIcon: (0, _v1.jsx)(_v12.PopOut, {}),
            onClick: () => {
              window.open(_v0, "_blank");
            },
            children: (0, _v14.translate)({
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
        }), _v3?.length || _v8 ? (0, _v1.jsxs)(_v4.ColorPickerSwatchGroup, {
          style: {
            flexWrap: "wrap",
            gap: "sm"
          },
          children: [_v3?.map((_v0, _v1) => (0, _v1.jsx)(_v10.Tooltip, {
            label: _v0.name,
            children: (0, _v1.jsx)(_v11.Box, {
              paddingLeft: "xs",
              paddingBottom: "xs",
              children: (0, _v1.jsx)(_v4.ColorPickerSwatchTrigger, {
                value: _v0.hex,
                onClick: () => _v14?.(_v0),
                "data-active": _v19(_v0.hex) ? "true" : void 0,
                "data-state": _v19(_v0.hex) ? "checked" : "unchecked",
                children: (0, _v1.jsx)(_v4.ColorPickerSwatch, {
                  style: {
                    width: (0, _v2.rem)(22),
                    height: (0, _v2.rem)(22)
                  },
                  value: _v0.hex,
                  "data-active": _v19(_v0.hex) ? "true" : void 0,
                  "data-state": _v19(_v0.hex) ? "checked" : "unchecked"
                })
              })
            })
          }, _v1)), _v8 && !(_v4 && _v5) && (0, _v1.jsx)(_v10.Tooltip, {
            label: (0, _v14.translate)({
              singular: "Add brand color",
              dictionary: {
                es: {
                  singular: "Agregue el color de la marca"
                },
                "de-DE": {
                  singular: "Markenfarbe hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter une couleur de marque"
                },
                "ja-JP": {
                  singular: "ブランドカラーを追加"
                },
                "ko-KR": {
                  singular: "브랜드 색상 추가"
                },
                "pt-BR": {
                  singular: "Adicionar cor da marca"
                },
                "zh-CN": {
                  singular: "添加品牌颜色"
                }
              }
            }),
            children: (0, _v1.jsx)(_v9.IconButton, {
              size: "xs",
              variant: "secondary",
              borderRadius: "round",
              padding: "0",
              icon: (0, _v1.jsx)(_v13.PlusSmall, {}),
              "aria-label": "Add brand color",
              onClick: () => _v1(!0)
            })
          })]
        }) : _v12 && _v7 ? (0, _v1.jsxs)(_v6.Flex, {
          flexDir: "column",
          gap: "sm",
          children: [(0, _v1.jsx)(_v7.Text, {
            variant: "body-sm",
            children: (0, _v14.translate)({
              singular: "Create a shared color library to reuse across all your videos",
              dictionary: {
                es: {
                  singular: "Cree una biblioteca de colores compartida para reutilizarla en todos sus videos"
                },
                "de-DE": {
                  singular: "Erstellen einer gemeinsamen Farbbibliothek, die in allen Ihren Videos wiederverwendet werden kann"
                },
                "fr-FR": {
                  singular: "Créez une bibliothèque de couleurs partagée que vous pourrez réutiliser dans toutes vos vidéos"
                },
                "ja-JP": {
                  singular: "すべての動画で再利用するための共有カラーライブラリを作成"
                },
                "ko-KR": {
                  singular: "모든 동영상에서 재사용할 공유 색상 라이브러리 만들기"
                },
                "pt-BR": {
                  singular: "Crie uma biblioteca de cores compartilhada para reutilizar em todos os seus vídeos"
                },
                "zh-CN": {
                  singular: "创建一个共享颜色库，以便在所有视频中重复使用"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Button, {
            size: "xs",
            width: "fit-content",
            variant: "upsell",
            onClick: _v6,
            children: (0, _v14.translate)({
              singular: "Upgrade to Team",
              dictionary: {
                es: {
                  singular: "Actualizar a Team"
                },
                "de-DE": {
                  singular: "Auf Team upgraden"
                },
                "fr-FR": {
                  singular: "Passer à Team"
                },
                "ja-JP": {
                  singular: "チームにアップグレード"
                },
                "ko-KR": {
                  singular: "팀으로 업그레이드"
                },
                "pt-BR": {
                  singular: "Fazer upgrade para a equipe"
                },
                "zh-CN": {
                  singular: "升级到 Team"
                }
              }
            })
          })]
        }) : (0, _v1.jsx)(_v7.Text, {
          variant: "body-sm",
          height: (0, _v2.rem)(31),
          children: (0, _v14.translate)({
            singular: "Ask your admin to add colors to reuse across all your videos",
            dictionary: {
              es: {
                singular: "Pídale a su administrador que agregue colores para reutilizarlos en todos sus videos"
              },
              "de-DE": {
                singular: "Bitten Sie Ihren Admin, Farben hinzuzufügen, die Sie in allen Ihren Videos wiederverwenden können"
              },
              "fr-FR": {
                singular: "Demandez à votre administrateur d'ajouter des couleurs que vous pourrez réutiliser dans toutes vos vidéos"
              },
              "ja-JP": {
                singular: "すべての動画で再利用できるように管理者に色の追加を依頼"
              },
              "ko-KR": {
                singular: "관리자에게 모든 동영상에 재사용할 색상을 추가해달라고 요청합니다."
              },
              "pt-BR": {
                singular: "Peça ao seu administrador para adicionar cores para reutilizar em todos os seus vídeos"
              },
              "zh-CN": {
                singular: "请让您的管理员添加颜色，以便在所有视频中重复使用"
              }
            }
          })
        })]
      }) : _v12 && (0, _v1.jsxs)(_v6.Flex, {
        gap: "sm",
        flexDir: "column",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          alignItems: "baseline",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v7.Text, {
            variant: "heading-xs",
            children: (0, _v14.translate)({
              singular: "Brand kit",
              dictionary: {
                es: {
                  singular: "Kit de marca"
                },
                "de-DE": {
                  singular: "Brand Kit"
                },
                "fr-FR": {
                  singular: "Kit de marque"
                },
                "ja-JP": {
                  singular: "ブランドキット"
                },
                "ko-KR": {
                  singular: "브랜드 키트"
                },
                "pt-BR": {
                  singular: "Kit de marca"
                },
                "zh-CN": {
                  singular: "品牌工具包"
                }
              }
            })
          }), _v8 && (0, _v1.jsx)(_v10.Tooltip, {
            label: (0, _v14.translate)({
              singular: "Create kit",
              dictionary: {
                es: {
                  singular: "Crear kit"
                },
                "de-DE": {
                  singular: "Kit erstellen"
                },
                "fr-FR": {
                  singular: "Créer un kit"
                },
                "ja-JP": {
                  singular: "キットを作成"
                },
                "ko-KR": {
                  singular: "키트 만들기"
                },
                "pt-BR": {
                  singular: "Criar kit"
                },
                "zh-CN": {
                  singular: "创建工具包"
                }
              }
            }),
            placement: "top",
            mt: "sm",
            children: (0, _v1.jsx)(_v9.IconButton, {
              "aria-label": "Create kit",
              variant: "secondary",
              icon: (0, _v1.jsx)(_v13.PlusSmall, {}),
              size: "xs",
              onClick: () => {
                window.open(_v0, "_blank");
              }
            })
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          flexDir: "column",
          gap: "sm",
          children: [(0, _v1.jsx)(_v7.Text, {
            variant: "body-sm",
            children: (0, _v14.translate)({
              singular: "Create a shared color library to reuse across all your videos",
              dictionary: {
                es: {
                  singular: "Cree una biblioteca de colores compartida para reutilizarla en todos sus videos"
                },
                "de-DE": {
                  singular: "Erstellen einer gemeinsamen Farbbibliothek, die in allen Ihren Videos wiederverwendet werden kann"
                },
                "fr-FR": {
                  singular: "Créez une bibliothèque de couleurs partagée que vous pourrez réutiliser dans toutes vos vidéos"
                },
                "ja-JP": {
                  singular: "すべての動画で再利用するための共有カラーライブラリを作成"
                },
                "ko-KR": {
                  singular: "모든 동영상에서 재사용할 공유 색상 라이브러리 만들기"
                },
                "pt-BR": {
                  singular: "Crie uma biblioteca de cores compartilhada para reutilizar em todos os seus vídeos"
                },
                "zh-CN": {
                  singular: "创建一个共享颜色库，以便在所有视频中重复使用"
                }
              }
            })
          }), _v7 && !_v8 && (0, _v1.jsx)(_v8.Button, {
            size: "xs",
            width: "fit-content",
            variant: "upsell",
            onClick: _v6,
            children: (0, _v14.translate)({
              singular: "Upgrade to Team",
              dictionary: {
                es: {
                  singular: "Actualizar a Team"
                },
                "de-DE": {
                  singular: "Auf Team upgraden"
                },
                "fr-FR": {
                  singular: "Passer à Team"
                },
                "ja-JP": {
                  singular: "チームにアップグレード"
                },
                "ko-KR": {
                  singular: "팀으로 업그레이드"
                },
                "pt-BR": {
                  singular: "Fazer upgrade para a equipe"
                },
                "zh-CN": {
                  singular: "升级到 Team"
                }
              }
            })
          })]
        })]
      }), _v18 && (0, _v1.jsx)(_v20, {
        onChangeAdditionalColors: _v13,
        setCurrentColor: _v15,
        currentColor: _v11,
        currentColorType: _v16
      }), (_v2?.length || _v12 || _v18) && (0, _v1.jsx)(_v5.Divider, {
        orientation: "horizontal",
        borderColor: "stroke"
      }), (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        gap: "sm",
        children: [(0, _v1.jsx)(_v22, {
          currentColor: _v17,
          onClick: () => _v1(!1),
          isSelected: _v16 === _v19.ColorType.CUSTOM
        }), (0, _v1.jsx)(_v3.Input, {
          size: "sm",
          isReadOnly: !0,
          value: _v17
        })]
      })]
    });
  }], 0);
  var _v23 = _v0.i(0);
  _v0.s(["CustomColorPicker", 0, function ({
    onSave: _v0,
    onCancel: _v1,
    isAddingBrandColor: _v2,
    brandKitName: _v3,
    isLoading: _v4
  }) {
    return (0, _v1.jsxs)(_v6.Flex, {
      gap: "3",
      flexDir: "column",
      children: [_v2 && (0, _v1.jsx)(_v7.Text, {
        textAlign: "start",
        variant: "heading-xs",
        children: (0, _v14.translate)({
          singular: "Add color to ",
          dictionary: {
            es: {
              singular: "Agregar color a "
            },
            "de-DE": {
              singular: "Farbe hinzufügen zu "
            },
            "fr-FR": {
              singular: "Ajouter de la couleur à "
            },
            "ja-JP": {
              singular: "色の次に追加： "
            },
            "ko-KR": {
              singular: "다음에 색상 추가 "
            },
            "pt-BR": {
              singular: "Adicionar cor a "
            },
            "zh-CN": {
              singular: "添加颜色到 "
            }
          }
        }) + _v3
      }), (0, _v1.jsx)(_v4.ColorPickerArea, {}), (0, _v1.jsx)(_v23.Grid, {
        gap: "200",
        children: (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          gap: "200",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v4.ColorPickerChannelSlider, {
            channel: "hue",
            children: [(0, _v1.jsx)(_v4.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v4.ColorPickerChannelSliderThumb, {})]
          })
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        gap: "3",
        height: "sm",
        children: [(0, _v1.jsx)(_v4.ColorPickerChannelInput, {
          channel: "hex"
        }), (0, _v1.jsx)(_v4.ColorPickerEyeDropperTrigger, {
          style: {
            paddingRight: "sm",
            paddingLeft: "sm"
          },
          size: "sm"
        })]
      }), _v2 && (0, _v1.jsxs)(_v6.Flex, {
        gap: "sm",
        children: [(0, _v1.jsx)(_v8.Button, {
          size: "sm",
          variant: "secondary",
          width: "50%",
          onClick: _v1,
          children: (0, _v14.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Button, {
          isLoading: _v4,
          size: "sm",
          variant: "primary",
          width: "50%",
          onClick: _v0,
          children: (0, _v14.translate)({
            singular: "Add",
            dictionary: {
              es: {
                singular: "Agregar"
              },
              "de-DE": {
                singular: "Hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter"
              },
              "ja-JP": {
                singular: "追加"
              },
              "ko-KR": {
                singular: "추가"
              },
              "pt-BR": {
                singular: "Adicionar"
              },
              "zh-CN": {
                singular: "添加"
              }
            }
          })
        })]
      })]
    });
  }], 0);
}