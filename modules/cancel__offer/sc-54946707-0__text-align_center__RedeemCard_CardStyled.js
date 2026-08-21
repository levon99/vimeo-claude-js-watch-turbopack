{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v2,
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = (0, _v6.default)(({
      centered: _v0,
      children: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v12.Header, {
      size: "5",
      ..._v2,
      children: _v1
    })).withConfig({
      displayName: "",
      componentId: "sc-54946707-0"
    })`
  ${_v0 => _v0.centered && "text-align: center;"}
`,
    _v14 = (0, _v6.default)(_v10.Card).withConfig({
      displayName: "RedeemCard__CardStyled",
      componentId: "sc-2438452-0"
    })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border: 0;

  ${_v11.Button} {
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:after {
    display: none;
  }
`,
    _v15 = (0, _v6.default)(_v13).withConfig({
      displayName: "RedeemCard__Code",
      componentId: "sc-2438452-1"
    })`
  margin: 0 20px;
  font-size: 18px;
  letter-spacing: 0.2px;
`,
    _v16 = ({
      code: _v0,
      ..._v1
    }) => (0, _v1.jsxs)(_v14, {
      ..._v1,
      children: [(0, _v1.jsx)(_v15, {
        children: _v0
      }), (0, _v1.jsx)(_v11.Button, {
        children: (0, _v9.translate)({
          singular: "Redeem",
          dictionary: {
            es: {
              singular: "Canjear"
            },
            "de-DE": {
              singular: "Einlösen"
            },
            "fr-FR": {
              singular: "Utiliser"
            },
            "ja-JP": {
              singular: "使用する"
            },
            "ko-KR": {
              singular: "VIP 코드 사용"
            },
            "pt-BR": {
              singular: "Utilizar"
            },
            "zh-CN": {
              singular: "兑换"
            }
          }
        })
      })]
    });
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = _v6.default.hr.withConfig({
    displayName: "",
    componentId: "sc-c12943d5-0"
  })`
  border-top: black;
  border-bottom: white;
  border-width: 1px;
  border-style: solid;
  width: 100%;
  opacity: 0.065;
  margin-top: 0;
`;
  var _v21 = _v0.i(0);
  let _v22 = (0, _v6.default)(_v21.Link).withConfig({
    displayName: "Link",
    componentId: "sc-833ce114-0"
  })`
  font-size: 14px;
  text-decoration: none;
`;
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  class _v25 extends _v5.Component {
    state = {
      isOptOutSubmitting: !1,
      expirationDate: "",
      promoCode: {
        code: "",
        link: ""
      }
    };
    componentDidMount() {
      fetch("/settings/billing/membership_plan/promo_code", {
        credentials: "include",
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(_v0 => _v0.json()).then(_v0 => {
        let _v1 = (0, _v8.camelize)(_v0);
        this.setState({
          expirationDate: _v1.expirationDate,
          promoCode: _v1.promoCode
        }), _v1.promoCode || this.handleSubmit();
      });
    }
    handleSubmit = () => {
      this.setState({
        isOptOutSubmitting: !0
      });
      let _v0 = this.props?.viewer?.xsrft ?? "";
      (0, _v7.submitOptOutRequest)({
        token: _v0
      });
    };
    render() {
      if ("" === this.state.promoCode.code) return null;
      let {
        code: _v0,
        link: _v1
      } = this.state.promoCode;
      return (0, _v1.jsxs)(_v26, {
        children: [(0, _v1.jsxs)("header", {
          children: [(0, _v1.jsx)(_v19.H2, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Too expensive?",
              dictionary: {
                es: {
                  singular: "¿Demasiado costoso?"
                },
                "de-DE": {
                  singular: "Zu teuer?"
                },
                "fr-FR": {
                  singular: "Trop cher ?"
                },
                "ja-JP": {
                  singular: "少し価格を抑えたいですか？"
                },
                "ko-KR": {
                  singular: "조금 부담스러우신가요?"
                },
                "pt-BR": {
                  singular: "Muito caro?"
                },
                "zh-CN": {
                  singular: "太贵了？"
                }
              }
            })
          }), (0, _v1.jsx)(_v19.H2, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Save 20% with this code.",
              dictionary: {
                es: {
                  singular: "Ahorra un 20 % con este código."
                },
                "de-DE": {
                  singular: "Mit diesem Code sparst du 20%."
                },
                "fr-FR": {
                  singular: "Économisez 20 % avec ce code."
                },
                "ja-JP": {
                  singular: "このプロモコードで20％割引になります。"
                },
                "ko-KR": {
                  singular: "아래 코드를 사용해 20% 할인을 받으세요!"
                },
                "pt-BR": {
                  singular: "Economize 20% com este código."
                },
                "zh-CN": {
                  singular: "使用此代码可节省 20%。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)("section", {
          children: [(0, _v1.jsx)("span", {
            className: "redeem-container",
            onClick: () => {
              (0, _v24.default)("promoRedeem", {
                ref_path: window.location.pathname,
                target: _v1
              }), window.location.href = _v1;
            },
            children: (0, _v1.jsx)(_v16, {
              code: _v0,
              className: "centered"
            })
          }), (0, _v1.jsx)(_v23.Text, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Use this code {LINK}at checkout{/LINK} to save 20% on your next year of {ACCOUNT_TYPE}.",
              replacements: {
                LINK: _v0 => (0, _v1.jsx)(_v22, {
                  href: _v1,
                  onClick: () => (0, _v24.default)("promoCheckout", {
                    ref_path: window.location.pathname,
                    target: _v1
                  }),
                  children: _v0
                }, "promo-code-link"),
                ACCOUNT_TYPE: (0, _v3.default)((0, _v4.default)(this.props, "viewer.user.account"))
              },
              dictionary: {
                es: {
                  singular: "Utiliza este código {LINK}en la página de compra{/LINK} para ahorrar un 20 % en tu próximo año de {ACCOUNT_TYPE}."
                },
                "de-DE": {
                  singular: "Verwende diesen Code {LINK}an der Kasse{/LINK}, um nächstes Jahr 20% bei {ACCOUNT_TYPE} zu sparen."
                },
                "fr-FR": {
                  singular: "Utilisez ce code {LINK}lors du paiement{/LINK} pour économiser 20 % pour une année de {ACCOUNT_TYPE}."
                },
                "ja-JP": {
                  singular: "このプロモコードを{LINK}お支払いページ{/LINK}で使用すると翌年の {ACCOUNT_TYPE} が20％割引になります。"
                },
                "ko-KR": {
                  singular: "{ACCOUNT_TYPE} 연간 이용에 20% 할인을 받으려면 {LINK}결제 페이지{/LINK}에서 위의 코드를 입력하세요."
                },
                "pt-BR": {
                  singular: "Use este código {LINK}na finalização da compra{/LINK} para economizar 20% em seu próximo ano do {ACCOUNT_TYPE}."
                },
                "zh-CN": {
                  singular: "在{/LINK}结账{LINK}时使用此代码，可为下一年的 {ACCOUNT_TYPE} 节省 20%。"
                }
              }
            })
          }), (0, _v1.jsx)(_v20, {}), (0, _v1.jsx)(_v13, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Or turn off your auto-renew here",
              dictionary: {
                es: {
                  singular: "O puedes desactivar la renovación automática aquí"
                },
                "de-DE": {
                  singular: "Oder deaktiviere hier einfach die automatische Verlängerung."
                },
                "fr-FR": {
                  singular: "Ou bien, désactivez le renouvellement automatique ici"
                },
                "ja-JP": {
                  singular: "またはここで自動更新をオフにする"
                },
                "ko-KR": {
                  singular: "또는 자동 갱신을 여기서 해제하세요"
                },
                "pt-BR": {
                  singular: "Ou desative sua renovação automática aqui"
                },
                "zh-CN": {
                  singular: "或者在这里关闭自动续订"
                }
              }
            })
          }), (0, _v1.jsx)(_v23.Text, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Your account with expire after {DATE}.",
              replacements: {
                DATE: this.state.expirationDate
              },
              dictionary: {
                es: {
                  singular: "Tu cuenta caducará a partir del {DATE}."
                },
                "de-DE": {
                  singular: "Dein Konto wird am {DATE} ablaufen."
                },
                "fr-FR": {
                  singular: "Votre compte expirera après le {DATE}."
                },
                "ja-JP": {
                  singular: "お客様のアカウントは {DATE} 付けで有効期限切れとなります。"
                },
                "ko-KR": {
                  singular: "회원님의 계정은 {DATE} 이후 만료됩니다."
                },
                "pt-BR": {
                  singular: "Sua conta vencerá depois de {DATE}."
                },
                "zh-CN": {
                  singular: "您的账户将在 {DATE} 后过期。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)("footer", {
          children: [(0, _v1.jsx)(_v11.Button, {
            disabled: this.state.isOptOutSubmitting,
            onClick: () => {
              (0, _v24.default)("promoCancel", {
                ref_path: window.location.pathname,
                target: "/settings"
              }), window.location.href = "/settings";
            },
            children: (0, _v9.translate)({
              singular: "Return to settings",
              dictionary: {
                es: {
                  singular: "Volver a la configuración "
                },
                "de-DE": {
                  singular: "Zurück zu Einstellungen"
                },
                "fr-FR": {
                  singular: "Revenir aux paramètres"
                },
                "ja-JP": {
                  singular: "設定に戻る"
                },
                "ko-KR": {
                  singular: "설정으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para configurações"
                },
                "zh-CN": {
                  singular: "返回设置"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Button, {
            loading: this.state.isOptOutSubmitting,
            variant: "outline",
            onClick: () => {
              (0, _v24.default)("promoContinue", {
                ref_path: window.location.pathname,
                target: "/settings/billing/membership_plan/optout"
              }), this.handleSubmit();
            },
            children: (0, _v9.translate)({
              singular: "Turn off auto-renew",
              dictionary: {
                es: {
                  singular: "Desactivar la renovación automática"
                },
                "de-DE": {
                  singular: "Automatische Verlängerung deaktivieren"
                },
                "fr-FR": {
                  singular: "Désactiver le renouvellement automatique"
                },
                "ja-JP": {
                  singular: "自動更新をオフにする"
                },
                "ko-KR": {
                  singular: "자동 갱신 해제"
                },
                "pt-BR": {
                  singular: "Desativar renovação automática"
                },
                "zh-CN": {
                  singular: "关闭自动续订"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v23.Text, {
          centered: !0,
          className: "legal",
          children: (0, _v9.translate)({
            singular: "*This offer is made to selected Vimeo members only. To redeem this offer, you must purchase a subscription and provide a valid promotional code on the checkout page. You may not apply this offer to more than one purchase or combine it with other offers.",
            dictionary: {
              es: {
                singular: "*Oferta disponible solo para miembros seleccionados de Vimeo. Para canjearla, debes adquirir una suscripción y proporcionar un código promocional válido en la página de compra. No podrás aplicar esta oferta a más de una compra ni combinarla con otras ofertas."
              },
              "de-DE": {
                singular: "*Dieses Angebot gilt nur für ausgewählte Vimeo-Mitglieder. Du musst ein Abonnement erwerben und einen Aktionscode auf der Checkout-Seite angeben, um den Rabatt einzulösen. Dieses Angebot bezieht sich nur auf einen Einkauf und kann nicht mit anderen Angeboten kombiniert werden."
              },
              "fr-FR": {
                singular: "*Cette offre n'est applicable seulement qu'à certains membres Vimeo sélectionnés. Afin d'utiliser cette offre, vous devez acheter un abonnement et fournir un code promotionnel valide lors du paiement. Vous ne pouvez pas appliquer cette offre à plus d'un achat ou la combiner avec d'autres offres."
              },
              "ja-JP": {
                singular: "＊この割引は特定のVimeo会員にのみ適用されます。この割引を適用するにはサブスクリプションを購入し、お支払い時に有効なプロモコードを入力する必要があります。この割引は一つの購入にのみ適用可能で、他の割引と併用することはできません。"
              },
              "ko-KR": {
                singular: "*이 혜택은 선택된 Vimeo 회원에게만 제공됩니다. 이 혜택을 이용하려면 유료로 구독하셔야 하며 결제 페이지에서 유효한 프로모션 코드를 입력하세요. 해당 할인 혜택을 두 번 이상의 구매에 적용하거나 다른 혜택과 중복해서 사용할 수 없습니다."
              },
              "pt-BR": {
                singular: "* Esta oferta é feita apenas para assinantes selecionados do Vimeo. Para receber essa oferta você deve comprar uma assinatura e fornecer um código promocional válido na página de finalização da compra. Não é permitido aplicar esta oferta a mais de uma compra ou combiná-la com outras ofertas."
              },
              "zh-CN": {
                singular: "*此优惠仅提供给所选的 Vimeo 会员。要兑换此优惠，您必须购买订阅，并在结账页面提供有效的促销代码。此优惠不可应用于多次购买，也不可与其他优惠叠加使用。"
              }
            }
          })
        })]
      });
    }
  }
  let _v26 = (0, _v6.default)(_v17.Page).withConfig({
    displayName: "Offer__PageStyled",
    componentId: "sc-6f59f05e-0"
  })`
  width: 100%;
  max-width: 500px;

  section {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-content: stretch;
    align-content: stretch;

    @media (min-width: ${_v18.TABLET}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  hr {
    margin-top: 0.25rem;
    margin-bottom: 1.5rem;
  }

  .redeem-container {
    display: flex;
    margin-bottom: 1.5rem;
  }

  .centered {
    margin: 0 auto;
  }

  .legal {
    color: #8498a4;
    margin-top: 3rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
`;
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = _v0 => {
    let _v1 = (0, _v2.useContext)(_v30.ViewerContext);
    return (0, _v1.jsx)(_v25, {
      ..._v0,
      viewer: _v1
    });
  };
  _v32.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v28.RainbowRibbon, {}), (0, _v1.jsx)(_v31.ReactRouterLayout, {
      path: "/cancel/offer",
      children: _v0
    }), (0, _v1.jsx)(_v29.MinimalFooterLayout, {})]
  }), (0, _v27.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v32], 0);
}