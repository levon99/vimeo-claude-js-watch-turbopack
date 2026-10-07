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
    _v16 = _v0.i(0);
  _v0.s(["AutoCc", 0, function ({
    value: _v0 = !1,
    language: _v1 = null,
    isDisabled: _v2 = !1,
    isLocked: _v3 = !1,
    isLoading: _v4 = !1,
    location: _v5 = _v15.ESettingsLocation.Wizard,
    showUpsell: _v6 = !1,
    disabledTip: _v7,
    onChange: _v8
  }) {
    let _v9 = _v2 || _v3,
      _v10 = (0, _v2.useMemo)(() => _v1 ? _v14.AutoCcOptions.find(_v0 => _v0.value === _v1) ?? null : null, [_v1]),
      _v11 = (0, _v2.useMemo)(() => [..._v14.AutoCcOptions].sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)).map(_v0 => ({
        label: `${_v0.label} - ${_v0.nativeName}`,
        value: _v0.value
      })), []),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v8({
          enabled: _v0,
          language: _v10?.value ?? null
        });
      }, [_v8, _v10]),
      _v13 = (0, _v2.useCallback)(_v0 => {
        _v8({
          language: _v0,
          enabled: _v0
        });
      }, [_v0, _v8]),
      _v14 = (0, _v13.translate)({
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v8.Text, {
            variant: "body-xl",
            as: "a",
            fontSize: "sm",
            textDecoration: "underline",
            href: _v14.AUTO_CC_ZENDESK_LINK,
            target: "_blank",
            sx: {
              textWrap: "nowrap"
            },
            children: _v0
          }, "captions-will-show")
        },
        singular: "Captions will not show in the stream preview but are available to viewers. {LINK}Learn more{/LINK}",
        dictionary: {
          es: {
            singular: "Los subtítulos no se mostrarán en la vista previa de la transmisión, pero están disponibles para los espectadores. {LINK}Más información{/LINK}"
          },
          "de-DE": {
            singular: "Untertitel werden in der Stream‑Vorschau nicht angezeigt, sind aber für Zuschauer verfügbar. {LINK}Mehr erfahren{/LINK}"
          },
          "fr-FR": {
            singular: "Les sous‑titres ne s'afficheront pas dans l'aperçu du stream mais sont disponibles pour les spectateurs. {LINK}En savoir plus{/LINK}"
          },
          "ja-JP": {
            singular: "キャプションは配信プレビューには表示されませんが、視聴者は利用できます。{LINK}詳細はこちら{/LINK}"
          },
          "ko-KR": {
            singular: "자막은 스트림 미리보기에는 표시되지 않지만 시청자는 이용할 수 있습니다. {LINK}자세히 알아보기{/LINK}"
          },
          "pt-BR": {
            singular: "As legendas não aparecerão na pré-visualização da transmissão, mas estão disponíveis para os espectadores. {LINK}Saiba mais{/LINK}"
          },
          "zh-CN": {
            singular: "字幕不会显示在流预览中，但观众可以使用。{LINK}了解更多{/LINK}"
          }
        }
      });
    (0, _v2.useEffect)(() => {
      _v2 && _v0 && _v12(!1);
    }, [_v2, _v3, _v0, _v12]);
    let _v15 = _v0 && (_v3 || !_v2) ? (0, _v1.jsxs)(_v5.Box, {
        padding: _v5 === _v15.ESettingsLocation.Settings ? 0 : `${(0, _v4.rem)(12)} 0 ${(0, _v4.rem)(2)}`,
        sx: {
          '& [role="listbox"]': {
            maxHeight: "160px"
          }
        },
        children: [(0, _v1.jsxs)(_v8.Text, {
          variant: "heading-xs",
          marginBottom: (0, _v4.rem)(4),
          children: [(0, _v13.translate)({
            singular: "Auto-captions language",
            dictionary: {
              es: {
                singular: "Idioma de subtítulos automáticos"
              },
              "de-DE": {
                singular: "Sprache der automatischen Untertitel"
              },
              "fr-FR": {
                singular: "Langue des sous-titres automatiques"
              },
              "ja-JP": {
                singular: "自動キャプションの言語"
              },
              "ko-KR": {
                singular: "자동 자막 언어"
              },
              "pt-BR": {
                singular: "Idioma das legendas automáticas"
              },
              "zh-CN": {
                singular: "自动字幕语言"
              }
            }
          }), "*"]
        }), (0, _v1.jsx)(_v11.Select, {
          id: "autocc-language-select",
          size: _v5 === _v15.ESettingsLocation.Settings ? "sm" : "md",
          items: _v11,
          value: _v10?.value ? [_v10.value] : [],
          placeholder: (0, _v13.translate)({
            singular: "Select language",
            dictionary: {
              es: {
                singular: "Seleccionar el idioma"
              },
              "de-DE": {
                singular: "Sprache aussuchen"
              },
              "fr-FR": {
                singular: "Sélectionner la langue"
              },
              "ja-JP": {
                singular: "言語を選択"
              },
              "ko-KR": {
                singular: "언어 선택"
              },
              "pt-BR": {
                singular: "Selecione o idioma"
              },
              "zh-CN": {
                singular: "选择语言"
              }
            }
          }),
          variant: "withCheck",
          withPortal: !1,
          disabled: _v9,
          onValueChange: _v0 => {
            _v13(_v0.value[0]);
          },
          children: _v0 => (0, _v1.jsx)(_v11.SelectItem, {
            item: _v0,
            children: (0, _v1.jsx)(_v11.SelectItemText, {
              children: _v0.label
            })
          })
        })]
      }) : null,
      _v16 = _v5 === _v15.ESettingsLocation.Settings ? (0, _v1.jsx)(_v6.Paragraph, {
        size: "sm",
        margin: 0,
        color: "text-secondary",
        children: _v14
      }) : null,
      _v17 = (0, _v2.useCallback)(() => {
        window.open("https://vimeo.com/enterprise/contact-us?mkc=auto_cc", "_blank");
      }, []);
    return (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: _v5 === _v15.ESettingsLocation.Settings ? "md" : void 0,
      "data-testid": "auto-cc-settings",
      children: [_v16, (0, _v1.jsxs)(_v10.FormLabel, {
        display: "flex",
        color: "text-primary",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        htmlFor: "autocc-toggle",
        marginBottom: 0,
        children: [(0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v4.rem)(12),
          flexGrow: 1,
          children: [_v5 === _v15.ESettingsLocation.Wizard ? (0, _v1.jsx)(_v12.Captions, {
            boxSize: 20
          }) : null, (0, _v1.jsx)(_v8.Text, {
            color: "text-primary",
            variant: "heading-xs",
            children: (0, _v13.translate)({
              singular: "Auto-captions",
              dictionary: {
                es: {
                  singular: "Subtítulos automáticos"
                },
                "de-DE": {
                  singular: "Automatische Untertitel"
                },
                "fr-FR": {
                  singular: "Sous-titres automatiques"
                },
                "ja-JP": {
                  singular: "自動キャプション"
                },
                "ko-KR": {
                  singular: "자동 자막"
                },
                "pt-BR": {
                  singular: "Legendas automáticas"
                },
                "zh-CN": {
                  singular: "自动字幕"
                }
              }
            })
          }), _v6 ? (0, _v1.jsx)(_v7.Badge, {
            size: "sm",
            variant: "upgrade",
            onClick: _v17,
            cursor: "pointer",
            children: (0, _v13.translate)({
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
          }) : null]
        }), (0, _v1.jsx)(_v16.BokehTooltip, {
          label: _v7,
          maxWidth: (0, _v4.rem)(300),
          isDisabled: !_v9 || !_v7,
          children: (0, _v1.jsx)(_v9.Switch, {
            id: "autocc-toggle",
            isDisabled: _v9 || _v4,
            size: _v5 === _v15.ESettingsLocation.Settings ? "md" : "sm",
            isChecked: _v3 ? _v0 : _v0 && !_v2,
            onChange: () => _v12(!_v0)
          })
        })]
      }), _v15]
    });
  }]);
}