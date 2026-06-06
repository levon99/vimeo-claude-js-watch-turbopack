{
  "use strict";

  _v0.s(["default", () => _v13]);
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
    _v11 = _v0.i(0);
  let _v12 = _v3.default.a.withConfig({
      displayName: "DoNotSellLink__Link",
      componentId: "sc-8e6c6921-0"
    })`
  cursor: pointer;
`,
    _v13 = ({
      footerType: _v0 = "standard",
      isDoNotSellReady: _v1
    }) => {
      let _v2 = (0, _v2.useRef)(void 0),
        [_v3, _v4] = (0, _v2.useState)(!1),
        _v5 = () => {
          _v4.FatalAttraction.trackClick({
            component: "footer",
            target: "transcend_dialogue_box",
            keyword: "do_not_sell_my_personal_information",
            container: "footer"
          }), _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.click", 75, {
            page: "footer",
            location: "footer",
            target: "transcend_dialogue_box",
            name: "do_not_sell",
            copy: "do_not_sell_my_personal_information",
            feature: "do_not_sell",
            type: "general"
          })), _v2.current?.transcend.showConsentManager({
            viewState: "DoNotSellExplainer"
          });
        },
        _v6 = (0, _v2.useCallback)(() => {
          _v2.current = self;
          let {
            airgap: _v0
          } = _v2.current;
          try {
            _v0 && _v0.getRegimes?.().has("CPRA") && _v0.ready(() => {
              _v4(!0);
            });
          } catch (_v0) {
            console.error(_v0);
          }
        }, []);
      return (0, _v2.useEffect)(() => {
        _v1 && _v6();
      }, [_v1, _v6]), _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: ["standard" === _v0 && " | ", (0, _v1.jsxs)(_v12, {
          onClick: () => _v5(),
          onKeyPress: _v0 => {
            "Enter" === _v0.key && _v5();
          },
          tabIndex: 0,
          children: ["standard" === _v0 && (0, _v1.jsx)(_v9.InlineLink, {
            as: "span",
            children: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            })
          }), "standardMobile" === _v0 && (0, _v1.jsx)(_v10.Link, {
            as: "span",
            title: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            }),
            children: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            })
          }), "essential" === _v0 && (0, _v1.jsx)(_v7.Pop.Item, {
            children: (0, _v1.jsx)(_v8.Text, {
              children: (0, _v6.translate)({
                singular: "Do Not Sell My Personal Information",
                dictionary: {
                  es: {
                    singular: "No vender mi información personal"
                  },
                  "de-DE": {
                    singular: "Meine persönlichen Informationen nicht verkaufen"
                  },
                  "fr-FR": {
                    singular: "Ne pas vendre mes informations personnelles"
                  },
                  "ja-JP": {
                    singular: "個人情報を販売しないでください"
                  },
                  "ko-KR": {
                    singular: "내 개인 정보를 판매하지 마십시오."
                  },
                  "pt-BR": {
                    singular: "Não vender minhas informações pessoais"
                  },
                  "zh-CN": {
                    singular: "不要出售我的个人信息"
                  }
                }
              })
            })
          }), "minimal" === _v0 && (0, _v1.jsx)(_v11.PopItem, {
            title: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            }),
            children: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            })
          }), "minimalMobile" === _v0 && (0, _v1.jsx)(_v10.Link, {
            as: "span",
            title: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            }),
            children: (0, _v6.translate)({
              singular: "Do Not Sell My Personal Information",
              dictionary: {
                es: {
                  singular: "No vender mi información personal"
                },
                "de-DE": {
                  singular: "Meine persönlichen Informationen nicht verkaufen"
                },
                "fr-FR": {
                  singular: "Ne pas vendre mes informations personnelles"
                },
                "ja-JP": {
                  singular: "個人情報を販売しないでください"
                },
                "ko-KR": {
                  singular: "내 개인 정보를 판매하지 마십시오."
                },
                "pt-BR": {
                  singular: "Não vender minhas informações pessoais"
                },
                "zh-CN": {
                  singular: "不要出售我的个人信息"
                }
              }
            })
          })]
        })]
      }) : null;
    };
}