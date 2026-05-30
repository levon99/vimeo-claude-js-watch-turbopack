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
  let _v18 = ["nobody", "password", "unlisted", "anybody", "embed_only", "disable", "team"];
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ({
    option: _v0,
    isSelected: _v1,
    isRedirectUpsell: _v2 = !0,
    onUpsellClick: _v3,
    showDescription: _v4 = !0,
    showReservedSpaceForSelect: _v5 = !0
  }) => (0, _v1.jsxs)(_v21.Link, {
    onClick: () => _v0.showUpsell && _v0.upsellEvent && _v3?.(_v0.upsellEvent),
    href: _v0.showUpsell && _v2 ? "/upgrade" : void 0,
    target: "_blank",
    display: "flex",
    gap: (0, _v22.rem)(6),
    flexGrow: 1,
    alignItems: "center",
    variant: "secondary",
    color: "text-primary !important",
    "data-testid": `privacy-option-${_v0.privacy}-content`,
    children: [_v0.icon && (0, _v1.jsx)(_v20.Center, {
      w: "xs",
      children: _v0.icon
    }), (0, _v1.jsxs)(_v6.Flex, {
      flex: "1",
      direction: "column",
      gap: "0",
      children: [(0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        gap: "2",
        children: [(0, _v1.jsx)(_v13.Text, {
          variant: "placeholder" !== _v0.privacy ? "heading-xs" : "body-md",
          children: _v0.title
        }), _v0.showUpsell && (0, _v1.jsx)(_v24.UpgradeBadge, {
          style: {
            width: 55,
            height: 20,
            fontSize: 10
          },
          noMargin: !0,
          name: "privacy_dropdown_upgrade_button",
          location: "privacy_dropdown"
        })]
      }), _v0.description && _v4 && (0, _v1.jsx)(_v13.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v0.description
      })]
    }), _v1 && (0, _v1.jsx)(_v23.CheckSmall, {
      color: "text-primary"
    }), _v5 && !_v1 && (0, _v1.jsx)(_v20.Center, {
      w: "xs"
    })]
  });
  var _v26 = _v0.i(0);
  let _v27 = ({
    option: _v0,
    isActive: _v1,
    showChevron: _v2 = !0,
    showDescription: _v3 = !0,
    onlyView: _v4,
    variant: _v5 = "default"
  }) => (0, _v1.jsxs)(_v20.Center, {
    gap: (0, _v22.rem)(6),
    pl: _v4 ? "0" : "md",
    pr: _v4 ? "0" : "sm",
    py: "sm",
    borderRadius: "md",
    ...(!(_v4 || "outlined" === _v5) && {
      backgroundColor: "whiteAlpha.700",
      _dark: {
        backgroundColor: "gray.700"
      }
    }),
    children: [(0, _v1.jsx)(_v25, {
      option: _v0,
      isSelected: !1,
      showDescription: _v3,
      showReservedSpaceForSelect: !1
    }), _v2 && (0, _v1.jsx)(_v20.Center, {
      w: "xs",
      children: _v1 ? (0, _v1.jsx)(_v26.ChevronUp, {
        boxSize: "2xs"
      }) : (0, _v1.jsx)(_v15.ChevronDown, {
        boxSize: "2xs"
      })
    })]
  });
  _v0.s(["SelectedPrivacyOption", 0, _v27], 0);
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
      isOpen: _v0,
      onClose: _v1,
      onSelect: _v2,
      selectedPrivacy: _v3,
      activePrivacyOption: _v4
    }) => (0, _v1.jsxs)(_v30.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v33.ModalOverlay, {}), (0, _v1.jsx)(_v32.ModalContent, {
        children: (0, _v1.jsxs)(_v31.ModalBody, {
          padding: (0, _v22.rem)(24),
          children: [(0, _v1.jsx)(_v5.Box, {
            paddingBottom: (0, _v22.rem)(24),
            children: (0, _v1.jsx)(_v29.Header, {
              size: "md",
              "data-testid": "upsell-change-modal-header",
              children: (0, _v16.translate)({
                singular: "Update link privacy to {PRIVACY}",
                replacements: {
                  PRIVACY: _v3.title
                },
                dictionary: {
                  es: {
                    singular: "Actualice la privacidad del enlace a {PRIVACY}"
                  },
                  "de-DE": {
                    singular: "Link-Datenschutz auf {PRIVACY} aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mise à jour de la confidentialité du lien vers {PRIVACY}"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシーを{PRIVACY}に更新"
                  },
                  "ko-KR": {
                    singular: "{PRIVACY}(으)로 링크 프라이버시를 업데이트하세요."
                  },
                  "pt-BR": {
                    singular: "Atualizar a privacidade do link para {PRIVACY}"
                  },
                  "zh-CN": {
                    singular: "将链接隐私设置更新为 {PRIVACY}"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v34.Paragraph, {
              size: "md",
              "data-testid": "upsell-change-modal-description",
              children: (0, _v16.translate)({
                singular: "{PRIVACY} now requires a paid plan. If privacy is changed, going back to {PRIVACY} will require an upgrade.",
                replacements: {
                  PRIVACY: _v4.title
                },
                dictionary: {
                  es: {
                    singular: "{PRIVACY} ahora requiere un plan de pago. Si se cambia la privacidad, volver a {PRIVACY} requerirá subir de categoría."
                  },
                  "de-DE": {
                    singular: "{PRIVACY} erfordert jetzt einen kostenpflichtigen Tarif. Wenn die Datenschutzeinstellung geändert wird, ist für die Rückkehr zu {PRIVACY} ein Upgrade erforderlich."
                  },
                  "fr-FR": {
                    singular: "{PRIVACY} nécessite désormais un abonnement payant. Si la confidentialité est modifiée, le retour à {PRIVACY} nécessitera une mise à niveau."
                  },
                  "ja-JP": {
                    singular: "{PRIVACY}には有料プランが必要になりました。プライバシー設定が変更された場合、{PRIVACY}に戻すにはアップグレードが必要です。"
                  },
                  "ko-KR": {
                    singular: "이제 {PRIVACY}을(를) 사용하려면 유료 요금제가 필요합니다. 프라이버시가 변경된 경우 {PRIVACY}(으)로 돌아가려면 업그레이드해야 합니다."
                  },
                  "pt-BR": {
                    singular: "A configuração {PRIVACY} agora requer um plano pago. Se a privacidade for alterada, será necessário fazer upgrade para voltar à configuração {PRIVACY}."
                  },
                  "zh-CN": {
                    singular: "{PRIVACY} 现在需要付费套餐。如果更改了隐私设置，则需要升级才能回到 {PRIVACY}。"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "flex-end",
            gap: (0, _v22.rem)(8),
            paddingTop: (0, _v22.rem)(24),
            children: [(0, _v1.jsx)(_v28.Button, {
              variant: "secondary",
              onClick: _v1,
              "data-testid": "upsell-change-modal-cancel-button",
              children: (0, _v16.translate)({
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
            }), (0, _v1.jsx)(_v28.Button, {
              variant: "primary",
              onClick: () => _v2(_v3.privacy),
              "data-testid": "upsell-change-modal-update-button",
              children: (0, _v16.translate)({
                singular: "Update",
                dictionary: {
                  es: {
                    singular: "Actualizar"
                  },
                  "de-DE": {
                    singular: "Aktualisieren"
                  },
                  "fr-FR": {
                    singular: "Mettre à jour"
                  },
                  "ja-JP": {
                    singular: "アップデート"
                  },
                  "ko-KR": {
                    singular: "업데이트"
                  },
                  "pt-BR": {
                    singular: "Atualizar"
                  },
                  "zh-CN": {
                    singular: "更新"
                  }
                }
              })
            })]
          })]
        })
      })]
    }),
    _v36 = ({
      privacyOptions: _v0,
      activePrivacy: _v1,
      menuListProps: _v2,
      isRedirectUpsell: _v3 = !0,
      onUpsellClick: _v4,
      onSelect: _v5,
      isVideoPrivacy: _v6 = !1
    }) => {
      let {
          settings: _v7
        } = (0, _v17.useOrionSettings)(),
        {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v14.useDisclosure)(),
        [_v11, _v12] = (0, _v2.useState)(void 0),
        _v13 = _v0.find(_v0 => _v0.privacy === _v1),
        _v14 = _v13 && _v1 === _v13.privacy && _v13.showUpsell,
        _v15 = _v0 => {
          let {
              privacy: _v1,
              isDisabled: _v2,
              showUpsell: _v3
            } = _v0,
            _v4 = _v1 === _v1;
          return (0, _v1.jsx)(_v10.MenuItem, {
            "data-testid": `video-privacy-option-${_v1}`,
            onClick: () => {
              !_v2 && !_v3 && (_v14 ? (_v12(_v0.find(_v0 => _v0.privacy === _v1)), _v9()) : _v5(_v1));
            },
            isDisabled: _v2 && !_v3,
            children: (0, _v1.jsx)(_v25, {
              option: _v0,
              isSelected: _v4,
              isRedirectUpsell: !_v0.showUpsellModal && _v3,
              onUpsellClick: _v4
            })
          }, _v1);
        },
        _v16 = _v0.map(_v0 => _v15(_v0)),
        _v17 = [..._v0].sort((_v0, _v1) => _v18.indexOf(_v0.privacy) - _v18.indexOf(_v1.privacy)),
        _v18 = _v17.filter(_v0 => _v0.privacy === _v19.DEFAULT_PRIVACY_VALUES.TEAM || _v0.privacy === _v19.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO || _v0.privacy === _v19.EVENT_PRIVACY_VALUES.HIDE_FROM_VIMEO).map(_v0 => _v15(_v0)),
        _v19 = [(0, _v1.jsx)(_v1.Fragment, {})];
      return _v19 = 0 === _v18.length ? _v17.map(_v0 => _v15(_v0)) : [..._v17.filter(_v0 => _v0.privacy !== _v19.DEFAULT_PRIVACY_VALUES.TEAM && _v0.privacy !== _v19.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO && _v0.privacy !== _v19.EVENT_PRIVACY_VALUES.HIDE_FROM_VIMEO).map(_v0 => _v15(_v0)), (0, _v1.jsx)(_v9.MenuDivider, {}, "menu-divider"), ..._v18], (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v11.MenuList, {
          ..._v2,
          zIndex: 0,
          children: [_v14 && _v13 && (0, _v1.jsx)(_v3.Alert, {
            children: (0, _v1.jsx)(_v4.AlertDescription, {
              children: (0, _v16.translate)({
                singular: "{PRIVACY} now requires a paid plan. If privacy is changed, going back to {PRIVACY} will require an upgrade.",
                replacements: {
                  PRIVACY: _v13.title
                },
                dictionary: {
                  es: {
                    singular: "{PRIVACY} ahora requiere un plan de pago. Si se cambia la privacidad, volver a {PRIVACY} requerirá subir de categoría."
                  },
                  "de-DE": {
                    singular: "{PRIVACY} erfordert jetzt einen kostenpflichtigen Tarif. Wenn die Datenschutzeinstellung geändert wird, ist für die Rückkehr zu {PRIVACY} ein Upgrade erforderlich."
                  },
                  "fr-FR": {
                    singular: "{PRIVACY} nécessite désormais un abonnement payant. Si la confidentialité est modifiée, le retour à {PRIVACY} nécessitera une mise à niveau."
                  },
                  "ja-JP": {
                    singular: "{PRIVACY}には有料プランが必要になりました。プライバシー設定が変更された場合、{PRIVACY}に戻すにはアップグレードが必要です。"
                  },
                  "ko-KR": {
                    singular: "이제 {PRIVACY}을(를) 사용하려면 유료 요금제가 필요합니다. 프라이버시가 변경된 경우 {PRIVACY}(으)로 돌아가려면 업그레이드해야 합니다."
                  },
                  "pt-BR": {
                    singular: "A configuração {PRIVACY} agora requer um plano pago. Se a privacidade for alterada, será necessário fazer upgrade para voltar à configuração {PRIVACY}."
                  },
                  "zh-CN": {
                    singular: "{PRIVACY} 现在需要付费套餐。如果更改了隐私设置，则需要升级才能回到 {PRIVACY}。"
                  }
                }
              })
            })
          }), _v7.privacy_settings_new_copy && _v6 ? _v19 : _v16]
        }), _v11 && _v14 && _v13 && (0, _v1.jsx)(_v35, {
          isOpen: _v8,
          onClose: _v10,
          selectedPrivacy: _v11,
          activePrivacyOption: _v13,
          onSelect: _v0 => {
            _v5(_v0), _v12(void 0);
          }
        })]
      });
    };
  _v0.s(["PrivacyDropdown", 0, ({
    activePrivacy: _v0,
    error: _v1,
    isDisabled: _v2,
    onSelect: _v3,
    onUpsellClick: _v4,
    onMenuToggle: _v5,
    privacyOptions: _v6,
    matchWidth: _v7 = !0,
    menuListProps: _v8 = {},
    hasPortal: _v9 = !1,
    isRedirectUpsell: _v10 = !0,
    showSelectedPrivacyDescription: _v11 = !0,
    showChevron: _v12 = !0,
    variant: _v13 = "default",
    lastSelectedPrivacyOption: _v14,
    isVideoPrivacy: _v15 = !1
  }) => {
    let [_v16, _v17] = (0, _v2.useState)(!1),
      _v18 = _v6.find(_v0 => _v0.privacy === _v0) ?? _v14 ?? _v6[0],
      _v19 = () => {
        _v5?.(!_v16), _v17(_v0 => !_v0);
      },
      _v20 = _v9 ? _v12.Portal : _v5.Box,
      _v21 = !_v2 && _v18;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.Flex, {
        flexDirection: "column",
        cursor: _v21 ? "pointer" : "not-allowed",
        borderRadius: "md",
        ...("outlined" === _v13 ? {
          transition: "all 120ms ease-in-out 0s",
          outline: "1px solid",
          outlineColor: "input-stroke",
          outlineOffset: "-1px",
          _hover: {
            outlineColor: "input-stroke-hover"
          }
        } : {
          backgroundColor: "button-secondary-default"
        }),
        children: (0, _v1.jsxs)(_v7.Menu, {
          isOpen: _v16,
          matchWidth: _v7,
          closeOnBlur: !0,
          onClose: () => _v17(!1),
          isLazy: !0,
          children: [(0, _v1.jsx)(_v8.MenuButton, {
            "data-testid": "video-privacy-dropdown",
            as: "div",
            tabIndex: _v21 ? 0 : -1,
            onClick: () => {
              _v21 && _v19();
            },
            onKeyDown: _v0 => {
              _v21 && ["Enter", " ", "ArrowUp", "ArrowDown"].includes(_v0.key) && _v19();
            },
            children: _v18 ? (0, _v1.jsx)(_v27, {
              option: _v18,
              isActive: _v16,
              showChevron: _v12,
              showDescription: _v11,
              variant: _v13
            }) : (0, _v1.jsxs)(_v6.Flex, {
              px: "md",
              py: "sm",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: .6,
              children: [(0, _v1.jsx)(_v13.Text, {
                variant: "body-md",
                children: (0, _v16.translate)({
                  singular: "Select privacy",
                  dictionary: {
                    es: {
                      singular: "Seleccionar privacidad"
                    },
                    "de-DE": {
                      singular: "Privatsphäre auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner la confidentialité"
                    },
                    "ja-JP": {
                      singular: "プライバシー設定を選択"
                    },
                    "ko-KR": {
                      singular: "공개 설정 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar privacidade"
                    },
                    "zh-CN": {
                      singular: "选择隐私"
                    }
                  }
                })
              }), _v12 && (0, _v1.jsx)(_v15.ChevronDown, {
                boxSize: "2xs"
              })]
            })
          }), (0, _v1.jsx)(_v20, {
            children: (0, _v1.jsx)(_v36, {
              privacyOptions: _v6,
              activePrivacy: _v0,
              menuListProps: _v8,
              onSelect: _v0 => {
                _v17(!1), _v3(_v0);
              },
              onUpsellClick: _v4,
              isRedirectUpsell: _v10,
              isVideoPrivacy: _v15
            })
          })]
        })
      }), _v1 && (0, _v1.jsx)(_v13.Text, {
        variant: "body-sm",
        color: "red.500",
        children: _v1
      })]
    });
  }], 0);
}