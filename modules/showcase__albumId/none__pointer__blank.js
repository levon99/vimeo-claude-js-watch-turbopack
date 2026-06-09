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
  let _v17 = ({
      href: _v0,
      label: _v1,
      upgrade: _v2,
      ..._v3
    }) => (0, _v1.jsx)("a", {
      href: _v0,
      style: {
        textDecoration: "none",
        cursor: "pointer"
      },
      target: "_blank",
      rel: "noreferrer",
      ..._v3,
      children: (0, _v1.jsx)(_v18, {
        children: _v2 ? (0, _v1.jsx)(_v20, {
          children: _v1
        }) : (0, _v1.jsx)(_v19, {
          children: _v1
        })
      })
    }),
    _v18 = (0, _v4.default)(_v9.Pop.Item).withConfig({
      displayName: "PopLink__PopItem",
      componentId: "sc-a4890402-0"
    })`
  padding: ${(0, _v2.rem)(6)} ${(0, _v2.rem)(16)};
`,
    _v19 = (0, _v4.default)(_v11.Text).withConfig({
      displayName: "PopLink__Label",
      componentId: "sc-a4890402-1"
    })`
  font-size: ${(0, _v2.rem)(14)};
`,
    _v20 = (0, _v4.default)(_v11.Text).withConfig({
      displayName: "PopLink__Upgrade",
      componentId: "sc-a4890402-2"
    })`
  font-size: ${(0, _v2.rem)(14)};
  /* IE11 Fallback */
  color: ${_v16.bokehTheme.colors.green["500"]};
  @supports (-webkit-background-clip: text) {
    background: linear-gradient(to right, #22b654, #15c1ca);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,
    _v21 = _v4.default.div.withConfig({
      displayName: "EssentialLegalMenu__Container",
      componentId: "sc-77e4e3ab-0"
    })`
  display: none;
  @media screen and (min-width: ${(0, _v2.rem)(480)}) {
    display: flex;
    align-items: center;
  }
`,
    _v22 = _v4.default.div.withConfig({
      displayName: "EssentialLegalMenu__Content",
      componentId: "sc-77e4e3ab-1"
    })`
  padding: ${(0, _v2.rem)(6)} 0;
`,
    _v23 = (0, _v4.default)(_v11.Text).withConfig({
      displayName: "EssentialLegalMenu__StyledText",
      componentId: "sc-77e4e3ab-2"
    })`
  color: ${({
      theme: _v0
    }) => _v0.elements.color1};
`,
    _v24 = (0, _v4.default)(_v10.Button).withConfig({
      displayName: "EssentialLegalMenu__StyledButton",
      componentId: "sc-77e4e3ab-3"
    })`
  span {
    font-size: ${(0, _v2.rem)(12)};
    transition: 170ms color ease-in-out;
  }

  &:hover {
    span {
      color: ${({
      theme: _v0
    }) => _v0.elements.color2};
    }
  }
`,
    _v25 = (0, _v4.default)(_v8.PopOver).withConfig({
      displayName: "EssentialLegalMenu__StyledPopOver",
      componentId: "sc-77e4e3ab-4"
    })`
  border-radius: ${(0, _v2.rem)(8)};
`,
    _v26 = _v4.default.a.withConfig({
      displayName: "EssentialLegalMenu__TerminateLink",
      componentId: "sc-77e4e3ab-5"
    })`
  text-decoration: none;
  &:hover {
    ${_v23} {
      color: ${({
      theme: _v0
    }) => _v0.elements.color2};
    }
  }
  ${_v23} {
    font-size: ${(0, _v2.rem)(12)};
    letter-spacing: ${(0, _v2.rem)(1)};
    font-weight: bold;
    line-height: 1.25;
  }
`,
    _v27 = ({
      title: _v0 = (0, _v7.translate)({
        singular: "Terms & Privacy",
        dictionary: {
          es: {
            singular: "Términos y privacidad"
          },
          "de-DE": {
            singular: "AGB und Datenschutz"
          },
          "fr-FR": {
            singular: "Conditions d'utilisation et confidentialité"
          },
          "ja-JP": {
            singular: "利用規約とプライバシー"
          },
          "ko-KR": {
            singular: "이용 약관 및 개인정보보호"
          },
          "pt-BR": {
            singular: "Termos e Privacidade"
          },
          "zh-CN": {
            singular: "条款和隐私"
          }
        }
      }),
      impressumQualifies: _v1,
      terminateContractQualifies: _v2,
      isDoNotSellReady: _v3,
      attach: _v4 = "top",
      onOpenLegalMenu: _v5,
      className: _v6
    }) => {
      let _v7 = (0, _v3.useRef)(null),
        _v8 = (0, _v3.useRef)(null),
        [_v9, _v10] = (0, _v3.useState)(!1),
        _v11 = (0, _v3.useContext)(_v12.ViewerContext),
        _v12 = _v11?.isSimplifiedSite,
        _v13 = (0, _v15.getLegalLinks)().filter(_v0 => (!!_v1 || "Impressum" !== _v0.title) && (!_v12 || _v0.forSimplifiedSite === _v12)),
        _v14 = _v0 => {
          _v10(_v0), _v0 && _v5?.();
        };
      return (0, _v13.default)([_v7, _v8], () => _v14(!1), null, [_v9]), (0, _v1.jsxs)(_v21, {
        children: [_v2 ? (0, _v1.jsx)(_v26, {
          href: "/settings/billing/membership_plan/optout",
          role: "link",
          onClick: () => {
            _v6.FatalAttraction.trackClick({
              container: "footer",
              component: "logged_in",
              keyword: "terminate_here",
              target: "/settings/billing/membership_plan/optout"
            });
          },
          children: (0, _v1.jsx)(_v23, {
            children: (0, _v7.translate)({
              singular: "Terminate contracts here",
              dictionary: {
                es: {
                  singular: "Rescindir contratos aquí"
                },
                "de-DE": {
                  singular: "Verträge hier kündigen"
                },
                "fr-FR": {
                  singular: "Résilier les contrats ici"
                },
                "ja-JP": {
                  singular: "ここから契約を解除"
                },
                "ko-KR": {
                  singular: "계약 해지"
                },
                "pt-BR": {
                  singular: "Rescindir contratos aqui"
                },
                "zh-CN": {
                  singular: "在这里终止合同"
                }
              }
            })
          })
        }) : null, (0, _v1.jsx)(_v25, {
          active: _v9,
          attach: _v4,
          content: (0, _v1.jsx)(_v22, {
            ref: _v7,
            children: (0, _v1.jsxs)(_v9.Pop.List, {
              role: "menu",
              children: [_v13.map(_v0 => (0, _v1.jsx)(_v17, {
                role: "menuitem",
                onClick: () => _v14(!1),
                ..._v0
              }, _v0.label)), (0, _v1.jsx)(_v14.default, {
                footerType: "essential",
                isDoNotSellReady: _v3
              })]
            })
          }),
          children: (0, _v1.jsx)("div", {
            ref: _v8,
            children: (0, _v1.jsx)(_v24, {
              id: "essential-footer-legal-menu-button",
              onClick: () => _v14(!_v9),
              title: _v0,
              format: "secondary",
              variant: "hyperminimal",
              tabIndex: 0,
              onKeyDown: _v0 => {
                "Enter" === _v0.code || _v0.code;
              },
              className: _v6,
              children: (0, _v1.jsx)(_v23, {
                children: _v0
              })
            })
          })
        })]
      });
    };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = (0, _v3.forwardRef)(function (_v0, _v1) {
      return _v3.default.createElement("svg", (0, _v33.c)({
        viewBox: "0 0 20 20",
        ref: _v1
      }, _v0), _v3.default.createElement("path", {
        d: "M10 1.81818C5.48818 1.81818 1.81818 5.48818 1.81818 10C1.81818 14.5118 5.48818 18.1818 10 18.1818C14.5118 18.1818 18.1818 14.5118 18.1818 10C18.1818 5.48818 14.5118 1.81818 10 1.81818ZM10 20C4.48636 20 0 15.5136 0 10C0 4.48636 4.48636 0 10 0C15.5136 0 20 4.48636 20 10C20 15.5136 15.5136 20 10 20Z"
      }), _v3.default.createElement("path", {
        d: "M5.51758 14.4869C7.97576 16.9442 11.9603 16.9442 14.4185 14.4869C16.8757 12.0296 16.8757 8.04418 14.4185 5.58691L5.51758 14.4869Z"
      }));
    });
  let _v35 = ({
      onThemeChange: _v0,
      className: _v1
    }) => {
      let {
          setColorMode: _v2
        } = (0, _v30.useColorMode)(),
        {
          toggleTheme: _v3
        } = (0, _v3.useContext)(_v31.ThemeDispatchContext),
        _v4 = (0, _v3.useContext)(_v4.ThemeContext),
        _v5 = _v4?.name;
      return (0, _v1.jsx)(_v32.Tip, {
        id: "lightDarkTip",
        content: "dark" === _v5 ? (0, _v7.translate)({
          singular: "Light mode",
          dictionary: {
            es: {
              singular: "Modo claro"
            },
            "de-DE": {
              singular: "Heller Modus"
            },
            "fr-FR": {
              singular: "Mode lumineux"
            },
            "ja-JP": {
              singular: "ライトモード"
            },
            "ko-KR": {
              singular: "밝은 모드"
            },
            "pt-BR": {
              singular: "Modo claro"
            },
            "zh-CN": {
              singular: "浅色模式"
            }
          }
        }) : (0, _v7.translate)({
          singular: "Dark mode",
          dictionary: {
            es: {
              singular: "Modo oscuro"
            },
            "de-DE": {
              singular: "Dunkelmodus"
            },
            "fr-FR": {
              singular: "Mode foncé"
            },
            "ja-JP": {
              singular: "ダークモード"
            },
            "ko-KR": {
              singular: "다크 모드"
            },
            "pt-BR": {
              singular: "Modo escuro"
            },
            "zh-CN": {
              singular: "深色模式"
            }
          }
        }),
        children: (0, _v1.jsx)(_v36, {
          "aria-label": "dark" === _v5 ? (0, _v7.translate)({
            singular: "Light mode",
            dictionary: {
              es: {
                singular: "Modo claro"
              },
              "de-DE": {
                singular: "Heller Modus"
              },
              "fr-FR": {
                singular: "Mode lumineux"
              },
              "ja-JP": {
                singular: "ライトモード"
              },
              "ko-KR": {
                singular: "밝은 모드"
              },
              "pt-BR": {
                singular: "Modo claro"
              },
              "zh-CN": {
                singular: "浅色模式"
              }
            }
          }) : (0, _v7.translate)({
            singular: "Dark mode",
            dictionary: {
              es: {
                singular: "Modo oscuro"
              },
              "de-DE": {
                singular: "Dunkelmodus"
              },
              "fr-FR": {
                singular: "Mode foncé"
              },
              "ja-JP": {
                singular: "ダークモード"
              },
              "ko-KR": {
                singular: "다크 모드"
              },
              "pt-BR": {
                singular: "Modo escuro"
              },
              "zh-CN": {
                singular: "深色模式"
              }
            }
          }),
          onClick: () => {
            var _v0;
            _v3(_v0 = "dark" === _v5 ? "light" : "dark"), _v0?.(_v0), _v2?.(_v0);
          },
          format: "secondary",
          icon: (0, _v1.jsx)(_v37, {}),
          variant: "outline",
          pill: !0,
          id: "essential-footer-theme-button",
          size: "sm",
          className: _v1
        })
      });
    },
    _v36 = (0, _v4.default)(_v10.Button).withConfig({
      displayName: "ThemeSwitcher__ButtonIcon",
      componentId: "sc-d9d3d188-0"
    })`
  background: ${({
      theme: _v0
    }) => _v0.elements.bg1};
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0.1875rem 0.375rem 0px;
  margin: 0 ${(0, _v2.rem)(6)};
  ${({
      elevated: _v0
    }) => _v0 && "z-index: 2"};

  &:hover {
    background-color: ${({
      theme: _v0
    }) => _v0.elements.bg1};
    border: ${({
      theme: _v0
    }) => `1px solid ${_v0.elements.color4}`};
    box-shadow: rgba(0, 0, 0, 0.07) 0px 0.1875rem 0.375rem 0px;
    transform: translateY(-1px) scale(1.001);
  }

  &:hover,
  &:focus {
    svg {
      color: ${({
      theme: _v0
    }) => _v0.content.color};
    }
  }
`,
    _v37 = (0, _v4.default)(_v34).withConfig({
      displayName: "ThemeSwitcher__StyledLightDark",
      componentId: "sc-d9d3d188-1"
    })`
  color: ${({
      theme: _v0
    }) => _v0.elements.color1};
`,
    _v38 = _v4.default.div.withConfig({
      displayName: "EssentialFooter__Footer",
      componentId: "sc-a9433fbf-0"
    })`
  background: ${({
      theme: _v0
    }) => `linear-gradient(${(0, _v2.transparentize)(1, _v0.content.background)}, ${_v0.content.background})`};
  display: flex;
  position: ${({
      position: _v0
    }) => _v0};
  bottom: 0;
  right: 0;
  width: 100%;
  height: ${(0, _v2.rem)(50)};
  padding: 0 ${(0, _v2.rem)(16)};
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* allows users to click through the transparent footer, while keeping elements in the footer clickable. */
  pointer-events: none;
  transition: all 0.3s;
  > * {
    pointer-events: auto;
  }
`,
    _v39 = _v4.default.div.withConfig({
      displayName: "EssentialFooter__Section",
      componentId: "sc-a9433fbf-1"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
  _v0.s(["default", 0, function ({
    className: _v0 = "",
    position: _v1 = "fixed",
    contentViewingPrefs: _v2,
    impressumQualifies: _v3,
    locale: _v4,
    locales: _v5 = [],
    localeLabels: _v6 = [],
    xsrft: _v7,
    user: _v8,
    jwt: _v9,
    apiUrl: _v10,
    teamOwnersId: _v11,
    enableQuotaMenu: _v12 = !0,
    terminateContractQualifies: _v13 = !1
  }) {
    let [_v14, _v15] = (0, _v3.useState)(!1);
    return (0, _v3.useEffect)(() => {
      window.onload = () => _v15(!0);
    }, []), (0, _v1.jsx)(_v4.ThemeProvider, {
      theme: _v29.applyCustomThemeEssentialFooter,
      children: (0, _v1.jsxs)(_v38, {
        className: _v0,
        position: _v1,
        children: [(0, _v1.jsx)(_v39, {
          children: (0, _v1.jsx)(_v28.EssentialQuotaMenu, {
            user: _v8,
            jwt: _v9,
            apiUrl: _v10,
            teamOwnersId: _v11,
            enableQuotaMenu: _v12
          })
        }), (0, _v1.jsxs)(_v39, {
          children: [(0, _v1.jsx)(_v27, {
            impressumQualifies: _v3,
            terminateContractQualifies: _v13,
            isDoNotSellReady: _v14
          }), (0, _v1.jsx)(_v35, {}), (0, _v1.jsx)(_v5.EssentialFooterMenu, {
            impressumQualifies: _v3,
            locale: _v4,
            locales: _v5,
            localeLabels: _v6,
            token: _v7,
            isDoNotSellReady: _v14,
            contentViewingPrefs: _v2
          })]
        })]
      })
    });
  }], 0);
}