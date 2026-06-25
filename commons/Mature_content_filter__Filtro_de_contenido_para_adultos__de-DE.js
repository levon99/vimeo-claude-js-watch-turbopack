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
    _v30 = _v0.i(0);
  let _v31 = ({
    open: _v0,
    onClose: _v1,
    selected: _v2,
    filters: _v3,
    customFilters: _v4,
    token: _v5
  }) => (0, _v1.jsx)(_v26.Modal, {
    isOpen: _v0,
    onClose: _v1,
    children: (0, _v1.jsxs)(_v27.ModalContent, {
      children: [(0, _v1.jsx)(_v28.ModalHeader, {
        children: (0, _v20.translate)({
          singular: "Mature content filter",
          dictionary: {
            es: {
              singular: "Filtro de contenido para adultos"
            },
            "de-DE": {
              singular: "Jugendschutzfilter"
            },
            "fr-FR": {
              singular: "Filtre de contenu pour adultes"
            },
            "ja-JP": {
              singular: "成人向けコンテンツフィルター"
            },
            "ko-KR": {
              singular: "성인 콘텐츠 필터"
            },
            "pt-BR": {
              singular: "Filtro de conteúdo adulto"
            },
            "zh-CN": {
              singular: "成人内容过滤器"
            }
          }
        })
      }), (0, _v1.jsx)(_v29.ModalCloseButton, {}), (0, _v1.jsx)(_v30.ContentViewingPrefsForm, {
        token: _v5,
        selected: _v2,
        filters: _v3,
        customFilters: _v4,
        onClose: _v1
      })]
    })
  });
  _v0.s(["MatureContentModal", 0, _v31], 0);
  var _v32 = _v0.i(0);
  let _v33 = {
      ICON: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v32.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M20.8 5.3c-2.1-2.8-6-3.4-8.8-1.3-2.5-1.8-6-1.6-8.2.6-2.4 2.4-2.4 6.4 0 8.9l7.5 7.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l7.5-7.5c2.2-2.2 2.4-5.7.6-8.2Z",
          fill: "currentColor"
        })
      }), {
        color: "red.500",
        marginX: "xs"
      }, "heart-filled")
    },
    _v34 = [(0, _v20.translate)({
      singular: "Made with {ICON} in Bangalore",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en Bangalore"
        },
        "de-DE": {
          singular: "Hergestellt mit {ICON} in Bangalore"
        },
        "fr-FR": {
          singular: "Fait avec {ICON} à Bangalore"
        },
        "ja-JP": {
          singular: "バンガロールで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "벵갈루루에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em Bangalore"
        },
        "zh-CN": {
          singular: "在班加罗尔用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} in Tel Aviv",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en Tel Aviv"
        },
        "de-DE": {
          singular: "Mit {ICON} in Tel Aviv erstellt"
        },
        "fr-FR": {
          singular: "Créé avec {ICON} à Tel-Aviv"
        },
        "ja-JP": {
          singular: "テルアビブで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "텔아비브에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em Tel Aviv"
        },
        "zh-CN": {
          singular: "在特拉维夫用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} in NYC",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en NYC"
        },
        "de-DE": {
          singular: "Mit {ICON} in NYC erstellt."
        },
        "fr-FR": {
          singular: "Créé avec {ICON} à New York"
        },
        "ja-JP": {
          singular: "NYCで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "뉴욕에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em NYC."
        },
        "zh-CN": {
          singular: "在纽约用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} in Zaporizhzhia",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en Zaporizhzhia"
        },
        "de-DE": {
          singular: "Hergestellt mit {ICON} in Zaporizhzhia"
        },
        "fr-FR": {
          singular: "Créé avec {ICON} à Zaporijia"
        },
        "ja-JP": {
          singular: "ザポリージャで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "자포리자에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em Zaporizhzhia"
        },
        "zh-CN": {
          singular: "在扎波罗热用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} in London",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en Londres"
        },
        "de-DE": {
          singular: "Mit {ICON} in London erstellt"
        },
        "fr-FR": {
          singular: "Fait avec {ICON} à Londres"
        },
        "ja-JP": {
          singular: "ロンドンで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "런던에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em Londres"
        },
        "zh-CN": {
          singular: "在伦敦用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} at home",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en casa"
        },
        "de-DE": {
          singular: "Mit {ICON} zu Hause erstellt"
        },
        "fr-FR": {
          singular: "Fait avec {ICON} à la maison"
        },
        "ja-JP": {
          singular: "自宅で{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "집에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em casa"
        },
        "zh-CN": {
          singular: "在家用 {ICON} 制作"
        }
      }
    }), (0, _v20.translate)({
      singular: "Made with {ICON} in Kyiv",
      replacements: _v33,
      dictionary: {
        es: {
          singular: "Hecho con {ICON} en Kyiv"
        },
        "de-DE": {
          singular: "Mit {ICON} in Kiew erstellt"
        },
        "fr-FR": {
          singular: "Créé avec {ICON} à Kiev"
        },
        "ja-JP": {
          singular: "キーウで{ICON}を使用して作成"
        },
        "ko-KR": {
          singular: "키이우에서 {ICON}(으)로 제작"
        },
        "pt-BR": {
          singular: "Feito com {ICON} em Kiev"
        },
        "zh-CN": {
          singular: "在基辅用 {ICON} 制作"
        }
      }
    })],
    _v35 = () => {
      let [_v0, _v1] = (0, _v2.useState)(0);
      (0, _v2.useEffect)(() => {
        let _v0 = setInterval(() => {
          _v1(_v0 => _v0 + 1);
        }, 0);
        return () => clearInterval(_v0);
      }, []);
      let _v2 = _v34[_v0 % _v34.length];
      return (0, _v1.jsx)(_v6.MenuItem, {
        _hover: {
          bg: "transparent",
          _dark: {
            bg: "transparent"
          }
        },
        cursor: "default",
        children: (0, _v1.jsx)(_v8.Flex, {
          alignItems: "center",
          children: (0, _v1.jsx)("span", {
            translate: "no",
            children: _v2
          })
        })
      });
    },
    _v36 = "255px",
    _v37 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v8.Flex, {
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      children: [_v0, (0, _v1.jsx)(_v15.ChevronRight, {})]
    }),
    _v38 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v8.Flex, {
      width: "100%",
      alignItems: "center",
      gap: "sm",
      children: [(0, _v1.jsx)(_v16.ChevronLeft, {}), _v0]
    });
  _v0.s(["EssentialFooterMenu", 0, ({
    children: _v0,
    impressumQualifies: _v1,
    locale: _v2,
    locales: _v3 = [],
    localeLabels: _v4 = [],
    token: _v5,
    contentViewingPrefs: _v6,
    isDoNotSellReady: _v7,
    onMenuChange: _v8,
    onOpenMatureContentFilter: _v9,
    customMenuItem: _v10
  }) => {
    let _v11 = (0, _v9.useToast)(),
      [_v12, _v13] = (0, _v2.useState)(!1),
      [_v14, _v15] = (0, _v2.useState)("main"),
      _v16 = (0, _v2.useContext)(_v22.ViewerContext),
      _v17 = _v16?.isSimplifiedSite,
      _v18 = _v16?.user,
      _v19 = _v16?.teamUser,
      {
        capabilities: {
          hasEnterprise: _v20
        },
        loading: _v21
      } = (0, _v18.useCapability)(["hasEnterprise"], _v19?.ownerId),
      {
        capabilities: {
          canUpgrade: _v22
        },
        loading: _v23
      } = (0, _v18.useCapability)(["canUpgrade"], _v18?.id),
      _v24 = !_v17 && !(_v23 || _v21) && _v22 && !_v20,
      _v25 = _v0 => {
        _v15(_v0), _v8?.(_v0);
      };
    return (0, _v1.jsxs)(_v8.Flex, {
      boxSize: (0, _v14.rem)(40),
      alignItems: "center",
      justifyContent: "center",
      children: [(0, _v1.jsxs)(_v3.Menu, {
        closeOnSelect: !1,
        onClose: () => _v25("main"),
        children: [_v0 || (0, _v1.jsx)(_v13.Tooltip, {
          label: (0, _v20.translate)({
            singular: "Language & content",
            dictionary: {
              es: {
                singular: "Idioma y contenido"
              },
              "de-DE": {
                singular: "Sprache und Inhalt"
              },
              "fr-FR": {
                singular: "Langue et contenu"
              },
              "ja-JP": {
                singular: "言語とコンテンツ"
              },
              "ko-KR": {
                singular: "언어 및 콘텐츠"
              },
              "pt-BR": {
                singular: "Idioma e conteúdo"
              },
              "zh-CN": {
                singular: "语言和内容"
              }
            }
          }),
          placement: "right",
          children: (0, _v1.jsx)(_v5.MenuButton, {
            as: _v12.IconButton,
            icon: (0, _v1.jsx)(_v17.EllipsisH, {}),
            variant: "tertiary",
            size: "sm",
            borderRadius: "round",
            backgroundColor: "transparent"
          })
        }), "main" === _v14 && (0, _v1.jsx)(() => (0, _v1.jsxs)(_v4.MenuList, {
          width: _v36,
          children: [_v10, (0, _v1.jsx)(_v6.MenuItem, {
            onClick: () => _v25("language"),
            children: (0, _v1.jsx)(_v37, {
              children: (0, _v20.translate)({
                singular: "Language",
                dictionary: {
                  es: {
                    singular: "Idioma"
                  },
                  "de-DE": {
                    singular: "Sprache"
                  },
                  "fr-FR": {
                    singular: "Langue"
                  },
                  "ja-JP": {
                    singular: "言語"
                  },
                  "ko-KR": {
                    singular: "언어"
                  },
                  "pt-BR": {
                    singular: "Idioma"
                  },
                  "zh-CN": {
                    singular: "语言"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v6.MenuItem, {
            onClick: () => _v25("legal"),
            sx: {
              "@media screen and (min-width: 480px)": {
                display: "none"
              }
            },
            children: (0, _v1.jsx)(_v37, {
              children: (0, _v20.translate)({
                singular: "Legal",
                dictionary: {
                  "de-DE": {
                    singular: "Rechtliches"
                  },
                  "fr-FR": {
                    singular: "Juridique"
                  },
                  "ja-JP": {
                    singular: "法務"
                  },
                  "ko-KR": {
                    singular: "법적 고지 사항"
                  },
                  "pt-BR": {
                    singular: "Jurídico"
                  },
                  "zh-CN": {
                    singular: "法务"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v6.MenuItem, {
            onClick: () => {
              _v13(!0), _v9?.();
            },
            closeOnSelect: !0,
            children: (0, _v1.jsx)(_v37, {
              children: (0, _v20.translate)({
                singular: "Mature content filter",
                dictionary: {
                  es: {
                    singular: "Filtro de contenido para adultos"
                  },
                  "de-DE": {
                    singular: "Jugendschutzfilter"
                  },
                  "fr-FR": {
                    singular: "Filtre de contenu pour adultes"
                  },
                  "ja-JP": {
                    singular: "成人向けコンテンツフィルター"
                  },
                  "ko-KR": {
                    singular: "성인 콘텐츠 필터"
                  },
                  "pt-BR": {
                    singular: "Filtro de conteúdo adulto"
                  },
                  "zh-CN": {
                    singular: "成人内容过滤器"
                  }
                }
              })
            })
          }), !_v17 && (0, _v1.jsx)(_v6.MenuItem, {
            as: "a",
            href: "/help",
            target: "_blank",
            rel: "noreferrer",
            children: (0, _v20.translate)({
              singular: "Help",
              dictionary: {
                es: {
                  singular: "Ayuda"
                },
                "de-DE": {
                  singular: "Hilfe"
                },
                "fr-FR": {
                  singular: "Aide "
                },
                "ja-JP": {
                  singular: "ヘルプ"
                },
                "ko-KR": {
                  singular: "도움말"
                },
                "pt-BR": {
                  singular: "Ajuda"
                },
                "zh-CN": {
                  singular: "帮助"
                }
              }
            })
          }), _v24 && (0, _v1.jsx)(_v6.MenuItem, {
            as: "a",
            href: (0, _v21.buildUpgradePlanUrl)({
              paywallTrigger: "footer_menu_upgrade_button",
              paywallLocation: "footer_menu",
              paywallFeature: "general"
            }),
            color: "upsell-primary",
            target: "_blank",
            rel: "noreferrer",
            _hover: {
              color: "upsell-primary",
              _dark: {
                color: "upsell-primary"
              }
            },
            _dark: {
              color: "upsell-primary"
            },
            children: (0, _v20.translate)({
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
          }), (0, _v1.jsx)(_v7.MenuDivider, {}), (0, _v1.jsx)(_v35, {})]
        }), {}), "language" === _v14 && (0, _v1.jsx)(() => (0, _v1.jsxs)(_v4.MenuList, {
          width: _v36,
          children: [(0, _v1.jsx)(_v6.MenuItem, {
            onClick: () => _v25("main"),
            children: (0, _v1.jsx)(_v38, {
              children: (0, _v20.translate)({
                singular: "Language",
                dictionary: {
                  es: {
                    singular: "Idioma"
                  },
                  "de-DE": {
                    singular: "Sprache"
                  },
                  "fr-FR": {
                    singular: "Langue"
                  },
                  "ja-JP": {
                    singular: "言語"
                  },
                  "ko-KR": {
                    singular: "언어"
                  },
                  "pt-BR": {
                    singular: "Idioma"
                  },
                  "zh-CN": {
                    singular: "语言"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v10.MenuOptionGroup, {
            defaultValue: _v2,
            type: "radio",
            onChange: _v0 => {
              (0, _v23.setLanguage)({
                token: _v5,
                locale: _v0
              }).then(_v0 => {
                _v0.ok ? (0, _v19.applyLanguageChange)(_v0) : _v11({
                  title: (0, _v20.translate)({
                    singular: "Sorry, something went wrong. Please try again.",
                    dictionary: {
                      es: {
                        singular: "Lo sentimos, algo salió mal. Inténtelo de nuevo."
                      },
                      "de-DE": {
                        singular: "Es tut uns leid. Hier ist etwas schiefgelaufen. Bitte versuche es erneut."
                      },
                      "fr-FR": {
                        singular: "Une erreur s'est produite. Veuillez réessayer."
                      },
                      "ja-JP": {
                        singular: "申し訳ありません、エラーが発生しました。 再度お試しください。"
                      },
                      "ko-KR": {
                        singular: "죄송합니다, 문제가 발생했습니다. 다시 시도해 주세요."
                      },
                      "pt-BR": {
                        singular: "Desculpe, algo deu errado. Tente novamente."
                      },
                      "zh-CN": {
                        singular: "抱歉，出错了。请重试。"
                      }
                    }
                  }),
                  variant: "warning"
                });
              });
            },
            children: _v3.map((_v0, _v1) => (0, _v1.jsx)(_v11.MenuItemOption, {
              value: _v0,
              children: _v4[_v1]
            }, _v0))
          })]
        }), {}), "legal" === _v14 && (0, _v1.jsx)(() => (0, _v1.jsxs)(_v4.MenuList, {
          width: _v36,
          children: [(0, _v1.jsx)(_v6.MenuItem, {
            onClick: () => _v25("main"),
            children: (0, _v1.jsx)(_v38, {
              children: (0, _v20.translate)({
                singular: "Legal",
                dictionary: {
                  "de-DE": {
                    singular: "Rechtliches"
                  },
                  "fr-FR": {
                    singular: "Juridique"
                  },
                  "ja-JP": {
                    singular: "法務"
                  },
                  "ko-KR": {
                    singular: "법적 고지 사항"
                  },
                  "pt-BR": {
                    singular: "Jurídico"
                  },
                  "zh-CN": {
                    singular: "法务"
                  }
                }
              })
            })
          }), (0, _v25.getLegalLinks)().filter(_v0 => (!!_v1 || "Impressum" !== _v0.title) && (!_v17 || _v0.forSimplifiedSite === _v17)).map(_v0 => (0, _v1.jsx)(_v6.MenuItem, {
            as: "a",
            href: _v0.href,
            target: "_blank",
            rel: "noreferrer",
            children: _v0.label
          }, _v0.label)), (0, _v1.jsx)(_v24.default, {
            footerType: "essential",
            isDoNotSellReady: _v7
          })]
        }), {})]
      }), (0, _v1.jsx)(_v31, {
        open: _v12,
        onClose: () => _v13(!1),
        token: _v5,
        ..._v6
      })]
    });
  }], 0);
}