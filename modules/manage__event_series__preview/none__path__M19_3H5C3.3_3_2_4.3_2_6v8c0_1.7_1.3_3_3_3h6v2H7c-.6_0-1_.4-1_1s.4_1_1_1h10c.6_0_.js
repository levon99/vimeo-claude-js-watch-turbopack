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
    _v14 = _v0.i(0);
  let _v15 = _v0 => (0, _v1.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19 3H5C3.3 3 2 4.3 2 6v8c0 1.7 1.3 3 3 3h6v2H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1h-4v-2h6c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3Z",
      fill: "currentColor"
    })
  });
  var _v16 = _v0.i(0);
  let _v17 = _v0 => (0, _v1.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 2h8c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3Zm3.569 13.54a1.5 1.5 0 0 1 .733-.03l.053.011.21.094c.098.036.19.083.276.141l.016.011.187.15.02.02c.133.134.24.292.315.465l.002.004a1.5 1.5 0 0 1-.315 1.635l-.012.012-.013.011a1.96 1.96 0 0 1-.443.296l-.014.007-.016.006a1.5 1.5 0 0 1-1.95-1.965c.073-.175.175-.335.302-.474l.008-.01.01-.008a1.5 1.5 0 0 1 .63-.375Z",
      fill: "currentColor"
    })
  });
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = (0, _v11.rem)(16);
  _v0.s(["PreviewControlBar", 0, ({
    previewMode: _v0,
    onPreviewModeChange: _v1,
    viewUrl: _v2,
    previewLocale: _v3,
    onPreviewLocaleChange: _v4,
    availableLocales: _v5,
    onViewPage: _v6
  }) => {
    let _v7 = (0, _v22.useLocale)();
    return (0, _v1.jsxs)(_v4.Flex, {
      align: "center",
      backgroundColor: "fill-surface",
      borderBottom: "1px solid",
      borderColor: "stroke",
      gap: "md",
      p: (0, _v11.rem)(8),
      children: [_v5.length > 1 ? (0, _v1.jsxs)(_v6.Menu, {
        children: [(0, _v1.jsx)(_v7.MenuButton, {
          as: _v2.Button,
          leftIcon: (0, _v1.jsx)(_v19.Translate, {}),
          rightIcon: (0, _v1.jsx)(_v12.ChevronDownSmall, {}),
          size: "sm",
          variant: "secondary",
          children: (0, _v21.getLocaleLabel)(_v3, _v7)
        }), (0, _v1.jsx)(_v9.MenuList, {
          children: _v5.map(_v0 => (0, _v1.jsx)(_v8.MenuItem, {
            onClick: () => _v4(_v0),
            children: (0, _v21.getLocaleLabel)(_v0, _v7)
          }, _v0))
        })]
      }) : null, (0, _v1.jsxs)(_v4.Flex, {
        align: "center",
        gap: "md",
        ml: "auto",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          align: "center",
          gap: "xs",
          children: [(0, _v1.jsx)(_v10.Tooltip, {
            label: (0, _v20.translate)({
              singular: "Desktop preview",
              dictionary: {
                es: {
                  singular: "Vista previa de escritorio"
                },
                "de-DE": {
                  singular: "Desktop-Vorschau"
                },
                "fr-FR": {
                  singular: "Aperçu du bureau"
                },
                "ja-JP": {
                  singular: "デスクトッププレビュー"
                },
                "ko-KR": {
                  singular: "데스크톱 미리보기"
                },
                "pt-BR": {
                  singular: "Pré-visualização de desktop"
                },
                "zh-CN": {
                  singular: "桌面预览"
                }
              }
            }),
            children: (0, _v1.jsx)(_v5.IconButton, {
              "aria-label": (0, _v20.translate)({
                singular: "Desktop preview",
                dictionary: {
                  es: {
                    singular: "Vista previa de escritorio"
                  },
                  "de-DE": {
                    singular: "Desktop-Vorschau"
                  },
                  "fr-FR": {
                    singular: "Aperçu du bureau"
                  },
                  "ja-JP": {
                    singular: "デスクトッププレビュー"
                  },
                  "ko-KR": {
                    singular: "데스크톱 미리보기"
                  },
                  "pt-BR": {
                    singular: "Pré-visualização de desktop"
                  },
                  "zh-CN": {
                    singular: "桌面预览"
                  }
                }
              }),
              icon: "web" === _v0 ? (0, _v1.jsx)(_v15, {}) : (0, _v1.jsx)(_v13.Desktop, {}),
              isActive: "web" === _v0,
              onClick: () => _v1("web"),
              size: "sm",
              variant: "tertiary"
            })
          }), (0, _v1.jsx)(_v10.Tooltip, {
            label: (0, _v20.translate)({
              singular: "Mobile preview",
              dictionary: {
                es: {
                  singular: "Vista previa móvil"
                },
                "de-DE": {
                  singular: "Mobile Vorschau"
                },
                "fr-FR": {
                  singular: "Aperçu mobile"
                },
                "ja-JP": {
                  singular: "モバイルプレビュー"
                },
                "ko-KR": {
                  singular: "모바일 미리보기"
                },
                "pt-BR": {
                  singular: "Pré-visualização móvel"
                },
                "zh-CN": {
                  singular: "移动预览"
                }
              }
            }),
            children: (0, _v1.jsx)(_v5.IconButton, {
              "aria-label": (0, _v20.translate)({
                singular: "Mobile preview",
                dictionary: {
                  es: {
                    singular: "Vista previa móvil"
                  },
                  "de-DE": {
                    singular: "Mobile Vorschau"
                  },
                  "fr-FR": {
                    singular: "Aperçu mobile"
                  },
                  "ja-JP": {
                    singular: "モバイルプレビュー"
                  },
                  "ko-KR": {
                    singular: "모바일 미리보기"
                  },
                  "pt-BR": {
                    singular: "Pré-visualização móvel"
                  },
                  "zh-CN": {
                    singular: "移动预览"
                  }
                }
              }),
              icon: "mobile" === _v0 ? (0, _v1.jsx)(_v17, {}) : (0, _v1.jsx)(_v16.MobilePhone, {}),
              isActive: "mobile" === _v0,
              onClick: () => _v1("mobile"),
              size: "sm",
              variant: "tertiary"
            })
          })]
        }), (0, _v1.jsx)(_v3.Divider, {
          borderColor: "stroke",
          height: _v23,
          orientation: "vertical"
        }), (0, _v1.jsx)(_v10.Tooltip, {
          label: (0, _v20.translate)({
            singular: "View page",
            dictionary: {
              es: {
                singular: "Ver página"
              },
              "de-DE": {
                singular: "Seite ansehen"
              },
              "fr-FR": {
                singular: "Voir la page"
              },
              "ja-JP": {
                singular: "ページを表示"
              },
              "ko-KR": {
                singular: "페이지 보기"
              },
              "pt-BR": {
                singular: "Ver página"
              },
              "zh-CN": {
                singular: "查看页面"
              }
            }
          }),
          children: (0, _v1.jsx)(_v5.IconButton, {
            "aria-label": (0, _v20.translate)({
              singular: "View page",
              dictionary: {
                es: {
                  singular: "Ver página"
                },
                "de-DE": {
                  singular: "Seite ansehen"
                },
                "fr-FR": {
                  singular: "Voir la page"
                },
                "ja-JP": {
                  singular: "ページを表示"
                },
                "ko-KR": {
                  singular: "페이지 보기"
                },
                "pt-BR": {
                  singular: "Ver página"
                },
                "zh-CN": {
                  singular: "查看页面"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v18.PopOut, {}),
            isDisabled: !_v2,
            onClick: () => {
              _v2 && (_v6?.(), window.open(_v2, "_blank", "noopener,noreferrer"));
            },
            size: "sm",
            variant: "tertiary"
          })
        })]
      })]
    });
  }], 0);
  var _v24 = _v0.i(0);
  _v0.s(["EmptyStatePlaceholder", 0, ({
    message: _v0
  }) => (0, _v1.jsx)(_v4.Flex, {
    align: "center",
    backgroundColor: "fill-component",
    borderRadius: "md",
    justify: "center",
    minHeight: (0, _v11.rem)(160),
    padding: "lg",
    children: (0, _v1.jsx)(_v24.Text, {
      color: "text-secondary",
      textAlign: "center",
      variant: "body-md",
      children: _v0
    })
  })], 0);
}